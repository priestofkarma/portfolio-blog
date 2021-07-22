import React from "react"
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook, FaTelegram, FaPhoneSquareAlt } from "react-icons/fa/";
import { GrInstagram } from "react-icons/gr/";

export const socialMenuItems = [
  {
    icon: <FaPhoneSquareAlt />,
    url: "tel:+380632071229",
    name: "Telephone",
  },
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
