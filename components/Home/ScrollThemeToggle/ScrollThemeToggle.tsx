import React from "react";
import Home from "@/components/Home/Home";
import ThemePreview from "@/components/Home/ThemePreview/ThemePreview";
import ScrollThemeToggler from "@/components/ScrollThemeToggler";

export default function HomePage() {
    return (
        <>
            {/* Flips global theme (adds/removes .dark on <html>) as full-screen sections change */}
            <ScrollThemeToggler />

            {/* Phone-like preview box that also flips theme as you scroll inside it */}
            <ThemePreview />

            {/* Your existing homepage */}
            <Home />
        </>
    );
}
