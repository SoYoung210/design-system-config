const pathResolve = require('path').resolve;

module.exports = () => {
  const config = {
    entry: './src/index.ts',
    output: {
      path: pathResolve(__dirname, 'dist3'),
      library: 'design_system_config',
      filename: 'design_system_config.esm.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)?$/,
          exclude: /(node_modules|__test__)/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: 'css-loader',
        },
      ],
    },
    devtool: 'source-map',
    optimization: {
      minimize: true,
    },
  };

  return config;
};
