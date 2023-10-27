import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

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
    label: 'My Lib Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button')).toHaveTextContent('My Lib Button');
  },
};
