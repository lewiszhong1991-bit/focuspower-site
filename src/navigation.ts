import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        {
          text: '12V Alligator Clip Chargers',
          href: '/#gallery',
        },
        {
          text: 'Lead-Acid Battery Chargers',
          href: '/#products',
        },
        {
          text: '12.6V Lithium Chargers',
          href: '/#products',
        },
        {
          text: 'Solar & Outdoor Chargers',
          href: '/#products',
        },
      ],
    },
    {
      text: 'OEM / ODM',
      href: '/#oem',
    },
    {
      text: 'Factory',
      href: '/#factory',
    },
    {
      text: 'About Us',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Get a Quote', href: '/contact', icon: 'tabler:send' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: '12V Alligator Clip Chargers', href: '/#gallery' },
        { text: 'Lead-Acid Battery Chargers', href: '/#products' },
        { text: '12.6V Lithium Chargers', href: '/#products' },
        { text: 'Solar & Outdoor Power', href: '/#products' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'OEM / ODM Customization', href: '/#oem' },
        { text: 'Factory & QC', href: '/#factory' },
        { text: 'Certifications (CE / RoHS)', href: '/#certifications' },
        { text: 'FAQ', href: '/#faqs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Terms', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:317073043@qq.com' },
    { ariaLabel: 'WeChat', icon: 'tabler:message-circle', href: 'weixin://dl/chat?15914376302' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Zhongshan FocusPower Electric Co., Ltd. · All rights reserved.
  `,
};
