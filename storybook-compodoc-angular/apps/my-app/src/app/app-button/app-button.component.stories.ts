import type { Meta, StoryObj } from '@storybook/angular';
import { AppButtonComponent } from './app-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AppButtonComponent> = {
  component: AppButtonComponent,
  title: 'AppButtonComponent',
};
export default meta;
type Story = StoryObj<AppButtonComponent>;

export const Primary: Story = {
  args: {
    primary: false,
    backgroundColor: '',
    size: 'medium',
    label: 'Button',
  },
};

export const Heading: Story = {
  args: {
    primary: false,
    backgroundColor: '',
    size: 'medium',
    label: 'My App Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toHaveTextContent('My App Button');
  },
};
