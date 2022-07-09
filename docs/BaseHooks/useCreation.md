---
id: "useCreation"
title: "@jhooks/useCreation"
slug: "useCreation"
sidebar_label: "useCreation"
sidebar_position: 0.5
custom_edit_url: null
---

## useCreation

▸ **useCreation**<`T`\>(`factory`, `deps`): `T`

useCreation 是 useMemo 或 useRef 的替代品。
因为 useMemo 不能保证被 memo 的值一定不会被重计算，而 useCreation 可以保证这一点。

## 代码演示

### 基础用法

// 确保实例不会被重复创建
// 点击 "Rerender" 按钮，触发组件的更新，但 Foo 的实例会保持不变

```typescript
import React, { useState } from 'react';
import useCreation from '@jhooks/useCreation';

class Foo {
  constructor() {
    this.data = Math.random();
  }

  data: number;
}

export default function () {
  const foo = useCreation(() => new Foo(), []);
  const [, setFlag] = useState({});
  return (
    <>
      <p>{foo.data}</p>
      <button
        type="button"
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </button>
    </>
  );
}
```

## API

### 类型参数

| 名称 |
| :------ |
| `T` |

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `factory` | () => `T` | 用来创建所需对象的函数 |
| `deps` | `DependencyList` | 传入依赖变化的对象 |

### 输出

`T`

实例

### 代码位置

index.ts:55

