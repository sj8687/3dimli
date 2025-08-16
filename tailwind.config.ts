import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0c',
        brand: '#6b4dff',
      },
      boxShadow: {
        glow: '0 0 40px rgba(107,77,255,0.35)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config