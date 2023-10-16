import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AppHelloWorld from './hello-world.vue';

describe('AppHelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(AppHelloWorld, {});
    expect(wrapper.text()).toContain('Welcome to AppHelloWorld');
  });
});
