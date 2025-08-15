import { Outfit, Ovo ,Poppins} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight:["400","500","600","700"]
});

const ovo = Ovo({
 
  subsets: ["latin"],weight:["400"]
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // you can add more weights like "500", "700" if needed
});

export const metadata = {
  title: "DevMuhammadUmar",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
