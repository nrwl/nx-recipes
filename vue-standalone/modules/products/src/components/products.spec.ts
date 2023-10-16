import { mount } from '@vue/test-utils';
import ProductsProducts from './products.vue';

describe('ProductsProducts', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductsProducts, {});
    expect(wrapper.text()).toContain('Welcome to ProductsProducts');
  });
});
