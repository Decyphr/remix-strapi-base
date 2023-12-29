import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import strapi from "~/lib/strapi.server";

export const loader = async () => {
  const { data: pages } = await strapi.get("/api/pages");

  return json({ pages });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  // TODO: Add meta tags for homepage
  // NOTE: data is the return value of the loader function above

  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { pages } = useLoaderData<typeof loader>();

  return <pre>{JSON.stringify(pages, null, 2)}</pre>;
}
