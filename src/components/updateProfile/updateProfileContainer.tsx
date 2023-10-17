import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppRootState } from "store-redux/redux-store";

class updateProfileAsyncContainer extends Component<updateProfilePropsType> {

    componentDidMount(){
      
	}
}

const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        
    };
};

export const updateProfileContainer = compose(connect(mapStateToProps,{}))(updateProfileAsyncContainer);

//types
type mapStatePropsType = {
    
};
type mapDispatchPropsPropsType = {
};

export type updateProfilePropsType = mapStatePropsType & mapDispatchPropsPropsType;