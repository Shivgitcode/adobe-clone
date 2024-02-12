import { adobeExpress, adobeIllustrator, adobepdf, ps } from "../assets";

export interface Service {
  name: string;
  desc: string;
  button: string;
  image: string
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
