import { mount } from '@vue/test-utils';
import ProductList from './product-list.vue';

describe('ProductList', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductList, {});
    expect(wrapper.text()).toContain('Welcome to ProductList');
  });
});
