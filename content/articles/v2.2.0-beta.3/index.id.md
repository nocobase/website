---
title: "NocoBase v2.2.0-beta.3: Menambahkan dukungan lampiran ke node pengirim surat alur kerja."
description: "Catatan Rilis v2.2.0-beta.3"
---

### 🎉 Fitur Baru

* **[Workflow: Node Mailer]** Menambahkan dukungan untuk mengirim lampiran di node mailer workflow. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) oleh @mytharcher
* **[Workflow]** Menambahkan dukungan untuk lingkup transaksi basis data di workflow. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) oleh @mytharcher
  Referensi: [Transaksi basis data](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Node transaksi basis data]** Menambahkan plugin node workflow transaksi basis data. oleh @mytharcher

### 🚀 Peningkatan

* **[client-v2]** Kolom relasi bidang di sub-tabel formulir kini mendukung variabel item saat ini dalam lingkup data. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) oleh @gchust
* **[undefined]** Menyeragamkan nama dokumentasi Bahasa Indonesia dari plugin Version control menjadi “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) oleh @cgyrock
* **[Manajer file]** Menambahkan dukungan teks yang dapat dipilih ke pratinjau PDF di Manajer file untuk PDF dengan teks tersemat. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) oleh @mytharcher
* **[Pengguna]** Memperbaiki tata letak halaman Pengguna dan Izin v2 serta mengoptimalkan perilaku pohon departemen. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) oleh @jiannx
* **[Aksi: Edit massal]** Mengoptimalkan cara plugin aksi v2 dimuat dan menjaga urutan tombol aksi yang dimigrasi tetap stabil. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) oleh @katherinehhh
* **[Version control]** Mengganti nama tampilan Bahasa Indonesia dari plugin Version control menjadi “版本控制”. oleh @cgyrock

### 🐛 Perbaikan Bug

* **[cli-v1]** Memperbaiki kesalahan saat menjalankan `<span>yarn dev</span>` setelah meningkatkan proyek yang dibuat dengan create-nocobase-app dari 2.0 ke 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) oleh @Molunerfinn
* **[flow-engine]** Memperbaiki masalah input IME Bahasa Vietnam dan Mandarin di bidang teks satu baris dan multi-baris v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) oleh @katherinehhh
* **[client-v2]** Memperbaiki masalah di mana progres migrasi tidak menampilkan tampilan progres khusus. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) oleh @2013xile
* **[server]** Memperbaiki penanganan nama plugin yang tidak aman di `<span>pm:enable</span>` untuk menghindari risiko penyertaan file lokal selama resolusi plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) oleh @mytharcher
* **[Manajer tugas asinkron]** Memperbaiki kesalahan kueri basis data yang disebabkan oleh hilangnya `<span>filterByTk</span>` saat mengunduh file tugas asinkron. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) oleh @mytharcher
* **[Manajer file]** Memperbaiki kegagalan pratinjau PDF yang disebabkan oleh pemuatan modul pekerja pdf.js yang tidak normal. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) oleh @mytharcher
* **[Blok: Kanban]** Memperbaiki masalah di mana membuka blok Kalender, Gantt, dan Kanban dalam mode non-edit secara tidak terduga mempertahankan aksi popup tersembunyi dan berulang kali mengirim permintaan hapus. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) oleh @jiannx
* **[Aksi: Ekspor catatan Pro]** Memperbaiki pengaturan mode pemrosesan dan teks bantuan untuk Impor/Ekspor Pro v2. oleh @katherinehhh
* **[Multi-ruang]** Memperbaiki masalah di mana administrator ruang tidak dapat menambahkan pengguna ruang saat mereka tidak memiliki izin untuk bidang email pengguna. oleh @jiannx
* **[Manajer migrasi]** Memperbaiki kemungkinan kegagalan saat mengimpor file data migrasi besar. oleh @2013xile
* **[Cetak template]** Menolak jenis file template yang tidak didukung sebelum pencetakan template dimulai. oleh @2013xile
