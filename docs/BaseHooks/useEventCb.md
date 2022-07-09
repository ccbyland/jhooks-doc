---
id: "useEventCallback"
title: "@jhooks/useEventCallback"
slug: "useEventCallback"
sidebar_label: "useEventCallback"
sidebar_position: 0.5
custom_edit_url: null
---

## useEventCallback

▸ **useEventCallback**<`T`\>(`fn`): (...`p`: `T`[]) => `void`

给子组件传递固定的callback，防止子组件跟随父组件重复渲染
返回的callback是一个永远固定的函数，防止子组件重复渲染

## 代码演示

### 基础用法

```ts
const clickHandler = useEventCallback((...p)=>{
     // do something
});
```

## API

### 类型参数

| 名称 | 描述 |
| :------ | :------ |
| `T` | 入参的泛型 |

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `fn` | (...`p`: `T`[]) => `void` | 传入的原函数 |

### 输出

`fn`

返回的固定函数

▸ (...`p`): `void`

### 代码位置

index.ts:17

