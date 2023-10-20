import { mount } from '@vue/test-utils';
import HelloWorld from './hello-world.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {});
    expect(wrapper.text()).toContain('Welcome to HelloWorld');
  });
});
