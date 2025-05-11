import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@/components/ui/datepicker';

const meta = {
  title: 'Basic/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    //
  }
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
