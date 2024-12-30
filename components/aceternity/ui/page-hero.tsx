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
    interval = 3000,
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

    const handleImageNavigation = useCallback((direction: 'next' | 'prev') => {
        setCurrentIndex(prevIndex => {
            if (direction === 'next') {
                return prevIndex + 1 === images.length ? 0 : prevIndex + 1;
            }
            return prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1;
        });
    }, [images.length]);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            try {
                const loadPromises = images.map(src => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve(src);
                        img.onerror = reject;
                    });
                });

                const loaded = await Promise.all(loadPromises);
                setLoadedImages(loaded as string[]);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load images:", error);
                setIsLoading(false);
            }
        };

        preloadImages();
    }, [images]);

    // Handle keyboard navigation and autoplay
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
              handleImageNavigation('next');
            } else if (event.key === "ArrowLeft") {
                     handleImageNavigation('prev');
                   }
        };

        window.addEventListener("keydown", handleKeyDown);

        let autoplayInterval: NodeJS.Timeout | undefined;
        if (autoplay && !isLoading) {
            autoplayInterval = setInterval(() => {
                handleImageNavigation('next');
            }, interval);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (autoplayInterval) {
              clearInterval(autoplayInterval);
            }
        };
    }, [autoplay, handleImageNavigation, interval, isLoading]);

    const slideVariants = {
        initial: {
            scale: 0,
            opacity: 0,
            rotateX: 45,
        },
        visible: {
            scale: 1,
            rotateX: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1.0],
            },
        },
        exit: {
            opacity: 1,
            y: direction === "up" ? "-150%" : "150%",
            transition: { duration: 1 },
        },
    };

    if (isLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <div className="animate-pulse bg-gray-800 h-full w-full" />
            </div>
        );
    }

    return (
        <div
            className={`h-screen w-full flex items-center justify-center ${className}`}
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
                />
            </AnimatePresence>
        </div>
    );
});

ImagesSlider.displayName = "ImagesSlider";