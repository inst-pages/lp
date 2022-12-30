import {
  instagramProfile,
  redditProfile,
  telegramProfile,
  tiktokProfile,
  twitterProfile,
  youtubeProfile,
} from "./meta";
import {
  routeBlog,
  routeCoins,
  routeContact,
  routeExchanges,
  routeFaq,
  routeHome,
  routeKnowledgebase,
  routeLegalCookies,
  routeLegalPrivacy,
  routeLegalTerms,
  routeNews,
  routeWallets,
} from "./routes";

export const Icons = {
  instagram: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2476 2476"
    >
      <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5" />
    </svg>
  ),
  youtube: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <path d="M234.33057,69.79736a23.96369,23.96369,0,0,0-14.50489-16.34619C185.55615,40.28223,130.97949,40.39209,128,40.40771c-2.978-.02392-57.55518-.126-91.8252,13.04346A23.96415,23.96415,0,0,0,21.66992,69.79639C19.083,79.72705,16,97.88574,16,128c0,30.11377,3.083,48.27246,5.66943,58.20264a23.96369,23.96369,0,0,0,14.50489,16.34619c32.80615,12.60693,84.22168,13.04541,91.167,13.04541.6206.00049.69678.00049,1.31738,0,6.95069-.00049,58.36231-.43945,91.16651-13.04541a23.96415,23.96415,0,0,0,14.50488-16.34522C236.917,176.273,240,158.11426,240,128,240,97.88623,236.917,79.72754,234.33057,69.79736Zm-72.11182,61.53076-48,32A3.99967,3.99967,0,0,1,108,160V96a3.99968,3.99968,0,0,1,6.21875-3.32813l48,32a3.99979,3.99979,0,0,1,0,6.65625Z" />
    </svg>
  ),
  discord: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <circle cx="96" cy="144" r="12" />
      <circle cx="160" cy="144" r="12" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M74.4017 80A175.32467 175.32467 0 0 1 128 72a175.32507 175.32507 0 0 1 53.59754 7.99971M181.59717 176.00041A175.32523 175.32523 0 0 1 128 184a175.32505 175.32505 0 0 1-53.59753-7.99971"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M155.04392 182.08789l12.02517 24.05047a7.96793 7.96793 0 0 0 8.99115 4.20919c24.53876-5.99927 45.69294-16.45908 61.10024-29.85086a8.05225 8.05225 0 0 0 2.47192-8.38971L205.65855 58.86074a8.02121 8.02121 0 0 0-4.62655-5.10908 175.85294 175.85294 0 0 0-29.66452-9.18289 8.01781 8.01781 0 0 0-9.31925 5.28642l-7.97318 23.91964M100.95624 182.08757l-12.02532 24.0508a7.96794 7.96794 0 0 1-8.99115 4.20918c-24.53866-5.99924-45.69277-16.459-61.10006-29.85069a8.05224 8.05224 0 0 1-2.47193-8.38972L50.34158 58.8607a8.0212 8.0212 0 0 1 4.62655-5.1091 175.85349 175.85349 0 0 1 29.66439-9.18283 8.0178 8.0178 0 0 1 9.31924 5.28642l7.97318 23.91964"
      />
      <circle cx="96" cy="144" r="12" />
      <circle cx="160" cy="144" r="12" />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M74.4017 80A175.32467 175.32467 0 0 1 128 72a175.32507 175.32507 0 0 1 53.59754 7.99971M181.59717 176.00041A175.32523 175.32523 0 0 1 128 184a175.32505 175.32505 0 0 1-53.59753-7.99971"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M155.04392 182.08789l12.02517 24.05047a7.96793 7.96793 0 0 0 8.99115 4.20919c24.53876-5.99927 45.69294-16.45908 61.10024-29.85086a8.05225 8.05225 0 0 0 2.47192-8.38971L205.65855 58.86074a8.02121 8.02121 0 0 0-4.62655-5.10908 175.85294 175.85294 0 0 0-29.66452-9.18289 8.01781 8.01781 0 0 0-9.31925 5.28642l-7.97318 23.91964M100.95624 182.08757l-12.02532 24.0508a7.96794 7.96794 0 0 1-8.99115 4.20918c-24.53866-5.99924-45.69277-16.459-61.10006-29.85069a8.05224 8.05224 0 0 1-2.47193-8.38972L50.34158 58.8607a8.0212 8.0212 0 0 1 4.62655-5.1091 175.85349 175.85349 0 0 1 29.66439-9.18283 8.0178 8.0178 0 0 1 9.31924 5.28642l7.97318 23.91964"
      />
    </svg>
  ),
  telegram: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" />
    </svg>
  ),
  facebook: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
  twitter: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <path d="M245.65723,77.65674,215.9541,107.35938c-.79785,29.35644-12.00293,57.9873-31.02148,79.00781C162.65723,210.98682,131.90527,224,96,224c-34.91211,0-52.9082-17.59424-53.65723-18.34326a8.00012,8.00012,0,0,1,4.07911-13.49951c8.53808-1.7295,29.73144-8.46534,38.75-20.60547a92.9624,92.9624,0,0,1-25.34766-21.46631c-25.0918-30.46924-24.56006-68.75977-19.69531-95.5166a8.00018,8.00018,0,0,1,14.11816-3.56641C54.522,51.34424,80.81543,83.55713,120,94.08105V88.00293a48.31855,48.31855,0,0,1,48.6084-47.99951,48.11329,48.11329,0,0,1,40.96875,23.99609L240,64a8.0001,8.0001,0,0,1,5.65723,13.65674Z" />
    </svg>
  ),
  linkedin: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 5 1036 990"
    >
      <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
    </svg>
  ),
  tiktok: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 64 64"
    >
      <path fill="none" d="M0 0h64v64H0z" />
      <path d="M33 6.001a1 1 0 0 0-1 1v36c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1c-8.28 0-15 6.721-15 15 0 8.28 6.72 15 15 15 8.279 0 15-6.72 15-15V24.495a16.927 16.927 0 0 0 7 1.506h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2c-3.863 0-7-3.137-7-7v-2a1 1 0 0 0-1-1h-8Z" />
    </svg>
  ),
  reddit: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none" />
      <circle
        cx="188"
        cy="32"
        r="16"
        fill="none"
        stroke="#000"
        className="stroke-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        className="stroke-current"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M161.026,176.00058a72.17425,72.17425,0,0,1-66.05159.0002"
      />
      <polyline
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        points="128 72 136 24 172.185 29.567"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M59.408,89.87843C77.71654,78.7483,101.71994,72,128,72s50.28346,6.7483,68.592,17.87843l-.00129.00213a24.002,24.002,0,1,1,31.61564,34.788l.002-.00083A51.61606,51.61606,0,0,1,232,144c0,39.7645-46.56239,72-104,72S24,183.7645,24,144a51.61624,51.61624,0,0,1,3.79162-19.3323l.00206.00082a24.00228,24.00228,0,1,1,31.61564-34.788Z"
      />
      <circle cx="88" cy="132" r="16" />
      <circle cx="168" cy="132" r="16" />
    </svg>
  ),
  medium: () => (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 195 195"
    >
      <g fill="none">
        <path fill="#12100e" d="M0 0h195v195H0z" />
        <path
          fill="#fff"
          d="M46.534 65.216a5.074 5.074 0 0 0-1.651-4.28L32.65 46.2V44h37.98l29.355 64.381L125.795 44H162v2.201l-10.458 10.027a3.057 3.057 0 0 0-1.162 2.935v73.674a3.057 3.057 0 0 0 1.162 2.935l10.213 10.027V148h-51.372v-2.201l10.58-10.272c1.04-1.04 1.04-1.345 1.04-2.934V73.042l-29.417 74.713H88.61L54.362 73.042v50.074a6.908 6.908 0 0 0 1.896 5.747l13.76 16.691v2.201H31v-2.2l13.76-16.692a6.663 6.663 0 0 0 1.774-5.747z"
        />
      </g>
    </svg>
  ),
};

