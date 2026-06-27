---
title: "NocoBase v2.1.0-beta.43: Perbarui dokumentasi Embed NocoBase untuk plugin sumber terbuka"
description: "Catatan Rilis v2.1.0-beta.43"
---

### 🎉 Fitur Baru

- **[client-v2]** Menambahkan `TypedVariableInput` sehingga kolom port SMTP dan mode aman plugin email v2 dapat menerima konstanta bertipe atau variabel `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) oleh @Molunerfinn

- **[Kontrol akses]** Memigrasikan halaman pengaturan Pengguna serta Peran & Izin ke v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) oleh @jiannx

### 🚀 Peningkatan

- **[undefined]** Memperbarui dokumentasi Embed NocoBase untuk plugin sumber terbuka ([#9642](https://github.com/nocobase/nocobase/pull/9642)) oleh @zhangzhonghe
Referensi: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Meningkatkan dukungan pelengkapan otomatis untuk beberapa fungsi RunJS bawaan. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) oleh @gchust

- **[cli]** Meningkatkan panduan init dan pembaruan mandiri ([#9633](https://github.com/nocobase/nocobase/pull/9633)) oleh @chenos

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana blok mungkin salah ditampilkan sebagai terhapus setelah menyegarkan halaman ([#9662](https://github.com/nocobase/nocobase/pull/9662)) oleh @zhangzhonghe

  - Memperbaiki perilaku aturan tautan aksi rekaman yang salah di blok tabel. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) oleh @gchust

  - (aturan tautan) memperbaiki bidang yang menjadi hanya-baca saat ditampilkan setelah disembunyikan ([#9649](https://github.com/nocobase/nocobase/pull/9649)) oleh @katherinehhh

- **[cli]** Memperbaiki template nginx untuk menyajikan aset `.mjs` dengan tipe MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) oleh @mytharcher

- **[database]** Memperbaiki masalah di mana impor nilai kata sandi numerik bisa gagal ([#9635](https://github.com/nocobase/nocobase/pull/9635)) oleh @2013xile

- **[flow-engine]**
  - Memperbaiki masalah di mana popup menampilkan data UI usang setelah mengganti sakelar mode konfigurasi UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) oleh @gchust

  - Memperbaiki masalah di mana pencarian bidang dihapus saat mengarahkan kursor ke bidang asosiasi ([#9646](https://github.com/nocobase/nocobase/pull/9646)) oleh @zhangzhonghe

- **[client-v2]** mempertahankan nilai bidang yang ditetapkan ([#9640](https://github.com/nocobase/nocobase/pull/9640)) oleh @katherinehhh

- **[Manajer file]** Memperbaiki validasi jalur penyimpanan file lokal untuk mencegah jalur tidak aman keluar dari root penyimpanan yang dikonfigurasi. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) oleh @mytharcher

- **[Blok: Gantt]** Meningkatkan penempatan tooltip gantt untuk menghindari menutupi bilah tugas dan menyelaraskan label tugas secara konsisten di dalam dan di luar bilah ([#9638](https://github.com/nocobase/nocobase/pull/9638)) oleh @jiannx

- **[Kontrol akses]** Memperbaiki izin tidak lengkap pada login pertama saat peran gabungan adalah default ([#9632](https://github.com/nocobase/nocobase/pull/9632)) oleh @2013xile

- **[Pengaturan lisensi]** Memperbaiki halaman pengaturan lisensi yang menggantung lama saat pemeriksaan login pkg lambat atau tidak dapat dijangkau ([#9650](https://github.com/nocobase/nocobase/pull/9650)) oleh @hongboji

- **[Workflow: JavaScript]** Memperjelas bahwa mode dukungan modul Workflow JavaScript tidak aman dan bukan batas izin ([#9629](https://github.com/nocobase/nocobase/pull/9629)) oleh @mytharcher
Referensi: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Kebijakan kata sandi]** Memperbaiki masalah di mana validasi kebijakan kata sandi bisa gagal untuk nilai kata sandi numerik oleh @2013xile
