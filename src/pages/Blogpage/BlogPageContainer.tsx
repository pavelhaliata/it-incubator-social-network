import {
  PostDataType,
  createPost,
  setPostTextValue,
} from "../../store-redux/blogPage_reducer";
import { StateType } from "../../store-redux/redux-store";
import { connect } from "react-redux";
import { BlogPage } from "./BlogPage";
import { setHeaderTitle } from "../../app/app-reducer";

const mapStateToProps = (state: StateType): MapStatePropsType => {
  return {
    postTextValue: state.blogPage.postTextValue,
    postsData: state.blogPage.postsData,
  };
};

export const BlogPageContainer = connect(mapStateToProps, {
  setPostTextValue,
  createPost,
  setHeaderTitle,
})(BlogPage);

// types
type MapStatePropsType = {
  postTextValue: string;
  postsData: Array<PostDataType>;
};

type MapDispatchPropsType = {
  setPostTextValue: (value: string) => void;
  createPost: () => void;
  setHeaderTitle: (title: string) => void;
};

export type BlogPagePropsType = MapStatePropsType & MapDispatchPropsType;
