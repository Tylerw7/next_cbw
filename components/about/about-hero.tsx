import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const AboutHero = () => {
  return (
    <div
      className="relative w-full min-h-[70vh] bg-cover bg-center flex flex-col justify-end"
      style={{ backgroundImage: 'url("https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124122.jpg")' }}
    >
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent" />

      {/* Content anchored to bottom */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 pb-16 md:pb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">

        {/* Left — text */}
        <div className="flex flex-col gap-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-[0.22em] uppercase">
              Our Story
            </span>
          </div>

          <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none">
            About Us
          </h1>

          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
            Family-owned and craft-driven — building beautiful, lasting cabinetry for homes across the Sarasota region for over 15 years.
          </p>
        </div>

        {/* Right — CTA */}
        <div className="shrink-0">
          <Link href="/contact-us">
            <Button className="group bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs tracking-widest uppercase rounded-sm px-8 py-4 h-auto transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/30">
              Get a Free Quote
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>

      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-400/60 via-amber-400/20 to-transparent" />
    </div>
  )
}

export default AboutHero