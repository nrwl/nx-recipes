import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FooterComponent> = {
  component: FooterComponent,
  title: 'FooterComponent',
};
export default meta;
type Story = StoryObj<FooterComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/footer works!/gi)).toBeTruthy();
  },
};
