import { render, RenderResult, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ListComponent } from './list.component'

describe('The ExampleComponent', () => {

  let comp: RenderResult
  let el: HTMLUListElement

  const mockProps = {
    list: ['foo', 'bar', 'baz']
  }

  beforeEach(() => {
    comp = render(<ListComponent list={mockProps.list} />)
    el = screen.getByRole('list') as HTMLUListElement
  })

  it('should be', () => {
    expect(comp).toBeTruthy()
    expect(el).toBeTruthy()
  })

  describe('ListComponent', () => {

    it('should render a list element', () => {})

    it('should include a control to switch between list types', () => {})

    it('should be able support icons as bullets', () => { })

    it('should support hyperlinks in the text', () => { })

    it('should support nested lists', () => { })

    it('should support different text styling for list content', () => { })

    it('should support different colors for bullet and text', () => { })

    it('should have an unstyled option', () => { })

  })
})