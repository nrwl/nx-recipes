import type { Meta, StoryObj } from '@storybook/react';
import { SharedUiMain } from './shared-ui-main';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SharedUiMain> = {
  component: SharedUiMain,
  title: 'SharedUiMain',
};
export default meta;
type Story = StoryObj<typeof SharedUiMain>;

export const Primary = {
  args: {
    text: '',
  },
};

export const Heading: Story = {
  args: {
    text: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SharedUiMain!/gi)).toBeTruthy();
  },
};
