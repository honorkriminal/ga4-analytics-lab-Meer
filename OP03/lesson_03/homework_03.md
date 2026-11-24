# 3. Тег на сайте и источник перехода

Меер Джонатан · ОП.03 · 24.11.2026 · группа не указана

[Сайт](https://ga4-analytics-lab-meer.vercel.app) · [Репозиторий](https://github.com/honorkriminal/ga4-analytics-lab-Meer) · [Коммит с тегом](https://github.com/honorkriminal/ga4-analytics-lab-Meer/commit/69ec15d42b6510c29df316763ef053149af2f645). Production: Ready. В корне сайта страницы index.html, about.html, contacts.html и guide.html загружают js/tag.js с Measurement ID G-M9WG285BR2.

Тестовый вход: https://ga4-analytics-lab-meer.vercel.app/contacts.html?utm_source=telegram&utm_medium=social&utm_campaign=lesson07&debug_mode=1 . Скрипт Google Tag вернул HTTP 200. Сборщик GA4 вернул HTTP 204 на запросы page_view, utm_visit, form_start и generate_lead с ID учебного потока. В одном из пакетов также зарегистрирован вызов form_error после попытки отправить пустую форму.

На момент проверки [Realtime](https://analytics.google.com/analytics/web/#/a417354875p565690309/realtime/overview) показывал «Нет данных», DebugView — 0 событий. Обработанные значения источника, сеансов и пользователей пока не подтверждены.
