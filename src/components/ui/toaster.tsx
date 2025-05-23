import { useTheme } from "next-themes"
import { toast, Toaster as Sonner, type ToasterProps } from "sonner"

/**
 * An opinionated toast component for React.
 * 
 * @see https://ui.shadcn.com/docs/components/sonner
 * @see https://sonner.emilkowal.ski/
 */
const Toaster = ({ duration = 10_000, richColors = true, closeButton = true, expand = true, visibleToasts = 5, ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
      duration={duration}
      richColors={richColors}
      closeButton={closeButton}
      expand={expand}
      visibleToasts={visibleToasts}
    />
  )
}

export { Toaster, toast }
