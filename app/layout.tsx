import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const raleway = Raleway({ variable: "--font-rale-way", subsets: ["latin"], weight: ["400", "700"] });



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
    "logo": {
    "@type": "ImageObject",
    "url": "https://www.cabinetrybywettach.com/cbw_logo_blue.png"
    }
  }
}




  return (
    <html lang="en">
      <head>
        {/* Schema */}

        <link rel="icon" href="/cbw_logo_blue.png" sizes="any" />
        <link rel="apple-touch-icon" href="/cbw_logo_blue.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PD57RVHHRQ"
          strategy="afterInteractive"
        />
        <Script
          id="ga-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PD57RVHHRQ');
            `,
          }}
        />
      </head>
      <body
        className={`${raleway.variable} antialiased`}
      >
        {children}
        <Script
          src="https://cbw-rag-frontend.vercel.app/widget"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
