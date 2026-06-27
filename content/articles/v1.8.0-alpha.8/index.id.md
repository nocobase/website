---
title: "NocoBase v1.8.0-alpha.8: Dukungan penyalinan konten bidang teks satu klik"
description: "Catatan Rilis v1.8.0-alpha.8"
---

### 🎉 Fitur Baru

- **[Salin teks]** Dukungan salin satu klik untuk konten bidang teks ([#6954](https://github.com/nocobase/nocobase/pull/6954)) oleh @zhangzhonghe

- **[Manajer email]** dukungan hapus email oleh @jiannx

### 🚀 Peningkatan

- **[klien]**
  - menambahkan opsi "kosong" dan "tidak kosong" ke aturan tautan bidang kotak centang ([#7073](https://github.com/nocobase/nocobase/pull/7073)) oleh @katherinehhh

  - Lebar kontainer logo menyesuaikan dengan tipe konten (168px tetap untuk gambar, lebar otomatis untuk teks) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) oleh @Cyx649312038

- **[Manajer tugas asinkron]** Meningkatkan kinerja pembuatan tugas selama ekspor ([#7078](https://github.com/nocobase/nocobase/pull/7078)) oleh @aaaaaajie

- **[Alur Kerja: Persetujuan]** Menambahkan opsi bidang tambahan untuk daftar penugasan ulang oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - kehilangan titik desimal setelah mengganti komponen jumlah dari mask ke inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) oleh @katherinehhh

  - rendering Markdown (Vditor) yang salah di subtable ([#7074](https://github.com/nocobase/nocobase/pull/7074)) oleh @katherinehhh

  - Setelah membuat bidang relasi terbalik, opsi "Buat bidang relasi terbalik di tabel data target" di pengaturan bidang asosiasi tidak dicentang. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) oleh @aaaaaajie

  - pemilih bidang asosiasi tidak membersihkan data yang dipilih setelah pengiriman ([#7067](https://github.com/nocobase/nocobase/pull/7067)) oleh @katherinehhh

- **[server]** Tidak dapat membaca properti dari undefined (membaca 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) oleh @chenos

- **[Kontrol akses]** Memperbaiki masalah di mana aplikasi memblokir masuk saat tidak ada peran default ([#7059](https://github.com/nocobase/nocobase/pull/7059)) oleh @aaaaaajie

- **[Manajer sumber data]** Perubahan cakupan sekarang berlaku segera untuk semua peran terkait. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) oleh @aaaaaajie

- **[Alur Kerja: Node perulangan]** Memperbaiki cabang perulangan berjalan ketika kondisi tidak terpenuhi ([#7063](https://github.com/nocobase/nocobase/pull/7063)) oleh @mytharcher

- **[Alur Kerja: Event aksi kustom]** Memperbaiki variabel url pengalihan tidak diurai oleh @mytharcher

- **[Alur Kerja: Persetujuan]** Memperbaiki statistik todo tidak diperbarui ketika eksekusi dibatalkan oleh @mytharcher

- **[Manajer email]** penghapusan email gagal oleh @jiannx

- **[Manajer cadangan]** perintah tidak dikenal error saat memulihkan cadangan MySQL di platform windows oleh @gchust
