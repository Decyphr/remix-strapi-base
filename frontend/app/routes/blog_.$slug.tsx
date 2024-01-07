import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import qs from "qs";
import invariant from "tiny-invariant";

import Container from "~/components/container";
import Content from "~/components/content";
import { getArticleBySlug } from "~/lib/data.server";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.slug, "Missing slug");

  const query = qs.stringify({
    populate: ["content"],
  });

  const { blog } = await getArticleBySlug(params.slug, query);

  return json({ blog });
}

export default function BlogDetail() {
  const { blog } = useLoaderData<typeof loader>();
  return (
    <Container>
      <Content content={blog.content} />
    </Container>
  );
}
