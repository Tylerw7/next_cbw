import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabinetry by Wettach",
  description: "A custome cabinetry website that displays the services that Cabinetry By Wettach offer such as kitchen cabinets, bathroom cabinets, closet systems and much more.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // ### Website Schema ### //
const globalSchema = {
  "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cabinetry By Wettach",
    "url": "https://www.cabinetrybywettach.com/",
    "publisher": {
    "@type": "Organization",
    "name": "Cabinetry By Wettach",
    //"logo": {
    //"@type": "ImageObject",
    //"url": "https://www.mywebsite.com/kitchen2.png"
    //}
  }
}




  return (
    <html lang="en">
      <head>
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PD57RVHHRQ"
        ></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PD57RVHHRQ');
          `,
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
