const AboutServiceArea = () => {
    const highlights = [
      { value: "SW Florida", label: "Service Region" },
      { value: "15+", label: "Years Serving" },
      { value: "Hundreds of", label: "Kitchens Built" },
    ]
  
    return (
      <section
        className="relative w-full min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20161222_165457.jpg')" }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 w-full">
          <div className="max-w-2xl flex flex-col gap-8">
  
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs font-semibold tracking-[0.22em] uppercase">
                Service Area
              </span>
            </div>
  
            {/* Heading */}
            <h3 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Serving{" "}
              <span className="text-amber-400">South West Florida.</span>
            </h3>
  
            {/* Divider */}
            <div className="h-px w-16 bg-white/20" />
  
            {/* Body */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Based in South West Florida, Cabinetry by Wettach is proud to serve homeowners across the region. We&apos;ve built a reputation for excellence in custom cabinet design, customer service, and installation. We don&apos;t just build cabinets — we build lasting relationships with clients who value craftsmanship, honesty, and attention to detail.
            </p>
  
            {/* Stats row */}
            <div className="flex items-center gap-10 pt-4 border-t border-white/10">
              {highlights.map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="text-white font-bold text-2xl md:text-3xl tracking-tight leading-none">
                    {item.value}
                  </span>
                  <span className="text-white/40 text-xs font-medium tracking-widest uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
  
          </div>
        </div>
  
        {/* Bottom amber accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-400/50 via-amber-400/20 to-transparent" />
      </section>
    )
  }
  
  export default AboutServiceArea