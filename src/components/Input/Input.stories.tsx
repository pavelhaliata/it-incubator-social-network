import type { Meta, StoryObj } from '@storybook/react'
import 'styles/global.scss'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    component: Input,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Input>

export const InputValue: Story = {
    argTypes: {
        placeholder: {},
    },
}
