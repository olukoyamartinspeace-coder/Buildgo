import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const serviceList = [
  { num: '01', icon: 'home_work', title: 'Residential Construction', desc: 'Bespoke living spaces engineered for longevity. We specialize in luxury custom homes and high-density residential developments that redefine urban living standards.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzstiuDBiMBD2Yt2zI1FgfJRprR0FpHmn97X-UqKRPTCgQFdYeaW2fd1Z9ggs4Ot-Xyu8YAsLIHZEp2rRw3q1SrDu2oN866sRC9wZn4cMWCs9LiZ3WNL5rLSSgAIYGANmkyMs_6BEYmIS0GXW1lTuClojpwi8wRXAcqJUjD0uggwdOutuKZVooiSlZkaHQzvHwJSyTKFBV3qvjc_ow7TWsX3ndPfmiTvVCV0QwCsTNiIRpVYD6X6z4' },
  { num: '02', icon: 'business', title: 'Commercial Building', desc: 'Scalable infrastructure for the corporate world. From high-rise offices to retail centers, our team delivers functional environments that drive business success.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXVS3pOpbQtabeue_QcwWNghYrLzhwMnEwELSr_x8HV9YJScXGheM-qMDq8d2fmxZhVLRvWdQtUAeJ36PTmiRn-nJXfHO45lTGg9MFoAzb8t55wM0EtNKndvkW5mrIyZfLUEzQhgRNhvyt7ese6VwruErh04n86gvjG0TAhGJc2Dm1oY03J07et_kQQgJi07iqkPv3hHITgRAYmy6A2gusLDBM42cjYqYpN32ccEReS9VQHYnldppg' },
  { num: '03', icon: 'factory', title: 'Industrial Engineering', desc: 'Robust solutions for logistics and manufacturing. We engineer heavy-duty facilities designed to withstand rigorous operational demands and optimize throughput.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5z_woxUP1rdGToGgX1IAOLTIWANdFAMWxKIvRmTjeByY4f_N5vQo6op3wZFmsmCBUKkMoo8VZzl8JAuxvGt83rjpKRxBvuaZ7S5UP3KleVk7_QGTUbTe3UnLR9FZbUiva1Wj4QKvRwcux0oiQi_CWSQmtebzqU0_MgoxlSasoQKgjZZVoSPxHbaak3bN7-eqGKyFx41kNZRFWmHoZAq7rAZCfkzmCUB42kgoZEART_G-JfrPYJF-Q' },
  { num: '04', icon: 'architecture', title: 'Renovation & Remodeling', desc: 'Breathing new life into existing structures. We perform complex seismic retrofitting and structural modernization while preserving the architectural soul of the site.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNQ9tVr90Aj_37tfEiW5XLfjyWjxoMVGKO1Rqjz3rXi-UUxpOT8x6PpKSYfYQRMwAKOrCOvhxllwZRBx3PcNHEg9OnQlXnXkHeqHcVFMXsnYvI2Fn16oNKa9-7gd8Rx3uZ-s8oU0Ppp2Lm43EZtmH8kz_qcg0moo19SumBDPtiq5PXcRu1LMCT9eKBlhCphVDdOFXF37-EjJWfn5gFzkiFIuQp6b4aW_BS-zO70EauWm-rhd_3Fib' },
  { num: '05', icon: 'task_alt', title: 'Project Management', desc: 'Disciplined execution from concept to completion. Our PMO ensures on-time delivery, budget adherence, and uncompromising safety protocols on every site.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI6lTvSGJDp76iyh-alprDqlV5jVT8lUZFpJkwOVIm-BHzXEw9EaqNHSo6tz4IN-KCMguMOFV_S1KuSxQLrqXXIx8R4X-Kc2qgfOsRqUlyR_JpOQ5Iv-8CnAD_7lsgJKF8-FT4qt8ddRMD-30mmXxq1_IVturJkNRxRb2Jx6rAAy0RZwlP6J_cRgmBqYhyRXGP9NKFMB-Ya0-Xz6sl7FzTRiIhuQbNRIzY4WNFoomoRQzMQ1tYS9n2' },
  { num: '06', icon: 'draw', title: 'Architecture Design', desc: 'Visionary aesthetics meets structural reality. We create blueprints that push boundaries while ensuring absolute feasibility and environmental sustainability.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCbSANbgJP9UMENvX52WqeBLtGOGqd-4ZgI0E-_iN-nzmlLBJ0-Geay-GDoMlpnKBLPHcj82kCUHWZLeNEvxUdr7xBffMwuYR4yP25yof-6rsm3nHhnlYVtZNA_MWbX-qoVRz1bZb-oOb0HGwx_VriOjMAnVIdN5P__zbzDxumSnCvIFOIrIrj4XdGMBCXqOGVSIz3Ob02OEjMtDchgNT5jd9fz_Bcw9mKVaXvi47czHwAaF5kweP4' },
]

