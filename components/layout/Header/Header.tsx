import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const navLinks = [
    { name: 'Dashboard', href: '/', icon: 'dashboard' },
    { name: 'Candidates', href: '/Candidates', icon: 'candidates' },
    { name: 'Jobs', href: '/Jobs', icon: 'jobs' },
    { name: 'Interviews', href: '/Interviews', icon: 'interviews' },
    { name: 'Settings', href: '/Settings', icon: 'settings' },
  ]
  return (
    <header>
      <div>
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
        <h1>Talent Flow</h1>
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <span>{link.icon}</span>
                <p>{link.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
