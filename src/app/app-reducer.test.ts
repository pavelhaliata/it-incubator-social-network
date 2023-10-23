import {
    appReducer,
    InitialStateType,
    RequestStatus,
    setErrorStatus,
    setHeaderTitle,
    setRequestStatus,
} from './app-reducer'

const startState: InitialStateType = {
    error: null,
    requestStatus: RequestStatus.idle,
    headerTitle: '',
}

test('error message should be set', () => {
    const endState = appReducer(startState, setErrorStatus('error message'))
    expect(endState.error).toBe('error message')
})

test('request status should be set', () => {
    const endState = appReducer(startState, setRequestStatus(RequestStatus.loading))
    expect(endState.requestStatus).toBe(RequestStatus.loading)
})

test('header title should be set', () => {
    const endState = appReducer(startState, setHeaderTitle('some title'))
    expect(endState.headerTitle).toBe('some title')
})
