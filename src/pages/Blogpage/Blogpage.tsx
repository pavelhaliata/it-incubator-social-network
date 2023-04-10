import { ChangeEvent, KeyboardEvent } from "react";
import style from "./Blogpage.module.scss"
import { Button } from "../../components/Button/Button";
import { Post } from "./Post/Post";
import {PostType} from "../../redux/blogPage_reducer";


type BlogPageProps = {
  postTextValue: string
  updatePostText:(value: string) => void
  addNewPost: () => void
  postsData: Array<PostType>
};

export const BlogPage = ({ updatePostText, postTextValue, postsData, addNewPost }: BlogPageProps) => {

  const onChangeTextInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    updatePostText(event.currentTarget.value)
  };
  const onKeyDownCreatePostHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.ctrlKey && event.key === "Enter") {
      addNewPost()
    }
  };
  const createPostHandler = () => {
    addNewPost()
  };

  return (
    <>
      <div className={style.form_inner}>
        <div className={style.form_group}>
          <textarea
            className={style.form_control}
            name="text"
            value={postTextValue}
            placeholder="Remember, to be very polite to each other ;)"
            onChange={onChangeTextInputHandler}
            onKeyDown={onKeyDownCreatePostHandler}
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
          ? postsData.map((data) => <Post key={data.id} post={data.post} time={data.time} />)
          : ""}
      </div>
    </>
  );
};
