import { mount } from '@vue/test-utils';
import SharedUi from './shared-ui.vue';

describe('SharedUi', () => {
  it('renders properly', () => {
    const wrapper = mount(SharedUi, {});
    expect(wrapper.text()).toContain('Welcome to SharedUi');
  });
});
