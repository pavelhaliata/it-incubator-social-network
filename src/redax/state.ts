
let rerenderEntireTree = (value: RootStateType) => {
}


export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}
export type PersonType = {
    backgroudImg: string
    avatar: string
    name: string
    country: string
}
export type PostsType = {
    post: string
}
export type RootStateType = {
    messagesData: Array<MessageType>
    personsData: Array<PersonType>
    postsData: Array<PostsType>
    newPostTextData: string
}


const state: RootStateType = {
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
            backgroudImg: 'https://html.crumina.net/html-olympus/img/friend1.webp',
            avatar: 'https://html.crumina.net/html-olympus/img/avatar1.webp',
            name: 'Nicholas Grissom',
            country: 'San Francisco, CA',
        },
        {
            backgroudImg: 'https://html.crumina.net/html-olympus/img/friend2.webp',
            avatar: 'https://html.crumina.net/html-olympus/img/avatar2.webp',
            name: 'Marina Valentine',
            country: 'Long Island, NY',
        },
        {
            backgroudImg: 'https://html.crumina.net/html-olympus/img/friend3.webp',
            avatar: 'https://html.crumina.net/html-olympus/img/avatar3.webp',
            name: 'Nicholas Grissom',
            country: 'Los Angeles, CA',
        },
        {
            backgroudImg: 'https://html.crumina.net/html-olympus/img/friend4.webp',
            avatar: 'https://html.crumina.net/html-olympus/img/avatar4.webp',
            name: 'Chris Greyson',
            country: 'Austin, TX',
        },
        {
            backgroudImg: 'https://html.crumina.net/html-olympus/img/friend4.webp',
            avatar: 'https://html.crumina.net/html-olympus/img/avatar4.webp',
            name: 'Chris Greyson',
            country: 'Austin, TX',
        },

    ],
    postsData: [
    ],
    newPostTextData: '',

    
}
export  function addNewPost () {

    let postCreate: PostsType = {
        post: state.newPostTextData
    }
    if (state.newPostTextData) {
        state.postsData.push(postCreate)
        state.newPostTextData = ''
        rerenderEntireTree(state)

    }
}

    export function updateNewPostText(newtext: string) {
    // console.log(newtext)
    state.newPostTextData = newtext
    rerenderEntireTree(state)
}

export let subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

export default state