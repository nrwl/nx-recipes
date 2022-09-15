import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SharedUiButton } from './shared-ui-button';

export default {
  component: SharedUiButton,
  title: 'SharedUiButton',
} as ComponentMeta<typeof SharedUiButton>;

const Template: ComponentStory<typeof SharedUiButton> = (args) => (
  <SharedUiButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ctaText: 'Click me!',
};
