import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Stories/Alert dialog',
  component: AlertDialog,
  tags: ['autodocs'],
  args: {
    defaultOpen: false,
    title: 'Warning! This is an important decision.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iusto?',
    trigger: <Button variant="outline">Let's do this!</Button>,
    cancelLabel: "I'd rather not",
    continueLabel: 'Sure, why not?',
    onCancel: fn(console.log),
    onContinue: fn(console.log),
    onOpenChange: fn(console.log),
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
