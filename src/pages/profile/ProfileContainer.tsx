import {withAuthRedirect} from "hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppRootState} from "store-redux/redux-store";
import {getUserStatusAsync} from "../../store-redux/MainPage_reducer";
import {Profile} from "./Profile";
import {ComponentType} from "react";


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {};
};

export const ProfileContainer = compose(
    connect(mapStateToProps,
        {getUserStatusAsync}))
(Profile);

//types
type mapStatePropsType = {};
type mapDispatchPropsPropsType = {};
export type ProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;