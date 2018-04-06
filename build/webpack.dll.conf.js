var path = require("path");
var webpack = require("webpack");
var pkg = require("../package.json");

module.exports = {
	entry: {
    vendor: Object.keys(pkg.dependencies)
  },
	output: {
		filename: "vendor.bundle.js", // best use [hash] here too
		path: path.resolve(__dirname, "..", "dll"),
		library: "vendor_lib_[hash]",
	},
	plugins: [
		new webpack.DllPlugin({
			name: "vendor_lib_[hash]",
			path: path.resolve(__dirname, "..", "dll/vendor-manifest.json"),
		})
	],
};
