import { compose } from 'redux'
import { connect } from 'react-redux'
import { setHeaderTitle } from 'app/app-reducer'
import { createPost, PostDataType, setPostTextValue } from 'store-redux/blogPage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { ComponentType, lazy } from 'react'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { withLazyLoading } from '../../hoc/withLazyLoading'

const BlogPage = lazy(() => import('./BlogPage')
    .then((module) => ({ default: module.BlogPage })))

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        postTextValue: state.blogPage.postTextValue,
        postsData: state.blogPage.postsData
    }
}

export const BlogPageContainer = compose<ComponentType>(
    connect(mapStateToProps, { setPostTextValue, createPost, setHeaderTitle }),
    withLazyLoading,
    withAuthRedirect)
(BlogPage)


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
