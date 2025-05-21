import type { ComponentProps, HTMLAttributes } from "react";
import { DynamicIcon, iconNames, type IconName } from "lucide-react/dynamic";

export type IconProps = HTMLAttributes<HTMLDivElement> & ComponentProps<typeof DynamicIcon>;

function Icon({name, ...props}: IconProps) {
  return (
    <DynamicIcon {...props} name={name}>
      asd
    </DynamicIcon>
  )
}

export { Icon, iconNames, type IconName }