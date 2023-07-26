import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';

const wrapRequire = (packageName) =>
  path.dirname(require.resolve(path.join(packageName, 'package.json')));


const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    wrapRequire('@storybook/addon-links'),
    wrapRequire('@storybook/addon-essentials'),
    wrapRequire('@storybook/addon-onboarding'),
    wrapRequire('@storybook/addon-interactions'),
  ],
  framework: {
    name: wrapRequire('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
