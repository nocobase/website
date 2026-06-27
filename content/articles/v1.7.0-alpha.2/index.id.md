---
title: "NocoBase v1.7.0-alpha.2: mendukung konfigurasi opsi bidang yang dapat dipilih dalam aturan tautan"
description: "Catatan Rilis v1.7.0-alpha.2"
---

### 🎉 Fitur Baru

- **[klien]**
  - Komponen Seleksi Bertingkat Menambahkan Pengaturan Lingkup Data ([#6386](https://github.com/nocobase/nocobase/pull/6386)) oleh @Cyx649312038

  - blok tabel mendukung penyembunyian kolom indeks (default terlihat) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) oleh @katherinehhh

  - mendukung konfigurasi opsi bidang yang dapat dipilih dalam aturan tautan ([#6338](https://github.com/nocobase/nocobase/pull/6338)) oleh @katherinehhh

  - mendukung konfigurasi rentang tanggal (min/maks) untuk bidang waktu dalam aturan tautan ([#6356](https://github.com/nocobase/nocobase/pull/6356)) oleh @katherinehhh

- **[acl]** Mendukung gabungan peran pengguna ([#6301](https://github.com/nocobase/nocobase/pull/6301)) oleh @aaaaaajie

- **[Blok: Panel aksi]** mendukung pemutusan baris untuk judul aksi di panel aksi ([#6433](https://github.com/nocobase/nocobase/pull/6433)) oleh @katherinehhh

- **[plugin-demo-platform]** Setel skipAuthCheck dari rute "/new" ke true. oleh @sheldon66

- **[WeCom]** Memungkinkan pengaturan tooltip kustom untuk tombol masuk oleh @2013xile

### 🚀 Peningkatan

- **[utils]**
  - Pindahkan `md5` ke utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) oleh @mytharcher

  - Adaptasi halaman desktop untuk perangkat seluler ([#6393](https://github.com/nocobase/nocobase/pull/6393)) oleh @zhangzhonghe

- **[klien]** Tambahkan skipAuthCheck ke router.add untuk mencegah pengalihan ke login di halaman publik. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) oleh @sheldon66

- **[Visualisasi data]** Ganti `x-designer` yang sudah tidak digunakan lagi dengan `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**
  - Di blok pohon, saat tidak dicentang, data di blok data tidak dibersihkan ([#6460](https://github.com/nocobase/nocobase/pull/6460)) oleh @zhangzhonghe

  - Perbaiki karakter khusus di URL gambar yang menyebabkan tidak muncul ([#6459](https://github.com/nocobase/nocobase/pull/6459)) oleh @mytharcher

  - nomor halaman yang salah saat menambahkan data setelah perubahan ukuran halaman sub-tabel ([#6437](https://github.com/nocobase/nocobase/pull/6437)) oleh @katherinehhh

  - Konten tidak ditampilkan sepenuhnya di browser seluler ([#6446](https://github.com/nocobase/nocobase/pull/6446)) oleh @zhangzhonghe

  - Gaya logo tidak konsisten dengan yang sebelumnya ([#6444](https://github.com/nocobase/nocobase/pull/6444)) oleh @zhangzhonghe

  - pemilihan rentang bidang tanggal mengecualikan tanggal maks ([#6418](https://github.com/nocobase/nocobase/pull/6418)) oleh @katherinehhh

  - Saat menggunakan operator '$anyOf', aturan tautan tidak valid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) oleh @zhangzhonghe

  - perubahan nilai bidang multi-pilih dan kehilangan opsi saat menghapus catatan sub-tabel ([#6405](https://github.com/nocobase/nocobase/pull/6405)) oleh @katherinehhh

  - Data tidak diperbarui di jendela popup yang dibuka melalui tombol Tautan ([#6411](https://github.com/nocobase/nocobase/pull/6411)) oleh @zhangzhonghe

- **[acl]** Memperbaiki masalah di mana bidang relasi tidak ditampilkan di bawah gabungan peran. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) oleh @aaaaaajie

- **[Manajer file]**
  - Tidak dapat menghapus file yang disimpan di S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) oleh @chenos

  - Perbaiki beberapa masalah pada manajer file ([#6436](https://github.com/nocobase/nocobase/pull/6436)) oleh @mytharcher

- **[Alur kerja]** Hapus tombol pengaturan alur kerja terikat dari pemilih data ([#6455](https://github.com/nocobase/nocobase/pull/6455)) oleh @mytharcher

- **[Alur kerja: Node manual]**
  - Perbaiki kesalahan yang muncul dalam migrasi ([#6445](https://github.com/nocobase/nocobase/pull/6445)) oleh @mytharcher

  - Ubah batas versi migrasi menjadi `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) oleh @mytharcher

  - Perbaiki migrasi yang melewatkan awalan tabel dan logika skema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) oleh @mytharcher

- **[Kontrol akses]**
  - Memperbaiki pergantian peran tidak berlaku. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) oleh @aaaaaajie

  - Kesalahan saat lingkup data diatur ke data sendiri dan tabel tidak memiliki bidang pembuat. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) oleh @aaaaaajie

- **[Klien WEB]** Ganti semua instance ctx.state.currentRole (peran tunggal) dengan ctx.state.currentRoles (mendukung banyak peran). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) oleh @aaaaaajie

- **[Aksi: Edit massal]** Perbaiki alur kerja tidak dapat dipicu dalam pengiriman edit massal ([#6440](https://github.com/nocobase/nocobase/pull/6440)) oleh @mytharcher

- **[Manajer sumber data]** mengganti sumber data di manajemen peran tidak memuat koleksi yang sesuai ([#6431](https://github.com/nocobase/nocobase/pull/6431)) oleh @katherinehhh

- **[Visualisasi data]** Bidang yang dihapus muncul saat menambahkan bidang filter kustom ([#6450](https://github.com/nocobase/nocobase/pull/6450)) oleh @2013xile

- **[Notifikasi: Pesan dalam aplikasi]**
  - Bedakan warna latar belakang daftar pesan dalam aplikasi dari kartu pesan untuk meningkatkan hierarki visual dan keterbacaan. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) oleh @sheldon66

  - Hindari konfigurasi penerima yang salah yang menanyakan semua pengguna ([#6424](https://github.com/nocobase/nocobase/pull/6424)) oleh @sheldon66

- **[Aksi: Permintaan kustom]** kesalahan validasi izin sisi server permintaan kustom ([#6438](https://github.com/nocobase/nocobase/pull/6438)) oleh @katherinehhh

- **[Auth: Kunci API]** penghapusan gabungan daftar peran plugin kunci API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) oleh @aaaaaajie

- **[Blok: template]** Perilaku simpan sebagai template yang salah di klien seluler ([#6420](https://github.com/nocobase/nocobase/pull/6420)) oleh @gchust

- **[Alur kerja: Acara aksi kustom]** Hapus `only` dalam kasus uji E2E oleh @mytharcher

- **[Penyimpanan file: S3(Pro)]** Selesaikan masalah dengan URL yang ditandatangani S3 Pro yang tidak dapat diakses oleh @chenos

- **[Alur kerja: Persetujuan]**
  - Hindari crash halaman saat tidak ada pemohon di tabel proses persetujuan oleh @mytharcher

  - Perbaiki data asosiasi tidak muncul di formulir persetujuan oleh @mytharcher

  - Perbaiki kesalahan yang muncul saat menyetujui di sumber data eksternal oleh @mytharcher
