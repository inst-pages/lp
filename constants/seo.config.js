import { siteDescription, siteTitle, siteUrl, twitterHandle } from "./meta";

export default {
  titleTemplate: siteTitle + " | %s",
  defaultTitle: siteTitle,
  description: siteDescription,
  canonical: "",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    site_name: siteTitle,
    images: [
      {
        url: "/thumbnail.jpg",
        width: 800,
        height: 600,
        alt: "TL;DR Crypto",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: "summary_large_image",
  },
};
