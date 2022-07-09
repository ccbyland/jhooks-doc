---
id: "useIntersectionObserver"
title: "@jhooks/useIntersectionObserver"
slug: "useIntersectionObserver"
sidebar_label: "useIntersectionObserver"
sidebar_position: 0.5
custom_edit_url: null
---

## useIntersectionObserver

▸ **useIntersectionObserver**(`options?`): `MutableRefObject`<`Taro.IntersectionObserver` \| ``null``\>

获取1个IntersectionObserver引用对象

## 代码演示

### 基础用法

```ts
import Taro from '@tarojs/taro';
import { useRef, useEffect } from 'react';
import useIntersectionObserver from "@jhooks/useIntersectionObserver";
import { IContentCard } from '../models';

export function useObserveContentList(options?: {
    contentList: IContentCard[];
    observeClass名称: string;
    observedCallback: (item: IContentCard) => void;
    intersectionObserver?: Taro.createIntersectionObserver.Option;
    relativeToViewport?: Taro.IntersectionObserver.RelativeToViewportMargins;
}): void {
    const { contentList, observeClass名称 = '', observedCallback } = options || {};
    const observer = useIntersectionObserver(options);
    const hasReportedMap = useRef(new Map<string, boolean>());
    useEffect(() => {
        if (!observeClass名称) return;
        if (!contentList || !contentList.length) return;
        const observerCurrent = observer.current;
        if (!observerCurrent) return;
        Taro.nextTick(() => {
            contentList.forEach((item) => {
                const observeKey = `.${observeClass名称}${item.contentId}`;
                observerCurrent.observe(
                    observeKey,
                    () => {
                        if (hasReportedMap.current.has(observeKey)) return;
                        hasReportedMap.current.set(observeKey, true);
                        observedCallback?.(item);
                    }
                );
            });
        });
        return () => {
            observerCurrent?.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentList, observeClass名称]);
}

// 在函数组件中，监听contentList中元素暴露在容器中，触发observedCallback并上报
    useObserveContentList({
        contentList,
        observeClass名称: `index_topic_item_${topicId}_`,
        observedCallback: (item: IContentCard) => {
            if (!hasExposure.current) {
                hasExposure.current = true;
                // 话题楼层做了曝光的上报，理论上PV应该和页面渲染成功一致
                // wq.webmonitor.mjcx.jxpp_content.index.action.exposureTopicContentScroll
                bizReport(INDEX_BIZ_ID, 6, 14, `index_topic_item_${topicId}_${item.contentId}`);
            }
            exposureReport(CONTENT_INDEX_PTAG.TOPIC_CONTENT, {
                tab_id: topicId || 999,
                tab_pos: currentTopicIndex + 1,
                prv: JSON.stringify([{ content_id: item.contentId }]),
            });
        }
    });

```

## API

### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `options?` | `Object` | 配置项 |
| `options.intersectionObserver?` | `Option` | intersectionObserver 创建配置， 参考[Taro文档](https://taro-docs.jd.com/taro/docs/apis/wxml/createIntersectionObserver)、[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html) |
| `options.relativeToViewport?` | `RelativeToViewportMargins` | intersectionObserver 相对容器元素边距配置， 参考[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html) |

### 输出

`MutableRefObject`<`Taro.IntersectionObserver` \| ``null``\>

IntersectionObserver引用对象

### 代码位置

index.ts:246

