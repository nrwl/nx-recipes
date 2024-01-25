import { mount } from '@vue/test-utils';
import OrderList from './order-list.vue';

describe('OrderList', () => {
  it('renders properly', () => {
    const wrapper = mount(OrderList, {});
    expect(wrapper.text()).toContain('Welcome to OrderList');
  });
});
