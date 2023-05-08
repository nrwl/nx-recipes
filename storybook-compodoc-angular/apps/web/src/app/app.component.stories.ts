import { Meta } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
} as Meta<AppComponent>;

export const Primary = {
  render: (args: AppComponent) => ({
    props: args,
  }),
  args: {},
};
