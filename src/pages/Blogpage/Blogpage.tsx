import React, { useEffect } from 'react';
import styles from './Blogpage.module.scss';
import { ChangeEvent, useState } from 'react';
import { Post, } from './Post/Post';

export type PostsType = {
	post: string
}

type BlogPageProps = {
	setStatePage: (value: string) => void
	postsData?: Array<PostsType>
	addPost?: (value: string) => void
}


export const BlogPage = ({ setStatePage, postsData, addPost }: BlogPageProps) => {

	useEffect(() => {
		document.title = 'My Blog'
		setStatePage('blogpage');
	}, [])

	const [title, setTitle] = useState('')

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}
	const createPostHandler = () => {
		addPost && addPost(title)
		setTitle('')
	}

	return (
		<div>
			<div>
				<input type="text" value={title} onChange={onChangeHandler} />
				<button onClick={createPostHandler}>create post</button>
			</div>
			<div className={styles.postline_items}>
				<div className={styles.post_item}>
					{postsData && postsData.map(data => <Post post={data.post} />)}
				</div>
			</div>
		</div>

	)
}
