---
title: "Pembaruan Mingguan｜Dukung Tinggi Blok yang Dapat Dikonfigurasi"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 6 Februari hingga 12 Februari 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/en/blog/v1.9.46)

*Tanggal rilis: 2026-02-11*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki opsi komponen bidang tidak diperbarui secara real-time saat bidang asosiasi mengganti pola ([#8611](https://github.com/nocobase/nocobase/pull/8611)) oleh @katherinehhh
- **[Visualisasi Data: ECharts]** Memperbaiki kesalahan ejaan ECharts oleh @heziqiang
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana nilai hilang dari popup detail "Aplikasi Saya" oleh @mytharcher
  - Memperbaiki kesalahan yang muncul saat mengeksekusi pada mode sebelum simpan oleh @mytharcher

### [v1.9.45](https://www.nocobase.com/en/blog/v1.9.45)

*Tanggal rilis: 2026-02-09*

### 🐛 Perbaikan Bug

- **[Komponen bidang: mask]** Memperbaiki masalah di mana popup pengaturan bidang mask tidak dapat memuat semua peran pengguna dengan benar. oleh @gchust
- **[Alur Kerja: Persetujuan]** Memperbaiki id yang salah untuk memuat catatan detail oleh @mytharcher

### [v1.9.44](https://www.nocobase.com/en/blog/v1.9.44)

*Tanggal rilis: 2026-02-08*

### 🎉 Fitur Baru

- **[Alur Kerja: Persetujuan]** Menambahkan kontrol ACL untuk API persetujuan oleh @mytharcher

### [v1.9.43](https://www.nocobase.com/en/blog/v1.9.43)

*Tanggal rilis: 2026-02-06*

### 🎉 Fitur Baru

- **[Auth: DingTalk]** Memungkinkan untuk mengikat pengguna dengan `unionId` oleh @2013xile

### 🚀 Peningkatan

- **[Bidang koleksi: Markdown(Vditor)]** Menambahkan opsi konfigurasi untuk mengatur mode edit default di pengaturan komponen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) oleh @Cyx649312038

### 🐛 Perbaikan Bug

- **[Aksi: Impor catatan]** Memperbaiki kerentanan aksi impor ([#8544](https://github.com/nocobase/nocobase/pull/8544)) oleh @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/en/blog/v2.0.0-beta.23)

*Tanggal rilis: 2026-02-12*

### 🎉 Fitur Baru

- **[Blok: GridCard]** mendukung tinggi blok yang dapat dikonfigurasi ([#8583](https://github.com/nocobase/nocobase/pull/8583)) oleh @katherinehhh
- **[Aksi: Edit massal]** edit massal 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) oleh @jiannx

### 🚀 Peningkatan

- **[klien]**

  - Tabel 2.0 mendukung pengurutan seret dan lepas ([#8540](https://github.com/nocobase/nocobase/pull/8540)) oleh @jiannx
  - Memindahkan pengaturan penugasan bidang dan nilai default ke konfigurasi tingkat formulir. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) oleh @chenos
- **[Lokalisasi]** secara otomatis membuat kunci i18n yang hilang ([#8588](https://github.com/nocobase/nocobase/pull/8588)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki data yang difilter salah di dropdown asosiasi ketika bidang judul adalah kunci asing ([#8619](https://github.com/nocobase/nocobase/pull/8619)) oleh @katherinehhh
  - Memperbaiki masalah di mana bidang lampiran asosiasi yang dibersihkan tidak disimpan setelah dikirim dalam formulir edit ([#8616](https://github.com/nocobase/nocobase/pull/8616)) oleh @katherinehhh
  - Memperbaiki opsi komponen bidang tidak diperbarui secara real-time saat bidang asosiasi mengganti pola ([#8611](https://github.com/nocobase/nocobase/pull/8611)) oleh @katherinehhh
  - Memperbaiki masalah di mana kolom tabel tidak di-render ulang setelah mengklik Jalankan di editor kolom JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) oleh @gchust
  - memperbaiki tidak dapat mengembalikan data yang dipilih di komponen bidang pemilih catatan setelah diedit ([#8610](https://github.com/nocobase/nocobase/pull/8610)) oleh @katherinehhh
- **[Manajer file]** memperbaiki masalah di mana komponen bidang file masih dapat membuka dialog pemilih saat dinonaktifkan ([#8617](https://github.com/nocobase/nocobase/pull/8617)) oleh @katherinehhh
- **[Visualisasi Data: ECharts]** Memperbaiki kesalahan ejaan ECharts oleh @heziqiang
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana nilai hilang dari popup detail "Aplikasi Saya" oleh @mytharcher
  - Memperbaiki kesalahan yang muncul saat mengeksekusi pada mode sebelum simpan oleh @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/en/blog/v2.0.0-beta.22)

*Tanggal rilis: 2026-02-10*

### 🎉 Fitur Baru

- **[klien]** Mendukung konfigurasi judul tab browser untuk halaman, tab halaman, popup, dan tab popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) oleh @zhangzhonghe
- **[Alur Kerja: Persetujuan]** Menambahkan kontrol ACL untuk API persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** Menggunakan model bidang independen untuk bidang asosiasi dalam formulir filter ([#8511](https://github.com/nocobase/nocobase/pull/8511)) oleh @zhangzhonghe
- **[Alur Kerja: CC]** Memfaktorkan ulang plugin CC alur kerja untuk mendukung arsitektur FlowModel dengan kompatibilitas v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[mesin-alur]**

  - Memperbaiki masalah di mana objek Blob tidak dapat dibuat di blok JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) oleh @gchust
  - Memperbaiki konteks eksekusi yang salah untuk "ctx.sql" di Model JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) oleh @gchust
- **[Komponen bidang: mask]** Memperbaiki masalah di mana popup pengaturan bidang mask tidak dapat memuat semua peran pengguna dengan benar. oleh @gchust
- **[Alur Kerja: Persetujuan]** Memperbaiki id yang salah untuk memuat catatan detail oleh @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/en/blog/v2.0.0-beta.21)

*Tanggal rilis: 2026-02-07*

### 🎉 Fitur Baru

- **[klien]** mendukung konfigurasi bidang dari bidang koleksi asosiasi di blok formulir ([#8578](https://github.com/nocobase/nocobase/pull/8578)) oleh @katherinehhh
- **[Aksi: Duplikat catatan]** menambahkan aksi duplikat 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) oleh @katherinehhh
- **[Alur Kerja]** Mendukung untuk menyalin, menempel, dan memindahkan node dengan seret dan lepas di kanvas alur kerja ([#8559](https://github.com/nocobase/nocobase/pull/8559)) oleh @mytharcher

### 🚀 Peningkatan

- **[mesin-alur]** Meningkatkan pelengkapan otomatis dan petunjuk kode di editor kode model JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) oleh @gchust
- **[Alur Kerja: Persetujuan]** Menghapus dukungan untuk bidang JS oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki potensi kesalahan render "baca tersembunyi" dalam mode non-konfigurasi. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) oleh @gchust
  - memperbaiki sub-tabel (edit inline) masih menampilkan kolom mode edit setelah beralih ke tampilan hanya-baca dalam formulir edit ([#8589](https://github.com/nocobase/nocobase/pull/8589)) oleh @katherinehhh
- **[Mesin Alur]** Memperbaiki masalah di mana menggunakan template blok dalam mode "Duplikat" menyebabkan popup kosong jika mengklik tombol aksi tertentu dari blok. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) oleh @gchust
- **[Blok: Peta]** Memperbaiki opsi konfigurasi 'Simpan sebagai template' duplikat di blok peta ([#8584](https://github.com/nocobase/nocobase/pull/8584)) oleh @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/en/blog/v2.0.0-beta.20)

*Tanggal rilis: 2026-02-05*

### 🎉 Fitur Baru

- **[klien]** Mendukung konfigurasi mode pemuatan data ([#8551](https://github.com/nocobase/nocobase/pull/8551)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[mesin-alur]** memperbaiki aksi hapus kolom tidak berfungsi di edit sub-tabel popup ketika createModelOptions dikonfigurasi ([#8576](https://github.com/nocobase/nocobase/pull/8576)) oleh @katherinehhh
- **[Manajer Email]**

  - menambahkan filter ke manajemen oleh @jiannx
  - Memperbaiki masalah email di kotak surat yang sama antara beberapa pengguna dan mengoptimalkan kinerja oleh @jiannx
  - memperbaiki rantai percakapan oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/en/blog/v2.0.0-alpha.71)

*Tanggal rilis: 2026-02-10*

### 🎉 Fitur Baru

- **[klien]**

  - Mendukung konfigurasi judul tab browser untuk halaman, tab halaman, popup, dan tab popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) oleh @zhangzhonghe
  - mendukung konfigurasi bidang dari bidang koleksi asosiasi di blok formulir ([#8578](https://github.com/nocobase/nocobase/pull/8578)) oleh @katherinehhh
- **[Blok: GridCard]** mendukung tinggi blok yang dapat dikonfigurasi ([#8583](https://github.com/nocobase/nocobase/pull/8583)) oleh @katherinehhh
- **[Aksi: Duplikat catatan]** menambahkan aksi duplikat 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Menambahkan kontrol ACL untuk API persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[klien]** Menggunakan model bidang independen untuk bidang asosiasi dalam formulir filter ([#8511](https://github.com/nocobase/nocobase/pull/8511)) oleh @zhangzhonghe
- **[Alur Kerja: CC]** Memfaktorkan ulang plugin CC alur kerja untuk mendukung arsitektur FlowModel dengan kompatibilitas v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[mesin-alur]**

  - Memperbaiki konteks eksekusi yang salah untuk "ctx.sql" di Model JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) oleh @gchust
  - Memperbaiki masalah di mana objek Blob tidak dapat dibuat di blok JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) oleh @gchust
- **[klien]**

  - Memperbaiki masalah di mana kolom tabel tidak di-render ulang setelah mengklik Jalankan di editor kolom JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) oleh @gchust
  - Memperbaiki potensi kesalahan render "baca tersembunyi" dalam mode non-konfigurasi. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) oleh @gchust
  - memperbaiki sub-tabel (edit inline) masih menampilkan kolom mode edit setelah beralih ke tampilan hanya-baca dalam formulir edit ([#8589](https://github.com/nocobase/nocobase/pull/8589)) oleh @katherinehhh
- **[Mesin Alur]** Memperbaiki masalah di mana menggunakan template blok dalam mode "Duplikat" menyebabkan popup kosong jika mengklik tombol aksi tertentu dari blok. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) oleh @gchust
- **[Komponen bidang: mask]** Memperbaiki masalah di mana popup pengaturan bidang mask tidak dapat memuat semua peran pengguna dengan benar. oleh @gchust
- **[Alur Kerja: Persetujuan]** Memperbaiki id yang salah untuk memuat catatan detail oleh @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/en/blog/v2.0.0-alpha.70)

*Tanggal rilis: 2026-02-06*

### 🎉 Fitur Baru

- **[Alur Kerja]** Mendukung untuk menyalin, menempel, dan memindahkan node dengan seret dan lepas di kanvas alur kerja ([#8559](https://github.com/nocobase/nocobase/pull/8559)) oleh @mytharcher

### 🚀 Peningkatan

- **[Alur Kerja: Persetujuan]** Menghapus dukungan untuk bidang JS oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[Blok: Peta]** Memperbaiki opsi konfigurasi 'Simpan sebagai template' duplikat di blok peta ([#8584](https://github.com/nocobase/nocobase/pull/8584)) oleh @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/en/blog/v2.0.0-alpha.69)

*Tanggal rilis: 2026-02-05*

### 🎉 Fitur Baru

- **[klien]** Mendukung konfigurasi mode pemuatan data ([#8551](https://github.com/nocobase/nocobase/pull/8551)) oleh @zhangzhonghe
- **[mesin-alur]** mendukung env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) oleh @chenos
- **[Auth: DingTalk]** Memungkinkan untuk mengikat pengguna dengan `unionId` oleh @2013xile

### 🚀 Peningkatan

- **[mesin-alur]** Meningkatkan pelengkapan otomatis dan petunjuk kode di editor kode model JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) oleh @gchust
- **[klien]**

  - menyesuaikan pengaturan lebar kolom ke pemilihan dropdown di sub-tabel yang dapat diedit inline ([#8561](https://github.com/nocobase/nocobase/pull/8561)) oleh @katherinehhh
  - Mendukung menonaktifkan params appends default yang berlebihan untuk `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) oleh @2013xile
- **[acl]** acl menambahkan metode generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) oleh @jiannx
- **[Bidang koleksi: Markdown(Vditor)]** Menambahkan opsi konfigurasi untuk mengatur mode edit default di pengaturan komponen. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) oleh @Cyx649312038
- **[Alur Kerja]** Mengubah jalur rute sub-halaman alur kerja, untuk membuat semua halaman alur kerja di bawah awalan `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) oleh @mytharcher
- **[AI: Basis Pengetahuan]** Mengoptimalkan output build untuk mengurangi ukuran paket plugin-ai-knowledge-base. oleh @cgyrock
- **[Multi-ruang]** kontrol izin multi-ruang mengakses acl oleh @jiannx
- **[Auth: DingTalk]** Menggunakan `userid` sebagai kunci default untuk asosiasi pengguna, sambil mempertahankan kompatibilitas dengan authenticator yang ada yang bergantung pada ponsel oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki refresh halaman diperlukan untuk menambahkan catatan anak setelah mengaktifkan tabel pohon ([#8574](https://github.com/nocobase/nocobase/pull/8574)) oleh @katherinehhh
  - Memperbaiki masalah ruang kosong di tata letak Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) oleh @zhangzhonghe
  - Memperbaiki lebar kolom tidak diperbarui di sub-tabel (edit inline); input teks multi-baris tidak mengubah ukuran dengan lebar kolom ([#8573](https://github.com/nocobase/nocobase/pull/8573)) oleh @katherinehhh
  - Memperbaiki masalah di mana menggunakan "Buat Cepat" pemilih catatan asosiasi dalam formulir edit menimpa data formulir yang ada. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) oleh @gchust
  - perbaikan: sembunyikan "Aktifkan tabel pohon" dan "Perluas semua baris secara default" untuk koleksi non-pohon ([#8566](https://github.com/nocobase/nocobase/pull/8566)) oleh @katherinehhh
  - Memperbaiki masalah di mana menu "Formulir (Tambah baru)" salah ditampilkan di popup aksi "Buat baru". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) oleh @gchust
  - memperbaiki bidang nanoid tidak menghasilkan ulang nilai default setelah pengiriman pembuatan ([#8538](https://github.com/nocobase/nocobase/pull/8538)) oleh @katherinehhh
  - Memperbaiki masalah di mana alur peristiwa gagal diterapkan saat menyegarkan blok target di seluruh popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) oleh @gchust
  - Memperbaiki masalah yang diketahui terkait pemfilteran ([#8514](https://github.com/nocobase/nocobase/pull/8514)) oleh @zhangzhonghe
  - Memperbaiki masalah yang menyebabkan blok data menyegarkan berulang kali setelah mengirimkan formulir. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) oleh @gchust
  - Memperbaiki masalah di mana data halaman disegarkan secara tidak benar setelah membuka dan menutup popup untuk pertama kalinya. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) oleh @gchust
  - Memperbaiki masalah yang mencegah penggunaan variabel formulir untuk menetapkan nilai dalam aturan tautan untuk bidang subformulir multi-level ke-banyak. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) oleh @gchust
  - memperbaiki tampilan yang salah saat mengatur nilai default untuk model bidang kaskade ([#8537](https://github.com/nocobase/nocobase/pull/8537)) oleh @katherinehhh
  - Memperbaiki masalah di mana data tidak disegarkan setelah perubahan di seluruh popup multi-level dan di seluruh blok. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) oleh @gchust
- **[mesin-alur]**

  - memperbaiki aksi hapus kolom tidak berfungsi di edit sub-tabel popup ketika createModelOptions dikonfigurasi ([#8576](https://github.com/nocobase/nocobase/pull/8576)) oleh @katherinehhh
  - Memperbaiki masalah di mana mengirimkan formulir setelah mengganti halaman tidak menyegarkan halaman. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) oleh @gchust
  - Memperbaiki masalah di mana beberapa pustaka pihak ketiga tidak dapat diimpor dengan benar di blok JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) oleh @gchust
  - Memperbaiki pemuatan yang salah dari beberapa pustaka ESM di runjs karena salah klasifikasi sebagai modul AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) oleh @gchust
  - memperbaiki masalah FilterByTK ketika filterTargetKey adalah array elemen tunggal di sumber data eksternal ([#8522](https://github.com/nocobase/nocobase/pull/8522)) oleh @katherinehhh
  - memperbaiki aksi hapus kolom tidak berfungsi di edit sub-tabel popup ketika createModelOptions dikonfigurasi ([#8560](https://github.com/nocobase/nocobase/pull/8560)) oleh @katherinehhh
- **[Bidang koleksi: Lampiran(URL)]** Memperbaiki konfigurasi tampilan nama file bidang lampiran URL tidak berfungsi di formulir edit ([#8571](https://github.com/nocobase/nocobase/pull/8571)) oleh @katherinehhh
- **[Karyawan AI]**

  - Memperbaiki masalah di mana node LLM gagal mengirim pesan ([#8569](https://github.com/nocobase/nocobase/pull/8569)) oleh @2013xile
  - Memperbaiki masalah di mana sistem tidak dapat dimulai setelah build ([#8523](https://github.com/nocobase/nocobase/pull/8523)) oleh @cgyrock
  - Memperbaiki pengecualian yang terjadi ketika alat dipanggil secara otomatis selama pemodelan data ai ([#8532](https://github.com/nocobase/nocobase/pull/8532)) oleh @cgyrock
- **[Template UI]** Memperbaiki kesalahan saat membuka kembali dan mengirimkan template popup yang disimpan untuk formulir "Tambah baru" bidang asosiasi. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) oleh @gchust
- **[Aksi: Impor catatan]** Memperbaiki kerentanan aksi impor ([#8544](https://github.com/nocobase/nocobase/pull/8544)) oleh @mytharcher
- **[Manajer file]** Mengamankan jalur file untuk penyimpanan lokal, untuk menghindari jalur akses di luar root dokumen ([#8539](https://github.com/nocobase/nocobase/pull/8539)) oleh @mytharcher
- **[Alur Kerja]** Menambahkan toleransi kesalahan untuk komponen pilih catatan koleksi, untuk menghindari kesalahan yang muncul ketika koleksi dihapus ([#8528](https://github.com/nocobase/nocobase/pull/8528)) oleh @mytharcher
- **[Alur Kerja: Peristiwa aksi kustom]** Memperbaiki masalah di mana parameter dan payload salah saat memicu alur kerja kustom oleh @mytharcher
- **[Multi-ruang]**

  - menghapus atribut read-pretty untuk bidang ruang oleh @jiannx
  - menambahkan skrip migrasi untuk menghapus x-ready-pretty di bidang ruang oleh @jiannx
- **[AI: Basis Pengetahuan]** Memperbaiki masalah di mana sistem tidak dapat dimulai setelah build oleh @cgyrock
- **[Aksi: Impor catatan Pro]** Memperbaiki angka hitungan dalam hasil impor dan terjemahan pesan oleh @mytharcher
- **[Alur Kerja: Subalur]** Memperbaiki jalur rute tautan alur kerja oleh @mytharcher
- **[Cetak template]** memperbaiki masalah tampilan daftar bidang dalam konfigurasi aksi cetak template oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON dalam pemuatan daftar (MySQL) oleh @mytharcher
  - Menambahkan toleransi kesalahan pada alur kerja yang dihapus, untuk menghindari kesalahan pemuatan dalam daftar tugas oleh @mytharcher
  - Memperbaiki kesalahan yang muncul saat menambahkan peran ke pengguna jika alur kerja audiens dinonaktifkan oleh @mytharcher
- **[Manajer Email]** body tidak menutup saat teks dipilih. memperbaiki unduh lampiran gagal oleh @jiannx
- **[WeCom]** Memperbaiki masalah di mana pengguna tidak dapat didaftarkan secara otomatis ketika ponsel hilang oleh @2013xile
