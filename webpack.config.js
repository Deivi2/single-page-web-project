module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: "./app/temp/scripts",
        filename: "[name].js"
    },
    //power up babel
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: [
                        ['babel-preset-es2015']
                    ]
                },
                //this says that we want babel loader apply just to javascript files
                test: /\.js$/,
                //this says not all js files need to be converted by babel
                // and we exclude node_modules file
                exclude: /node_modules/
            }
        ]
    }
};