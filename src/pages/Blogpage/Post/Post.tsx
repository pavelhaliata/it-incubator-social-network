import { PostsType } from '../Blogpage';
import styles from './Post.module.scss';


type PostPropsType={
    post: any
}


export const Post = ({post}: PostPropsType) => {
    return (
        <>
            <article className={styles.post}>
                <div className={styles.post__author}></div>
                <p>{post}</p>
                <div className={styles.post__additional_info}></div>
            </article>
        </>
    )
}