---
title: "NocoBase v2.0.61: Dukungan pelengkapan otomatis yang ditingkatkan untuk beberapa fungsi RunJS bawaan"
description: "Catatan Rilis v2.0.61"
---

### 🚀 Peningkatan

- **[client]** Peningkatan dukungan pelengkapan otomatis untuk beberapa fungsi RunJS bawaan. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) oleh @gchust
- **[undefined]** Memperbarui dokumentasi Embed NocoBase untuk plugin sumber terbuka. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) oleh @zhangzhonghe
  Referensi: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Perbaikan Bug

- **[flow-engine]**

  - Memperbaiki masalah halaman macet saat mengatur nilai field untuk subform. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) oleh @gchust
  - Memperbaiki masalah di mana popup menampilkan data UI yang usang setelah mengganti sakelar mode konfigurasi UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) oleh @gchust
- **[client]**

  - Memperbaiki perilaku aturan tautan aksi rekaman yang salah di blok tabel. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) oleh @gchust
  - Memperbaiki masalah di mana data field relasi yang dipilih tidak ditampilkan di perangkat seluler. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana field menjadi hanya-baca saat ditampilkan kembali setelah disembunyikan oleh aturan tautan. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) oleh @katherinehhh
- **[cli]** Memperbaiki template nginx untuk menyajikan aset `.mjs` dengan tipe MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) oleh @mytharcher
- **[database]** Memperbaiki masalah di mana impor nilai kata sandi numerik bisa gagal. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) oleh @2013xile
- **[AI employees]** Memperbaiki validasi URL dasar penyedia AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) oleh @cgyrock
- **[Flow engine]**

  - Memperbaiki masalah di mana menyeret tab popup untuk mengurutkan ulang tidak berfungsi. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) oleh @gchust
  - Memperbaiki masalah di mana memodifikasi blok setelah menduplikasi templatenya dapat secara tidak sengaja memengaruhi konten blok asli. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) oleh @gchust
- **[Notification: In-app message]** Memperbaiki risiko injeksi SQL pada filter stempel waktu saluran notifikasi dalam aplikasi. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) oleh @mytharcher
- **[License settings]** Memperbaiki masalah di mana halaman pengaturan lisensi bisa menggantung lama saat pemeriksaan login pkg lambat atau tidak terjangkau. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) oleh @hongboji
- **[Workflow: JavaScript]** Memperjelas bahwa mode dukungan modul Workflow JavaScript tidak aman dan bukan batasan izin. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) oleh @mytharcher
  Referensi: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** Memperbaiki izin yang tidak lengkap pada login pertama saat peran gabungan adalah peran default. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) oleh @2013xile
- **[File manager]** Memperbaiki validasi jalur penyimpanan file lokal untuk mencegah jalur yang tidak aman keluar dari root penyimpanan yang dikonfigurasi. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) oleh @mytharcher
- **[Password policy]** Memperbaiki masalah di mana validasi kebijakan kata sandi bisa gagal untuk nilai kata sandi numerik. oleh @2013xile
