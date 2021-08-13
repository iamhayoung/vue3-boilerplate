module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    quotes: ['warn', 'single'], // single quotes가 아닐 시 warn
    semi: ['error', 'always'], // 구문 끝에 항상 semicolon이 있어야함. 없을 시 error
    indent: ['error', 2], // indent 크기가 2가 아닐 때, error
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        trailingComma: 'all',
        printWidth: 100,
      },
    ],
  },
};
