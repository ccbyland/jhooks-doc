---
id: "useMap"
title: "@jhooks/useMap"
slug: "useMap"
sidebar_label: "useMap"
sidebar_position: 0.5
custom_edit_url: null
---

## useMap

▸ **useMap**<`K`, `T`\>(`initialValue?`): readonly [`Map`<`K`, `T`\>, { `get`: (`key`: `K`) => `undefined` \| `T` ; `remove`: (`key`: `K`) => `void` ; `reset`: () => `void` ; `set`: (`key`: `K`, `entry`: `T`) => `void` ; `setNew`: (`newMap`: `Iterable`<readonly [`K`, `T`]\>) => `void`  }]

管理 Map 类型状态的 Hook。

## 代码演示

### 基础用法

```typescript
import React from 'react';
import useMap from 'jhooks/useOnLoad';

export default () => {
  const [map, { set, setNew, remove, reset, get }] = useMap<string | number, string>([
    ['msg', 'hello world'],
    [123, 'number type'],
  ]);

  return (
    <div>
      <button type="button" onClick={() => set(String(Date.now()), new Date().toJSON())}>
        Add
      </button>
      <button
        type="button"
        onClick={() => setNew([['text', 'this is a new Map']])}
        style={{ margin: '0 8px' }}
      >
        Set new Map
      </button>
      <button type="button" onClick={() => remove('msg')} disabled={!get('msg')}>
        Remove 'msg'
      </button>
      <button type="button" onClick={() => reset()} style={{ margin: '0 8px' }}>
        Reset
      </button>
      <div style={{ marginTop: 16 }}>
        <pre>{JSON.stringify(Array.from(map), null, 2)}</pre>
      </div>
    </div>
  );
};
```

## API

### 类型参数

| 名称 |
| :------ |
| `K` |
| `T` |

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `initialValue?` | `Iterable`<readonly [`K`, `T`]\> | 可选项，传入默认的 Set 参数 |

### 输出

readonly [`Map`<`K`, `T`\>, { `get`: (`key`: `K`) => `undefined` \| `T` ; `remove`: (`key`: `K`) => `void` ; `reset`: () => `void` ; `set`: (`key`: `K`, `entry`: `T`) => `void` ; `setNew`: (`newMap`: `Iterable`<readonly [`K`, `T`]\>) => `void`  }]

Map 对象

### 代码位置

index.ts:50

