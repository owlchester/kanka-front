module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        dark: '#112B6B',
        purple: '#40479E',
        light: '#95B5D8',
        blue: '#4A58FF',
        switcher: '#D8DBFF',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.dark'),
            '--tw-prose-headings': theme('colors.purple'),
            '--tw-prose-links': theme('colors.blue'),
            '--tw-prose-bold': theme('colors.dark'),
            '--tw-prose-bullets': theme('colors.light'),
            '--tw-prose-hr': theme('colors.light'),
            '--tw-prose-quotes': theme('colors.purple'),
            '--tw-prose-quote-borders': theme('colors.light'),
            '--tw-prose-code': theme('colors.light'),
            maxWidth: 'none',
            'h1 a, h2 a, h3 a, h4 a': {
              textDecoration: 'none',
              color: 'inherit'
            },
          },
        },
      }),
    },
  },
}
