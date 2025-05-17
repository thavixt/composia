import type { Meta, StoryObj } from '@storybook/react';
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import type { ComponentProps } from 'react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Stories/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='size-full place-items-center px-4 py-12'>
      <Story />
    </div>
  ),
  args: {
    disabled: false,
    id: 'input',
    readOnly: false,
    defaultValue: undefined,
    placeholder: 'Write something here',
    onChange: fn(console.log),
  },
  render: (args: ComponentProps<typeof Input>) => {
    return (
      <div className="w-64 grid grid-cols-[auto_1fr] gap-2">
        <Label>Input label:</Label>
        <Input {...args} />
      </div>
    )
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
