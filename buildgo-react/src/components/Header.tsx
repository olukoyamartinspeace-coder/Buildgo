import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHome = pathname === '/'
  const headerDark = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        headerDark
          ? 'bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
          : ''
      }`}
    >
      <div className="h-20 max-w-[1280px] mx-auto px-[16px] lg:px-[64px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img
            alt="BuildGo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMM_E4cdjs5xOEbLlAcNmaX9bWfYIpR54K15A1ULXcPegCNzySjdmOeZ6l_IRM3OOncC7rcRhIwswaE65efnCuQtPK3w3zBcvFwHSFCCrf2B95nucvFG0NbhO10lZdBe2PDrdZh7A376FEeQEfyPZYL1hpGkFCaOdAkxxQBKTQL4q3yS5AjvxIok7W6nL_F4YcxILtQ0UMcytbGAtgXaOtpLW4cfgYoTIg660V-IL3Nt-PTzw8N7VI"
          />
          <span
            className="font-['Montserrat'] text-[22px] font-semibold tracking-tight transition-colors duration-500"
            style={{ color: headerDark ? '#000' : '#fff' }}
          >
            BuildGo
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-[32px]">
          {navLinks.map(({ path, label }) => {
            const active = pathname === path
            return (
              <Link
                key={path}
                to={path}
                className="font-['Inter'] text-[14px] font-medium transition-colors"
                style={{
                  color: active
                    ? 'var(--color-secondary)'
                    : headerDark
                      ? 'var(--color-on-surface-variant)'
                      : 'rgba(255,255,255,0.7)',
                  fontWeight: active ? 700 : 500,
                }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            to="/quote"
            className="hidden md:block bg-[var(--color-secondary)] text-[var(--color-on-secondary)] px-6 py-2 rounded font-['Inter'] text-[14px] font-medium hover:bg-[var(--color-on-secondary-fixed-variant)] transition-all"
          >
            Get a Quote
          </Link>
          <div className="flex items-center gap-2 border-l lg:border-white/20 pl-6" style={{ borderColor: headerDark ? 'var(--color-outline-variant)' : 'rgba(255,255,255,0.2)' }}>
            <button
              id="menu-btn"
              className="lg:hidden flex items-center justify-center w-8 h-8"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={24} style={{ color: headerDark ? '#000' : '#fff' }} />
              ) : (
                <Menu size={24} style={{ color: headerDark ? '#000' : '#fff' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-20 left-0 right-0 bg-[var(--color-surface)] shadow-xl flex flex-col p-8 gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map(({ path, label }) => {
              const active = pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="font-['Montserrat'] text-lg font-semibold transition-colors"
                  style={{
                    color: active ? 'var(--color-secondary)' : 'var(--color-on-surface)',
                  }}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              to="/quote"
              onClick={() => setMenuOpen(false)}
              className="bg-[var(--color-secondary)] text-[var(--color-on-secondary)] text-center px-6 py-4 rounded font-['Inter'] text-[14px] font-medium mt-4"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
