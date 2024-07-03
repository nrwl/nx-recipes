import { mount } from '@vue/test-utils'
import Ui from './ui.vue'

describe('Ui', () => {
  it('renders properly', () => {
    const wrapper = mount(Ui, {})
    expect(wrapper.text()).toContain('Welcome to Ui')
  })
})
