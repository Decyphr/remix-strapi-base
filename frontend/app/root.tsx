import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

// tailwind styles
import Header from "~/components/header";
import { handleException } from "~/lib/exceptions";
import styles from "./tailwind.css";

/* TODO: Configure Site Settings
export async function loader() {
  return { data: "TODO: Site Settings" };
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
*/

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="mt-14">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const message = handleException(error);

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>Error: {message}</div>
        <Scripts />
      </body>
    </html>
  );
}
