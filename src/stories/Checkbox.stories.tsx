import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Stories/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    id: "terms",
    defaultChecked: true,
    onCheckedChange: fn(console.log)
  },
  render: function RenderCheckboxStory(args: ComponentProps<typeof Checkbox>) {
    return (
      <div className="flex gap-2 items-center">
        <Label>Accept terms and conditions:</Label>
        <Checkbox {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
