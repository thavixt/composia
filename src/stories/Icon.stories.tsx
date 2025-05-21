import { useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Icon, iconNames } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { debounce } from '@/lib/utils';

const meta = {
  component: Icon,
  args: {
    name: "cat",
    // color: "currentColor",
    onClick: fn(console.log),
  },
  render: function RenderIconStory(args: ComponentProps<typeof Icon>) {
    return (
      <Icon {...args} />
    );
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Styled: Story = {
  args: {
    className: 'animate-bounce',
    color: 'orange',
    size: 64,
    strokeWidth: 3,
  }
};

export const Library: Story = {
  render: function IconsLibraryStory() {
    const [search, setSearch] = useState('');
    const debouncedOnChange = debounce(setSearch);

    return (
      <div className='flex flex-col gap-4'>
        <Input placeholder='Search for an icon by name' className='w-full' onChange={e => debouncedOnChange(e.currentTarget.value)} />
        <div className='grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-20 gap-2'>
          {iconNames.map(iconName => {
            return (
              <div
                style={{ display: (!search || iconName.includes(search.toLowerCase())) ? 'flex' : 'none' }}
                key={iconName}
                className='border-2 border-transparent hover:border-primary bg-border/50 p-1 rounded-md cursor-pointer items-center justify-center'
                title={`Click to copy <Icon name="${iconName}" />`}
                onClick={() => {
                  navigator.clipboard.writeText(`<Icon name="${iconName}" />`)
                }}
              >
                <Icon name={iconName} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
};
