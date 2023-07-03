import React from 'react';
import { useRouter } from 'next/router'
import styles from '@/styles/Blog_post.module.css'
const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div className={styles.main}>
        <h1> {slug}</h1>
        <hr />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus tempora consequatur aliquid consequuntur dicta labore explicabo saepe velit nihil? Quis id delectus, eos consectetur accusamus voluptas modi doloribus enim doloremque suscipit dolorem totam illum quam veniam facere ipsum error consequuntur, quos quidem vel dolor voluptate exercitationem obcaecati nesciunt. Facere libero quam quia debitis. Officiis soluta nobis perspiciatis. Aperiam voluptatem perferendis vel, maxime asperiores eaque provident non doloribus officia, perspiciatis eum consequatur sint quaerat porro dolorum rerum omnis, magnam velit est explicabo odio? Eum pariatur laudantium optio fugiat quis porro libero doloremque quod accusantium nulla esse voluptas nostrum numquam odit necessitatibus debitis atque laboriosam totam, quidem suscipit molestiae impedit neque ad? Harum repellendus consequuntur quis nisi veniam? Unde officiis, non nulla voluptate, maxime nesciunt architecto provident atque illo ea dolore magnam eveniet libero ad aliquam illum beatae? Minima asperiores at sint expedita aspernatur mollitia, non quo? Vel, molestias? Eius molestias ratione laborum iusto eum fuga fugit deserunt hic voluptas qui quo, a tempora? Laboriosam aliquid accusamus quae cupiditate provident dolorum deserunt illo excepturi quibusdam laborum culpa, suscipit dolores debitis cum est optio facilis assumenda consequatur non hic perferendis corrupti. Hic ipsum alias esse quisquam suscipit quas maxime accusantium consequatur dolor natus non quasi ducimus aperiam molestiae fugit rerum, corrupti tenetur libero eligendi. Eligendi aliquid, deserunt voluptatum nihil nam beatae ullam veniam praesentium aliquam aut, quam similique? Obcaecati illum velit atque iure consectetur sed aperiam labore iste natus beatae ut cumque non id et possimus, temporibus magni aliquam sequi. Maxime, perferendis accusamus.</p>
        </div>
    </div>;
};
export default slug;