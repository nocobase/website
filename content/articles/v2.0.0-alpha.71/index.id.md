---
title: "NocoBase v2.0.0-alpha.71: mendukung tinggi blok yang dapat dikonfigurasi"
description: "Catatan Rilis v2.0.0-alpha.71"
---

### 🎉 Fitur Baru

- **[klien]**
  - Mendukung konfigurasi judul tab browser untuk halaman, tab halaman, popup, dan tab popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) oleh @zhangzhonghe

  - Mendukung konfigurasi bidang dari bidang koleksi asosiasi di blok formulir ([#8578](https://github.com/nocobase/nocobase/pull/8578)) oleh @katherinehhh

- **[Blok: GridCard]** Mendukung tinggi blok yang dapat dikonfigurasi ([#8583](https://github.com/nocobase/nocobase/pull/8583)) oleh @katherinehhh

- **[Aksi: Duplikat rekaman]** Menambahkan aksi duplikat 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) oleh @katherinehhh

- **[Alur Kerja: Persetujuan]** Menambahkan kontrol ACL untuk API persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** Menggunakan model bidang independen untuk bidang asosiasi di formulir filter ([#8511](https://github.com/nocobase/nocobase/pull/8511)) oleh @zhangzhonghe

- **[Alur Kerja: CC]** Memperbarui plugin CC alur kerja untuk mendukung arsitektur FlowModel dengan kompatibilitas v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[mesin-alur]**
  - Memperbaiki konteks eksekusi yang salah untuk "ctx.sql" di Model JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) oleh @gchust

  - Memperbaiki masalah di mana objek Blob tidak dapat dibuat di blok JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) oleh @gchust

- **[klien]**
  - Memperbaiki masalah di mana kolom tabel tidak merender ulang setelah mengklik Jalankan di editor kolom JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) oleh @gchust

  - Memperbaiki potensi kesalahan render "baca tersembunyi" dalam mode non-konfigurasi. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) oleh @gchust

  - Memperbaiki sub-tabel (edit inline) yang masih menampilkan kolom mode edit setelah beralih ke tampilan hanya-baca di formulir edit ([#8589](https://github.com/nocobase/nocobase/pull/8589)) oleh @katherinehhh

- **[Mesin alur]** Memperbaiki masalah di mana menggunakan template blok dalam mode "Duplikat" menyebabkan popup kosong jika mengklik tombol aksi dari blok tersebut. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) oleh @gchust

- **[Komponen bidang: mask]** Memperbaiki masalah di mana popup pengaturan bidang mask tidak dapat memuat semua peran pengguna dengan benar. oleh @gchust

- **[Alur Kerja: Persetujuan]** Memperbaiki id yang salah untuk memuat rekaman detail oleh @mytharcher
