const withImages = require('next-images')

module.exports = withImages({
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'self' https://www.hipandkneestepbystep.com/",
            },
          ],
        }
      ]
    },
    images: {
      disableStaticImages: true
    }
  })