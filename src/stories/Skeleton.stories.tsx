import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Skeleton, SkeletonListItem } from "@/components/ui/skeleton"

const meta = {
  title: 'Stories/Skeleton',
  component: SkeletonListItem,
  subcomponents: { Skeleton },
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='size-full px-4 py-12'>
      <Story />
    </div>
  ),
  args: {
    className: "w-full h-[20px] rounded-full"
  },
  render: function RenderSkeletonStory(args: ComponentProps<typeof Skeleton>) {
    return (
      <div className='flex flex-col gap-4 items-start'>
        <SkeletonListItem {...args} />
        <Skeleton {...args} />
        <SkeletonListItem {...args} />
        <Skeleton {...args} />
        <Skeleton {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
