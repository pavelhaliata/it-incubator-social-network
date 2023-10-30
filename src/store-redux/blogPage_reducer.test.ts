import { BlogPageInitialStateType, blogPageReducer, createPost, setPostTextValue } from './blogPage_reducer'

test('post message text should be updated', () => {
    const startState: BlogPageInitialStateType = {
        postTextValue: '',
        postsData: [],
    }

    const endState = blogPageReducer(startState, setPostTextValue('some text'))
    expect(endState.postTextValue).toBe('some text')
})

test('post message shoud be added', () => {
    const startState: BlogPageInitialStateType = {
        postTextValue: 'some text',
        postsData: [],
    }

    const endState = blogPageReducer(startState, createPost())
    expect(endState.postsData.length).toBe(1)
})
