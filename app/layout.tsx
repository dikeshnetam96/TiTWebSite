import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/Hoc/Provider";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import ScrollBackgroundEnhancer from "@/components/ScrollBackgroundEnhancer";
import ScrollColorAnimator from "@/components/ScrollColorAnimator";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TiT Pvt. Ltd. | Product and IT Solutions",
    template: "%s | TiT Pvt. Ltd.",
  },
  description:
    "TiT Pvt. Ltd. delivers product engineering, data engineering, cloud, and AI/ML solutions for modern businesses.",
  keywords: [
    "product engineering",
    "data engineering",
    "cloud solutions",
    "AI ML services",
    "IT consulting",
    "TiT Pvt. Ltd.",
  ],
  openGraph: {
    title: "TiT Pvt. Ltd. | Product and IT Solutions",
    description:
      "Build scalable digital products with TiT's engineering, cloud, and AI/ML expertise.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TiT Pvt. Ltd. | Product and IT Solutions",
    description:
      "Build scalable digital products with TiT's engineering, cloud, and AI/ML expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`} suppressHydrationWarning>
        <ScrollBackgroundEnhancer />
        <ScrollColorAnimator />
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}

