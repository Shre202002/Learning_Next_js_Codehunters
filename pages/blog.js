import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import Image from 'next/image'
const blog = () => {

  const [blogdata, setBlogdata] = useState([])

  useEffect(() => {
    console.log("This Is Use Effect");
    fetch("http://localhost:3000/api/blogs").then((data) => {
      return data.json()
    }).then((parse) => {
      // console.log(parse);
      setBlogdata(parse)
    })
  }, [])
console.log(typeof blogdata);

  return (
    <div className={styles.display}>

      {
        blogdata.map((content) => {
          return <div className={styles.card} key={content.title}>


            <Link href={`/blogpost/${content.slug}`}>
              <Image src='/blog_logo-3.jpg' width={150} height={150} className={styles.cardImage} />
              <h1>{content.title}</h1>
            </Link>

            <p> {content.content.substr(0, 100)} </p>
          </div>

        })
      }

    </div>
  )
}

export default blog