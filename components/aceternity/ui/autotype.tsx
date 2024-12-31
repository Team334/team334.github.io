"use client";
import { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { cn } from "@/components/cn";

export const TextGenerateEffect = ({
    words,
    className,
    // duration = 0.3,
}: {
    words: string;
    className?: string;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { once: true, amount: 0.1 });
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
                    type: "spring",
                    stiffness: 200,
                }
            );
        }
    }, [isInView, animate]);

    return (
        <div ref={scope} className={cn("font-bold", className)}>
            {wordsArray.map((word, idx) => (
                <motion.span
                    key={word + idx}
                    className="opacity-0 inline-block"
                    style={{ 
                        transform: "translateY(5px)",
                        marginRight: "0.25em" 
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};
