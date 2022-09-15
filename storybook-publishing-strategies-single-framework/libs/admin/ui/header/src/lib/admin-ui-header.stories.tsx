import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AdminUiHeader } from './admin-ui-header';

export default {
  component: AdminUiHeader,
  title: 'AdminUiHeader',
} as ComponentMeta<typeof AdminUiHeader>;

const Template: ComponentStory<typeof AdminUiHeader> = (args) => (
  <AdminUiHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  userName: 'Admin',
};
