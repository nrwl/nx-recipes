import { mount } from '@vue/test-utils';
import OrdersOrders from './orders.vue';

describe('OrdersOrders', () => {
  it('renders properly', () => {
    const wrapper = mount(OrdersOrders, {});
    expect(wrapper.text()).toContain('Welcome to OrdersOrders');
  });
});
