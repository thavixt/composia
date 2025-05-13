import { type ThemeVariableDictionary } from "@/lib/theme";
import { useRef, type PropsWithChildren } from "react";

export interface ThemeOverrideProps {
  /** Theme variable for light theme */
  light?: ThemeVariableDictionary['light'],
  /** Theme variable for dark theme */
  dark?: ThemeVariableDictionary['dark'],
}

/**
 * Overrides the CSS variables for the default theme.
 * Usage: wrap your component subtree with the `<ThemeOverride overrides={...} />` component.
 * 
 * All available CSS variable names of colors for the `neutral` theme can be found [here](https://ui.shadcn.com/docs/theming#neutral).
 */
export function ThemeOverride({ children, light = {}, dark = {} }: PropsWithChildren<ThemeOverrideProps>) {
  const id = useRef(`theme-${crypto.randomUUID().slice(0, 8)}`);

  if (!light && !dark) {
    // If no theme overrides are provided, return children without any modifications
    return children;
  }

  const styles = `.${id.current} {
  ${Object.entries(light).map(([k, v]) => `--${k}: ${v};`).join('\n\t')}
}
.dark .${id.current},
[data-theme=dark] .${id.current} {
  ${Object.entries(dark).map(([k, v]) => `--${k}: ${v};`).join('\n\t')}
}`;

  return (
    <div className={id.current}>
      <style scoped>{styles}</style>
      {children}
    </div>
  );
}

export type { ThemeVariableDictionary };
