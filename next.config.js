const withImages = require('next-images')

module.exports = withImages({
    async headers() {
      return [
        {
          source: '/',
          // headers: [
          //   {
          //     key: 'Content-Security-Policy',
          //     value: "frame-ancestors https://www.hipandkneestepbystep.com/sbs-education",
          //   },
          // ],
        }
      ]
    },
    images: {
      disableStaticImages: true
    }
  })