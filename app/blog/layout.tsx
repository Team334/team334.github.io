"use client"

import React from "react";

export default function BlogLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {


    return (
        <section>
            <div className="flex justify-center gap-4 py-8 md:py-10">
                {children}
            </div>
        </section>
    );
}
