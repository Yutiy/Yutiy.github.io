const { mdConf, themeConf } = require('./config/')

module.exports = {
  theme: 'reco',

  title: `Yutiy's Blog`,
  description: 'Learn Web Development Together',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'theme-color', content: '#4b8bf5' }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent'
      }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }
    ]
  ],
  port: '8888',

  markdown: mdConf,

  themeConfig: themeConf,

  plugins: require('./plugins/'),
}
