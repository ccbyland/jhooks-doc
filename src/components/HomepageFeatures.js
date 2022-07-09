import React from 'react';
import styles from './HomepageFeatures.module.css';
import ReactMarkdown from 'react-markdown';

const Features = [
    '开箱即用',
    '支持 SSR',
    '包含丰富的基础 Hooks',
    '包含大量提炼自业务的高级 Hooks',
    '性能可靠，没有多余的 Render',
    '对输入输出函数做了特殊处理，无闭包问题',
    '使用 TypeScript 构建，提供完整的类型定义文件',
];

export default function HomepageFeatures() {
    return (
        <div className={styles.content}>
            <section className={styles.features}>
                <header className={styles.features_title}>Features</header>
                <ul className={styles.items}>
                    {Features.map((item, index) => {
                        return (
                            <li key={index} className={styles.item}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className={styles.features}>
                <header className={styles.features_title}>Install</header>
                <div className={styles.features_code}>
                    npm install @jhooks/hooks --registry=http://registry.m.jd.com/
                </div>
            </section>
            <section className={styles.features}>
                <header className={styles.features_title}>Usage</header>
                <div className={styles.features_code}>
                    import jhooks from '@jhooks/hooks';
                </div>
            </section>
            <section className={styles.features}>
                <header className={styles.features_title}>Discuss</header>
                <a className={styles.number} href='timline://chat/?topin=1026089660&type=2'>咚咚群号：1026089660</a>
            </section>
        </div>
    );
}
