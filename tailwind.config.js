/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07090d',
        night: '#02050a',
        electric: '#1352ff',
        cyanGlow: '#2dd4ff',
        limeGlow: '#d6ff2f',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(19, 82, 255, 0.22)',
      },
    },
  },
  plugins: [],
};
