import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Combobox } from '@/components/ui/combobox';
import { fn } from '@storybook/test';
import { Label } from '@/components/ui/label';

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  args: {
    disabled: false,
    defaultOpen: false,
    emptyPlaceholder: "No framework found",
    placeholder: "Select a framework...",
    searchPlaceholder: "Search for a framework...",
    values: frameworks,
    onChange: fn(),
  },
  render: function RenderComboboxStory(args: ComponentProps<typeof Combobox>) {
    return (
      <div className="flex items-center gap-2">
        <Label>Base framework template:</Label>
        <Combobox {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
