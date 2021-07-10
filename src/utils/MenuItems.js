// import React from "react"

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
    // icon: <FaTwitter />,
    url: "https://t.me/priestofkarma",
    name: "Telegram",
  },
  {
    // icon: <DiGithubBadge />,
    url: "https://www.instagram.com/karmasacrificer",
    name: "Instagram",
  },
  {
    // icon: <FaLinkedin />,
    url: "https://github.com/priestofkarma",
    name: "GitHub",
  },
  {
    // icon: <FaLinkedin />,
    url: "https://www.facebook.com/petrenko.evg",
    name: "Facebook",
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
]

