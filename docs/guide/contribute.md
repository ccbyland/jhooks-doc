---
sidebar_position: 2
---

# 贡献

### 开发规范

+ 使用 ES6 开发；
+ 代码规范使用 ESLint，详见项目.eslintrc.js；
+ 所有 hooks 都使用 use 开头，采用小驼峰法命名；
+ hooks 库都必须以 `@jhooks` 作为包名前缀；
+ hooks 分为 react hooks 和 taro hooks，依据该 hooks 是否依赖 taro；
+ hooks 需要有足够的注释，参照 [typedoc](https://typedoc.org/)；
+ 每个包都包含单元测试，并保证一定的覆盖率，参见 [单元测试编写指引](./guide/contribute.md)；
+ 项目基于Git，请遵循 Git分支规范，提交代码时遵循 [commitlint规范](https://github.com/conventional-changelog/commitlint)

### 代码即文档

项目使用 [typedoc](https://typedoc.org/) 作为文档工具。使用前请先看一遍 [tag文档](https://typedoc.org/guides/doccomments/) 熟悉下标记和语法。

1. 代码按照上述规则编写TS中的注释，可参考 [useOnLoad](https://coding.jd.com/jx-promote-base/jhooks/blob/master/packages/useOnLoad/index.ts)
2. 确保 jhooks 和 jooks-doc 两个仓库在同级别目录
3. 在 jooks-doc 仓库中，修改文档配置文件 [docusaurus-jhooks-confis.js](https://coding.jd.com/jx-promote-base/jhooks-doc/blob/master/docusaurus-jhooks-confis.js)
4. 在 jooks-doc 仓库中，安装依赖，并执行 `npm run build`，会在 jooks-doc/docs 目录中根据 jooks 仓库中的代码生成docusaurus标准的MD文件，并生成docusaurus标准的index.html
5. 提交 jooks-doc 中的所有改动，会生成一个 `MR链接`，MR评审通过后会在3分钟内更新[官网](http://doc.jd.com/jhooks/index/docs/guide/intro)
