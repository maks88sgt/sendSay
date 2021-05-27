module.exports = {
  root: true,
  extends: ['eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-hooks', 'sonarjs', '@babel', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    es2020: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    babelOptions: {
      configFile: './.babelrc',
    },
  },
  rules: {
    indent: [1, 2, { SwitchCase: 1 }],
    curly: [1, 'all'],
    'brace-style': [1, 'stroustrup'],
    'object-curly-newline': [
      1,
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
      },
    ],
    'no-trailing-spaces': [
      1,
      {
        skipBlankLines: true,
        ignoreComments: true,
      },
    ],
    'linebreak-style': 'off',
    'arrow-parens': [1, 'as-needed'],
    quotes: [1, 'single'],
    semi: [2, 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    process: true,
  },
};
