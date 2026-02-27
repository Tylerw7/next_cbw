"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { motion } from "motion/react"
import { ArrowRight, ChevronDown } from "lucide-react"

const Hero = () => {
  return (
    <div
      className="relative overflow-hidden w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: 'url("https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20200605_142432.jpg")' }}
    >
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Decorative side accent line */}
      <motion.div
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-px bg-white/20 hidden md:block"
        initial={{ height: 0 }}
        animate={{ height: "40%" }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-start md:items-start justify-center px-6 md:px-20 lg:px-32 max-w-7xl w-full mx-auto">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-10 bg-amber-400" />
          <span className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase">
            Handcrafted in the Hudson Valley
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-white font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] tracking-tight max-w-3xl"
        >
          Cabinets Built
          <br />
          <span className="text-amber-400">For Your Life.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="text-white/75 text-base md:text-lg mt-6 max-w-md leading-relaxed"
        >
          Custom cabinetry designed around your space, your style, and the way you live — built to last a lifetime.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10"
        >
          <Link href="/contact-us">
            <Button className="group bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm tracking-widest uppercase rounded-sm px-8 py-4 h-auto transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/30">
              Get a Free Quote
              <ArrowRight size={15} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
          <Link href="/kitchen">
            <Button
              variant="ghost"
              className="text-white hover:cursor-pointer hover:text-white hover:bg-white/10 border border-white/30 hover:border-white/50 font-medium text-sm tracking-widest uppercase rounded-sm px-8 py-4 h-auto transition-all duration-200"
            >
              View Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
          className="flex items-center gap-8 md:gap-12 mt-16 pt-10 border-t border-white/15"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "100+", label: "Projects Complete" },
            { value: "100%", label: "Custom Built" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-white font-bold text-2xl md:text-3xl tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/50 text-xs font-medium tracking-widest uppercase mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero