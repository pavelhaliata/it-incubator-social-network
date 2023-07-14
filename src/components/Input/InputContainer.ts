import { connect } from "react-redux";
import { Dispatch } from "redux";
import { inputValueAC } from "../../store-redux/inputComponent_reducer";
import { StateType } from "../../store-redux/redux-store";
import { Input } from "./Input";



type mapStatePropsType = {
	inputValue?: string
}
type mapDispatchPropsType = {
	setInputValue?: (value: string) => void
}
export type InputPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: StateType ): mapStatePropsType => {
	return {
	  inputValue: state.inputValueComponent.inputValue
	}
  };
  const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
	return {
		setInputValue: (value: string) => {dispatch(inputValueAC(value))}
	};
  };
  export const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
  