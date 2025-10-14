import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#121212',
        primary: '#494953',
        third: '#FF5656',
        // secondary: '#1691ae',
        // secondary: '#f54242',
        // secondary: '#3589e8',
        secondary: '#336296',
        // secondary: '#191919',
        // secondary: '#FF5656',
        back: "#FFFFFF"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
