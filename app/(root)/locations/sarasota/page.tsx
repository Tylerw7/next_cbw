"use client";


import SarasotaHero from '@/components/locations/sarasota/sarasota_hero'
import React from 'react'
import Script from 'next/script';
import CallToAction from '@/components/locations/sarasota/call-to-action';
import { ArrowRight } from 'lucide-react';


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
    <CallToAction />

    <div className='relative w-[400px] h-[500px] bg-blue-200 flex flex-col ml-[50px] mb-[50px]'>

      <div className='w-[400px] h-[280px] bg-amber-500'>

      </div>

      <div className='absolute left-1/2 top-[280px] -translate-x-1/2 -translate-y-1/2 bg-purple-600 w-[340px] h-[70px]'>
        
      </div>

      <div className='w-[400px] h-[220px] bg-green-300'>
        
      </div>

      <button className='absolute left-[170px] top-[472px] rounded-full bg-yellow-400 w-[50px] h-[50px] flex justify-center items-center'><ArrowRight /></button>

    </div>
    

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