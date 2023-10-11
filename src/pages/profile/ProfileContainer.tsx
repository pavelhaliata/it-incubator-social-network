import {connect} from "react-redux";
import {AppRootState} from "store-redux/redux-store";
import {Profile} from "./Profile";
import React from "react";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {};
};


export const ProfileContainer = compose(
    connect(mapStateToProps, {}),
    withAuthRedirect)
(Profile);


//types
type mapStatePropsType = {};
type mapDispatchPropsPropsType = {};
export type ProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;