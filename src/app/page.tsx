import Link from "next/link";

/**
 * 我现在的
 */
const features = [
  {
    title: "Full Authentication",
    description: "Sign-up, sign-in, and password reset flows are ready with better-auth.",
  },
  {
    title: "Type-Safe Database",
    description: "Includes Drizzle ORM configured for PostgreSQL, ensuring type safety.",
  },
  {
    title: "Dark Mode",
    description: "Pre-configured dark mode support using next-themes and Tailwind CSS.",
  },
  {
    title: "Refactored Components",
    description: "Reusable and clean components for authentication forms.",
  },
  {
    title: "Email Integration",
    description: "Password resets and other emails are handled via Resend.",
  },
  {
    title: "Modern Stack",
    description: "Built with the latest Next.js App Router and TypeScript.",
  },
];

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-white overflow-hidden">
      {/* 主渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500"></div>

      {/* 协调色彩层次渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-purple-900/60 to-pink-800/40"></div>

      {/* 添加噪点纹理效果 */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 额外的纹理层，增强沙哑感 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 mix-blend-overlay"></div>

      <div className="container relative flex flex-col items-center justify-center gap-12 px-4 py-16 z-10">
        <div className="text-center">
          <h1 className="font-extrabold text-5xl text-white tracking-tight sm:text-[5rem]">
            Fullstack Starter
          </h1>
          <p className="mt-2 text-2xl text-white/80">
            Crafted by{" "}
            <a
              href="https://zilin.im"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white underline transition hover:text-white/80"
            >
              zilin
            </a>
          </p>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Built on the{" "}
            <a
              href="https://create.t3.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white"
            >
              T3 Stack
            </a>{" "}
            and supercharged with features for rapid development (Vibe-coding).
          </p>
        </div>

        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 rounded-xl bg-white/10 p-4 text-white backdrop-blur-sm border border-white/20"
              >
                <h3 className="font-bold text-xl">{feature.title}</h3>
                <div className="text-base text-white/80">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            className="flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-semibold text-white no-underline transition hover:bg-white/20 backdrop-blur-sm border border-white/20"
            href="https://zilin.im"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`Author's Homepage`}
          </Link>
          <Link
            className="flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-semibold text-white no-underline transition hover:bg-white/20 backdrop-blur-sm border border-white/20"
            href="https://github.com/hifizz/fullstack-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </Link>
        </div>
      </div>
    </main>
  );
}
