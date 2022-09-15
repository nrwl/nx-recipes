const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: ['../../**/ui/**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
};
