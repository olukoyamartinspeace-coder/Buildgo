import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Marcus Thorne', role: 'Founder & CEO', desc: '35+ years of leadership in large-scale infrastructure development. Visionary behind BuildGo\'s global expansion.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8r4Hft91jg8ZaUbk1ppNdT7OHycUHsI8vjACOjsIa_N8gUvEgxcX0ccEbhEXRR_9Anu56iO2nZue7c-HWM38xuclQLASxgH_MKgWR2PyLJNxINYJW3_56Uqy5DAz322YLhf62X5KJh3aJvehHkqimj-ULC2yvv19vV_hkbOTHeceQUOl3frc4UBYPvlTY2f16Ic8dNPkqeQgVXT7bsW0vaJsr08_WkWlWxub6zgdboYI7amFqi4IS', offset: false },
  { name: 'Elena Vasquez', role: 'Chief Engineering Officer', desc: 'Leading technical innovation and quality assurance across all global projects. Expert in seismic and structural engineering.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAojr_Fch8bTokfNKI-I1iQkww8ZVfGSpoDjbES3PM1B5B_3DhlgLGbGES1HvhRCTseKP_k3TPvOvfKKU9NGhre0Z_YcVTlh3_t1wG_iDKfXGx8PlE-rK3T7bC1yJcehUHc_Xn9hGjtzQ7YP6Tmz_SDchDY4JqBu0K2u4Y9e7YedRwnAqh8Ojs-S0UHBU8W7NIM9nkzaq46m29oui2LzEFBGcm2ZO5Y98sozirEAGyaVOz_NDPIVVQW', offset: true },
  { name: 'David Chen', role: 'Director of Operations', desc: 'Overseeing project execution across 28 active sites. Known for delivering complex projects ahead of schedule and under budget.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4vl_uaUJPTKHGsg4UbaMl-cLQy3sTIMR4os7lG5v5iPPnFXA-dNDUR2egPIHJ1ynwXNtKGEDPzFmJ8kk6ocavgr3oy4oHaPaDqaJMky_eJXGJbadWZb3XQgrxwa7xZx8Dj6PU0QTTIKbu185JYoHF-NIm1voHgYRYJqEiAASplDhn8wzvIdqS3q1L60W2s--y8N5SY70EU-DLMmimPnnOhbW00Pd0dDe0aGMFSM0P_43TuZ-iFEiL', offset: false },
  { name: 'Sarah Mitchell', role: 'Sustainability Director', desc: 'Championing LEED-certified practices and green building innovation. Driving BuildGo\'s net-zero carbon commitment by 2035.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzbdzCpIMox8gwu9QOIgoQIRtyn4kjzgyAxfHnlo_XNP18bQZLR1NnVyh2pm6l5MfuyPonvQRud7XKBPFPFA42ZTwu_nUk2bIDfhJFY9G3NAm1nFGM_Aln739sntkkYG-HWzHA_CVdowgtf5yHQ_6cB798lO3Izj40tzPxuZEhKaDm8SqIZm7N6AcH0dqI7Oe85XctMWfB-RAsUGTHqpzh8YYW268jO9-ddM0QiAy5O6f9J61BYQXC', offset: true },
]

const timeline = [
  { year: '1992', title: 'Foundation & First Project', desc: 'BuildGo was founded in San Francisco. Secured first major contract — a 12-story commercial tower in downtown Oakland. Team of 3 engineers.' },
  { year: '2005', title: 'National Expansion', desc: 'Opened regional offices in New York, Chicago, and Houston. Expanded into commercial high-rises and industrial infrastructure. Team grew to 120+.' },
  { year: '2014', title: 'Global Reach', desc: 'International expansion into Europe and Middle East. Completed the landmark Meridian Bridge project. Awarded ISO 9001:2015 certification.' },
  { year: '2024', title: 'Industry Leadership', desc: '450+ projects completed across 12 countries. 280+ expert engineers. Recognized as a top 10 construction firm with LEED Platinum and 42 industry awards.' },
]

