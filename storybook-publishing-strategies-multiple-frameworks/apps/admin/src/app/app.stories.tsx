import type { Meta, StoryObj } from '@storybook/react';
import { App } from './app';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default meta;
type Story = StoryObj<typeof App>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to App!/gi)).toBeTruthy();
  },
};
