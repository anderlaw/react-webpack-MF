# react-webpack-MF
A Webpack Module Federation Case In React 
一个基于React的Webpack Module Federation案例
# 项目结构
## lib-app
底层App，负责提供框架、库的依赖，暴露`React`模块。

它是一个纯粹的remote
## component-app
组件层App，依赖`lib-app`暴露的React模块，也暴露了一些组件如对话框Dialog、按钮Button、表格Table。

它即是host也是remote
## main-app
应用层App，依赖`lib-app`暴露的React模块,也依赖`component-app`暴露的组件。

它也是一个纯粹host。
# 如何使用
## 安装依赖
### 全局依赖
`npm install`
### 安装子项目依赖
`npx lerna bootstrap`
一个命令安装所有子项目的依赖
## 运行项目
`npm run start`
打开浏览器`http://localhost:3002` 