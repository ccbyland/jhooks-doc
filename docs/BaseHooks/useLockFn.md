---
id: "useLockFn"
title: "@jhooks/useLockFn"
slug: "useLockFn"
sidebar_label: "useLockFn"
sidebar_position: 0.5
custom_edit_url: null
---

## useLockFn

▸ **useLockFn**(`fn`): (...`args`: `any`[]) => `Promise`<`any`\>

用于给一个异步函数增加竞态锁，防止并发执行。

## 代码演示

### 基础用法

```typescript
import useLockFn from "@jhooks/useLockFn";

const handle = useLockFn(() => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
});

return (
  <>
    <View onClick={handle}>useLockFn</View>
  </>
);
```

**`export`**

## API

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `fn` | `Function` | 需要增加竞态锁的函数 |

### 输出

`fn`

增加了竞态锁的函数

▸ (...`args`): `Promise`<`any`\>

### 代码位置

index.ts:27

