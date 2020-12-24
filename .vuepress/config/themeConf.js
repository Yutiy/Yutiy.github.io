const sidebar = require('./sidebar')

module.exports = {
  // 要部署的仓库名字
  base: '/',
  repo: 'https://github.com/Yutiy/Yutiy.github.io',
  navbar: true,
  docsBranch: 'docs',
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: '更新于',
  noFoundPageByTencent: false,

  sidebar,
  subSidebar: 'auto',

  // blogConfig: {
  //   category: {
  //     location: 6,
  //     text: '分类',
  //   },
  //   tag: {
  //     location: 7,
  //     text: '标签',
  //   }
  // },

  nav: [
    {
      text: '大前端',
      items: [
        { text: 'HTML', link: '/html/defer_async/' },
        { text: 'CSS', link: '/css/clear_float/' },
        { text: '性能优化', link: '/performance/' },
        {
          text: '前端基础',
          items: [
            { text: 'JavaScript深入系列', link: '/js_deep/prototype_chains/' },
            { text: 'JavaScript专题系列', link: '/js_topic/func_debounce/' },
            { text: 'ES6', link: '/es6/' },
            { text: 'Typescript', link: '/ts/' },
          ]
        },
        {
          text: '框架',
          items: [
            { text: 'Vue', link: '/vue/responsive/' },
            { text: 'React', link: '/react/hooks/' },
            { text: '小程序', link: '/miniprogram/' },
          ]
        },
        {
          text: '工具',
          items: [
            { text: 'Git', link: '/git/' },
            { text: 'Webpack', link: '/webpack/' },
            { text: 'Docker', link: '/docker/' }
          ]
        },
      ]
    },
    {
      text: '网络基础',
      items: [
        { text: 'TCP协议', link: '/tcp/' },
        { text: 'HTTP协议', link: '/http/' },
        { text: '前端安全', link: '/secure/xss/' },
      ]
    },
    {
      text: '自动化测试',
      items: [
        { text: 'PM2', link: '/pm2/' },
        { text: 'Jest', link: '/jest/' },
        { text: 'Jenkins', link: '/jenkins/' },
        { text: 'Gitlab', link: '/gitlab/' },
      ]
    },
    { text: '面试', link: '/interview/' },
    { text: '算法', link: 'http://leetcode.ytxcloud.com' },
    { text: '其他', link: 'http://other.ytxcloud.com' },
    { text: '关于我', link: '/about/' },
  ]
}
