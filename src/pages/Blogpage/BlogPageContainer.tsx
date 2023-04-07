import { StateDataType } from "../../redux/store";
import { useEffect } from "react";
import {
  newPostActionCreator,
  newPostTextActionCreator,
} from "../../redux/blogPage_reducer";
import { BlogPage } from "./Blogpage";
import { Store } from "redux";
import { ReduxStateType } from "../../redux/redux-store";
import { ActionCreatorsTypes } from "../../StoreContext";
import { connect } from "react-redux";

type BlogPageContainerProps = {
  //setStatePage: (value: string) => void;
  store: Store<ReduxStateType, ActionCreatorsTypes>;
};

export const BlogPageContainer_block = ({store}: BlogPageContainerProps) => {
  const state: StateDataType = store.getState();

  useEffect(() => {
    document.title = "My Blog";
    //setStatePage("blogpage");
  }, []);

  const updatePostText = (value: string) => {
    store.dispatch(newPostTextActionCreator(value));
  };
  const addNewPost = () => {
    store.dispatch(newPostActionCreator());
  };

  return (
    <>
      <BlogPage
        postTextValue={state.blogPage.newPostTextData}
        postsData={state.blogPage.postsData}
        updatePostText={updatePostText}
        addNewPost={addNewPost}
      />
    </>
  );
};
//==================================================================
const mapStateToProps = (state: StateDataType) => {
  return {
    postTextValue: state.blogPage.newPostTextData,
    postsData: state.blogPage.postsData,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    updatePostText: (value: string) => {dispatch(newPostTextActionCreator(value))},
    addNewPost: () => {dispatch(newPostActionCreator())},
  };
};
export const BlogPageContainer = connect(mapStateToProps, mapDispatchToProps )(BlogPage);
