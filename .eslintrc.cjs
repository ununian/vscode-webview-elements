module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@open-wc/eslint-config',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unexpected-multiline': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],

    // rules which conflict with prettier
    'arrow-parens': 'off',
    indent: 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'lit/quoted-expressions': ['error', 'never'],
    'object-curly-newline': 'off',
    'wc/guard-super-call': 'off',

    // temporary disabled
    'lit-a11y/anchor-is-valid': 'off',
    'lit-a11y/click-events-have-key-events': 'off',
    'lit-a11y/mouse-events-have-key-events': 'off',
  },
};
