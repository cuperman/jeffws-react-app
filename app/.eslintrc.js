// refer to: http://eslint.org/docs/user-guide/

module.exports = {
  plugins: [
    'react'
  ],

  extends: [
    'plugin:react/recommended'
  ],

  env: {
    browser: true,
    es6: true,
    node: false
  }
};
