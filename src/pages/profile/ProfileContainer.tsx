import { UserProfileType } from 'api/social-network-api'
import { RequestStatus, setErrorStatus } from 'app/app-reducer'
import { Component, ComponentType, lazy } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUserProfileAsync, uploadPhotoAsync } from 'store-redux/MainPage_reducer'
import { AppRootState } from 'store-redux/redux-store'
import { withLazyLoading } from '../../hoc/withLazyLoading'

const Profile = lazy(() => import('./Profile').then(module => ({ default: module.Profile })))

class ProfileContainerAsync extends Component<ProfilePropsType> {
    componentDidMount() {
        if (this.props.userId) this.props.getUserProfileAsync(this.props.userId)
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        // if (prevProps.userId !== this.props.userId) {
        //     if (this.props.userId) this.props.getUserProfileAsync(this.props.userId)
        // }
    }

    componentWillUnmount() {
        this.props.setErrorStatus(null)
    }

    render() {
        const { ...userProfileData } = this.props
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        userId: state.authData.id,
        userProfileData: state.profilePage.userProfileData,
        requestStatus: state.app.requestStatus,
        errorMessage: state.app.error
    }
}

export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, { getUserProfileAsync, uploadPhotoAsync, setErrorStatus }),
    withLazyLoading
)(ProfileContainerAsync)

//types
type mapStatePropsType = {
    userId: number | null
    userProfileData: UserProfileType
    requestStatus: RequestStatus
    errorMessage: string | null
}
type mapDispatchPropsPropsType = {
    getUserProfileAsync: (userId: number) => void
    uploadPhotoAsync: (file: string | Blob) => void
    setErrorStatus: (errorMessage: string | null) => void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType
