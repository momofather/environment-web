const path = require('path');
const { generateTheme,  } = require('antd-theme-generator');

const options = {
  stylesDir: path.join(__dirname, './src/themes'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/themes/variables.less'),
  themeVariables: [ //需要动态切换的主题变量
    '@primary-color',
    '@layout-header-color'
  ],
  indexFileName: 'index.html',
  outputFilePath: path.join(__dirname, './public/color.less'), //页面引入的主题变量文件
}

generateTheme(options).then(less => {
})
.catch(error => {
});