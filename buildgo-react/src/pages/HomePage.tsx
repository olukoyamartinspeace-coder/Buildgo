import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Rocket, ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Civil Engineering',
    desc: 'Innovative urban development and infrastructure solutions designed for long-term resilience.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKrrOkjItAzPTwAI8j6vAafPHGGMl7kJx3Y5tkZiX2rW5_ZbtrKC_ZyyowyRMKbe68L1AyByUp3Z27avBF4fkWga6lRIJSHI6a7Oc-zaHH_hiTFSyzX9DWXsxkjP6wGb-qtxORI1H1dl_0zpQqpikIGNXHaEBK-u3HhHLG0qEocrGAOX3KM34PBLSLBCuojo3gspG3TQYBOX940BsTqbmAkuluftjDC67xSpF6dQlWnNxSXQtyg-ck',
  },
  {
    num: '02',
    title: 'Project Management',
    desc: 'Full-lifecycle management ensuring projects are delivered on time, within budget, and above standard.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAojr_Fch8bTokfNKI-I1iQkww8ZVfGSpoDjbES3PM1B5B_3DhlgLGbGES1HvhRCTseKP_k3TPvOvfKKU9NGhre0Z_YcVTlh3_t1wG_iDKfXGx8PlE-rK3T7bC1yJcehUHc_Xn9hGjtzQ7YP6Tmz_SDchDY4JqBu0K2u4Y9e7YedRwnAqh8Ojs-S0UHBU8W7NIM9nkzaq46m29oui2LzEFBGcm2ZO5Y98sozirEAGyaVOz_NDPIVVQW',
  },
  {
    num: '03',
    title: 'Structural Design',
    desc: 'Advanced structural analysis and blueprints for complex commercial and industrial complexes.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzbdzCpIMox8gwu9QOIgoQIRtyn4kjzgyAxfHnlo_XNP18bQZLR1NnVyh2pm6l5MfuyPonvQRud7XKBPFPFA42ZTwu_nUk2bIDfhJFY9G3NAm1nFGM_Aln739sntkkYG-HWzHA_CVdowgtf5yHQ_6cB798lO3Izj40tzPxuZEhKaDm8SqIZm7N6AcH0dqI7Oe85XctMWfB-RAsUGTHqpzh8YYW268jO9-ddM0QiAy5O6f9J61BYQXC',
  },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const video = videoRef.current
    const hero = heroRef.current
    if (!hero || !video) return

    video.playbackRate = 1
    video.volume = 0
    video.currentTime = 0.01

    const getProgress = () => {
      const secHeight = hero.offsetHeight
      const scrollable = secHeight - innerHeight
      if (scrollable <= 0) return 0
      const rect = hero.getBoundingClientRect()
      return Math.max(0, Math.min(1, -rect.top / scrollable))
    }

    let rafId: number
    const tick = () => {
      const p = getProgress()
      if (video.duration) {
        video.currentTime = p * video.duration
      }
      const heroContent = hero.querySelector('.hero-content') as HTMLElement
      if (heroContent) {
        heroContent.style.opacity = String(Math.min(p * 2, 1))
      }
      const revealEls = hero.querySelectorAll('[data-reveal]')
      revealEls.forEach((el) => {
        const idx = parseInt(el.getAttribute('data-reveal') || '0')
        const start = idx * 0.08
        const end = start + 0.15
        let ep = (p - start) / (end - start)
        if (ep >= 1) {
          el.classList.add('revealed')
        } else if (ep > 0) {
          el.classList.remove('revealed')
          ;(el as HTMLElement).style.opacity = String(ep)
          ;(el as HTMLElement).style.transform = 'translateY(' + ((1 - ep) * 30) + 'px)'
        }
      })
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const onScroll = () => {}
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll, { passive: true })

    video.addEventListener('loadedmetadata', () => { video.currentTime = 0.01 }, { once: true })

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0')
          e.target.classList.remove('opacity-0', 'translate-y-8')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('section:not(#scroll-hero) > div').forEach((s) => {
      s.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-8')
      obs.observe(s)
    })

    animateCounters()

    return () => {
      cancelAnimationFrame(rafId)
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
    }
  }, [])

  function animateCounters() {
    const counters = [
      { id: 'stat-1', end: 150, suffix: '+' },
      { id: 'stat-2', end: 12, suffix: 'M' },
      { id: 'stat-3', end: 45, suffix: '+' },
      { id: 'stat-4', end: 12, suffix: '' },
    ]
    const ric = window.requestIdleCallback || ((cb: Function) => setTimeout(cb, 2000))
    ric(() => {
      counters.forEach((counter) => {
        const el = document.getElementById(counter.id)
        if (!el) return
        let start = 0
        const duration = 2000
        const stepTime = 50
        const steps = duration / stepTime
        const increment = counter.end / steps
        const timer = setInterval(() => {
          start += increment
          if (start >= counter.end) {
            el.innerText = counter.end + counter.suffix
            clearInterval(timer)
          } else {
            el.innerText = Math.floor(start) + counter.suffix
          }
        }, stepTime)
      })
    }, { timeout: 3000 })
  }

  const slidePrev = () => {
    if (servicesRef.current) {
      const cardWidth = servicesRef.current.offsetWidth / services.length
      servicesRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  const slideNext = () => {
    if (servicesRef.current) {
      const cardWidth = servicesRef.current.offsetWidth / services.length
      servicesRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  }

  return (
    <main>
      {/* Hero */}
      <section id="scroll-hero" ref={heroRef} className="relative" style={{ height: '600vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-[#000]">
          <video
            ref={videoRef}
            id="hero-video"
            src="hero-bg.mp4"
            poster="hero-poster.jpg"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3), rgba(0,0,0,0.1))' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent, rgba(0,0,0,0.05))' }} />
          <div className="hero-content absolute inset-0 z-10 flex items-center" style={{ opacity: 0 }}>
            <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] w-full">
              <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                <div data-reveal="0" className="flex items-center justify-center lg:justify-start gap-4 mb-8 opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '0ms' }}>
                  <div className="h-[2px] w-12 shrink-0" style={{ background: 'var(--color-secondary)' }}></div>
                  <span className="font-['Inter'] text-[14px] font-medium tracking-[0.2em]" style={{ color: 'var(--color-secondary)' }}>BuildGo Engineering</span>
                </div>
                <h1 data-reveal="1" className="text-[40px] lg:text-[72px] font-['Montserrat'] font-bold leading-tight mb-8 opacity-0 translate-y-8 transition-all duration-700" style={{ color: 'var(--color-on-primary)', transitionDelay: '150ms' }}>
                  Building Tomorrow's<br className="hidden lg:inline" /><span style={{ color: 'var(--color-secondary)' }}> Landmarks</span>
                </h1>
                <p data-reveal="2" className="font-['Inter'] text-[16px] lg:text-[18px] leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 opacity-0 translate-y-8 transition-all duration-700" style={{ color: 'rgba(255,255,255,0.7)', transitionDelay: '300ms' }}>
                  We create extraordinary residential, commercial, and architectural masterpieces that redefine luxury construction.
                </p>
                <div data-reveal="3" className="flex flex-wrap gap-6 justify-center lg:justify-start opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '450ms' }}>
                  <Link to="/projects" className="btn-primary group relative overflow-hidden inline-flex items-center" style={{ background: 'var(--color-secondary)', color: 'var(--color-on-secondary)', padding: '16px 40px' }}>
                    <span className="relative z-10 font-['Inter'] text-[14px] font-medium flex items-center gap-3">
                      Explore Projects
                      <ArrowUpRight size={20} />
                    </span>
                    <span className="absolute inset-0 origin-left transition-transform duration-700 ease-out scale-x-0 group-hover:scale-x-100" style={{ background: 'var(--color-on-secondary-fixed-variant)' }}></span>
                  </Link>
                  <Link to="/quote" className="btn-secondary group relative overflow-hidden inline-flex items-center border" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'var(--color-on-primary)', padding: '16px 40px' }}>
                    <span className="relative z-10 font-['Inter'] text-[14px] font-medium flex items-center gap-3">Contact Us</span>
                    <span className="absolute inset-0 origin-left transition-transform duration-700 ease-out scale-x-0 group-hover:scale-x-100" style={{ background: 'rgba(255,255,255,0.1)' }}></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-hint">
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.4)' }}>Scroll to explore</span>
            <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}></div>
          </div>
          <div className="absolute right-[64px] bottom-20 hidden lg:block" style={{ writingMode: 'vertical-rl', color: 'rgba(255,255,255,0.1)', fontFamily: 'Montserrat', fontSize: 24, userSelect: 'none' }}>
            ESTABLISHED 1992
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest block mb-4" style={{ color: 'var(--color-secondary)' }}>Core Expertise</span>
              <h2 className="font-['Montserrat'] text-[36px] font-bold" style={{ color: 'var(--color-primary)' }}>Precision-Engineered Services for Modern Industry.</h2>
            </div>
            <div className="flex gap-4" ref={servicesRef}>
              <button onClick={slidePrev} className="p-4 transition-colors cursor-pointer" style={{ background: 'var(--color-surface-container)' }}>
                <span onMouseEnter={(e) => { (e.currentTarget.parentElement as HTMLElement).style.background = 'var(--color-secondary)'; (e.currentTarget.parentElement as HTMLElement).style.color = 'var(--color-on-secondary)' }}
                      onMouseLeave={(e) => { (e.currentTarget.parentElement as HTMLElement).style.background = 'var(--color-surface-container)'; (e.currentTarget.parentElement as HTMLElement).style.color = '' }}>
                  <ArrowLeft size={24} />
                </span>
              </button>
              <button onClick={slideNext} className="p-4 transition-colors cursor-pointer" style={{ background: 'var(--color-surface-container)' }}>
                <span onMouseEnter={(e) => { (e.currentTarget.parentElement as HTMLElement).style.background = 'var(--color-secondary)'; (e.currentTarget.parentElement as HTMLElement).style.color = 'var(--color-on-secondary)' }}
                      onMouseLeave={(e) => { (e.currentTarget.parentElement as HTMLElement).style.background = 'var(--color-surface-container)'; (e.currentTarget.parentElement as HTMLElement).style.color = '' }}>
                  <ArrowRight size={24} />
                </span>
              </button>
            </div>
          </div>
          <div className="flex gap-[32px] overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar" ref={servicesRef}>
            {services.map((s, i) => (
              <div key={i} className={`min-w-[calc(100%-32px)] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] group snap-start shrink-0 transition-all duration-500`} style={{ background: 'var(--color-surface-container-low)', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                <div className="relative h-64 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={s.img} alt={s.title} />
                  <div className="absolute top-4 right-4 flex items-center justify-center" style={{ background: 'var(--color-secondary)', color: 'var(--color-on-secondary)', width: 48, height: 48, fontFamily: 'Montserrat', fontSize: 22 }}>
                    {s.num}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-['Montserrat'] text-[22px] font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>{s.title}</h3>
                  <p className="font-['Inter'] text-[16px] leading-6 mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>{s.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 font-['Inter'] text-[14px] font-medium hover:gap-4 transition-all" style={{ color: 'var(--color-secondary)' }}>
                    Learn More <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img className="w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz8fWxKWeJdGLhxZunF6C4F7GZVb7KgD7Zo12KHrBMxE0XHTLsutX4RKDrKn-YqlN86lcMJi8rveqFlT-gBtkIc9NY_STI1-ih-SgIfiwT6_R4Q8TfkzOz8oK1JGFI1gO95iKukSHp_N8ytTB0SNGCh0WWz0fzlD9fJJXip9a2UGJToFctAsiz-yEEN8Bc5IuHBO3viTsLpdYCgHNUH7CiyVCz2uYfDmMF7d1VPQd95SEsEpyYJLBi" alt="Team" />
              <div className="absolute -bottom-10 -right-10 hidden md:block p-12" style={{ background: 'var(--color-secondary)' }}>
                <div className="font-['Montserrat'] text-[72px] font-bold leading-none">32+</div>
                <div className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest mt-2">Years of Excellence</div>
              </div>
            </div>
            <div>
              <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest block mb-6" style={{ color: 'var(--color-secondary)' }}>Why We're The Right Choice</span>
              <h2 className="font-['Montserrat'] text-[36px] font-bold mb-12">Engineered for Reliability, Designed for Growth.</h2>
              <div className="space-y-12">
                {[
                  { icon: 'verified_user', title: 'Safety First Approach', desc: 'Our Zero-Harm policy ensures the highest safety standards for our crew and the long-term integrity of our structures.' },
                  { icon: 'precision_manufacturing', title: 'Technical Precision', desc: 'Utilizing advanced BIM modeling and AI-driven structural analysis to eliminate errors before ground is broken.' },
                  { icon: 'eco', title: 'Sustainable Innovation', desc: 'Committed to LEED-certified practices and green building materials that reduce environmental footprint without compromising strength.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <span className="material-symbols-outlined text-[36px]" style={{ color: 'var(--color-secondary)' }}>{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-['Montserrat'] text-[22px] font-semibold mb-2">{item.title}</h4>
                      <p className="font-['Inter'] text-[16px] leading-6" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="py-24" style={{ background: 'var(--color-background)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="text-center mb-20">
            <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest block mb-4" style={{ color: 'var(--color-secondary)' }}>Portfolio</span>
            <h2 className="font-['Montserrat'] text-[36px] font-bold" style={{ color: 'var(--color-primary)' }}>Discover Our Landmark Projects.</h2>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg relative" style={{ background: 'var(--color-surface)' }}>
            <div
              ref={carouselRef}
              className="overflow-x-auto overflow-y-hidden cursor-grab scroll-smooth no-scrollbar"
              style={{ whiteSpace: 'nowrap' }}
            >
              <video
                src="portfolio-carousel.webm"
                muted
                loop
                playsInline
                className="select-none"
                style={{ height: 500, display: 'inline-block' }}
              />
            </div>
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 flex gap-2">
              <button className="carousel-btn w-11 h-11 rounded-full flex items-center justify-center shadow-md cursor-pointer text-xl border-none" style={{ background: 'rgba(255,255,255,0.9)' }}
                onClick={() => carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}>
                &#x2039;
              </button>
              <button className="carousel-btn w-11 h-11 rounded-full flex items-center justify-center shadow-md cursor-pointer text-xl border-none" style={{ background: 'rgba(255,255,255,0.9)' }}
                onClick={() => carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}>
                &#x203a;
              </button>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link to="/projects" className="inline-flex items-center gap-4 font-['Montserrat'] text-[22px] font-semibold hover:transition-colors group" style={{ color: 'var(--color-primary)' }}>
              View All Case Studies
              <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform" style={{ color: 'var(--color-primary)' }}>trending_flat</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: 'var(--color-surface-container)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[32px] text-center">
            {[
              { id: 'stat-1', value: '150+', label: 'Projects Completed' },
              { id: 'stat-2', value: '12M', label: 'Safe Hours Work' },
              { id: 'stat-3', value: '45+', label: 'Awards Won' },
              { id: 'stat-4', value: '12', label: 'Global Offices' },
            ].map((s) => (
              <div key={s.id} className="flex flex-col items-center">
                <span className="font-['Montserrat'] text-[36px] lg:text-[72px] font-bold mb-2" style={{ color: 'var(--color-secondary)' }} id={s.id}>{s.value}</span>
                <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest" style={{ color: 'var(--color-on-surface-variant)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--color-primary)' }}>
        <div className="absolute inset-0 opacity-20">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-ygHrs-uZp41n7Bt0TVsIkV_3lWBvnID5oP_rD_OqDaWJE7S0dX1c0I5xI6oWXQtO__ighXKCS4J7VaG_makJ389ZE1u2WLZmyEe4uClg-3K8mI4iSCs8DcUzOXBJqtUroisJ7QAbaakdsoR-wrqcSHoZJt77iGyNK1iJGBrmnwAEypFyG5Ul4TO5Zl9q34OKAfSUMlZ4d4sBL-enj_08Eig2pKXS6QbMA0qpJkeULk0NHlsajpcO" alt="Blueprint" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-[16px] lg:px-[64px] text-center">
          <h2 className="text-[40px] lg:text-[60px] font-['Montserrat'] font-bold mb-8 max-w-4xl mx-auto" style={{ color: 'var(--color-on-primary)' }}>
            Ready to Start Your Next Engineering Masterpiece?
          </h2>
          <p className="font-['Inter'] text-[18px] leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Contact our team of specialist engineers today for a detailed consultation and project estimation.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/quote"
              className="px-12 py-5 rounded-sm font-['Montserrat'] text-[22px] font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-3"
              style={{ background: 'var(--color-secondary)', color: 'var(--color-on-secondary)' }}
            >
              Start Consultation
              <Rocket size={24} />
            </Link>
            <Link
              to="/quote"
              className="px-12 py-5 rounded-sm font-['Montserrat'] text-[22px] font-semibold hover:bg-white/10 transition-colors flex items-center justify-center border"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--color-secondary)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
