import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseButton, {})
    expect(wrapper.text()).toContain('Welcome to BaseButton')
  })
})
