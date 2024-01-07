import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import qs from "qs";

import Container from "~/components/container";
import Paginator from "~/components/paginator";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getArticles } from "~/lib/data.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") ?? 1;

  const query = qs.stringify({
    sort: ["publishedAt:desc"],
    pagination: {
      page,
      pageSize: 1,
    },
  });

  const { blogs, meta } = await getArticles(query);

  return json({ blogs, meta, page });
}

export default function Blog() {
  const { blogs, meta, page } = useLoaderData<typeof loader>();

  return (
    <Container>
      <h1 className="mb-4">Blog</h1>
      <div className="flex flex-wrap gap-4">
        {blogs.map((blog) => (
          <Card key={blog.id} className="min-w-[280px] max-w-[360px]">
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{blog.description}</p>
            </CardContent>
            <CardFooter>
              <Link
                to={`/blog/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Paginator meta={meta} currentPage={Number(page) ?? 1} />
    </Container>
  );
}
