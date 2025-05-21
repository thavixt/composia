import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { fn } from '@storybook/test';

const meta = {
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    items: [
      { label: '@thavixt/composia', key: 'home' },
      { label: 'Documentation', key: 'docs' },
      {
        label: 'Categories',
        key: 'categories',
        menu:
        {
          collapsed: true,
          items: [
            { label: 'Basic', key: 'basic' },
            { label: 'Composite', key: 'composite' },
            { label: 'Layout', key: 'layout' },
            { label: 'Page', key: 'page' },
          ]
        },
      },
      {
        label: 'Components',
        key: 'components',
        menu:
        {
          items: [
            { label: 'Accordion', key: 'accordion' },
            { label: 'Breadcrumbs', key: 'breadcrumbs' },
            { label: 'Checkbox', key: 'checkbox' },
            { label: 'Dialog', key: 'dialog' },
          ]
        },
      },
      { label: 'Breadcrumbs', key: 'breadcrumbs-preview' },
    ],
    onClick: fn(console.log),
  }
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
