import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@/components/ui/datepicker';
import { fn } from '@storybook/test';

const meta = {
  title: 'Stories/Date picker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    defaultValue: new Date(),
    onChange: fn(console.log),
  }
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
