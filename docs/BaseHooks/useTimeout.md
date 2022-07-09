---
id: "useTimeout"
title: "@jhooks/useTimeout"
slug: "useTimeout"
sidebar_label: "useTimeout"
sidebar_position: 0.5
custom_edit_url: null
---

## useTimeout

▸ **useTimeout**<`T`\>(`fn`, `wait?`, `options?`): `React.MutableRefObject`<`number`\>

一个可以处理 setTimeout 计时器函数的 Hook

## 代码演示

### 基础用法

```typescript
import React, { useState } from 'react';
import useTimeout from 'jhooks/useTimeout';

export default () => {
    const [state, setState] = useState(1);
    useTimeout(() => {
        setState(state + 1);
    }, 3000);
    return <div>{state}</div>;
};
```

## API

### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `T` | extends `noop` |

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `fn` | `T` | 要定时调用的函数 |
| `wait?` | `number` | 间隔时间，当取值 `undefined` 时会停止计时器 |
| `options?` | `Object` | 配置计时器的行为 |
| `options.immediate?` | `boolean` | 是否在首次渲染时立即执行  **`default`** false |

### 输出

`React.MutableRefObject`<`number`\>

### 代码位置

index.ts:25

