const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        supabase: "./src/script/supabase.js",
        transition: "./src/script/transition.js",
        pengajar: "./src/script/pengajar.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            chunks: ["supabase", "transition"],
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/pengajar-pc.html",
            filename: "html/pengajar-pc.html",
            chunks: ["pengajar"],
        }),
    ],
};
