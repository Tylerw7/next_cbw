'use client'

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, ArrowRight } from "lucide-react"

const currentYear = new Date().getFullYear()

const quickLinks = [
  { href: "/kitchen", label: "Kitchens" },
  { href: "/closets", label: "Closet Systems" },
  { href: "/out-door-cabinets", label: "Outdoor Cabinets" },
  { href: "/entertainment-systems", label: "Entertainment Systems" },
  { href: "/work-with-us", label: "Hiring" },
  { href: "/contact-us", label: "Contact" },
]

const aboutLinks = [
  { href: "/about", label: "Services" },
  { href: "/about", label: "Locations" },
  { href: "/about", label: "About Us" },
]

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/cbw_logo_blue.png"
              width={48}
              height={48}
              alt="Cabinetry by Wettach logo"
              className="object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight text-white">
                Cabinetry By Wettach
              </span>
              <span className="text-[0.6rem] font-medium tracking-[0.18em] uppercase text-slate-500">
                Custom Cabinetry
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Custom cabinetry built with precision, premium materials, and timeless design — crafted for your home and your life.
          </p>
          {/* Amber accent line */}
          <div className="h-px w-12 bg-amber-400" />
        </div>

        {/* About links */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">
              About
            </span>
            <div className="h-px w-8 bg-slate-700" />
          </div>
          <nav className="flex flex-col gap-3">
            {aboutLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-amber-400" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Quick Links
            </span>
            <div className="h-px w-8 bg-slate-700" />
          </div>
          <nav className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-amber-400" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="h-px w-8 bg-slate-700" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#2a5f82]/20 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={14} className="text-[#5a8ac4]" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-xs font-medium tracking-wider uppercase mb-1">Address</span>
                <span className="text-slate-300 text-sm font-medium leading-snug">
                  1746 10th Way Unit B<br />Sarasota, FL 34236
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#2a5f82]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Phone size={14} className="text-[#5a8ac4]" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-xs font-medium tracking-wider uppercase mb-1">Phone</span>
                <a
                  href="tel:9412600483"
                  className="text-slate-300 text-sm font-medium hover:text-white transition-colors duration-200"
                >
                  941-260-0483
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs tracking-wide">
            © {currentYear} Cabinetry By Wettach. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Sarasota, FL · Custom Cabinetry
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer