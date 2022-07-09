---
id: "useStateRef"
title: "@jhooks/useStateRef"
slug: "useStateRef"
sidebar_label: "useStateRef"
sidebar_position: 0.5
custom_edit_url: null
---

## useRefState

▸ **useRefState**(`initialState`): `any`[]

useRefState 在useState的基础上扩展了一个返回值，用于获取state的最新值

## 代码演示

### 基础用法

```typescript
import useRefState from '@jhooks/useRefState';

const [count, setCount, countRef] = useRefState(0)
useEffect(() => {
   // 在组件卸载时保存当前的count
   setCount(countRef.current));
}, []);

```

## API

### 参数

| 名称 | 类型 |
| :------ | :------ |
| `initialState` | `any` |

### 输出

`any`[]

### 代码位置

index.ts:20

