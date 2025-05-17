import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Calendar } from "@/components/ui/calendar"
import { useState, type ComponentProps } from 'react';
import type { DateRange } from 'react-day-picker';

const meta = {
  title: 'Stories/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  args: {
    className: "",
    initialFocus: true,
    mode: 'single',
    onSelect: fn(console.log),
    selected: new Date(),
    defaultMonth: new Date(),
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function CalendarDefaultStory({ selected, ...args }: ComponentProps<typeof Calendar>) {
    const [date, setDate] = useState<Date | undefined>((selected as Date) ?? new Date());
    return (
      <Calendar
        {...args}
        mode='single'
        selected={date}
        onSelect={(selectedDay: Date | DateRange | undefined) => {
          setDate(selectedDay as Date);
        }}
      />
    )
  }
};

export const Multiple: Story = {
  args: {
    selected: { from: new Date('1995-06-07'), to: new Date('1995-06-22') },
    defaultMonth: new Date('1995-06-07'),
  },
  render: function CalendarDefaultStory({ selected, ...args }: ComponentProps<typeof Calendar>) {
    const [date, setDate] = useState<DateRange | undefined>(typeof selected === 'object' ? selected as DateRange : { from: new Date(), to: new Date() });
    return (
      <Calendar
        {...args}
        mode='range'
        selected={date}
        onSelect={(range: Date | DateRange | undefined) => {
          setDate(range as DateRange);
        }}
      />
    )
  }
};
