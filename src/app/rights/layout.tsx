import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Know Your Rights | ALAB",
    template: "%s | ALAB",
  },
  description:
    "Plain-language explanations of Louisiana education law for parents — discipline, special education, charter schools, records, and more.",
};

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 800 }}>
        ALAB <span style={{ fontWeight: 400, opacity: 0.7 }}>Know Your Rights</span>
      </span>
    }
  >
    <Link href="/" style={{ marginRight: "1rem", fontSize: "0.9rem" }}>
      ← Back to ALAB Home
    </Link>
  </Navbar>
);

const footer = (
  <Footer>
    <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>
      This page is for informational purposes only and does not constitute
      legal advice. Content reviewed by legal advocates in Louisiana. Laws
      change — always verify with a licensed attorney for your specific
      situation. © {new Date().getFullYear()} Amplify Justice Liberation
      Collective.
    </span>
  </Footer>
);

export default async function RightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap("/rights");
  return (
    <Layout navbar={navbar} pageMap={pageMap} footer={footer}>
      {children}
    </Layout>
  );
}
