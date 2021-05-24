const path = require('path');
const buildPath = path.join(path.resolve(),'../jstimus.server/public');
console.log(buildPath);

module.exports = {
    devtool: 'source-map',
    entry: "./index.js", // входная точка - исходный файл
    output:{
        path: buildPath,     // путь к каталогу выходных файлов - папка public
        // publicPath: '/public/',
        filename: "bundle.js"   // название создаваемого файла
    },
    devServer: {
        port:8000,
        historyApiFallback: true,
        hot: true,
        // publicPath: '/',
        contentBase: path.join(__dirname, '../jstimus.server/public')
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    plugins: ["@babel/plugin-proposal-class-properties"],
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]  // используемые плагины
                }
            },
            {
                test: /\.css$/,
                // exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|eot|woff)$/,
                exclude: /(node_modules)/,
                use: [
                    'url-loader'
                ]
            }
        ]
    }
};
