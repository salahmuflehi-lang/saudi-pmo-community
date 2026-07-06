import { Founders } from "@/components/founders";
import { GlowingEffectDemo } from "@/components/glowing-effect-demo";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 md:px-10">
      <div className="w-full max-w-6xl space-y-12">
        <header className="max-w-2xl space-y-4">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="inline-block h-px w-7 bg-primary" />
            Saudi PMO Community
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Where Saudi Arabia&apos;s project leaders{" "}
            <em className="not-italic text-primary">build together.</em>
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Move your cursor across the cards — every edge lights up, the way a
            community does when its members connect.
          </p>
        </header>
        <GlowingEffectDemo />

        <section className="space-y-8 pt-8">
          <header className="max-w-2xl space-y-4">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="inline-block h-px w-7 bg-primary" />
              The founding circle
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Nine practitioners. <em className="not-italic text-primary">One idea.</em>
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              They turned a simple group chat into a movement for the profession —
              meet the people who laid the first bricks.
            </p>
          </header>
          <Founders />
        </section>
      </div>
    </main>
  );
}
