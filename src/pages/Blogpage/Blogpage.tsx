import React, { useEffect } from "react";
import style from "./Blogpage.module.scss";
import { ChangeEvent, KeyboardEvent } from "react";
import { Button } from "../../components/Button/Button";
import { createNewPost, updateNewPostText } from "../../redax/post_reducer";
import { PostsType } from "../../redax/state";
import { Post } from "./Post/Post";


type BlogPageProps = {
  setStatePage: (value: string) => void;
  postsData: Array<PostsType>;
  newPostTextData: string;
  dispatch: (Value: any) => void
  store?: any;
};

export const BlogPage = ({setStatePage, postsData, newPostTextData, dispatch, store }: BlogPageProps) => {
  
  useEffect(() => {
    document.title = "My Blog";
    setStatePage("blogpage");
  }, []);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    dispatch(updateNewPostText(event.currentTarget.value));
  };
  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.ctrlKey && event.key === "Enter") {
		dispatch(createNewPost());
    }
  };
  const createPostHandler = () => {
    dispatch(createNewPost());
  };

  return (
    <>
      <div className={style.form_inner}>
        <div className={style.form_group}>
          <textarea
            className={style.form_control}
            name="text"
            value={newPostTextData}
            placeholder="Remember, to be very polite to each other ;)"
            onChange={onChangeHandler}
            onKeyDown={onKeyPressHandler}
          />
        </div>

        <div className={style.form_button}>
          <div className={style.block_btn}>
            <Button callback={createPostHandler}>create post</Button>
          </div>
        </div>
      </div>
      <div className={style.post_items}>
        {postsData
          ? postsData.map((data) => <Post key={data.id} post={data.post} />)
          : ""}
      </div>
    </>
  );
};
