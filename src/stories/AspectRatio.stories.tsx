import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio"

const x = 10;
const y = 4;

const meta = {
  title: 'Components/Aspect ratio',
  component: AspectRatio,
  tags: ['autodocs'],
  //parameters: {
  //	docs: {
  //		description: {
  //			component: 'TODO'
  //		}
  //	}
  //},
  args: {
    //
    ratio: x / y,
    className: "border-2 border-dashed border-gray-300 rounded-md",
  },
  render: (args: ComponentProps<typeof AspectRatio>) => {
    return (
      <AspectRatio {...args} style={{backgroundImage: `url('https://placehold.co/${x}00x${y}00')`, backgroundSize: 'cover'}}>
      {/* <img
        src="https://placehold.co/600x400"
        alt="Placeholder image (600x400)"
        title="Placeholder image (600x400)"
        className="size-fit rounded-md object-fit"
      /> */}
    </AspectRatio>
    );
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
