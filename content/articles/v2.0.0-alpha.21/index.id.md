---
title: "NocoBase v2.0.0-alpha.21: Perbaikan Bug"
description: "Catatan Rilis v2.0.0-alpha.21"
---

### 🚀 Peningkatan

- **[cache]** Menghindari overhead performa yang disebabkan oleh kloning filter Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) oleh @2013xile

- **[server]** Mengoptimalkan metode pemuatan sumber daya l10n untuk mencegah pemblokiran event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) oleh @2013xile

- **[Aksi: Impor rekaman]** Peningkatan pesan kesalahan saat header tabel hilang ([#7656](https://github.com/nocobase/nocobase/pull/7656)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Mencegah pemutusan kata pada label di formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) oleh @katherinehhh

- **[Visualisasi data]** Memperbaiki masalah kueri SQL saat mengurai variabel ([#7642](https://github.com/nocobase/nocobase/pull/7642)) oleh @heziqiang

- **[Workflow]** Memperbaiki kesalahan logger yang muncul saat aplikasi berhenti ([#7639](https://github.com/nocobase/nocobase/pull/7639)) oleh @mytharcher
