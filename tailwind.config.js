const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1080px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Patrick Hand", "Arial", "sans-serif"],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      plugin(({ addUtilities }) => {
        const utilities = {
          ".bg-search": {
            backgroundImage: `url(
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E"
            )`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "20px",
          },
        };

        addUtilities(utilities);
      }),
    ],
  },
};
