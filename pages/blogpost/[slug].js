import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/Blog_post.module.css'
const slug = () => {
    const [blog, setBlog] = useState()
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query
        fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((data) => { return data.json() }).then((parse) => {
            console.log(parse);
            setBlog(parse)
        })
    }, [router.isReady])

    return <div className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <hr />
        <div>
            <p>{blog && blog.content}</p>
        </div>
    </div>;
};
export default slug;