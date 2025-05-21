import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

type AvatarSize = 'sm' | 'md' | 'lg';
interface BaseAvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  size?: AvatarSize;
}

/**
 * An image element with a fallback for representing the user.
 */
function Avatar({
  className,
  size = 'sm',
  ...props
}: BaseAvatarProps) {
  const sizeClass = cn({
    'size-8': size === 'sm',
    'size-12': size === 'md',
    'size-16': size === 'lg',
  });

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        sizeClass,
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

interface AvatarImageProps extends BaseAvatarProps {
  src: string;
  fallback?: string;
}

/**
 * An image element with a fallback for representing the user.
 */
function AvatarComponent({ src, fallback, ...avatarProps}: AvatarImageProps) {
  return (
    <Avatar {...avatarProps}>
      <AvatarImage src={src} />
      {fallback ? <AvatarFallback>{fallback}</AvatarFallback> : null}
    </Avatar>
  );
}

// export { Avatar, AvatarImage, AvatarFallback }
export { AvatarComponent as Avatar }
