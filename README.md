# GlacierGuide

Проект, который поможет людям решить проблему с запасами продуктов вполюсе холода

## Стек, технологии и основные пакеты

- NodeJS
- Nuxt 3 (Vue.JS 3)
- TailwindCSS
- MongoDB(mongoose)
- VitePWA

## Планируемый функционал

- Учет продуктов(добавление/изменение/удаление)
- Создание рецептов и возможность делиться ими с другими пользователями
- Создание списков покупок, быстрое создание списков покупок из рецептов
- Предложение рецептов на основе имеющихся продуктов

## Сборка и запуск (Только с Linux или через Git Bash)

1. Скопируйте репозиторий
2. Выполните команду `npm i`
3. Выполните команду `npm run build`
4. Выполните команду `NUXT_PUBLIC_MONGODB_URI=<mongoconnectionURI> NUXT_SESSION_PASSWORD=<passwordMoreThan32characters> node .output/server/index.mjs`
5. Приложение всегда стартует на порту 3000, в будущем планируется добавить возможность менять порт

