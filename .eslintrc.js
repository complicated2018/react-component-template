// parser必须配置；
// 使用typescript-eslint的推荐规则；
// 使用airbnb规则；检测规则能识别缩写。
module.exports = {
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-typescript', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './packages/epweb/tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    semi: 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    indent: 0,
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'implicit-arrow-linebreak': 0,
    'consistent-return': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', // 提示useEffect可能重复执行
    '@typescript-eslint/no-explicit-any': 0,
  },
};
