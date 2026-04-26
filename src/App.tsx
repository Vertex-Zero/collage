import { useState } from "react";
import { Mindloop } from "./sections/Mindloop";
import { Velorah } from "./sections/Velorah";
import { Asme } from "./sections/Asme";
import { Agency } from "./sections/Agency";
import { Prisma } from "./sections/Prisma";

type PageKey = "mindloop" | "asme" | "velorah" | "agency" | "prisma";

const PAGES: { key: PageKey; label: string }[] = [
  { key: "mindloop", label: "Mindloop" },
  { key: "asme", label: "Asme" },
  { key: "velorah", label: "Velorah" },
  { key: "agency", label: "Studio" },
  { key: "prisma", label: "Prisma" },
];

function PageSelector({
  active,
  onSelect,
}: {
  active: PageKey;
  onSelect: (key: PageKey) => void;
}) {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[9999] flex items-center gap-2">
      <div className="liquid-glass rounded-2xl p-3 flex flex-col gap-1 text-xs min-w-[140px]">
        <div className="px-3 pt-1 pb-2 border-b border-white/10 mb-1">
          <div className="text-[10px] uppercase tracking-[2px] text-white/40">
            Switch site
          </div>
          <div className="text-[10px] text-white/30 mt-0.5">
            Click to view →
          </div>
        </div>
        {PAGES.map((page) => (
          <button
            key={page.key}
            onClick={() => onSelect(page.key)}
            className={`transition-colors px-3 py-2 rounded-xl whitespace-nowrap text-left flex items-center justify-between gap-3 ${
              active === page.key
                ? "text-white bg-white/10"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>{page.label}</span>
            {active === page.key && (
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState<PageKey>("mindloop");

  return (
    <main className="bg-black text-white min-h-screen">
      <PageSelector active={active} onSelect={setActive} />
      {active === "mindloop" && <Mindloop />}
      {active === "asme" && <Asme />}
      {active === "velorah" && <Velorah />}
      {active === "agency" && <Agency />}
      {active === "prisma" && <Prisma />}
    </main>
  );
}
