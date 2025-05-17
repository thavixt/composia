import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Bold } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: 'Stories/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='size-full px-4 py-12'>
      <Story />
    </div>
  ),
  args: {
    'aria-label': "Toggle bold",
    defaultPressed: false,
    disabled: false,
    onPressedChange: fn(console.log),
    variant: 'default',
  },
  render: function RenderToggleStory(args: ComponentProps<typeof Toggle>) {
    return (
      <div className='flex gap-2 items-center justify-center'>
        <Toggle {...args}>
          <Bold className="h-4 w-4" />
          Bold
        </Toggle>
      </div>
    );
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    variant: 'outline',
  }
};

export const Default: Story = {};

