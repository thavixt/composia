import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState, type ComponentProps } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  // SidebarGroupAction,
  // SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarHeader,
  // SidebarInput,
  // SidebarInset,
  // SidebarMenu,
  // SidebarMenuAction,
  // SidebarMenuBadge,
  // SidebarMenuButton,
  // SidebarMenuItem,
  // SidebarMenuSkeleton,
  // SidebarMenuSub,
  // SidebarMenuSubButton,
  // SidebarMenuSubItem,
  SidebarProvider,
  // SidebarRail,
  // SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Skeleton, SkeletonListItem } from '@/components/ui/skeleton';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const listItems = 8;

const meta = {
  title: 'Components/Sidebar',
  component: SidebarProvider,
  subcomponents: {
    Sidebar,
    // SidebarContent,
    // SidebarFooter,
    // SidebarGroup,
    // SidebarGroupAction,
    // SidebarGroupContent,
    // SidebarGroupLabel,
    // SidebarHeader,
    // SidebarInput,
    // SidebarInset,
    // SidebarMenu,
    // SidebarMenuAction,
    // SidebarMenuBadge,
    // SidebarMenuButton,
    // SidebarMenuItem,
    // SidebarMenuSkeleton,
    // SidebarMenuSub,
    // SidebarMenuSubButton,
    // SidebarMenuSubItem,
    SidebarProvider,
    // SidebarRail,
    // SidebarSeparator,
    SidebarTrigger,
  },
  tags: ['autodocs'],
  args: {
    children: (
      <div className="flex flex-col gap-12 p-8">
        <div>
          <Label>Lots of skeletons below:</Label>
        </div>
        <div className='flex flex-col'>
          {new Array(listItems).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Label id={`list-item-${i + 1}`}>List item #{i + 1}</Label>
              <SkeletonListItem />
              <Skeleton />
            </div>
          ))}
        </div>
      </div>
    ),
    className: '',
    defaultOpen: undefined,
    open: undefined,
    onOpenChange: fn((opened: boolean) => !opened),
  },
  render: function RenderSidebarStory({ children, defaultOpen, onOpenChange, ...args }: ComponentProps<typeof SidebarProvider>) {
    const [open, setOpen] = useState(defaultOpen ?? false);
    const onOpenChangeHandler = (open: boolean) => {
      onOpenChange?.(open);
      setOpen(open);
    }

    return (
      <SidebarProvider {...args} open={open} onOpenChange={onOpenChangeHandler}>
        <Sidebar>
          <SidebarHeader className='pt-4'>
            <Label>Sidebar title label</Label>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup className='gap-2'>
              {new Array(listItems).fill(0).map((_, i) => (
                <>
                  <a href={`#list-item-${i + 1}`}>Scroll to list item #{i + 1}</a>
                </>
              ))}
            </SidebarGroup>
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter className='pb-4'>
            <Button>Some sidebar action</Button>
          </SidebarFooter>
        </Sidebar>
        <main className='relative flex flex-col gap-4 h-full'>
          <SidebarTrigger className='fixed top-4 right-4' />
          {children}
        </main>
      </SidebarProvider>
    );
  },
} satisfies Meta<typeof SidebarProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
