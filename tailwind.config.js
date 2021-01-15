module.exports = {
  purge: { // purge all unused selectors
    mode: "all",
    content: [
      "./src/**/*.ejs",
      "./src/**/*.js"
    ]
  },
  theme: {
    container: () => ({
      // To center containers by default
      center: true,
    }),
    extend: {
      fontSize: {
        "4xl": "2rem"
      },
      maxWidth: {
        '35': '35rem',
        '6xl': '70rem'
      },
      colors: {
        "special-black": "rgba(0,0,0,.8)",
        "section-gray": "#F6F6F6",
        gray: {
          // ...
          300: '#C6C6C6',
        }
      }
    }
  },
  variants: {
    extend: {
      opacity: [
        "active"
      ],
      backgroundColor: [
        "active"
      ],
      cursor: [
        "active"
      ]
    }
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1180px',
          },
          '@screen 2xl': {
            maxWidth: '1180px',
          },
        }
      })
    },
    require('@tailwindcss/custom-forms')
  ]
}
