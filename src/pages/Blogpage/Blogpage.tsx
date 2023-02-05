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
	postsData: Array<PostsType>
	addPost: () => void
	newPostData: string
}


export const BlogPage = ({ setStatePage, postsData, addPost, newPostData }: BlogPageProps) => {

	useEffect(() => {
		document.title = 'My Blog'
		setStatePage('blogpage');
	}, [])


	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		addNewPost(event.currentTarget.value)

	}
	const createPostHandler = () => {
		addPost()
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
				{postsData.map(data => <Post post={data.post} />)}
			</div>
		</div>

	)
}
