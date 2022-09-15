import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SharedUiNotification } from './shared-ui-notification';

export default {
  component: SharedUiNotification,
  title: 'SharedUiNotification',
} as ComponentMeta<typeof SharedUiNotification>;

const Template: ComponentStory<typeof SharedUiNotification> = (args) => (
  <SharedUiNotification {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  alertText: 'Error!',
  alertColor: '#ff0000',
};
