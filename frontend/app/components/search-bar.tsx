import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";

export default function SearchBar() {
  return (
    <div className="w-full flex-1 md:w-auto md:flex-none">
      <form action="/search">
        <fieldset className="flex flex-col md:flex-row gap-2 h-[28px] rounded-md border border-foreground/60 opacity-60 transition-opacity hover:opacity-100 focus-within:opacity-100 overflow-hidden">
          <input
            id="query"
            name="query"
            className="px-2 text-sm focus:outline-none focus:ring-0 flex-1"
            placeholder="Search..."
            required
          />
          <Button type="submit" size="icon" variant="ghost" className="h-full">
            <Icons.Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
