import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/Blog_post.module.css'
const slug = (props) => {
    const [blog, setBlog] = useState(props.blogdata)

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query
    //     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((data) => { return data.json() }).then((parse) => {
    //         console.log(parse);
    //         setBlog(parse)
    //     })
    // }, [router.isReady])

    return <div className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <hr />
        <div>
            <p>{blog && blog.content}</p>
        </div>
    </div>;
};


export async function getServerSideProps(context) {

    const {slug} = context.query;

    let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
    let blogdata = await data.json();


    return {
        props: { blogdata },
    }
}

export default slug;