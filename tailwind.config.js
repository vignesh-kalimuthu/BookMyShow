module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                divyanshi: {
                    50: '#ffe6f0',
                    100: '#f5bfce',
                    200: '#e897ae',
                    300: '#de6e8d',
                    400: '#d3466d',
                    500: '#b92c53',
                    600: '#912141',
                    700: '#69172e',
                    800: '#410b1c',
                    900: '#1d0009',
                },
                navCol: {


                    50: '#e4f5ff',
                    100: '#bdddf4',
                    200: '#2B3148',
                    300: '#6bafe2',
                    400: '#4698da',
                    500: '#307fc1',
                    600: '#246296',
                    700: '#18466c',
                    800: '#0b2a42',
                    900: '#000f1a',

                }

            }
        },
    },

    variants: {
        extend: {},
    },
    plugins: [],
}