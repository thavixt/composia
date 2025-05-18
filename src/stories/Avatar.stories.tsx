import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/components/ui/avatar';

const meta = {
  title: 'Stories/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/shadcn.png',
    fallback: 'CN',
    size: 'md',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Size_sm: Story = { args: { size: 'sm'}};

export const Size_md: Story = { args: { size: 'md'}};

export const Size_lg: Story = { args: { size: 'lg'}};
