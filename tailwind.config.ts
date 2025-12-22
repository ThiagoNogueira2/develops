import type { Config } from 'tailwindcss';

export default {
    darkMode: ['selector', '[class*="app-dark"]'],
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
           'xxs': '440px',
            xs:'500px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1560px',
            '3xl': '1920px'
        },
        extend: {
          fontFamily: {
            sans: ['Roboto', 'system-ui', 'sans-serif']
          },
          animation: {
            'slide-in-left': 'slideInLeft 0.35s ease-out forwards',
            'slide-in-right': 'slideInRight 0.35s ease-out forwards',
            'slide-in-up': 'slideInUp 0.35s ease-out forwards',
            'slide-in-down': 'slideInDown 0.35s ease-out forwards',
            'fade-in': 'fadeIn 0.3s ease-out forwards',
            'fade-in-up': 'fadeInUp 0.35s ease-out forwards',
            'fade-in-down': 'fadeInDown 0.35s ease-out forwards',
            'zoom-in': 'zoomIn 0.3s ease-out forwards',
            'zoom-in-soft': 'zoomInSoft 0.35s ease-out forwards',
            'blur-in': 'blurIn 0.35s ease-out forwards',
            'bounce-in': 'bounceIn 0.35s ease-out forwards',
            'flip-in': 'flipIn 0.35s ease-out forwards',
            'stagger-in': 'staggerIn 0.3s ease-out forwards',
          },
          keyframes: {
            slideInLeft: {
              '0%': { opacity: '0', transform: 'translate3d(-30px, 0, 0)' },
              '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
            },
            slideInRight: {
              '0%': { opacity: '0', transform: 'translate3d(30px, 0, 0)' },
              '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
            },
            slideInUp: {
              '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
              '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
            },
            slideInDown: {
              '0%': { opacity: '0', transform: 'translate3d(0, -20px, 0)' },
              '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
            },
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translate3d(0, 15px, 0)' },
              '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
            },
            fadeInDown: {
              '0%': { opacity: '0', transform: 'translate3d(0, -15px, 0)' },
              '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
            },
            zoomIn: {
              '0%': { opacity: '0', transform: 'scale3d(0.95, 0.95, 1)' },
              '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
            },
            zoomInSoft: {
              '0%': { opacity: '0', transform: 'scale3d(0.98, 0.98, 1)' },
              '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
            },
            blurIn: {
              '0%': { opacity: '0', filter: 'blur(4px)' },
              '100%': { opacity: '1', filter: 'blur(0)' },
            },
            bounceIn: {
              '0%': { opacity: '0', transform: 'scale3d(0.95, 0.95, 1)' },
              '60%': { opacity: '1', transform: 'scale3d(1.01, 1.01, 1)' },
              '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
            },
            flipIn: {
              '0%': { opacity: '0', transform: 'perspective(400px) rotateY(-20deg)' },
              '100%': { opacity: '1', transform: 'perspective(400px) rotateY(0)' },
            },
            staggerIn: {
              '0%': { opacity: '0', transform: 'translate3d(0, 10px, 0)' },
              '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
            },
          },
          transitionDelay: {
            '0': '0ms',
            '75': '75ms',
            '100': '100ms',
            '150': '150ms',
            '200': '200ms',
            '300': '300ms',
            '400': '400ms',
            '500': '500ms',
            '600': '600ms',
            '700': '700ms',
            '800': '800ms',
            '900': '900ms',
            '1000': '1000ms',
          },
        }
    },

    plugins: [require('tailwindcss-primeui')]
    } satisfies Config;
