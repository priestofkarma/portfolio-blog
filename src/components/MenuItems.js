import React from "react"

export const mainMenuItems = [
  {
    path: "/projects",
    title: "проекты",
  },
  {
    path: "/blog",
    title: "Блог",
  },
  {
    path: "/about",
    title: "Обо мне",
  },
]

export const socialMenuItems = [
  {
    // icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/morgan-baker-developer-inverness",
    name: "LinkedIn",
  },
  {
    // icon: <FaTwitter />,
    url: "https://www.twitter.com",
    name: "Twitter",
  },
  {
    // icon: <DiGithubBadge />,
    url: "https://github.com/bagseye",
    name: "GitHub",
  },
]

// вывести последние 3 проекта через query
// вывести последние 3 поста через query
export const footerMenuItems = [
  {
    firstLink: {
      path: "/projects",
      title: "Проекты"
    },
    externalLinks: [
      {
        path: "/melloul",
        title: "Melloul"
      },
      {
        path: "/flourent",
        title: "Flourent"
      },
    ]
  },
  {
    firstLink: {
      path: "/blog",
      title: "Блог"
    },

    externalLinks: [
      {
        path: "/first-post",
        title: "Первый пост"
      },
      {
        path: "/second-post",
        title: "Второй пост"
      },
    ]
  },
  {
    firstLink: {
      path: "/about",
      title: "Обо мне"
    },

    externalLinks: [
      {
        path: "/instruments",
        title: "Инструменты"
      },
      // {
      //   path: "/second-post",
      //   title: "Второй пост"
      // },
    ]
  },
  {
    firstLink: {
      path: "",
      title: "Соцсети"
    },

    externalLinks: [
      {
        path: "https://github.com/priestofkarma",
        title: "GitHub",
        target: "_blank"
      },
      {
        path: "https://t.me/priestofkarma",
        title: "Telegram",
        target: "_blank"
      },
      {
        path: "https://www.instagram.com/karmasacrificer/",
        title: "Instagram",
        target: "_blank"
      },
    ]
  },
]

