import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButnComponent } from './butn.component';

export default {
  title: 'ButnComponent',
  component: ButnComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButnComponent>;

const Template: Story<ButnComponent> = (args: ButnComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    primary:  false,
    backgroundColor:  '#ff00ff',
    size:  'medium',
    label:  'Button',
}