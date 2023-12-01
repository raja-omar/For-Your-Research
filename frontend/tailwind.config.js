/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-80": "var(--purple-80)",
        "grey-30": "var(--grey-30)",
        "grey-90": "var(--grey-90)",
        "white": "var(--white)",
        "black": "var(--black)",
        "bg-light": "var(--white)",
        "light-text-primary": "var(--black)",
        "light-text-secondary": "var(--grey-90)",
        "bg-dark": "var(--black)",
        "dark-text-primary": "var(--white)",
        "dark-text-secondary": "var(--grey-30)",
        "selected-highlight": "var(--purple-80)",
        "bg-main": "var(--bg-light)",
        "text-primary": "var(--light-text-primary)",
        "text-secondary": "var(--light-text-secondary)",
        "selected-highlight": "var(--selected-highlight)",
        "grey-10": "var(--grey-10)",
        "grey-100": "var(--grey-100)",
        "grey-20": "var(--grey-20)",
        "grey-80": "var(--grey-80)",
        "purple-10": "var(--purple-10)",
        "purple-20": "var(--purple-20)",
        "purple-70": "var(--purple-70)",
        "pp": '#f5f3ff',
      },
      boxShadow: {
        "effect-v1": "var(--effect-v1)",
        "effect-v2": "var(--effect-v2)",
      },
    },
  },
  plugins: [],
}

