import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Bold, Italic, Underline } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = {
  title: 'Stories/Toggle group',
  component: ToggleGroup,
  subcomponents: { ToggleGroupItem },
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='size-full px-4 py-12'>
      <Story />
    </div>
  ),
  args: {
    type: 'multiple',
    defaultValue: ['underline'],
    onValueChange: fn(console.log),
    disabled: false,
    variant: 'default',
  },
  render: function RenderToggleGroupStory(args: ComponentProps<typeof ToggleGroup>) {
    return (
      <div className='flex gap-2 items-center justify-center'>
        <ToggleGroup {...args}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    );
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  // @ts-expect-error @TODO
  args: {
    variant: 'outline',
  }
};

// @ts-expect-error @TODO
export const Default: Story = {};
