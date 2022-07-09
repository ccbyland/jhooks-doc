---
sidebar_position: 1
---

# 介绍

> jhooks，是一套高质量可靠的 React Hooks 库。在京东的 React 项目研发过程中，一套好用的 React Hooks 库是必不可少的。jhooks整合了更多易用、常用的 React Hooks，也包含各种 Taro 多端语境下的能力，希望它成为你在业务开发中的一个利器。

### 特性
- 开箱即用
- 支持 SSR
- 包含丰富的基础 Hooks
- 包含大量提炼自业务的高级 Hooks
- 性能可靠，没有多余的 Render  
- 对输入输出函数做了特殊处理，无闭包问题
- 使用 TypeScript 构建，提供完整的类型定义文件

### 安装
```typescript
npm install @jhooks/hooks --registry=http://registry.m.jd.com/
```
### 使用
```typescript
import { useTitle } from ' @jhooks/hooks';
```