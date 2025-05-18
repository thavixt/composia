import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const meta = {
  title: 'Stories/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    title: 'Warning!',
    description: 'Lorem ipsum dolor sit amet.',
    children: <AlertCircle className="h-4 w-4" />,
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Destructive: Story = {
  args: {
    variant: 'destructive'
  }
};
