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

export const Default: Story = { args: { size: 'md'}};

export const Sm: Story = { args: { size: 'sm'}};

export const LG: Story = { args: { size: 'lg'}};
