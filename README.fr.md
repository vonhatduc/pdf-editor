*Languages: [🇺🇸 English](README.md) • [🇷🇺 Русский](README.ru.md) • [🇺🇦 Українська](README.uk.md) • [🇫🇷 Français](README.fr.md) • [🇯🇵 日本語](README.ja.md)*

---

# 📄 PDF Editor SDK - Éditeur PDF Web

[![Powered by SayPDF](https://img.shields.io/badge/Powered%20by-SayPDF.com-blue?style=for-the-badge&logo=adobe)](https://saypdf.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://saypdf.com)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://saypdf.com)

**[Démo en direct et version Pro disponibles sur SayPDF.com](https://saypdf.com)**

Un **SDK d'édition PDF** puissant et indépendant de tout framework pour les applications web. Construit sur **Fabric.js** et **Vue 3**, il offre un riche ensemble de fonctionnalités pour manipuler les documents PDF directement dans le navigateur.

---

## 📖 Aperçu (Overview)

Le SDK PDF Editor est une solution côté client qui vous permet d'intégrer une expérience complète d'édition PDF dans vos applications web. Contrairement aux outils lourds côté serveur, il fonctionne de manière fluide dans le navigateur.

### ✨ Fonctionnalités clés (Key Features)
*   **📝 Édition de texte**: Ajoutez, modifiez et stylisez du texte avec un contrôle typographique complet.
*   **🖼️ Gestion des images**: Insérez, redimensionnez et manipulez des images.
*   **🎨 Formes**: Créez des lignes, des rectangles, des cercles et des formes personnalisées.
*   **📊 QR & Codes-barres**: Génération de [QR codes et codes-barres](https://saypdf.com) à la volée.
*   **✍️ Signatures numériques**: Ajoutez des images de signature aux documents.
*   **💧 Filigranes**: Protégez les documents avec des filigranes personnalisés.
*   **📤 Options d'exportation**: Exportez vers les formats PDF, PNG ou JPEG.

---

## 📦 Installation

> **Note**: Ceci est la version open-source allégée. Pour les fonctionnalités d'entreprise complètes, visitez [SayPDF.com](https://saypdf.com).

### NPM / Yarn
```bash
npm install @saypdf/pdf-editor-sdk
# ou
yarn add @saypdf/pdf-editor-sdk
```

---

## 🚀 Démarrage rapide (Quick Start)

### 1. Importer le SDK
```javascript
import PDFEditorSDK from 'pdf-editor-sdk'
import 'pdf-editor-sdk/style.css'
```

### 2. Créer un conteneur
```html
<div id="editor-container" style="width: 100%; height: 600px;"></div>
```

### 3. Initialiser l'éditeur
```javascript
const editor = new PDFEditorSDK({
  container: '#editor-container',
  width: 800,
  height: 600
})

await editor.loadPDF('/path/to/document.pdf')
```

---

<p align="center">
  Maintenu avec ❤️ par l'équipe de <a href="https://saypdf.com">SayPDF.com</a><br>
  © 2025 DONG HOA AI DATA GENERATION LTD. Tous droits réservés.
</p>
