module.exports = {
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'none'",
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