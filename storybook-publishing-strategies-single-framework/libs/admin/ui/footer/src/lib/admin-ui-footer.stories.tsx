import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AdminUiFooter } from './admin-ui-footer';

export default {
  component: AdminUiFooter,
  title: 'AdminUiFooter',
} as ComponentMeta<typeof AdminUiFooter>;

const Template: ComponentStory<typeof AdminUiFooter> = (args) => (
  <AdminUiFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
