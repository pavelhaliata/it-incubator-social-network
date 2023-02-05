import styles from './Post.module.scss';


type PostPropsType = {
    post: string
}


export const Post = ({ post }: PostPropsType) => {
    return (
        <div className={styles.post_item}>
            <article className={styles.post}>
                <div className={styles.post__author}></div>
                <p>{post}</p>
                <div className={styles.post__additional_info}></div>
            </article>
        </div>
    )
}