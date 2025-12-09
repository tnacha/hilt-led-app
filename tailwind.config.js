export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2563eb', // blue-600
        'primary-purple': '#7c3aed', // purple-600
        'path-blue': {
          500: '#3b82f6',
          600: '#2563eb',
        },
        'path-cyan': {
          500: '#06b6d4',
          600: '#0891b2',
        },
        'path-orange': {
          500: '#f97316',
          600: '#ea580c',
        },
        'path-purple': {
          500: '#a855f7',
          600: '#9333ea',
        },
      },
    },
  },
  plugins: [],
}
