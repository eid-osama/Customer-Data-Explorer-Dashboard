import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
  entries,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  entries: number;
  pageSize?: number;
}) {
  const pages = [];

  // Previous page
  if (currentPage > 1) {
    pages.push(currentPage - 1);
  }

  // Current page
  pages.push(currentPage);

  // Next page
  if (currentPage < totalPages) {
    pages.push(currentPage + 1);
  }

  return (
    <Pagination className="justify-between">
      <p className="text-[#B5B7C0] text-[14px]">
        Showing data {currentPage} to {totalPages} of {entries} entries
      </p>

      <PaginationContent>
        {/* Prev Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        {/* Pages */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
