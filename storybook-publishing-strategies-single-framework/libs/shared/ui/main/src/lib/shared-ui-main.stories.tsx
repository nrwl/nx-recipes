import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SharedUiMain } from './shared-ui-main';

export default {
  component: SharedUiMain,
  title: 'SharedUiMain',
} as ComponentMeta<typeof SharedUiMain>;

const Template: ComponentStory<typeof SharedUiMain> = (args) => (
  <SharedUiMain {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Some text for the main component',
};