export default function AboutPage() {
  useEffect(() => {
    const countElements = document.querySelectorAll('.count-up')
    const observerOptions = { threshold: 0.5 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const target = parseInt(el.getAttribute('data-target') || '0')
          let current = 0
          const increment = Math.ceil(target / 50)
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              el.innerText = String(target)
              clearInterval(timer)
            } else {
              el.innerText = String(current)
            }
          }, 30)
          observer.unobserve(el)
        }
      })
    }, observerOptions)
    countElements.forEach(el => observer.observe(el))

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
          observer2.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    document.querySelectorAll('section > div').forEach(s => {
      s.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-8')
      observer2.observe(s)
    })
  }, [])

  return (
    <main>
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24" style={{ background: 'var(--color-surface)' }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block -skew-x-12 translate-x-1/2 opacity-50" style={{ background: 'var(--color-surface-container-high)' }} />
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] relative">
          <div className="flex flex-col lg:flex-row items-end gap-[32px]">
            <div className="lg:w-2/3">
              <span className="inline-block py-1 px-3 font-['Inter'] text-[14px] font-medium uppercase tracking-widest mb-6" style={{ background: 'var(--color-secondary-fixed)', color: 'var(--color-on-secondary-fixed-variant)' }}>Since 1992</span>
              <h1 className="font-['Montserrat'] text-[40px] lg:text-[72px] font-bold mb-8 max-w-4xl leading-tight" style={{ color: 'var(--color-primary)' }}>
                Engineering Trust.<br />
                <span className="italic" style={{ color: 'var(--color-secondary)' }}>Built to Last.</span>
              </h1>
            </div>
            <div className="lg:w-1/3 pb-2">
              <p className="font-['Inter'] text-[18px] leading-relaxed border-l-4 pl-6" style={{ color: 'var(--color-on-surface-variant)', borderColor: 'var(--color-secondary)' }}>
                Founded on the principles of precision, safety, and innovation, BuildGo has grown from a small civil engineering firm into a global construction authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32" style={{ background: 'var(--color-surface-container-lowest)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <img className="w-full aspect-[4/5] object-cover shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz8fWxKWeJdGLhxZunF6C4F7GZVb7KgD7Zo12KHrBMxE0XHTLsutX4RKDrKn-YqlN86lcMJi8rveqFlT-gBtkIc9NY_STI1-ih-SgIfiwT6_R4Q8TfkzOz8oK1JGFI1gO95iKukSHp_N8ytTB0SNGCh0WWz0fzlD9fJJXip9a2UGJToFctAsiz-yEEN8Bc5IuHBO3viTsLpdYCgHNUH7CiyVCz2uYfDmMF7d1VPQd95SEsEpyYJLBi" alt="Team" />
              <div className="absolute -bottom-6 -right-6 hidden md:block p-8" style={{ background: 'var(--color-secondary)' }}>
                <span className="material-symbols-outlined text-5xl" style={{ color: 'var(--color-on-secondary)' }}>groups</span>
              </div>
            </div>
            <div>
              <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest block mb-4" style={{ color: 'var(--color-secondary)' }}>Our Story</span>
              <h2 className="font-['Montserrat'] text-[36px] font-bold mb-8" style={{ color: 'var(--color-primary)' }}>From Blueprints to Global Landmarks.</h2>
              <p className="font-['Inter'] text-[18px] leading-relaxed mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>What began in 1992 as a three-person civil engineering consultancy in San Francisco has evolved into a multinational construction and engineering powerhouse. Our founder, Marcus Thorne, envisioned a firm where technical precision meets uncompromising integrity.</p>
              <p className="font-['Inter'] text-[16px] leading-6 mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>Over three decades, BuildGo has delivered over 450 projects across 12 countries, earning a reputation for tackling the most complex engineering challenges — from seismic-resistant skyscrapers to sustainable urban developments. Every project carries our core belief: <strong style={{ color: 'var(--color-primary)' }}>a structure is only as strong as the trust it's built on.</strong></p>
              <div className="flex gap-8 pt-6 border-t" style={{ borderColor: 'var(--color-outline-variant)' }}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)' }}>verified</span>
                  <span className="font-['Inter'] text-[14px] font-medium" style={{ color: 'var(--color-primary)' }}>ISO 9001 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)' }}>award_star</span>
                  <span className="font-['Inter'] text-[14px] font-medium" style={{ color: 'var(--color-primary)' }}>42 Industry Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="text-center mb-16">
            <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest block mb-4" style={{ color: 'var(--color-secondary)' }}>Our Foundation</span>
            <h2 className="font-['Montserrat'] text-[36px] font-bold" style={{ color: 'var(--color-primary)' }}>Built on Principle, Driven by Purpose.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {[
              { icon: 'explore', title: 'Our Mission', desc: 'To engineer infrastructure that elevates communities — delivering projects that are safe, sustainable, and structurally sound. We measure success not just in steel and concrete, but in the lives we impact.' },
              { icon: 'visibility', title: 'Our Vision', desc: 'A world where every structure tells a story of precision, innovation, and environmental stewardship. We strive to be the global benchmark for engineering excellence and ethical construction.' },
              { icon: 'diamond', title: 'Our Values', desc: 'Integrity, Safety, Innovation, and Collaboration. These four pillars guide every decision we make — from the boardroom to the jobsite — ensuring unwavering quality and accountability.' },
            ].map((item, i) => (
              <div key={i} className={`relative group p-10 lg:p-12 transition-all duration-500 ${i === 1 ? 'lg:-mt-8' : ''}`} style={{ background: 'var(--color-surface-container-low)' }}>
                <div className="w-16 h-16 flex items-center justify-center mb-8" style={{ background: 'rgba(166,59,0,0.1)' }}>
                  <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--color-secondary)' }}>{item.icon}</span>
                </div>
                <h3 className="font-['Montserrat'] text-[22px] font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>{item.title}</h3>
                <p className="font-['Inter'] text-[16px] leading-6" style={{ color: 'var(--color-on-surface-variant)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32" style={{ background: 'var(--color-surface-container-lowest)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest block mb-4" style={{ color: 'var(--color-secondary)' }}>Leadership</span>
              <h2 className="font-['Montserrat'] text-[36px] font-bold" style={{ color: 'var(--color-primary)' }}>The People Behind the Structures.</h2>
            </div>
            <p className="font-['Inter'] text-[18px] leading-relaxed max-w-md" style={{ color: 'var(--color-on-surface-variant)' }}>Our executive team brings together over a century of combined experience in civil engineering, architecture, and project management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            {team.map((m, i) => (
              <div key={i} className={`group ${m.offset ? 'lg:mt-12' : ''}`}>
                <div className="aspect-[4/5] overflow-hidden mb-6" style={{ background: 'var(--color-surface-container)' }}>
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={m.img} alt={m.name} />
                </div>
                <h4 className="font-['Montserrat'] text-[22px] font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>{m.name}</h4>
                <p className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-secondary)' }}>{m.role}</p>
                <p className="font-['Inter'] text-[16px] leading-6" style={{ color: 'var(--color-on-surface-variant)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="text-center mb-16">
            <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest block mb-4" style={{ color: 'var(--color-secondary)' }}>Our Journey</span>
            <h2 className="font-['Montserrat'] text-[36px] font-bold" style={{ color: 'var(--color-on-primary)' }}>Decades of Delivering Excellence.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.2)' }} />
            <div className="space-y-16 lg:space-y-24">
              {timeline.map((t, i) => (
                <div key={i} className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                  <div className="hidden lg:block lg:w-1/2 text-right">
                    <h3 className="font-['Montserrat'] text-[28px] font-bold" style={{ color: 'var(--color-secondary)' }}>{t.year}</h3>
                  </div>
                  <div className="absolute left-6 lg:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 mt-2 border-4 z-10" style={{ background: 'var(--color-secondary)', borderColor: 'var(--color-primary)' }} />
                  <div className="lg:w-1/2 pl-16 lg:pl-16">
                    <h3 className="font-['Montserrat'] text-[22px] font-semibold lg:hidden mb-2" style={{ color: 'var(--color-secondary)' }}>{t.year}</h3>
                    <h4 className="font-['Montserrat'] text-[22px] font-semibold mb-3" style={{ color: 'var(--color-on-primary)' }}>{t.title}</h4>
                    <p className="font-['Inter'] text-[16px] leading-6" style={{ color: 'rgba(255,255,255,0.7)' }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: 'var(--color-surface-container-high)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[32px]">
            {[
              { target: '450', label: 'Projects Completed' },
              { target: '32', label: 'Years of Excellence' },
              { target: '42', label: 'Industry Awards' },
              { target: '280', label: 'Team Experts' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col border-l-2 pl-6" style={{ borderColor: 'var(--color-secondary)' }}>
                <span className="font-['Montserrat'] text-[36px] lg:text-[72px] font-bold leading-none count-up" data-target={s.target} style={{ color: 'var(--color-primary)' }}>0</span>
                <p className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest mt-4" style={{ color: 'var(--color-on-surface-variant)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-40" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="relative overflow-hidden group" style={{ background: 'var(--color-surface-container-high)', padding: '32px 48px' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" style={{ background: 'rgba(166,59,0,0.05)' }} />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="font-['Montserrat'] text-[36px] font-bold mb-6" style={{ color: 'var(--color-primary)' }}>Ready to build something extraordinary?</h2>
                <p className="font-['Inter'] text-[18px] leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>Partner with a team that treats every project as a legacy. Let's discuss your vision over a consultation with our senior engineers.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/quote" className="px-10 py-5 font-['Inter'] text-[14px] font-medium uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3" style={{ background: 'var(--color-secondary)', color: 'var(--color-on-secondary)' }}>
                  Start a Conversation <span className="material-symbols-outlined">forum</span>
                </Link>
                <Link to="/projects" className="px-10 py-5 font-['Inter'] text-[14px] font-medium uppercase tracking-widest border-2 transition-all" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
