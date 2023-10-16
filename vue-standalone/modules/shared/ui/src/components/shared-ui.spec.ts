import { mount } from '@vue/test-utils';
import SharedUiSharedUi from './shared-ui.vue';

describe('SharedUiSharedUi', () => {
  it('renders properly', () => {
    const wrapper = mount(SharedUiSharedUi, {});
    expect(wrapper.text()).toContain('Welcome to SharedUiSharedUi');
  });
});
