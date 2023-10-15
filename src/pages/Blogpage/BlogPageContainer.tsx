import {compose} from "redux";
import {connect} from "react-redux";
import {setHeaderTitle} from "app/app-reducer";
import {PostDataType, createPost, setPostTextValue} from "store-redux/blogPage_reducer";
import {AppRootState} from "store-redux/redux-store";
import {BlogPage} from "./BlogPage";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {ComponentType} from "react";

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        postTextValue: state.blogPage.postTextValue,
        postsData: state.blogPage.postsData,
    };
};

export const BlogPageContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        setPostTextValue,
        createPost,
        setHeaderTitle
    }),
    withAuthRedirect
)(BlogPage);


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
