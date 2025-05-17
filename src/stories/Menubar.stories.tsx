import type { Meta, StoryObj } from '@storybook/react';
import { useState, type ComponentProps } from 'react';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { fn } from '@storybook/test';

const meta = {
  title: 'Stories/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  args: {
    onClick: fn(console.log),
  },
  render: function RenderMenubarStory(args: ComponentProps<typeof Menubar>) {
    const [showBookmarkBar, setShowBookmarkBar] = useState(false);
    const [showFullUrls, setShowFullUrls] = useState(true);
    const [profile, setProfile] = useState('luis');

    const onClick = (value: string) => {
      args.onClick(value);
      switch (value) {
        case 'always-show-bookmark-bar':
          setShowBookmarkBar(!showBookmarkBar);
          break;
        case 'always-show-full-urls':
          setShowFullUrls(!showFullUrls);
          break;
        case 'andy':
        case 'benoit':
        case 'luis':
          setProfile(value);
          break;
        default:
          break;
      }
    };

    return (
      <Menubar {...args} onClick={onClick}>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem value='new-tab'>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem value='new-window'>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled value='new-incognito'>
              New Incognito Window
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem value='new-email'>Email link</MenubarItem>
                <MenubarItem value='messages'>Messages</MenubarItem>
                <MenubarItem value='notes'>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem value='print'>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem value='undo'>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem value='redo'>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem value='search-web'>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem value='fint'>Find...</MenubarItem>
                <MenubarItem value='find-next'>Find Next</MenubarItem>
                <MenubarItem value='find-prev'>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem value='cut'>Cut</MenubarItem>
            <MenubarItem value='copy'>Copy</MenubarItem>
            <MenubarItem value='paste'>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked={showBookmarkBar} value='always-show-bookmark-bar'>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked={showFullUrls} value='always-show-full-urls'>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset value='reload'>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset value='force-reload'>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset value='fullscreen'>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset value='hide-sidebar'>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={profile}>
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset value='edit'>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset value='add-profile'>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  },
} satisfies Meta<typeof Menubar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
