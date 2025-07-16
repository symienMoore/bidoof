import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Tab from './tab';

const meta = {
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};