import { headerComponentReducer, headerTitleAC, HeaderComponentInitialStateType} from "./headerComponent_reducer";
  
  test("Header page title shoud be changed", () => {
	const startState: HeaderComponentInitialStateType = {
	  headerTitle: "Title",
	};
	const newHeaderTitle = "New Title";
	const endState = headerComponentReducer(
	  startState,
	  headerTitleAC(newHeaderTitle)
	);
	expect(endState.headerTitle).toBe(newHeaderTitle);
	expect(startState.headerTitle).toBe("Title");
  });
  