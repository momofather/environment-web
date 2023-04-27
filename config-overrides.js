const { override, fixBabelImports, addLessLoader,addBabelPlugins,addWebpackAlias  } = require('customize-cra');
const path = require("path");
function invade(target, name, callback) {
  target.forEach(
    item => {
      if (item.constructor.name === name) {
        callback(item)
      }
    }
  )
}
module.exports = {
  port: 80000,
  paths: function (paths) {
    paths.appBuild = path.join(__dirname, './smartwater'); // 打包输出目录名称
    return paths
  },
  webpack: override(
    ...addBabelPlugins( // 支持装饰器
      [
          '@babel/plugin-proposal-decorators',
          { legacy: true}
      ]
    ),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      lessOptions:{
        javascriptEnabled: true,
        modifyVars: {
          '@layout-header-background': '#001529',
          '@layout-header-color': '#FFFFFF',
          '@layout-header-height': '60px',
          '@btn-font-size-sm': '12px',
          '@table-header-bg': '#eae9e9',
          '@table-border-color': '#0000003b'
        },
      }
    }),
    addWebpackAlias({ //路径别名
      '@': path.resolve(__dirname, 'src'),
    }),
    (config) => {
        //修改、添加loader 配置 :
        // 所有的loaders规则是在config.module.rules(数组)的第二项
        // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
        // 修改 less 配置 ，规则 loader 在第7项(具体可以打印配置)
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
        loaders[8].use.push({
            loader: 'style-resources-loader',
            options: {
                patterns: path.resolve(__dirname, './src/themes/variables.less')//全局引入公共的scss 文件
            }
        })

        if (process.env.NODE_ENV === "production") {
          // 美化打包后 js 文件名
          config.output.chunkFilename = config.output.chunkFilename.replace('.chunk', '');
          // 美化打包后 css 文件名
          invade(config.plugins, 'MiniCssExtractPlugin', (e) => {
            e.options.chunkFilename = e.options.chunkFilename.replace('.chunk', '')
          });
          config.devtool = false;
        }
        return config;
    }
 )
};
