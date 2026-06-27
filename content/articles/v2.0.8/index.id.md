---
title: "NocoBase v2.0.8: Perbarui prompt pengguna kotak obrolan AI"
description: "Catatan Rilis v2.0.8"
---

### 🎉 Fitur Baru

- **[AI employees]** Memperbarui prompt pengguna AI chatbox ([#8725](https://github.com/nocobase/nocobase/pull/8725)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[server]** Mengatasi masalah cache dengan menambahkan hash ke aset ([#8730](https://github.com/nocobase/nocobase/pull/8730)) oleh @chenos

- **[AI employees]** Memperbaiki masalah rendering konfigurasi sumber data AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) oleh @cgyrock

- **[Workflow: Custom action event]** Memperbaiki masalah di mana workflow aksi kustom berhenti saat dijalankan sebagai sub-flow ([#8738](https://github.com/nocobase/nocobase/pull/8738)) oleh @mytharcher

- **[Workflow: Approval]**
  - Membersihkan nilai asosiasi dalam aksi persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher

  - Memperbaiki masalah di mana error muncul saat menjalankan workflow persetujuan secara manual oleh @mytharcher

  - Memperbaiki error yang disebabkan oleh nilai `dataAfter` yang hilang saat ditambahkan atau didelegasikan oleh @mytharcher

  - Memperbaiki masalah di mana parameter appends difilter oleh ACL oleh @mytharcher

  - Memperbaiki masalah ACL di mana nilai asosiasi tidak boleh dibuat atau diperbarui saat pengguna tidak memiliki izin oleh @mytharcher
