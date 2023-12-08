import { Component } from 'react'
import styles from './post.module.scss'

type PostPropsType = {
    /** User Post */
    post: string
    /** Time Post */
    time: string
}
/** UI Component Post */
export class Post extends Component<PostPropsType> {
    render() {
        return (
            <div className={styles.wrapper}>
                <article className={styles.post}>
                    <div className={styles.post_author}></div>
                    <p>{this.props.post}</p>
                    <span>{this.props.time}</span>
                </article>
            </div>
        )
    }
}
