---
title: "NocoBase v2.1.0-alpha.36: Menambahkan dukungan klien v2 untuk blok Markdown"
description: "Catatan Rilis v2.1.0-alpha.36"
---

### 🎉 Fitur Baru

- **[Blok: Markdown]** Menambahkan dukungan klien v2 untuk blok Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) oleh @jiannx

- **[Blok: Daftar]** Blok daftar mendukung client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) oleh @jiannx

### 🚀 Peningkatan

- **[flow-engine]** Menambahkan pesan konfirmasi perubahan yang belum disimpan saat menutup halaman konfigurasi alur peristiwa dengan data yang belum disimpan. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) oleh @gchust

- **[cli]** Meningkatkan pengalaman prompt CLI NocoBase dengan memigrasikan alur kerja penyiapan dan pengelolaan ke Inquirer, serta memperbaiki masalah terkait instalasi, skills, dan runtime Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) oleh @chenos

- **[Manajer sumber data]** Mengoptimalkan API pemodelan data untuk mendukung pembuatan koleksi komentar dengan AI, mengonfigurasi bidang relasi untuk sumber data eksternal, dan mengatur aturan validasi bidang ([#9480](https://github.com/nocobase/nocobase/pull/9480)) oleh @2013xile

- **[Blok: GridCard]** Memperbarui plugin kartu grid untuk mendukung client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) oleh @jiannx

- **[Blok: iframe]** Menambahkan dukungan v2 untuk blok iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki bidang relasi hanya-tampilan di sub-tabel yang tidak muncul atau tidak dapat diklik setelah penyegaran. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) oleh @jiannx

  - Menambahkan pengaturan "Setelah pengiriman berhasil" untuk aksi kirim formulir. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) oleh @jiannx

- **[client-v2]** Memperbaiki masalah di mana daftar opsi bidang judul kosong untuk bidang relasi di blok tabel ([#9490](https://github.com/nocobase/nocobase/pull/9490)) oleh @katherinehhh

- **[flow-engine]** Memperbaiki submenu bidang relasi yang tidak stabil di menu submodel ([#9417](https://github.com/nocobase/nocobase/pull/9417)) oleh @jiannx

- **[Manajer file]** Memperbaiki unggahan `tx-cos` manajer file yang kehilangan metadata ukuran file. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) oleh @mytharcher

- **[Bidang koleksi: Tanda tangan]** Menyelesaikan masalah tampilan kotak tanda tangan di perangkat seluler oleh @chenzhizdt
