module.exports = {
  'extends': 'airbnb',
  'env': {
    'browser': true,
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
  ],
  'rules': {
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['error', { 'packageDir': './' }],
  },
  'globals': {
    // Used to tag releases/versions automatically in Webpack build.
    __COMMIT_HASH__: false,
  }
};
