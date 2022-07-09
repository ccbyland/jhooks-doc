---
id: "useWait"
title: "@jhooks/useWait"
slug: "useWait"
sidebar_label: "useWait"
sidebar_position: 0.5
custom_edit_url: null
---

## useWait

▸ **useWait**(): (`time`: `number`) => `Promise`<`void`\>

延时指定时间执行后面的代码，可代替setTimeout

## 代码演示

### 基础用法

```typescript
import useWait from "@jhooks/useWait";

const wait = useWait();

const handle = useCallback(async () => {
  console.error(Date.now());
  await wait(1000);
  console.error(Date.now());
  await wait(2000);
  console.error(Date.now());
}, [wait]);

return (
  <>
    <View onClick={handle}>useWait</View>
  </>
);
```

## API

### 输出

`fn`

fn 延迟函数

▸ (`time`): `Promise`<`void`\>

### 代码位置

index.ts:29

