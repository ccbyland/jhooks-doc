---
id: "useDebounce"
title: "@jhooks/useDebounce"
slug: "useDebounce"
sidebar_label: "useDebounce"
sidebar_position: 0.5
custom_edit_url: null
---

## useDebounce

▸ **useDebounce**<`T`\>(`fn`, `wait?`): `T`

用来处理防抖函数的 Hook

## 代码演示

### 基础用法

```typescript
import useDebounce from "@jhooks/useDebounce";

const handle = useDebounce(() => {
  console.log(Date.now());
}, 500);

return (
  <>
    <View onClick={handle}>useDebounce</View>
  </>
);
```

## API

### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `T` | extends `noop` |

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `fn` | `T` | 需要防抖执行的函数 |
| `wait?` | `number` | 等待时间，单位为毫秒 |

### 输出

`T`

fn 触发执行 fn，函数参数将会传递给fn

### 代码位置

index.ts:26

