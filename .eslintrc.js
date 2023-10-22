module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'react-app',
  ],
  parser: '@babel/eslint-parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
  },
  rules: {
    'no-anonymous-exports-page-templates': 'off',
    'limited-exports-page-templates': 'off',
    'no-useless-escape': 'off',
    'no-shadow': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
