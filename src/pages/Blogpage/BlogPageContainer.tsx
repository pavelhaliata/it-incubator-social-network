import {useEffect} from "react";
import {InitialBlogPageStateType, newPostActionCreator, newPostTextActionCreator, PostDataType} from "../../redux/blogPage_reducer";
import {ActionCreatorsTypes} from "../../StoreContext";
import {AppStateType, StateType} from "../../redux/redux-store";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {headerTitleAC} from "../../redux/headerComponents_reducer";
import { BlogPage } from "./Blogpage";



// const BlogPageContainer_block = ({store}: BlogPageContainerProps) => {
//   const state: StateDataType = store.getState();
//
//   useEffect(() => {
//     document.title = "My Blog";
//     //setStatePage("blogpage");
//   }, []);
//
//   const updatePostText = (value: string) => {
//     store.dispatch(newPostTextActionCreator(value));
//   };
//   const addNewPost = () => {
//     store.dispatch(newPostActionCreator());
//   };
//
//   return (
//     <>
//       <BlogPage
//         postTextValue={state.blogPage.newPostTextData}
//         postsData={state.blogPage.postsData}
//         updatePostText={updatePostText}
//         addNewPost={addNewPost}
//       />
//     </>
//   );
// };
//==================================================================
//!!! типизация state из redux/store
/// узнать как лучше типизировать, экспортировать initialStateType или таким образом
type MapStatePropsType = { 
  postTextValue: string,
  postsData: Array<PostDataType>
}

type MapDispatchPropsType = {
  updatePostText: (value: string) => void
  addNewPost: ()=> void
  setupHeaderTitle: (title: string) => void
}

export type BlogPageProps = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType ): MapStatePropsType => {
  return {
    postTextValue: state.blogPage.newPostTextData,
    postsData: state.blogPage.postsData
  }; 
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updatePostText: (value: string) => {dispatch(newPostTextActionCreator(value))},
    addNewPost: () => {dispatch(newPostActionCreator())},
    setupHeaderTitle: (title: string) => {dispatch(headerTitleAC(title))},
  };
};
export const BlogPageContainer = connect(mapStateToProps, mapDispatchToProps )(BlogPage);
