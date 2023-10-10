import { connect } from "react-redux";
import { StateType } from "../../store-redux/redux-store";
import { setHeaderTitle } from "../../app/app-reducer";
import { Profile } from "./Profile";
import { Navigate } from "react-router-dom";
import React from "react";



const mapStateToProps = (state: StateType): mapStatePropsType => {
  return {
     isLogin: state.authData.isLogin
  };
};

const AuthRedirectComponent = (props:ProfilePropsType) => {
  
  if(!props.isLogin){
    return(
         <Navigate to='/login'/>
      )
  }
  return <Profile {...props}/>

}

export const ProfileContainer = connect(mapStateToProps, { setHeaderTitle })(AuthRedirectComponent);


//types
type mapStatePropsType = {
  isLogin: boolean

};
type mapDispatchPropsPropsType = {
    
};
export type ProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;