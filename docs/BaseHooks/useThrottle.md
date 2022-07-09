---
id: "useThrottle"
title: "@jhooks/useThrottle"
slug: "useThrottle"
sidebar_label: "useThrottle"
sidebar_position: 0.5
custom_edit_url: null
---

## useThrottle

▸ **useThrottle**<`T`\>(`fn`, `wait?`): `T`

用来处理节流函数的 Hook

## 代码演示

### 基础用法

```typescript
import useThrottle from "@jhooks/useThrottle";

const handle = useThrottle(() => {
  console.log(Date.now());
}, 500);

return (
  <>
    <View onClick={handle}>useThrottle</View>
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
| `fn` | `T` | 需要节流执行的函数 |
| `wait?` | `number` | 等待时间，单位为毫秒 |

### 输出

`T`

fn 触发执行 fn，函数参数将会传递给 fn

### 代码位置

index.ts:26

