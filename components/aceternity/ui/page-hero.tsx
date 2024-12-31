"use client"
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export const ImagesSlider = React.memo(({
    images,
    children,
    overlay = true,
    overlayClassName,
    className,
    autoplay = true,
    direction = "up",
    interval = 5000,
}: {
    images: string[];
    children: React.ReactNode;
    overlay?: boolean;
    overlayClassName?: string;
    className?: string;
    autoplay?: boolean;
    direction?: "up" | "down";
    interval?: number;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Optimize image preloading with batch loading
    useEffect(() => {
        const preloadImages = async () => {
            try {
                // Load images in batches of 3
                const batchSize = 3;
                const loaded: string[] = [];
                
                for (let i = 0; i < images.length; i += batchSize) {
                    const batch = images.slice(i, i + batchSize);
                    const loadPromises = batch.map(src => {
                        return new Promise((resolve, reject) => {
                            const img = new Image();
                            img.src = src;
                            img.onload = () => resolve(src);
                            img.onerror = reject;
                        });
                    });

                    const loadedBatch = await Promise.all(loadPromises);
                    loaded.push(...loadedBatch as string[]);
                }

                setLoadedImages(loaded);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load images:", error);
                setIsLoading(false);
            }
        };

        preloadImages();
    }, [images]);

    // Optimize animation performance
    const slideVariants = {
        initial: {
            scale: 0.8,  // Reduced scale change
            opacity: 0,
            rotateX: 30,  // Reduced rotation
        },
        visible: {
            scale: 1,
            rotateX: 0,
            opacity: 1,
            transition: {
                duration: 0.8,  // Increased duration
                ease: [0.4, 0.0, 0.2, 1], // Optimized easing
            },
        },
        exit: {
            opacity: 0,
            y: direction === "up" ? "-100%" : "100%",
            transition: { duration: 0.8 },  // Increased duration
        },
    };

    // Use requestAnimationFrame for smoother transitions
    const handleImageNavigation = useCallback((direction: 'next' | 'prev') => {
        requestAnimationFrame(() => {
            setCurrentIndex(prevIndex => {
                if (direction === 'next') {
                    return prevIndex + 1 === images.length ? 0 : prevIndex + 1;
                }
                return prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1;
            });
        });
    }, [images.length]);

    useEffect(() => {
        let autoplayInterval: NodeJS.Timeout | undefined;
        
        if (autoplay && !isLoading) {
            autoplayInterval = setInterval(() => {
                handleImageNavigation('next');
            }, interval);
        }

        return () => {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
        };
    }, [autoplay, handleImageNavigation, interval, isLoading]);

    if (isLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <div className="animate-pulse bg-gray-800 h-full w-full" />
            </div>
        );
    }

    return (
        <div
            className={cn("h-screen w-full flex items-center justify-center relative overflow-hidden", className)}
            style={{ perspective: "1000px" }}
        >
            {children}
            {overlay && (
                <div className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)} />
            )}

            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={loadedImages[currentIndex]}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                    className="absolute inset-0 h-screen w-full object-cover object-center"
                    alt={`Slide ${currentIndex + 1}`}
                    loading="lazy"
                    style={{
                        willChange: 'transform',  // Optimize for animations
                        backfaceVisibility: 'hidden',  // Prevent flickering
                    }}
                />
            </AnimatePresence>
        </div>
    );
});

ImagesSlider.displayName = "ImagesSlider";