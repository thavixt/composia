import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from "@/components/ui/badge"

const meta = {
  title: 'Stories/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
    variant: 'outline',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
