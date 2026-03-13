import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, Phone } from "lucide-react"

const AboutContact = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="relative bg-slate-900 rounded-sm px-10 md:px-20 py-16 md:py-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2a5f82]/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber-400/60 via-amber-400/20 to-transparent" />

          {/* Text */}
          <div className="relative z-10 flex flex-col gap-5 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-[0.22em] uppercase">
                Get Started
              </span>
            </div>
            <h3 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
              We&apos;d love to work{" "}
              <span className="text-amber-400">with you.</span>
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Contact us by phone or fill out the contact form to set up an appointment — we&apos;re happy to help bring your vision to life.
            </p>
          </div>

          {/* CTAs */}
          <div className="relative z-10 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-4 shrink-0">
            <Link href="/contact-us">
              <Button className="group bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs tracking-widest uppercase rounded-sm px-8 py-4 h-auto transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/20 w-full sm:w-auto">
                Contact Us
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <a href="tel:9412600483">
              <Button
                variant="ghost"
                className="group text-white hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40 font-medium text-xs tracking-widest uppercase rounded-sm px-8 py-4 h-auto transition-all duration-200 w-full sm:w-auto"
              >
                <Phone size={13} className="mr-2" />
                941-260-0483
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutContact