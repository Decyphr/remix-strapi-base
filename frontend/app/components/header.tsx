import { Link, NavLink } from "@remix-run/react";
import SearchBar from "~/components/search-bar";
import { Icons } from "~/components/ui/icons";
import { cn } from "~/lib/utils";

export default function Header() {
  const navigation: { link: string; text: string }[] = [
    {
      text: "Page One",
      link: "/page-one",
    },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Icons.CaretDoubleRight className="h-4 w-4 text-primary" />
            <span className="hidden font-bold sm:inline-block">Logo</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navigation.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                prefetch="intent"
                className={({ isActive }) =>
                  cn(
                    "transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground/80"
                  )
                }
              >
                {item.text}
              </NavLink>
            ))}
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R96la:"
          data-state="closed"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <SearchBar />
          <nav className="flex items-center">
            <a target="_blank" rel="noreferrer" href="https://github.com">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-[28px] py-2 w-[28px] px-0">
                <Icons.Github className="h-4 w-4 fill-current" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-[28px] py-2 w-[28px] px-0">
                <svg
                  className="h-3 w-3 fill-current"
                  height="23"
                  viewBox="0 0 1200 1227"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
