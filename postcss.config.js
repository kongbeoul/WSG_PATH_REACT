const path = require("path");
const postCssNormalize = require("postcss-normalize");

module.exports = (ctx) => {
    return {
        plugins: [
            require("postcss-calc")(),
            require("postcss-preset-env")({
                stage: 0,
                features: {
                    "nesting-rules": true,
                },
                autoprefixer: true,
                preserve: false,
            }),
            require("postcss-inline-svg")({
                paths: [path.join(__dirname, "./src/assets/svg")]
            }),
            postCssNormalize(),
            ctx.env === "production" &&
                require("cssnano")({
                    preset: "default",
                }),
        ],
    }
}