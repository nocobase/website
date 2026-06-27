---
title: "NocoBase v2.1.0-alpha.17: refaktor CLI NocoBase"
description: "Catatan Rilis v2.1.0-alpha.17"
---

### 🎉 Fitur Baru

- **[cli]** Refaktor CLI NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) oleh @chenos

- **[AI employees]** Meningkatkan kemampuan AI employees dalam mengurai dokumen yang diunggah ([#9126](https://github.com/nocobase/nocobase/pull/9126)) oleh @cgyrock

### 🚀 Peningkatan

- **[undefined]**
  - Sinkronkan dokumentasi variabel lingkungan dan mode klaster yang telah diterjemahkan dengan pembaruan terbaru dalam bahasa Mandarin. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) oleh @mytharcher

  - Dokumentasi: tambahkan terjemahan bahasa Arab untuk halaman pengantar get-started ([#9044](https://github.com/nocobase/nocobase/pull/9044)) oleh @gaston98765

  - Tambahkan terjemahan bahasa Arab untuk halaman beranda dokumentasi ([#9043](https://github.com/nocobase/nocobase/pull/9043)) oleh @gaston98765

- **[logger]** Tambahkan informasi `referer` ke log permintaan ([#9110](https://github.com/nocobase/nocobase/pull/9110)) oleh @2013xile

- **[client]** tambahkan sakelar verifikasi wajib isi formulir ([#9060](https://github.com/nocobase/nocobase/pull/9060)) oleh @jiannx

- **[Workflow: Manual node]** Gunakan `simplePagination` pada koleksi terkait tugas alur kerja untuk performa daftar yang lebih baik ([#9117](https://github.com/nocobase/nocobase/pull/9117)) oleh @mytharcher

- **[AI employees]** Setelah pemilihan blok AI employee, isi lampiran formulir ke area unggah ([#9127](https://github.com/nocobase/nocobase/pull/9127)) oleh @cgyrock

- **[Workflow: Approval]** Gunakan `simplePagination` pada koleksi `approvals` dan `approvalRecords` untuk performa daftar yang lebih baik oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki opsi opsional dari bidang pilihan tunggal dalam konfigurasi aturan bidang yang kosong ([#9119](https://github.com/nocobase/nocobase/pull/9119)) oleh @jiannx

  - Memperbaiki masalah di mana komponen bidang asosiasi tidak tepat dalam pengaturan nilai bidang. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) oleh @gchust

  - Memperbaiki pengaturan nilai default yang salah untuk sub-tabel dalam formulir. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) oleh @gchust

- **[utils]** Tambahkan kontrol keamanan untuk pengiriman permintaan HTTP server, untuk menghindari kemungkinan SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) oleh @mytharcher
Referensi: [Variabel lingkungan](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Loop node]** Perbaiki validasi node alur kerja ([#9111](https://github.com/nocobase/nocobase/pull/9111)) oleh @mytharcher

- **[Notification: In-app message]** Perbaiki masalah di mana komponen pemilih penerima tidak berfungsi dengan benar ([#9123](https://github.com/nocobase/nocobase/pull/9123)) oleh @mytharcher

- **[IdP: OAuth]** Perbaiki akses OAuth untuk permintaan API reguler ([#9120](https://github.com/nocobase/nocobase/pull/9120)) oleh @2013xile

- **[AI employees]**
  - Memperbaiki pengurutan kueri agregat yang dijatuhkan oleh ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) oleh @2013xile

  - Perbaiki masalah di mana pengaturan baseURL dari layanan LLM google-gen-ai tidak berpengaruh ([#9107](https://github.com/nocobase/nocobase/pull/9107)) oleh @cgyrock

- **[Email manager]** Hapus prompt penutupan formulir setelah email berhasil dikirim oleh @jiannx
