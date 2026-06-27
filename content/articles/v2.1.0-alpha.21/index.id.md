---
title: "NocoBase v2.1.0-alpha.21: Alur kerja telah menambahkan instruksi karyawan AI"
description: "Catatan Rilis v2.1.0-alpha.21"
---

### 🎉 Fitur Baru

- **[Blok: Kanban]** blok kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) oleh @jiannx

- **[Karyawan AI]** Alur kerja telah menambahkan instruksi karyawan AI ([#9025](https://github.com/nocobase/nocobase/pull/9025)) oleh @cgyrock

- **[Auth: OIDC]** atribut pemetaan mendukung bidang khusus oleh @chenzhizdt

- **[DingTalk]** DingTalk: notifikasi, login otomatis di DingTalk, dan sinkronisasi pengguna. oleh @chenzhizdt

### 🚀 Peningkatan

- **[build]** Basis pengetahuan mendukung unggah file batch melalui ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) oleh @cgyrock

- **[ai]** Karyawan AI dan basis pengetahuan sekarang mendukung jenis file tambahan untuk diunggah (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) oleh @cgyrock

- **[Alur Kerja]** Meningkatkan kinerja daftar eksekusi ([#9214](https://github.com/nocobase/nocobase/pull/9214)) oleh @mytharcher

- **[Alur Kerja: Acara tindakan kustom]** Menambahkan kontrol ACL untuk pemicu pada mode rekaman (tunggal dan ganda) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) oleh @mytharcher

- **[AI: Basis pengetahuan]** Basis pengetahuan mendukung unggah file batch melalui ZIP oleh @cgyrock

### 🐛 Perbaikan Bug

- **[data-source-manager]**
  - Memperbaiki sinkronisasi bidang nullable ([#9189](https://github.com/nocobase/nocobase/pull/9189)) oleh @2013xile

  - Perbaikan untuk bidang persentase yang diatur ulang ke numerik saat menyinkronkan ulang sumber data eksternal ([#9178](https://github.com/nocobase/nocobase/pull/9178)) oleh @jiannx

- **[klien]**
  - Memperbaiki blok relasi popup dan variabel rekaman popup yang menggunakan pengenal rekaman yang salah ketika koleksi menggunakan kunci unik non-primer ([#9191](https://github.com/nocobase/nocobase/pull/9191)) oleh @2013xile

  - Memperbaiki masalah di mana nilai default tidak akan berlaku setelah membuat rekaman. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) oleh @gchust

  - Memperbaiki masalah di mana tombol Tambah tab terlalu dekat dengan tepi kanan ([#9177](https://github.com/nocobase/nocobase/pull/9177)) oleh @zhangzhonghe

- **[Alur Kerja: Node agregat]** Memperbaiki masalah di mana node agregat tidak dapat disimpan karena aturan validasi yang salah ([#9208](https://github.com/nocobase/nocobase/pull/9208)) oleh @mytharcher

- **[Kalender]** tidak mendaftarkan tindakan kalender ke blok lain ([#9200](https://github.com/nocobase/nocobase/pull/9200)) oleh @jiannx

- **[Karyawan AI]**
  - Memperbaiki masalah di mana karyawan AI tidak dapat mengisi nilai bidang relasi dalam formulir. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) oleh @cgyrock

  - Memperbaiki anomali pencatatan log dalam instruksi karyawan AI ([#9180](https://github.com/nocobase/nocobase/pull/9180)) oleh @cgyrock

- **[Departemen]** Memperbaiki masalah di mana sinkronisasi departemen berulang tidak dapat memperbarui urutan pengurutan departemen ([#9173](https://github.com/nocobase/nocobase/pull/9173)) oleh @2013xile

- **[Alur Kerja: JavaScript]**
  - Memperbaiki masalah keamanan skrip yang dijalankan dalam mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) oleh @mytharcher

  - Memperbaiki masalah di mana kesalahan muncul saat mengonfigurasi node JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) oleh @mytharcher

- **[Multi-ruang]** Memperbaiki kesalahan tidak menemukan koleksi dalam verifikasi izin ruang oleh @jiannx

- **[AI: Basis pengetahuan]** Memperbaiki masalah di mana basis data vektor tidak disinkronkan saat menghapus dokumen basis pengetahuan. oleh @cgyrock

- **[Alur Kerja: Persetujuan]** Memperbaiki pencarian penerima tugas ulang persetujuan untuk menanyakan pengguna di luar 200 kandidat pertama oleh @zhangzhonghe

- **[WeCom]** Memperbaiki urutan departemen yang hilang saat menyinkronkan departemen dari WeCom oleh @2013xile
