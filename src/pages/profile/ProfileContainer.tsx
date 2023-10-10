import {connect} from "react-redux";
import {StateType} from "store-redux/redux-store";
import {Profile} from "./Profile";
import React from "react";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state: StateType): mapStatePropsType => {
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