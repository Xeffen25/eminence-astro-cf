/** @type {import("prettier").Config} */
export default {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
};
