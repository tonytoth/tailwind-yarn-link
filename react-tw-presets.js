module.exports = {
    theme: {
        zIndex: {
            0: 0,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
            9999: 9999,
          },
          extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}