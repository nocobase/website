---
title: "NocoBase v2.0.0-alpha.59: Optimalkan masalah kinerja saat beralih mode konfigurasi"
description: "Catatan Rilis v2.0.0-alpha.59"
---

### 🚀 Peningkatan

- **[flow-engine]**
  - Mengoptimalkan masalah kinerja saat mengganti mode konfigurasi ([#8241](https://github.com/nocobase/nocobase/pull/8241)) oleh @zhangzhonghe

  - Mendukung objek FormData di lingkungan runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) oleh @gchust

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki stack overflow yang disebabkan oleh infinite loop dalam pemuatan lambat bidang asosiasi tampilan ([#8262](https://github.com/nocobase/nocobase/pull/8262)) oleh @zhangzhonghe
