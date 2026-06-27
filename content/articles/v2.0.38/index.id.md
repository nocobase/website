---
title: "NocoBase v2.0.38: Meningkatkan kemampuan karyawan AI dalam mengurai dokumen yang diunggah"
description: "Catatan Rilis v2.0.38"
---

### 🎉 Fitur Baru

- **[Karyawan AI]** Meningkatkan kemampuan karyawan AI dalam mengurai dokumen yang diunggah ([#9126](https://github.com/nocobase/nocobase/pull/9126)) oleh @cgyrock

### 🚀 Peningkatan

- **[logger]** Menambahkan informasi `referer` ke log permintaan ([#9110](https://github.com/nocobase/nocobase/pull/9110)) oleh @2013xile

- **[undefined]** Menyinkronkan dokumentasi mode klaster dan variabel lingkungan yang telah diterjemahkan dengan pembaruan bahasa Mandarin terbaru. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) oleh @mytharcher

- **[Karyawan AI]** Setelah pemilihan blok karyawan AI, isi lampiran formulir ke area unggah ([#9127](https://github.com/nocobase/nocobase/pull/9127)) oleh @cgyrock

- **[Workflow: Node manual]** Menggunakan `simplePagination` pada koleksi terkait tugas workflow untuk performa daftar yang lebih baik ([#9117](https://github.com/nocobase/nocobase/pull/9117)) oleh @mytharcher

- **[Workflow: Persetujuan]** Menggunakan `simplePagination` pada koleksi `approvals` dan `approvalRecords` untuk performa daftar yang lebih baik oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki opsi opsional dari bidang pilihan tunggal dalam konfigurasi aturan bidang yang kosong ([#9119](https://github.com/nocobase/nocobase/pull/9119)) oleh @jiannx

  - Memperbaiki pengaturan nilai default yang salah untuk sub tabel dalam formulir. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) oleh @gchust

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana komponen pemilih penerima tidak berfungsi dengan benar ([#9123](https://github.com/nocobase/nocobase/pull/9123)) oleh @mytharcher

- **[Karyawan AI]** Memperbaiki masalah di mana pengaturan baseURL dari layanan LLM google-gen-ai tidak berpengaruh ([#9107](https://github.com/nocobase/nocobase/pull/9107)) oleh @cgyrock

- **[Manajer email]** Menghapus prompt penutupan formulir setelah email berhasil dikirim oleh @jiannx
