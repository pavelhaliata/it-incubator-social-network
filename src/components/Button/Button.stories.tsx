import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import 'styles/global.scss'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        label: 'Click Me!',
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        onClick: action('on click event'),
        disabled: false,
    },
}
Primary.argTypes = {
    variant: {
        control: { type: 'radio' },
        options: ['contained', 'outlined'],
    },
}
