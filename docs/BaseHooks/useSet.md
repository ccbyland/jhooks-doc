---
id: "useSet"
title: "@jhooks/useSet"
slug: "useSet"
sidebar_label: "useSet"
sidebar_position: 0.5
custom_edit_url: null
---

## useSet

▸ **useSet**<`K`\>(`initialValue?`): readonly [`Set`<`K`\>, { `add`: (`key`: `K`) => `void` ; `remove`: (`key`: `K`) => `void` ; `reset`: () => `void`  }]

管理 Set 类型状态的 Hook。

## 代码演示

### 基础用法

```typescript
import useSet from '@jhooks/ahooks';

export default () => {
  const [set, { add, remove, reset }] = useSet(['Hello']);

  return (
    <div>
      <button type="button" onClick={() => add(String(Date.now()))}>
        Add Timestamp
      </button>
      <button
        type="button"
        onClick={() => remove('Hello')}
        disabled={!set.has('Hello')}
        style={{ margin: '0 8px' }}
      >
        Remove Hello
      </button>
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
      <div style={{ marginTop: 16 }}>
        <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
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

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `initialValue?` | `Iterable`<`K`\> | 可选项，传入默认的 Set 参数 |

### 输出

readonly [`Set`<`K`\>, { `add`: (`key`: `K`) => `void` ; `remove`: (`key`: `K`) => `void` ; `reset`: () => `void`  }]

Set 对象

### 代码位置

index.ts:42

