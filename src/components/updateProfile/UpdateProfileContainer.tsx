import { UpdateUserProfileType } from 'api/social-network-api'
import { FormikHelpers } from 'formik'
import { ComponentType, lazy } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateUserProfileAsync } from 'store-redux/ProfilePage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { withLazyLoading } from 'hoc/withLazyLoading'

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
    userProfileData: UpdateUserProfileType
}
type mapDispatchPropsPropsType = {
    updateUserProfileAsync: (data: UpdateUserProfileType, submitProps: FormikHelpers<UpdateUserProfileType>) => void
}

export type updateProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType
