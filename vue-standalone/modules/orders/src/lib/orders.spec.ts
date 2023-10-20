import { mount } from '@vue/test-utils';
import Orders from './orders.vue';

describe('Orders', () => {
  it('renders properly', () => {
    const wrapper = mount(Orders, {});
    expect(wrapper.text()).toContain('Welcome to Orders');
  });
});
