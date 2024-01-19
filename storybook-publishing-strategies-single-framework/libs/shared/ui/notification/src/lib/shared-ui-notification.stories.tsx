import type { Meta, StoryObj } from '@storybook/react';
import { SharedUiNotification } from './shared-ui-notification';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SharedUiNotification> = {
  component: SharedUiNotification,
  title: 'SharedUiNotification',
};
export default meta;
type Story = StoryObj<typeof SharedUiNotification>;

export const Primary = {
  args: {
    alertText: '',
    alertColor: '',
  },
};

export const Heading: Story = {
  args: {
    alertText: '',
    alertColor: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SharedUiNotification!/gi)).toBeTruthy();
  },
};
