import type { Meta, StoryObj } from '@storybook/react'
import 'styles/global.scss'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    title: 'example components/input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Input>

export const InputValue: Story = {
    args: {
        placeholder: 'please, input text',
    },
}
InputValue.argTypes = {}
