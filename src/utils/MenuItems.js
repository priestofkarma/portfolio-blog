import React from "react"
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook, FaTelegram } from "react-icons/fa/";
import { GrInstagram } from "react-icons/gr/";

export const socialMenuItems = [
  {
    icon: <FaTelegram />,
    url: "https://t.me/priestofkarma",
    name: "Telegram",
  },
  {
    icon: <GrInstagram />,
    url: "https://www.instagram.com/karmasacrificer",
    name: "Instagram",
  },
  {
    icon: <GoMarkGithub />,
    url: "https://github.com/priestofkarma",
    name: "GitHub",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/petrenko.evg",
    name: "Facebook",
  },

]

// export const mainMenuItems = [
//   {
//     path: "/projects",
//     title: "проекты",
//   },
//   {
//     path: "/blog",
//     title: "Блог",
//   },
//   {
//     path: "/about",
//     title: "Обо мне",
//   },
// ]
