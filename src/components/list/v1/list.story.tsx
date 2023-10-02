import type { Meta, StoryObj } from '@storybook/react'
import { ListComponent } from './list.component'

const meta: Meta<typeof ListComponent> = {
  title: 'Components/List',
  component: ListComponent,
  args: {
    list: ['foo', 'bar', 'baz'],
  }
}

export default meta

export const List: StoryObj<typeof ListComponent> = {}