//import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MyComponent } from './MyComponent'
import React from 'react'

test('「Hello Test」が描画されている', () => {
  render(<MyComponent />)
  screen.debug()
  expect(screen.getByText('Hello Test')).toBeInTheDocument()
})
