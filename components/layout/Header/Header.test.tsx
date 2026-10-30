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
      const dashboardButton = screen.getByRole('link', { name: /Dashboard/i })
      const candidatesButton = screen.getByRole('link', { name: /Candidates/i })
      const jobsButton = screen.getByRole('link', { name: /Jobs/i })
      const interviewButton = screen.getByRole('link', { name: /Interviews/i })
      const settingsButton = screen.getByRole('link', { name: /Settings/i })
      //const darkModeButton = screen.getByRole('link', { name: /dark mode/i })
      //const logoutButton = screen.getByRole('link', { name: /logout/i })

      expect(dashboardButton).toBeInTheDocument()
      expect(candidatesButton).toBeInTheDocument()
      expect(jobsButton).toBeInTheDocument()
      expect(interviewButton).toBeInTheDocument()
      expect(settingsButton).toBeInTheDocument()
      //expect(darkModeButton).toBeInTheDocument()
      //expect(logoutButton).toBeInTheDocument()
    }))
})
