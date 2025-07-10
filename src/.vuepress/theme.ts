import { hopeTheme } from 'vuepress-theme-hope';

export default hopeTheme({
  darkmode: 'toggle',
  fullscreen: true,
  author: {
    name: 'Mr.Wyix',
    url: 'https://wyixzh.github.io/',
  },

  favicon: '/favicon.ico',
  logo: '/logo.svg',

  repo: 'wyixzh/wyixzh.github.io.git',
  docsDir: 'docsystem/src',
  docsBranch: 'main',
  // hotReload: true,
  lastUpdated: true,
  contributors: true,
  editLink: true,
  changelog: true,

  navbarLayout: {
    start: ['Brand', 'Search'],
    center: [],
    end: ['Links', 'Language', 'Repo', 'Outlook'],
  },

  locales: {
    '/': {
      footer:
        '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://mister-hope.com/about/site.html" target="_blank">关于网站</a>',

      copyright: '基于 MIT 协议，© 2019-至今 Mr.Hope',

      blog: {
        description: '理论物理硕士在读，前端开发者，开源项目贡献者',
        intro: '/about/',
        medias: {
          GitHub: 'https://github.com/Mister-Hope',
          BiliBili: 'https://space.bilibili.com/630395917',
          QQ: 'http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes',
          Qzone: 'https://1178522294.qzone.qq.com/',
          Gmail: 'mailto:mister-hope@outlook.com',
          Zhihu: 'https://www.zhihu.com/people/mister-hope',
          Steam: 'https://steamcommunity.com/id/Mr-Hope/',
          Weibo: 'https://weibo.com/misterhope',
          Gitee: 'https://gitee.com/Mister-Hope',
          Twitter: 'https://twitter.com/Mister_Hope',
          Telegram: 'https://t.me/Mister_Hope',
        },
      },
    },
  },

  plugins: {
    blog: true,
    slimsearch: true,
    icon: {
      prefix: 'fa6-solid:',
      assets: 'fontawesome-with-brands',
    },
    // backToTop: {
    //   threshold: 100,
    //   progress: true,
    // },
    comment: {
      provider: 'Waline',
      serverURL: 'https://vercel-seven-jade-80.vercel.app/', // your server url
    },
  },
});
