"use client";


import SarasotaHero from '@/components/locations/sarasota/sarasota_hero'
import React from 'react'
import Script from 'next/script';
import CallToAction from '@/components/locations/sarasota/call-to-action';
import SarasotaAboutSection from '@/components/locations/sarasota/sarasota-about-section';
import ServicesSection from '@/components/locations/sarasota/service-section-sarasota';
import GallerySection from '@/components/locations/sarasota/gallery-ssarasota';
import FAQSection from '@/components/locations/sarasota/faq-sarasota';
import QuickContactBar from '@/components/locations/sarasota/quick-contact-bar-sarasota';


const sarasota = () => {

    // Location Page Schema
    const sarasotaSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Cabinetry By Wettach",
        image: "/image/cbw_logo_blue.png",
        url: "https://www.cabinetrybywettach.com/",
        telephone: "+1-941-232-2817",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1746 10th Way Unit B",
          addressLocality: "Sarasota",
          addressRegion: "FL",
          postalCode: "34236",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "27.34607594368803", 
          longitude: "-82.53442880044138", 
        },
        areaServed: {
          "@type": "City",
          name: "Sarasota",
        },
        serviceType: "Custom Kitchen & Bathroom Cabinets",
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Cabinetry in Sarasota",
            description:
              "Cabinetry By Wettach in Sarasota, FL provides custom cabinetry for kitchens, bathrooms, and other areas, including built-in closet systems and entertainment centers. Expert craftsmanship and tailored designs bring style, organization, and functionality to every home.",
            areaServed: {
              "@type": "City",
              name: "Sarasota",
            },
          },
        },
      };
    




      


  return (
    <>
    <SarasotaHero />
    <SarasotaAboutSection />
    <ServicesSection />
    <GallerySection />
    <FAQSection />
    <CallToAction />
    <QuickContactBar />

    

    <Script 
       id="springfield-schema"
       type="application/ld+json"
       strategy="afterInteractive"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(sarasotaSchema) }}
        />
    </>
  )
}

export default sarasota