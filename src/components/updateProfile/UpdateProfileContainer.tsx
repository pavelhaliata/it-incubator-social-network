import { FormikHelpers } from 'formik'
import { Component, ComponentType, lazy } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateUserProfileAsync } from 'store-redux/MainPage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { updateUserProfile } from './UpdateProfile'
import { withLazyLoading } from '../../hoc/withLazyLoading'
import { UserProfileType } from 'api/social-network-api'

const UpdateProfile = lazy(() => import('./UpdateProfile').then(module => ({ default: module.UpdateProfile })))

class asyncContainer extends Component<updateProfilePropsType> {
    render() {
        return <UpdateProfile {...this.props} />
    }
}

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        userId: state.authData.id ? state.authData.id : 0,
        userProfileData: state.profilePage.userProfileData,
    }
}

export const UpdateProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, { updateUserProfileAsync }),
    withLazyLoading,
)(UpdateProfile)

//types
type mapStatePropsType = {
    userId: number
    userProfileData: UserProfileType
}
type mapDispatchPropsPropsType = {
    updateUserProfileAsync: (data: any, submitProps: FormikHelpers<updateUserProfile>) => void
}

export type updateProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType
