import type { Meta, StoryObj } from '@storybook/react';import { Label } from "@/components/ui/label"

const meta = {
  title: 'Input/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Your email address',
  }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
