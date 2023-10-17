import { mount } from '@vue/test-utils';
import Products from './products.vue';

describe('Products', () => {
  it('renders properly', () => {
    const wrapper = mount(Products, {});
    expect(wrapper.text()).toContain('Welcome to Products');
  });
});
