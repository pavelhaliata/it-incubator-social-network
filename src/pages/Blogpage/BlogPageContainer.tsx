import {StateDataType} from "../../redux/store";
import {useEffect} from "react";
import {newPostActionCreator, newPostTextActionCreator} from "../../redux/blogPage_reducer";
import { BlogPage } from "./Blogpage";


type BlogPageContainerProps = {
    setStatePage:(value: string) => void
    store: any;
};

export const BlogPageContainer = ({setStatePage, store}: BlogPageContainerProps) => {
    const state: StateDataType = store.getState()

    useEffect(() => {
        document.title = "My Blog";
        setStatePage("blogpage");
    }, []);

    const updatePostText = (value: string) => {
        store.dispatch(newPostTextActionCreator(value))
    }
    const addNewPost = () => {
        store.dispatch(newPostActionCreator())
    }

    return (
        <>
            <BlogPage
                postTextValue={state.blogPage.newPostTextData}
                postsData={state.blogPage.postsData}
                updatePostText={updatePostText}
                addNewPost={addNewPost}/>

        </>
    )
}
