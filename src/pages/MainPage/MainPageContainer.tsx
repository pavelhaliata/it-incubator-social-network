import {connect} from "react-redux";
import {AppRootState} from "store-redux/redux-store";
import {MainPage} from "./MainPage";
import {setHeaderTitle} from "app/app-reducer";
import {AuthUserDataType} from "api/social-network-api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        authUserData: state.authData
    };
};
export const MainPageContainer = compose<ComponentType>(
    connect(mapStateToProps, {setHeaderTitle}),
    withAuthRedirect)
(MainPage);


//types
type mapStatePropsType = {
    authUserData: AuthUserDataType

};
type mapDispatchPropsPropsType = {
    setHeaderTitle: (title: string) => void;
};
export type MainPagePropsType = mapStatePropsType & mapDispatchPropsPropsType;