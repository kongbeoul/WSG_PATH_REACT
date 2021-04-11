const path = require("path");
const CracoAlias = require("craco-alias");
const postCssNormalize = require("postcss-normalize");

module.exports = {
    style: {
        postcss: {
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
            ]
        }
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "jsconfig",
                baseUrl: "./src"
            }
        }
    ]
}