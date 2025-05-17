import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, type ComponentProps } from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Components/Scroll area',
  component: ScrollArea,
  subcomponents: {
    ScrollBar,
  },
  tags: ['autodocs'],
  args: {
    className: '',
    type: "auto",
    dir: "ltr",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 35 }).map(
  (_, index) => `v${index}.${Math.round(Math.random() * 10)}.${Math.round(Math.random() * 100)}-${crypto.randomUUID().slice(0, 12).replace(/-/g, '')}`
).reverse();

export const Vertical: Story = {
  args: {
    className: 'w-full h-96 border-t'
  },
  render: function RenderScrollAreaStory(args: ComponentProps<typeof ScrollArea>) {
    return (
      <div className='w-64 h-fit flex flex-col rounded-md border'>
        <Label className="p-4 text-sm font-medium leading-none">
          Stable major release versions:
        </Label>
        <ScrollArea {...args}>
          <div className="p-4">
            {tags.map((tag, i) => (
              <Fragment key={tag}>
                <div className="text-sm">
                  <a href="javascript:void 0;">{tag}</a>
                </div>
                {i === tags.length - 1 ? null : <Separator className="my-2" />}
              </Fragment>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  }
};

const artworks = new Array(10).fill(0).map((_, i) => {
  const id = i + 15;
  return {
    description: `id/${id}/300/400`,
    art: `https://picsum.photos/id/${id}/200/300`,
  };
})

export const Horizontal: Story = {
  args: {
    className: 'w-[400px] whitespace-nowrap'
  },
  render: function RenderScrollAreaStory(args: ComponentProps<typeof ScrollArea>) {
    return (
      <div className="flex flex-col rounded-md border">
        <Label className="p-4 text-sm font-medium leading-none">
          Placeholder images from picsum:
        </Label>
        <Separator />
        <ScrollArea {...args}>
        <div className="flex w-max space-x-4 p-4">
          {artworks.map((artwork) => (
            <figure key={artwork.description} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={artwork.art}
                  alt={`Photo description: ${artwork.description}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Image:{" "}
                <span className="font-semibold text-foreground">
                  {artwork.description}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      </div>
    )
  }
};
