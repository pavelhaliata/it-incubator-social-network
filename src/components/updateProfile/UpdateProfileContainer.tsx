import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppRootState } from "store-redux/redux-store";
import {UpdateProfile, updateUserProfile} from "./UpdateProfile";
import {updateUserProfileAsync} from "store-redux/MainPage_reducer";
import {UserProfileType} from "api/social-network-api";
import {FormikHelpers} from "formik";

class asyncContainer extends Component<updateProfilePropsType> {


    render(){
        return <UpdateProfile {...this.props}/>
    }


}


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        userId: state.authData.id ? state.authData.id : 0
    };
};

export const UpdateProfileContainer = compose(
    connect(mapStateToProps,{updateUserProfileAsync}))(UpdateProfile);

//types
type mapStatePropsType = {
    userId: number
};
type mapDispatchPropsPropsType = {
    updateUserProfileAsync: (data: any,  submitProps: FormikHelpers<updateUserProfile>) => void
};

export type updateProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;