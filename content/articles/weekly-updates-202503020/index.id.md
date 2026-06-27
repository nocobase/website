---
title: "Pembaruan Mingguan NocoBase: Optimalkan Kolom dan Operasi Blok Tabel"
description: "Pembaruan minggu ini meliputi: dukungan untuk menyembunyikan kolom indeks di blok tabel, mengonfigurasi opsi bidang yang dapat dipilih dalam aturan tautan, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*Tanggal rilis: 2025-03-12*

#### 🐛 Perbaikan Bug

- **[client]** Pemilihan rentang bidang tanggal tidak termasuk tanggal maksimum ([#6418](https://github.com/nocobase/nocobase/pull/6418)) oleh @katherinehhh
- **[Notifikasi: Pesan dalam aplikasi]** Hindari konfigurasi penerima yang salah yang menanyakan semua pengguna ([#6424](https://github.com/nocobase/nocobase/pull/6424)) oleh @sheldon66
- **[Alur Kerja: Node manual]**

  - Perbaiki migrasi yang melewatkan logika prefiks tabel dan skema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) oleh @mytharcher
  - Ubah batas versi migrasi menjadi `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) oleh @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*Tanggal rilis: 2025-03-14*

#### 🎉 Fitur Baru

- **[WeCom]** Memungkinkan pengaturan tooltip khusus untuk tombol masuk oleh @2013xile

#### 🐛 Perbaikan Bug

- **[client]**

  - Perbaiki karakter khusus di URL gambar yang menyebabkan tidak muncul ([#6459](https://github.com/nocobase/nocobase/pull/6459)) oleh @mytharcher
  - Nomor halaman yang salah saat menambahkan data setelah perubahan ukuran halaman sub-tabel ([#6437](https://github.com/nocobase/nocobase/pull/6437)) oleh @katherinehhh
  - Gaya logo tidak konsisten dengan yang sebelumnya ([#6444](https://github.com/nocobase/nocobase/pull/6444)) oleh @zhangzhonghe
- **[Alur Kerja: Node manual]** Perbaiki kesalahan yang muncul dalam migrasi ([#6445](https://github.com/nocobase/nocobase/pull/6445)) oleh @mytharcher
- **[Visualisasi data]** Bidang yang dihapus muncul saat menambahkan bidang filter kustom ([#6450](https://github.com/nocobase/nocobase/pull/6450)) oleh @2013xile
- **[Manajer file]** Perbaiki beberapa masalah manajer file ([#6436](https://github.com/nocobase/nocobase/pull/6436)) oleh @mytharcher
- **[Tindakan: Permintaan kustom]** Kesalahan validasi izin sisi server permintaan kustom ([#6438](https://github.com/nocobase/nocobase/pull/6438)) oleh @katherinehhh
- **[Manajer sumber data]** Mengganti sumber data dalam manajemen peran tidak memuat koleksi yang sesuai ([#6431](https://github.com/nocobase/nocobase/pull/6431)) oleh @katherinehhh
- **[Tindakan: Edit massal]** Perbaiki alur kerja tidak dapat dipicu dalam pengiriman edit massal ([#6440](https://github.com/nocobase/nocobase/pull/6440)) oleh @mytharcher
- **[Alur Kerja: Acara tindakan kustom]** Hapus `only` dalam kasus uji E2E oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Perbaiki data asosiasi tidak muncul di formulir persetujuan oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat menyetujui pada sumber data eksternal oleh @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*Tanggal rilis: 2025-03-15*

#### 🎉 Fitur Baru

- **[client]** Komponen Seleksi Bertingkat Menambahkan Pengaturan Lingkup Data ([#6386](https://github.com/nocobase/nocobase/pull/6386)) oleh @Cyx649312038

#### 🚀 Peningkatan

- **[utils]** Pindahkan `md5` ke utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]** Di blok pohon, saat tidak dicentang, data di blok data tidak dibersihkan ([#6460](https://github.com/nocobase/nocobase/pull/6460)) oleh @zhangzhonghe
- **[Manajer file]** Tidak dapat menghapus file yang disimpan di S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) oleh @chenos
- **[Alur Kerja]** Hapus tombol pengaturan ikat alur kerja dari pemilih data ([#6455](https://github.com/nocobase/nocobase/pull/6455)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** Selesaikan masalah dengan URL yang ditandatangani S3 Pro yang tidak dapat diakses oleh @chenos
- **[Alur Kerja: Persetujuan]** Hindari crash halaman saat tidak ada pemohon di tabel proses persetujuan oleh @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*Tanggal rilis: 2025-03-17*

#### 🚀 Peningkatan

- **[Manajer file]** Sederhanakan logika pembuatan URL file dan API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** Ubah ke cara sederhana untuk menghasilkan URL file oleh @mytharcher
- **[Manajer cadangan]** Izinkan pemulihan cadangan antara versi pra-rilis dan versi rilis dari versi yang sama oleh @gchust

#### 🐛 Perbaikan Bug

- **[client]**

  - Bidang teks kaya tidak membersihkan data saat pengiriman ([#6486](https://github.com/nocobase/nocobase/pull/6486)) oleh @katherinehhh
  - Warna ikon di sudut kanan atas halaman tidak berubah dengan tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) oleh @zhangzhonghe
  - Mengklik tombol reset pada formulir filter tidak dapat menghapus kondisi filter blok kartu grid ([#6475](https://github.com/nocobase/nocobase/pull/6475)) oleh @zhangzhonghe
- **[Alur Kerja: Node manual]**

  - Perbaiki migrasi ([#6484](https://github.com/nocobase/nocobase/pull/6484)) oleh @mytharcher
  - Ubah nama migrasi untuk memastikan eksekusi ulang ([#6487](https://github.com/nocobase/nocobase/pull/6487)) oleh @mytharcher
  - Perbaiki bidang judul alur kerja di filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) oleh @mytharcher
  - Perbaiki kesalahan migrasi saat kolom id tidak ada ([#6470](https://github.com/nocobase/nocobase/pull/6470)) oleh @chenos
  - Hindari koleksi yang disinkronkan dari bidang ([#6478](https://github.com/nocobase/nocobase/pull/6478)) oleh @mytharcher
- **[Alur Kerja: Node agregat]** Perbaiki pembulatan pada hasil null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) oleh @mytharcher
- **[Alur Kerja]** Jangan hitung tugas saat alur kerja dihapus ([#6474](https://github.com/nocobase/nocobase/pull/6474)) oleh @mytharcher
- **[Manajer cadangan]** Tidak dapat memulai server saat pengaturan cadangan default hilang oleh @gchust
- **[Alur Kerja: Persetujuan]**

  - Perbaiki kesalahan bidang asosiasi file di formulir proses oleh @mytharcher
  - Perbaiki jumlah tugas berdasarkan hooks oleh @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*Tanggal rilis: 2025-03-18*

#### 🎉 Fitur Baru

- **[client]** dukung bidang teks panjang sebagai bidang judul untuk bidang asosiasi ([#6495](https://github.com/nocobase/nocobase/pull/6495)) oleh @katherinehhh
- **[Alur Kerja: Node agregat]** Dukung konfigurasi presisi untuk hasil agregasi ([#6491](https://github.com/nocobase/nocobase/pull/6491)) oleh @mytharcher

#### 🚀 Peningkatan

- **[Penyimpanan file: S3(Pro)]** Ubah teks 'Access URL Base' menjadi 'Base URL' oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[evaluators]** Kembalikan tempat desimal pembulatan ke 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) oleh @mytharcher
- **[Manajer file]** encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) oleh @chenos
- **[Sumber data: Utama]** Tidak dapat membuat tampilan MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) oleh @aaaaaajie
- **[Alur Kerja]** Perbaiki jumlah tugas lama setelah alur kerja dihapus ([#6493](https://github.com/nocobase/nocobase/pull/6493)) oleh @mytharcher
- **[Embed NocoBase]** Halaman menampilkan kosong oleh @zhangzhonghe
- **[Manajer cadangan]**

  - File yang diunggah belum dipulihkan saat membuat sub-aplikasi dari template cadangan oleh @gchust
  - Kegagalan pemulihan database MySQL yang disebabkan oleh tumpang tindih set GTID oleh @gchust
- **[Alur Kerja: Persetujuan]**

  - Ubah pengembalian persetujuan sebagai todo oleh @mytharcher
  - Perbaiki tombol tindakan yang terlewat di tabel proses oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*Tanggal rilis: 2025-03-13*

#### 🎉 Fitur Baru

- **[client]**

  - blok tabel mendukung penyembunyian kolom indeks (terlihat secara default) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) oleh @katherinehhh
  - dukung konfigurasi opsi bidang yang dapat dipilih dalam aturan tautan ([#6338](https://github.com/nocobase/nocobase/pull/6338)) oleh @katherinehhh
  - dukung konfigurasi rentang tanggal (min/maks) untuk bidang waktu dalam aturan tautan ([#6356](https://github.com/nocobase/nocobase/pull/6356)) oleh @katherinehhh
- **[Blok: Panel tindakan]** dukung pemutusan baris untuk judul tindakan di panel tindakan ([#6433](https://github.com/nocobase/nocobase/pull/6433)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[client]**

  - Nomor halaman yang salah saat menambahkan data setelah perubahan ukuran halaman sub-tabel ([#6437](https://github.com/nocobase/nocobase/pull/6437)) oleh @katherinehhh
  - Gaya logo tidak konsisten dengan yang sebelumnya ([#6444](https://github.com/nocobase/nocobase/pull/6444)) oleh @zhangzhonghe
  - Perubahan nilai bidang multi-pilih dan kehilangan opsi saat menghapus catatan sub-tabel ([#6405](https://github.com/nocobase/nocobase/pull/6405)) oleh @katherinehhh
  - Pemilihan rentang bidang tanggal tidak termasuk tanggal maksimum ([#6418](https://github.com/nocobase/nocobase/pull/6418)) oleh @katherinehhh
  - Saat menggunakan operator '$anyOf', aturan tautan tidak valid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) oleh @zhangzhonghe
  - Data tidak diperbarui di jendela popup yang dibuka melalui tombol Tautan ([#6411](https://github.com/nocobase/nocobase/pull/6411)) oleh @zhangzhonghe
- **[Tindakan: Edit massal]** Perbaiki alur kerja tidak dapat dipicu dalam pengiriman edit massal ([#6440](https://github.com/nocobase/nocobase/pull/6440)) oleh @mytharcher
- **[Visualisasi data]** Bidang yang dihapus muncul saat menambahkan bidang filter kustom ([#6450](https://github.com/nocobase/nocobase/pull/6450)) oleh @2013xile
- **[Manajer sumber data]** Mengganti sumber data dalam manajemen peran tidak memuat koleksi yang sesuai ([#6431](https://github.com/nocobase/nocobase/pull/6431)) oleh @katherinehhh
- **[Tindakan: Permintaan kustom]** Kesalahan validasi izin sisi server permintaan kustom ([#6438](https://github.com/nocobase/nocobase/pull/6438)) oleh @katherinehhh
- **[Manajer file]** Perbaiki beberapa masalah manajer file ([#6436](https://github.com/nocobase/nocobase/pull/6436)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]**

  - Hindari konfigurasi penerima yang salah yang menanyakan semua pengguna ([#6424](https://github.com/nocobase/nocobase/pull/6424)) oleh @sheldon66
  - Bedakan warna latar belakang daftar pesan dalam aplikasi dari kartu pesan untuk meningkatkan hierarki visual dan keterbacaan. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) oleh @sheldon66
- **[Alur Kerja: Node manual]**

  - Ubah batas versi migrasi menjadi `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) oleh @mytharcher
  - Perbaiki migrasi yang melewatkan logika prefiks tabel dan skema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) oleh @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*Tanggal rilis: 2025-03-14*

#### 🎉 Fitur Baru

- **[WeCom]** Memungkinkan pengaturan tooltip khusus untuk tombol masuk oleh @2013xile

#### 🚀 Peningkatan

- **[Visualisasi data]** Ganti `x-designer` yang tidak digunakan lagi dengan `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[client]** Perbaiki karakter khusus di URL gambar yang menyebabkan tidak muncul ([#6459](https://github.com/nocobase/nocobase/pull/6459)) oleh @mytharcher
- **[Alur Kerja: Node manual]** Perbaiki kesalahan yang muncul dalam migrasi ([#6445](https://github.com/nocobase/nocobase/pull/6445)) oleh @mytharcher
- **[Alur Kerja: Acara tindakan kustom]** Hapus `only` dalam kasus uji E2E oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Perbaiki kesalahan yang muncul saat menyetujui pada sumber data eksternal oleh @mytharcher
  - Perbaiki data asosiasi tidak muncul di formulir persetujuan oleh @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*Tanggal rilis: 2025-03-15*

#### 🎉 Fitur Baru

- **[client]** Komponen Seleksi Bertingkat Menambahkan Pengaturan Lingkup Data ([#6386](https://github.com/nocobase/nocobase/pull/6386)) oleh @Cyx649312038

#### 🚀 Peningkatan

- **[utils]** Pindahkan `md5` ke utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]** Di blok pohon, saat tidak dicentang, data di blok data tidak dibersihkan ([#6460](https://github.com/nocobase/nocobase/pull/6460)) oleh @zhangzhonghe
- **[Manajer file]** Tidak dapat menghapus file yang disimpan di S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) oleh @chenos
- **[Alur Kerja]** Hapus tombol pengaturan ikat alur kerja dari pemilih data ([#6455](https://github.com/nocobase/nocobase/pull/6455)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** Selesaikan masalah dengan URL yang ditandatangani S3 Pro yang tidak dapat diakses oleh @chenos
- **[Alur Kerja: Persetujuan]** Hindari crash halaman saat tidak ada pemohon di tabel proses persetujuan oleh @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*Tanggal rilis: 2025-03-18*

#### 🎉 Fitur Baru

- **[client]** Dukung tindakan tabel inline dengan mode hanya ikon, tampilkan nama tindakan saat dihover ([#6451](https://github.com/nocobase/nocobase/pull/6451)) oleh @katherinehhh

#### 🚀 Peningkatan

- **[Manajer file]** Sederhanakan logika pembuatan URL file dan API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]**

  - Ubah teks 'Access URL Base' menjadi 'Base URL' oleh @zhangzhonghe
  - Ubah ke cara sederhana untuk menghasilkan URL file oleh @mytharcher
- **[Manajer cadangan]** Izinkan pemulihan cadangan antara versi pra-rilis dan versi rilis dari versi yang sama oleh @gchust

#### 🐛 Perbaikan Bug

- **[client]**

  - Warna ikon di sudut kanan atas halaman tidak berubah dengan tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) oleh @zhangzhonghe
  - Bidang teks kaya tidak membersihkan data saat pengiriman ([#6486](https://github.com/nocobase/nocobase/pull/6486)) oleh @katherinehhh
  - Mengklik tombol reset pada formulir filter tidak dapat menghapus kondisi filter blok kartu grid ([#6475](https://github.com/nocobase/nocobase/pull/6475)) oleh @zhangzhonghe
- **[Alur Kerja: Node manual]**

  - Perbaiki migrasi ([#6484](https://github.com/nocobase/nocobase/pull/6484)) oleh @mytharcher
  - Ubah nama migrasi untuk memastikan eksekusi ulang ([#6487](https://github.com/nocobase/nocobase/pull/6487)) oleh @mytharcher
  - Perbaiki bidang judul alur kerja di filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) oleh @mytharcher
  - Hindari koleksi yang disinkronkan dari bidang ([#6478](https://github.com/nocobase/nocobase/pull/6478)) oleh @mytharcher
  - Perbaiki kesalahan migrasi saat kolom id tidak ada ([#6470](https://github.com/nocobase/nocobase/pull/6470)) oleh @chenos
- **[Alur Kerja]** Jangan hitung tugas saat alur kerja dihapus ([#6474](https://github.com/nocobase/nocobase/pull/6474)) oleh @mytharcher
- **[Alur Kerja: Node agregat]** Perbaiki pembulatan pada hasil null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) oleh @mytharcher
- **[Embed NocoBase]** Halaman menampilkan kosong oleh @zhangzhonghe
- **[Manajer cadangan]** Tidak dapat memulai server saat pengaturan cadangan default hilang oleh @gchust
- **[Alur Kerja: Persetujuan]**

  - Perbaiki kesalahan bidang asosiasi file di formulir proses oleh @mytharcher
  - Perbaiki jumlah tugas berdasarkan hooks oleh @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*Tanggal rilis: 2025-03-19*

#### 🎉 Fitur Baru

- **[client]** dukung bidang teks panjang sebagai bidang judul untuk bidang asosiasi ([#6495](https://github.com/nocobase/nocobase/pull/6495)) oleh @katherinehhh
- **[Alur Kerja: Node agregat]** Dukung konfigurasi presisi untuk hasil agregasi ([#6491](https://github.com/nocobase/nocobase/pull/6491)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[evaluators]** Kembalikan tempat desimal pembulatan ke 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) oleh @mytharcher
- **[Alur Kerja]** Perbaiki jumlah tugas lama setelah alur kerja dihapus ([#6493](https://github.com/nocobase/nocobase/pull/6493)) oleh @mytharcher
- **[Sumber data: Utama]** Tidak dapat membuat tampilan MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) oleh @aaaaaajie
- **[Manajer file]** encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) oleh @chenos
- **[Manajer cadangan]**

  - Kegagalan pemulihan database MySQL yang disebabkan oleh tumpang tindih set GTID oleh @gchust
  - File yang diunggah belum dipulihkan saat membuat sub-aplikasi dari template cadangan oleh @gchust
- **[Alur Kerja: Persetujuan]**

  - Perbaiki tombol tindakan yang terlewat di tabel proses oleh @mytharcher
  - Ubah pengembalian persetujuan sebagai todo oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/en/blog/v1.7.0-alpha.2)

*Tanggal rilis: 2025-03-15*

#### 🎉 Fitur Baru

- **[client]**

  - Komponen Seleksi Bertingkat Menambahkan Pengaturan Lingkup Data ([#6386](https://github.com/nocobase/nocobase/pull/6386)) oleh @Cyx649312038
  - blok tabel mendukung penyembunyian kolom indeks (terlihat secara default) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) oleh @katherinehhh
  - dukung konfigurasi opsi bidang yang dapat dipilih dalam aturan tautan ([#6338](https://github.com/nocobase/nocobase/pull/6338)) oleh @katherinehhh
  - dukung konfigurasi rentang tanggal (min/maks) untuk bidang waktu dalam aturan tautan ([#6356](https://github.com/nocobase/nocobase/pull/6356)) oleh @katherinehhh
- **[acl]** Dukung gabungan peran pengguna ([#6301](https://github.com/nocobase/nocobase/pull/6301)) oleh @aaaaaajie
- **[Blok: Panel tindakan]** dukung pemutusan baris untuk judul tindakan di panel tindakan ([#6433](https://github.com/nocobase/nocobase/pull/6433)) oleh @katherinehhh
- **[plugin-demo-platform]** Setel skipAuthCheck dari rute "/new" ke true. oleh @sheldon66
- **[WeCom]** Memungkinkan pengaturan tooltip khusus untuk tombol masuk oleh @2013xile

#### 🚀 Peningkatan

- **[utils]**

  - Pindahkan `md5` ke utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) oleh @mytharcher
  - Adaptasi halaman desktop untuk perangkat seluler ([#6393](https://github.com/nocobase/nocobase/pull/6393)) oleh @zhangzhonghe
- **[client]** Tambahkan skipAuthCheck ke router.add untuk mencegah pengalihan ke login di halaman publik. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) oleh @sheldon66
- **[Visualisasi data]** Ganti `x-designer` yang tidak digunakan lagi dengan `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[client]**

  - Di blok pohon, saat tidak dicentang, data di blok data tidak dibersihkan ([#6460](https://github.com/nocobase/nocobase/pull/6460)) oleh @zhangzhonghe
  - Perbaiki karakter khusus di URL gambar yang menyebabkan tidak muncul ([#6459](https://github.com/nocobase/nocobase/pull/6459)) oleh @mytharcher
  - Nomor halaman yang salah saat menambahkan data setelah perubahan ukuran halaman sub-tabel ([#6437](https://github.com/nocobase/nocobase/pull/6437)) oleh @katherinehhh
  - Konten tidak ditampilkan sepenuhnya di browser seluler ([#6446](https://github.com/nocobase/nocobase/pull/6446)) oleh @zhangzhonghe
  - Gaya logo tidak konsisten dengan yang sebelumnya ([#6444](https://github.com/nocobase/nocobase/pull/6444)) oleh @zhangzhonghe
  - Pemilihan rentang bidang tanggal tidak termasuk tanggal maksimum ([#6418](https://github.com/nocobase/nocobase/pull/6418)) oleh @katherinehhh
  - Saat menggunakan operator '$anyOf', aturan tautan tidak valid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) oleh @zhangzhonghe
  - Perubahan nilai bidang multi-pilih dan kehilangan opsi saat menghapus catatan sub-tabel ([#6405](https://github.com/nocobase/nocobase/pull/6405)) oleh @katherinehhh
  - Data tidak diperbarui di jendela popup yang dibuka melalui tombol Tautan ([#6411](https://github.com/nocobase/nocobase/pull/6411)) oleh @zhangzhonghe
- **[acl]** Memperbaiki masalah di mana bidang relasi tidak ditampilkan di bawah gabungan peran. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) oleh @aaaaaajie
- **[Manajer file]**

  - Tidak dapat menghapus file yang disimpan di S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) oleh @chenos
  - Perbaiki beberapa masalah manajer file ([#6436](https://github.com/nocobase/nocobase/pull/6436)) oleh @mytharcher
- **[Alur Kerja]** Hapus tombol pengaturan ikat alur kerja dari pemilih data ([#6455](https://github.com/nocobase/nocobase/pull/6455)) oleh @mytharcher
- **[Alur Kerja: Node manual]**

  - Perbaiki kesalahan yang muncul dalam migrasi ([#6445](https://github.com/nocobase/nocobase/pull/6445)) oleh @mytharcher
  - Ubah batas versi migrasi menjadi `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) oleh @mytharcher
  - Perbaiki migrasi yang melewatkan logika prefiks tabel dan skema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) oleh @mytharcher
- **[Kontrol akses]**

  - Memperbaiki pergantian peran tidak berlaku. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) oleh @aaaaaajie
  - Kesalahan saat lingkup data diatur ke data sendiri dan tabel tidak memiliki bidang pembuat. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) oleh @aaaaaajie
- **[Klien WEB]** Ganti semua instance ctx.state.currentRole (peran tunggal) dengan ctx.state.currentRoles (mendukung banyak peran). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) oleh @aaaaaajie
- **[Tindakan: Edit massal]** Perbaiki alur kerja tidak dapat dipicu dalam pengiriman edit massal ([#6440](https://github.com/nocobase/nocobase/pull/6440)) oleh @mytharcher
- **[Manajer sumber data]** Mengganti sumber data dalam manajemen peran tidak memuat koleksi yang sesuai ([#6431](https://github.com/nocobase/nocobase/pull/6431)) oleh @katherinehhh
- **[Visualisasi data]** Bidang yang dihapus muncul saat menambahkan bidang filter kustom ([#6450](https://github.com/nocobase/nocobase/pull/6450)) oleh @2013xile
- **[Notifikasi: Pesan dalam aplikasi]**

  - Bedakan warna latar belakang daftar pesan dalam aplikasi dari kartu pesan untuk meningkatkan hierarki visual dan keterbacaan. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) oleh @sheldon66
  - Hindari konfigurasi penerima yang salah yang menanyakan semua pengguna ([#6424](https://github.com/nocobase/nocobase/pull/6424)) oleh @sheldon66
- **[Tindakan: Permintaan kustom]** Kesalahan validasi izin sisi server permintaan kustom ([#6438](https://github.com/nocobase/nocobase/pull/6438)) oleh @katherinehhh
- **[Auth: Kunci API]** Penghapusan gabungan daftar peran plugin kunci API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) oleh @aaaaaajie
- **[Blok: template]** Perilaku simpan sebagai template yang salah di klien seluler ([#6420](https://github.com/nocobase/nocobase/pull/6420)) oleh @gchust
- **[Alur Kerja: Acara tindakan kustom]** Hapus `only` dalam kasus uji E2E oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** Selesaikan masalah dengan URL yang ditandatangani S3 Pro yang tidak dapat diakses oleh @chenos
- **[Alur Kerja: Persetujuan]**

  - Hindari crash halaman saat tidak ada pemohon di tabel proses persetujuan oleh @mytharcher
  - Perbaiki data asosiasi tidak muncul di formulir persetujuan oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat menyetujui pada sumber data eksternal oleh @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/en/blog/v1.7.0-alpha.3)

*Tanggal rilis: 2025-03-18*

#### 🎉 Fitur Baru

- **[client]** Dukung tindakan tabel inline dengan mode hanya ikon, tampilkan nama tindakan saat dihover ([#6451](https://github.com/nocobase/nocobase/pull/6451)) oleh @katherinehhh

#### 🚀 Peningkatan

- **[Manajer file]** Sederhanakan logika pembuatan URL file dan API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]**

  - Ubah teks 'Access URL Base' menjadi 'Base URL' oleh @zhangzhonghe
  - Ubah ke cara sederhana untuk menghasilkan URL file oleh @mytharcher
- **[Manajer cadangan]** Izinkan pemulihan cadangan antara versi pra-rilis dan versi rilis dari versi yang sama oleh @gchust

#### 🐛 Perbaikan Bug

- **[client]**

  - Bidang yang hilang dalam konfigurasi aturan tautan ([#6488](https://github.com/nocobase/nocobase/pull/6488)) oleh @katherinehhh
  - Warna ikon di sudut kanan atas halaman tidak berubah dengan tema ([#6482](https://github.com/nocobase/nocobase/pull/6482)) oleh @zhangzhonghe
  - Bidang teks kaya tidak membersihkan data saat pengiriman ([#6486](https://github.com/nocobase/nocobase/pull/6486)) oleh @katherinehhh
  - Gaya input tidak benar untuk pengaturan nilai default formulir ([#6490](https://github.com/nocobase/nocobase/pull/6490)) oleh @gchust
  - Mengklik tombol reset pada formulir filter tidak dapat menghapus kondisi filter blok kartu grid ([#6475](https://github.com/nocobase/nocobase/pull/6475)) oleh @zhangzhonghe
- **[Alur Kerja: Node manual]**

  - Ubah nama migrasi untuk memastikan eksekusi ulang ([#6487](https://github.com/nocobase/nocobase/pull/6487)) oleh @mytharcher
  - Perbaiki migrasi ([#6484](https://github.com/nocobase/nocobase/pull/6484)) oleh @mytharcher
  - Perbaiki bidang judul alur kerja di filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) oleh @mytharcher
  - Perbaiki kesalahan migrasi saat kolom id tidak ada ([#6470](https://github.com/nocobase/nocobase/pull/6470)) oleh @chenos
  - Hindari koleksi yang disinkronkan dari bidang ([#6478](https://github.com/nocobase/nocobase/pull/6478)) oleh @mytharcher
- **[Alur Kerja]** Jangan hitung tugas saat alur kerja dihapus ([#6474](https://github.com/nocobase/nocobase/pull/6474)) oleh @mytharcher
- **[Variabel dan rahasia]** Tombol tidak ditampilkan di laci buat variabel baru ([#6485](https://github.com/nocobase/nocobase/pull/6485)) oleh @gchust
- **[Alur Kerja: Node agregat]** Perbaiki pembulatan pada hasil null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) oleh @mytharcher
- **[Embed NocoBase]** Halaman menampilkan kosong oleh @zhangzhonghe
- **[Manajer cadangan]** Tidak dapat memulai server saat pengaturan cadangan default hilang oleh @gchust
- **[Alur Kerja: Persetujuan]**

  - Perbaiki kesalahan bidang asosiasi file di formulir proses oleh @mytharcher
  - Perbaiki jumlah tugas berdasarkan hooks oleh @mytharcher

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
