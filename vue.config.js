module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/lyq.headlines.github.io/'//这里写展示页面的仓库名称
    // : '/',
    publicPath: './',
    outputDir: "dist", // 输出文件目录
    assetsDir: "static",//静态资源文件名称
    indexPath: "index.html",
    devServer:{
        port: 8080,
        proxy: {
            '/juheNews':{
                target:'http://v.juhe.cn/',               //需要跨域的url
                ws:true,                                  //代理webSocket
                changeOrigin:true,                        //允许跨域
                pathRewrite:{
                    '^/juheNews':''                       //重写路径
                }
            }
        }
    }
}