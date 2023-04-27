import {BlogPageInitialStateType, blogPageReducer, newPostAC, newPostTextAC} from "./blogPage_reducer"


test("post message shoud be added", () => {
const startState: BlogPageInitialStateType = {
	newPostTextData: 'rrrrt',
	postsData: []
}
//const endState = blogPageReducer(startState, newPostTextAC('some text'))
const endState1 = blogPageReducer(startState, newPostAC())

//expect(endState.newPostTextData).toBe('some text')
expect(endState1.postsData.length).toBe(1)
})