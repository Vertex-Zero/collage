import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Palette,
  Play,
  Shield,
  Zap,
} from "lucide-react";
import { AutoVideo } from "../components/AutoVideo";
import { BlurText } from "../components/BlurText";
import { HlsVideo } from "../components/HlsVideo";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";
const START_HLS =
  "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";
const STATS_HLS =
  "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";
const CTA_HLS =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const FEATURE_GIF_1 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85";
const FEATURE_GIF_2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85";

function Navbar() {
  return (
    <nav className="absolute top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      <div className="h-12 w-12 rounded-full bg-white/20 liquid-glass flex items-center justify-center text-white font-heading italic text-xl">
        S
      </div>
      <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center gap-1">
        {["Home", "Services", "Work", "Process", "Pricing"].map((l) => (
          <a
            key={l}
            href="#"
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white"
          >
            {l}
          </a>
        ))}
        <a
          href="#"
          className="bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1"
        >
          Get Started <ArrowUpRight size={14} />
        </a>
      </div>
      <a
        href="#"
        className="md:hidden bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium"
      >
        Menu
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden h-[820px] md:h-[1000px]">
      <AutoVideo
        src={HERO_VIDEO}
        className="absolute left-0 top-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/5 z-0" />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 300,
          background: "linear-gradient(to bottom, transparent, black)",
        }}
      />
      <Navbar />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-[150px]">
        <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 text-xs text-white">
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
            New
          </span>
          <span className="pr-3">Introducing AI-powered web design.</span>
        </div>

        <BlurText
          text="The Website Your Brand Deserves"
          delay={100}
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] mt-8"
        />

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white font-body font-light leading-tight mt-6 max-w-md"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design,
          wildly reimagined.
        </motion.p>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-6 mt-8"
        >
          <button className="liquid-glass rounded-full px-5 py-2.5 text-sm text-white font-body flex items-center gap-2">
            Get Started <ArrowUpRight size={16} />
          </button>
          <button className="text-sm text-white font-body flex items-center gap-2">
            <Play size={16} fill="white" />
            Watch the Film
          </button>
        </motion.div>

        <div className="mt-auto pb-8 pt-16 flex flex-col items-center gap-6">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
            Trusted by the teams behind
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((p) => (
              <span
                key={p}
                className="text-2xl md:text-3xl font-heading italic text-white"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GradientFade({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      className="absolute left-0 right-0 z-[1] pointer-events-none"
      style={{
        height: 200,
        [position]: 0,
        background:
          position === "top"
            ? "linear-gradient(to bottom, black, transparent)"
            : "linear-gradient(to top, black, transparent)",
      }}
    />
  );
}

function StartSection() {
  return (
    <section className="relative overflow-hidden">
      <HlsVideo
        src={START_HLS}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <GradientFade position="top" />
      <GradientFade position="bottom" />
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32"
        style={{ minHeight: 500 }}
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white mb-6">
          You dream it. We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-8">
          Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days,
          not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm text-white font-body flex items-center gap-2">
          Get Started <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

function FeaturesChess() {
  return (
    <section className="px-6 lg:px-16 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-4">
            Designed to convert. Built to perform.
          </h3>
          <p className="text-white/60 font-body font-light text-base mb-6 max-w-md">
            Every pixel is intentional. Our AI studies what works across thousands of top sites—then
            builds yours to outperform them all.
          </p>
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm text-white inline-flex items-center gap-2">
            Learn more <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="flex-1 liquid-glass rounded-2xl overflow-hidden aspect-video bg-black/20">
          <img src={FEATURE_GIF_1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-4">
            It gets smarter. Automatically.
          </h3>
          <p className="text-white/60 font-body font-light text-base mb-6 max-w-md">
            Your site evolves on its own. AI monitors every click, scroll, and conversion—then
            optimizes in real time. No manual updates. Ever.
          </p>
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm text-white inline-flex items-center gap-2">
            See how it works <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="flex-1 liquid-glass rounded-2xl overflow-hidden aspect-video bg-black/20">
          <img src={FEATURE_GIF_2} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const items = [
    { Icon: Zap, title: "Days, Not Months", desc: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy." },
    { Icon: Palette, title: "Obsessively Crafted", desc: "Every detail considered. Every element refined. Design so precise, it feels inevitable." },
    { Icon: BarChart3, title: "Built to Convert", desc: "Layouts informed by data. Decisions backed by performance. Results you can measure." },
    { Icon: Shield, title: "Secure by Default", desc: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included." },
  ];
  return (
    <section className="px-6 lg:px-16 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4">
          Why Us
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          The difference is everything.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} className="liquid-glass rounded-2xl p-6">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
              <Icon size={18} className="text-white" />
            </div>
            <div className="text-white font-body font-medium text-base mb-2">{title}</div>
            <div className="text-white/60 font-body font-light text-sm">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "200+", label: "Sites launched" },
    { value: "98%", label: "Client satisfaction" },
    { value: "3.2x", label: "More conversions" },
    { value: "5 days", label: "Average delivery" },
  ];
  return (
    <section className="relative overflow-hidden">
      <HlsVideo
        src={STATS_HLS}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "saturate(0)" }}
      />
      <GradientFade position="top" />
      <GradientFade position="bottom" />
      <div className="relative z-10 px-6 lg:px-16 py-32 max-w-6xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
                {s.value}
              </div>
              <div className="text-white/60 font-body font-light text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "A complete rebuild in days. The result outperformed everything we'd spent months building before.",
      name: "Sarah Chen",
      role: "CEO, Luminary",
    },
    {
      quote:
        "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
      name: "Marcus Webb",
      role: "Head of Growth, Arcline",
    },
    {
      quote:
        "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
      name: "Elena Voss",
      role: "Brand Director, Helix",
    },
  ];
  return (
    <section className="px-6 lg:px-16 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4">
          What They Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Don't take our word for it.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <div key={t.name} className="liquid-glass rounded-2xl p-8">
            <p className="text-white/80 font-body font-light text-sm italic mb-6">"{t.quote}"</p>
            <div className="text-white font-body font-medium text-sm">{t.name}</div>
            <div className="text-white/50 font-body font-light text-xs">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaFooter() {
  return (
    <section className="relative overflow-hidden">
      <HlsVideo
        src={CTA_HLS}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <GradientFade position="top" />
      <GradientFade position="bottom" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-32 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] mb-6">
          Your next website starts here.
        </h2>
        <p className="text-white/60 font-body font-light text-base max-w-xl mb-8">
          Book a free strategy call. See what AI-powered design can do. No commitment, no pressure.
          Just possibilities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-32">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm text-white inline-flex items-center gap-2">
            Book a Call <ArrowUpRight size={16} />
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium">
            View Pricing
          </button>
        </div>
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3">
          <span className="text-white/40 text-xs">© 2026 Studio. All rights reserved.</span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="text-white/40 text-xs hover:text-white/70">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Agency() {
  return (
    <div className="theme-agency relative">
      <div className="relative z-10">
        <Hero />
        <div className="bg-black">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <Stats />
          <Testimonials />
          <CtaFooter />
        </div>
      </div>
    </div>
  );
}
