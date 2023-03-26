// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const ADD_NEW_POST = 'ADD-NEW-POST'

enum POST {
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    ADD_NEW_POST = 'ADD-NEW-POST'
}


export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export type PersonType = {
    backgroundImg: string
    avatar: string
    name: string
    country: string
}

export type PostsType = {
    post: string
}

type StateDataType = {
    messagesData: Array<MessageType>
    personsData: Array<PersonType>
    postsData: Array<PostsType>
    newPostTextData: string
}

export type RootStoreType = {
    _state: StateDataType
    _rerenderEntireTree: (value: StateDataType) => void
    subscribe: (observer: any) => void
    getState: () => void
    dispatch: (action: any) => void
}

const store: RootStoreType = {
    _state: {
        messagesData: [
            {
                avatar: 'https://html.crumina.net/html-olympus/img/author-main1.webp',
                name: 'James Spiegel',
                message: 'Hi ! What are you doing? Are you sliping now? :) ',
                time: '22:00',
            },
            {
                avatar: 'https://html.crumina.net/html-olympus/img/avatar1.webp',
                name: 'Nicholas Grissom',
                message: 'Hi! Bro)',
                time: '22:00',
            }
        ],

        personsData: [
            {
                backgroundImg: 'https://html.crumina.net/html-olympus/img/friend1.webp',
                avatar: 'https://html.crumina.net/html-olympus/img/avatar1.webp',
                name: 'Nicholas Grissom',
                country: 'San Francisco, CA',
            },
            {
                backgroundImg: 'https://html.crumina.net/html-olympus/img/friend2.webp',
                avatar: 'https://html.crumina.net/html-olympus/img/avatar2.webp',
                name: 'Marina Valentine',
                country: 'Long Island, NY',
            },
            {
                backgroundImg: 'https://html.crumina.net/html-olympus/img/friend3.webp',
                avatar: 'https://html.crumina.net/html-olympus/img/avatar3.webp',
                name: 'Nicholas Grissom',
                country: 'Los Angeles, CA',
            },
            {
                backgroundImg: 'https://html.crumina.net/html-olympus/img/friend4.webp',
                avatar: 'https://html.crumina.net/html-olympus/img/avatar4.webp',
                name: 'Chris Greyson',
                country: 'Austin, TX',
            },
            {
                backgroundImg: 'https://html.crumina.net/html-olympus/img/friend4.webp',
                avatar: 'https://html.crumina.net/html-olympus/img/avatar4.webp',
                name: 'Chris Greyson',
                country: 'Austin, TX',
            },
        ],
        postsData: [],
        newPostTextData: ''
    },

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
    },

    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        if (action.type === POST.UPDATE_NEW_POST_TEXT) {
            this._state.newPostTextData = action.newtext
            this._rerenderEntireTree(this._state)

        } else if (action.type === POST.ADD_NEW_POST) {
            let postCreate: PostsType = {
                post: this._state.newPostTextData
            }
            if (this._state.newPostTextData.trim() !== '') {
                this._state.postsData.push(postCreate)
                this._state.newPostTextData = ''
                this._rerenderEntireTree(this._state)
            }
        }

    }
}

export const updateNewPostText = (newtext: string) => {
    store.dispatch({type: POST.UPDATE_NEW_POST_TEXT, newtext: newtext})
}
export const createNewPost = () => {
    store.dispatch({type: POST.ADD_NEW_POST})
}


export default store