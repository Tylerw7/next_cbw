"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { motion } from "motion/react"

const locations = [
  "Anna Maria Island",
  "Lido Key",
  "Siesta Key",
  "Longboat Key",
  "Bradenton",
  "Manatee County",
  "Lakewood Ranch",
]

const HomeServiceAreas = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-slate-100 shadow-xl shadow-slate-100">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative min-h-[360px] lg:min-h-[560px]"
          >
            <Image
              src="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124122.jpg"
              fill
              alt="Cabinetry by Wettach service area"
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1e3a5f]/20" />
            {/* Location badge pinned to image */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-sm shadow-md">
              <MapPin size={14} className="text-[#2a5f82]" />
              <span className="text-slate-900 text-sm font-semibold tracking-wide">Sarasota, FL</span>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center bg-slate-900 px-10 md:px-14 py-14 gap-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-[0.22em] uppercase">
                Service Areas
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight">
                Serving the{" "}
                <span className="text-amber-400">Sarasota region</span>{" "}
                and beyond.
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Based in Sarasota, FL, we craft custom cabinetry for homes and businesses across the greater area — delivering expert craftsmanship and personalized service right to your door.
              </p>
            </div>

            {/* Location pills */}
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="text-xs font-medium text-slate-300 border border-slate-700 hover:border-[#2a5f82] hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-sm tracking-wide"
                >
                  {loc}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link href="/contact-us">
                <Button className="group bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs tracking-widest uppercase rounded-sm px-7 py-4 h-auto transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/20">
                  Find More Locations
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HomeServiceAreas