import type { Meta, StoryObj } from '@storybook/react'
import { Post } from './Post'
import './post.module.scss'

const meta: Meta<typeof Post> = {
    title: 'example components/Post',
    component: Post,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Post>

export const UserPost: Story = {
    args: {
        post: 'some example text',
        time: new Date().toLocaleTimeString().slice(0, -3),
    },
}
