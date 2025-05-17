import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    // "@storybook/addon-onboarding",
    "@storybook/addon-themes",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  managerHead: (head) => `
    ${head}
    <link rel="icon" href="/composia.svg" type="image/svg+xml">
  `,
};
export default config;