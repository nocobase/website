---
title: "NocoBase v1.7.0-alpha.4: Dukung bidang teks panjang sebagai bidang judul untuk bidang asosiasi"
description: "Catatan Rilis v1.7.0-alpha.4"
---

### 🎉 Fitur Baru

- **[klien]**
  - Mendukung kolom teks panjang sebagai kolom judul untuk kolom asosiasi ([#6495](https://github.com/nocobase/nocobase/pull/6495)) oleh @katherinehhh

  - Mendukung pengaturan Gaya kolom untuk ukuran font, ketebalan font, dan gaya font ([#6489](https://github.com/nocobase/nocobase/pull/6489)) oleh @katherinehhh

- **[Variabel dan rahasia]** mendukung variabel lingkungan di URL tombol tautan ([#6494](https://github.com/nocobase/nocobase/pull/6494)) oleh @katherinehhh

- **[Alur Kerja: Node Agregat]** Mendukung konfigurasi presisi untuk hasil agregasi ([#6491](https://github.com/nocobase/nocobase/pull/6491)) oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** mendukung pencocokan fuzzy untuk kolom yang dipilih di tombol filter ([#6496](https://github.com/nocobase/nocobase/pull/6496)) oleh @katherinehhh

- **[Notifikasi: Email]** Menambahkan deskripsi konfigurasi kolom aman. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) oleh @sheldon66

- **[Alur Kerja: node mailer]** Menambahkan deskripsi konfigurasi kolom aman. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) oleh @sheldon66

- **[Kalender]** Plugin Kalender dengan pengaturan opsional untuk mengaktifkan atau menonaktifkan pembuatan acara cepat ([#6391](https://github.com/nocobase/nocobase/pull/6391)) oleh @Cyx649312038

- **[Klien WEB]** menambahkan prompt konfirmasi sekunder untuk Hapus Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) oleh @katherinehhh

- **[Manajer Email]** mendukung otorisasi ulang & memilih akun secara otomatis saat mengirim email oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**
  - transparansi tombol aksi menyebabkan masalah tampilan pengaturan saat dihover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) oleh @katherinehhh

  - kesalahan pengiriman kolom waktu di lokal China (input sintaks tidak valid untuk tipe waktu) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) oleh @katherinehhh

  - tinggi sub-tabel dalam formulir diatur bersamaan dengan tinggi formulir ([#6518](https://github.com/nocobase/nocobase/pull/6518)) oleh @katherinehhh

  - aturan tautan kolom default tersembunyi dengan nilai yang dipertahankan tidak berfungsi ([#6503](https://github.com/nocobase/nocobase/pull/6503)) oleh @katherinehhh

  - tombol tambah anak tidak menampilkan mode hanya ikon ([#6504](https://github.com/nocobase/nocobase/pull/6504)) oleh @katherinehhh

- **[server]** Perintah upgrade dapat menyebabkan kesalahan alur kerja ([#6524](https://github.com/nocobase/nocobase/pull/6524)) oleh @gchust

- **[utils]** Bug 'desktop responsif' yang diketahui ([#6476](https://github.com/nocobase/nocobase/pull/6476)) oleh @zhangzhonghe

- **[evaluator]** Mengembalikan tempat desimal pembulatan ke 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) oleh @mytharcher

- **[Otentikasi]**
  - Memotong opsi autentikator ([#6527](https://github.com/nocobase/nocobase/pull/6527)) oleh @2013xile

  - X-Authenticator hilang ([#6526](https://github.com/nocobase/nocobase/pull/6526)) oleh @chenos

- **[Blok: Peta]**
  - masalah manajemen kunci blok peta menyebabkan kegagalan permintaan karena karakter tak terlihat ([#6521](https://github.com/nocobase/nocobase/pull/6521)) oleh @katherinehhh

  - kolom kunci rahasia tidak memicu validasi dalam manajemen peta ([#6509](https://github.com/nocobase/nocobase/pull/6509)) oleh @katherinehhh

- **[Manajer Berkas]**
  - Tidak dapat mengakses file yang disimpan di COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) oleh @chenos

  - encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) oleh @chenos

- **[Klien WEB]** Jalur dalam tabel manajemen rute berbeda dari jalur sebenarnya ([#6483](https://github.com/nocobase/nocobase/pull/6483)) oleh @zhangzhonghe

- **[Blok: Panel aksi]** masalah tata letak di panel aksi seluler setelah menyembunyikan tombol karena kontrol izin ([#6502](https://github.com/nocobase/nocobase/pull/6502)) oleh @katherinehhh

- **[Sumber data: Utama]** Tidak dapat membuat tampilan MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) oleh @aaaaaajie

- **[Alur Kerja]** Memperbaiki jumlah tugas lama setelah alur kerja dihapus ([#6493](https://github.com/nocobase/nocobase/pull/6493)) oleh @mytharcher

- **[Aksi: Ekspor rekaman Pro]** Tidak dapat mengekspor lampiran oleh @chenos

- **[Manajer Cadangan]**
  - File yang diunggah belum dipulihkan saat membuat sub-aplikasi dari template cadangan oleh @gchust

  - Pemulihan dapat menyebabkan kesalahan eksekusi alur kerja oleh @gchust

  - Kegagalan pemulihan database MySQL yang disebabkan oleh tumpang tindih set GTID oleh @gchust

- **[WeCom]** Selesaikan variabel lingkungan dan rahasia saat mengambil konfigurasi notifikasi. oleh @2013xile

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki kesalahan tabel proses saat pekerjaan dihapus oleh @mytharcher

  - Mengubah persetujuan yang dikembalikan sebagai todo oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat menambahkan hasil node kueri oleh @mytharcher

  - Memperbaiki tombol aksi yang terlewat di tabel proses oleh @mytharcher

  - Masalah gaya dengan dialog popup 'Terapkan baru' oleh @zhangzhonghe
