## [1.2.1](https://github.com/wangxiaoze-view/playground/compare/1.2.0...1.2.1) (2025-05-12)


* Release 1.2.1 ([bd41406](https://github.com/wangxiaoze-view/playground/commit/bd4140655f251a1d56955822b289703a835528e5))


### ♻ Code Refactoring | 代码重构

* 调整 umami 脚本初始化方式 ([ff6229d](https://github.com/wangxiaoze-view/playground/commit/ff6229dcba8454117c22319a41bdff8a135c44b9))
* 将 Umami 统计脚本移至外部文件 ([3d14708](https://github.com/wangxiaoze-view/playground/commit/3d1470855d5c41ade7593371e0bdfecccfef02d1))
* **index:** 重构网页加载和统计功能 ([09de87c](https://github.com/wangxiaoze-view/playground/commit/09de87ceb4895d6d5a2d8ab74322536dcfe6d200))
* **types:** 移除未使用的 Element Plus 组件类型定义 ([4d4226c](https://github.com/wangxiaoze-view/playground/commit/4d4226c3abade12b6d458862a48cc9fda3dfe523))


### ✨ Features | 新功能

* **analytics:** integrate umami tracking across components ([5867bde](https://github.com/wangxiaoze-view/playground/commit/5867bde50b21c5171745e5496db28d7f23d3a193))
* **index:** 添加 Umami 统计脚本并更新页面标题 ([e4a64ae](https://github.com/wangxiaoze-view/playground/commit/e4a64ae8d9549b6d779690d8615f517d2ea6ea22))


### 🐛 Bug Fixes | Bug 修复

* 修正网页标题拼写错误 ([efa5018](https://github.com/wangxiaoze-view/playground/commit/efa50181425ad3ce9820163bcae92926d55bdc30))


### 👷‍ Build System | 构建

* 添加 gzip 压缩插件 ([1b991b9](https://github.com/wangxiaoze-view/playground/commit/1b991b9b0f9ddb27938a1bfe35072dfc2d556880))
* 添加 hm.ts 文件并配置构建脚本 ([dc2694c](https://github.com/wangxiaoze-view/playground/commit/dc2694cd1cb4154dfdcc9c23f12c15df04e0a8e1))
* 移除压缩选项 ([e4e8484](https://github.com/wangxiaoze-view/playground/commit/e4e84842540c99ef5aa663f63aa5507f43b966d5))
* 优化代码结构并移除未使用的 TypeScript 文件 ([ab4d74e](https://github.com/wangxiaoze-view/playground/commit/ab4d74e39b1613fa5f6dbd7328768b5012341c95))


### 📝 Documentation | 文档

* 优化 CHANGELOG.md 生成配置 ([8180545](https://github.com/wangxiaoze-view/playground/commit/81805451525c736666799d861bc40fb9b6ca0c78))
* **README:** 更新项目说明和建议使用 pnpm 安装 ([c3b39d7](https://github.com/wangxiaoze-view/playground/commit/c3b39d73d5f9cc904997c003c26af0e9ba97fec4))



# [1.2.0](https://github.com/wangxiaoze-view/playground/compare/1.1.0...1.2.0) (2025-05-07)


* Release 1.2.0 ([1e932d6](https://github.com/wangxiaoze-view/playground/commit/1e932d6d4a56adafd5d40012b6ae176a4aadd96e))


### ♻ Code Refactoring | 代码重构

* **components:** 优化内容组件和模板设置 ([c1eb08b](https://github.com/wangxiaoze-view/playground/commit/c1eb08bb4135ee8bc72f1c6c678d4558cf676205))


### ✨ Features | 新功能

* **tour:** 添加使用教程功能并优化相关组件 ([9737b91](https://github.com/wangxiaoze-view/playground/commit/9737b918b64836d9894a18dc8663240ec4c00858))


### 📝 Documentation | 文档

* 优化 CHANGELOG.md 生成配置 ([4b0baa1](https://github.com/wangxiaoze-view/playground/commit/4b0baa148942eae21e99fbe3f9d8764e5ee295d1))



# [1.1.0](https://github.com/wangxiaoze-view/playground/compare/1.0.1...1.1.0) (2025-04-27)


* Release 1.1.0 ([bd043d6](https://github.com/wangxiaoze-view/playground/commit/bd043d658b56e28104002a037ad9aea31e7fc37c))


### ♻ Code Refactoring | 代码重构

* 重构资源缓存和模板渲染逻辑 ([9bc5131](https://github.com/wangxiaoze-view/playground/commit/9bc513100cf8e556d7bf2e7925ae010c71608bb5))
* **components:** 优化更新日志按钮功能 ([def3a5b](https://github.com/wangxiaoze-view/playground/commit/def3a5b5919b14cc22b8a20e4f6749996af0d5fe))


### ✨ Features | 新功能

* **config:** 重构模板配置并添加新功能 ([e00b131](https://github.com/wangxiaoze-view/playground/commit/e00b131e1bdbdbba757b58f9ecd709a7df24dc2a))
* **resource:** 添加资源缓存和处理功能 ([726661c](https://github.com/wangxiaoze-view/playground/commit/726661c82fc22b5a062b36c28650105f7f51efcc))


### 📝 Documentation | 文档

* 优化 CHANGELOG.md 生成配置 ([d98aec6](https://github.com/wangxiaoze-view/playground/commit/d98aec6a5a9ad61245eff50f349b1c5742dd877c))



## [1.0.1](https://github.com/wangxiaoze-view/playground/compare/1.0.0...1.0.1) (2025-04-26)


* Release 1.0.1 ([260c35f](https://github.com/wangxiaoze-view/playground/commit/260c35fc94c01aa526f998dd9bdcb2982c6cdd4e))


### 👷‍ Build System | 构建

* 为 Vite 配置添加 base 路径 ([9f4ba1b](https://github.com/wangxiaoze-view/playground/commit/9f4ba1b11780f7b796710e6852799958aa5edad6))
* **deps:** 添加 conventional-changelog 依赖 ([8f9af95](https://github.com/wangxiaoze-view/playground/commit/8f9af95c284f2407b058aa5f1bc15eacca8cfe27))


### 📝 Documentation | 文档

* 更新依赖 ([143a863](https://github.com/wangxiaoze-view/playground/commit/143a8637e18f4c2a02bcb0ba4009b3021b1a42d8))



# [1.0.0](https://github.com/wangxiaoze-view/playground/compare/58c216dce67e7d50b808003b05a7cad0ca3a8921...1.0.0) (2025-04-26)


* Release 1.0.0 ([f46e981](https://github.com/wangxiaoze-view/playground/commit/f46e981de13165a9defc2a2b9e09999c6b8565a0))
* Initial commit ([58c216d](https://github.com/wangxiaoze-view/playground/commit/58c216dce67e7d50b808003b05a7cad0ca3a8921))


### ✨ Features | 新功能

* **分享功能:** 实现代码分享链接生成和解析 ([9754714](https://github.com/wangxiaoze-view/playground/commit/97547142067f190522ef90c75a1c50e4bd51b4e2))
* 添加下载功能并优化相关组件 ([bc1f65f](https://github.com/wangxiaoze-view/playground/commit/bc1f65f4ca0cec1c61ac3e6160f74c9eddb2d7ea))
* **components:** 实现代码预览功能 ([b164d0d](https://github.com/wangxiaoze-view/playground/commit/b164d0d24c911b6a0e6d612968ef283b69916d40))
* **components:** 实现模板切换功能 ([b4b33ac](https://github.com/wangxiaoze-view/playground/commit/b4b33acadc6b8058a5a47bbdf20d71e2b47619f4))
* **components:** 添加代码编辑器组件 ([644b057](https://github.com/wangxiaoze-view/playground/commit/644b057a324ce55748c4ba0ebcf5e69e6d9558e6))


### 👷‍ Build System | 构建

* **dependencies:** 更新项目依赖并添加新功能 ([34bc41b](https://github.com/wangxiaoze-view/playground/commit/34bc41b183fcdee057a1d1f43b63bf7ebe1e11ce))
* **release:** 更新 release-it 及相关依赖 ([9400138](https://github.com/wangxiaoze-view/playground/commit/940013855326e09a9abb0c67d8d2fc2398518f50))


### 🔧 Continuous Integration | CI 配置

* **init:** 初始化项目 ([44f5d6e](https://github.com/wangxiaoze-view/playground/commit/44f5d6e49e944014d19834e0c627205ed5010a92))



