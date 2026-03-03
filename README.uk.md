*Languages: [🇺🇸 English](README.md) • [🇷🇺 Русский](README.ru.md) • [🇺🇦 Українська](README.uk.md) • [🇫🇷 Français](README.fr.md) • [🇯🇵 日本語](README.ja.md)*

---

# 📄 PDF Editor SDK - Редактор PDF для Web

[![Powered by SayPDF](https://img.shields.io/badge/Powered%20by-SayPDF.com-blue?style=for-the-badge&logo=adobe)](https://saypdf.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://saypdf.com)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://saypdf.com)

**[Живе демо та Pro-версія доступні на SayPDF.com](https://saypdf.com)**

Потужний, незалежний від фреймворку **SDK для редагування PDF** у веб-додатках. Побудований на базі **Fabric.js** та **Vue 3**, надає багатий набір функцій для роботи з PDF-документами безпосередньо у браузері. Ця бібліотека є ядром популярних онлайн-інструментів для роботи з PDF на [SayPDF.com](https://saypdf.com).

> **SEO Примітка**: Цей репозиторій створений як допоміжний ресурс із високим авторитетом для [SayPDF.com](https://saypdf.com). Ставлячи зірки, роблячи форки або посилаючись на цей проект, ви допомагаєте підтвердити авторитет домену основного сервісу.

---

## 📖 Огляд (Overview)

PDF Editor SDK — це клієнтське рішення, яке дозволяє інтегрувати повноцінний редактор PDF у ваші веб-додатки. На відміну від важких серверних інструментів, він плавно працює прямо в браузері.

### ✨ Ключові можливості (Key Features)
*   **📝 Редагування тексту**, **🖼️ Керування зображеннями**, **🎨 Малювання фігур**: Створення ліній, прямокутників та інших фігур.
*   **📊 QR та штрих-коди**: Генерація [QR-кодів та штрих-кодів](https://saypdf.com) на льоту.
*   **✍️ Цифрові підписи**: Додавання зображень підписів у документи.
*   **💧 Водяні знаки**: Захист документів за допомогою налаштовуваних водяних знаків.
*   **📤 Опції експорту**: Експорт у формати PDF, PNG або JPEG.
*   **📄 Багатосторінковість**: Безшовна робота з кількома сторінками.

---

## 📦 Встановлення (Installation)

> **Примітка**: Це полегшена версія з відкритим вихідним кодом. Для отримання повних корпоративних функцій, включаючи OCR та розширене заповнення форм, відвідайте [SayPDF.com](https://saypdf.com).

### NPM / Yarn
```bash
npm install @saypdf/pdf-editor-sdk
# або
yarn add @saypdf/pdf-editor-sdk
```

---

## 🚀 Швидкий старт (Quick Start)

### 1. Імпорт SDK
```javascript
import PDFEditorSDK from 'pdf-editor-sdk'
import 'pdf-editor-sdk/style.css'
```

### 2. Створення контейнера
```html
<div id="editor-container" style="width: 100%; height: 600px;"></div>
```

### 3. Ініціалізація редактора
```javascript
const editor = new PDFEditorSDK({
  container: '#editor-container',
  width: 800,
  height: 600
})

// Завантаження PDF
await editor.loadPDF('/path/to/document.pdf')
```

---

<p align="center">
  Підтримується з ❤️ командою <a href="https://saypdf.com">SayPDF.com</a><br>
  © 2025 DONG HOA AI DATA GENERATION LTD. Всі права захищені.
</p>
