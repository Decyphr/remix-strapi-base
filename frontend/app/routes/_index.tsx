import { json, type MetaFunction } from "@remix-run/node";

import strapi from "~/lib/strapi.server";

export const loader = async () => {
  const { data: homepage } = await strapi.get("/api/homepage", {
    params: {
      populate: "seo",
    },
  });

  return json({ homepage });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.homepage.data.attributes.seo.metaTitle ?? "Homepage" },
    {
      name: "description",
      content: data?.homepage.data.attributes.seo.metaDescription,
    },
  ];
};

export default function Index() {
  return <div>Homepage</div>;
}