const stats = [
  { id: 'stat-1', target: 450, suffix: '' },
  { id: 'stat-2', target: 32, suffix: '' },
  { id: 'stat-3', target: 18, suffix: '' },
  { id: 'stat-4', target: 120, suffix: '+' },
]

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stats.forEach(({ id, target, suffix }) => {
            const el = document.getElementById(id)
            if (!el) return
            let current = 0
            const increment = target / (2000 / 16)
            const update = () => {
              current += increment
              if (current < target) {
                el.innerText = Math.floor(current) + suffix
                requestAnimationFrame(update)
              } else {
                el.innerText = target + suffix
              }
            }
            update()
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    const firstStat = document.getElementById('stat-1')
    if (firstStat) {
      const parent = firstStat.parentElement?.parentElement?.parentElement
      if (parent) observer.observe(parent)
    }

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
              <span className="inline-block py-1 px-3 font-['Inter'] text-[14px] font-medium uppercase tracking-widest mb-6" style={{ background: 'var(--color-secondary-fixed)', color: 'var(--color-on-secondary-fixed-variant)' }}>Our Capabilities</span>
              <h1 className="font-['Montserrat'] text-[40px] lg:text-[72px] font-bold mb-8 max-w-4xl leading-tight" style={{ color: 'var(--color-primary)' }}>
                Precision Engineering <br />
                <span className="italic" style={{ color: 'var(--color-secondary)' }}>For Modern Landscapes</span>
              </h1>
            </div>
            <div className="lg:w-1/3 pb-2">
              <p className="font-['Inter'] text-[18px] leading-relaxed border-l-4 pl-6" style={{ color: 'var(--color-on-surface-variant)', borderColor: 'var(--color-secondary)' }}>
                We deliver robust infrastructure solutions through a rigorous blend of architectural vision and technical mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32" style={{ background: 'var(--color-surface-container-lowest)' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-[32px]">
            {serviceList.map((s) => (
              <div key={s.num} className="group flex flex-col">
                <div className="relative overflow-hidden mb-8 aspect-[4/3]" style={{ background: 'var(--color-surface-container)' }}>
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={s.img} alt={s.title} />
                  <div className="absolute top-0 left-0 p-4 font-['Inter'] text-[14px] font-medium" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>{s.num}</div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined scale-125" style={{ color: 'var(--color-secondary)' }}>{s.icon}</span>
                  <h3 className="font-['Montserrat'] text-[22px] font-semibold uppercase" style={{ color: 'var(--color-primary)' }}>{s.title}</h3>
                </div>
                <p className="font-['Inter'] text-[16px] leading-6 flex-grow mb-6" style={{ color: 'var(--color-on-surface-variant)' }}>{s.desc}</p>
                <a href="#" className="flex items-center gap-2 font-['Inter'] text-[14px] font-medium hover:translate-x-2 transition-transform" style={{ color: 'var(--color-secondary)' }}>
                  EXPLORE SERVICE <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>
        <div className="absolute inset-0 opacity-10">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[64px] relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[32px]">
            {[
              { id: 'stat-1', label: 'Projects Delivered' },
              { id: 'stat-2', label: 'Years Excellence' },
              { id: 'stat-3', label: 'Global Awards' },
              { id: 'stat-4', label: 'Team Experts' },
            ].map((s) => (
              <div key={s.id} className="flex flex-col border-l pl-6" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                <span className="font-['Montserrat'] text-[36px] lg:text-[72px] font-bold mb-2" style={{ color: 'var(--color-secondary)' }} id={s.id}>0</span>
                <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</span>
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
                <h2 className="font-['Montserrat'] text-[36px] font-bold mb-6" style={{ color: 'var(--color-primary)' }}>Ready to start your next landmark project?</h2>
                <p className="font-['Inter'] text-[18px] leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>
                  Our consultation process begins with understanding your core requirements. Connect with our engineering directors today for a comprehensive feasibility study and cost estimation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/quote" className="px-10 py-5 font-['Inter'] text-[14px] font-medium uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3" style={{ background: 'var(--color-secondary)', color: 'var(--color-on-secondary)' }}>
                  Consult with an Expert
                  <span className="material-symbols-outlined">forum</span>
                </Link>
                <Link to="/projects" className="px-10 py-5 font-['Inter'] text-[14px] font-medium uppercase tracking-widest border-2 transition-all" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
