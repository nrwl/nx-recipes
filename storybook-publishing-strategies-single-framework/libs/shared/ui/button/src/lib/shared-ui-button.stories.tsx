import type { Meta, StoryObj } from '@storybook/react';
import { SharedUiButton } from './shared-ui-button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SharedUiButton> = {
  component: SharedUiButton,
  title: 'SharedUiButton',
};
export default meta;
type Story = StoryObj<typeof SharedUiButton>;

export const Primary = {
  args: {
    ctaText: '',
  },
};

export const Heading: Story = {
  args: {
    ctaText: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SharedUiButton!/gi)).toBeTruthy();
  },
};
