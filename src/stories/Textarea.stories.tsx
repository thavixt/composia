import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Stories/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className='size-full px-4 py-12'>
      <Story />
    </div>
  ),
  args: {
    onChange: fn(e => console.log(e.currentTarget.value)),
    placeholder: "Type your message here.",
    id: "message",
  },
  render: function RenderTextareaStory(args: ComponentProps<typeof Textarea>) {
    return (
      <div className='flex flex-col gap-2 items-start justify-center'>
        <Label htmlFor={args.id}>Some block of text for a form maybe?</Label>
        <Textarea {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
