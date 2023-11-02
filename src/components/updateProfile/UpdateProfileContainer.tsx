import { UpdateUserProfileType, UserProfileType } from 'api/social-network-api'
import { FormikHelpers } from 'formik'
import { ComponentType, lazy } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateUserProfileAsync } from 'store-redux/MainPage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { withLazyLoading } from '../../hoc/withLazyLoading'

const UpdateProfile = lazy(() => import('./UpdateProfile').then(module => ({ default: module.UpdateProfile })))

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
    updateUserProfileAsync: (data: UpdateUserProfileType, submitProps: FormikHelpers<UpdateUserProfileType>) => void
}

export type updateProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType
