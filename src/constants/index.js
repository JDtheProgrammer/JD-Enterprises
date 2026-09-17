import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  { name: "JD Nterprises", path: "/" },
  { name: "JD Productionz", path: "/JDProductionz" },
  { name: "PFT", path: "/pft" },
  { name: "About us", path: "/About" },
  { name: "Contact us", path: "/Contact" },
  { name: "Support us", path: "/Support" },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ["Introducing JD Productionz."],
    video: highlightFirstVideo,
    videoDuration: 5.2, //prev 4
  },
  {
    id: 2,
    textLists: ["JD Productionz.", " Audiovisuals to Enlighten"],
    video: highlightSecondVideo,
    videoDuration: 7.28, //prev 5
  },
  {
    id: 3,
    textLists: ["Purpose", "Fullfillment", "Trancendence"],
    video: highlightThirdVideo,
    videoDuration: 4, //prev 2
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 6, //prev 3.63
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
