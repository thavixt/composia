import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { Controls, Description, Primary, Title, Stories } from '@storybook/blocks';
import { storyModes } from './modes';
import { useEffect } from 'react';

import './storybook.css';

const docsPage = () => (
  <>
    <Title />
    <Description />
    <Primary />
    <Controls />
    {/* <Source /> */}
    <Stories includePrimary={false} />
  </>
);

const preview: Preview = {
  parameters: {
    docs: { page: docsPage },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      modes: {
        light: storyModes['light'],
        dark: storyModes['dark'],
      },
    },
  },
  decorators: [
    (Story, args) => {
      // Option 1. - set the theme on the root document element based on the global args
      const theme = args.globals.theme;
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

      if (args.parameters.disableGlobalDecorator) {
        return <Story />;
      }

      return (
        // Option 2. - set the theme on the container element
        // <div className='size-fit' data-theme={theme}>
        // <div className='size-full flex flex-col place-items-center p-12'>
        <div className="storybook-story-preview flex min-h-[350px] w-full justify-center items-center p-16">
          <Story />
        </div>
      )
    },
  ],
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];

export default preview;