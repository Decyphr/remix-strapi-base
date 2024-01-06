import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Container from "~/components/container";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  return {
    query,
  };
}

export default function Search() {
  const { query } = useLoaderData<typeof loader>();
  return (
    <Container>
      <h1 className="text-2xl text-center font-bold">Search Query: {query}</h1>
    </Container>
  );
}
