---
title: "NocoBase v2.0.0-alpha.41: menambahkan karyawan AI untuk mengonfigurasi grafik"
description: "Catatan Rilis v2.0.0-alpha.41"
---

### 🎉 Fitur Baru

- **[Visualisasi data]** menambahkan AI untuk mengonfigurasi grafik ([#7815](https://github.com/nocobase/nocobase/pull/7815)) oleh @heziqiang

### 🚀 Peningkatan

- **[flow-engine]**
  - Mendukung pemantauan event perubahan pohon model alur di flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) oleh @gchust

  - meningkatkan resolusi variabel record saat ini, membuat pembukaan dialog lebih cepat ([#7895](https://github.com/nocobase/nocobase/pull/7895)) oleh @gchust

  - Mengoptimalkan struktur API dari library pihak ketiga dalam konteks runjs dan menambahkan dukungan untuk library ikon Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) oleh @gchust

- **[database]** Merefaktor plugin enkripsi bidang untuk meningkatkan keamanan, mendukung pembuatan dan rotasi kunci aplikasi, serta kunci enkripsi per bidang. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) oleh @cgyrock

- **[Bidang koleksi: Enkripsi]** Mengoptimalkan plugin enkripsi bidang untuk mendukung pengambilan data dengan IV independen oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana blok tersembunyi masih memakan ruang di halaman. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) oleh @gchust

  - Memperbaiki masalah di mana tombol reset pada tombol filter menghapus kondisi default ([#7903](https://github.com/nocobase/nocobase/pull/7903)) oleh @zhangzhonghe

  - memperbaiki pemeriksaan izin yang salah untuk bidang subform di formulir baru ([#7902](https://github.com/nocobase/nocobase/pull/7902)) oleh @katherinehhh

- **[server]** Memperbaiki masalah dalam mode pemisahan layanan di mana pesan antrian yang tidak berlangganan tidak dapat dipublikasikan ([#7875](https://github.com/nocobase/nocobase/pull/7875)) oleh @mytharcher

- **[Workflow]**
  - Memperbaiki kesalahan yang disebabkan oleh mendengarkan event sumber data eksternal yang tidak ada ([#7855](https://github.com/nocobase/nocobase/pull/7855)) oleh @mytharcher

  - Menggunakan eventQueue sebagai pengganti backgroundJob bersama untuk mencegah antrian bersama dikonsumsi secara tidak benar dalam mode pemisahan layanan ([#7871](https://github.com/nocobase/nocobase/pull/7871)) oleh @mytharcher

- **[Workflow: Node manual]** Memperbaiki namespace dari bahasa lokal yang harus digunakan, untuk menampilkan konten terjemahan yang benar ([#7877](https://github.com/nocobase/nocobase/pull/7877)) oleh @mytharcher

- **[Kontrol akses]** Masalah di mana potongan operasi asosiasi tidak berpengaruh ([#7876](https://github.com/nocobase/nocobase/pull/7876)) oleh @2013xile

- **[Workflow: Event aksi kustom]** Memperbaiki kesalahan yang disebabkan oleh mendengarkan event sumber data eksternal yang tidak ada oleh @mytharcher

- **[Komentar]** memperbaiki masalah ketika komentar yang dikutip dalam blok komentar gagal ditampilkan oleh @katherinehhh

- **[Cetak template]** mengurai variabel dalam filter oleh @jiannx

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana kondisi balapan yang terjadi selama pemrosesan persetujuan bersamaan oleh beberapa penyetuju dapat menyebabkan node alur kerja dieksekusi lebih dari satu kali oleh @mytharcher
