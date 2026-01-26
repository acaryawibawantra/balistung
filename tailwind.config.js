/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary colors from Balistung logo
                'primary-green': 'rgb(var(--color-primary-green) / <alpha-value>)',
                'primary-yellow': 'rgb(var(--color-primary-yellow) / <alpha-value>)',
                'primary-orange': 'rgb(var(--color-primary-orange) / <alpha-value>)',

                // Neutral colors
                'cream': 'rgb(var(--color-cream) / <alpha-value>)',
                'white': 'rgb(var(--color-white) / <alpha-value>)',

                // Gray scale
                gray: {
                    50: 'rgb(var(--color-gray-50) / <alpha-value>)',
                    100: 'rgb(var(--color-gray-100) / <alpha-value>)',
                    200: 'rgb(var(--color-gray-200) / <alpha-value>)',
                    300: 'rgb(var(--color-gray-300) / <alpha-value>)',
                    400: 'rgb(var(--color-gray-400) / <alpha-value>)',
                    500: 'rgb(var(--color-gray-500) / <alpha-value>)',
                    600: 'rgb(var(--color-gray-600) / <alpha-value>)',
                    700: 'rgb(var(--color-gray-700) / <alpha-value>)',
                    800: 'rgb(var(--color-gray-800) / <alpha-value>)',
                    900: 'rgb(var(--color-gray-900) / <alpha-value>)',
                },

                // Semantic colors
                success: 'rgb(var(--color-success) / <alpha-value>)',
                warning: 'rgb(var(--color-warning) / <alpha-value>)',
                error: 'rgb(var(--color-error) / <alpha-value>)',
                info: 'rgb(var(--color-info) / <alpha-value>)',
            },
            fontFamily: {
                display: ['var(--font-poppins)', 'sans-serif'],
                body: ['var(--font-nunito)', 'sans-serif'],
                accent: ['var(--font-quicksand)', 'sans-serif'],
            },
            boxShadow: {
                'playful': 'var(--shadow-playful)',
            },
            borderRadius: {
                'sm': 'var(--radius-sm)',
                'md': 'var(--radius-md)',
                'lg': 'var(--radius-lg)',
                'xl': 'var(--radius-xl)',
                '2xl': 'var(--radius-2xl)',
                'full': 'var(--radius-full)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'bounce-slow': 'bounce 2s ease-in-out infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
            },
        },
    },
    plugins: [],
}
