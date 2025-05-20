import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { CalendarDays } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { fn } from '@storybook/test';

const meta = {
  title: 'Stories/Hover card',
  component: HoverCard,
  tags: ['autodocs'],
  args: {
    closeDelay: 100,
    defaultOpen: false,
    open: undefined,
    openDelay: 250,
    onOpenChange: fn(console.log),
  },
  render: function RenderHoverCardStory(args: ComponentProps<typeof HoverCard>) {
    return (
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar src="https://github.com/vercel.png" fallback='VC' />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  },
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
