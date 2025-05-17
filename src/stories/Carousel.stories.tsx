import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  args: {
    className: "w-full max-w-xs",
  },
  render: (args: ComponentProps<typeof Carousel>) => {
    return (
      <div className="flex items-center justify-center">
        <Carousel {...args}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center px-6">
                      <img src={`https://picsum.photos/seed/random${Math.round(Math.random() * 1000)}/600/800`} alt="Lorem picsum" />
                      <span className="text-sm font-light italic">Image #{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
