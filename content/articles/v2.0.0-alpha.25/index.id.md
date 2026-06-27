---
title: "NocoBase v2.0.0-alpha.25: Pengalaman coding AI yang dioptimalkan"
description: "Catatan Rilis v2.0.0-alpha.25"
---

### 🚀 Peningkatan

- **[server]** Menambahkan log gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) oleh @2013xile

- **[flow-engine]** Mendukung pendefinisian konteks variabel dalam definisi langkah alur ([#7674](https://github.com/nocobase/nocobase/pull/7674)) oleh @gchust

- **[Visualisasi Data]**
  - menambahkan petunjuk untuk menjalankan kueri sebelum mengonfigurasi opsi bagan ([#7685](https://github.com/nocobase/nocobase/pull/7685)) oleh @heziqiang

  - menyegarkan data bagan saat tombol pratinjau global diklik ([#7678](https://github.com/nocobase/nocobase/pull/7678)) oleh @heziqiang

- **[Karyawan AI]** Mengoptimalkan pengalaman pengkodean AI, termasuk menggunakan karyawan AI untuk meninjau, mendiagnosis, dan memperbaiki kode. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) oleh @cgyrock

- **[Manajer sumber data]** Menyesuaikan urutan kolom tipe bidang dan antarmuka, serta menambahkan langkah konfirmasi saat melakukan modifikasi. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) oleh @2013xile

- **[Alur Kerja]** Melengkapi konfigurasi alur kerja terikat untuk tombol aksi perbarui catatan ([#7668](https://github.com/nocobase/nocobase/pull/7668)) oleh @mytharcher

- **[Manajer multi-aplikasi (usang)]** meningkatkan supervisor aplikasi ([#7661](https://github.com/nocobase/nocobase/pull/7661)) oleh @chenos

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana pengguna tidak dapat mengatur nilai default untuk bidang yang ditampilkan dalam mode hanya-baca. Ini memastikan konfigurasi bidang yang lebih lancar ketika bidang tidak dapat diedit. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) oleh @gchust

  - Memperbaiki masalah yang diketahui dengan aturan tautan subformulir ([#7698](https://github.com/nocobase/nocobase/pull/7698)) oleh @zhangzhonghe

  - Menu bidang blok js tidak dapat dimuat di blok formulir filter ([#7690](https://github.com/nocobase/nocobase/pull/7690)) oleh @gchust

- **[flow-engine]** pemilihan konteks yang salah dari catatan popup saat ini saat mengedit lingkup data bidang terkait di dalam formulir edit ([#7675](https://github.com/nocobase/nocobase/pull/7675)) oleh @gchust

- **[Alur Kerja: Node manual]** Memperbaiki masalah di mana tugas manual menghilang setelah alur kerja dinonaktifkan ([#7687](https://github.com/nocobase/nocobase/pull/7687)) oleh @mytharcher

- **[Karyawan AI]** Memperbaiki masalah di mana blok dengan sumber daya API terkait tidak mengambil data yang sesuai saat dipilih. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) oleh @cgyrock

- **[Alur Kerja]** Memperbaiki masalah di mana, setelah menghapus node yang memulai percabangan, kunci dari node pertama yang dipertahankan dalam cabang secara tidak benar diubah menjadi nilai baru ([#7665](https://github.com/nocobase/nocobase/pull/7665)) oleh @mytharcher

- **[Bidang koleksi: divisi administratif China]** Impor data gagal ketika kota dan area memiliki nama yang sama ([#7673](https://github.com/nocobase/nocobase/pull/7673)) oleh @2013xile

- **[Manajer file]** Memperbaiki masalah di mana file `.msg` tidak dapat diunggah dengan benar ([#7662](https://github.com/nocobase/nocobase/pull/7662)) oleh @mytharcher

- **[Flow engine]** tidak dapat menyelesaikan variabel dalam aksi bidang set tautan ([#7684](https://github.com/nocobase/nocobase/pull/7684)) oleh @gchust

- **[Visualisasi Data]** menggunakan API sql:runById untuk mengambil data kueri saat inisialisasi ([#7677](https://github.com/nocobase/nocobase/pull/7677)) oleh @heziqiang

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah terjemahan teks status dalam notifikasi penyelesaian persetujuan, menggunakan bahasa default sistem untuk terjemahan ketika pengguna belum mengatur preferensi bahasa oleh @mytharcher
