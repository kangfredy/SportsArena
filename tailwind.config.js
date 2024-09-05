/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#8FE046',
                greenLight: '#BDF29B',
                spaceGray: '#E6E9EC',
                boldGray: '#808080',
            },
            fontFamily: {
                poppins: ['Poppins'],
            },
        },
    },
    plugins: [],
}
