/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
                Roboto: ["Roboto", "sans-serif"],
            },
            backgroundImage: {
                main: "url('/src/assets/main-bg.jpg')",
            },
        },
    },
    plugins: [],
};
