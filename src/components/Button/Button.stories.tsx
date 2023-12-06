import type { Meta, StoryObj } from '@storybook/react'
import 'styles/global.scss'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        disabled: false,
        children: 'Click Me!',
    },
}
