import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const AboutDescription = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative border offset */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-amber-400/30 rounded-sm pointer-events-none z-0" />
            <div className="relative w-full h-[60vh] md:h-[75vh] rounded-sm overflow-hidden z-10">
              <Image
                src="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20200818_132747.jpg"
                alt="Custom cabinet in Sarasota FL"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle blue overlay on hover feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute bottom-6 -right-4 md:-right-8 z-20 bg-slate-900 px-6 py-4 rounded-sm shadow-xl flex flex-col gap-0.5">
              <span className="text-amber-400 font-bold text-3xl tracking-tight leading-none">15+</span>
              <span className="text-slate-400 text-xs font-medium tracking-widest uppercase">Years of Experience</span>
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-7 order-1 lg:order-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-500 text-xs font-semibold tracking-[0.22em] uppercase">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-slate-900 font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Craftsmanship.{" "}
              <span className="text-amber-400">Precision.</span>{" "}
              Integrity.
            </h2>

            {/* Divider */}
            <div className="h-px w-16 bg-slate-200" />

            {/* Body copy */}
            <div className="flex flex-col gap-4 text-slate-500 text-sm md:text-base leading-relaxed">
              <p>
                At Cabinetry by Wettach, we believe that your home should reflect your lifestyle — beautifully and functionally. Based in Sarasota, Florida, we specialize in designing and building high-quality custom cabinetry for kitchens, bathrooms, closets, home offices, and more.
              </p>
              <p>
                As a local, family-owned business, we take pride in offering personalized service and expert craftsmanship. Whether you&apos;re renovating your dream kitchen or upgrading a single room, we work closely with you from concept to completion to bring your vision to life.
              </p>
              <p>
                Our attention to detail, commitment to quality, and passion for woodworking set us apart. Each project is handcrafted with precision using premium materials — ensuring both durability and timeless beauty across Sarasota and the surrounding areas.
              </p>
            </div>

            {/* Highlights row */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100">
              {[
                { value: "Hundreds of", label: "Projects Done" },
                { value: "100%", label: "Custom Built" },
                { value: "Local", label: "Family Owned" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-slate-900 font-bold text-2xl tracking-tight">{item.value}</span>
                  <span className="text-slate-400 text-xs font-medium tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link href="/contact-us">
                <Button className="group bg-slate-900 hover:bg-slate-700 text-amber-400 font-bold text-xs tracking-widest uppercase rounded-sm px-7 py-4 h-auto transition-all duration-200 hover:-translate-y-0.5">
                  Get in Touch
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutDescription