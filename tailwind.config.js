/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'btn': '30.833px',
      },
      backgroundColor: {
        'btn': '#234CEB',
      },
      boxShadow: {
        'btn': '0px 15px 35.83333206176758px 3.3333332538604736px rgba(35, 76, 235, 0.21)',
      },
      textColor: {
        'btn-text': '#FFF',
        'label-text': 'rgba(0, 0, 0, 0.70)',
      },
      fontSize: {
        'btn-text': '20px',
        'label-text': '20px',
      },
      fontFamily: {
        'btn-text': 'Sora',
        'label-text': 'Sora',
      },
      fontWeight: {
        'btn-text': '700',
        'label-text': '600',
      },
      lineHeight: {
        'btn-text': 'normal',
        'label-text': 'normal',
      },
    },
  },
  plugins: [],
}

