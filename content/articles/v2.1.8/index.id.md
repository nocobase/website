---
title: "NocoBase v2.1.8: Mengunci `@langchain/openai` untuk pembaruan level patch pada paket AI"
description: "Catatan Rilis v2.1.8"
---

### 🐛 Perbaikan Bug

- **[ai]**

  - Mengunci `@langchain/openai` ke pembaruan level patch untuk paket AI. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) oleh @cgyrock
  - Memperbaiki resolusi dependensi LangChain yang tidak kompatibel untuk plugin AI. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) oleh @cgyrock
- **[AI: Basis Pengetahuan]**

  - Memperbaiki pesan error yang tidak jelas saat mengaktifkan plugin basis pengetahuan AI tanpa plugin AI tersedia. oleh @cgyrock
  - Memperbaiki resolusi dependensi LangChain yang tidak kompatibel untuk plugin basis pengetahuan AI. oleh @cgyrock
