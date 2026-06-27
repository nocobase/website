---
title: "NocoBase v2.1.0-beta.27: Karyawan AI dapat mencari dokumentasi yang dibundel dengan perintah Bash"
description: "Catatan Rilis v2.1.0-beta.27"
---

### 🎉 Fitur Baru

- **[server]** Karyawan AI dapat mencari dokumentasi yang dibundel dengan perintah Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) oleh @2013xile

- **[Karyawan AI]** Node karyawan AI pada Workflow mendukung pemuatan file dari bidang lampiran. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) oleh @cgyrock

- **[Salin teks]** mendukung opsi "Tampilkan tombol salin" untuk bidang teks hanya-baca ([#9394](https://github.com/nocobase/nocobase/pull/9394)) oleh @katherinehhh

### 🚀 Peningkatan

- **[client]** Mengizinkan penetapan nilai bidang untuk bidang urutan ([#9397](https://github.com/nocobase/nocobase/pull/9397)) oleh @mytharcher

- **[Blok: Kanban]** Meningkatkan konsistensi jarak bidang detail v2 dan membuat jarak kartu kanban serta kolom lebih baik beradaptasi dengan pengaturan tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) oleh @jiannx

- **[Karyawan AI]** Alat pengeditan RunJS milik Nathan ditingkatkan dan mengurangi lag selama percakapan AI yang panjang ([#9311](https://github.com/nocobase/nocobase/pull/9311)) oleh @2013xile

- **[Workflow: Persetujuan]** Memperbaiki perilaku validasi wajib untuk formulir persetujuan oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki pesan validasi bidang tabel data yang tidak diterjemahkan di formulir alur v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) oleh @jiannx

- **[client]**
  - Memperbaiki formulir filter yang tidak bisa diciutkan ([#9386](https://github.com/nocobase/nocobase/pull/9386)) oleh @zhangzhonghe

  - Memperbaiki kesalahan saat memfilter bidang skalar dengan filter multi-pilih kustom ([#9387](https://github.com/nocobase/nocobase/pull/9387)) oleh @zhangzhonghe

  - Memperbaiki nama file unduhan yang salah untuk bidang AttachmentURL ketika metadata file hilang. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) oleh @mytharcher

  - memperbaiki adaptasi DividerItem ke tema di v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) oleh @katherinehhh

  - Memperbaiki masalah di mana aturan tautan sub-tabel v1 salah mengubah gaya bidang wajib ([#9364](https://github.com/nocobase/nocobase/pull/9364)) oleh @zhangzhonghe

  - Memperbaiki bidang `Tersembunyi (nilai cadangan)` di blok formulir agar tetap terlihat dalam mode Editor UI, dan mengembalikan dukungan input nilai untuk menetapkannya di Penetapan Bidang ([#9373](https://github.com/nocobase/nocobase/pull/9373)) oleh @jiannx

  - Memperbaiki pemicu workflow massal tabel v2 agar pemilihan baris tetap konsisten setelah pengalihan antar tab dan baris dapat dipilih lagi setelah kembali ([#9388](https://github.com/nocobase/nocobase/pull/9388)) oleh @jiannx

- **[client-v2]**
  - Memperbaiki kesalahan saat memilih bidang asosiasi di pengaturan bidang. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) oleh @gchust

  - Memperbaiki masalah di mana halaman 404 muncul sesaat setelah aplikasi dimulai ([#9365](https://github.com/nocobase/nocobase/pull/9365)) oleh @zhangzhonghe

- **[server]** Memperbaiki permintaan penemuan OAuth sub-aplikasi yang dirutekan sebagai permintaan aplikasi utama ([#9383](https://github.com/nocobase/nocobase/pull/9383)) oleh @2013xile

- **[Sumber data: Utama]** Memperbaiki tabel database yang diimpor menggunakan nama tabel berprefiks yang salah ketika prefiks tabel diaktifkan ([#9403](https://github.com/nocobase/nocobase/pull/9403)) oleh @2013xile

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana daftar pesan dalam aplikasi tidak diperbarui setelah menerima notifikasi waktu nyata ([#9409](https://github.com/nocobase/nocobase/pull/9409)) oleh @mytharcher

- **[Manajer sumber data]** mencegah pengeditan dan penghapusan semua catatan dalam izin lingkup kustom untuk sumber data eksternal ([#9395](https://github.com/nocobase/nocobase/pull/9395)) oleh @katherinehhh

- **[AI: Server MCP]** Memperbaiki pengemasan server MCP sehingga dependensi runtime disertakan ([#9401](https://github.com/nocobase/nocobase/pull/9401)) oleh @2013xile

- **[Flow engine]** Memperbaiki masalah di mana blok yang dihasilkan oleh AI tidak dapat dikonversi dari template referensi kembali ke template duplikat. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) oleh @gchust

- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana pemeriksaan duplikat pada bidang tanggal selalu gagal oleh @mytharcher

- **[Kebijakan kata sandi]** Memperbaiki masalah di mana pengguna yang terkunci secara permanen dapat masuk setelah restart layanan oleh @2013xile

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana laci pemilihan catatan terhalang dalam konfigurasi workflow persetujuan oleh @zhangzhonghe

- **[Manajer cadangan]** memperbaiki adaptasi skema pg oleh @Andrew1989Y
