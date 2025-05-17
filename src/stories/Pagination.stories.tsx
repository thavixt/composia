import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Pagination } from "@/components/ui/pagination"
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    pageCount: 10,
    defaultPage: 4,
    showPages: 2,
  },
  render: function RenderPaginationStory(args: ComponentProps<typeof Pagination>) {
    return (
      <Pagination {...args} />
    );
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
