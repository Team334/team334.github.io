"use client";
import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/components/cn";

interface BoxesProps {
    className?: string;
    rows?: number;
    cols?: number;
    boxSize?: number;
    colors?: string[];
}

export const BoxesCore = ({
    className,
    rows = 150,
    cols = 100,
    boxSize = 8,
    colors = [
        "--sky-300",
        "--pink-300",
        "--green-300",
        "--yellow-300",
        "--red-300",
        "--purple-300",
        "--blue-300",
        "--indigo-300",
        "--violet-300",
    ],
    ...rest
}: BoxesProps) => {
    const getRandomColor = useCallback(() => {
        return colors[Math.floor(Math.random() * colors.length)];
    }, [colors]);

    const rowsArray = useMemo(() => new Array(rows).fill(1), [rows]);
    const colsArray = useMemo(() => new Array(cols).fill(1), [cols]);

    const boxVariants = {
        hover: {
            backgroundColor: "var(var(--random-color))",
            transition: { duration: 0 },
        },
    };

    return (
        <div
            style={{
                transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
            }}
            className={cn(
                "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
                className
            )}
            {...rest}
        >
            {rowsArray.map((_, i) => (
                <motion.div
                    key={`row-${i}`}
                    className={`w-${boxSize} h-${boxSize/2} border-l border-slate-700 relative`}
                >
                    {colsArray.map((_, j) => (
                        <motion.div
                            key={`col-${j}`}
                            variants={boxVariants}
                            whileHover="hover"
                            custom={{ color: getRandomColor() }}
                            className={`w-${boxSize} h-${boxSize/2} border-r border-t border-slate-700 relative`}
                        >
                            {j % 2 === 0 && i % 2 === 0 && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`absolute h-${boxSize-2} w-${boxSize+2} -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m6-6H6"
                                    />
                                </svg>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export const Boxes = React.memo(BoxesCore);
