import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const meta = {
  title: 'Stories/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='size-full px-4 py-12'>
      <Story />
    </div>
  ),
  args: {
    onCheckedChange: fn(console.log),
    id: 'input',
    className: '',
    defaultChecked: true,
  },
  render: function RenderSwitchStory(args: ComponentProps<typeof Switch>) {
    return (
      <div className='flex gap-2 items-center justify-center'>
        <Label htmlFor={args.id}>Airplane Mode</Label>
        <Switch {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
