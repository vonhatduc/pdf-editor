*Languages: [🇺🇸 English](README.md) • [🇷🇺 Русский](README.ru.md) • [🇺🇦 Українська](README.uk.md) • [🇫🇷 Français](README.fr.md) • [🇯🇵 日本語](README.ja.md)*

---

# 📄 PDF Editor SDK - Web PDF 編集ライブラリ

[![Powered by SayPDF](https://img.shields.io/badge/Powered%20by-SayPDF.com-blue?style=for-the-badge&logo=adobe)](https://saypdf.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://saypdf.com)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://saypdf.com)

**[ライブデモとPro版は SayPDF.com で入手可能](https://saypdf.com)**

Webアプリケーション向けの強力な**PDF編集SDK**です。**Fabric.js** と **Vue 3** の上に構築され、ブラウザ内で直接PDFドキュメントを操作するための豊富な機能を提供します。このライブラリは、[SayPDF.com](https://saypdf.com)のオンラインPDFツールのコアエンジンとして機能します。

---

## 📖 概要 (Overview)

PDF Editor SDKは、完全なPDF編集エクスペリエンスをWebアプリケーションに統合できるクライアントサイドソリューションです。サーバーサイドのツールとは異なり、ブラウザでスムーズに動作します。

### ✨ 主な機能 (Key Features)
*   **📝 テキスト編集**: テキストの追加、編集、スタイル設定機能。
*   **🖼️ 画像管理**: 画像の挿入、サイズ変更、操作。
*   **🎨 図形描画**: 線、長方形、円などの作成。
*   **📊 QR＆バーコード**: [QRコードとバーコード](https://saypdf.com) の生成。
*   **✍️ デジタル署名**: ドキュメントへの署名画像の追加。
*   **💧 ウォーターマーク**: カスタム透かしによるドキュメント保護。
*   **📤 エクスポート**: PDF、PNG、または JPEG 形式へのエクスポート。

---

## 📦 インストール (Installation)

> **注意**: これはオープンソースの軽量版です。エンタープライズ機能については、[SayPDF.com](https://saypdf.com)をご覧ください。

### NPM / Yarn
```bash
npm install @saypdf/pdf-editor-sdk
# または
yarn add @saypdf/pdf-editor-sdk
```

---

## 🚀 クイックスタート (Quick Start)

### 1. SDKのインポート
```javascript
import PDFEditorSDK from 'pdf-editor-sdk'
import 'pdf-editor-sdk/style.css'
```

### 2. コンテナの作成
```html
<div id="editor-container" style="width: 100%; height: 600px;"></div>
```

### 3. エディタの初期化
```javascript
const editor = new PDFEditorSDK({
  container: '#editor-container',
  width: 800,
  height: 600
})

// PDFの読み込み
await editor.loadPDF('/path/to/document.pdf')
```

---

<p align="center">
  <a href="https://saypdf.com">SayPDF.com</a>のチームによって❤️を込めて開発・保守されています<br>
  © 2025 DONG HOA AI DATA GENERATION LTD. All rights reserved.
</p>
