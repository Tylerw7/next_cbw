"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

interface ServiceCardProps {
  image: string
  title: string
  description: string
  link: string
  index: number
}

const services = [
  {
    image: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20200605_142432.jpg",
    title: "Custom Kitchens",
    description: "Design your dream kitchen with custom cabinets crafted to reflect your style and elevate your space.",
    link: "/kitchen",
  },
  {
    image: "https://cloudphotosone.s3.us-east-1.amazonaws.com/closet.jpg",
    title: "Closet Systems",
    description: "Custom built to fit your space, style, and lifestyle — maximizing every inch with precision.",
    link: "/closets",
  },
  {
    image: "/images/outdoor.jpg",
    title: "Outdoor Cabinets",
    description: "Weather-resistant cabinetry crafted for style, durability, and outdoor entertaining.",
    link: "/out-door-cabinets",
  },
  {
    image: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230906_105706.jpg",
    title: "Built-In Systems",
    description: "Custom entertainment and built-in systems where precision craftsmanship meets your vision.",
    link: "/entertainment-systems",
  },
  {
    image: "https://cloudphotosone.s3.us-east-1.amazonaws.com/finishes3.jpg",
    title: "Yorktowne Dealer",
    description: "Authorized dealer offering a wide selection of Yorktowne cabinet styles and finishes.",
    link: "/kitchen",
  },
  {
    image: "https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20180919_105533.jpg",
    title: "Work For Us",
    description: "Join our team of skilled custom cabinet builders and be part of something crafted with pride.",
    link: "/work-with-us",
  },
]

const ServiceCard = ({ image, title, description, link, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.1 }}
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        {/* Subtle blue tint overlay on hover */}
        <div className="absolute inset-0 bg-[#1e3a5f]/0 group-hover:bg-[#1e3a5f]/20 transition-colors duration-500" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Accent line */}
        <div className="h-0.5 w-8 bg-amber-400 group-hover:w-14 transition-all duration-300" />

        <h3 className="font-bold text-slate-900 text-xl tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* CTA row */}
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-[#2a5f82] font-semibold text-sm tracking-wide mt-2 group/link"
        >
          <span className="border-b border-[#2a5f82]/30 group-hover/link:border-[#2a5f82] transition-colors duration-200 pb-px">
            Learn More
          </span>
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>
    </motion.div>
  )
}

export function AppleCardsCarouselDemo() {
  return (
    <section className="w-full bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-500 text-xs font-semibold tracking-[0.22em] uppercase">
                What We Build
              </span>
            </div>
            <h2 className="text-slate-900 font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Our Services
            </h2>
          </div>

          <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-r from-[#2a5f82]/40 to-transparent self-center mb-2" />

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
            Every project is custom — built around your space, your needs, and your vision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}