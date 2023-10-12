import type { Meta, StoryObj } from '@storybook/react';
import { AdminUiHeader } from './admin-ui-header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AdminUiHeader> = {
  component: AdminUiHeader,
  title: 'AdminUiHeader',
};
export default meta;
type Story = StoryObj<typeof AdminUiHeader>;

export const Primary = {
  args: {
    userName: '',
  },
};

export const Heading: Story = {
  args: {
    userName: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AdminUiHeader!/gi)).toBeTruthy();
  },
};
