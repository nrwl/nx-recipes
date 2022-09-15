import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ClientUiFooter } from './client-ui-footer';

export default {
  component: ClientUiFooter,
  title: 'ClientUiFooter',
} as ComponentMeta<typeof ClientUiFooter>;

const Template: ComponentStory<typeof ClientUiFooter> = (args) => (
  <ClientUiFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
