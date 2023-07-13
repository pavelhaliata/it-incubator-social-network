import { appReducer, InitialStateType, RequestStatus, setErrorStatus, setRequestStatus } from "./app-reducer";


const startState: InitialStateType = {
	error: null,
	status: RequestStatus.idle,
	headerTitle: ''
}


test('error message should be set', ()=>{
const endState = appReducer(startState, setErrorStatus('error message'))
expect(endState.error).toBe('error message')
})


test("requst status should be set", () => {

const endState = appReducer(startState, setRequestStatus(RequestStatus.loading))
expect(endState.status).toBe(RequestStatus.loading)	
});
