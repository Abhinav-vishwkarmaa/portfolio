/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#080405',
          900: '#0e0507',
          850: '#15080b',
          800: '#1d0b10',
          750: '#270e15',
          700: '#33131b',
        },
        solar: {
          red: '#ef4444',
          crimson: '#dc2626',
          flame: '#ff4d36',
          orange: '#f97316',
          amber: '#f59e0b',
          gold: '#fbbf24',
        },
        electric: {
          cyan: '#f97316',
          blue: '#ef4444',
          deep: '#dc2626',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan-sm': '0 0 20px rgba(239, 68, 68, 0.35)',
        'glow-cyan-md': '0 0 35px rgba(249, 115, 22, 0.5)',
        'glow-cyan-lg': '0 0 60px rgba(239, 68, 68, 0.65)',
        'glow-solar-sm': '0 0 20px rgba(239, 68, 68, 0.35)',
        'glow-solar-md': '0 0 35px rgba(249, 115, 22, 0.5)',
        'glow-solar-lg': '0 0 60px rgba(239, 68, 68, 0.65)',
        'sculpted-ribbon': '0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 25px rgba(239, 68, 68, 0.15)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-slower': 'spin 24s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
