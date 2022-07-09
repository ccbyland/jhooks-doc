---
id: "useOnUpdate"
title: "@jhooks/useOnUpdate"
slug: "useOnUpdate"
sidebar_label: "useOnUpdate"
sidebar_position: 0.5
custom_edit_url: null
---

## useOnUpdate

▸ **useOnUpdate**(`fn`, `dep?`): `void`

useOnUpdate 模拟componentDidUpdate

## 代码演示

### 基础用法

```typescript
import useOnUpdate from '@jhooks/useOnLoad';

useOnUpdate(() => {
   // do something
}, [props]);
```

## API

### 参数

| 名称 | 类型 |
| :------ | :------ |
| `fn` | () => `void` |
| `dep?` | `any`[] |

### 输出

`void`

函数依赖

### 代码位置

index.ts:17

