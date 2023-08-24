import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders super', () => {
  render(<App />)
  const linkElement = screen.getByText(/Market Super/i)
  expect(linkElement).toBeInTheDocument()
})
