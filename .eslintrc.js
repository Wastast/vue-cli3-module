module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    curly: 2, // if 后面必须跟 {} 否则报错，单行if也一样
    'space-before-function-paren': 0, // 函数名后面的括号可以不需要空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
