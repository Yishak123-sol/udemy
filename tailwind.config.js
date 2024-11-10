/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      colors: {
        "udemy-blue": "#007bff",
        "udemy-light-gray": "#f2f2f2",
        "udemy-dark-gray": "#333",
        "udemy-medium-gray": "#666",
        "udemy-lighter-gray": "#ddd",
        "udemy-yellow": "#ffc107",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
      sans: ["Arial", "Helvetica", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
