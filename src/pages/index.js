import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className='container'>
                <h1 className={ styles.title }>{siteConfig.title}</h1>
                <p className={ styles.desc }>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className='button button--secondary button--lg'
                        to='/docs/guide/intro'>
                        Guide
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout title={'JHooks - JX React Hooks'}>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