export const navigationMain = [
  {
    name: "News & Articles",
    tooltip: "",
    route: routeBlog,
    published: true,
    isMegaMenu: false,
    children: null,
  },
  {
    name: "News",
    tooltip: "",
    route: routeNews,
    published: false,
    isMegaMenu: false,
    children: null,
  },
  {
    name: "Knowledge Base",
    tooltip: "",
    route: routeKnowledgebase,
    published: true,
    isMegaMenu: true,
    children: [
      {
        name: null,
        type: "ul",
        children: [
          {
            name: "Exchanges",
            tooltip: "A place that helps people trade digital money for other things, like regular money or other digital money.",
            route: routeKnowledgebase + routeExchanges,
            published: true,
            children: null,
          },
          {
            name: "Wallets",
            tooltip: "A device that stores the keys for cryptocurrency transactions. It often offers to encrypt and/or sign information.",
            route: routeKnowledgebase + routeWallets,
            published: true,
            children: null,
          },
          {
            name: "Coins",
            tooltip: "A kind of digital money that uses secret codes to work like regular money. You can use it to buy things online the same way you use regular money.",
            route: routeKnowledgebase + routeCoins,
            published: false,
            children: null,
          },
        ],
      },
      {
        name: null,
        type: "ul",
        children: [
          
        ],
      },
      {
        name: null,
        type: "cta",
        children: [
          {
            title: "Exchanges",
            subtitle: "Lorem Ipsum",
            label: "Get Started",
            imageSrc: "",
            route: routeExchanges,
            published: false,
            children: null,
          },
        ],
      },
    ],
  },
  {
    name: "Knowledge Base2",
    tooltip: "",
    route: routeKnowledgebase,
    published: false,
    isMegaMenu: true,
    children: [
      {
        name: null,
        type: "ul",
        children: [
          {
            name: "Exchanges2",
            tooltip: "Lorem Ipsum",
            route: routeExchanges,
            published: true,
            children: null,
          },
          {
            name: "Wallets",
            tooltip: "Lorem Ipsum",
            route: routeContact,
            published: false,
            children: null,
          },
          {
            name: "Coins",
            tooltip: "Ipsum",
            route: routeContact,
            published: false,
            children: null,
          },
        ],
      },
      {
        name: null,
        type: "ul",
        children: [
          
        ],
      },
      {
        name: null,
        type: "cta",
        children: [
          {
            title: "Exchanges",
            subtitle: "Lorem Ipsum",
            label: "Get Started",
            imageSrc: "",
            route: routeExchanges,
            published: true,
            children: null,
          },
        ],
      },
    ],
  },
  {
    name: "Contact",
    tooltip: "",
    route: routeContact,
    published: false,
    isMegaMenu: false,
    children: null,
  },
];

