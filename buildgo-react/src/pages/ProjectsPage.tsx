import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  { category: 'industrial', num: '01', title: 'Apex Logistics Hub', location: 'Chicago, IL • 2023', tags: ['Industrial', 'New Build'], specs: [['Timeline', '18 Months'], ['Efficiency', 'LEED Gold']], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1OlHkKv_xm8iWG2VYs4Md3su-FLEM5NU0Hts1fZ17_AV28uiWyFh7FGqxIHXHjYXq_G6bbYCgFpkx7CyavUtg0Y7WMTzVy4KSV6INDcKHPM1EUlntPD0qAtBMIF7dsNiBRTWhMIHP0C6an659juVDwGd7KBlqgkN_ZivO225-7H3vNn7oxpU3sKnXU3R6pWlcj7OUnvO29mVC-HayuoRB6Ig2M7Nv9mpSs00LMIu7cGKSCUFvJIAq', offset: false },
  { category: 'commercial', num: '02', title: 'The Obsidian Plaza', location: 'Seattle, WA • 2022', tags: ['Commercial'], specs: [['Structure', '45 Stories'], ['Metric', 'Zero-Carbon']], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcIMMw8irNzg5pVwGkIrFie0V-dSAoTuhYKwvK46Kjo_vTCde6Ky678yVrwBp89DUYLcFDNrMqsf4X_d--k92LtJFJevWKvdEGm0cvRLM4g8K3ypFJ6v6f2mnZ2kPKd1nx_X_od4-nVo0mKGGJKwXk6Mny4-asia-svRwD5NuVJsBrA9g0liSEpXZPbwwuEZk3yZSpFO8a8iaUrKOVrMyzJo1s75juTNAbCXRnHzl5Lb7zr-KKms5w', offset: true },
  { category: 'residential', num: '03', title: 'Skyline Terraces', location: 'Malibu, CA • 2024', tags: ['Residential'], specs: [['Area', '12,500 Sq Ft'], ['Status', 'Completed']], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqul-whNM2ehJu-JZraOK7pRPYdqGmgHQHMdHe5jfja_6V1QK1ruFrrdqevAH75AsMlVlYi5hJNCuf2O-YLvyowuKX8jZC9qpmaLB6Q_3OHg-AZ4Lf25qguVh1gA2lbnbv0Wog_FTtkCMmtGMm17XHLG92loAKdDGRKoRbscYgwtcOAC3ciKBe_sUobR6wghhsfJHUKsCLpr6QB4MfpNFylppnbdpjjzAlNquEH_FzPoAv7WI3sSZH', offset: false },
  { category: 'industrial', num: '04', title: 'Vector Nano-Plant', location: 'Austin, TX • 2021', tags: ['Industrial'], specs: [['Spec', 'H-5 Safety'], ['Innovation', 'Smart-Grid']], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe5oxeaCoAbsHGD19RejUZmwdX9Tzcc6MIkY5MDMWd42xxbeWCpKoQfnheq04MQZxn-BdT2_cXYgin8Jp-ESOLuAQcObFlGOChKk-MPSUPmnTA7yUIdYTUCo2xLlkle2dDLNxYn4itIQc9iWOoMjzpK7lGik2YC6HFOC6gzWMIk6gXCzQrcc7dvemdNMiY5gfcFEngoxUEB-tFgGIf38Pw33FFcA-QcPukOSPH_4leKSMd0xBMqtpR', offset: false },
  { category: 'commercial', num: '05', title: 'The Onyx Hotel', location: 'New York, NY • 2023', tags: ['Commercial'], specs: [['Design', 'Heritage Mod'], ['Units', '212 Rooms']], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu78jmvz_62XtYls7GHjmrcdt7EtFPnQd3rdSdGWxQgxrAzSK7dl913RkwJWfl-4Oq5Qst88WKA8hwGAa3w-V6n0uubwwLI-cwQFSDcMJSBlH9ZviIW6EgdQly6VwrroK0U_EsIpsVW1HhVzBhdqmlQPw0LzgXtniq4iJhw_dnokEsK3g2SSds0gMXVecvNf0S0OfjUF2_Jgc0HZx1-0fExmt-eLZOKdHsZ_D2bgQ6-muB5f-Z91Om', offset: false },
  { category: 'residential', num: '06', title: 'Grove Apartments', location: 'Portland, OR • 2022', tags: ['Residential'], specs: [['Greenery', '3,000 Plants'], ['Materials', 'Mass Timber']], img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXhqcSJ1WrmcM5BcJix1966iQknWKo3SfdOlnfa05YE-ikQVq1fe6zEvqXz5tvz7zVJBfl2jC42DWEn9GCwjnVQ3OkdxxSDwoXFTPd_gqLzlBx3eCR13eRrkM9vdEx7TmzhReE1LoHZrzQnTQj2BPJYsXrPQ2EpfOlf2h-ZxrHAKYfjYWVXMRjOfcuom2872ocnTOWd5sB-kwKH0RLoWidr3SsdzXY8mwJ5QXoT7aLkWQRJ6S2pFyI', offset: true },
]

const filters = [
  { key: 'all', label: 'ALL PROJECTS' },
  { key: 'residential', label: 'RESIDENTIAL' },
  { key: 'commercial', label: 'COMMERCIAL' },
  { key: 'industrial', label: 'INDUSTRIAL' },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const countElements = document.querySelectorAll('.count-up')
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
    }, { threshold: 0.5 })
    countElements.forEach(el => observer.observe(el))
  }, [])

  const visible = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <main>
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'var(--color-primary)' }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" />
              </pattern>
            </defs>
            <rect fill="url(#grid)" width="100" height="100" />
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] relative z-10">
          <div className="flex flex-col lg:flex-row items-end gap-[32px]">
            <div className="lg:w-2/3">
              <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-[0.3em] mb-4 block" style={{ color: 'var(--color-secondary)' }}>Archive 1992—2024</span>
              <h1 className="font-['Montserrat'] text-[40px] lg:text-[72px] font-bold leading-none" style={{ color: 'var(--color-on-primary)' }}>
                ENGINEERING <br />
                <span className="italic" style={{ color: 'var(--color-secondary)' }}>LANDMARKS</span>
              </h1>
            </div>
            <div className="lg:w-1/3 pb-4">
              <p className="font-['Inter'] text-[18px] leading-relaxed max-w-sm" style={{ color: 'var(--color-on-primary-container)' }}>
                A curated showcase of infrastructure excellence, where technical precision meets architectural vision.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 border rounded-full animate-pulse" style={{ borderColor: 'rgba(166,59,0,0.3)' }} />
      </section>

      <section className="sticky top-20 z-40 border-b" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-outline-variant)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] h-20 flex items-center justify-between overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-8 min-w-max">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`font-['Inter'] text-[14px] font-medium flex items-center gap-2 group cursor-pointer ${activeFilter === f.key ? '' : ''}`}
                style={{ color: activeFilter === f.key ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}
              >
                <span className="w-2 h-2 rounded-full transition-all"
                  style={{
                    background: activeFilter === f.key ? 'var(--color-secondary)' : 'var(--color-outline-variant)',
                    transform: activeFilter === f.key ? 'scale(1.25)' : 'scale(1)',
                  }}
                />
                {f.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4" style={{ color: 'var(--color-on-surface-variant)' }}>
            <span className="font-['Inter'] text-[14px] font-medium">Showing {visible.length} Projects</span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {visible.map((p, i) => (
              <div key={p.num} className={`project-card flex flex-col group cursor-pointer ${p.offset ? 'lg:-mt-12' : ''} ${i === 3 ? 'lg:mt-8' : ''}`}>
                <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={p.img} alt={p.title} />
                  <div className="absolute inset-0 transition-all duration-500" style={{ background: 'rgba(166,59,0,0)' }} />
                  <div className="absolute bottom-6 left-6 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-3 py-1 tracking-widest uppercase" style={{ background: t === 'New Build' ? 'var(--color-secondary)' : 'var(--color-primary)', color: t === 'New Build' ? 'var(--color-on-secondary)' : 'var(--color-on-primary)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-['Montserrat'] text-[22px] font-semibold" style={{ color: 'var(--color-primary)' }}>{p.title}</h3>
                    <span className="font-['Inter'] text-[16px]" style={{ color: 'var(--color-secondary)' }}>{p.num}</span>
                  </div>
                  <p className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>{p.location}</p>
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t" style={{ borderColor: 'var(--color-outline-variant)' }}>
                    {p.specs.map(([label, value]) => (
                      <div key={label}>
                        <p className="text-[10px] font-bold uppercase mb-1" style={{ color: 'var(--color-on-surface-variant)' }}>{label}</p>
                        <p className="font-['Inter'] text-[16px]" style={{ color: 'var(--color-primary)' }}>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col items-center">
            <div className="w-px h-24 mb-8" style={{ background: 'linear-gradient(to bottom, var(--color-primary), transparent)' }} />
            <button className="px-12 py-5 font-['Inter'] text-[14px] font-medium hover:transition-all flex items-center gap-4 cursor-pointer" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>
              LOAD MORE ARCHIVE
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: 'var(--color-surface-container-high)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            {[
              { target: '150', label: 'Projects Delivered Globally Since 1992' },
              { target: '42', label: 'International Engineering Awards' },
              { target: '95', label: 'Client Retention and Referral Rate', suffix: '%' },
              { target: '28', label: 'Current Active Development Sites' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="font-['Montserrat'] text-[72px] font-bold leading-none count-up" data-target={s.target} style={{ color: 'var(--color-primary)' }}>0</span>
                {s.suffix && <span className="text-[72px] font-bold -mt-12" style={{ color: 'var(--color-primary)' }}>{s.suffix}</span>}
                <p className="font-['Inter'] text-[14px] font-medium border-l-2 pl-4" style={{ color: 'var(--color-on-surface-variant)', borderColor: 'var(--color-secondary)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-primary)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px]">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h2 className="font-['Montserrat'] text-[36px] font-bold leading-tight mb-8" style={{ color: 'var(--color-on-primary)' }}>
                A Global Footprint <br /><span className="italic" style={{ color: 'var(--color-secondary)' }}>of Quality</span>
              </h2>
              <p className="font-['Inter'] text-[18px] leading-relaxed mb-12" style={{ color: 'var(--color-on-primary-container)' }}>
                Our engineering solutions bridge cultures and climates. From seismic-resistant structures in Japan to sustainable hubs in Europe.
              </p>
              <div className="space-y-6">
                {[
                  { name: 'North America', count: '64 Active Projects' },
                  { name: 'Europe & Middle East', count: '32 Active Projects' },
                ].map((r) => (
                  <div key={r.name} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full transition-colors" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--color-on-primary)' }}>location_on</span>
                    </div>
                    <div>
                      <h4 className="font-['Inter'] text-[14px] font-medium" style={{ color: 'var(--color-on-primary)' }}>{r.name}</h4>
                      <p className="text-[12px]" style={{ color: 'var(--color-on-primary-container)' }}>{r.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="w-full h-[500px] rounded-lg opacity-80 filter grayscale brightness-50 contrast-125" style={{ background: 'var(--color-surface-container-highest)', backgroundImage: 'url(https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] flex flex-col lg:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-[40px] lg:text-[60px] font-['Montserrat'] font-bold leading-none mb-4" style={{ color: 'var(--color-on-secondary)' }}>READY TO BUILD <br />YOUR LEGACY?</h2>
            <p className="font-['Inter'] text-[18px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>Connect with our lead architects for a project feasibility study.</p>
          </div>
          <Link to="/quote" className="px-10 py-6 font-['Inter'] text-[14px] font-medium flex items-center gap-4 group" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>
            CONSULT OUR TEAM
            <ArrowUpRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
