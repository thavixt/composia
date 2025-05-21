import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

type AspectRatioProps = React.ComponentProps<typeof AspectRatioPrimitive.Root>;

/**
 * Displays content within a desired ratio.
 */
function AspectRatio({
  ...props
}: AspectRatioProps) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio, type AspectRatioProps }
