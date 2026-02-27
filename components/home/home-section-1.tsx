import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "15", suffix: "+", label: "Years of Experience" },
  { value: "100", suffix: "+", label: "Projects Completed" },
  { value: "100", suffix: "%", label: "Custom Built" },
]

const HomeSection1 = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Left column */}
        <div className="flex flex-col gap-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-semibold tracking-[0.22em] uppercase">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-slate-900 font-bold text-4xl md:text-5xl leading-tight tracking-tight">
            Premium cabinets,{" "}
            <span className="text-amber-400">crafted by hand.</span>
          </h2>

          {/* Body */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Every piece is tailored to fit your unique needs — combining expert craftsmanship with premium materials for a perfect balance of beauty and durability. Whether you&apos;re after sleek modern design or timeless traditional cabinetry, we work closely with you every step of the way.
          </p>

          {/* CTA */}
          <div>
            <Link href="/contact-us">
              <Button className="group bg-slate-900 hover:bg-slate-700 text-amber-400 font-semibold text-xs tracking-widest uppercase rounded-sm px-7 py-4 h-auto transition-all duration-200 hover:-translate-y-0.5">
                Find Out More
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right column — stats */}
        <div className="flex flex-col gap-0 border-l border-slate-100">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "flex items-center gap-8 px-10 py-8 group hover:bg-slate-50 transition-colors duration-200",
                i !== stats.length - 1 ? "border-b border-slate-100" : "",
              ].join(" ")}
            >
              {/* Number */}
              <div className="shrink-0 flex items-end leading-none">
                <span className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-none">
                  {stat.value}
                </span>
                <span className="text-3xl font-bold text-amber-400 mb-1 ml-0.5">
                  {stat.suffix}
                </span>
              </div>

              {/* Label + divider */}
              <div className="flex flex-col gap-1.5">
                <div className="h-px w-8 bg-amber-400 group-hover:w-12 transition-all duration-300" />
                <span className="text-slate-500 text-sm font-medium tracking-wide leading-snug">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeSection1