# Запуск для локального тестирования проекта:

antonv@HP-Elitebook:~$ cd /home/antonv/Projects/web_ai_service_lab
npm run build
npm run dev
запустить на http://localhost:5173/

# AI Service Lab Website — Release & Deploy Checklist

Проект локально:

```bash
/home/antonv/Projects/web_ai_service_lab
```

Проект на VPS:

```bash
/home/anton/projects/web_ai_service_lab
```

Сайт:

```text
https://ai-service-lab.ru
```

---

# 1. Создать ZIP и TREE локально на ПК

Перейти в проект:

```bash
cd /home/antonv/Projects/web_ai_service_lab
```

Создать TREE:

```bash
tree -a -I "node_modules|dist|.git" > "/home/antonv/Projects/web_ai_service_lab_tree_$(date +%Y%m%d).txt"
```

Создать ZIP:

```bash
cd /home/antonv/Projects

zip -r "web_ai_service_lab_$(date +%Y%m%d).zip" web_ai_service_lab \
-x "web_ai_service_lab/node_modules/*" \
-x "web_ai_service_lab/dist/*" \
-x "web_ai_service_lab/.git/*"
```

Проверить:

```bash
ls -lh /home/antonv/Projects/web_ai_service_lab*
```

Результат:

```text
web_ai_service_lab_YYYYMMDD.zip
web_ai_service_lab_tree_YYYYMMDD.txt
```

---

# 2. Проверить локально

Запустить проект:

```bash
cd /home/antonv/Projects/web_ai_service_lab

npm run dev
```

Открыть:

```text
http://localhost:5173
```

Проверить:

```text
✔ Hero
✔ Header
✔ Footer
✔ Логотип
✔ Все карточки решений
✔ Форма консультации
✔ Telegram ссылки
✔ Юридические документы
✔ Privacy Policy
✔ Personal Data
✔ Cookie Policy
```

---

# 3. Коммит в GitHub

Перейти в проект:

```bash
cd /home/antonv/Projects/web_ai_service_lab
```

Проверить изменения:

```bash
git status
```

Добавить изменения:

```bash
git add .
```

Создать коммит:

```bash
git commit -m "Update legal documents and website content"
```

Отправить в GitHub:

```bash
git push origin main
```

Проверить:

```bash
git log --oneline -5
```

Новый коммит должен быть первым.

---

# 4. Обновить проект на VPS

Перейти:

```bash
cd /home/anton/projects/web_ai_service_lab
```

Проверить состояние:

```bash
git status
```

Получить изменения:

```bash
git pull origin main
```

---

# 5. Пересборка Docker

Всегда выполнять полную пересборку:

```bash
docker compose up -d --build
```

Проверить контейнеры:

```bash
docker compose ps
```

Проверить логи:

```bash
docker compose logs --tail=100
```

Убедиться, что ошибок нет.

---

# 6. Проверка Production

Открыть:

```text
https://ai-service-lab.ru
```

Проверить:

```text
✔ Hero отображается корректно
✔ Логотип отображается
✔ Все изображения загружаются
✔ Блок Наши решения
✔ Интернет-магазин по подписке
✔ Готовый интернет-магазин
✔ Интернет-магазин под заказ
✔ Сайт для бизнеса
✔ AI решения для бизнеса
✔ Footer
✔ Telegram ссылка
✔ Контактная форма
```

---

# 7. Проверка юридических документов

Проверить страницы:

```text
https://ai-service-lab.ru/privacy
https://ai-service-lab.ru/personal-data
https://ai-service-lab.ru/cookie-policy
```

Убедиться:

```text
✔ страницы открываются
✔ тексты актуальны
✔ ссылки в футере работают
```

---

# 8. Проверка формы консультации

Открыть форму:

```text
Получить консультацию
```

Проверить:

```text
✔ открытие модального окна
✔ закрытие окна
✔ отправка заявки
✔ письмо приходит на support@ai-service-lab.ru
✔ отсутствует черный экран после отправки
✔ корректный возврат пользователя на сайт
```

---

# 9. Проверка аналитики (после внедрения Метрики)

Проверить:

```text
✔ счетчик Яндекс Метрики загружен
✔ Webvisor работает
✔ карта кликов работает
✔ карта скроллинга работает
✔ цели фиксируются
```

Цели:

```text
✔ открытие формы консультации
✔ отправка формы
✔ переход в Telegram
✔ переход на Mini Shop
```

---

# 10. Создать ZIP и TREE на VPS

Перейти:

```bash
cd /home/anton/projects
```

Создать TREE:

```bash
tree -a -I "node_modules|dist|.git" web_ai_service_lab > "web_ai_service_lab_tree_vps_$(date +%Y%m%d).txt"
```

Создать ZIP:

```bash
zip -r "web_ai_service_lab_vps_$(date +%Y%m%d).zip" web_ai_service_lab \
-x "web_ai_service_lab/node_modules/*" \
-x "web_ai_service_lab/dist/*" \
-x "web_ai_service_lab/.git/*"
```

Проверить:

```bash
ls -lh /home/anton/projects/web_ai_service_lab*
```

Результат:

```text
web_ai_service_lab_vps_YYYYMMDD.zip
web_ai_service_lab_tree_vps_YYYYMMDD.txt
```

---

# Итог релиза

Локально:

```text
/home/antonv/Projects/web_ai_service_lab_YYYYMMDD.zip
/home/antonv/Projects/web_ai_service_lab_tree_YYYYMMDD.txt
```

На VPS:

```text
/home/anton/projects/web_ai_service_lab_vps_YYYYMMDD.zip
/home/anton/projects/web_ai_service_lab_tree_vps_YYYYMMDD.txt
```

---

# Финальный сценарий

1. Создать ZIP и TREE на ПК.
2. Проверить localhost.
3. git add / commit / push.
4. На VPS выполнить git pull.
5. Выполнить docker compose up -d --build.
6. Проверить сайт.
7. Проверить документы.
8. Проверить форму консультации.
9. Проверить Метрику (после внедрения).
10. Создать ZIP и TREE на VPS.
11. Зафиксировать успешный релиз.

