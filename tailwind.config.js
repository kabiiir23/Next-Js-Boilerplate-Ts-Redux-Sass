module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './components/**/*.{js,ts,jsx,tsx}',
            './pages/**/*.{js,ts,jsx,tsx}',
        ],
    },
    darkMode: 'media', // 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#1172BA',
                secondary: '#003459',
                tertiary: '#002431',
                accent: '#26ABE2',
                markoyellow: '#FFA726',
            },
            container: {
                center: true,
                padding: {
                    default: '1rem',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
