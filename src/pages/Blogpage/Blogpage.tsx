import {ChangeEvent, KeyboardEvent, useEffect} from "react";
import style from "./Blogpage.module.scss"
import { Button } from "../../components/Button/Button";
import { Post } from "./Post/Post";
import { BlogPageProps } from "./BlogPageContainer";



export const BlogPage = ({ updatePostText, postTextValue, postsData, addNewPost, setupHeaderTitle: setUpHeaderTitle }: BlogPageProps) => {

    useEffect(()=>{
      document.title = "Blog page"
      setUpHeaderTitle("blog page")
    }, [])

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
