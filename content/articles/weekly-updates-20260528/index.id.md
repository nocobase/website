---
title: "Pembaruan Mingguan｜Plugin Manajer Cadangan Sumber Terbuka"
description: "Ini adalah ringkasan pembaruan fitur dan perbaikan NocoBase dari 22 Mei hingga 28 Mei 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/en/blog/v2.0.58)

*Tanggal rilis: 28-05-2026*

### 🎉 Fitur Baru

* **[Workflow]** Menambahkan API administrator untuk menjalankan ulang eksekusi workflow yang telah dimulai dari node kepala atau node yang ditentukan. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) oleh @mytharcher

### 🚀 Peningkatan

* **[client]** Menghapus opsi Tersembunyi dari pengaturan item menu. ([#9595](https://github.com/nocobase/nocobase/pull/9595)) oleh @zhangzhonghe

### 🐛 Perbaikan Bug

* **[client]**
  * Memperbaiki masalah di mana popup pemilih tanggal seluler v2 menggunakan waktu saat ini alih-alih nilai formulir. ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh
  * Memperbaiki masalah di mana pengaturan format bidang waktu tidak berlaku di v2. ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh
  * Meningkatkan batas unggah file untuk komponen input pindai v1 menjadi 10 MB. ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
  * Memperbaiki masalah di mana status tersembunyi dari tautan subformulir tidak disinkronkan. ([#9594](https://github.com/nocobase/nocobase/pull/9594)) oleh @katherinehhh
  * Memperbaiki masalah di mana sub-tabel dalam subformulir tidak dapat menambahkan baris kedua. ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh
  * Memperbaiki masalah di mana tab halaman menghilang setelah mengganti menu. ([#9583](https://github.com/nocobase/nocobase/pull/9583)) oleh @zhangzhonghe
* **[flow-engine]** Memperbaiki masalah di mana aturan tautan aksi tabel dieksekusi secara tidak benar setelah formulir berhasil dikirim di popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) oleh @gchust
* **[Workflow: Custom action event]** Memperbaiki masalah di mana tombol aksi kustom tabel dengan konteks multi-rekam secara tidak benar mengizinkan workflow konteks kustom untuk dipilih. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) oleh @mytharcher
* **[File manager]**
  * Memperbaiki normalisasi nama file Unicode selama unggahan file untuk menghindari pembuatan kunci objek dengan karakter kontrol. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) oleh @mytharcher
  * Meningkatkan pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
    Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/en/blog/v2.0.57)

*Tanggal rilis: 26-05-2026*

### 🐛 Perbaikan Bug

* **[build]** Memperbaiki output pengaburan server plugin untuk menghindari global browser di bundel runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) oleh @Molunerfinn
* **[Workflow: Manual node]** Memperbaiki masalah di mana penyimpanan sementara untuk tugas workflow manual tidak mempertahankan nilai formulir yang dikirimkan. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) oleh @mytharcher
* **[AI employees]** Memperbaiki deskripsi nama alat yang salah di prompt konteks kerja. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) oleh @cgyrock
* **[File manager]** Merender pratinjau PDF dengan aman menggunakan PDF.js alih-alih rendering PDF mentah berbasis iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) oleh @mytharcher
* **[Auth: OIDC]** Memperbaiki kebocoran token ketika panggilan balik login SSO menerima URL pengalihan eksternal. oleh @2013xile
* **[Workflow: Approval]**
  * Memperbaiki masalah di mana API `<span>jobs:resume</span>` tidak didukung oleh node persetujuan. oleh @mytharcher
  * Memperbaiki penarikan persetujuan untuk memperbarui data bisnis yang dikirimkan sambil menghormati izin pembaruan koleksi sumber. oleh @mytharcher
  * Memperbaiki todo persetujuan basi ketika workflow persetujuan dihentikan oleh kegagalan node non-persetujuan. oleh @mytharcher

### [v2.0.56](https://www.nocobase.com/en/blog/v2.0.56)

*Tanggal rilis: 22-05-2026*

