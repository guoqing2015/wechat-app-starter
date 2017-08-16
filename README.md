# 太古汇微信小程序

## 开发时启动项目
1. cd 项目根目录
1. npm i  : 安装依赖
1. npm run dev


## 上线构建
npm run build


## 知识准备：ES6 ,  Redux,  中间件 (  [Redux-sago](http://leonshi.com/redux-saga-in-chinese/docs/api/index.html),  )

Reducers 负责处理 action 的 state 更新。

Sagas 管理 Redux 应用异步操作, 负责协调那些复杂或异步的操作。

## 了解部分： [Immutable](https://github.com/camsong/blog/issues/3)


[al-request](https://www.npmjs.com/package/al-request)

## Labrador

基于 [Labrador](https://github.com/maichong/labrador) 框架构建。

### Labrador特性
* 使用Labrador框架可以使微信开发者工具支持加载海量NPM包
* 支持ES6/7标准代码，使用async/await能够有效避免回调地狱
* 组件重用，对微信小程序框架进行了二次封装，实现了组件重用和嵌套
* 可集成Redux，使用Redux数据流控制，让项目逻辑清晰可维护
* 自动持久化数据，支持redux-persist自动将运行数据保存
* 自动化测试，非常容易编写单元测试脚本，不经任何额外配置即可自动化测试
* Flow.js强类型检查，编写更加安全稳定的代码
* 使用Editor Config及ESLint标准化代码风格，方便团队协作
* 强力压缩代码，尽可能减小程序体积，让你在1M的限制内做更多的事

###  Labrador安装

```
npm install -g labrador-cli
```



## 项目目录结构

```sh
demo                 # 项目根目录
├── .labrador        # Labrador项目配置文件
├── .babelrc         # babel配置文件
├── .editorconfig    # Editor Config
├── .eslintignore    # ESLint 忽略配置
├── .eslintrc        # ESLint 语法检查配置
├── .build/          # Labrador编译临时目录
├── package.json
├── dist/            # 目标目录
├── node_modules/
└── src/             # 源码目录
    ├── app.js
    ├── app.json
    ├── app.less
    ├── components/  # 通用组件目录
    ├── pages/       # 页面目录
    └── utils/

