import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-surface-container-highest)] pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] grid grid-cols-1 md:grid-cols-4 gap-[32px] mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img
              alt="BuildGo"
              className="h-6 w-auto grayscale brightness-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMM_E4cdjs5xOEbLlAcNmaX9bWfYIpR54K15A1ULXcPegCNzySjdmOeZ6l_IRM3OOncC7rcRhIwswaE65efnCuQtPK3w3zBcvFwHSFCCrf2B95nucvFG0NbhO10lZdBe2PDrdZh7A376FEeQEfyPZYL1hpGkFCaOdAkxxQBKTQL4q3yS5AjvxIok7W6nL_F4YcxILtQ0UMcytbGAtgXaOtpLW4cfgYoTIg660V-IL3Nt-PTzw8N7VI"
            />
            <span className="font-['Montserrat'] text-[22px] font-semibold">BuildGo</span>
          </div>
          <p className="font-['Inter'] text-[16px] leading-6 text-[var(--color-on-surface-variant)]">
            Pioneering sustainable infrastructure and professional engineering excellence since 1992.
          </p>
        </div>
        <div>
          <h4 className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-6 text-[var(--color-primary)]">Contact</h4>
          <ul className="space-y-4 font-['Inter'] text-[16px] leading-6 text-[var(--color-on-surface-variant)]">
            <li>1284 Industrial Way</li>
            <li>San Francisco, CA 94103</li>
            <li>info@buildgo.engineering</li>
          </ul>
        </div>
        <div>
          <h4 className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-6 text-[var(--color-primary)]">Services</h4>
          <ul className="space-y-4 font-['Inter'] text-[16px] leading-6 text-[var(--color-on-surface-variant)]">
            <li><Link to="/services" className="hover:text-[var(--color-secondary)]">Civil Engineering</Link></li>
            <li><Link to="/services" className="hover:text-[var(--color-secondary)]">Project Management</Link></li>
            <li><Link to="/services" className="hover:text-[var(--color-secondary)]">Architectural Design</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-6 text-[var(--color-primary)]">Follow Us</h4>
          <div className="flex gap-4">
            <span className="material-symbols-outlined p-2 bg-[var(--color-surface-container-low)] rounded-full cursor-pointer hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all">share</span>
            <span className="material-symbols-outlined p-2 bg-[var(--color-surface-container-low)] rounded-full cursor-pointer hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all">linkedin</span>
            <span className="material-symbols-outlined p-2 bg-[var(--color-surface-container-low)] rounded-full cursor-pointer hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all">language</span>
            <span className="material-symbols-outlined p-2 bg-[var(--color-surface-container-low)] rounded-full cursor-pointer hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-all">videocam</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] pt-8 border-t border-[var(--color-outline-variant)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-['Inter'] text-[14px] text-[var(--color-on-surface-variant)]">© 2026 BuildGo Engineering. All rights reserved.</p>
        <div className="flex gap-6 font-['Inter'] text-[14px] text-[var(--color-on-surface-variant)]">
          <a href="#" className="hover:text-[var(--color-secondary)]">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--color-secondary)]">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
