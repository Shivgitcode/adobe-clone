import { adobeExpress, ps } from "../assets";

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
