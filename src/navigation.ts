import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '产品中心 / Products',
      links: [
        {
          text: '12V 夹子充电器 / Clip Charger',
          href: '/#products',
        },
        {
          text: '12V 鳄鱼夹充电器 / Alligator Clip Charger',
          href: '/#gallery',
        },
      ],
    },
    {
      text: 'OEM/ODM定制',
      href: '/#oem',
    },
    {
      text: '工厂实力',
      href: '/#factory',
    },
    {
      text: '关于我们',
      href: '/about',
    },
    {
      text: '联系我们',
      href: '/contact',
    },
  ],
  actions: [{ text: '获取报价 / Get Quote', href: '/contact', icon: 'tabler:send' }],
};

export const footerData = {
  links: [
    {
      title: '产品中心 / Products',
      links: [
        { text: '12V 夹子充电器 / Clip Charger', href: '/#products' },
        { text: '12V 鳄鱼夹充电器 / Alligator Clip Charger', href: '/#gallery' },
      ],
    },
    {
      title: '解决方案 / Solutions',
      links: [
        { text: 'OEM/ODM 定制', href: '/#oem' },
        { text: '工厂与品控', href: '/#factory' },
        { text: 'CE/RoHS 认证', href: '/#certifications' },
        { text: '常见问题', href: '/#faqs' },
      ],
    },
    {
      title: '公司 / Company',
      links: [
        { text: '关于我们', href: '/about' },
        { text: '联系我们', href: '/contact' },
        { text: '服务条款', href: '/terms' },
        { text: '隐私政策', href: '/privacy' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '服务条款', href: '/terms' },
    { text: '隐私政策', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: '邮箱', icon: 'tabler:mail', href: 'mailto:317073043@qq.com' },
    { ariaLabel: '微信', icon: 'tabler:message-circle', href: 'weixin://dl/chat?15914376302' },
  ],
  footNote: `
    © ${new Date().getFullYear()} 中山市战神电器有限公司 · Zhongshan FocusPower Electric Co., Ltd. · 版权所有
  `,
};
