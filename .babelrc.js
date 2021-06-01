const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript'
];

const alias = {
  '@components': './src/components',
  '@config': './src/config',
  '@shared': './src/shared',
  '@utils': './src/utils',
  '@icons': './src/icons',
  '@redux': './src/redux',
  '@sagas': './src/sagas',
};

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties',
  [
    'babel-plugin-module-resolver',
    {
      root: ['./src/'],
      alias,
    },
  ],
  [
    '@babel/plugin-transform-runtime',
    {
      regenerator: true,
    },
  ],
];

const babelConfig = {
  presets,
  plugins,
};

module.exports = babelConfig;
