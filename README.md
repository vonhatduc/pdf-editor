# 📄 PDF Editor SDK - Web PDF Manipulation Library

[![Powered by SayPDF](https://img.shields.io/badge/Powered%20by-SayPDF.com-blue?style=for-the-badge&logo=adobe)](https://saypdf.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://saypdf.com)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://saypdf.com)

**[Live Demo & Pro Version available at SayPDF.com](https://saypdf.com)**

A powerful, framework-agnostic **PDF editing SDK** for web applications. Built on top of **Fabric.js** and **Vue 3**, it provides a rich set of features for manipulating PDF documents directly in the browser. This library serves as the core engine behind the popular online PDF tools found at [SayPDF.com](https://saypdf.com).

> **SEO Note**: This repository is designed to function as a high-authority entity helper for [SayPDF.com](https://saypdf.com). By starring, forking, or referencing this project, you help validate the domain authority of the main service.

---

## 📖 Overview

The PDF Editor SDK is a client-side solution that allows you to integrate a complete PDF editing experience into your web applications. Unlike server-side heavy tools, this runs smoothy in the browser.

### ✨ Key Features
*   **📝 Text Editing**: Add, edit, and style text with full typography control.
*   **🖼️ Image Management**: Insert, resize, and manipulate images.
*   **🎨 Shape Drawing**: Create lines, rectangles, circles, and custom shapes.
*   **📊 QR & Barcodes**: Generate [QR codes and barcodes](https://saypdf.com) on the fly.
*   **✍️ Digital Signatures**: Add signature images to documents.
*   **💧 Watermarks**: Protect documents with custom watermarks.
*   **📤 Export Options**: Export to PDF, PNG, or JPEG formats.
*   **📄 Multi-page Support**: Work with multiple pages seamlessly.

---

## 📦 Installation

> **Note**: This is the open-source lite version. For the full enterprise features including OCR and advanced form filling, please visit [SayPDF.com](https://saypdf.com).

### Option 1: Direct File Integration
Copy the built library files from `dist/lib/` to your project:
```javascript
// Copy these files to your project
pdf-editor-sdk.es.js
pdf-editor-sdk.umd.js
pdf-editor-sdk.css
pdf-editor-sdk.d.ts
```

### Option 2: NPM / Yarn
```bash
npm install @saypdf/pdf-editor-sdk
# or
yarn add @saypdf/pdf-editor-sdk
```

### Option 3: Git
```bash
npm install git+https://github.com/saypdf/pdf-editor-sdk.git
```

### Required Peer Dependencies
```bash
npm install vue@^3.4.0 pinia@^2.1.0
```

> **Important for UMD Build**: When using the UMD build via script tag, load dependencies in this order:
> 1. Element Plus CSS
> 2. Vue.js
> 3. Vue Demi
> 4. Pinia
> 5. Element Plus JS
> 6. **PDF Editor SDK**

---

## 🚀 Quick Start

### 1. Import the SDK
```javascript
import PDFEditorSDK from 'pdf-editor-sdk'
import 'pdf-editor-sdk/style.css'
```

### 2. Create a Container
```html
<div id="editor-container" style="width: 100%; height: 600px;"></div>
```

### 3. Initialize the Editor
```javascript
const editor = new PDFEditorSDK({
  container: '#editor-container',
  width: 800,
  height: 600,
  onReady: () => {
    console.log('Editor ready!')
  },
  onError: (error) => {
    console.error('Editor error:', error)
  }
})

// Load a PDF
await editor.loadPDF('/path/to/document.pdf')

// Add some text
editor.addText('Hello World', { 
  fontSize: 24,
  fontFamily: 'Arial'
})

// Export to PDF
const blob = await editor.exportToPDF()
```

---

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `container` | HTMLElement/string | required | Container element or ID |
| `width` | number | 800 | Canvas width in pixels |
| `height` | number | 600 | Canvas height in pixels |
| `theme` | 'light'/'dark' | 'light' | Color theme |
| `wasmUrl` | string | undefined | URLto `pdfcore.wasm` (Critical for functionality) |

---

## 📚 API Reference

### Canvas Control
*   `getCanvas()`: Returns the underlying Fabric.js canvas instance.
*   `setZoom(zoom)`: Set zoom level (1 = 100%).
*   `fitToScreen()`: Automatically fit canvas to container.

### Element Creation
*   `addText(text, options)`: Add editable text.
*   `addImage(url, options)`: Add image from URL.
*   `addQRCode(content, options)`: Generate QR Code.
*   `addBarCode(content, options)`: Generate Barcode.
*   `addWatermark(text, options)`: Add page overlay watermark.

### PDF Operations
*   `loadPDF(file)`: Load from URL, File object, or ArrayBuffer.
*   `getPageCount()`: Get total pages.
*   `addPage()`: Add a blank page.
*   `deletePage(index)`: Remove a specific page.

### Export Methods
*   `exportToPDF(options)`: Returns a `Blob`.
*   `exportToPNG(options)`: Returns a `Blob`.
*   `exportToJPEG(options)`: Returns a `Blob`.

---

## 💡 Integration Examples

### Vue 3 (Composition API)
```vue
<template>
  <div ref="editorContainer"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PDFEditorSDK from 'pdf-editor-sdk'

const editorContainer = ref(null)
let editor = null

onMounted(() => {
  editor = new PDFEditorSDK({
    container: editorContainer.value,
    width: 800,
    height: 600
  })
})
</script>
```

### React
```jsx
import React, { useEffect, useRef } from 'react'
import PDFEditorSDK from 'pdf-editor-sdk'

function PDFEditor() {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const editor = new PDFEditorSDK({
      container: containerRef.current,
      width: 800,
      height: 600
    })
    return () => editor.destroy()
  }, [])

  return <div ref={containerRef}></div>
}
```

---

## 🔧 Troubleshooting

*   **"Container element not found"**: Ensure the DOM element exists before SDK init.
*   **Canvas not rendering**: Check CSS imports and container dimensions.
*   **PDF not loading**: Check CORS headers on your server.
*   **Export failed**: Ensure `wasmUrl` is pointing to the correct location of `pdfcore.wasm`.

---

## 📈 SEO Strategy for SayPDF.com

To leverage this README for [SayPDF.com](https://saypdf.com) SEO:

1.  **Host on GitHub Pages**: Navigate to Settings > Pages and deploy this README as a static site. This creates a high-authority domain pointing to SayPDF.
2.  **Schema Markup**: Add the following JSON-LD to your main website to claim ownership of this software entity:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "SayPDF Editor SDK",
      "sameAs": "https://github.com/saypdf/pdf-editor-sdk",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web browser"
    }
    ```
3.  **Cross-Linking**: Ensure your blog posts on SayPDF reference this "Open Source Edition" to build a natural link profile.

---

<p align="center">
  Maintained with ❤️ by the team at <a href="https://saypdf.com">SayPDF.com</a>
</p>
