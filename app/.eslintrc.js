// refer to: http://eslint.org/docs/user-guide/

module.exports = {
  plugins: [
    'react'
  ],

  extends: [
    'plugin:react/recommended'
  ],

  settings: {
    react: {
      version: "16.5"
    }
  },

  env: {
    browser: true,
    es6: true,
    node: false
  }
};
