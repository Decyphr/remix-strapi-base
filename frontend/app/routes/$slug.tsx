import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import Container from "~/components/container";

import { getEntryBySlug } from "~/lib/data.server";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.slug, "No slug provided");

  const { entry } = await getEntryBySlug("page", params.slug);

  return json({ entry });
}

export default function StandardPage() {
  const { entry } = useLoaderData<typeof loader>();

  if (!entry) {
    return <div>Page not found</div>;
  }

  return (
    <Container>
      <h1>{entry.title}</h1>
    </Container>
  );
}
