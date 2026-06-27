---
title: "NocoBase v2.0.25: Perbaiki masalah kinerja yang disebabkan oleh bidang JSON saat memuat daftar catatan persetujuan"
description: "Catatan Rilis v2.0.25"
---

### 🚀 Peningkatan

- **[Workflow: Persetujuan]** Memperbaiki masalah performa yang disebabkan oleh kolom JSON saat memuat daftar catatan persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[server]** Mengubah waktu penutupan Pub-Sub menjadi `beforeStop`, untuk menghindari pesan terkirim atau diproses setelah database ditutup ([#8934](https://github.com/nocobase/nocobase/pull/8934)) oleh @mytharcher

- **[Lokalisasi]** Mencegah permintaan localizationTexts:missing saat izin ditolak ([#8903](https://github.com/nocobase/nocobase/pull/8903)) oleh @chenos

- **[Sumber data: Oracle Eksternal]** Memperbaiki kesalahan yang terjadi saat memuat sumber data eksternal Oracle oleh @2013xile
