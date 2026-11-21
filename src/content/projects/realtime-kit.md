---
title: "Realtime Kit"
summary: "Три open-source пакета: SSE-подписки, UDF-datafeed и ingest биржи. 107 тестов."
category: engine
kind: "Open-source toolkit"
year: 2026
order: 1
status: "0.1.0 · готов к публикации"
stack: ["TypeScript", "Bun", "SSE", "WebSocket", "UDF"]
tests: "107 тестов"
repo: "https://github.com/jefo/realtime-kit"
cover: "shots/realtime-kit.png"
coverType: wide
accent: green
draft: false
---

## Что это

Три независимых пакета для real-time терминалов: мультиплексированные
SSE-подписки, UDF-сервер для своих данных и нормализованный ingest биржи.

## Зачем

Терминал ломается не на графике, а на потоке: подписки, реконнекты, форматы
бирж, backpressure. Пакеты закрывают эту часть, оставляя продукту UI, биллинг
и данные.

## Что проверяемо

- 107 тестов на границы протоколов.
- Живой конвейер Binance WS → нормализация → SSE → браузер.
- Демо-график на своих данных без TradingView-библиотеки.
- Ноль вендорских зависимостей и ноль runtime-зависимостей между пакетами.

## Статус

0.1.0, MIT. Репозиторий готов к публикации; карточка включится после первого
пуша и проверки установки из npm.
