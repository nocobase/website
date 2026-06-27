---
title: "NocoBase v2.1.0-beta.33: Menambahkan dukungan klien v2 untuk blok Markdown"
description: "Catatan Rilis v2.1.0-beta.33"
---

### 🎉 Fitur Baru

- **[Blok: Markdown]** Menambahkan dukungan klien v2 untuk blok Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) oleh @jiannx

- **[Blok: Daftar]** Blok daftar mendukung client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) oleh @jiannx

- **[Kalender]** Menambahkan dukungan klien v2 untuk plugin Kalender. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) oleh @jiannx

- **[Blok: Pohon]** Menambahkan dukungan client-v2 untuk blok filter pohon. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) oleh @jiannx

### 🚀 Peningkatan

- **[flow-engine]** Menambahkan pesan konfirmasi perubahan yang belum disimpan saat menutup halaman konfigurasi alur peristiwa dengan data yang belum disimpan. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) oleh @gchust

- **[Manajer sumber data]** Mengoptimalkan API pemodelan data untuk mendukung pembuatan koleksi komentar dengan AI, mengonfigurasi bidang relasi untuk sumber data eksternal, dan mengatur aturan validasi bidang ([#9480](https://github.com/nocobase/nocobase/pull/9480)) oleh @2013xile

- **[Blok: GridCard]** Memperbarui plugin kartu grid untuk mendukung client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) oleh @jiannx

- **[Blok: iframe]** Menambahkan dukungan v2 untuk blok iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) oleh @jiannx

- **[Karyawan AI]** Interaksi percakapan paralel karyawan AI dan optimalisasi kinerja ([#9462](https://github.com/nocobase/nocobase/pull/9462)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**
  - Menambahkan pengaturan "Setelah pengiriman berhasil" untuk tindakan kirim formulir. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) oleh @jiannx

  - Memperbaiki pencegahan pembukaan edit cepat untuk bidang relasi di tabel ([#9469](https://github.com/nocobase/nocobase/pull/9469)) oleh @katherinehhh

  - Memperbaiki bidang relasi hanya-tampilan di sub-tabel yang tidak muncul atau tidak dapat diklik setelah penyegaran. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) oleh @jiannx

  - Memperbaiki masalah di mana pengaturan nilai default lama tidak dapat dihapus. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) oleh @gchust

  - Memperbaiki bidang pilihan ganda di blok data v2 yang seharusnya menampilkan label opsi, bukan nilai ([#9472](https://github.com/nocobase/nocobase/pull/9472)) oleh @katherinehhh

- **[client-v2]**
  - Memperbaiki masalah di mana daftar opsi bidang judul kosong untuk bidang relasi di blok tabel ([#9490](https://github.com/nocobase/nocobase/pull/9490)) oleh @katherinehhh

  - Menjaga grup kosong setelah memfilter menu v1 di tata letak v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) oleh @zhangzhonghe

- **[flow-engine]** Memperbaiki submenu bidang relasi yang tidak stabil di menu submodel ([#9417](https://github.com/nocobase/nocobase/pull/9417)) oleh @jiannx

- **[Manajer Berkas]** Memperbaiki unggahan `tx-cos` manajer berkas yang kehilangan metadata ukuran berkas. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) oleh @mytharcher

- **[Karyawan AI]** Memperbaiki kesalahan muat plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) oleh @cgyrock

- **[Blok: Formulir multi-langkah]** Memperbaiki masalah scrollbar saat mengaktifkan tinggi penuh di blok formulir langkah v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) oleh @katherinehhh

- **[Workflow: Webhook]** Memperbaiki masalah di mana pembuatan simpul respons dicegat oleh validasi konfigurasi `statusCode` oleh @mytharcher

- **[Bidang koleksi: Tanda tangan]** Menyelesaikan masalah tampilan kotak tanda tangan di perangkat seluler oleh @chenzhizdt
