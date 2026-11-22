# jefo / portfolio

Личное портфолио: кто я, какие услуги делаю и карточки публичных проектов.

**Live:** https://jefo.github.io/portfolio/

## Стек

- Astro 7, статический output
- Tailwind CSS 4
- Content collections для карточек проектов
- Literata / Inter Tight / JetBrains Mono
- Без аналитики, трекеров и бэкенда

## Локально

```bash
bun install
bun run dev
```

Сайт откроется на `http://localhost:4321/portfolio/` — `base` задан в `astro.config.mjs`.

```bash
bun run build
bun run preview
```

Сборка кладётся в `docs/` и коммитится: GitHub Pages отдаёт её из ветки `master`, папка `/docs`.

> Pages у репозитория нужно включить один раз: **Settings → Pages → Deploy from a branch → `master` / `/docs`**. До этого `https://jefo.github.io/portfolio/` отвечает 404.

## Структура

```text
src/
├── components/          hero, услуги, проекты, контакт
├── content/projects/    по одному .md на проект
├── data/site.ts         имя, контакты, услуги, процесс
├── layouts/BaseLayout.astro
├── pages/index.astro
├── pages/cases/         отдельные разборы проектов
└── styles/global.css    токены, типографика, движение
```

## Карточка проекта

Один файл — одна карточка: `src/content/projects/<slug>.md`. Схема описана в `src/content.config.ts`.

```yaml
---
title: "Booking Domain"
summary: "DDD-ядро бронирования: агрегат, слоты, отмена и защита от двойной записи. 8 тестов."
category: domain          # bot | engine | domain
kind: "Доменное ядро"     # подпись на обложке
year: 2026
order: 11                 # порядок в сетке
status: "библиотека · 8 тестов"
stack: ["TypeScript", "Bun", "Zod", "SotaJS"]
tests: "8 тестов"         # необязательно; если есть, заменяет status в подвале
repo: "https://github.com/jefo/booking-domain"
caseUrl: "https://jefo.github.io/booking-domain/"  # или /cases/<slug>/
cover: "shots/booking-domain.png"   # необязательно
coverType: wide           # phone | wide
accent: green             # signal | blue | green
featured: false
draft: false
---

Свободный текст карточки. На главной не выводится, но пригодится для detail-страницы.
```

Если `cover` не указан, обложка собирается типографикой: номер, цвет и первая буква названия. Это нормальный режим, а не заглушка.

### Контракт для ИИ

Карточку можно сгенерировать, но факты нужно брать из репозитория. Промпт:

```text
Сгенерируй frontmatter для карточки проекта jefo/<repo>.
Используй только факты из README, package.json, тестов и docs/.
Не придумывай клиентов, метрики, выручку и production-статус.
Если проект — прототип, PoC или демо, напиши это в status.
summary — одно предложение, до 120 символов, без маркетингового тона.
stack — до 4 пунктов.
tests — только реальное число из вывода тестов.
Ответь только YAML frontmatter и одним абзацем описания.
```

После генерации проверь:

- `caseUrl` отвечает `200`;
- `repo` существует;
- число тестов совпадает с `bun test`;
- `cover` ведёт на реальный скриншот, если он есть.

## Контент

- Тексты — в `src/data/site.ts`.
- Проекты — в `src/content/projects/`.
- Порядок и фильтры считаются из `order` и `category`.
- Никаких выдуманных цифр: только код, тесты и явные ограничения.

## Деплой

```bash
bun run build
git add docs src public
git commit -m "Update portfolio"
git push
```

В настройках репозитория: **Settings → Pages → Build and deployment → Deploy from a branch → `master` / `/docs`**.

Если сайт переезжает на корневой домен, поменяйте `base` в `astro.config.mjs` на `/` и пересоберите.
