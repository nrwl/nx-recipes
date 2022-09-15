import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClientUiHeader } from './client-ui-header';

export default {
  component: ClientUiHeader,
  title: 'ClientUiHeader',
} as ComponentMeta<typeof ClientUiHeader>;

const Template: ComponentStory<typeof ClientUiHeader> = (args) => (
  <ClientUiHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hello User',
};
