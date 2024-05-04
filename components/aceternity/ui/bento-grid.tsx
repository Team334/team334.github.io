import {cn} from "@/components/cn";
import React from "react";

export const BentoGrid = React.memo(({
                                         className,
                                         children,
                                     }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
});

BentoGrid.displayName = "Bento Grid"

export const BentoGridItem = React.memo(({
                                             className,
                                             title,
                                             description,
                                             header,
                                         }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: string | React.ReactNode;
}) => {

    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="main font-bold text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="secondary font-normal text-xs text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
});

BentoGridItem.displayName = "Bento Grid Item";