export const sociallinks = [
  {
    name: "YouTube",
    route: youtubeProfile,
    logo: Icons.youtube,
  },
  {
    name: "Telegram",
    route: telegramProfile,
    logo: Icons.telegram,
  },
  /*
  {
    name: "TikTok",
    route: tiktokProfile,
    logo: () => (
      <svg
        className="w-5 h-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path d="M38.4,21.68V16c-2.66,0-4.69-.71-6-2.09a8.9,8.9,0,0,1-2.13-5.64V7.86L24.9,7.73s0,.23,0,.54V30.8a5,5,0,1,1-3.24-5.61v-5.5a10.64,10.64,0,0,0-1.7-.14A10.36,10.36,0,1,0,30.32,29.91a10.56,10.56,0,0,0-.08-1.27V19.49A14.48,14.48,0,0,0,38.4,21.68Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    route: instagramProfile,
    logo: () => (
      <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="32"/><path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05436,48.05436,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"/></svg>
    ),
  },
  {
    name: "Reddit",
    route: redditProfile,
    logo: () => (
      <svg
        className="w-5 h-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none" />
        <path d="M248,104a31.99228,31.99228,0,0,0-52.9375-24.19043c-16.75439-8.90112-36.76172-14.279-57.666-15.52539l5.19581-31.17578,21.83105,3.3584a24.00409,24.00409,0,1,0,2.43506-15.814l-29.64209-4.56006a7.996,7.996,0,0,0-9.10742,6.5918l-6.91309,41.478c-21.83887.94165-42.813,6.37891-60.2583,15.647a31.99266,31.99266,0,0,0-42.59229,47.74024A59.04669,59.04669,0,0,0,16,144c0,21.93457,12.042,42.35156,33.90723,57.48926C70.875,216.00588,98.60938,224,128,224s57.125-7.99414,78.09277-22.51074C227.958,186.35158,240,165.93459,240,144a59.01726,59.01726,0,0,0-2.3457-16.44922A32.17163,32.17163,0,0,0,248,104ZM72,132a16,16,0,1,1,16,16A16.01833,16.01833,0,0,1,72,132Zm92.69629,51.10938a80.122,80.122,0,0,1-73.39209,0,8,8,0,0,1,7.34033-14.2168,64.09433,64.09433,0,0,0,58.71094,0,8.00008,8.00008,0,0,1,7.34082,14.2168ZM168,148a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,168,148Z" />
      </svg>
    ),
  },*/
  {
    name: "Twitter",
    route: twitterProfile,
    logo: Icons.twitter,
  },
];

export const footerMenu = [
  {
    published: false,
    title: "Articles",
    children: [
      { name: "Crypto", route: routeLegalTerms },
      { name: "NFT", route: routeLegalPrivacy },
    ],
  },
  {
    published: true,
    title: "Legal",
    children: [
      { name: "Terms and Conditions", route: routeLegalTerms },
      { name: "Privacy Policy", route: routeLegalPrivacy },
    ],
  },
];
