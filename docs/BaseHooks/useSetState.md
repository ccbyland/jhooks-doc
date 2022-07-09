---
id: "useSetState"
title: "@jhooks/useSetState"
slug: "useSetState"
sidebar_label: "useSetState"
sidebar_position: 0.5
custom_edit_url: null
---

## useSetState

▸ **useSetState**<`T`\>(`initState`): [`T`, `any`]

## 代码演示

### 基础用法

```typescript
import useSetState from "@jhooks/useSetState";

const [example, set代码演示] = useSetState({
     name: '李华',
     age: 18,
});
const handle = () => {
     set代码演示({
         name: '小红',
         age: 18,
     }, (state) => {
         xxxxxx
     })
}
```

## API

### 类型参数

| 名称 |
| :------ |
| `T` |

### 参数

| 名称 | 类型 |
| :------ | :------ |
| `initState` | `T` \| () => `T` |

### 输出

[`T`, `any`]

### 代码位置

index.ts:25

