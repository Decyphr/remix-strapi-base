import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

// tailwind styles
import Container from "~/components/container";
import Header from "~/components/header";
import { buttonVariants } from "~/components/ui/button";
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

  if (isRouteErrorResponse(error)) {
    return (
      <html>
        <head>
          <title>Oops!</title>
          <Meta />
          <Links />
        </head>
        <body>
          <Container className="h-screen w-full flex flex-col justify-center items-center space-y-4">
            <h1>
              {error.status}
              <span className="font-thin"> | {error.statusText}</span>
            </h1>
            <Link to="/" className={buttonVariants({ variant: "default" })}>
              Go Home
            </Link>
          </Container>
          <Scripts />
        </body>
      </html>
    );
  }

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Container className="h-screen w-full flex justify-center items-center">
          <h1>
            {isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText}`
              : error instanceof Error
              ? error.message
              : "Unknown Error"}
          </h1>
        </Container>
        <Scripts />
      </body>
    </html>
  );
}
