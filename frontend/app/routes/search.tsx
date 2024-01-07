import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Container from "~/components/container";
import strapi from "~/lib/strapi.server";

import type { Article, Page } from "~/types";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  const { data: entries } = await strapi.get<{
    pages: Page[];
    articles: Article[];
  }>(`/api/fuzzy-search/search?query=${query}`);

  return {
    query,
    entries,
  };
}

export default function Search() {
  const { query, entries } = useLoaderData<typeof loader>();
  return (
    <Container>
      <h1 className="text-2xl text-center font-bold">Search Query: {query}</h1>
      <pre>{JSON.stringify(entries, null, 2)}</pre>
    </Container>
  );
}
