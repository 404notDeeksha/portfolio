import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the portfolio sections', () => {
    render(<App />)
    
    // Check if main sections are present
    expect(document.querySelector('.App')).toBeInTheDocument()
    
    // Check if portfolio title/logo is present
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    
    // Check if hero section content is present
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<App />)
    
    // Check navigation items
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<App />)
    
    // Check if contact form elements are present
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })
})