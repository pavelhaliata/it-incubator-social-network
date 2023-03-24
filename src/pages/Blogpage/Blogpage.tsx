import React, { useEffect } from 'react';
import style from './Blogpage.module.scss';
import { ChangeEvent, KeyboardEvent } from 'react';
import { Button } from '../../components/Button/Button';
import { PostsType, updateNewPostText } from '../../redax/state';
import { Post } from './Post/Post';



type BlogPageProps = {
	setStatePage: (value: string) => void
	postsData: Array<PostsType>
	newPostTextData: string
	dispatch: (action: object) => void
}


export const BlogPage = ({ setStatePage, postsData, newPostTextData, dispatch }: BlogPageProps) => {

	useEffect(() => {
		document.title = 'My Blog'
		setStatePage('blogpage');
	}, [])


	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		event.preventDefault()
		updateNewPostText(event.currentTarget.value)
		// dispatch({ type: 'UPDATE-NEW-POST-TEXT', newtext: event.currentTarget.value })
	}
	const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.ctrlKey && event.key === 'Enter') {
			dispatch({ type: 'ADD-NEW-POST' })
		}
	}
	const createPostHandler = () => {
		dispatch({ type: 'ADD-NEW-POST' })
	}

	return (
		<div>
			<div className={style.form_inner}>
				<div className={style.form_group} >
					<textarea
						className={style.form_control}
						name="text"
						value={newPostTextData}
						placeholder="Remember to be very polite to each other ;)"
						onChange={onChangeHandler}
						onKeyPress={onKeyPressHandler}
					/>
				</div>

				<div className={style.form_button}>
					<div className={style.block_btn}>
						<Button callback={createPostHandler}>
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
