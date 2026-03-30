"use client"

import * as React from "react"
import { useEffect, useState, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const dropdownItems = [
  { href: "/closets", title: "Closet Systems", desc: "Solutions to maximize space and stay organized." },
  { href: "/entertainment-systems", title: "Entertainment Systems", desc: "Built-ins for TVs, media gear, and display areas." },
  { href: "/out-door-cabinets", title: "Outdoor Cabinets", desc: "Weather-resistant cabinetry for outdoors." },
]

const serviceAreas = [
  { href: "/locations/sarasota", label: "Sarasota" },
]

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/kitchen", label: "Kitchens" },
  { href: "/closets", label: "Closets" },
  { href: "/out-door-cabinets", label: "Outdoor Cabinets" },
  { href: "/entertainment-systems", label: "Entertainment Systems" },
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact" },
]

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const lastScrollY = useRef(0)
  const serviceRef = useRef<HTMLDivElement>(null)
  const serviceTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    const checkScreen = () => setIsMobile(window.innerWidth <= 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      if (currentY < 50) {
        setVisible(true)
      } else if (currentY > lastScrollY.current + 4) {
        setVisible(false)
      } else if (currentY < lastScrollY.current - 4) {
        setVisible(true)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) {
        setServiceOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleServiceEnter = useCallback(() => {
    if (serviceTimeout.current) clearTimeout(serviceTimeout.current)
    setServiceOpen(true)
  }, [])

  const handleServiceLeave = useCallback(() => {
    serviceTimeout.current = setTimeout(() => setServiceOpen(false), 150)
  }, [])

  if (!mounted) return null

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          visible ? "translate-y-0" : "-translate-y-full",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100"
            : "bg-white border-b border-slate-200",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between gap-6">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/cbw_logo_blue.png"
              height={52}
              width={52}
              alt="Cabinetry by Wettach logo"
              className="object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                Cabinetry By Wettach
              </span>
              <span className="text-[0.6rem] font-medium tracking-[0.18em] uppercase text-slate-400">
                Custom Cabinetry
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <>
              <nav className="flex items-center gap-1">

                {/* ── Radix NavigationMenu for Home & Kitchens ── */}
                <NavigationMenu>
                  <NavigationMenuList className="gap-1">

                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="text-[18px] font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md hover:bg-slate-50"
                        >
                          Home
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-[18px] font-medium text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50 data-[state=open]:bg-slate-50 px-3 py-2 h-auto">
                        Kitchens
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[500px] grid grid-cols-[.75fr_1fr] gap-2 p-3">
                          <li className="row-span-3 rounded-lg overflow-hidden border border-slate-100">
                            <NavigationMenuLink asChild>
                              <Link href="/kitchen" className="flex flex-col h-full group">
                                <Image
                                  src="/images/kitchen.jpg"
                                  height={140}
                                  width={200}
                                  alt="kitchen"
                                  className="w-full h-[140px] object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-3 bg-slate-50 flex-1">
                                  <h2 className="font-bold text-slate-900 text-base">
                                    Custom Kitchens
                                  </h2>
                                  <p className="text-xs text-slate-500 mt-0.5">
                                    See our custom cabinet line.
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          {dropdownItems.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="block px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                                >
                                  <h2 className="text-sm font-semibold text-slate-900">
                                    {item.title}
                                  </h2>
                                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                                    {item.desc}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                  </NavigationMenuList>
                </NavigationMenu>

                {/* ── Custom dropdown for Service Areas ───────── */}
                <div
                  ref={serviceRef}
                  className="relative"
                  onMouseEnter={handleServiceEnter}
                  onMouseLeave={handleServiceLeave}
                >
                  <button
                    onClick={() => setServiceOpen((prev) => !prev)}
                    className={[
                      "flex items-center gap-1 text-[18px] font-medium px-3 py-2 rounded-md transition-colors cursor-pointer",
                      serviceOpen
                        ? "text-slate-900 bg-slate-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    Service Areas
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={[
                        "transition-transform duration-200 text-slate-400",
                        serviceOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>

                  <div
                    className={[
                      "absolute left-0 top-full mt-1.5 min-w-[180px] bg-white rounded-lg border border-slate-200 shadow-lg py-1.5 transition-all duration-200 origin-top z-[60]",
                      serviceOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none",
                    ].join(" ")}
                  >
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        onClick={() => setServiceOpen(false)}
                        className="block px-4 py-2.5 text-md font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                      >
                        {area.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* ── Remaining plain links ──────────────────── */}
                <Link
                  href="/about"
                  className="text-[18px] font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md hover:bg-slate-50"
                >
                  About
                </Link>

                <Link
                  href="/contact-us"
                  className="text-[18px] font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md hover:bg-slate-50"
                >
                  Contact
                </Link>

              </nav>

              <Link href="/contact-us">
                <Button className="bg-slate-900 hover:bg-slate-700 text-amber-400 font-semibold text-sm tracking-widest uppercase rounded-sm px-6 py-2.5 h-auto transition-all duration-200 hover:-translate-y-px">
                  Get a Quote
                </Button>
              </Link>
            </>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="p-2 rounded-md hover:bg-slate-100 transition-colors hover:cursor-pointer"
                >
                  <Menu size={22} strokeWidth={1.75} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="text-xl font-bold tracking-tight text-slate-900">
                    Cabinetry By Wettach
                  </SheetTitle>
                  <SheetDescription className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-slate-400">
                    Custom Cabinetry
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col p-3">
                  {mobileLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-[1.2rem] font-medium text-slate-800 py-3 border-b border-slate-100 hover:text-blue-600 hover:pl-1.5 transition-all duration-150"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/contact-us" className="mt-6 hover:cursor-pointer">
                    <Button className="w-full bg-slate-900 hover:bg-slate-700 hover:cursor-pointer text-amber-400 font-semibold text-xs tracking-widest uppercase rounded-sm h-11">
                      Get a Quote
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}

        </div>
      </header>

      {/* Spacer for fixed navbar height */}
      <div className="h-[72px]" />
    </>
  )
}

export default NavBar