import {AppRootState} from "store-redux/redux-store";
import {connect} from "react-redux";
import {RequestStatus, setHeaderTitle} from "app/app-reducer";
import {getUserProfileAsync, getUserStatusAsync} from "store-redux/MainPage_reducer";
import {UserProfileType} from "api/social-network-api";
import { compose } from 'redux'
import { withLazyLoading } from '../../../hoc/withLazyLoading'
import { ComponentType, lazy } from 'react'

const User = lazy(() => import('./UserProfile')
    .then((module) => ({ default: module.User })))


const mapStateToProps = (state: AppRootState) => {
    return {
        profileUserData: state.profilePage.userProfileData,
        requestStatus: state.app.requestStatus,
        userStatus: state.profilePage.userStatus
    };
};

export const UserProfileContainer = compose<ComponentType>(connect(mapStateToProps,
    { setHeaderTitle, getProfileUserAsync: getUserProfileAsync, getUserStatusAsync }), withLazyLoading)
(User);

// types

type mapStatePropsType = {
    profileUserData: UserProfileType
    requestStatus: RequestStatus
    userStatus: string
}
type mapDispatchPropsPropsType = {
    setHeaderTitle: (title: string) => void
    getProfileUserAsync: (userId: number) => void
    getUserStatusAsync:(userId: number) => void
}

export type UserPagePropsType = mapStatePropsType & mapDispatchPropsPropsType
