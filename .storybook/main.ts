import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  // ...
  // framework: '@storybook/react-webpack5', 👈 Remove this
  framework: '@storybook/nextjs', // 👈 Add this
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
};

export default config;