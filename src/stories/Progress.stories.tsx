import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from "@/components/ui/progress"
import { useState, type ComponentProps } from 'react';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    //
  }
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

  render: function Story(args: ComponentProps<typeof Progress>) {
    const [progress] = useState(42);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     const rnd = Math.floor(Math.random() * 100);
    //     setProgress(rnd);
    //   }, 1000)
    //   return () => clearTimeout(interval);
    // }, []);

    return <div className='flex flex-col space-y-2'>
      <Label>Downloading @thavixt/composia:</Label>
      <div className="flex space-x-2 items-center">
        <Progress {...args} value={progress} className="w-[60%]" />
        <Label>{progress}%</Label>
      </div>
    </div>;
  }
};
