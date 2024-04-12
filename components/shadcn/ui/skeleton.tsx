import {cn} from "@/components/cn"
import React from "react";

function Skeleton({
                      className,
                      ...props
                  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-[#C5C5C5]", className)}
            {...props}
        />
    )
}

export {Skeleton}
