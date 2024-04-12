"use server"

import React from "react";

export default async function TeamLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex justify-center gap-4">
            {children}
        </section>
    );
}
