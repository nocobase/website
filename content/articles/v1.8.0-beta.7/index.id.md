---
title: "NocoBase v1.8.0-beta.7: Dukungan penyalinan konten bidang teks satu klik"
description: "Catatan Rilis v1.8.0-beta.7"
---

### 🎉 Fitur Baru

- **[Salin teks]** Mendukung penyalinan konten bidang teks dengan satu klik ([#6954](https://github.com/nocobase/nocobase/pull/6954)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[server]** Tidak dapat membaca properti dari undefined (membaca 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) oleh @chenos

- **[client]**
  - Pemilih bidang asosiasi tidak membersihkan data yang dipilih setelah pengiriman ([#7067](https://github.com/nocobase/nocobase/pull/7067)) oleh @katherinehhh

  - Setelah membuat bidang relasi terbalik, opsi "Buat bidang relasi terbalik di tabel data target" pada pengaturan bidang asosiasi tidak dicentang. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) oleh @aaaaaajie

- **[Kontrol akses]** Memperbaiki masalah di mana aplikasi memblokir masuk saat tidak ada peran default ([#7059](https://github.com/nocobase/nocobase/pull/7059)) oleh @aaaaaajie

- **[Workflow: Node perulangan]** Memperbaiki cabang perulangan yang berjalan saat kondisi tidak terpenuhi ([#7063](https://github.com/nocobase/nocobase/pull/7063)) oleh @mytharcher

- **[Manajer sumber data]** Perubahan cakupan sekarang berlaku segera untuk semua peran terkait. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) oleh @aaaaaajie

- **[Workflow: Event aksi kustom]** Memperbaiki variabel URL pengalihan yang tidak diurai oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki variabel pemicu saat memfilter berdasarkan tipe oleh @mytharcher

  - Memperbaiki statistik tugas yang tidak diperbarui saat eksekusi dibatalkan oleh @mytharcher
