import {Boxes} from "@/components/aceternity/ui/boxes";
import {cn} from "@/components/cn"
import React from "react";

export default function NotFound() {


    return (
        <div
            className="h-[52rem] w-full overflow-hidden bg-black relative flex flex-col items-center justify-center rounded-lg space-y-3">
            <Boxes/>
            <h1 className={cn("md:text-7xl text-4xl text-white relative z-20 main flex flex-row text-center")}>
                404 Not Found
            </h1>
        </div>
    );
}