### 🎉 Fitur Baru

* **[Backup manager]** Membuka sumber plugin Backup manager. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) oleh @chenos

### 🚀 Peningkatan

* **[client]** Mengoptimalkan pengaturan tampilan tombol aksi. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) oleh @katherinehhh
* **[flow-engine]** Menambahkan dukungan pencarian ke menu konfigurasi bidang v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) oleh @zhangzhonghe
* **[Security]** Menambahkan tinjauan keamanan dependensi untuk pull request. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) oleh @zhangzhonghe
* **[Notification manager]** Mengubah strategi antrian untuk mengoptimalkan kinerja pengiriman. ([#9407](https://github.com/nocobase/nocobase/pull/9407)) oleh @mytharcher
* **[AI: Knowledge base]** Mengaktifkan modifikasi penyimpanan vektor untuk basis pengetahuan AI. oleh @cgyrock
* **[Workflow: Approval]** Meningkatkan persetujuan terkait dengan kartu linimasa. oleh @zhangzhonghe

### 🐛 Perbaikan Bug

* **[client]**
  * Memperbaiki masalah di mana nilai yang dipilih dibersihkan ketika bidang asosiasi dependen berubah dalam tautan lingkup data. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) oleh @katherinehhh
  * Memperbaiki masalah di mana lencana menu masih menampilkan titik ketika nilainya 0. ([#9491](https://github.com/nocobase/nocobase/pull/9491)) oleh @zhangzhonghe
  * Memperbaiki masalah di mana formulir filter tidak dapat menggunakan variabel formulir saat ini. ([#9474](https://github.com/nocobase/nocobase/pull/9474)) oleh @zhangzhonghe
  * Memperbaiki masalah di mana blok v2 yang dipersempit menjadi lebar penuh setelah meninggalkan mode edit. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) oleh @zhangzhonghe
  * Memperbaiki status menu JS Field yang salah di subformulir. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) oleh @gchust
* **[flow-engine]** Memperbaiki masalah pemilihan ganda untuk bidang sumber data eksternal di formulir v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) oleh @katherinehhh
* **[AI employees]** Memperbaiki kesalahan yang terjadi ketika karyawan AI mengakses basis pengetahuan hanya-baca. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) oleh @cgyrock
* **[Calendar]** Memperbaiki masalah di mana lebih banyak item di kalender tidak dapat ditampilkan sepenuhnya. ([#9492](https://github.com/nocobase/nocobase/pull/9492)) oleh @zhangzhonghe
* **[Action: Batch update]** Memperbaiki masalah di mana aksi pembaruan massal mengatur ulang status pemuatan setelah kegagalan pembaruan. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) oleh @katherinehhh
* **[API documentation]** Memperbaiki dokumentasi API koleksi sehingga parameter kueri tidak lagi saling mengganggu. ([#9442](https://github.com/nocobase/nocobase/pull/9442)) oleh @jiannx
* **[Workflow]** Menambahkan status pemuatan untuk eksekusi workflow manual. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) oleh @mytharcher
* **[Migration manager]** Memperbaiki kegagalan pembuatan file migrasi saat menggunakan OceanBase. oleh @2013xile
* **[File storage: S3(Pro)]** Memperbaiki penanganan endpoint S3 Pro sehingga unggahan server dan pratinjau URL tidak menduplikasi host bucket. oleh @mytharcher
* **[Workflow: Approval]** Memperbaiki indeks catatan persetujuan duplikat ketika delegasi terjadi secara bersamaan pada pekerjaan persetujuan yang sama. oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)


### [v2.1.0-beta.37](https://www.nocobase.com/en/blog/v2.1.0-beta.37)

*Tanggal rilis: 26-05-2026*

### 🎉 Fitur Baru

* **[client-v2]** Menambahkan menu Keamanan dan halaman pengaturan Kebijakan Token ke admin v2. Pusat pengguna sekarang mendukung Ubah kata sandi. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) oleh @Molunerfinn
* **[cli]** Menambahkan dukungan untuk autentikasi dasar. ([#9558](https://github.com/nocobase/nocobase/pull/9558)) oleh @chenos
* **[Password policy]** Memigrasikan plugin Password policy ke shell admin client-v2, termasuk halaman pengaturan Password policy dan Locked users, dan menambahkan penegakan aturan sisi klien pada formulir Ubah kata sandi di pusat pengguna. oleh @Molunerfinn

### 🚀 Peningkatan

* **[Data visualization]** Menambahkan dukungan client-v2 untuk blok grafik. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) oleh @jiannx
* **[Workflow]** Merefaktor pemeriksaan ketersediaan async-node workflow. ([#9532](https://github.com/nocobase/nocobase/pull/9532)) oleh @mytharcher

### 🐛 Perbaikan Bug

* **[build]**
  * Aset teks di build server sekarang disalin sebagai file alih-alih diubah menjadi modul JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) oleh @Molunerfinn
  * Memperbaiki output pengaburan server plugin untuk menghindari global browser di bundel runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) oleh @Molunerfinn
* **[client-v2]** Memperbaiki metadata bahasa browser sehingga halaman aplikasi mengikuti bahasa aplikasi yang dipilih alih-alih ditandai sebagai bahasa Inggris. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) oleh @Molunerfinn
* **[File manager]** Merender pratinjau PDF dengan aman menggunakan PDF.js alih-alih rendering PDF mentah berbasis iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) oleh @mytharcher
* **[AI employees]** Memperbaiki deskripsi nama alat yang salah di prompt konteks kerja. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) oleh @cgyrock
* **[Workflow: Manual node]** Memperbaiki masalah di mana penyimpanan sementara untuk tugas workflow manual tidak mempertahankan nilai formulir yang dikirimkan. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) oleh @mytharcher
* **[Auth: OIDC]** Memperbaiki kebocoran token ketika panggilan balik login SSO menerima URL pengalihan eksternal. oleh @2013xile
* **[Workflow: Approval]**
  * Memperbaiki penarikan persetujuan untuk memperbarui data bisnis yang dikirimkan sambil menghormati izin pembaruan koleksi sumber. oleh @mytharcher
  * Memperbaiki masalah di mana API `<span>jobs:resume</span>` tidak didukung oleh node persetujuan. oleh @mytharcher
  * Memperbaiki indeks catatan persetujuan duplikat ketika delegasi terjadi secara bersamaan pada pekerjaan persetujuan yang sama. oleh @mytharcher
  * Memperbaiki todo persetujuan basi ketika workflow persetujuan dihentikan oleh kegagalan node non-persetujuan. oleh @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/en/blog/v2.1.0-beta.36)

