import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const meta = {
  title: 'Stories/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  args: {
    className: "w-full max-w-xs h-full",
    orientation: 'horizontal',
    opts: {
      loop: false,
    }
  },
  render: (args: ComponentProps<typeof Carousel>) => {
    return (
      <Carousel {...args}>
        <CarouselContent className='h-[400px]'>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center px-6">
                    {/* <span className='font-bold text-8xl'>{index + 1}</span> */}
                    <img src={`https://picsum.photos/seed/random${Math.round(Math.random() * 1000)}/600/600`} alt="Lorem picsum" />
                    <CardDescription>Image #{index + 1}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = { args: { orientation: 'horizontal' } };

export const Vertical: Story = { args: { orientation: 'vertical' } };
