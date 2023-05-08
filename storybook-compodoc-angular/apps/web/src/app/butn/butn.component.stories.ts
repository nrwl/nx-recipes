import { Meta } from '@storybook/angular';
import { ButnComponent } from './butn.component';

export default {
  title: 'ButnComponent',
  component: ButnComponent,
} as Meta<ButnComponent>;

export const Primary = {
  render: (args: ButnComponent) => ({
    props: args,
  }),
  args: {
    primary: false,
    backgroundColor: '',
    size: 'medium',
    label: 'Button',
  },
};
