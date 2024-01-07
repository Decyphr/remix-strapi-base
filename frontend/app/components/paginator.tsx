import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

import type { StrapiResponseMeta } from "~/types";

type PaginatorProps = {
  meta: StrapiResponseMeta;
  currentPage: number;
};

export default function Paginator({ meta, currentPage }: PaginatorProps) {
  if (!meta.pagination || meta.pagination.pageCount <= 1) return null;

  const pages = Array.from(
    { length: meta.pagination.pageCount },
    (_, i) => i + 1
  );

  const disabledClass = "pointer-events-none bg-Grey-60 opacity-50";

  return (
    <Pagination className="py-4">
      <PaginationContent>
        {/* NOTE: Show the current page of total number if needed
        <div className="flex items-center justify-center text-sm font-medium text-Grey-100 mr-6">
          Page {currentPage} of {meta.pagination.pageCount}
        </div> 
        */}
        <PaginationFirst
          to="?page=1"
          className={currentPage === 1 ? disabledClass : ""}
        />
        <PaginationPrevious
          to={`?page=${currentPage - 1}`}
          className={currentPage === 1 ? disabledClass : ""}
        />
        {pages.map((page) => (
          <PaginationLink
            key={page}
            to={`?page=${page}`}
            isActive={currentPage === page}
          >
            {page}
          </PaginationLink>
        ))}
        <PaginationNext
          to={`?page=${currentPage + 1}`}
          className={
            currentPage === meta.pagination.pageCount ? disabledClass : ""
          }
        />
        <PaginationLast
          to={`?page=${meta.pagination.pageCount}`}
          className={
            currentPage === meta.pagination.pageCount ? disabledClass : ""
          }
        />
      </PaginationContent>
    </Pagination>
  );
}
