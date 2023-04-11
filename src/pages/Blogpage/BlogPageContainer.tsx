import {useEffect} from "react";
import {newPostActionCreator, newPostTextActionCreator} from "../../redux/blogPage_reducer";
import {ActionCreatorsTypes} from "../../StoreContext";
import {ReduxStateType, StateDataType} from "../../redux/redux-store";
import {Store, Dispatch } from "redux";
import {connect} from "react-redux";
import {BlogPage} from "./Blogpage";



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
//!!! типизация state из redux/store
const mapStateToProps = (state: StateDataType ) => {
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
