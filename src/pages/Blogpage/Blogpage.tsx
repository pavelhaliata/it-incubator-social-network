import React, { useEffect } from 'react';
import style from './Blogpage.module.scss';
import { ChangeEvent, useState } from 'react';
import { Post, } from './Post/Post';
import { addNewPost } from '../../redax/state';

export type PostsType = {
	post: string
}

type BlogPageProps = {
	setStatePage: (value: string) => void
	postsData?: Array<PostsType>
	addPost?: (value: string) => void
	newPostData: any
}


export const BlogPage = ({ setStatePage, postsData, addPost, newPostData }: BlogPageProps) => {

	useEffect(() => {
		document.title = 'My Blog'
		setStatePage('blogpage');
	}, [])

	const [title, setTitle] = useState('')

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		// setTitle(event.currentTarget.value)
		addNewPost(event.currentTarget.value)

	}
	const createPostHandler = () => {
		addPost && addPost('')
		// setTitle('')
	}

	return (
		<div>
			<div className={style.form_inner}>
				<div className={style.form_group} >
					<textarea
						className={style.form_control}
						name="text"
						value={newPostData}
						placeholder="Share what you are thinking here..."
						onChange={onChangeHandler}
						/>
				</div>
				<div className={style.form_button}>
					<button
						onClick={createPostHandler}>create post
					</button>
				</div>
			</div>
			<div className={style.postline_items}>
				{postsData && postsData.map(data => <Post post={data.post} />)}
			</div>
		</div>

	)
}
