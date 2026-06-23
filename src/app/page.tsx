import Link from "next/link";

const situations = [
  {
    emoji: "⚖️",
    title: "My Child Was Disciplined or Suspended",
    body: "What schools must do before, during, and after any suspension. Your appeal rights. What happens if they skip steps.",
    href: "/rights/discipline",
    cta: "Read this first →",
  },
  {
    emoji: "🏫",
    title: "My Child Attends a Charter School",
    body: "Charter schools are public schools. They must follow public records law, open meetings law, and budget transparency requirements.",
    href: "/rights/charter",
    cta: "Know your charter rights →",
  },
  {
    emoji: "📘",
    title: "My Child Has an IEP or 504 Plan",
    body: "Federal law gives children with disabilities significantly stronger protections. Most parents don't know the half of it.",
    href: "/rights/sped",
    cta: "Special ed rights →",
  },
  {
    emoji: "📁",
    title: "The School Won't Give Me Information",
    body: "They have 3 business days. Your child's records: 10 business days. Surveillance footage: request it today.",
    href: "/rights/records",
    cta: "Records rights →",
  },
  {
    emoji: "🚌",
    title: "I'm Having Trouble Getting My Child to School",
    body: "More than a mile from school? Free transportation is required. Has an IEP? Door-to-door may be required too.",
    href: "/rights/transportation",
    cta: "Transportation rights →",
  },
  {
    emoji: "🏠",
    title: "My Family's Housing Situation Has Changed",
    body: "Doubled up, in a shelter, or in a motel? Your child can stay at their same school with transportation — no documents required to enroll.",
    href: "/rights/homelessness",
    cta: "Know your rights →",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "My Child Is in Foster Care or Changing Placements",
    body: "Federal law requires schools to keep your child enrolled and stable through placement changes whenever possible.",
    href: "/rights/foster-care",
    cta: "Foster care rights →",
  },
  {
    emoji: "🚫",
    title: "My Child Is Being Bullied or Harassed",
    body: "Schools must investigate, document, and respond — and report incidents to the state. Know exactly what's required.",
    href: "/rights/bullying",
    cta: "Bullying & discrimination rights →",
  },
  {
    emoji: "🗣️",
    title: "I Want a Bigger Voice at My Child's School",
    body: "Board meetings must be open. PTAs have real legal standing. Here's how to make sure you're heard.",
    href: "/rights/parent-involvement",
    cta: "Parent involvement rights →",
  },
  {
    emoji: "🧠",
    title: "I Think My Child May Be Gifted",
    body: "Louisiana delivers gifted services through an IEP — and a child can be both gifted and have a disability at the same time.",
    href: "/rights/gifted",
    cta: "Gifted education rights →",
  },
  {
    emoji: "📋",
    title: "I'm Getting My Child Ready for Pre-K",
    body: "Eligibility, quality standards, and early screening for disabilities or giftedness — before kindergarten even starts.",
    href: "/rights/prek3",
    cta: "Pre-K rights →",
  },
  {
    emoji: "📊",
    title: "I Don't Understand My Child's Test Scores",
    body: "What LEAP actually measures, required accommodations, and the real consequences of opting out.",
    href: "/rights/testing",
    cta: "Testing & accountability rights →",
  },
  {
    emoji: "🎨",
    title: "Cost Is a Barrier to Sports, Music, or Arts",
    body: "Schools can't charge fees as a condition of attending public school — and there's a required waiver process.",
    href: "/rights/sports-arts",
    cta: "Sports, music & arts rights →",
  },
  {
    emoji: "💻",
    title: "I Want My Child to Have STEM & Tech Access",
    body: "Louisiana is rolling out a new computer science requirement now — here's the timeline and what equitable access actually means.",
    href: "/rights/stem",
    cta: "STEM & technology rights →",
  },
  {
    emoji: "📄",
    title: "I Need a Letter or Template",
    body: "Eight ready-to-use templates — public records requests, IEP meeting requests, suspension appeals, LDOE complaints, and more.",
    href: "/templates",
    cta: "Get templates →",
  },
  {
    emoji: "⚖️",
    title: "I Need Free Legal Help",
    body: "Free legal clinics in New Orleans that handle education law. What to bring, what to say, and how to get the most from your visit.",
    href: "#legal",
    cta: "Find legal help →",
  },
];

const stats = [
  { value: "14", label: "Rights Pages" },
  { value: "8", label: "Legal Templates" },
  { value: "3+", label: "Laws Explained" },
  { value: "Free", label: "Always" },
];

