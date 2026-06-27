---
title: "NocoBase v2.1.7: Dukungan pencadangan dan pemulihan untuk KingBase sebagai basis data utama"
description: "Catatan Rilis v2.1.7"
---

### 🎉 Fitur Baru

- **[Manajer Cadangan]** Mendukung pencadangan dan pemulihan untuk KingBase sebagai basis data utama ([#9791](https://github.com/nocobase/nocobase/pull/9791)) oleh @2013xile
- **[Manajer Migrasi]** Mendukung migrasi untuk KingBase sebagai basis data utama. oleh @2013xile

### 🚀 Peningkatan

- **[AI: Basis Pengetahuan]** Peningkatan pengambilan dan dokumentasi basis pengetahuan AI. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) oleh @cgyrock
- **[cli]** Menambahkan versi skema konfigurasi env ([#9782](https://github.com/nocobase/nocobase/pull/9782)) oleh @chenos
- **[Workflow]** Menstabilkan pengujian opsi pembaruan ([#9773](https://github.com/nocobase/nocobase/pull/9773)) oleh @mytharcher
- **[Manajer Berkas]** Peningkatan pratinjau PDF: file PDF lintas-asal sekarang menggunakan penampil bawaan browser, sementara file PDF asal sama tetap menggunakan PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) oleh @mytharcher
- **[Manajer Cadangan]** Tabel yang `dataCategory` koleksinya ditandai sebagai `'runtime'` sekarang secara otomatis dikecualikan dari pencadangan. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) oleh @cgyrock
- **[AI: Basis Pengetahuan]** Peningkatan segmentasi dokumen basis pengetahuan AI, manajemen segmen, pengujian kecocokan, dan dukungan node alur kerja dokumen. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client-v2]**

  - Memperbaiki masalah di mana pengiriman formulir menampilkan pesan yang salah ketika subformulir berisi sub-tabel. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) oleh @gchust
  - Memperbaiki masalah di mana alur peristiwa pada kolom sub-tabel dieksekusi secara tidak benar. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) oleh @gchust
  - Menghapus `updateAssociationValues` yang tidak diharapkan dari bidang asosiasi ([#9812](https://github.com/nocobase/nocobase/pull/9812)) oleh @katherinehhh
  - Memperbaiki opsi Ya/Tidak yang tidak diterjemahkan di dropdown kotak centang formulir filter v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) oleh @katherinehhh
  - Memperbaiki masalah di mana pengaturan alur peristiwa tidak dapat diperbarui setelah menyimpan blok sebagai templat. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) oleh @gchust
  - Memperbaiki tampilan dan pengaturan format yang salah ketika bidang judul asosiasi tabel v2 menggunakan bidang waktu, tanggal-saja, atau datetime. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) oleh @katherinehhh
- **[Workflow]** Memperbaiki pemulihan dispatcher workflow setelah kesalahan dispatch yang tidak terduga. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) oleh @mytharcher
- **[Manajer Berkas]** Memperbaiki kesalahan 404 saat mengunggah file ke bidang URL lampiran di sumber data eksternal ([#9809](https://github.com/nocobase/nocobase/pull/9809)) oleh @2013xile
- **[Aksi: Permintaan Kustom]** Memperbaiki aksi permintaan kustom V2 yang menampilkan kesalahan yang tidak perlu ketika pengaturan permintaan tidak dikonfigurasi. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) oleh @katherinehhh
- **[Karyawan AI]**

  - Memperbaiki masalah di mana karyawan AI tidak dapat mengisi data sub-tabel dengan benar. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) oleh @gchust
  - Memperbaiki pemicu tugas pintasan karyawan AI sehingga lampiran dari konteks kerja saat ini disertakan saat menjalankan tugas dari profil pintasan. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) oleh @cgyrock
- **[Workflow: Peristiwa aksi kustom]** Memperbaiki tombol pemicu workflow panel aksi v2 yang menampilkan sukses dan mengirim permintaan ketika tidak ada workflow yang terikat. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) oleh @mytharcher
- **[Mesin Alur]** Memperbaiki masalah di mana formulir dan detail rekaman saat ini di popup dapat berisi data yang salah ketika dibuat oleh AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) oleh @gchust
- **[Manajer Tugas Async]** Memperbaiki kesalahan unduh file tugas async ketika id tugas hilang dari `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) oleh @mytharcher
- **[Sumber Data: NocoBase Eksternal]** Proksi unggah dan penyimpanan file sumber data eksternal NocoBase melalui sumber data unggah oleh @2013xile
- **[Multi-ruang]** Memperbaiki kesalahan izin ketika manajer ruang menambahkan pengguna tanpa akses ke bidang email pengguna. oleh @jiannx
- **[Workflow: Subflow]** Memperbaiki subflow asinkron sehingga workflow induk dapat melanjutkan setelah restart pekerja atau kehilangan pemetaan peristiwa dalam memori. oleh @mytharcher
- **[Pengawas Aplikasi]** Memperbaiki crash ketika respons proxy WebSocket jarak jauh gagal oleh @2013xile
