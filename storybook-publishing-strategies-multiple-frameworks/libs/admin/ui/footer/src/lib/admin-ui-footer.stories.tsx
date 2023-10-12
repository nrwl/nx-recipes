import type { Meta, StoryObj } from '@storybook/react';
import { AdminUiFooter } from './admin-ui-footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AdminUiFooter> = {
  component: AdminUiFooter,
  title: 'AdminUiFooter',
};
export default meta;
type Story = StoryObj<typeof AdminUiFooter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AdminUiFooter!/gi)).toBeTruthy();
  },
};
