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

// ALAB brand palette, converted to the HSL values Nextra's theme system
// expects (hue/saturation/lightness drive the entire primary color scale).
// Gold accent #c9a13b -> hsl(43, 57%, 51%)
// Navy #0d1b2a, Cream #f4f1ea
const brandStyles = `
  :root, .light, .dark {
    --nextra-primary-hue: 43deg;
    --nextra-primary-saturation: 57%;
    --nextra-primary-lightness: 45%;
    --nextra-bg: 244, 241, 234;
  }
  .dark {
    --nextra-bg: 13, 27, 42;
  }
  .nextra-nav-container {
    border-bottom-color: rgba(201, 161, 59, 0.25) !important;
  }
  .nextra-sidebar-container a[data-active="true"] {
    color: #a8763e !important;
    font-weight: 600;
  }
  footer {
    border-top-color: rgba(201, 161, 59, 0.2) !important;
  }
`;

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
    <>
      <style dangerouslySetInnerHTML={{ __html: brandStyles }} />
      <Layout
        navbar={navbar}
        pageMap={pageMap}
        footer={footer}
        docsRepositoryBase="https://github.com/ambigard/alab-site/tree/main/content"
      >
        {children}
      </Layout>
    </>
  );
}
