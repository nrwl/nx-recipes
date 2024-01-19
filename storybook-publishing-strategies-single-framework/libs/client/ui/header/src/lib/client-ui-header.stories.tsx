import type { Meta, StoryObj } from '@storybook/react';
import { ClientUiHeader } from './client-ui-header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ClientUiHeader> = {
  component: ClientUiHeader,
  title: 'ClientUiHeader',
};
export default meta;
type Story = StoryObj<typeof ClientUiHeader>;

export const Primary = {
  args: {
    title: '',
  },
};

export const Heading: Story = {
  args: {
    title: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ClientUiHeader!/gi)).toBeTruthy();
  },
};
