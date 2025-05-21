import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"
import { Fragment } from "react"

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export interface BreadcrumbItem {
  label: string;
  key?: string;
  link?: string;
  menu?: {
    items: BreadcrumbItem[];
    collapsed?: boolean;
  };
}

function BreadcrumbPart({ item, onClick, end }: {
  item: BreadcrumbItem,
  onClick?: (key: string) => void;
  end?: boolean;
}) {
  if (item.menu) {
    return (
      <BreadcrumbItem>
        <DropdownMenu onClick={onClick}>
          <DropdownMenuTrigger className="flex items-center gap-1">
            {item.menu.collapsed ? (
              <BreadcrumbEllipsis title={item.label} className="h-4 w-4" />
            ) : (
              <BreadcrumbLink>
                {item.label}
              </BreadcrumbLink>
            )}
            <span className="sr-only">Toggle {item.label} menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {item.menu.items.map((menuItem) => (
              <DropdownMenuItem name={menuItem.key ?? menuItem.label}>
                {menuItem.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
    );
  }

  return (
    <BreadcrumbItem key={item.label}>
      {end ? (
        <BreadcrumbPage>
          {item.label}
        </BreadcrumbPage>
      ) : (
        <BreadcrumbLink onClick={() => onClick?.(item.key ?? item.label)}>
          {item.label}
        </BreadcrumbLink>
      )}
    </BreadcrumbItem>
  );
}

export interface BreadcrumbsProps {
  onClick?: (key: string) => void;
  items: BreadcrumbItem[];
}

/**
 * Displays the path to the current resource using a hierarchy of links. Provides navigation by clicking the links or dropdown items.
 */
function Breadcrumbs({ onClick, items }: BreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => (
          <Fragment key={item.key}>
            <BreadcrumbPart item={item} onClick={onClick} end={i === items.length - 1} />
            {i === items.length - 1 ? null : <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export { Breadcrumbs }
