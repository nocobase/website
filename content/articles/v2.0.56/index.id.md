---
title: "NocoBase v2.0.56: plugin manajer cadangan sumber terbuka"
description: "Catatan Rilis v2.0.56"
---

### 🎉 Fitur Baru

- **[Manajer cadangan]** plugin manajer cadangan sumber terbuka ([#9550](https://github.com/nocobase/nocobase/pull/9550)) oleh @chenos

### 🚀 Peningkatan

- **[klien]** optimalkan pengaturan tampilan tombol aksi ([#9510](https://github.com/nocobase/nocobase/pull/9510)) oleh @katherinehhh
- **[flow-engine]** Menu konfigurasi bidang V2 sekarang mendukung pencarian bidang ([#9489](https://github.com/nocobase/nocobase/pull/9489)) oleh @zhangzhonghe
- **[tidak terdefinisi]**

  - Menambahkan tinjauan keamanan dependensi untuk pull request ([#9523](https://github.com/nocobase/nocobase/pull/9523)) oleh @zhangzhonghe
  - **[Manajer notifikasi]** Mengubah strategi antrian untuk mengoptimalkan kinerja pengiriman ([#9407](https://github.com/nocobase/nocobase/pull/9407)) oleh @mytharcher
- **[AI: Basis pengetahuan]** Mengaktifkan modifikasi penyimpanan vektor untuk basis pengetahuan AI oleh @cgyrock
- **[Workflow: Persetujuan]** Meningkatkan persetujuan terkait dengan kartu linimasa oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki penghapusan nilai terpilih saat bidang asosiasi dependen berubah dalam keterkaitan lingkup data ([#9551](https://github.com/nocobase/nocobase/pull/9551)) oleh @katherinehhh
  - Memperbaiki masalah di mana lencana menu masih menampilkan titik saat nilainya 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana formulir filter tidak dapat menggunakan variabel formulir saat ini ([#9474](https://github.com/nocobase/nocobase/pull/9474)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana blok v2 yang dipersempit menjadi lebar penuh setelah keluar dari mode edit ([#9529](https://github.com/nocobase/nocobase/pull/9529)) oleh @zhangzhonghe
  - Memperbaiki status menu Bidang JS yang salah dalam subformulir. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) oleh @gchust
- **[flow-engine]** memperbaiki masalah pemilihan ganda untuk bidang sumber data eksternal di formulir v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) oleh @katherinehhh
- **[Karyawan AI]** Memperbaiki error saat karyawan AI mengakses basis pengetahuan hanya-baca ([#9539](https://github.com/nocobase/nocobase/pull/9539)) oleh @cgyrock
- **[Kalender]** Memperbaiki masalah di mana item lainnya di kalender tidak dapat ditampilkan sepenuhnya ([#9492](https://github.com/nocobase/nocobase/pull/9492)) oleh @zhangzhonghe
- **[Aksi: Pembaruan massal]** memperbaiki status pemuatan ulang aksi pembaruan massal setelah gagal diperbarui ([#9509](https://github.com/nocobase/nocobase/pull/9509)) oleh @katherinehhh
- **[Dokumentasi API]** Memperbaiki dokumentasi API koleksi sehingga parameter kueri tidak lagi saling mengganggu ([#9442](https://github.com/nocobase/nocobase/pull/9442)) oleh @jiannx
- **[Workflow]** Menambahkan status pemuatan untuk eksekusi workflow manual. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki kegagalan pembuatan file migrasi saat menggunakan OceanBase oleh @2013xile
- **[Penyimpanan file: S3(Pro)]** Memperbaiki penanganan endpoint S3 Pro sehingga unggahan server dan pratinjau URL tidak menduplikasi host bucket. oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbaiki indeks catatan persetujuan yang duplikat saat delegasi terjadi bersamaan pada pekerjaan persetujuan yang sama. oleh @mytharcher
