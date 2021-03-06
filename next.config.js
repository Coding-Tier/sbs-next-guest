const withImages = require('next-images')

module.exports = withImages({
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'self' https://www.hipandkneestepbystep.com/ https://discoverdrd.com/ https://www.discoverdrd.com/step-by-step-education/ https://sbs-guest.web.app/",
            },
          ],
        }
      ]
    },
    images: {
      disableStaticImages: true
    }
  })