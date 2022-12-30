import LandingView from "../components/views/LandingView";

const DATA = {
  modal: {
    formAction: "",
  },
  seo: {
    title: "WatchFly Early Access",
    description: "WatchFly Early Access - Get on the Beta Waitlist now",
    url: "",
    siteImgAlt: "",
    siteImgSrc: "",
  },
  hero: {
    heading: "Willy's Wondrous World",
    topheading: "Discover the World of",
    description:
      "Follow the adventures of Willy, a curious 6 year old boy, and his sister Willow, a playful 4 year old, as they explore the wonders of the world and learn about everything from ancient civilizations to the mysteries of the cosmos.",
    imageSrc: "/images/app/phone-1.png",
    modal: {
      btnOpen: "Join Our (Beta)-Access Waitlist",
      btnConfirm: "Sign Me Up For Early Access!",
      heading: "Join Our (Beta)-Access Waitlist",
    },
  },
  benefits: {
    heading:
      "Welcome to Willy and Willow's World of Learning!",
    benefits: [
      {
        heading: "Entertaining and Educational!",
        description:
          "With a variety of age-appropriate content that includes topics like space, oceans, dinosaurs, and history, your children will be entertained for hours on end as they explore the wonders of the world.",
      },
      {
        heading: "Develops important skills",
        description:
          "With interactive paths that let kids decide how Willy and Willos story develops, they'll be strengthening their curiosity and problem-solving skills along the way.",
      },
    ],
  },
  values: {
    heading: "join the Beta-access waitlist now",
    subheading:
      "Don't miss out on the chance to be a part of something big",
    values: [
      {
        heading: "Join the ranks of satisfied parents",
        description:
          "Ready to join the ranks of satisfied parents whose children are learning and having fun with Willy and Willow's World of Learning? Don't wait – sign up for the Beta-access waitlist now!",
      },
      {
        heading: "The Smart Way to Make More Money",
        description:
          "You'll be among the first to access the game once it becomes available. You'll have the chance to try out all of the exciting features and educational content, and provide valuable feedback to help us make the game even better.",
      },
      {
        heading: "Join the Beta-access waitlist",
        description:
          "Join the Beta-access waitlist for Willy and Willow's World of Learning now! As a member, you'll be among the first to take a sneak peek at the game and provide valuable feedback to help us make it even more amazing.",
      },
    ],
  },
  features: [
    {
      category: "Fun & Educational",
      heading: "Fun and Educational",
      description:
        "With colorful graphics and interactive gameplay, Willy and Willow's World of Learning keeps your children entertained while they learn about the world around them. Plus, with a variety of age-appropriate content, your children will be able to progress at their own pace and continue to learn and grow as they play.",
      imageSrc: "/bg-jungle.png",
      isLeft: false,
      modal: {
        btnOpen: "Join Our (Beta)-Access Waitlist",
        btnConfirm: "Sign Me Up For Early Access!",
        heading: "Join Our (Beta)-Access Waitlist",
        description: "",
      },
    },
    {
      category: "Deeper Insights",
      heading: "See Your Child's Learning Progress Unfold",
      description:
        "But don't just take our word for it – the proof is in the progress. With a variety of age-appropriate content and the ability to track your child's progress, you'll see firsthand just how much they're learning as they play. And as a parent, you can feel good knowing that you're providing your children with a fun and educational activity that will keep them coming back for more.",
      imageSrc: "/tree.png",
      isLeft: true,
      modal: {
        btnOpen: "Join Our (Beta)-Access Waitlist",
        btnConfirm: "Sign Me Up For Early Access!",
        heading: "Join Our (Beta)-Access Waitlist",
        description: "",
      },
    },
    {
      category: "Always Engaging",
      heading: "Engaging and Exciting",
      description:
      "Keep your children engaged and excited to learn with Willy and Willow's World of Learning – a game that never gets boring or repetitive!",
      imageSrc: "/t-rex.png",
      isLeft: false,
      modal: {
        btnOpen: "Join Our (Beta)-Access Waitlist",
        btnConfirm: "Sign Me Up For Early Access!",
        heading: "Join Our (Beta)-Access Waitlist",
        description: "",
      },
    },
  ],
  testimonial: {
    content:
      "I was struggling to find good trading opportunities and keep track of all the latest news. But this app has solved all of that for me. I'm now able to focus on what I'm good at - making profitable trades!",
    name: "Gregg Devin",
    description: "Early Adopter",
  },
  statistics: [
    { number: "2.7", unit: "K", label: "Users" },
    { number: "2", unit: "K", label: "Users" },
    { number: "2", unit: "K", label: "Users" },
    { number: "2", unit: "K", label: "Users" },
  ],
  cta: {
    heading: "Ready to join the ranks of satisfied parents?",
    description:
      "But don't wait – spots on the waitlist are filling up fast, and you don't want to be left behind as Willy and Willow embark on their epic journey of learning and discovery. So what are you waiting for? Sign up now and get ready to have a blast (while also learning some cool stuff, of course). Your kids will thank you for it.",
      modal: {
        btnOpen: "Join Our (Beta)-Access Waitlist",
        btnConfirm: "Sign Me Up For Early Access!",
        heading: "Join Our (Beta)-Access Waitlist",
        description: "",
      },
  },
};

export default function Home() {

  return (
    <LandingView DATA={DATA} />
  );
}
