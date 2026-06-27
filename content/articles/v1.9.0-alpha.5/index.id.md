---
title: "NocoBase v1.9.0-alpha.5: Menambahkan opsi konfigurasi terkait tanda tangan"
description: "Catatan Rilis v1.9.0-alpha.5"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan opsi "Fokus otomatis" untuk komponen Input, TextArea, URL, dan InputNumber yang secara otomatis memfokuskan bidang input saat rendering halaman awal jika diaktifkan ([#7320](https://github.com/nocobase/nocobase/pull/7320)) oleh @zhangzhonghe

- **[Auth: SAML 2.0]** Menambahkan opsi konfigurasi terkait tanda tangan oleh @2013xile

### 🚀 Peningkatan

- **[Workflow: JavaScript]** Mengubah cache menjadi cache aplikasi untuk menghindari bug dalam mode kluster oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana string mentah variabel dikirimkan bersama formulir ([#7337](https://github.com/nocobase/nocobase/pull/7337)) oleh @zhangzhonghe

  - Memperbaiki tooltip yang menampilkan [object Object] saat dihover di panel tindakan ([#7322](https://github.com/nocobase/nocobase/pull/7322)) oleh @katherinehhh

  - Saat menggunakan variabel untuk menetapkan nilai default bidang di formulir filter, jika nilai variabel kosong, kotak input akan menampilkan string variabel asli ([#7335](https://github.com/nocobase/nocobase/pull/7335)) oleh @zhangzhonghe

- **[undefined]** Menambahkan plugin baru ke preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) oleh @mytharcher

- **[Collection: Tree]** Memperbaiki logika sinkronisasi jalur dari koleksi pohon ([#7330](https://github.com/nocobase/nocobase/pull/7330)) oleh @ChimingLiu

- **[Office File Previewer]** Mendukung file `.docx`, `.xlsx`, dan `.pptx` dengan hanya URL untuk dapat dipratinjau ([#7336](https://github.com/nocobase/nocobase/pull/7336)) oleh @mytharcher

- **[Workflow: Dynamic calculation node]** Memperbaiki kesalahan yang disebabkan oleh API lama ([#7321](https://github.com/nocobase/nocobase/pull/7321)) oleh @mytharcher

- **[Workflow: Approval]** Menambahkan judul tugas untuk item yang ditambahkan dan didelegasikan oleh @mytharcher

- **[Email manager]** Mendukung email yang sama untuk beberapa orang oleh @jiannx
