import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
const navbar = () => {
    return (
        <>
            <span className={styles.logo_head}>
                <Link href="/">
                    <Image className={styles.logo} src='/blog_logo-3.jpg' width={100} height={100} />
                    <h2>Code Hunters</h2>
                </Link>
            </span>
            <nav className={styles.main_nav}>
                <ul>
                    <Link href="/" > <li>Home</li></Link>
                    <Link href='/blog'> <li>BLog</li></Link>
                    <Link href='/about' > <li>About</li></Link>
                    <Link href="/contact"> <li>Contact</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default navbar