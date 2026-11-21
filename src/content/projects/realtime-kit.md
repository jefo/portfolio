---
title: "Realtime Kit"
summary: "Четыре open-source пакета: ingest, SSE, UDF и Svelte-UI. 137 тестов."
category: engine
kind: "Open-source toolkit"
year: 2026
order: 1
status: "0.1.0 · репозиторий публичный"
stack: ["TypeScript", "Bun", "Svelte 5", "SSE", "WebSocket", "UDF"]
tests: "137 тестов"
repo: "https://github.com/jefo/realtime-kit"
cover: "shots/realtime-kit-terminal.png"
coverType: wide
accent: green
draft: false
---

## Что это

Четыре независимых пакета для real-time терминалов: нормализованный ingest
биржи, мультиплексированные SSE-подписки, UDF-сервер для своих данных и
Svelte-UI с таблицей, стаканом и спарклайном.

## Зачем

Терминал ломается не на графике, а на потоке: подписки, реконнекты, форматы
бирж, backpressure. Пакеты закрывают эту часть, оставляя продукту биллинг,
данные и фирменный стиль.

## Что проверяемо

- 137 тестов на границы протоколов, сортировку и математику стакана.
- Живой конвейер Binance WS → нормализация → SSE → браузер.
- Демо-график на своих данных без TradingView-библиотеки.
- Svelte-терминал с двумя темами, таблицей и стаканом.
- Ноль вендорских зависимостей и ноль runtime-зависимостей между пакетами.

## Статус

0.1.0, MIT. Репозиторий публичный; npm-публикация — следующий шаг.
