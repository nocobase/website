---
title: "NocoBase v2.1.0-beta.15: atribut pemetaan mendukung bidang kustom"
description: "Catatan Rilis v2.1.0-beta.15"
---

### 🎉 Fitur Baru

- **[Blok: Kanban]** blok kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) oleh @jiannx

- **[Auth: OIDC]** atribut pemetaan mendukung bidang kustom oleh @chenzhizdt

- **[DingTalk]** DingTalk: notifikasi, login otomatis di dalam DingTalk, dan sinkronisasi pengguna. oleh @chenzhizdt

### 🚀 Peningkatan

- **[build]** Basis pengetahuan mendukung unggah file batch melalui ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) oleh @cgyrock

- **[ai]** Karyawan AI dan basis pengetahuan kini mendukung jenis file tambahan untuk diunggah (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) oleh @cgyrock

- **[Workflow]** Meningkatkan kinerja daftar eksekusi ([#9214](https://github.com/nocobase/nocobase/pull/9214)) oleh @mytharcher

- **[AI: Basis pengetahuan]** Basis pengetahuan mendukung unggah file batch melalui ZIP oleh @cgyrock

- **[Workflow: Persetujuan]** Menambahkan indeks pada kolom catatan persetujuan untuk meningkatkan kinerja pada daftar dan tindakan kirim oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah di mana bidang desimal dengan validasi dapat menolak input numerik yang valid ([#9204](https://github.com/nocobase/nocobase/pull/9204)) oleh @2013xile

- **[client]**
  - Memperbaiki masalah di mana tombol tab Tambah terlalu dekat dengan tepi kanan ([#9177](https://github.com/nocobase/nocobase/pull/9177)) oleh @zhangzhonghe

  - Memperbaiki blok relasi popup dan variabel rekaman popup yang menggunakan pengidentifikasi rekaman yang salah ketika koleksi menggunakan kunci unik non-primer ([#9191](https://github.com/nocobase/nocobase/pull/9191)) oleh @2013xile

  - Memperbaiki masalah di mana nilai default tidak akan berlaku setelah membuat rekaman. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) oleh @gchust

- **[data-source-manager]**
  - Memperbaiki sinkronisasi bidang nullable ([#9189](https://github.com/nocobase/nocobase/pull/9189)) oleh @2013xile

  - Memperbaiki bidang persentase yang diatur ulang menjadi numerik saat menyinkronkan ulang sumber data eksternal ([#9178](https://github.com/nocobase/nocobase/pull/9178)) oleh @jiannx

- **[Karyawan AI]**
  - Memperbaiki masalah nilai bidang URL yang hilang untuk lampiran dalam pemilihan formulir karyawan AI. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) oleh @cgyrock

  - Memperbaiki masalah di mana karyawan AI tidak dapat mengisi nilai bidang relasi dalam formulir. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) oleh @cgyrock

- **[Pengguna]** Memperbaiki bidang yang dikonfigurasi secara dinamis di Edit profil tidak memuat data pengguna terbaru ([#9205](https://github.com/nocobase/nocobase/pull/9205)) oleh @2013xile

- **[Kalender]** tidak mendaftarkan tindakan kalender ke blok lain ([#9200](https://github.com/nocobase/nocobase/pull/9200)) oleh @jiannx

- **[Departemen]** Memperbaiki masalah di mana sinkronisasi departemen berulang tidak dapat memperbarui urutan pengurutan departemen ([#9173](https://github.com/nocobase/nocobase/pull/9173)) oleh @2013xile

- **[Workflow: JavaScript]** Memperbaiki masalah keamanan skrip yang dijalankan dalam mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) oleh @mytharcher

- **[Manajer sumber data]** Memperbaiki masalah di mana pengurutan berkelompok pada bidang pengurutan sumber data eksternal tidak dapat dibersihkan ([#9203](https://github.com/nocobase/nocobase/pull/9203)) oleh @2013xile

- **[Multi-ruang]** Memperbaiki kesalahan tidak menemukan koleksi dalam verifikasi izin ruang oleh @jiannx

- **[AI: Basis pengetahuan]** Memperbaiki masalah di mana basis data vektor tidak disinkronkan saat menghapus dokumen basis pengetahuan. oleh @cgyrock

- **[Workflow: Persetujuan]** Memperbaiki pencarian penerima tugas ulang persetujuan untuk menanyakan pengguna di luar 200 kandidat pertama oleh @zhangzhonghe

- **[WeCom]** Memperbaiki urutan departemen yang hilang saat menyinkronkan departemen dari WeCom oleh @2013xile
