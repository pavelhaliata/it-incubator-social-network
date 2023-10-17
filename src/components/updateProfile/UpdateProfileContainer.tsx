import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppRootState } from "store-redux/redux-store";
import {UpdateProfile} from "./UpdateProfile";
import {updateUserProfileAsync} from "store-redux/MainPage_reducer";
import {UserProfileType} from "api/social-network-api";

class asyncContainer extends Component<updateProfilePropsType> {


    render(){
        return <UpdateProfile {...this.props}/>
    }


}

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        
    };
};

export const UpdateProfileContainer = compose(
    connect(mapStateToProps,{updateUserProfileAsync}))(asyncContainer);

//types
type mapStatePropsType = {
    
};
type mapDispatchPropsPropsType = {
    updateUserProfileAsync: (data: UserProfileType) => void
};

export type updateProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;