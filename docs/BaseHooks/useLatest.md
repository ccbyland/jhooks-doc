---
id: "useLatest"
title: "@jhooks/useLatest"
slug: "useLatest"
sidebar_label: "useLatest"
sidebar_position: 0.5
custom_edit_url: null
---

## useLatest

▸ **useLatest**<`T`\>(`value`): `React.MutableRefObject`<`T`\>

返回当前最新值的 Hook，可以避免闭包问题

## 代码演示

### 基础用法

```typescript
import React, { useState, useEffect } from 'react';
import useLatest from '@jhooks/useLatest';

export default () => {
  const [count, setCount] = useState(0);
  const latestCountRef = useLatest(count);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>count: {count}</p>
    </>
  );
};
```

## API

### 类型参数

| 名称 | 描述 |
| :------ | :------ |
| `T` | 入参的泛型 |

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `value` | `T` | 初始化的值 |

### 输出

`React.MutableRefObject`<`T`\>

返回一个可变引用，可以获取最新值

### 代码位置

index.ts:31

