import { adobeExpress, adobeIllustrator, adobepdf, ps } from "../assets";

export interface Service {
  name: string;
  desc: string;
  button: string;
  image: string
}

export interface News {
  name: string,
  desc: string,
  button: string
}


export interface Option {
  id: string;
  name: string;
  moreOptions: string[]
  hidden: boolean

}

export const services: Service[] = [
  {
    name: "Adobe Photoshop,powered by Firefly",
    desc: "Now with Generative Fill and Generative Expand,you can add,remove,or extend content in any image automagically",
    button: "Start free trial",
    image: ps
  },
  {
    name: "Adobe Express,powered by Firefly.",
    desc: "Get started with the all-in-one,content creation app and new generative AI features like Generative Fill,Text to Image, and Text to Template.",
    button: "Get Adobe Express free",
    image: adobeExpress
  },
];

export const services2: Service[] = [
  {
    name: "Adobe illustrator,powered by Firefly.",
    desc: "Transform text prompts into editable vector graphics with Text to Vector Graphic.",
    button: "Learn more",
    image: adobeIllustrator

  },
  {
    name: "Get it done with Acrobat.",
    desc: "Edit,share, and e-sign PDFs-all in one place.Acrobat's got it.",
    button: "Learn more",
    image: adobepdf

  },
]

export const news: News[] = [
  { name: "Announcing our first-ever Adobe Film & TV Fund.", desc: "Adobe grants aim to increase diversity in the entertainment industry.", button: "Read the story" },
  {
    name: "Introducing major audio updates in Premiere Pro.",
    desc: "Intuitive audio workflow debuts ahead of 2024 Sundance Film Festival",
    button: "Read the story"

  },
  {
    name: "Adobe recognized in TIME Best Inventions of 2023.",
    desc: "Photoshop generative AI features and Adobe Liquid Mode make TIME'S top 200.",
    button: "Read the story"
  }
]

export const options: Option[] = [
  {
    id: "shop for",
    name: "Shop for",
    moreOptions: [
      "Creative Cloud",
      "Photoshop",
      "Adobe Express",
      "Photography",
      "Premeire Pro",
      "Adobe Stock",
      "Elements Family",
      "Document Cloud",
      "Acrobat",
      "Acrobat Sign",
      "Special offers",
      "View plans and pricing",
      "View all products"
    ],
    hidden: true
  },
  {
    id: "for business",
    name: "For business",
    moreOptions: [
      "Creative Cloud for business",
      "Creative Cloud for enterprise",
      "Acrobat for Business",
    ],
    hidden: true
  },
  {
    id: "for education",
    name: "For education",
    moreOptions: [
      "Discounts for students and teachers",
      "Schools and universities",
      "Digital Learning Solutions",
    ],
    hidden: true
  },
  {
    id: "for mobile",
    name: "For mobile",
    moreOptions: [
      "Apps for ios",
      "Apps for Android",
    ],
    hidden: true
  },
  {
    id: "experience cloud",
    name: "Experience Cloud",
    moreOptions: [
      "What is Experience Cloud?",
      "Analytics",
      "Experience Manager",
      "Commerce",
      "Marketo Engage",
      "Workfront",
      "Terms of Use"
    ],
    hidden: true
  },
  {
    id: "support",
    name: "Support",
    moreOptions: [
      "Download and install",
      "Help Center",
      "Adobe Support Community",
      "Enterprise Support",
      "Genuine software"
    ],
    hidden: true
  },
  {
    id: "resources",
    name: "Resources",
    moreOptions: [
      "Adobe Blog",
      "Adobe Developer",
    ],
    hidden: true
  },
  {
    id: "Adobe Account",
    name: "Adobe Account",
    moreOptions: [
      "Log in to your account",
    ],
    hidden: true
  },
  {
    id: "adobe",
    name: "Adobe ",
    moreOptions: [
      "About",
      "Careers",
      "Newsroom",
      "Corporate responsibility",
      "Investor Relations",
      "Supply chain",
      "Trust Center",
      "Events",
      "Diversity and inclusion",
      "Integrity"
    ],
    hidden: true
  },




]
