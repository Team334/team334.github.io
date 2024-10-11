module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        fontFamily: {
            display: ['"Richardson Brand Accelerator"', 'sans-serif'],
            sans: ['Oxanium', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                xl: '6rem',
                '2xl': '10rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
