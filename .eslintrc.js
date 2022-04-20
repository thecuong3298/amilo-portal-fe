module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    quotes: [2, 'single'],
    semi: ['error', 'always'],
    curly: [2, 'all'],
    camelcase: [
      2,
      {
        properties: 'always',
      },
    ],
    eqeqeq: [2, 'smart'],
    'one-var-declaration-per-line': [2, 'always'],
    'no-case-declarations': 0,
    // '@typescript-eslint/explicit-module-boundary-types': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-slot-scope-attribute': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
