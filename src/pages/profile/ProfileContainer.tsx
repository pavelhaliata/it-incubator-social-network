import { UserProfileType } from 'api/social-network-api'
import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUserProfileAsync, uploadPhotoAsync } from 'store-redux/MainPage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { Profile } from './Profile'

class ProfileAsyncContainer extends Component<ProfilePropsType> {

    componentDidMount(){
        if(this.props.userId)
        this.props.getUserProfileAsync(this.props.userId)
    }

    render() {
        const {...userProfile} = this.props

        return (
           <Profile {...userProfile}/>
        );
    }
}

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        userId: state.authData.id,
        userProfile: state.profilePage.userProfileData
    };
};

export const ProfileContainer = compose(
    connect(mapStateToProps,{getUserProfileAsync, uploadPhotoAsync}))
    (ProfileAsyncContainer);

//types
type mapStatePropsType = {
    userId: number | null
    userProfile: UserProfileType
};
type mapDispatchPropsPropsType = {
    getUserProfileAsync:(userId: number) => void
    uploadPhotoAsync: (file: any) => void
};

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;