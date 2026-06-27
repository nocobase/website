---
title: "NocoBase v2.1.5: Menambahkan dukungan untuk mengirim lampiran di node pengirim email alur kerja"
description: "Catatan Rilis v2.1.5"
---

### 🎉 Fitur Baru

- **[Workflow: Node Mailer]** Menambahkan dukungan untuk mengirim lampiran di node mailer workflow. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) oleh @mytharcher

### 🚀 Peningkatan

- **[client-v2]** Cakupan data kolom bidang relasi di sub-tabel formulir kini mendukung variabel item saat ini. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) oleh @gchust
- **[undefined]** Menyeragamkan nama dokumentasi bahasa China untuk plugin kontrol versi menjadi “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) oleh @cgyrock
- **[Manajer file]** Menambahkan dukungan teks yang dapat dipilih pada pratinjau PDF di manajer file untuk PDF dengan teks tersemat. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) oleh @mytharcher
- **[Aksi: Edit massal]** Mengoptimalkan metode pemuatan untuk plugin aksi v2 dan menjaga urutan tombol aksi yang dimigrasi tetap stabil. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) oleh @katherinehhh
- **[Kontrol versi]** Mengubah nama tampilan bahasa China untuk plugin kontrol versi menjadi “版本控制”. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[cli-v1]** Memperbaiki error saat menjalankan `yarn dev` setelah meningkatkan proyek yang dibuat dengan create-nocobase-app dari 2.0 ke 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) oleh @Molunerfinn
- **[client-v2]** Memperbaiki masalah di mana progres migrasi tidak menampilkan tampilan progres khusus. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) oleh @2013xile
- **[flow-engine]** Memperbaiki masalah input IME bahasa Vietnam dan China di bidang teks satu baris dan multi-baris v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) oleh @katherinehhh
- **[server]** Memperbaiki penanganan nama plugin yang tidak aman di `pm:enable` untuk mencegah risiko penyertaan file lokal selama resolusi plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) oleh @mytharcher
- **[Manajer file]** Memperbaiki kegagalan pratinjau PDF yang disebabkan oleh pemuatan modul worker pdf.js yang tidak normal. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) oleh @mytharcher
- **[Blok: Kanban]** Memperbaiki masalah di mana membuka blok Kalender, Gantt, dan Kanban di luar mode edit secara tidak terduga menyimpan aksi popup tersembunyi dan berulang kali mengirim permintaan hapus. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) oleh @jiannx
- **[Aksi: Ekspor catatan Pro]** Meningkatkan pengaturan mode pemrosesan dan petunjuk penjelasan untuk Impor/Ekspor Pro v2. oleh @katherinehhh
- **[Manajer migrasi]** Memperbaiki kemungkinan kegagalan saat mengimpor file data migrasi besar. oleh @2013xile
- **[Cetak template]** Menolak jenis file template yang tidak didukung sebelum pencetakan template dimulai. oleh @2013xile
