import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { storyModes } from './modes';
import '../src/index.css';
import { useEffect } from 'react';
// import './preview.css';

const preview: Preview = {
  parameters: {
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
      const theme = args.globals.theme;

      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

      return (
        // <div className='w-full h-full' data-theme={theme}>
        <div className='w-full h-full'>
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