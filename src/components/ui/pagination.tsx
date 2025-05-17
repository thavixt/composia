import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { createContext, useContext, useState } from "react";

interface PaginationContextType {
  onChange: (newPage: number) => void;
  page: number;
  pageCount: number;
  showPages: number;
}

const PaginationContext = createContext<PaginationContextType>({
  onChange: () => { },
  page: 0,
  pageCount: 10,
  showPages: 2,
});

function usePaginationContext() {
  const context = useContext(PaginationContext)
  if (!context) {
    throw new Error("usePaginationContext must be used within a DropdownMenu");
  }
  return context
}

interface PaginationProps extends Omit<React.ComponentProps<"nav">, "onChange"> {
  /** Called when the current page changes */
  onChange: (newPage: number, previousPage: number) => void;
  /** Default page index */
  defaultPage?: number;
  /** Number of pages */
  pageCount: number,
  /** Number of previous/next pages to show */
  showPages?: number,
}

/**
 * Pagination with page navigation, next and previous links.
 */
function Pagination({ className, onChange, defaultPage = 0, pageCount, showPages = 2, ...props }: PaginationProps) {
  const [page, setPage] = useState(defaultPage);

  const handlePageChange = (newPage: number) => {
    setPage(prevPage => {
      onChange(newPage, prevPage);
      return newPage;
    });
  };

  return (
    <PaginationContext.Provider
      value={{ onChange: handlePageChange, page: page, pageCount, showPages }}
    >
      <nav
        role="navigation"
        aria-label="pagination"
        data-slot="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
      >
        <PaginationContent />
      </nav>
    </PaginationContext.Provider>
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  const { page, pageCount } = usePaginationContext();

  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    >
      <PaginationItem hidden={page <= 0}>
        <PaginationPrevious />
      </PaginationItem>
      <PreviousPageItems />
      <PaginationItem>
        <PaginationLink isActive>{page + 1}</PaginationLink>
      </PaginationItem>
      <NextPageItems />
      <PaginationItem hidden={page >= pageCount - 1}>
        <PaginationNext />
      </PaginationItem>
    </ul>
  )
}

function PreviousPageItems() {
  const { page, showPages, onChange } = usePaginationContext();

  return (
    <>
      <PaginationItem hidden={page - showPages <= 0}>
        <PaginationEllipsis />
      </PaginationItem>
      {new Array(showPages).fill(0).map((_, i) => {
        const pageIndex = page - i;
        return (
          <PaginationItem key={pageIndex} hidden={pageIndex <= 0}>
            <PaginationLink onClick={() => onChange(pageIndex - 1)}>{pageIndex}</PaginationLink>
          </PaginationItem>
        );
      }).reverse()}
    </>
  )
}

function NextPageItems() {
  const { page, pageCount, showPages, onChange } = usePaginationContext();

  return (
    <>
      {new Array(showPages).fill(0).map((_, i) => {
        const pageIndex = page + i + 2;
        return (
          <PaginationItem key={pageIndex} hidden={pageIndex >= pageCount + 1}>
            <PaginationLink onClick={() => onChange(pageIndex - 1)}>{pageIndex}</PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem hidden={page + showPages + 1 >= pageCount}>
        <PaginationEllipsis />
      </PaginationItem>
    </>
  )
}

function PaginationItem({ hidden, className, ...props }: React.ComponentProps<"li">) {
  return <li
    data-slot="pagination-item"
    className={cn(className, hidden ? "invisible" : "visible")}
    {...props}
  />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
        "select-none",
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const { page, onChange } = usePaginationContext();
  const disabled = page === 0;

  return (
    <PaginationLink
      aria-label="Go to previous page"
      aria-disabled={disabled}
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
      onClick={() => {
        onChange(Math.max(page - 1, 0));
      }}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const { page, pageCount, onChange } = usePaginationContext();
  const disabled = page === pageCount - 1;

  return (
    <PaginationLink
      aria-label="Go to next page"
      aria-disabled={disabled}
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
      onClick={() => {
        onChange(Math.min(page + 1, pageCount - 1));
      }}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
