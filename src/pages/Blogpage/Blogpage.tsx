import React, { useEffect } from 'react';
import style from './Blogpage.module.scss';
import { ChangeEvent } from 'react';
import { Post } from './Post/Post';
import { Button } from '../../components/Button/Button';

export type PostsType = {
	post: string
}

type BlogPageProps = {
	setStatePage: (value: string) => void
	postsData: Array<PostsType>
	addNewPost: () => void
	newPostTextData: string
	updateNewPostText: (value: string) => void
}


export const BlogPage = ({ setStatePage, postsData, addNewPost, newPostTextData, updateNewPostText }: BlogPageProps) => {

	useEffect(() => {
		document.title = 'My Blog'
		setStatePage('blogpage');
	}, [])


	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		updateNewPostText(event.currentTarget.value)
	}
	const createPostHandler = () => {
		addNewPost()
		
	}

	return (
		<div>
			<div className={style.form_inner}>
				<div className={style.form_group} >
					<textarea
						className={style.form_control}
						name="text"
						value={newPostTextData}
						placeholder="Share what you are thinking here..."
						onChange={onChangeHandler}
					/>
				</div>
				<div className={style.form_button}>
					<button
						onClick={createPostHandler}>create post
					</button>
					<div className={style.block_btn}>
						<Button className={style.btn}>
							<span>create post</span>
						</Button>
					</div>
				</div>
			</div>
			<div className={style.postline_items}>
				{postsData ? postsData.map(data => <Post post={data.post} />) : ''}
			</div>
		</div>

	)
}
