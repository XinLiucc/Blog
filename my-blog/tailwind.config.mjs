/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
            950: '#030712',
          },
        },
        typography: {
          DEFAULT: {
            css: {
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
              code: {
                fontWeight: '400',
                backgroundColor: '#f3f4f6',
                padding: '0.25rem 0.375rem',
                borderRadius: '0.25rem',
              },
            },
          },
          dark: {
            css: {
              color: '#e5e7eb',
              '[class~="lead"]': {
                color: '#d1d5db',
              },
              a: {
                color: '#60a5fa',
              },
              strong: {
                color: '#f3f4f6',
              },
              'ol > li::marker': {
                color: '#9ca3af',
              },
              'ul > li::marker': {
                color: '#6b7280',
              },
              hr: {
                borderColor: '#374151',
              },
              blockquote: {
                color: '#d1d5db',
                borderLeftColor: '#4b5563',
              },
              h1: {
                color: '#f3f4f6',
              },
              h2: {
                color: '#f3f4f6',
              },
              h3: {
                color: '#f3f4f6',
              },
              h4: {
                color: '#f3f4f6',
              },
              'figure figcaption': {
                color: '#9ca3af',
              },
              code: {
                color: '#f3f4f6',
                backgroundColor: '#374151',
              },
              'a code': {
                color: '#60a5fa',
              },
              pre: {
                color: '#e5e7eb',
                backgroundColor: '#1f2937',
              },
              thead: {
                color: '#f3f4f6',
                borderBottomColor: '#4b5563',
              },
              'tbody tr': {
                borderBottomColor: '#374151',
              },
            },
          },
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };