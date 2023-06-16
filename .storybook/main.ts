import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;