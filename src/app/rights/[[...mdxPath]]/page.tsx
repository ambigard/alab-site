import { importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../../mdx-components";
import type { ComponentType, ReactNode } from "react";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params: Promise<{ mdxPath?: string[] }>;
}) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper as ComponentType<{
  toc: unknown;
  metadata: unknown;
  children: ReactNode;
}>;

export default async function Page(props: {
  params: Promise<{ mdxPath?: string[] }>;
}) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
