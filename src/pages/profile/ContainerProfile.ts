import { connect } from "react-redux";
import { StateType } from "../../store-redux/redux-store";
import { setHeaderTitle } from "../../app/app-reducer";
import { Profile } from "./Profile";



const mapStateToProps = (state: StateType): mapStatePropsType => {
  return {
     
  };
};
export const ProfileContainer = connect(mapStateToProps, { setHeaderTitle })(Profile);


//types
type mapStatePropsType = {

};
type mapDispatchPropsPropsType = {
    
};
export type ProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;