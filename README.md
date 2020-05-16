# appvelox__test

Посмотерть сайт можно по ссылке http://marikor.ru/appvelox_Korotkova/src/

Тестовое задание компани appvelox

При верстке использовался подход Desktop First.
Проект состоит из двух html файлов: index.html и questions.html.

Файл CSS создан с помощью препроцессора Sass. Main.sass – стили для главной
страницы, questions.sass – стили для страницы «Вопросы», media.sass – стили
для медиа-запросов. Итоговый CSS файл получен с помощью встроенного
плагина Live Sass Compiler в VS Code.

Весь код JavaScript разбит на модули и хранится в js/parts/. Собирается с
помощью webpack и babel для обеспечения кроссбраузерности. В итоге получаем
два js файла: script.js и questions.js, которые помещаем в js/dist/. Были
подключены необходимые полифилы.
Реализованы слайдер, табы, аккордеон.
