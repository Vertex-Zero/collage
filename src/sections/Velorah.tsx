import { AutoVideo } from "../components/AutoVideo";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export function Velorah() {
  return (
    <section className="theme-velorah relative min-h-screen overflow-hidden">
      <AutoVideo
        src={VIDEO}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10">
        <nav className="flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <a
            href="#"
            className="text-3xl tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif", color: "hsl(var(--foreground))" }}
          >
            Velorah<sup className="text-xs">®</sup>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", active: true },
              { label: "Studio" },
              { label: "About" },
              { label: "Journal" },
              { label: "Reach Us" },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href="#"
                  className={`text-sm transition-colors ${
                    l.active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform"
          >
            Begin Journey
          </a>
        </nav>

        <div className="flex flex-col items-center text-center px-6 pt-32 pb-40 py-[90px] max-w-7xl mx-auto">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-1.5px] sm:tracking-[-2.46px] font-normal animate-fade-rise px-2"
            style={{ fontFamily: "'Instrument Serif', serif", color: "white" }}
          >
            Where <em className="not-italic text-white/50">dreams</em> rise{" "}
            <em className="not-italic text-white/50">through the silence.</em>
          </h1>

          <p className="text-white/60 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
            We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the
            chaos, we build digital spaces for sharp focus and inspired work.
          </p>

          <button className="liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] transition-transform animate-fade-rise-delay-2">
            Begin Journey
          </button>
        </div>
      </div>
    </section>
  );
}
