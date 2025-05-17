import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

/**
 * Displays content within a desired ratio.
 */
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
