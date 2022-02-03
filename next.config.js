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
        },
        {
          source: '/news/:id',
          headers: [
            {
              key: 'X-News-Custom-Header',
              value: 'news_header_value',
            },
          ],
        },
      ]
    },
  }