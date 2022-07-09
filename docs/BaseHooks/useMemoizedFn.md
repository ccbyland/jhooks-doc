---
id: "useMemoizedFn"
title: "@jhooks/useMemoizedFn"
slug: "useMemoizedFn"
sidebar_label: "useMemoizedFn"
sidebar_position: 0.5
custom_edit_url: null
---

## useMemoizedFn

▸ **useMemoizedFn**<`T`\>(`fn`): `T`

持久化 function 的 Hook
理论上，可以使用 useMemoizedFn 完全代替 useCallback

## 代码演示

### 基础用法

```typescript
import useMemoizedFn from '@jhooks/useMemoizedFn';

const [state, setState] = useState('');

// 在 state 变化时，func 地址会变化
const func = useCallback(() => {
  console.log(state);
}, [state]);
```

## API

### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `T` | extends `noop` | 入参的泛型 |

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `fn` | `T` | 需要持久化的函数 |

### 输出

`T`

引用地址永远不会变化的 fn

### 代码位置

index.ts:22

