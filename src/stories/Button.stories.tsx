import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import type { ComponentProps } from 'react';
import { CatIcon } from 'lucide-react';

const meta = {
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'default',
    disabled: false,
    size: 'md',
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Story({ children, ...args }: ComponentProps<typeof Button>) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
        <Button {...args}>{children} <CatIcon /> (default)</Button>
        <Button {...args} variant="outline">{children} (outline)</Button>
        <Button {...args} variant="ghost">{children} (ghost)</Button>
        <Button {...args} variant="link">{children} (link)</Button>
        <Button {...args} variant="destructive">{children} (destructive)</Button>
        <Button {...args} variant="secondary">{children} (secondary)</Button>
        <Button {...args} variant="default" disabled>{children} (default)</Button>
      </div>
    )
  }
};
