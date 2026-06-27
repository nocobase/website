---
title: "NocoBase v2.0.0-alpha.47: Mendukung inisialisasi bidang filter yang dipilih dalam kueri bagan"
description: "Catatan Rilis v2.0.0-alpha.47"
---

### 🚀 Peningkatan

- **[klien]**
  - Mendukung inisialisasi bidang filter yang dipilih dalam kueri grafik ([#7933](https://github.com/nocobase/nocobase/pull/7933)) oleh @heziqiang

  - Gunakan kurung kurawal tiga (`{{{` dan `}}}`) untuk variabel dalam konten pesan, untuk menghindari variabel di-escape oleh Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) oleh @mytharcher

  - Menambahkan status pemuatan untuk tombol aksi perbarui rekaman dan hapus rekaman, untuk menghindari permintaan duplikat ([#7964](https://github.com/nocobase/nocobase/pull/7964)) oleh @mytharcher

- **[Bidang Koleksi: Markdown(Vditor)]** menyesuaikan lebar konten layar penuh vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana membuka blok detail di popup untuk bidang relasi non-ID menyebabkan kesalahan. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) oleh @gchust

  - Memperbaiki masalah di mana data asosiasi gagal dimuat dengan benar di popup untuk bidang relasi non-ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) oleh @gchust

  - Memperbaiki masalah perutean saat menggunakan Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) oleh @zhangzhonghe

  - Memperbaiki masalah pengaturan presisi yang tidak valid untuk format bidang numerik ([#7967](https://github.com/nocobase/nocobase/pull/7967)) oleh @katherinehhh

  - Memperbaiki pengetikan yang salah di halaman 2.0 baru ([#7945](https://github.com/nocobase/nocobase/pull/7945)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana nilai filter tidak dibersihkan saat mengklik tombol Reset ([#7966](https://github.com/nocobase/nocobase/pull/7966)) oleh @zhangzhonghe

- **[Workflow]** Memperbaiki jumlah tugas yang tidak muncul karena penyalahgunaan penyedia ([#7968](https://github.com/nocobase/nocobase/pull/7968)) oleh @mytharcher

- **[Visualisasi data]** Menyelesaikan masalah di mana kueri grafik tidak mendukung lingkup data ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) oleh @2013xile

- **[Blok: Referensi]** Memperbaiki masalah di mana mengutip sebuah blok akan menghapus blok yang dikutip dari halaman asli. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) oleh @gchust

- **[Karyawan AI]** Memperbaiki masalah saat AI menghasilkan output SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) oleh @heziqiang

- **[Cetak template]** Memperbaiki kegagalan menambahkan template di operasi cetak template rekaman oleh @katherinehhh
