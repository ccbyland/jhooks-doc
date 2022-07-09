---
id: "useAsyncEffect"
title: "@jhooks/useAsyncEffect"
slug: "useAsyncEffect"
sidebar_label: "useAsyncEffect"
sidebar_position: 0.5
custom_edit_url: null
---

## useAsyncEffect

▸ **useAsyncEffect**(`effect`, `deps`): `void`

useEffect 支持异步函数

## 代码演示

### 基础用法

```typescript
import useAsyncEffect from '@jhooks/useAsyncEffect';
import React, { useState } from 'react';

function mockCheck(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}

export default () => {
  const [pass, setPass] = useState<boolean>(null);

  useAsyncEffect(async () => {
    setPass(await mockCheck());
  }, []);

  return (
    <div>
      {pass === null && 'Checking...'}
      {pass === true && 'Check passed.'}
    </div>
  );
};
```

## API

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `effect` | () => `void` | 类似useEffect中第1个入参，副作用函数，支持async函数。 |
| `deps` | `DependencyList` | 类似useEffect中第2个入参，函数执行的依赖项 |

### 输出

`void`

### 代码位置

index.ts:37

