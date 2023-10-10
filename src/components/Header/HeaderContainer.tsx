import {connect} from "react-redux";
import {StateType} from "../../store-redux/redux-store";
import {Header} from "./Header";
import {AuthUserDataType} from "../../api/social-network-api";
import {Component} from "react";
import {getAuthUserDataAsync} from "../../store-redux/auth_reducer";


// HeaderApiContainer
class HeaderApiContainer extends Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }
}


const mapStateToProps = (state: StateType): mapStatePropsType => {
    return {
        headerTitle: state.app.headerTitle,
        authUserData: state.authData
    }
};
export const HeaderContainer = connect(mapStateToProps,{getAuthUserData: getAuthUserDataAsync})(HeaderApiContainer);

//types
type mapStatePropsType = {
    headerTitle: string
    authUserData: AuthUserDataType
}
type mapDispatchPropsType = {
    getAuthUserData: () => void
}
export type HeaderPropsType = mapStatePropsType & mapDispatchPropsType