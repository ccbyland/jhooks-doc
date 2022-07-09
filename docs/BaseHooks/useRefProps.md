---
id: "useRefProps"
title: "@jhooks/useRefProps"
slug: "useRefProps"
sidebar_label: "useRefProps"
sidebar_position: 0.5
custom_edit_url: null
---

## useRefProps

▸ **useRefProps**<`T`\>(`props`): `MutableRefObject`<`T`\>

useRefProps 使得在组件的任何地方获取最新的props值

## 代码演示

### 基础用法

```typescript
function MyButton(props) {
 const propsRef = useRefProps(props)
 const handleClick = useCallback(() => {
   const { onClick } = propsRef.current
   if (onClick) {
     onClick()
   }
 }, [])
 return <div onClick={handleClick}></div>
}
```

## API

### 类型参数

| 名称 |
| :------ |
| `T` |

### 参数

| 名称 | 类型 |
| :------ | :------ |
| `props` | `T` |

### 输出

`MutableRefObject`<`T`\>

### 代码位置

index.ts:21

