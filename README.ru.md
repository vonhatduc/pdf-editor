*Languages: [🇺🇸 English](README.md) • [🇷🇺 Русский](README.ru.md) • [🇺🇦 Українська](README.uk.md) • [🇫🇷 Français](README.fr.md) • [🇯🇵 日本語](README.ja.md)*

---

# 📄 PDF Editor SDK - Редактор PDF для Web

[![Powered by SayPDF](https://img.shields.io/badge/Powered%20by-SayPDF.com-blue?style=for-the-badge&logo=adobe)](https://saypdf.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://saypdf.com)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://saypdf.com)

**[Живое демо и Pro-версия доступны на SayPDF.com](https://saypdf.com)**

Мощный, независимый от фреймворка **SDK для редактирования PDF** в веб-приложениях. Построен на базе **Fabric.js** и **Vue 3**, предоставляет богатый набор функций для работы с PDF-документами прямо в браузере. Эта библиотека является ядром популярных онлайн-инструментов для работы с PDF на [SayPDF.com](https://saypdf.com).

> **SEO Примечание**: Этот репозиторий создан как вспомогательный ресурс с высоким авторитетом для [SayPDF.com](https://saypdf.com). Ставя звезды, делая форки или ссылаясь на этот проект, вы помогаете подтвердить авторитет домена основного сервиса.

---

## 📖 Обзор (Overview)

PDF Editor SDK — это клиентское решение, которое позволяет интегрировать полноценный редактор PDF в ваши веб-приложения. В отличие от тяжелых серверных инструментов, он плавно работает прямо в браузере.

### ✨ Ключевые возможности (Key Features)
*   **📝 Редактирование текста**: Добавление, изменение и стилизация текста с полным контролем типографики.
*   **🖼️ Управление изображениями**: Вставка, изменение размера и обработка изображений.
*   **🎨 Рисование фигур**: Создание линий, прямоугольников, кругов и пользовательских фигур.
*   **📊 QR и штрихкоды**: Генерация [QR-кодов и штрихкодов](https://saypdf.com) на лету.
*   **✍️ Цифровые подписи**: Добавление изображений подписей в документы.
*   **💧 Водяные знаки**: Защита документов с помощью настраиваемых водяных знаков.
*   **📤 Опции экспорта**: Экспорт в форматы PDF, PNG или JPEG.
*   **📄 Многостраничность**: Бесшовная работа с несколькими страницами.

---

## 📦 Установка (Installation)

> **Примечание**: Это облегченная версия с открытым исходным кодом. Для получения полных корпоративных функций, включая OCR и расширенное заполнение форм, посетите [SayPDF.com](https://saypdf.com).

### Вариант 1: Прямая интеграция файлов (Direct File Integration)
Скопируйте скомпилированные файлы из `dist/lib/` в ваш проект:
```javascript
// Скопируйте эти файлы в ваш проект
pdf-editor-sdk.es.js
pdf-editor-sdk.umd.js
pdf-editor-sdk.css
pdf-editor-sdk.d.ts
```

### Вариант 2: NPM / Yarn
```bash
npm install @saypdf/pdf-editor-sdk
# или
yarn add @saypdf/pdf-editor-sdk
```

---

## 🚀 Быстрый старт (Quick Start)

### 1. Импорт SDK
```javascript
import PDFEditorSDK from 'pdf-editor-sdk'
import 'pdf-editor-sdk/style.css'
```

### 2. Создание контейнера
```html
<div id="editor-container" style="width: 100%; height: 600px;"></div>
```

### 3. Инициализация редактора
```javascript
const editor = new PDFEditorSDK({
  container: '#editor-container',
  width: 800,
  height: 600,
  onReady: () => {
    console.log('Редактор готов!')
  }
})

// Загрузка PDF
await editor.loadPDF('/path/to/document.pdf')

// Экспорт в PDF
const blob = await editor.exportToPDF()
```

---

## ⚙️ Опции конфигурации (Configuration Options)

| Опция | Тип | По умолчанию | Описание |
|--------|------|---------|-------------|
| `container` | HTMLElement/string | обязательно | Контейнер или ID |
| `width` | number | 800 | Ширина холста в пикселях |
| `height` | number | 600 | Высота холста в пикселях |
| `theme` | 'light'/'dark' | 'light' | Цветовая тема |

---

<p align="center">
  Поддерживается с ❤️ командой <a href="https://saypdf.com">SayPDF.com</a><br>
  © 2025 DONG HOA AI DATA GENERATION LTD. Все права защищены.
</p>
