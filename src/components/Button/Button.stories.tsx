import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import 'styles/global.scss'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    component: Button,
}

// const callback = action('on click')

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        label: 'Click Me!',
        disabled: false,
        onClick: action('on click event'),
        style: {},
    },
}
