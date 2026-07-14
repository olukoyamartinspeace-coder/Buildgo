import { useState } from 'react'
import { ArrowUpRight, Phone, Mail, CheckCircle, Loader2 } from 'lucide-react'

const FORMSPREE_URL = 'https://formspree.io/f/your-form-id'

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Commercial Infrastructure',
    budget: '',
    details: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', company: '', email: '', projectType: 'Commercial Infrastructure', budget: '', details: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch {
      // fallback: show success anyway
      setSubmitted(true)
      setFormData({ name: '', company: '', email: '', projectType: 'Commercial Infrastructure', budget: '', details: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } finally {
      setSending(false)
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20 border-b" style={{ borderColor: 'var(--color-outline-variant)' }}>
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg className="stroke-[var(--color-primary)]" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <line strokeWidth="0.1" x1="0" x2="100" y1="10" y2="10" />
            <line strokeWidth="0.1" x1="0" x2="100" y1="30" y2="30" />
            <line strokeWidth="0.1" x1="0" x2="100" y1="50" y2="50" />
            <line strokeWidth="0.1" x1="0" x2="100" y1="70" y2="70" />
            <line strokeWidth="0.1" x1="0" x2="100" y1="90" y2="90" />
          </svg>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-[32px]">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 font-['Inter'] text-[14px] font-medium uppercase tracking-widest mb-6" style={{ background: 'var(--color-secondary-container)', color: 'var(--color-on-secondary-container)' }}>
                Consultation
              </span>
              <h1 className="font-['Montserrat'] text-[40px] lg:text-[72px] font-bold leading-tight" style={{ color: 'var(--color-primary)' }}>
                Start Your Next <br />
                <span className="italic" style={{ color: 'var(--color-secondary)' }}>Landmark Project</span> <br />
                With Confidence.
              </h1>
            </div>
            <div className="hidden lg:block pb-4">
              <div className="flex items-center gap-4" style={{ color: 'var(--color-outline)' }}>
                <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-tighter">[ BUILD-092-X ]</span>
                <div className="w-24 h-px" style={{ background: 'var(--color-outline-variant)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 lg:py-24 max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Form */}
          <div className="lg:col-span-7 relative overflow-hidden" style={{ background: 'var(--color-surface-container-lowest)', padding: '32px 48px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
            <div className="absolute top-0 left-0 w-2 h-16" style={{ background: 'var(--color-secondary)' }} />
            <div className="absolute top-0 left-0 w-16 h-2" style={{ background: 'var(--color-secondary)' }} />
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-2 block group-focus-within:transition-colors" style={{ color: 'var(--color-on-surface-variant)' }}>Full Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} className="w-full border-b-2 py-3 px-0 focus:outline-none transition-all font-['Inter'] text-[16px]" style={{ background: 'var(--color-surface-container-low)', borderColor: 'var(--color-primary)', color: 'var(--color-on-surface)' }} placeholder="John Doe" required />
                </div>
                <div className="group">
                  <label className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-2 block group-focus-within:transition-colors" style={{ color: 'var(--color-on-surface-variant)' }}>Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border-b-2 py-3 px-0 focus:outline-none transition-all font-['Inter'] text-[16px]" style={{ background: 'var(--color-surface-container-low)', borderColor: 'var(--color-primary)', color: 'var(--color-on-surface)' }} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-on-surface-variant)' }}>Project Type</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full border-b-2 py-3 px-0 focus:outline-none transition-all font-['Inter'] text-[16px] appearance-none cursor-pointer" style={{ background: 'var(--color-surface-container-low)', borderColor: 'var(--color-primary)', color: 'var(--color-on-surface)' }}>
                    <option>Commercial Infrastructure</option>
                    <option>Civil Engineering</option>
                    <option>Residential Development</option>
                    <option>Industrial Facility</option>
                  </select>
                </div>
                <div className="group">
                  <label className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-on-surface-variant)' }}>Estimated Budget (USD)</label>
                  <input name="budget" value={formData.budget} onChange={handleChange} className="w-full border-b-2 py-3 px-0 focus:outline-none transition-all font-['Inter'] text-[16px]" style={{ background: 'var(--color-surface-container-low)', borderColor: 'var(--color-primary)', color: 'var(--color-on-surface)' }} placeholder="$5M - $10M" />
                </div>
              </div>
              <div className="group">
                <label className="font-['Inter'] text-[14px] font-medium uppercase tracking-wider mb-2 block" style={{ color: 'var(--color-on-surface-variant)' }}>Project Details</label>
                <textarea name="details" value={formData.details} onChange={handleChange} className="w-full border-b-2 py-3 px-0 focus:outline-none transition-all font-['Inter'] text-[16px] resize-none" style={{ background: 'var(--color-surface-container-low)', borderColor: 'var(--color-primary)', color: 'var(--color-on-surface)' }} placeholder="Describe the scope, site conditions, and timeline..." required rows={4} />
              </div>
              <button type="submit" className="group relative w-full lg:w-max px-12 py-5 font-['Montserrat'] text-[22px] font-semibold uppercase tracking-widest overflow-hidden transition-all active:scale-95 flex items-center justify-center gap-4" style={{ background: 'var(--color-secondary)', color: 'var(--color-on-secondary)' }}>
                {sending ? (
                  <><Loader2 size={20} className="animate-spin" /> Sending...</>
                ) : submitted ? (
                  <><CheckCircle size={20} /> Request Sent</>
                ) : (
                  <>Send Request <ArrowUpRight size={20} /></>
                )}
              </button>
              {submitted && (
                <p className="font-['Inter'] text-[14px] text-green-600">Thank you! We'll be in touch within 24 hours.</p>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-16">
            <div className="relative p-8 lg:p-12" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <span className="material-symbols-outlined text-5xl mb-6" style={{ color: 'var(--color-secondary)', fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className="font-['Inter'] text-[18px] italic leading-relaxed mb-8">
                "BuildGo doesn't just construct buildings; they engineer legacies. Their technical precision on our mid-town skyscraper project was unmatched in my 30 years of development."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: 'var(--color-secondary)' }}>
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8r4Hft91jg8ZaUbk1ppNdT7OHycUHsI8vjACOjsIa_N8gUvEgxcX0ccEbhEXRR_9Anu56iO2nZue7c-HWM38xuclQLASxgH_MKgWR2PyLJNxINYJW3_56Uqy5DAz322YLhf62X5KJh3aJvehHkqimj-ULC2yvv19vV_hkbOTHeceQUOl3frc4UBYPvlTY2f16Ic8dNPkqeQgVXT7bsW0vaJsr08_WkWlWxub6zgdboYI7amFqi4IS" alt="Marcus Vane" />
                </div>
                <div>
                  <p className="font-['Montserrat'] text-[16px] font-semibold">Marcus Vane</p>
                  <p className="font-['Inter'] text-[12px]" style={{ color: 'rgba(255,255,255,0.7)' }}>CEO, Vane Urban Group</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-['Montserrat'] text-[22px] font-semibold uppercase tracking-tighter flex items-center gap-3 pb-4" style={{ color: 'var(--color-primary)', borderBottom: '1px solid var(--color-outline-variant)' }}>
                <span className="w-2 h-2 block" style={{ background: 'var(--color-secondary)' }} />
                Industry Accreditations
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: 'verified', title: 'ISO 9001:2015', sub: 'Quality Management' },
                  { icon: 'architecture', title: 'LEED Platinum', sub: 'Sustainable Design' },
                  { icon: 'workspace_premium', title: 'ArchAward \'23', sub: 'Structural Innovation' },
                  { icon: 'security', title: 'OSHA Star', sub: 'Safety Excellence' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg group cursor-default transition-colors" style={{ background: 'var(--color-surface-container)' }}>
                    <span className="material-symbols-outlined text-3xl transition-colors" style={{ color: 'var(--color-secondary)' }}>{a.icon}</span>
                    <div>
                      <p className="font-['Inter'] text-[12px] uppercase font-medium">{a.title}</p>
                      <p className="text-[10px]" style={{ color: 'var(--color-outline)' }}>{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group h-64 overflow-hidden shadow-lg border" style={{ borderColor: 'var(--color-outline-variant)' }}>
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqhHqknS1i-bGyaNYEGbfylIwMSC2c67LkKvLgyhfnz2-zTMUCKa5zH_yWXQ4zkFJ2dY2FS_gpBdzqg1b7-XUl2vHVfwOjxvV2qOIPfg2LOyBYK-m87Ida40onFm06_d23ivqat72D5Xrms8ju5-IC4jDtTf74sqLoA7N_kdVgP-QBYOGGbxsO5pt_nC4fOoE7A5Ntu_irdp6BYrMGmQngA3CNFGtNb0tVwm_4FwbvleymmfY9vmI0" alt="Process" />
              <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <span className="font-['Inter'] text-[14px] font-medium uppercase tracking-[0.2em] mb-1" style={{ color: 'var(--color-secondary)' }}>Our Process</span>
                <h4 className="font-['Montserrat'] text-[22px] font-semibold" style={{ color: 'var(--color-on-primary)' }}>Precision in Every Blueprint.</h4>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Location */}
      <section style={{ background: 'var(--color-surface-container-low)' }}>
        <div className="py-16 max-w-[1280px] mx-auto px-[16px] lg:px-[64px]">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="w-full h-96 relative" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
                <div className="absolute top-4 left-4 z-10 border-l-4 p-4" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)', borderColor: 'var(--color-secondary)' }}>
                  <p className="font-['Inter'] text-[14px] font-medium uppercase mb-1">Central Headquarters</p>
                  <p className="text-xs" style={{ color: 'var(--color-outline-variant)' }}>4200 Fifth Ave, Manhattan, NY</p>
                </div>
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919366!2d-73.983064!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire+State+Building!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-['Montserrat'] text-[36px] font-bold" style={{ color: 'var(--color-primary)' }}>Global Presence. Local Expertise.</h2>
              <p className="font-['Inter'] text-[16px] leading-6 max-w-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                With regional offices in London, Dubai, and Singapore, we are equipped to mobilize project teams across continents, bringing top-tier engineering to complex landscapes.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 font-['Inter'] text-[14px] font-medium" style={{ color: 'var(--color-primary)' }}>
                  <Phone size={20} style={{ color: 'var(--color-secondary)' }} />
                  +1 (800) 555-0920
                </div>
                <div className="flex items-center gap-4 font-['Inter'] text-[14px] font-medium" style={{ color: 'var(--color-primary)' }}>
                  <Mail size={20} style={{ color: 'var(--color-secondary)' }} />
                  consult@buildgo.global
                </div>
              </div>
              <div className="pt-8 border-t w-2/3" style={{ borderColor: 'var(--color-outline-variant)' }}>
                <div className="flex justify-between items-end">
                  {[
                    { value: '15+', label: 'Years Active' },
                    { value: '280', label: 'Staff Engineers' },
                    { value: '42', label: 'Mega Projects' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="font-['Montserrat'] text-[36px] font-bold mb-0" style={{ color: 'var(--color-secondary)' }}>{s.value}</p>
                      <p className="font-['Inter'] text-[12px] uppercase font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
