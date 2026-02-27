"use client"

import { motion } from "motion/react"
import { Hammer, Gem, Heart } from "lucide-react"

const reasons = [
  {
    icon: Hammer,
    title: "Handcrafted, Custom Designs",
    description: "Every piece is tailored to your space.",
    content:
      "Our cabinetry is meticulously handcrafted to reflect your personal taste and seamlessly integrate with your home's aesthetic. Every piece is designed specifically for your space, offering unparalleled attention to detail and uniqueness.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "High-quality hardwoods, finishes, and hardware.",
    content:
      "We believe in using only the finest materials, ensuring that every cabinet we create is durable, visually striking, and built to stand the test of time. From solid hardwoods to premium finishes, our materials elevate the quality and longevity of each piece.",
    featured: true,
  },
  {
    icon: Heart,
    title: "Locally Owned & Operated",
    description: "Personalized service you can trust.",
    content:
      "As a family-owned business, we take pride in serving our local community with unmatched craftsmanship and personal service. We are deeply invested in our customers' satisfaction, providing custom solutions that align with your vision and needs.",
  },
]

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-5 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-semibold tracking-[0.22em] uppercase">
              Our Promise
            </span>
            <div className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="text-slate-900 font-bold text-4xl md:text-5xl tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl">
            Custom-crafted cabinets that combine exceptional craftsmanship, premium materials, and personalized service — all backed by our locally-owned commitment to quality.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
                viewport={{ once: true }}
                className={[
                  "relative flex flex-col gap-5 p-8 rounded-sm border transition-all duration-300 group",
                  item.featured
                    ? "bg-slate-900 border-slate-900 shadow-2xl shadow-slate-900/20 md:-translate-y-4"
                    : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/80 hover:-translate-y-1",
                ].join(" ")}
              >
                {/* Icon circle */}
                <div
                  className={[
                    "w-12 h-12 rounded-sm flex items-center justify-center",
                    item.featured ? "bg-amber-400" : "bg-[#2a5f82]/10",
                  ].join(" ")}
                >
                  <Icon
                    size={20}
                    className={item.featured ? "text-slate-900" : "text-[#2a5f82]"}
                    strokeWidth={1.75}
                  />
                </div>

                {/* Accent line */}
                <div
                  className={[
                    "h-0.5 w-8 transition-all duration-300",
                    item.featured
                      ? "bg-amber-400"
                      : "bg-amber-400 group-hover:w-14",
                  ].join(" ")}
                />

                {/* Text */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3
                    className={[
                      "font-bold text-xl tracking-tight",
                      item.featured ? "text-white" : "text-slate-900",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={[
                      "text-sm font-medium",
                      item.featured ? "text-amber-400" : "text-[#2a5f82]",
                    ].join(" ")}
                  >
                    {item.description}
                  </p>
                  <p
                    className={[
                      "text-sm leading-relaxed mt-1",
                      item.featured ? "text-slate-400" : "text-slate-500",
                    ].join(" ")}
                  >
                    {item.content}
                  </p>
                </div>

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-5 right-5">
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-amber-400 border border-amber-400/30 px-2 py-1 rounded-sm">
                      Most Popular
                    </span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs