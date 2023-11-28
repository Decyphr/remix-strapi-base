import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async() => {
  const { data: beers } = await fetch('http://localhost:1337/api/beers', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.STRAPI_API_KEY}`
    }
  }).then(res => res.json())

  return { beers };
}

export default function Index() {
  const { beers } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-5xl text-red-900">Welcome to Brass Munky!</h1>
      <ul>
        {beers.map((beer: any) => (
          <li key={beer.id}>{beer.attributes.name}</li>
        ))}
      </ul>
      <Button>Get a Beer</Button>
    </div>
  );
}
