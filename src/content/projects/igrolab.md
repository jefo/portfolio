---
title: "ИгроЛаба"
summary: "Инженерный журнал: 99 страниц, 123 карточки KB, 20 narrative arcs и QA-гейты. 225F — 52/52 факта; 9950X — QA остановил публикацию."
category: engine
kind: "AI content operations"
year: 2026
order: 2
status: "Live · 99 страниц"
stack: ["Astro 6", "Svelte 5", "Python", "YAML", "LLM"]
tests: "20 arc maps · 4 QA-отчёта"
caseUrl: "/cases/igrolab"
cover: "shots/igrolab-issue.png"
coverType: wide
accent: signal
featured: false
draft: false
---

## Что это

Русскоязычный инженерный журнал о PC-железе: обзоры компонентов, разборы
сборок с маркетплейсов, лонгриды о механике и кейсы принятия решений.

## Зачем

Контент о железе легко скатывается в «топ за свои деньги». Здесь единица
работы — не статья, а проверенное решение: KB-карточка, narrative arc, QA-манифест,
brief, страница. Читатель получает не вердикт, а способ думать.

## Что проверяемо

- 99 страниц, 214 Svelte- и 307 Astro-компонентов, 14 layouts.
- 123 карточки в KB, 97 с поведенческими профилями.
- 20 narrative arcs, 6 writer briefs, 4 QA-отчёта.
- 225F: 52/52 факта, 0 ошибок — материал опубликован.
- 9950X: 1 FAIL, 2 CRITICAL, 4 HIGH, 6 MEDIUM — материал остановлен.
- RTX 5060 Ti: 16 утверждений, 2+ источника, 6 WARN; провенанс виден на странице.
- PCBO: 14 детерминированных проверок сборки, fail closed.

## Статус

Live: `https://pekaboyare.ru`. Публичная часть метода — KB и PCBO; сайт и
редакционные артефакты остаются в рабочем контуре.
