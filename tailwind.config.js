/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Restart server with --force option to see changes in the extended tailwind colors in mantine theme
      colors: {
        primary: '#fe5e00',
        background: '#F8F9F9',
        appBackgroundDark: '#ffffff',
        sidebarBackground: '#ffffff',
        cardBackground: '#2f2b43',
        cardElementBackground: '#fcf4ef',
        cardElementBackgroundHover: '#fcf4ef',
      }
    },
  },
  plugins: [],
}
