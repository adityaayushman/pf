import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smart Road Guardian AI X — Case Study | Aditya Ayushman Sahoo",
  description:
    "Case study: an explainable multimodal edge-AI platform that predicts road accidents before they happen and explains why. Architecture, measured results and honest limitations.",
};

const RESULTS = [
  { value: "78%", label: "Helmet & triple-riding detection mAP" },
  { value: "−47%", label: "Forecast error, learned LSTM vs linear baseline" },
  { value: "0.78 → 0.82", label: "AUC, learned fusion vs hand-set rule" },
  { value: "0.18%", label: "Calibration error (ECE) on the validated risk factor" },
];

const STACK = [
  "YOLOv11",
  "MediaPipe",
  "PyTorch",
  "ONNX / TensorRT",
  "pgmpy",
  "FastAPI",
  "PostgreSQL (Supabase)",
  "Next.js",
  "TypeScript",
  "Docker",
];

const LINKS = {
  live: "https://trie-dashboard.vercel.app",
  repo: "https://github.com/adityaayushman/TRIE",
};

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-24 border-t border-white/10">
      <p className="text-sm font-medium text-[#2997ff] mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">{title}</h2>
      <div className="space-y-5 text-lg leading-relaxed text-[#a1a1a6] max-w-3xl">{children}</div>
    </section>
  );
}

export default function RoadGuardianCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-40 bg-[#161617]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto flex h-12 items-center justify-between px-6">
          <Link href="/" className="text-base font-semibold tracking-tight">
            Aditya<span className="text-[#2997ff]">.</span>
          </Link>
          <Link href="/#projects" className="text-xs text-[#d2d2d7] hover:text-[#2997ff] transition-colors">
            ← All projects
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        <div className="pt-24 md:pt-36 pb-16 text-center">
          <p className="text-sm font-medium text-[#2997ff] mb-4">Case study</p>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tight mb-6">
            Smart Road
            <br />
            Guardian AI X
          </h1>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl text-[#a1a1a6]">
            Predict. Explain. Prevent. An explainable edge-AI platform that estimates crash risk before it
            happens and says why.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={LINKS.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium hover:bg-[#0077ed] transition-colors"
            >
              Open live dashboard ↗
            </a>
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition-colors"
            >
              View source
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-md overflow-hidden rounded-[28px] bg-[#1d1d1f]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/trie.webp"
            alt="Walkthrough of the Smart Road Guardian dashboard"
            className="w-full"
          />
        </div>

        <section className="py-16 md:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {RESULTS.map((r) => (
              <div key={r.label} className="rounded-[28px] bg-[#1d1d1f] p-6 md:p-8">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{r.value}</div>
                <div className="mt-3 text-sm text-[#a1a1a6] leading-snug">{r.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#86868b]">
            All figures are taken from the project README and its reproducible evaluation commands.
          </p>
        </section>

        <Section eyebrow="The problem" title="Risk scores that nobody can trust are not safety tools.">
          <p>
            Most crash-prediction systems output a number and stop there. On Indian roads, where vulnerable
            road users make up a large share of deaths, a number with no explanation, no uncertainty and no
            record of what the system could not see is hard to act on.
          </p>
          <p>
            I set out to build a system that scores risk in real time, shows which factors drove the score,
            reports what it did not observe, and states plainly which parts are learned models and which are
            transparent rules.
          </p>
        </Section>

        <Section eyebrow="Architecture" title="Perception at the edge. Reasoning in the cloud.">
          <p>
            Cameras never leave the vehicle. The edge layer runs YOLOv11 perception and MediaPipe driver
            monitoring (deployable through ONNX and TensorRT on NVIDIA Jetson hardware) and sends only
            telemetry on.
          </p>
          <p>
            A FastAPI backend with PostgreSQL fuses that telemetry through the TRIE risk engine. Every
            camera-dependent factor that was not observed is dropped from the score and reported as
            unobserved, instead of being measured against an image that does not exist. Each score carries a
            sensor-aware uncertainty band, a causal explanation built on Bayesian networks, and a temporal
            forecast.
          </p>
          <p>
            A Next.js dashboard shows the live risk gauge, factor breakdown, black-spot nominations on a map
            and the honest model-status table.
          </p>
        </Section>

        <Section eyebrow="Decisions" title="What I chose, and why.">
          <p>
            <span className="text-white font-medium">Telemetry-only backend.</span> Splitting the dependency
            sets keeps the deployed image near 150 MB instead of 2 GB and keeps raw video off the network.
          </p>
          <p>
            <span className="text-white font-medium">Rules first, learned models benchmarked beside them.</span>{" "}
            The shipped fusion is a transparent rule. A learned model beats it (AUC 0.78 → 0.82) and a
            statistical test confirms it recovered the right interactions, so the study stays reproducible
            with one command while the product stays explainable.
          </p>
          <p>
            <span className="text-white font-medium">Honest evaluation.</span> The road-damage detector
            reaches mAP50 of 33% on held-out Indian images. I report that number as it is, and the live
            Settings page lists measured per-class accuracy.
          </p>
        </Section>

        <Section eyebrow="Honest limits" title="What it does not do yet.">
          <p>
            The deployed API has no camera, so the vehicle-intelligence views run on recorded footage and are
            labelled that way. The backend sleeps on a free tier, so the first request after a quiet spell
            can take about a minute. The learned fusion and forecast models are prototyped and benchmarked
            but not yet the shipped defaults.
          </p>
          <p>
            The roadmap is to promote those learned replacements into the product once they hold up on more
            Indian data.
          </p>
        </Section>

        <section className="py-16 md:py-24 border-t border-white/10">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Built with</h2>
          <div className="flex flex-wrap gap-2">
            {STACK.map((t) => (
              <span key={t} className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#d2d2d7]">
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
