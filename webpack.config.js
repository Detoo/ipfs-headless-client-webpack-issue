// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const slsw = require("serverless-webpack");

// eslint-disable-next-line no-undef
module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
};
