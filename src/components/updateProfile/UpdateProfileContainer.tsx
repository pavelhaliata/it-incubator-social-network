import { FormikHelpers } from 'formik'
import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateUserProfileAsync } from 'store-redux/MainPage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { UpdateProfile, updateUserProfile } from './UpdateProfile'

class asyncContainer extends Component<updateProfilePropsType> {
    render() {
        return <UpdateProfile {...this.props} />
    }
}

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        userId: state.authData.id ? state.authData.id : 0,
    }
}

export const UpdateProfileContainer = compose(connect(mapStateToProps, { updateUserProfileAsync }))(
    UpdateProfile,
)

//types
type mapStatePropsType = {
    userId: number
}
type mapDispatchPropsPropsType = {
    updateUserProfileAsync: (data: any, submitProps: FormikHelpers<updateUserProfile>) => void
}

export type updateProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType
