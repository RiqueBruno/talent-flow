import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  ;(it('Has logo', () => {
    render(<Header />)
    const logo = screen.getByRole('img', { name: /logo/i })
    expect(logo).toBeInTheDocument()
  }),
    it('Has navigation', () => {
      render(<Header />)
      const navigation = screen.getByRole('navigation')
      expect(navigation).toBeInTheDocument()
    }),
    it('Has Link Dashboard, candidates, jobs, interview, settings, dark mode and logout', () => {
      render(<Header />)
      const dashboardButton = screen.getByRole('Link', { name: /dashboard/i })
      const candidatesButton = screen.getByRole('Link', { name: /candidates/i })
      const jobsButton = screen.getByRole('Link', { name: /jobs/i })
      const interviewButton = screen.getByRole('Link', { name: /interview/i })
      const settingsButton = screen.getByRole('Link', { name: /settings/i })
      const darkModeButton = screen.getByRole('Link', { name: /dark mode/i })
      const logoutButton = screen.getByRole('Link', { name: /logout/i })

      expect(dashboardButton).toBeInTheDocument()
      expect(candidatesButton).toBeInTheDocument()
      expect(jobsButton).toBeInTheDocument()
      expect(interviewButton).toBeInTheDocument()
      expect(settingsButton).toBeInTheDocument()
      expect(darkModeButton).toBeInTheDocument()
      expect(logoutButton).toBeInTheDocument()
    }))
})
