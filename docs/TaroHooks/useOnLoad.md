---
id: "useOnLoad"
title: "@jhooks/useOnLoad"
slug: "useOnLoad"
sidebar_label: "useOnLoad"
sidebar_position: 0.5
custom_edit_url: null
---

## useOnLoad

▸ **useOnLoad**<`T`\>(`callback`): `Object`

比useEffect更早的调用，由绘制之后变为绘制之前，同时返回页面URL参数

## 代码演示

### 基础用法

```typescript
import useOnLoad from '@jhooks/useOnLoad';

const { pageParams } = useOnLoad(async (pageParams) => {
    // 组件初始化逻辑
    // 从页面参数中读取skuId
    const { skuId } = pageParams.current;
});
```

## API

### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `T` | `Record`<`string`, `any`\> | 页面参数的泛型，调用者自己定义 |

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `callback` | (`pageParams`: `T`) => `void` | 初始化回调函数，类似小程序中onLoad，生命周期内只执行1次 |

### 输出

`Object`

页面参数的引用，可供后续使用

| 名称 | 类型 |
| :------ | :------ |
| `pageParams` | `MutableRefObject`<`T`\> |

### 代码位置

index.ts:21

