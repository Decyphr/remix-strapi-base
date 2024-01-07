import { Link } from "@remix-run/react";
import { buttonVariants } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";

export default function HomepageHero() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <Icons.TrendUp className="h-12 w-12 text-primary" />
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Grow your business online.
      </h1>
      <span
        className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
        data-br=":r68:"
        data-brr="1"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </span>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <Link to="page-one" className={buttonVariants({ variant: "default" })}>
          Get Started
        </Link>
        <Link
          to="/sample-page"
          className={buttonVariants({ variant: "outline" })}
        >
          View More
        </Link>
      </div>
    </section>
  );
}
