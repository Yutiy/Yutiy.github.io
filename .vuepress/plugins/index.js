const dayjs = require('dayjs')

module.exports = [
  require('./my-frontmatter/index.js'),
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ['whiteCat'],
      clean: true,
      modelStyle: {
        position: 'fixed',
        right: '40px',
        bottom: '0px',
        opacity: '0.9',
        zIndex: 99999
      }
    }
  ],
  '@vuepress-reco/vuepress-plugin-back-to-top',
  ['@vuepress/google-analytics', { ga: 'UA-124601890-2' }],
  [
    '@vuepress/last-updated',
    {
      transformer: timestamp => {
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  ],
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现页面有新内容',
        buttonText: '刷新'
      }
    }
  ],
  [
    'vuepress-plugin-comment',
    {
      clientID: '3cc86f34770ab7a66bb1',
      clientSecret: process.env.clientSecret || '',
      repo: 'Blog',
      owner: 'Yutiy',
      admin: ['Yutiy'],
      id: '<%- frontmatter.commentid || frontmatter.permalink %>', // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
      labels: ['Gitalk', 'Comment'],
      title: '「评论」<%- frontmatter.title %>',
      body:
        '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
    }
  ],
  ['vuepress-plugin-code-copy', true]
]
