import { useState, useEffect } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true)
      setTimeout(() => setVisible(false), 400)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      id="loader-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#050505',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: fading ? 'loaderReveal 0.4s cubic-bezier(0.65,0,0.35,1) forwards' : 'none',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,164,74,0.03) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(201,164,74,0.02) 0%, transparent 50%), #050505',
          animation: 'loaderBgShift 12s ease-in-out infinite',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }}>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: -30,
              background: 'radial-gradient(ellipse, rgba(201,164,74,0.15) 0%, transparent 70%)',
              animation: 'logoGlowPulse 1.5s ease-out forwards',
              opacity: 0,
            }}
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMM_E4cdjs5xOEbLlAcNmaX9bWfYIpR54K15A1ULXcPegCNzySjdmOeZ6l_IRM3OOncC7rcRhIwswaE65efnCuQtPK3w3zBcvFwHSFCCrf2B95nucvFG0NbhO10lZdBe2PDrdZh7A376FEeQEfyPZYL1hpGkFCaOdAkxxQBKTQL4q3yS5AjvxIok7W6nL_F4YcxILtQ0UMcytbGAtgXaOtpLW4cfgYoTIg660V-IL3Nt-PTzw8N7VI"
            alt="BuildGo"
            style={{ height: 48, animation: 'logoReveal 1.2s cubic-bezier(0.25,0.1,0.25,1) forwards' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
              animation: 'lightSweep 1.5s ease-in-out 0.3s forwards',
              transform: 'translateX(-100%)',
            }}
          />
        </div>
        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            fontSize: 14,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#fff',
            animation: 'taglineFade 0.5s ease-out 1s forwards',
            opacity: 0,
          }}
        >
          Crafting Excellence
        </div>
        <div style={{ width: 240, height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 1, overflow: 'hidden', position: 'relative' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#c9a44a',
              borderRadius: 1,
              boxShadow: '0 0 12px rgba(201,164,74,0.25)',
              transition: 'width 0.3s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 60,
              height: '100%',
              background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)',
              animation: 'lineGlint 1.5s linear 0.3s infinite',
              transform: 'translateX(-100%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
