---
id: "useUnmount"
title: "@jhooks/useUnmount"
slug: "useUnmount"
sidebar_label: "useUnmount"
sidebar_position: 0.5
custom_edit_url: null
---

## useUnmount

▸ **useUnmount**(`fn`): `void`

在组件卸载（unmount）时执行的 Hook。

## 代码演示

### 基础用法

```typescript
import useBoolean from '@jhooks/useBoolean';
import useUnmount from '@jhooks/useUnmount';

import React from 'react';

const MyComponent = () => {
  useUnmount(() => {
    console.log('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
     {state && <MyComponent />}
    </>
  );
};
```

## API

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `fn` | () => `void` | 组件卸载时执行的函数 |

### 输出

`void`

### 代码位置

index.ts:38

