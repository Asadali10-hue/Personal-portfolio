const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");



/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily:{
          main: 'var(--poppins)',
          second: 'var(--sans)',
      },
      colors: {
        main: '#8806cd',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
           DEFAULT: 'hsl(var(--primary))',
           foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
           DEFAULT: 'hsl(var(--secondary))',
           foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
           DEFAULT: 'hsl(var(--destructive))',
           foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
           DEFAULT: 'hsl(var(--muted))',
           foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
           DEFAULT: 'hsl(var(--accent))',
           foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
           DEFAULT: 'hsl(var(--popover))',
           foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
           DEFAULT: 'hsl(var(--card))',
           foreground: 'hsl(var(--card-foreground))',
        },
        brand: {
          default: "var(--cal-brand,#8806cd)",
          emphasis: "var(--cal-brand-emphasis,#101010)",
          subtle: "var(--cal-brand-subtle,#9CA3AF)",
          accent: "var(--cal-brand-accent,white)",
        },
     },
     borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
     },
     keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      moveUp: {
        '0%': { transform: 'translateY(5%)', opacity: '0' },
        '100%': { transform: 'translateY(0%)', opacity: '1' }
      },
      appear: {
        from: { opacity: '0' },
        to: { opacity: '1' }
      },
      "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      shimmer: {
        "0%, 90%, 100%": {
          "background-position": "calc(-100% - var(--shimmer-width)) 0",
        },
        "30%, 60%": {
          "background-position": "calc(100% + var(--shimmer-width)) 0",
        },
      },
        'accordion-down': {
           from: { height: '0' },
           to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
           from: { height: 'var(--radix-accordion-content-height)' },
           to: { height: '0' },
        },
        'border-beam': {
           '100%': {
              'offset-distance': '100%',
           },
        },
        'image-glow': {
           '0%': {
              'opacity': '0',
              'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)',
           },
           '10%': {
              'opacity': '0.7',
              'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)',
           },
           '100%': {
              opacity: '0.4',
           },
        },
        'fade-in': {
           from: { opacity: '0', transform: 'translateY(-10px)' },
           to: { opacity: '1', transform: 'none' },
        },
        'fade-up': {
           from: { opacity: '0', transform: 'translateY(20px)' },
           to: { opacity: '1', transform: 'none' },
        },
        'shimmer': {
           '0%, 90%, 100%': {
              'background-position': 'calc(-100% - var(--shimmer-width)) 0',
           },
           '30%, 60%': {
              'background-position': 'calc(100% + var(--shimmer-width)) 0',
           },
        },
        'marquee': {
           from: { transform: 'translateX(0)' },
           to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
           from: { transform: 'translateY(0)' },
           to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
     },
     animation: {
      scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      marquee: "marquee var(--duration) linear infinite",
      "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      moveUp: 'moveUp 1.4s ease forwards',
        appear: 'appear 1s 1s forwards',
      "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        'accordion-down': 'accordion-down 0.2s ease-out',
        shimmer: "shimmer 8s infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        'accordion-up': 'accordion-up 0.2s ease-out',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
        'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
        'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
        'shimmer': 'shimmer 8s infinite',
        'marquee': 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
     },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors, require('@tailwindcss/aspect-ratio'),],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}