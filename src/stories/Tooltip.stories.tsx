import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const meta = {
  title: 'Stories/Tooltip',
  component: TooltipProvider,
  subcomponents: {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='size-full px-4 py-12'>
      <Story />
    </div>
  ),
  args: {
    defaultOpen: false,
    open: undefined,
    delayDuration: 700,
    disableHoverableContent: false,
    onOpenChange: fn(console.log),
  },
  render: function RenderTooltipStory(args: ComponentProps<typeof Tooltip>) {
    return (
      <div className='flex gap-2 items-center justify-center'>
        <TooltipProvider {...args}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>If you click now, I'll disappear</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-expect-error @TODO
export const Default: Story = {};
