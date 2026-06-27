---
title: "NocoBase v1.8.12: Perbaikan Bug"
description: "Catatan Rilis v1.8.12"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan opsi "Fokus otomatis" untuk komponen Input, TextArea, URL, dan InputNumber yang secara otomatis memfokuskan bidang input saat rendering halaman awal jika diaktifkan ([#7320](https://github.com/nocobase/nocobase/pull/7320)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki item pratinjau file pada url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) oleh @mytharcher

  - Menambahkan URL lengkap ke file lokal saat pratinjau ([#7314](https://github.com/nocobase/nocobase/pull/7314)) oleh @mytharcher

- **[utils]** Penanganan zona waktu yang salah untuk parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) oleh @katherinehhh

- **[undefined]** Menambahkan plugin baru ke preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) oleh @mytharcher

- **[Manajer File]** Memperbaiki izin bidang penyimpanan ([#7316](https://github.com/nocobase/nocobase/pull/7316)) oleh @mytharcher

- **[Workflow]** Memperbaiki hasil `undefined` saat prosesor keluar ([#7317](https://github.com/nocobase/nocobase/pull/7317)) oleh @mytharcher

- **[Workflow: Node perhitungan dinamis]** Memperbaiki kesalahan yang disebabkan oleh API lama ([#7321](https://github.com/nocobase/nocobase/pull/7321)) oleh @mytharcher

- **[Workflow: Subflow]** Memperbaiki aliran yang ditangguhkan oleh @mytharcher