export default function Home() {
  return (
    <div className="bg-[#0d1b2a] text-[#f4f1ea]">
      {/* Top announcement bar */}
      <div className="bg-[#c9a13b] text-[#0d1b2a] text-sm text-center py-2 px-4 font-medium">
        📣 Know your rights. Use your voice. You are not alone. ·{" "}
        <a href="#resources" className="underline underline-offset-2">
          New: April Book &amp; Video of the Month →
        </a>
      </div>

      {/* Nav */}
      <header className="border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-bold text-lg tracking-tight">
            ALAB <span className="opacity-60 font-normal">Advocates Louisiana &amp; Beyond</span>
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#rights" className="hover:opacity-80">Know Your Rights</a>
            <Link href="/templates" className="hover:opacity-80">Templates</Link>
            <a href="#resources" className="hover:opacity-80">Resources</a>
            <a href="#community" className="hover:opacity-80">Community</a>
            <a href="#about" className="hover:opacity-80">About</a>
          </div>
          <a
            href="#donate"
            className="rounded-full bg-[#c9a13b] text-[#0d1b2a] px-4 py-2 text-sm font-semibold hover:bg-[#dcb653] transition"
          >
            ❤️ Donate
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-[#c9a13b] text-sm font-semibold tracking-wide uppercase mb-4">
          Amplify Justice Liberation Project Presents
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
          Your child deserves <em className="italic text-[#c9a13b]">better</em> than this.
        </h1>
        <p className="mt-6 text-lg text-[#f4f1ea]/80 max-w-2xl mx-auto">
          ALAB gives Louisiana parents the legal knowledge, ready-to-use
          documents, and community connections to fight for their children&apos;s
          education — and win.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#rights"
            className="rounded-full bg-[#c9a13b] text-[#0d1b2a] px-6 py-3 font-semibold hover:bg-[#dcb653] transition"
          >
            Know Your Rights →
          </a>
          <Link
            href="/templates"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
          >
            Get Templates
          </Link>
        </div>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold text-[#c9a13b]">{s.value}</dd>
              <dd className="text-sm text-[#f4f1ea]/70 mt-1">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Situations grid */}
      <section id="rights" className="bg-[#f4f1ea] text-[#0d1b2a] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#a8763e] font-semibold text-sm uppercase tracking-wide">
            Know Your Rights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
            What situation are you in?
          </h2>
          <p className="text-[#0d1b2a]/70 max-w-xl mb-10">
            Choose what&apos;s happening with your child and we&apos;ll show you
            exactly what the law says and what to do next.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-[#0d1b2a]/10 bg-white p-6 flex flex-col hover:border-[#c9a13b] hover:shadow-lg transition"
              >
                <span className="text-3xl mb-3">{s.emoji}</span>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-[#0d1b2a]/70 flex-1">{s.body}</p>
                <span className="mt-4 text-sm font-semibold text-[#a8763e] group-hover:text-[#c9a13b]">
                  {s.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#c9a13b] font-semibold text-sm uppercase tracking-wide">
            Who We Are
          </p>
          <h2 className="text-3xl font-bold mt-2 mb-6">
            Built by a parent who&apos;s been in the fight
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="text-5xl">👤</div>
            <div>
              <h3 className="font-bold text-xl">Ashana Bigard</h3>
              <p className="text-sm text-[#f4f1ea]/60 mb-4">
                Executive Director, Amplify Justice Liberation Collective ·
                Educational Advocate · Author · Mother
              </p>
              <p className="text-[#f4f1ea]/80 mb-4">
                Amplify Justice Liberation Collective is a nonprofit
                organization working at the intersection of education,
                justice, and community power in New Orleans and beyond. ALAB
                — Advocates Louisiana and Beyond — is one of its flagship
                projects.
              </p>
              <p className="text-[#f4f1ea]/80">
                Ashana Bigard is the author of <em>Beyond Resilience: Katrina
                20</em> and a leading educational advocate in New Orleans. As
                a mother of three children — two of whom have disabilities,
                and one who navigates both an IEP for disabilities and an IMP
                for gifted and talented services — she has lived the
                complexity of the New Orleans public school landscape from
                the inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-[#c9a13b] text-[#0d1b2a] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Help Us Keep This Free</h2>
          <p className="mb-8 opacity-90">
            ALAB is a free resource because parents without money still have
            children who deserve an education. Your donation funds content
            updates, legal review, community events, and outreach to the
            families who need this most.
          </p>
          <button className="rounded-full bg-[#0d1b2a] text-[#f4f1ea] px-8 py-3 font-semibold hover:opacity-90 transition">
            ❤️ Donate to Amplify Justice Liberation Collective
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-sm text-[#f4f1ea]/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-bold text-[#f4f1ea] mb-1">ALAB</p>
          <p className="mb-4">
            A project of Amplify Justice Liberation Collective
          </p>
          <p className="mb-6">
            This site is for informational purposes only and does not
            constitute legal advice. Content reviewed by legal advocates in
            Louisiana. Laws change — always verify with a licensed attorney
            for your specific situation.
          </p>
          <p>© {new Date().getFullYear()} Amplify Justice Liberation Collective</p>
        </div>
      </footer>
    </div>
  );
}
