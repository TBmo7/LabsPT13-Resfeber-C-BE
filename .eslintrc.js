module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier','prettier/react'],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['prettier','react'],
  rules: {"prettier/prettier":[
    0,
    {
        "endOfLine": "lf",
        "semi": false,
        "singleQuote": false,
        "tabWidth": 2,
        "trailingComma" : "es5"

    }]},
  overrides: [
    {
      files: ['__tests__/*', '__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
