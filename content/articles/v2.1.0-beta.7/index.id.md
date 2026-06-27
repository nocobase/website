---
title: "NocoBase v2.1.0-beta.7: Perbarui prompt pengguna kotak obrolan AI"
description: "Catatan Rilis v2.1.0-beta.7"
---

### 🎉 Fitur Baru

- **[AI employees]** Memperbarui prompt pengguna AI chatbox ([#8725](https://github.com/nocobase/nocobase/pull/8725)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana komponen CollectionField tidak dirender di komponen DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) oleh @mytharcher

  - Memperbaiki masalah di mana blok data tidak diperbarui saat mengganti menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) oleh @gchust

- **[flow-engine]** Memperbaiki masalah di mana ctx.exit tidak dapat menghentikan eksekusi alur event yang ditentukan pengguna. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) oleh @gchust

- **[database]** Memperbaiki kegagalan pemeriksaan kustom reguler field di v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) oleh @jiannx

- **[server]** Menyelesaikan masalah cache dengan menambahkan hash ke aset ([#8730](https://github.com/nocobase/nocobase/pull/8730)) oleh @chenos

- **[Access control]** Instance database yang digunakan saat mengatur metadata ACL tidak tepat ([#8747](https://github.com/nocobase/nocobase/pull/8747)) oleh @2013xile

- **[AI employees]**
  - Memperbaiki kesalahan chat ai employee saat knowledge base diaktifkan ([#8746](https://github.com/nocobase/nocobase/pull/8746)) oleh @cgyrock

  - Memperbaiki masalah rendering konfigurasi sumber data AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) oleh @cgyrock

- **[Flow engine]** memperbaiki error sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) oleh @chenos

- **[Workflow: Custom action event]** Memperbaiki masalah di mana workflow aksi kustom menggantung saat dijalankan sebagai sub-flow ([#8738](https://github.com/nocobase/nocobase/pull/8738)) oleh @mytharcher

- **[Workflow: Approval]**
  - Memperbaiki masalah di mana hasil kueri tidak ditampilkan karena node difilter berdasarkan tipe oleh @mytharcher

  - Menambahkan parameter yang terlewat untuk menghindari asosiasi tidak diperbarui saat mengirimkan persetujuan baru oleh @mytharcher

  - Memperbaiki masalah di mana error muncul saat menjalankan workflow persetujuan secara manual oleh @mytharcher

  - Memperbaiki error yang disebabkan oleh nilai `dataAfter` yang hilang saat ditambahkan atau didelegasikan oleh @mytharcher

  - Memperbaiki masalah ACL di mana nilai asosiasi tidak boleh dibuat atau diperbarui saat pengguna tidak memiliki izin oleh @mytharcher

  - Membersihkan nilai asosiasi dalam tindakan persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher

  - Memperbaiki masalah di mana parameter appends difilter oleh ACL oleh @mytharcher
