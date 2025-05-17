import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Slider } from '@/components/ui/slider';
import { fn } from '@storybook/test';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    className: "w-52",
    defaultValue: [50],
    disabled: false,
    max: 100,
    min: 0,
    orientation: 'horizontal',
    step: 1,
    onValueChange: fn(console.log),
  },
  decorators: (Story) => (
    <div className='size-full px-4 py-12'>
      <Story />
    </div>
  ),
  render: function RenderSliderStory(args: ComponentProps<typeof Slider>) {
    return (
      <div className="flex gap-2 items-center justify-center">
        <Label>Volume slider:</Label>
        <Slider {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LargeStep: Story = {
  args: {
    step: 25,
  }
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    className: "w-32",
  }
};

export const MultipleRanges: Story = {
  args: {
    className: "w-92",
    defaultValue: [20, 50, 75],
    min: 10,
    max: 90,
    minStepsBetweenThumbs: 1,
  },
};
