import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import type { ComponentProps } from 'react';

const meta = {
  title: 'Basic/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'default',
    disabled: false,
    size: 'lg',
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Story(args: ComponentProps<typeof Button>) {
    return (
      <div className="flex flex-col space-y-2 items-start">
        <Button {...args}>Default</Button>
        <Button {...args} variant="outline">Outline</Button>
        <Button {...args} variant="ghost">Ghost</Button>
        <Button {...args} variant="link">Link</Button>
        <Button {...args} variant="destructive">Destructive</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="default" disabled>Disabled</Button>
      </div>
    )
  }
};
