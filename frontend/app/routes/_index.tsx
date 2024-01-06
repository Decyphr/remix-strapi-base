import { json, type MetaFunction } from "@remix-run/node";
import qs from "qs";
import HomepageHero from "~/components/homepage-hero";

import { getHomepage } from "~/lib/data.server";

export async function loader() {
  const query = qs.stringify({
    populate: ["seo"],
  });

  const homepage = await getHomepage(query);

  return json({ homepage });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.homepage.seo.metaTitle ?? "Homepage" },
    {
      name: "description",
      content: data?.homepage.seo.metaDescription ?? "",
    },
  ];
};

export default function Index() {
  // const { homepage } = useLoaderData<typeof loader>();

  return <HomepageHero />;
}
