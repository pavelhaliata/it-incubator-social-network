import { Component } from 'react'
import styles from './Post.module.scss'

type PostPropsType = {
    post: string
    time: string
}

export class Post extends Component<PostPropsType, any> {
    render() {
        return (
            <div className={styles.wrapper}>
                <article className={styles.post}>
                    <div className={styles.post_author}></div>
                    <p>{this.props.post}</p>
                    <span>{this.props.time}</span>
                    <div className={styles.post_additional_info}></div>
                </article>
            </div>
        )
    }
}
