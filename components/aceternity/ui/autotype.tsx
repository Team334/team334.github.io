"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/components/cn";

export const TextGenerateEffect = ({
    words,
    className,
    delay = 0.2,
    duration = 2,
}: {
    words: string;
    className?: string;
    delay?: number;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const wordsArray = words.split(" ");

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    opacity: 1,
                    y: 0,
                },
                {
                    duration,
                    delay: stagger(delay),
                }
            );
        }
    }, [isInView, animate, delay, duration]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        className="opacity-0 inline-block"
                        style={{ 
                            transform: "translateY(20px)",
                            display: "inline-block",
                            marginRight: "0.25em" 
                        }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <div ref={ref} className={cn("font-bold", className)}>
            <div className="mt-4">
                {renderWords()}
            </div>
        </div>
    );
};
