import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    title: 'example components/Input',
    component: Input,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const InputValue: Story = {
    args: {
        placeholder: 'input text...',
    },
}
