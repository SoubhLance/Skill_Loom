/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // main HTML
    "./src/**/*.{js,ts,jsx,tsx}", // all React components
  ],
  theme: {
    extend: {
      colors: {
        govGray: '#374151',       // utility bar
        govBlue: '#1e3a8a',       // govt emblem
        digitalBlue: '#2563eb',   // main nav & digital india
        breadcrumbBlue: '#3b82f6',// breadcrumb
        pmOrange: '#fb923c',      // PM outer circle
        pmInner: '#fdba74',       // PM inner circle
      },
      fontFamily: {
        gov: ['Arial', 'sans-serif'],
        serifGov: ['serif'],
      },
    },
  },
  plugins: [],
}
