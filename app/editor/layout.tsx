"use client"

import React from "react";

export default function EditorLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {


    return (
        <section>
            <div className="flex justify-center gap-4 mt-8 md:mt-10">
                {children}
            </div>
        </section>
    );
}
