import { i18n } from "@/lib/i18n-config";

export const resources = {
  [i18n.locales[0]]: {
    translation: {
      header: {
        title: "Demo Project",
        switch: "Switch to Russian",
        nav_home: "Home",
        nav_about: "About",
        login: "Login",
        logout: "Logout",
        loading: "Loading...",
      },
      home: {
        title: "Title (This page is for everyone)",
        block1: {
          title: "Performance",
          text: "Next.js applications are fast ",
        },
        block2: {
          title: "Design",
          text: "Tailwind CSS allows you to rapidly build ",
        },
        block3: {
          title: "Type Safety",
          text: "TypeScript ensures your code is easy to maintain",
        },
      },
      about: {
        title: "This page is for authorized only!",
        block1: {
          title: "Mission",
          text: "Our mission is to build ",
        },
        block2: {
          title: "Team",
          text: "We are a team of developers ",
        },
        block3: {
          title: "Technology",
          text: "React, Next.js TypeScript for development.",
        },
      },
    },
  },
  [i18n.locales[1]]: {
    translation: {
      header: {
        title: "Демо Проект",
        switch: "Переключить на Английский",
        nav_home: "Главная",
        nav_about: "О нас",
        login: "Вход",
        logout: "Выход",
        loading: "Загрузка...",
      },
      home: {
        title: "Титул (страница общедоступна)",
        block1: {
          title: "Производительность",
          text: "Приложения на Next.js невероятно быстрые",
        },
        block2: {
          title: "Дизайн",
          text: "Tailwind CSS позволяет быстро создавать современные сайты",
        },
        block3: {
          title: "Типизация",
          text: "TypeScript гарантирует надежность кода",
        },
      },
      about: {
        title: "Титул (страница только для авторизованного пользователя)",
        block1: {
          title: "Миссия",
          text: "Наша миссия — создание чего-то",
        },
        block2: {
          title: "Команда",
          text: "Мы — команда разработчиков.",
        },
        block3: {
          title: "Технологии",
          text: "Использование React, Next.js и TypeScript для разработки.",
        },
      },
    },
  },
} as const;
