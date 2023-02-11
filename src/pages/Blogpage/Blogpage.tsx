import React, { useEffect } from 'react';
import style from './Blogpage.module.scss';
import { ChangeEvent } from 'react';
import { Post } from './Post/Post';
import { Button } from '../../components/Button/Button';
import { PostsType } from '../../redax/state';



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
		dispatch({type: 'APDATE-NEW-POST-TEXT', newtext: event.currentTarget.value})
	}
	const createPostHandler = () => {
		dispatch({type: 'ADD-NEW-POST'})
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
					/>
				</div>
				<div className={style.form_button}>
					<div className={style.block_btn}>
						<Button className={style.btn} onClick={createPostHandler}>
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
