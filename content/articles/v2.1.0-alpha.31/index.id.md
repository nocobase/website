---
title: "NocoBase v2.1.0-alpha.31: menambahkan tindakan asosiasi dan disosiasi ke blok asosiasi"
description: "Catatan Rilis v2.1.0-alpha.31"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan tindakan asosiasi dan dissosiasi ke blok asosiasi ([#9366](https://github.com/nocobase/nocobase/pull/9366)) oleh @katherinehhh

- **[Salin teks]** Mendukung opsi "Tampilkan tombol salin" untuk bidang teks hanya-baca ([#9394](https://github.com/nocobase/nocobase/pull/9394)) oleh @katherinehhh

- **[Karyawan AI]** Node karyawan AI Workflow mendukung pemuatan file dari bidang lampiran. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) oleh @cgyrock

- **[Visualisasi data]** Menambahkan dukungan client-v2 untuk plugin blok ([#9297](https://github.com/nocobase/nocobase/pull/9297)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[client]** Mengizinkan penugasan nilai bidang untuk bidang urutan ([#9397](https://github.com/nocobase/nocobase/pull/9397)) oleh @mytharcher

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) oleh @Molunerfinn

- **[Blok: Kanban]** Meningkatkan konsistensi spasi bidang detail v2 dan membuat spasi kartu kanban serta kolom lebih baik beradaptasi dengan pengaturan tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) oleh @jiannx

- **[Workflow: Persetujuan]** Memperbaiki perilaku validasi wajib untuk formulir persetujuan oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki formulir filter yang tidak bisa diciutkan ([#9386](https://github.com/nocobase/nocobase/pull/9386)) oleh @zhangzhonghe

  - Memperbaiki pemicu workflow massal tabel v2 sehingga pemilihan baris tetap konsisten setelah pengalihan antar tab dan baris dapat dipilih lagi setelah kembali ([#9388](https://github.com/nocobase/nocobase/pull/9388)) oleh @jiannx

  - Memperbaiki bidang `Tersembunyi (nilai cadangan)` di blok formulir agar tetap terlihat dalam mode Editor UI, dan mengembalikan dukungan input nilai untuk menugaskannya di Penugasan Bidang ([#9373](https://github.com/nocobase/nocobase/pull/9373)) oleh @jiannx

  - Memperbaiki adaptasi DividerItem ke tema di v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) oleh @katherinehhh

  - Memperbaiki nama file unduhan yang salah untuk bidang AttachmentURL ketika metadata file hilang. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) oleh @mytharcher

  - Memperbaiki kesalahan saat memfilter bidang skalar dengan filter multi-pilih kustom ([#9387](https://github.com/nocobase/nocobase/pull/9387)) oleh @zhangzhonghe

  - Memperbaiki aturan tautan yang tidak dijalankan ulang setelah nilai formulir berubah. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) oleh @gchust

  - Memperbaiki masalah di mana aturan tautan sub-tabel v1 salah mengubah gaya bidang wajib ([#9364](https://github.com/nocobase/nocobase/pull/9364)) oleh @zhangzhonghe

  - Memperbaiki rendering data yang salah di blok kartu grid setelah pembaruan dan penyegaran ([#9351](https://github.com/nocobase/nocobase/pull/9351)) oleh @katherinehhh

  - Memperbaiki bidang opsi wajib di sub-tabel yang tidak divalidasi dengan benar pada pemilihan pertama di perangkat seluler ([#9352](https://github.com/nocobase/nocobase/pull/9352)) oleh @katherinehhh

  - Memperbaiki opsi sembunyikan pembuatan cepat untuk bidang pilih asosiasi di sub-tabel v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) oleh @katherinehhh

  - Memperbaiki masalah di mana variabel parameter kueri URL menjadi tidak valid setelah beralih halaman yang di-cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) oleh @zhangzhonghe

- **[flow-engine]** Memperbaiki pesan validasi bidang tabel data yang tidak diterjemahkan di formulir alur v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) oleh @jiannx

- **[server]**
  - Memperbaiki permintaan penemuan OAuth sub-aplikasi yang dirutekan sebagai permintaan aplikasi utama ([#9383](https://github.com/nocobase/nocobase/pull/9383)) oleh @2013xile

  - Memvalidasi nama paket plugin sebelum operasi sistem file ([#9367](https://github.com/nocobase/nocobase/pull/9367)) oleh @chenos

- **[client-v2]**
  - Memperbaiki kesalahan saat memilih bidang asosiasi di pengaturan bidang. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) oleh @gchust

  - Memperbaiki masalah di mana halaman 404 muncul sekilas setelah aplikasi dimulai ([#9365](https://github.com/nocobase/nocobase/pull/9365)) oleh @zhangzhonghe

  - Memperbaiki masalah placeholder seret dan posisi jatuh blok halaman v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana beberapa halaman v2 gagal memuat plugin jarak jauh ([#9369](https://github.com/nocobase/nocobase/pull/9369)) oleh @zhangzhonghe

- **[undefined]** Memperbaiki tautan mati di dokumentasi terjemahan dan mengaktifkan deteksi tautan mati secara default di pembuatan dokumen. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) oleh @Molunerfinn

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana daftar pesan dalam aplikasi tidak diperbarui setelah menerima notifikasi waktu nyata ([#9409](https://github.com/nocobase/nocobase/pull/9409)) oleh @mytharcher

- **[Manajer sumber data]** Mencegah pengeditan dan penghapusan semua catatan dalam izin lingkup kustom untuk sumber data eksternal ([#9395](https://github.com/nocobase/nocobase/pull/9395)) oleh @katherinehhh

- **[AI: Server MCP]** Memperbaiki pengemasan server MCP sehingga dependensi runtime disertakan ([#9401](https://github.com/nocobase/nocobase/pull/9401)) oleh @2013xile

- **[Sumber data: Utama]** Memperbaiki tabel database yang diimpor menggunakan nama tabel berprefiks yang salah ketika prefiks tabel diaktifkan ([#9403](https://github.com/nocobase/nocobase/pull/9403)) oleh @2013xile

- **[Mesin alur]** Memperbaiki masalah di mana blok yang dihasilkan oleh AI tidak dapat dikonversi dari template referensi kembali ke template duplikat. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) oleh @gchust

- **[Karyawan AI]**
  - Memperbaiki kesalahan pembacaan lampiran bidang asosiasi oleh node karyawan AI di workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) oleh @cgyrock

  - Memperbaiki node karyawan AI workflow yang tidak berakhir dengan benar setelah penugasan alat. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) oleh @cgyrock

- **[Tindakan: Permintaan kustom]** Meningkatkan koa ke v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) oleh @chenos

- **[Blok: Kanban]**
  - Meningkatkan gaya kompak kartu Kanban dan mengoptimalkan pemilihan template popup pembuatan cepat. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) oleh @jiannx

  - Memperbaiki pencegahan pembungkusan kata tunggal di bidang teks panjang blok kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) oleh @katherinehhh

- **[Bidang koleksi: Formula]** Memperbaiki bidang formula di sub-tabel v2 yang tidak terpicu untuk kalkulasi otomatis ([#9354](https://github.com/nocobase/nocobase/pull/9354)) oleh @katherinehhh

- **[Tindakan: Impor catatan Pro]** Memperbaiki masalah di mana pemeriksaan duplikat pada bidang tanggal selalu gagal oleh @mytharcher

- **[Kebijakan kata sandi]** Memperbaiki masalah di mana pengguna yang terkunci secara permanen dapat masuk setelah restart layanan oleh @2013xile

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana laci pilih catatan terhalang dalam konfigurasi workflow persetujuan oleh @zhangzhonghe

- **[Manajer email]** Memperbaiki tampilan judul identitas email oleh @jiannx

- **[Manajer cadangan]** Memperbaiki adaptasi skema pg oleh @Andrew1989Y
