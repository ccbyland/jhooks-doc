---
id: "useForceUpdate"
title: "@jhooks/useForceUpdate"
slug: "useForceUpdate"
sidebar_label: "useForceUpdate"
sidebar_position: 0.5
custom_edit_url: null
---

## useForceUpdate

▸ **useForceUpdate**(): () => `void`

强制更新视图

## 代码演示

### 基础用法

```typescript
import useForceUpdate from "@jhooks/useForceUpdate";

const forceUpdate = useForceUpdate();

const handle = useCallback(() => {
  forceUpdate();
}, [forceUpdate]);

return (
  <>
    <View onClick={handle}>useForceUpdate</View>
  </>
);
```

## API

### 输出

`fn`

fn 更新视图的函数

▸ (): `void`

### 代码位置

index.ts:25

