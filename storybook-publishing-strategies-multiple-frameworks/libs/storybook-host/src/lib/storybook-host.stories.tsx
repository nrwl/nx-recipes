import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StorybookHost } from './storybook-host';

export default {
  component: StorybookHost,
  title: 'StorybookHost',
} as ComponentMeta<typeof StorybookHost>;

const Template: ComponentStory<typeof StorybookHost> = (args) => (
  <StorybookHost {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
