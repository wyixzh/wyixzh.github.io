import { defineUserConfig } from 'vuepress';

import theme from './theme.js';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Mr.Wyix',
  description: '小狐狸文档系统',
  open: false,
  port: 9000,
  head: [['script', { src: 'https://unpkg.com/@fortawesome/fontawesome-free@6/js/all.min.js' }]],

  theme,
});
