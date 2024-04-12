import React from "react";

export default function SponsorLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-1">
            {children}
        </section>
    );
}
