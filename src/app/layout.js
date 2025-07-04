import { Inter } from "next/font/google";
import "./globals.css";
import { DM_Sans, Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import CustomGlobalLayout from "./_components/CustomGlobalLayout";

export const metadata = {
  metadataBase: new URL('https://refine-sepia.vercel.app/'),
  title: "Visual Jungle",
  description:
    "we grow brands, We help entrepreneurs and creators build, grow, and monetize their brands on Instagram and YouTube.",
    openGraph:{
      images: './logo.png'
    }
};

const sans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  variable: "--sans",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={twMerge(
          sans.variable,
          poppins.variable,
          "font-second bg-black"
        )}
      >
        <CustomGlobalLayout>{children}</CustomGlobalLayout>
      </body>
    </html>
  );
}
