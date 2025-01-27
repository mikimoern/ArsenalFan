# Arsenal Fan Site

**Arsenal** — это фан-сайт, посвящённый футбольному клубу "Арсенал". На сайте можно:
- Читать новости о команде.
- Смотреть короткие видео.
- Узнавать о главных спонсорах команды.
- Изучать информацию об игроках.
- Читать о команде: стадион, история и многое другое.

Это **full-stack** проект:
- **Фронтенд**: Написан на React.js.
- **Бэкенд**: Написан на Django REST Framework.

## Как запустить проект
### 1. Установка зависимостей

#### Бэкенд (Django):
a. Перейдите в папку `backend`:
   cd backend

    Установите зависимости:
        pip install -r requirements.txt

b. Фронтенд (React):
   Перейдите в папку frontend:
        cd ../frontend

    Установите зависимости:
        npm install

### 2. Запуск серверов
    Бэкенд (Django):
    Перейдите в папку backend (если ещё не там):
        cd ../backend

    Запустите сервер:
        python manage.py runserver

    Сервер будет доступен по адресу: http://127.0.0.1:8000/.

    Фронтенд (React):
    Перейдите в папку frontend (если ещё не там):
        cd ../frontend

    Запустите фронтенд:
        npm run dev
    
    Сайт будет доступен по адресу: http://localhost:5173/.



### 3. Технологии
    Фронтенд: React.js, HTML/CSS/JavaScript.

    Бэкенд: Django, Django REST Framework.

### 4. Как использовать
После запуска серверов откройте браузер и перейдите по адресу http://localhost:5173/.

На главной странице вы увидите разделы:

Новости.

Видео.

Информация о команде.

Список игроков.

История и стадион.


### 5. Возможные улучшения
Добавить авторизацию пользователей.

Реализовать комментарии к новостям.

Добавить раздел с матчами и результатами.

Интегрировать базу данных (например, PostgreSQL).