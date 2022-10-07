import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
