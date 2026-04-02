import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

function PagenationComponent({
  currentPage,
  totalPages,
  onPageChange,
  entries,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  entries: number;
}) {
  return (
    <Pagination className="justify-between">
      <p className="text-[#B5B7C0] text-[14px]">
        Showing data {currentPage} to {totalPages} of {entries} entries
      </p>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          />
        </PaginationItem>

        {/* Pages */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PagenationComponent;
