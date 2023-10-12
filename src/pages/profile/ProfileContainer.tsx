import {connect} from "react-redux";
import {AppRootState} from "store-redux/redux-store";
import {Profile} from "./Profile";
import React from "react";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {compose} from "redux";
import {getUserStatusAsync} from "../../store-redux/MainPage_reducer";


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        userAuthorizedId: state.authData.id
    };
};

export const ProfileContainer = compose(connect(mapStateToProps, {getUserStatusAsync}), withAuthRedirect)(Profile);

//types
type mapStatePropsType = {
    userAuthorizedId: number | null
};
type mapDispatchPropsPropsType = {
    getUserStatusAsync: (userId: number) => void
};
export type ProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;