*Tanggal rilis: 22-05-2026*

### 🎉 Fitur Baru

* **[cli]** Menambahkan perintah pembuatan dan pemulihan cadangan. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) oleh @chenos
* **[Backup manager]** Membuka sumber plugin Backup manager. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) oleh @chenos
* **[Theme editor]** Menambahkan dukungan Theme editor ke antarmuka v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) oleh @zhangzhonghe
* **[Two-factor authentication (2FA)]** Menambahkan dukungan untuk pengikatan, verifikasi, dan konfigurasi TOTP dan autentikasi dua faktor dari klien v2. oleh @Molunerfinn

### 🚀 Peningkatan

* **[client]** Mengoptimalkan pengaturan tampilan tombol aksi. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) oleh @katherinehhh
* **[flow-engine]** Menambahkan dukungan pencarian ke menu konfigurasi bidang v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) oleh @zhangzhonghe
* **[cli]** Meningkatkan alur autentikasi lingkungan. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) oleh @chenos
* **[Security]** Menambahkan tinjauan keamanan dependensi untuk pull request. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) oleh @zhangzhonghe
* **[Verification]** Menambahkan dukungan klien v2 ke plugin Verification, termasuk halaman pengaturan admin, entri pusat pengguna, dan formulir SMS OTP. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) oleh @Molunerfinn
* **[Authentication]** Memperbaiki pengaturan merek kustom di klien v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) oleh @zhangzhonghe
* **[Block: Map]** Menambahkan dukungan klien v2 untuk plugin peta. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) oleh @jiannx
* **[Custom brand]** Menambahkan dukungan pengaturan merek kustom ke klien v2. oleh @zhangzhonghe
* **[AI: Knowledge base]** Mengaktifkan modifikasi penyimpanan vektor untuk basis pengetahuan AI. oleh @cgyrock
* **[Workflow: Approval]** Menambahkan bendera `<span>async</span>` untuk instruksi persetujuan guna mendukung API pembuatan node baru di kanvas workflow. oleh @mytharcher

