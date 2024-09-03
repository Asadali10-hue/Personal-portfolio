import { Inter } from "next/font/google";
import "./globals.css";
import { DM_Sans, Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Nav } from "./_components/navigation/Nav";
import CustomGlobalLayout from "./_components/CustomGlobalLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Refine fram",
  description:
    "we grow brands, We help entrepreneurs and creators build, grow, and monetize their brands on Instagram and YouTube.",
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
    <html lang="en" suppressHydrationWarning >
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
