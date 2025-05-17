import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Separator } from "@/components/ui/separator"
import { cn } from '@/lib/utils';

const meta = {
  title: 'Stories/Separator',
  component: Separator,
  tags: ['autodocs'],
  args: {
    className: '',
    orientation: "horizontal",
    decorative: true,
  },
  render: function RenderSeparatorStory({ className, ...args }: ComponentProps<typeof Separator>) {
    return (
      <div className='flex flex-col'>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">@thavixt/composia</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library based on <code>shadcdn</code>.
            </p>
          </div>
          <Separator {...args} className={cn(className, "my-4")} />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <a href="javascript:void 0;">Documentation</a>
            <Separator {...args} className={className} orientation="vertical" />
            <a href="javascript:void 0;">Examples / Storybook</a>
            <Separator {...args} className={className} orientation="vertical" />
            <a href="javascript:void 0;">Source</a>
          </div>
      </div>
    );
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
