import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/experimental-addon-test",
  ],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  docs: {
    autodocs: true,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: false,
    }
  },
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  typescript: {
    check: false,
    skipCompiler: true,
    // reactDocgen: "react-docgen",
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      include: ['src/**/*.{ts,tsx}'],
      propFilter: (prop) => {
        // console.log({
        //   name: prop.name,
        //   parent: prop.parent?.fileName,
        // });
        if (['asChild'].includes(prop.name)) {
          return false;
        }
        if (prop.parent?.fileName.includes('node_modules/@types/react')) {
          return false;
        }
        return true;
      },
    }
  },
  managerHead: (head) => `
    ${head}
    <link rel="icon" href="/composia.svg" type="image/svg+xml">
  `,
};
export default config;