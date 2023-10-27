import type { Meta, StoryObj } from '@storybook/react';
import { ClientUiFooter } from './client-ui-footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ClientUiFooter> = {
  component: ClientUiFooter,
  title: 'ClientUiFooter',
};
export default meta;
type Story = StoryObj<typeof ClientUiFooter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ClientUiFooter!/gi)).toBeTruthy();
  },
};
