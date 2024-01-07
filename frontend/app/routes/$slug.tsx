import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import qs from "qs";
import invariant from "tiny-invariant";

import Container from "~/components/container";
import Content from "~/components/content";

import { getPageBySlug } from "~/lib/data.server";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.slug, "No slug provided");

  const query = qs.stringify({
    populate: ["content", "seo"],
  });

  const { page } = await getPageBySlug(params.slug, query);

  return json({ page });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.page.seo?.metaTitle ?? data?.page.title },
    {
      name: "description",
      content: data?.page.seo?.metaDescription ?? "",
    },
  ];
};

export default function StandardPage() {
  const { page } = useLoaderData<typeof loader>();

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <Container>
      <Content content={page.content} />
    </Container>
  );
}
