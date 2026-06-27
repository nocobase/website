---
title: "NocoBase v2.0.0-alpha.15: Menambahkan penyedia LLM baru"
description: "Catatan Rilis v2.0.0-alpha.15"
---

### 🚀 Peningkatan

- **[client]** dukungan field asosiasi di model field JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) oleh @gchust

- **[AI employees]**
  - Memfaktorkan ulang OpenAI LLM Provider menjadi dua penyedia terpisah untuk mendukung API Completions dan Responses OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) oleh @cgyrock

  - Menambahkan penyedia LLM baru Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) oleh @ReLaMi96

### 🐛 Perbaikan Bug

- **[Workflow: Approval]**
  - Memperbaiki masalah jumlah tugas tidak diperbarui setelah menambahkan penanggung jawab oleh @mytharcher

  - Memperbaiki masalah waktu tunggu transaksi yang disebabkan oleh transaksi tidak dikembalikan dengan benar ketika terjadi kesalahan database setelah pengajuan persetujuan oleh @mytharcher
