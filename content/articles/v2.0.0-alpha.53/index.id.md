---
title: "NocoBase v2.0.0-alpha.53: dukungan pemformatan angka untuk bidang persentase"
description: "Catatan Rilis v2.0.0-alpha.53"
---

### 🚀 Peningkatan

- **[acl]** Mendukung API `acl.registerSnippet` untuk menggabungkan konfigurasi cuplikan ([#8155](https://github.com/nocobase/nocobase/pull/8155)) oleh @mytharcher

- **[client]** Mendukung pemformatan angka untuk bidang persentase ([#8123](https://github.com/nocobase/nocobase/pull/8123)) oleh @katherinehhh

- **[flow-engine]** Mendukung penyembunyian menu konfigurasi langkah secara dinamis ([#7924](https://github.com/nocobase/nocobase/pull/7924)) oleh @gchust

- **[Blok: GridCard]** Mengoptimalkan gaya blok Grid Card untuk tata letak yang lebih ringkas ([#8152](https://github.com/nocobase/nocobase/pull/8152)) oleh @katherinehhh

- **[Karyawan AI]** Mengaktifkan fungsionalitas pengeditan untuk prompt sistem asisten AI bawaan.<br/>Mengoptimalkan prompt sistem untuk asisten AI Nathan.<br/>Memperbaiki masalah server gagal membaca file statis. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) oleh @heziqiang

- **[Workflow]**
  - Menambahkan logika toleransi kesalahan untuk data yang hilang dalam persiapan prosesor, untuk menghindari eksekusi menggantung ([#8156](https://github.com/nocobase/nocobase/pull/8156)) oleh @mytharcher

  - Menggunakan lazy load untuk data asosiasi pada kanvas workflow guna meningkatkan performa ([#8142](https://github.com/nocobase/nocobase/pull/8142)) oleh @mytharcher

- **[Bidang koleksi: Markdown(Vditor)]** Menonaktifkan parsing variabel di bidang Markdown secara default dalam mode readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki unduhan file yang salah untuk lampiran ([#8154](https://github.com/nocobase/nocobase/pull/8154)) oleh @katherinehhh

- **[client]**
  - Memperbaiki dropdown bidang asosiasi yang dinonaktifkan ketika bidang opsi ada ([#8153](https://github.com/nocobase/nocobase/pull/8153)) oleh @katherinehhh

  - Memperbaiki masalah di mana memasukkan teks bahasa China menghapus opsi yang ada saat menggunakan operator multi-pilih pada bidang pilih tunggal di blok formulir filter. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) oleh @gchust

  - Memperbaiki masalah di mana mengganti bidang label menyebabkan konfigurasi popup hilang. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) oleh @gchust

- **[acl]** Memperbaiki masalah di mana API `acl.can` mengembalikan `null` ketika peran adalah `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) oleh @mytharcher

- **[database]** `filterByTk` sekarang mendukung array saat melakukan kueri koleksi dengan beberapa kunci target filter ([#7986](https://github.com/nocobase/nocobase/pull/7986)) oleh @chenos

- **[Aksi: Impor catatan]** Menunggu secara sinkron hingga event `afterCreate` yang dipicu oleh impor selesai. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) oleh @2013xile

- **[Bidang koleksi: Sequence]** Meningkatkan ketahanan plugin-field-sequence saat menangani perintah perbaikan ([#8139](https://github.com/nocobase/nocobase/pull/8139)) oleh @cgyrock

- **[Workflow: Node manual]** Memperbaiki masalah daftar tugas manual yang menggunakan API yang salah ([#8144](https://github.com/nocobase/nocobase/pull/8144)) oleh @mytharcher

- **[Enkripsi permintaan HTTP]** Menggunakan tanda kurung untuk format array dalam parsing qs oleh @chenos

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana kesalahan muncul saat membatalkan eksekusi ketika workflow-nya telah dihapus oleh @mytharcher

- **[Manajer migrasi]** Memperbaiki masalah di mana baris baru dalam data hilang selama migrasi. oleh @cgyrock
