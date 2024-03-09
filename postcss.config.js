module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-pxtransform': {
            platform: 'weapp',
            designWidth: 750,
            // deviceRatio: {
            //     640: 2.34 / 2,
            //     750: 1,
            //     828: 1.81 / 2,
            //     375: 2 / 1,
            // },
        },
    },
}
