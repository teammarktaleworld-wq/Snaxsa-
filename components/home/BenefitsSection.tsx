import Pill from "@/components/ui/Pill";
import GradientBlobs from "@/components/ui/GradientBlobs";
import NutrientBurst from "@/components/ui/NutrientBurst";
import StatsGrid from "@/components/benefits/StatsGrid";
import Comparison from "@/components/benefits/Comparison";

export default function BenefitsSection() {
  return (
    <>
      <section
        id="benefits"
        className="grain relative py-16 md:py-24 bg-hero-mesh overflow-hidden"
      >
        <GradientBlobs variant="mint" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
          <div>
            <Pill
              icon={<span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />}
              className="mb-6"
            >
              NUTRITIONIST APPROVED
            </Pill>
            <p className="uppercase tracking-[0.22em] text-xs font-bold text-coral mb-3">
              Health Benefits
            </p>
            <h2 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl md:text-[3.2rem] text-ink">
              Snacking That <span className="italic text-gradient-royal">Loves You Back</span>
            </h2>
            <p className="mt-5 text-ink-soft max-w-lg leading-relaxed text-lg">
              Makhana isn&apos;t just a trendy snack — it&apos;s a genuinely nutrient-dense superfood,
              roasted fresh with nothing artificial added.
            </p>
          </div>
          <div className="relative flex justify-center scale-[0.82] sm:scale-100">
            <NutrientBurst />
          </div>
        </div>
      </section>
      <StatsGrid />
      <Comparison />
    </>
  );
}
