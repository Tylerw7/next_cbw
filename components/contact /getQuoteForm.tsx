"use client"

import { useActionState, useEffect } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Mail, MapPinHouse, Phone, ArrowRight } from "lucide-react"
import { quoteSubmitionForm } from "@/actions/form-action"
import { toast } from "sonner"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "springbayconstruction@yahoo.com",
    href: "mailto:springbayconstruction@yahoo.com",
  },
  {
    icon: MapPinHouse,
    label: "Location",
    value: "1746 10th Way Unit B\nSarasota, FL 34243",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "941-232-2817",
    href: "tel:9412322817",
  },
]

const QuoteForm = () => {
  const [state, formAction, isPending] = useActionState(quoteSubmitionForm, {
    success: false,
    message: "",
  })

  useEffect(() => {
    if (state?.message) {
      const now = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
      toast(state.success ? "✅ Form Submitted — We will Contact You Soon!" : "❌ Submission Failed", {
        description: `Submitted on ${now}`,
      })
    }
  }, [state])

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen mt-[50px]">

      {/* Left — Form */}
      <div className="bg-slate-50 flex flex-col justify-center px-6 md:px-16 py-20">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-semibold tracking-[0.22em] uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-slate-900 font-bold text-4xl md:text-5xl tracking-tight leading-tight">
            Tell us what you&apos;re{" "}
            <span className="text-amber-400">looking for.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
            Not sure where to start? Just let us know what you&apos;re thinking — big or small. We&apos;re here to help with ideas, designs, and expert craftsmanship.
          </p>
        </div>

        {/* Form card */}
        <form
          action={formAction}
          className="flex flex-col gap-5 bg-white border border-slate-100 shadow-lg shadow-slate-100/80 rounded-sm p-8 md:p-10 max-w-xl w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name" className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="John Smith"
                className="rounded-sm border-slate-200 focus:border-[#2a5f82] focus:ring-[#2a5f82]/20 h-11 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone" className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="text"
                name="phone"
                placeholder="941-000-0000"
                className="rounded-sm border-slate-200 focus:border-[#2a5f82] focus:ring-[#2a5f82]/20 h-11 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-slate-500">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="rounded-sm border-slate-200 focus:border-[#2a5f82] focus:ring-[#2a5f82]/20 h-11 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="description" className="text-xs font-semibold tracking-widest uppercase text-slate-500">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Tell us more about what you are looking for — style, size, room, timeline..."
              className="rounded-sm border-slate-200 focus:border-[#2a5f82] focus:ring-[#2a5f82]/20 min-h-[130px] text-sm resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="group w-full bg-slate-900 hover:bg-slate-700 text-amber-400 font-bold text-xs tracking-widest uppercase rounded-sm h-12 transition-all duration-200 hover:-translate-y-0.5 mt-1"
          >
            {isPending ? "Submitting..." : (
              <>
                Submit Form
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Right — Contact info */}
      <div className="bg-slate-900 flex flex-col justify-center px-6 md:px-16 py-20 gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-[0.22em] uppercase">
              Contact
            </span>
          </div>
          <h3 className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight">
            We&apos;d love to hear{" "}
            <span className="text-amber-400">from you.</span>
          </h3>
          <p className="text-amber-400/80 text-sm font-medium border border-amber-400/20 bg-amber-400/5 px-4 py-2.5 rounded-sm max-w-sm">
            ✦ We accept visits by appointment only.
          </p>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-7">
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 group">
              <div className="w-11 h-11 rounded-sm bg-[#2a5f82]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#2a5f82]/40 transition-colors duration-200">
                <Icon size={18} className="text-[#5a8ac4]" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-slate-500 text-xs font-semibold tracking-[0.18em] uppercase">
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-slate-300 text-sm font-medium hover:text-white transition-colors duration-200 leading-snug"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-slate-300 text-sm font-medium leading-snug whitespace-pre-line">
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative bottom accent */}
        <div className="flex items-center gap-4 mt-4">
          <div className="h-px flex-1 bg-slate-800" />
          <span className="text-slate-600 text-xs tracking-widest uppercase">Sarasota, FL</span>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
      </div>

    </section>
  )
}

export default QuoteForm