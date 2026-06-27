---
title: "Pembaruan Mingguan NocoBase: Dukung Pengisian Kolom Input Melalui Pemindaian Kode QR"
description: "Pembaruan minggu ini meliputi: dukungan untuk menyalin konten kolom teks dengan satu klik, pengaturan interval sinkronisasi email, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/en/blog/v1.7.14)

*Tanggal rilis: 2025-06-18*

#### 🚀 Peningkatan

- **[client]** Sembunyikan otomatis bilah aksi blok kartu grid saat kosong ([#7069](https://github.com/nocobase/nocobase/pull/7069)) oleh @zhangzhonghe
- **[Verifikasi]** Hapus opsi verifikator dari respons API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[database]** dukung pembaruan asosiasi di updateOrCreate dan firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) oleh @chenos
- **[client]**

  - Variabel parameter kueri URL tidak berfungsi di nilai default bidang formulir publik ([#7084](https://github.com/nocobase/nocobase/pull/7084)) oleh @katherinehhh
  - kondisi gaya pada bidang kolom sub-tabel tidak diterapkan dengan benar ([#7083](https://github.com/nocobase/nocobase/pull/7083)) oleh @katherinehhh
  - Pemfilteran melalui bidang koleksi relasi di formulir filter tidak valid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) oleh @zhangzhonghe
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbarui bidang banyak ke banyak (array) memunculkan kesalahan saat bidang `updatedBy` ada ([#7089](https://github.com/nocobase/nocobase/pull/7089)) oleh @2013xile
- **[Formulir publik]** Formulir publik: Perbaiki masalah akses tidak sah pada pengiriman formulir ([#7085](https://github.com/nocobase/nocobase/pull/7085)) oleh @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/en/blog/v1.7.13)

*Tanggal rilis: 2025-06-17*

#### 🚀 Peningkatan

- **[client]** Lebar kontainer logo menyesuaikan dengan tipe konten (168px tetap untuk gambar, lebar otomatis untuk teks) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) oleh @Cyx649312038
- **[Workflow: Persetujuan]** Tambahkan opsi bidang tambahan untuk daftar penugasan ulang oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - pesan validasi wajib di sub-tabel tetap muncul saat berpindah halaman ([#7080](https://github.com/nocobase/nocobase/pull/7080)) oleh @katherinehhh
  - titik desimal hilang setelah mengganti komponen jumlah dari mask ke inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) oleh @katherinehhh
  - rendering Markdown (Vditor) yang salah di sub-tabel ([#7074](https://github.com/nocobase/nocobase/pull/7074)) oleh @katherinehhh
- **[Bidang koleksi: Urutan]** Perbaiki perhitungan urutan bigint berbasis string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) oleh @mytharcher
- **[Manajer cadangan]** kesalahan perintah tidak diketahui saat memulihkan cadangan MySQL di platform windows oleh @gchust

### [v1.7.12](https://www.nocobase.com/en/blog/v1.7.12)

*Tanggal rilis: 2025-06-16*

#### 🚀 Peningkatan

- **[client]** tambahkan opsi "kosong" dan "tidak kosong" ke aturan tautan bidang kotak centang ([#7073](https://github.com/nocobase/nocobase/pull/7073)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[client]** Setelah membuat bidang relasi terbalik, opsi "Buat bidang relasi terbalik di tabel data target" di pengaturan bidang asosiasi tidak dicentang. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) oleh @aaaaaajie
- **[Manajer sumber data]** Perubahan cakupan sekarang berlaku segera untuk semua peran terkait. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) oleh @aaaaaajie
- **[Kontrol akses]** Memperbaiki masalah di mana aplikasi memblokir masuk saat tidak ada peran default ([#7059](https://github.com/nocobase/nocobase/pull/7059)) oleh @aaaaaajie
- **[Workflow: Acara aksi kustom]** Perbaiki variabel url pengalihan tidak diurai oleh @mytharcher

### [v1.7.11](https://www.nocobase.com/en/blog/v1.7.11)

*Tanggal rilis: 2025-06-15*

#### 🎉 Fitur Baru

- **[Salin teks]** Dukung penyalinan konten bidang teks satu klik ([#6954](https://github.com/nocobase/nocobase/pull/6954)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[client]**

  - pemilih bidang asosiasi tidak membersihkan data yang dipilih setelah pengiriman ([#7067](https://github.com/nocobase/nocobase/pull/7067)) oleh @katherinehhh
  - Perbaiki petunjuk ukuran unggah ([#7057](https://github.com/nocobase/nocobase/pull/7057)) oleh @mytharcher
- **[server]** Tidak dapat membaca properti dari undefined (membaca 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) oleh @chenos
- **[Workflow: Node loop]** Perbaiki cabang loop berjalan saat kondisi tidak terpenuhi ([#7063](https://github.com/nocobase/nocobase/pull/7063)) oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Perbaiki statistik todo tidak diperbarui saat eksekusi dibatalkan oleh @mytharcher
  - Perbaiki variabel pemicu saat filter berdasarkan tipe oleh @mytharcher

### [v1.7.10](https://www.nocobase.com/en/blog/v1.7.10)

*Tanggal rilis: 2025-06-12*

#### 🐛 Perbaikan Bug

- **[client]**

  - Perbaiki masalah di mana aturan tautan menyebabkan loop tak terbatas ([#7050](https://github.com/nocobase/nocobase/pull/7050)) oleh @zhangzhonghe
  - Perbaiki: gunakan optional chaining untuk menolak permintaan dengan aman di APIClient saat handler mungkin tidak terdefinisi ([#7054](https://github.com/nocobase/nocobase/pull/7054)) oleh @sheldon66
  - masalah penutupan otomatis saat mengonfigurasi bidang di formulir popup sekunder ([#7052](https://github.com/nocobase/nocobase/pull/7052)) oleh @katherinehhh
- **[Visualisasi data]** tampilan yang salah dari bidang tanggal antara di filter bagan ([#7051](https://github.com/nocobase/nocobase/pull/7051)) oleh @katherinehhh
- **[Dokumentasi API]** plugin non-resmi NocoBase gagal menampilkan dokumentasi API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) oleh @chenzhizdt
- **[Aksi: Impor catatan]** Memperbaiki impor xlsx untuk membatasi bidang textarea agar tidak menerima data berformat non-string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) oleh @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/en/blog/v1.8.0-beta.9)

*Tanggal rilis: 2025-06-18*

#### 🚀 Peningkatan

- **[client]**

  - Sembunyikan otomatis bilah aksi blok kartu grid saat kosong ([#7069](https://github.com/nocobase/nocobase/pull/7069)) oleh @zhangzhonghe
  - Lebar kontainer logo menyesuaikan dengan tipe konten (168px tetap untuk gambar, lebar otomatis untuk teks) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) oleh @Cyx649312038
- **[Verifikasi]** Hapus opsi verifikator dari respons API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[client]**

  - pesan validasi wajib di sub-tabel tetap muncul saat berpindah halaman ([#7080](https://github.com/nocobase/nocobase/pull/7080)) oleh @katherinehhh
  - kondisi gaya pada bidang kolom sub-tabel tidak diterapkan dengan benar ([#7083](https://github.com/nocobase/nocobase/pull/7083)) oleh @katherinehhh
  - titik desimal hilang setelah mengganti komponen jumlah dari mask ke inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) oleh @katherinehhh
  - Variabel parameter kueri URL tidak berfungsi di nilai default bidang formulir publik ([#7084](https://github.com/nocobase/nocobase/pull/7084)) oleh @katherinehhh
  - Pemfilteran melalui bidang koleksi relasi di formulir filter tidak valid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) oleh @zhangzhonghe
  - rendering Markdown (Vditor) yang salah di sub-tabel ([#7074](https://github.com/nocobase/nocobase/pull/7074)) oleh @katherinehhh
- **[database]** dukung pembaruan asosiasi di updateOrCreate dan firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) oleh @chenos
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbarui bidang banyak ke banyak (array) memunculkan kesalahan saat bidang `updatedBy` ada ([#7089](https://github.com/nocobase/nocobase/pull/7089)) oleh @2013xile
- **[Bidang koleksi: Urutan]** Perbaiki perhitungan urutan bigint berbasis string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) oleh @mytharcher
- **[Formulir publik]** Formulir publik: Perbaiki masalah akses tidak sah pada pengiriman formulir ([#7085](https://github.com/nocobase/nocobase/pull/7085)) oleh @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/en/blog/v1.8.0-beta.8)

*Tanggal rilis: 2025-06-16*

#### 🚀 Peningkatan

- **[client]** tambahkan opsi "kosong" dan "tidak kosong" ke aturan tautan bidang kotak centang ([#7073](https://github.com/nocobase/nocobase/pull/7073)) oleh @katherinehhh
- **[Workflow: Persetujuan]** Tambahkan opsi bidang tambahan untuk daftar penugasan ulang oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Manajer cadangan]** kesalahan perintah tidak diketahui saat memulihkan cadangan MySQL di platform windows oleh @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/en/blog/v1.8.0-beta.7)

*Tanggal rilis: 2025-06-15*

#### 🎉 Fitur Baru

- **[Salin teks]** Dukung penyalinan konten bidang teks satu klik ([#6954](https://github.com/nocobase/nocobase/pull/6954)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[server]** Tidak dapat membaca properti dari undefined (membaca 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) oleh @chenos
- **[client]**

  - pemilih bidang asosiasi tidak membersihkan data yang dipilih setelah pengiriman ([#7067](https://github.com/nocobase/nocobase/pull/7067)) oleh @katherinehhh
  - Setelah membuat bidang relasi terbalik, opsi "Buat bidang relasi terbalik di tabel data target" di pengaturan bidang asosiasi tidak dicentang. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) oleh @aaaaaajie
- **[Kontrol akses]** Memperbaiki masalah di mana aplikasi memblokir masuk saat tidak ada peran default ([#7059](https://github.com/nocobase/nocobase/pull/7059)) oleh @aaaaaajie
- **[Workflow: Node loop]** Perbaiki cabang loop berjalan saat kondisi tidak terpenuhi ([#7063](https://github.com/nocobase/nocobase/pull/7063)) oleh @mytharcher
- **[Manajer sumber data]** Perubahan cakupan sekarang berlaku segera untuk semua peran terkait. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) oleh @aaaaaajie
- **[Workflow: Acara aksi kustom]** Perbaiki variabel url pengalihan tidak diurai oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Perbaiki variabel pemicu saat filter berdasarkan tipe oleh @mytharcher
  - Perbaiki statistik todo tidak diperbarui saat eksekusi dibatalkan oleh @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/en/blog/v1.8.0-beta.6)

*Tanggal rilis: 2025-06-12*

#### 🎉 Fitur Baru

- **[Log audit]** Tambahkan variabel lingkungan `AUDIT_LOGGER_TRANSPORT` untuk mengontrol metode output log audit oleh @2013xile

#### 🚀 Peningkatan

- **[client]** Larang memindahkan menu grup ke dalam dirinya sendiri ([#7005](https://github.com/nocobase/nocobase/pull/7005)) oleh @zhangzhonghe
- **[Kalender]** dukung pengaturan hari mulai minggu di blok kalender ([#7032](https://github.com/nocobase/nocobase/pull/7032)) oleh @katherinehhh
- **[Bidang koleksi: Markdown(Vditor)]** dukung klik gambar untuk memperbesar di mode pratinjau Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) oleh @katherinehhh
- **[Bidang koleksi: Banyak ke banyak (array)]** Kesalahan terkait izin saat menampilkan bidang banyak-ke-banyak(banyak) di tabel data. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) oleh @aaaaaajie
- **[Komentar]** dukung paginasi di blok komentar oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[client]**

  - masalah penutupan otomatis saat mengonfigurasi bidang di formulir popup sekunder ([#7052](https://github.com/nocobase/nocobase/pull/7052)) oleh @katherinehhh
  - Perbaiki masalah di mana aturan tautan menyebabkan loop tak terbatas ([#7050](https://github.com/nocobase/nocobase/pull/7050)) oleh @zhangzhonghe
  - masalah penutupan otomatis saat mengonfigurasi bidang di formulir popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh
  - Perbaiki petunjuk ukuran unggah ([#7057](https://github.com/nocobase/nocobase/pull/7057)) oleh @mytharcher
  - Perbaiki: gunakan optional chaining untuk menolak permintaan dengan aman di APIClient saat handler mungkin tidak terdefinisi ([#7054](https://github.com/nocobase/nocobase/pull/7054)) oleh @sheldon66
  - masalah penutupan otomatis saat mengonfigurasi bidang di formulir popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh
  - Perbaiki bidang tidak ditampilkan di templat blok yang disebabkan oleh permintaan API duplikat ([#6985](https://github.com/nocobase/nocobase/pull/6985)) oleh @zhangzhonghe
  - opsi bidang pilih tidak berfungsi di aturan tautan formulir filter ([#7035](https://github.com/nocobase/nocobase/pull/7035)) oleh @katherinehhh
  - Aturan validasi formulir filter menyebabkan tombol filter menjadi tidak efektif ([#6975](https://github.com/nocobase/nocobase/pull/6975)) oleh @zhangzhonghe
  - Tidak dapat menghapus indikator bidang wajib sub-tabel menggunakan aturan tautan ([#7022](https://github.com/nocobase/nocobase/pull/7022)) oleh @zhangzhonghe
  - Perbaiki masalah kesalahan parameter blok filter ([#6966](https://github.com/nocobase/nocobase/pull/6966)) oleh @zhangzhonghe
  - Menyelesaikan masalah di mana blok gagal membaca data tampilan dari sumber data eksternal. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) oleh @aaaaaajie
  - Gunakan cakupan variabel independen untuk setiap bidang ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher
  - Variabel objek saat ini tidak valid di aturan tautan ([#7008](https://github.com/nocobase/nocobase/pull/7008)) oleh @zhangzhonghe
- **[database]** perbaiki: tambahkan bidang pembuat dan pembaru yang hilang di impor xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) oleh @aaaaaajie
- **[undefined]** Hapus ketergantungan database untuk possibleTypes, terapkan konfigurasi berbasis API oleh @aaaaaajie
- **[Aksi: Impor catatan]**

  - Memperbaiki impor xlsx untuk membatasi bidang textarea agar tidak menerima data berformat non-string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) oleh @aaaaaajie
  - Perbaiki kegagalan impor tabel anak saat bidang relasi terlibat ([#7039](https://github.com/nocobase/nocobase/pull/7039)) oleh @aaaaaajie
  - Memperbaiki kesalahan yang terjadi selama pengeditan batch saat mengimpor data tabel pohon XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) oleh @aaaaaajie
- **[Visualisasi data]**

  - tampilan yang salah dari bidang tanggal antara di filter bagan ([#7051](https://github.com/nocobase/nocobase/pull/7051)) oleh @katherinehhh
  - Bidang grup kotak centang di bagan harus menampilkan label, bukan nilai mentah ([#7033](https://github.com/nocobase/nocobase/pull/7033)) oleh @2013xile
- **[Dokumentasi API]** plugin non-resmi NocoBase gagal menampilkan dokumentasi API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) oleh @chenzhizdt
- **[Workflow]**

  - Perbaiki `toJSON()` menyebabkan kesalahan di pemicu jadwal ([#7037](https://github.com/nocobase/nocobase/pull/7037)) oleh @mytharcher
  - Perbaiki kesalahan yang muncul di aksi eksekusi manual saat pemicu tidak dikonfigurasi dengan benar ([#7036](https://github.com/nocobase/nocobase/pull/7036)) oleh @mytharcher
  - Perbaiki kesalahan UI saat workflow tidak ada ([#7023](https://github.com/nocobase/nocobase/pull/7023)) oleh @mytharcher
  - Perbaiki acara koleksi pada mode buat atau perbarui tidak terpicu saat membuat tanpa bidang yang diubah ([#7015](https://github.com/nocobase/nocobase/pull/7015)) oleh @mytharcher
- **[Manajer sumber data]** Hapus ketergantungan database untuk possibleTypes, terapkan konfigurasi berbasis API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) oleh @aaaaaajie
- **[Seluler]** Optimalkan masalah lag popup seluler ([#7029](https://github.com/nocobase/nocobase/pull/7029)) oleh @zhangzhonghe
- **[Aksi: Ekspor catatan Pro]** Perbaiki kesalahan yang terjadi saat mengekspor lampiran dengan kondisi. oleh @aaaaaajie
- **[Workflow: JavaScript]** Perbaiki require untuk jalur relatif oleh @mytharcher
- **[Cetak templat]** Perbaiki bug parsing izin dan tambahkan pemeriksaan data tidak ditemukan. oleh @sheldon66
- **[Workflow: Persetujuan]**

  - Untuk menghindari kesalahan bidang yang tidak terdefinisi oleh @mytharcher
  - Perbaiki kesalahan yang muncul saat workflow dihapus oleh @mytharcher
  - Perbaiki variabel pemicu oleh @mytharcher
  - Muat ulang asosiasi file dari snapshot untuk menghindari URL kedaluwarsa oleh @mytharcher
  - Perbaiki kesalahan API saat menyegarkan halaman detail oleh @mytharcher
- **[WeCom]** Tambahkan pemeriksaan untuk jalur callback di middleware gateway oleh @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/en/blog/v1.8.0-alpha.8)

*Tanggal rilis: 2025-06-17*

#### 🎉 Fitur Baru

- **[Salin teks]** Dukung penyalinan konten bidang teks satu klik ([#6954](https://github.com/nocobase/nocobase/pull/6954)) oleh @zhangzhonghe
- **[Manajer email]** dukung hapus email oleh @jiannx

#### 🚀 Peningkatan

- **[client]**

  - tambahkan opsi "kosong" dan "tidak kosong" ke aturan tautan bidang kotak centang ([#7073](https://github.com/nocobase/nocobase/pull/7073)) oleh @katherinehhh
  - Lebar kontainer logo menyesuaikan dengan tipe konten (168px tetap untuk gambar, lebar otomatis untuk teks) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) oleh @Cyx649312038
- **[Manajer tugas asinkron]** Tingkatkan kinerja pembuatan tugas selama ekspor ([#7078](https://github.com/nocobase/nocobase/pull/7078)) oleh @aaaaaajie
- **[Workflow: Persetujuan]** Tambahkan opsi bidang tambahan untuk daftar penugasan ulang oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - titik desimal hilang setelah mengganti komponen jumlah dari mask ke inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) oleh @katherinehhh
  - rendering Markdown (Vditor) yang salah di sub-tabel ([#7074](https://github.com/nocobase/nocobase/pull/7074)) oleh @katherinehhh
  - Setelah membuat bidang relasi terbalik, opsi "Buat bidang relasi terbalik di tabel data target" di pengaturan bidang asosiasi tidak dicentang. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) oleh @aaaaaajie
  - pemilih bidang asosiasi tidak membersihkan data yang dipilih setelah pengiriman ([#7067](https://github.com/nocobase/nocobase/pull/7067)) oleh @katherinehhh
- **[server]** Tidak dapat membaca properti dari undefined (membaca 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) oleh @chenos
- **[Kontrol akses]** Memperbaiki masalah di mana aplikasi memblokir masuk saat tidak ada peran default ([#7059](https://github.com/nocobase/nocobase/pull/7059)) oleh @aaaaaajie
- **[Manajer sumber data]** Perubahan cakupan sekarang berlaku segera untuk semua peran terkait. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) oleh @aaaaaajie
- **[Workflow: Node loop]** Perbaiki cabang loop berjalan saat kondisi tidak terpenuhi ([#7063](https://github.com/nocobase/nocobase/pull/7063)) oleh @mytharcher
- **[Workflow: Acara aksi kustom]** Perbaiki variabel url pengalihan tidak diurai oleh @mytharcher
- **[Workflow: Persetujuan]** Perbaiki statistik todo tidak diperbarui saat eksekusi dibatalkan oleh @mytharcher
- **[Manajer email]** penghapusan email gagal oleh @jiannx
- **[Manajer cadangan]** kesalahan perintah tidak diketahui saat memulihkan cadangan MySQL di platform windows oleh @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/en/blog/v1.8.0-alpha.7)

*Tanggal rilis: 2025-06-13*

#### 🎉 Fitur Baru

- **[Manajer email]** dukung pengaturan interval sinkronisasi email oleh @jiannx

#### 🐛 Perbaikan Bug

- **[database]** buat operator eq untuk bidang string kompatibel dengan tipe angka ([#7062](https://github.com/nocobase/nocobase/pull/7062)) oleh @chenos
- **[client]** Perbaiki petunjuk ukuran unggah ([#7057](https://github.com/nocobase/nocobase/pull/7057)) oleh @mytharcher
- **[Workflow: Persetujuan]** Perbaiki variabel pemicu saat filter berdasarkan tipe oleh @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/en/blog/v1.8.0-alpha.5)

*Tanggal rilis: 2025-06-12*

#### 🚀 Peningkatan

- **[client]**

  - Dukung pengisian bidang input melalui pemindaian kode QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) oleh @katherinehhh
  - dukung lokalisasi untuk konten blok Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) oleh @katherinehhh
  - Larang memindahkan menu grup ke dalam dirinya sendiri ([#7005](https://github.com/nocobase/nocobase/pull/7005)) oleh @zhangzhonghe
- **[Bidang koleksi: Banyak ke banyak (array)]** Kesalahan terkait izin saat menampilkan bidang banyak-ke-banyak(banyak) di tabel data. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) oleh @aaaaaajie
- **[Kalender]** dukung pengaturan hari mulai minggu di blok kalender ([#7032](https://github.com/nocobase/nocobase/pull/7032)) oleh @katherinehhh
- **[Bidang koleksi: Markdown(Vditor)]** dukung klik gambar untuk memperbesar di mode pratinjau Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[client]**

  - masalah penutupan otomatis saat mengonfigurasi bidang di formulir popup sekunder ([#7052](https://github.com/nocobase/nocobase/pull/7052)) oleh @katherinehhh
  - Perbaiki bidang tidak ditampilkan di templat blok yang disebabkan oleh permintaan API duplikat ([#6985](https://github.com/nocobase/nocobase/pull/6985)) oleh @zhangzhonghe
  - masalah penutupan otomatis saat mengonfigurasi bidang di formulir popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh
  - Aturan validasi formulir filter menyebabkan tombol filter menjadi tidak efektif ([#6975](https://github.com/nocobase/nocobase/pull/6975)) oleh @zhangzhonghe
  - masalah penutupan otomatis saat mengonfigurasi bidang di formulir popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh
  - opsi bidang pilih tidak berfungsi di aturan tautan formulir filter ([#7035](https://github.com/nocobase/nocobase/pull/7035)) oleh @katherinehhh
  - Tidak dapat menghapus indikator bidang wajib sub-tabel menggunakan aturan tautan ([#7022](https://github.com/nocobase/nocobase/pull/7022)) oleh @zhangzhonghe
  - Perbaiki masalah kesalahan parameter blok filter ([#6966](https://github.com/nocobase/nocobase/pull/6966)) oleh @zhangzhonghe
  - Perbaiki masalah di mana data pengguna saat ini kosong ([#7016](https://github.com/nocobase/nocobase/pull/7016)) oleh @zhangzhonghe
  - Variabel objek saat ini tidak valid di aturan tautan ([#7008](https://github.com/nocobase/nocobase/pull/7008)) oleh @zhangzhonghe
  - Menyelesaikan masalah di mana blok gagal membaca data tampilan dari sumber data eksternal. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) oleh @aaaaaajie
  - Gunakan cakupan variabel independen untuk setiap bidang ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher
- **[Visualisasi data]**

  - tampilan yang salah dari bidang tanggal antara di filter bagan ([#7051](https://github.com/nocobase/nocobase/pull/7051)) oleh @katherinehhh
  - Bidang grup kotak centang di bagan harus menampilkan label, bukan nilai mentah ([#7033](https://github.com/nocobase/nocobase/pull/7033)) oleh @2013xile
- **[Aksi: Impor catatan]**

  - Memperbaiki impor xlsx untuk membatasi bidang textarea agar tidak menerima data berformat non-string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) oleh @aaaaaajie
  - Perbaiki kegagalan impor tabel anak saat bidang relasi terlibat ([#7039](https://github.com/nocobase/nocobase/pull/7039)) oleh @aaaaaajie
  - Memperbaiki kesalahan yang terjadi selama pengeditan batch saat mengimpor data tabel pohon XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) oleh @aaaaaajie
- **[Dokumentasi API]** plugin non-resmi NocoBase gagal menampilkan dokumentasi API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) oleh @chenzhizdt
- **[Workflow]**

  - Perbaiki `toJSON()` menyebabkan kesalahan di pemicu jadwal ([#7037](https://github.com/nocobase/nocobase/pull/7037)) oleh @mytharcher
  - Perbaiki kesalahan yang muncul di aksi eksekusi manual saat pemicu tidak dikonfigurasi dengan benar ([#7036](https://github.com/nocobase/nocobase/pull/7036)) oleh @mytharcher
  - Perbaiki kesalahan UI saat workflow tidak ada ([#7023](https://github.com/nocobase/nocobase/pull/7023)) oleh @mytharcher
  - Perbaiki acara koleksi pada mode buat atau perbarui tidak terpicu saat membuat tanpa bidang yang diubah ([#7015](https://github.com/nocobase/nocobase/pull/7015)) oleh @mytharcher
- **[Seluler]** Optimalkan masalah lag popup seluler ([#7029](https://github.com/nocobase/nocobase/pull/7029)) oleh @zhangzhonghe
- **[Manajer sumber data]** Hapus ketergantungan database untuk possibleTypes, terapkan konfigurasi berbasis API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) oleh @aaaaaajie
- **[Aksi: Ekspor catatan Pro]** Perbaiki kesalahan yang terjadi saat mengekspor lampiran dengan kondisi. oleh @aaaaaajie
