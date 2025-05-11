import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from "@/components/ui/progress"
import { useEffect, useState, type ComponentProps } from 'react';

const meta = {
  title: 'Basic/Progress',
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
    const [progress, setProgress] = useState(13)

    useEffect(() => {
      const timer = setTimeout(() => setProgress(Math.random() * 100), 2000)
      return () => clearTimeout(timer)
    }, [])

    return <Progress {...args} value={progress} className="w-[60%]" />;
  }
};
