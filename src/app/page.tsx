import Link from "next/link";

const features = [
	{
		title: "Full Authentication",
		description:
			"Sign-up, sign-in, and password reset flows are ready with better-auth.",
	},
	{
		title: "Type-Safe Database",
		description:
			"Includes Drizzle ORM configured for PostgreSQL, ensuring type safety.",
	},
	{
		title: "Dark Mode",
		description:
			"Pre-configured dark mode support using next-themes and Tailwind CSS.",
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
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
			<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
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
								className="flex flex-col gap-2 rounded-xl bg-white/10 p-4 text-white"
							>
								<h3 className="font-bold text-xl">{feature.title}</h3>
								<div className="text-base text-white/80">
									{feature.description}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex gap-4">
					<Link
						className="flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
						href="https://zilin.im"
						target="_blank"
						rel="noopener noreferrer"
					>
						Author's Homepage
					</Link>
					<Link
						className="flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
						href="https://github.com/hifzz/fullstack-starter"
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