### 🐛 Perbaikan Bug

* **[client]**
  * Memperbaiki masalah di mana nilai yang dipilih dibersihkan ketika bidang asosiasi dependen berubah dalam tautan lingkup data. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) oleh @katherinehhh
  * Memperbaiki pemuatan mode dev untuk plugin penyimpanan bawaan yang bergantung pada ekspor bernama dari plugin sumber lokal. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) oleh @Molunerfinn
  * Memperbaiki status menu JS Field yang salah di subformulir. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) oleh @gchust
  * Memperbaiki masalah di mana blok v2 yang dipersempit menjadi lebar penuh setelah meninggalkan mode edit. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) oleh @zhangzhonghe
* **[client-v2]** Memperbaiki pendaftaran dependensi dnd-kit yang tidak konsisten. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) oleh @jiannx
* **[flow-engine]** Memperbaiki masalah pemilihan ganda untuk bidang sumber data eksternal di formulir v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) oleh @katherinehhh
* **[Block: iframe]** Memperbaiki masalah di mana konten iframe tidak mengisi tinggi blok yang dikonfigurasi. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) oleh @katherinehhh
* **[AI employees]**
  * Memperbaiki kesalahan yang terjadi ketika karyawan AI mengakses basis pengetahuan hanya-baca. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) oleh @cgyrock
  * Memperbaiki masalah di mana kartu panggilan alat AI tidak muncul segera ketika acara alat yang dialirkan terpecah. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) oleh @2013xile
  * Memperbaiki kesalahan yang terjadi ketika karyawan AI mengakses basis pengetahuan hanya-baca. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) oleh @cgyrock
* **[Action: Export records]** Meningkatkan kinerja konfigurasi bidang ketika ada banyak bidang asosiasi. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) oleh @katherinehhh
* **[Action: Batch update]** Memperbaiki masalah di mana aksi pembaruan massal mengatur ulang status pemuatan setelah kegagalan pembaruan. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) oleh @katherinehhh
* **[Workflow]** Menambahkan status pemuatan untuk eksekusi workflow manual. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) oleh @mytharcher
* **[Localization]** Memperbaiki terjemahan referensi lokalisasi bawaan untuk tugas terjemahan AI. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) oleh @2013xile
* **[Migration manager]** Memperbaiki kegagalan pembuatan file migrasi saat menggunakan OceanBase. oleh @2013xile
* **[File storage: S3(Pro)]** Memperbaiki penanganan endpoint S3 Pro sehingga unggahan server dan pratinjau URL tidak menduplikasi host bucket. oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/en/blog/v2.1.0-alpha.40)

*Tanggal rilis: 22-05-2026*

### 🎉 Fitur Baru

* **[cli]** Menambahkan perintah pembuatan dan pemulihan cadangan. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) oleh @chenos
* **[Backup manager]** Membuka sumber plugin Backup manager. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) oleh @chenos
* **[Theme editor]** Menambahkan dukungan Theme editor ke antarmuka v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) oleh @zhangzhonghe
* **[Two-factor authentication (2FA)]** Menambahkan dukungan untuk pengikatan, verifikasi, dan konfigurasi TOTP dan autentikasi dua faktor dari klien v2. oleh @Molunerfinn

### 🚀 Peningkatan

