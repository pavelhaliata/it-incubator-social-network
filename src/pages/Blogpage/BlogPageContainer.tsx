import {PostDataType, createPostAC, setPostTextValueAC} from "../../redux/blogPage_reducer";
import {StateType } from "../../redux/redux-store";
import {Dispatch } from "redux";
import {connect} from "react-redux";
import {headerTitleAC} from "../../redux/headerComponent_reducer";
import { BlogPage } from "./BlogPage";



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
  setPostTextValue: (value: string) => void
  createNewPost: ()=> void
  setupHeaderTitle: (title: string) => void
}

export type BlogPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: StateType ): MapStatePropsType => {
  return {
    postTextValue: state.blogPage.postTextValue,
    postsData: state.blogPage.postsData
  }; 
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    setPostTextValue: (value: string) => {dispatch(setPostTextValueAC(value))},
    createNewPost: () => {dispatch(createPostAC())},
    setupHeaderTitle: (title: string) => {dispatch(headerTitleAC(title))},
  };
};
export const BlogPageContainer = connect(mapStateToProps, mapDispatchToProps )(BlogPage);
