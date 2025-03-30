import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://mndn.dev/",
  author: "Kazuto Nishio",
  profile: "https://mndn.dev/",
  desc: "Cooooooooooming soon",
  title: "minibit4",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/mndn-bit/portfolio-v1/tree/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: false,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 256,
  height: 256,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/mndn-bit",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/m1n1don",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.gg/M6wxRN2btD",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:here@mndn.jp",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Instagram",
    href: "",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
];