* **[cli]** Meningkatkan alur autentikasi lingkungan. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) oleh @chenos
* **[flow-engine]** Menambahkan dukungan pencarian ke menu konfigurasi bidang v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) oleh @zhangzhonghe
* **[client]** Mengoptimalkan pengaturan tampilan tombol aksi. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) oleh @katherinehhh
* **[Security]** Menambahkan tinjauan keamanan dependensi untuk pull request. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) oleh @zhangzhonghe
* **[Verification]** Menambahkan dukungan klien v2 ke plugin Verification, termasuk halaman pengaturan admin, entri pusat pengguna, dan formulir SMS OTP. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) oleh @Molunerfinn
* **[Authentication]** Memperbaiki pengaturan merek kustom di klien v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) oleh @zhangzhonghe
* **[Block: Map]** Menambahkan dukungan klien v2 untuk plugin peta. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) oleh @jiannx
* **[Custom brand]** Menambahkan dukungan pengaturan merek kustom ke klien v2. oleh @zhangzhonghe
* **[AI: Knowledge base]** Mengaktifkan modifikasi penyimpanan vektor untuk basis pengetahuan AI. oleh @cgyrock
* **[Workflow: Approval]** Menambahkan bendera `<span>async</span>` untuk instruksi persetujuan guna mendukung API pembuatan node baru di kanvas workflow. oleh @mytharcher

### 🐛 Perbaikan Bug

* **[client]**
  * Memperbaiki pemuatan mode dev untuk plugin penyimpanan bawaan yang bergantung pada ekspor bernama dari plugin sumber lokal. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) oleh @Molunerfinn
  * Memperbaiki masalah di mana blok v2 yang dipersempit menjadi lebar penuh setelah meninggalkan mode edit. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) oleh @zhangzhonghe
  * Memperbaiki masalah di mana nilai yang dipilih dibersihkan ketika bidang asosiasi dependen berubah dalam tautan lingkup data. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) oleh @katherinehhh
  * Memperbaiki status menu JS Field yang salah di subformulir. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) oleh @gchust
* **[client-v2]** Memperbaiki pendaftaran dependensi dnd-kit yang tidak konsisten. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) oleh @jiannx
* **[flow-engine]** Memperbaiki masalah pemilihan ganda untuk bidang sumber data eksternal di formulir v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) oleh @katherinehhh
* **[Block: iframe]** Memperbaiki masalah di mana konten iframe tidak mengisi tinggi blok yang dikonfigurasi. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) oleh @katherinehhh
* **[Action: Export records]** Meningkatkan kinerja konfigurasi bidang ketika ada banyak bidang asosiasi. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) oleh @katherinehhh
* **[AI employees]**
  * Memperbaiki kesalahan yang terjadi ketika karyawan AI mengakses basis pengetahuan hanya-baca. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) oleh @cgyrock
  * Memperbaiki kesalahan yang terjadi ketika karyawan AI mengakses basis pengetahuan hanya-baca. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) oleh @cgyrock
  * Memperbaiki masalah di mana kartu panggilan alat AI tidak muncul segera ketika acara alat yang dialirkan terpecah. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) oleh @2013xile
* **[Localization]** Memperbaiki terjemahan referensi lokalisasi bawaan untuk tugas terjemahan AI. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) oleh @2013xile
* **[Action: Batch update]** Memperbaiki masalah di mana aksi pembaruan massal mengatur ulang status pemuatan setelah kegagalan pembaruan. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) oleh @katherinehhh
* **[Workflow]** Menambahkan status pemuatan untuk eksekusi workflow manual. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) oleh @mytharcher
* **[Migration manager]** Memperbaiki kegagalan pembuatan file migrasi saat menggunakan OceanBase. oleh @2013xile
* **[File storage: S3(Pro)]** Memperbaiki penanganan endpoint S3 Pro sehingga unggahan server dan pratinjau URL tidak menduplikasi host bucket. oleh @mytharcher
* **[Workflow: Approval]** Memperbaiki indeks catatan persetujuan duplikat ketika delegasi terjadi secara bersamaan pada pekerjaan persetujuan yang sama. oleh @mytharcher
