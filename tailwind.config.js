const glob = require('glob');
const path = require('path');

const componentPlugins = glob
  .sync('./src/**/*.tailwind.js')
  .map(plugin => require(path.resolve(plugin)));

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [...componentPlugins],
  corePlugins: {
    container: false,
  },
};
