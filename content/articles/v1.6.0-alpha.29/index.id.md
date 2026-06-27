---
title: "NocoBase v1.6.0-alpha.29: mendukung konfigurasi izin untuk aksi"
description: "Catatan Rilis v1.6.0-alpha.29"
---

### 🎉 Fitur Baru

- **[client]** Mendukung konfigurasi izin untuk aksi ([#6254](https://github.com/nocobase/nocobase/pull/6254)) oleh @katherinehhh

- **[Blok: template]** Menambahkan plugin `Blok: template`, menyediakan dukungan template untuk blok berdasarkan mekanisme pewarisan. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) oleh @gchust

- **[Alur Kerja: Aksi kustom]** Memicu aksi alur kerja mendukung kontrol akses oleh @katherinehhh

### 🚀 Peningkatan

- **[client]**
  - Memutakhirkan definisi tipe react ([#6278](https://github.com/nocobase/nocobase/pull/6278)) oleh @gchust

  - Perluasan dan peningkatan pusat personal pengguna ([#6213](https://github.com/nocobase/nocobase/pull/6213)) oleh @katherinehhh

- **[Manajer Berkas]**
  - Menambah panjang URL menjadi 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) oleh @mytharcher

  - Menambahkan kode backend untuk menghasilkan URL pratinjau berkas ([#6281](https://github.com/nocobase/nocobase/pull/6281)) oleh @jiannx

  - Nama berkas saat unggahan akan berubah dari acak menjadi nama asli dengan akhiran acak. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) oleh @chenos

  - Menambahkan kode backend untuk menghasilkan URL pratinjau berkas ([#6223](https://github.com/nocobase/nocobase/pull/6223)) oleh @jiannx

  - Mengubah API tipe penyimpanan dan menambahkan API plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) oleh @mytharcher

  - Mengubah API tipe penyimpanan dan menambahkan API plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) oleh @mytharcher

- **[Blok: Panel aksi]** Mengoptimalkan gaya seluler ([#6270](https://github.com/nocobase/nocobase/pull/6270)) oleh @zhangzhonghe

- **[Alur Kerja]** Menyembunyikan ID node dari kartu node di kanvas alur kerja ([#6251](https://github.com/nocobase/nocobase/pull/6251)) oleh @mytharcher

- **[Penyimpanan Berkas: S3(Pro)]**
  - Menyesuaikan API penyimpanan berdasarkan repositori utama oleh @mytharcher

  - Mendukung konfigurasi opsi thumbnailRule oleh @jiannx

- **[Manajer Cadangan]** Mengizinkan pemulihan cadangan ke aplikasi meskipun beberapa plugin hilang oleh @gchust

### 🐛 Perbaikan Bug

- **[devtools]** Memastikan header X-Forwarded-For hanya disetel jika req.ip tidak undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) oleh @sheldon66

- **[client]**
  - Posisi tidak tepat setelah menyeret menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) oleh @zhangzhonghe

  - Galat saat membuat blok komentar tanpa koleksi komentar ([#6309](https://github.com/nocobase/nocobase/pull/6309)) oleh @katherinehhh

  - Galat terjadi saat mengklik node blok pohon ([#6314](https://github.com/nocobase/nocobase/pull/6314)) oleh @zhangzhonghe

  - Setelah mengklik menu kiri, sub-halaman ditutup secara tidak normal ([#6305](https://github.com/nocobase/nocobase/pull/6305)) oleh @zhangzhonghe

  - Jangan menghapus nilai kolom saat nilai ekspresi kosong ([#6300](https://github.com/nocobase/nocobase/pull/6300)) oleh @zhangzhonghe

  - Komponen kolom teks kaya tidak dapat dibersihkan sepenuhnya ([#6287](https://github.com/nocobase/nocobase/pull/6287)) oleh @katherinehhh

  - Tidak dapat memindahkan halaman ke dalam grup ([#6289](https://github.com/nocobase/nocobase/pull/6289)) oleh @zhangzhonghe

  - Melewati galat auth untuk CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) oleh @sheldon66

  - Memperbaiki berkas yang diunggah terlewat saat satu per satu ([#6260](https://github.com/nocobase/nocobase/pull/6260)) oleh @mytharcher

  - Memperbaiki karakter tag html di kolom input formulir konfigurasi saluran email. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) oleh @sheldon66

  - Memperbaiki berkas yang terlewat setelah diunggah ([#6247](https://github.com/nocobase/nocobase/pull/6247)) oleh @mytharcher

  - Ketidakcocokan format picker di kolom formulir filter ([#6234](https://github.com/nocobase/nocobase/pull/6234)) oleh @katherinehhh

  - Menampilkan komponen `<Variable.TextArea />` dengan benar dalam mode nonaktif ([#6197](https://github.com/nocobase/nocobase/pull/6197)) oleh @mytharcher

- **[create-nocobase-app]** Galat terjadi di klien web setelah menjalankan `create-nocobase-app` diikuti dengan `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) oleh @gchust

- **[auth]** Melewati pemeriksaan auth pengguna saat token adalah kunci API ([#6291](https://github.com/nocobase/nocobase/pull/6291)) oleh @sheldon66

- **[cli]** Meningkatkan logika internal perintah upgrade nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) oleh @chenos

- **[Manajer Berkas]**
  - Memperbaiki migrasi untuk koleksi warisan ([#6310](https://github.com/nocobase/nocobase/pull/6310)) oleh @mytharcher

  - Memperbaiki migrasi dan menambahkan kasus uji ([#6288](https://github.com/nocobase/nocobase/pull/6288)) oleh @mytharcher

  - Memperbaiki migrasi dan menambahkan kasus uji ([#6288](https://github.com/nocobase/nocobase/pull/6288)) oleh @mytharcher

  - Memperbaiki tipe kolom `path` dari koleksi berkas ([#6294](https://github.com/nocobase/nocobase/pull/6294)) oleh @mytharcher

  - Memutakhirkan versi AWS SDK untuk memperbaiki bug unggahan MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) oleh @mytharcher

- **[Blok: template]** Memerlukan login saat mengakses formulir publik ([#6258](https://github.com/nocobase/nocobase/pull/6258)) oleh @gchust

- **[Kontrol akses]** Rekaman data tidak tepat saat menggunakan kolom many to many sebagai lingkup data dalam izin koleksi ([#6304](https://github.com/nocobase/nocobase/pull/6304)) oleh @2013xile

- **[Blok: Kanban]** Pemfilteran data tidak tepat di blok Kanban popup menggunakan variabel rekaman popup ([#6290](https://github.com/nocobase/nocobase/pull/6290)) oleh @katherinehhh

- **[Kolom koleksi: Urutan]** Memperbaiki kolom urutan tidak dinonaktifkan saat dalam mode hanya-baca ([#6274](https://github.com/nocobase/nocobase/pull/6274)) oleh @mytharcher

- **[Alur Kerja: test kit]** Memperbaiki kasus uji E2E berdasarkan fitur baru ([#6296](https://github.com/nocobase/nocobase/pull/6296)) oleh @mytharcher

- **[Formulir publik]** Melewati pemeriksaan auth di formulir publik ([#6284](https://github.com/nocobase/nocobase/pull/6284)) oleh @chenos

- **[Otentikasi]** Menghapus pembungkus NavigateIfNotSignIn yang tidak perlu dari AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) oleh @sheldon66

- **[Alur Kerja]**
  - Memperbaiki detail gaya di kanvas alur kerja ([#6240](https://github.com/nocobase/nocobase/pull/6240)) oleh @mytharcher

  - Mendukung pemicuan alur kerja saat mengubah kata sandi ([#6248](https://github.com/nocobase/nocobase/pull/6248)) oleh @mytharcher

- **[Alur Kerja: Aksi kustom]**
  - Memperbaiki galat build oleh @mytharcher

  - Memperbaiki kasus uji E2E oleh @mytharcher

  - Memperbaiki penginisialisasi alur kerja pemicu oleh @mytharcher

  - Memperbaiki galat build oleh @mytharcher

- **[Alur Kerja: Aksi pra-aksi]** Memperbaiki pesan galat dari node pesan respons tidak ditampilkan oleh @mytharcher

- **[Alur Kerja: JavaScript]** Mendukung persyaratan modul NocoBase oleh @mytharcher

- **[Manajer Email]** Publikasikan koleksi mailmessage dan perbaiki data modal yang hilang oleh @jiannx

- **[Penyimpanan Berkas: S3(Pro)]**
  - Memutakhirkan versi AWS SDK untuk memperbaiki bug unggahan MinIO. oleh @mytharcher

  - Mengatur nilai default forcePathStyleForAccess menjadi virtual oleh @jiannx

- **[Blok: Formulir multi-langkah]** Galat urutan item setelah diseret oleh @jiannx

- **[Blok: Pohon]** Galat terjadi saat mengklik node blok pohon oleh @zhangzhonghe

- **[Manajer Cadangan]** Ikon hapus dari dialog operasi pulihkan dari lokal tidak berfungsi oleh @gchust

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki migrasi tidak berjalan karena nomor versi oleh @mytharcher

  - Memperbaiki kasus uji E2E berdasarkan fitur baru oleh @mytharcher
