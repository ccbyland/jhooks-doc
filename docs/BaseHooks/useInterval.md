---
id: "useInterval"
title: "@jhooks/useInterval"
slug: "useInterval"
sidebar_label: "useInterval"
sidebar_position: 0.5
custom_edit_url: null
---

## useInterval

▸ **useInterval**<`T`\>(`fn`, `wait?`, `options?`): `React.MutableRefObject`<`number`\>

一个可以处理 setInterval 的 Hook

**`example`**
```typescript
import React, { useState } from 'react';
import useInterval from '@jhooks/useInterval';

export default () => {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>count: {count}</div>;
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

index.ts:26

