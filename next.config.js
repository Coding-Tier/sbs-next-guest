module.exports = {
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors https://www.hipandkneestepbystep.com/sbs-education",
            },
          ],
        }
      ]
    },
  }