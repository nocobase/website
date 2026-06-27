---
title: "Pembaruan Mingguan｜Plugin komersial sumber terbuka dan pembaruan lisensi dari AGPL-3.0 ke Apache-2.0"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 13 Februari hingga 26 Februari 2026."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.5](https://www.nocobase.com/en/blog/v2.0.5)

*Tanggal rilis: 26-02-2026*

### 🐛 Perbaikan Bug

- **[klien]** Di perangkat seluler, tutup menu terlebih dahulu lalu lakukan lompatan halaman ([#8699](https://github.com/nocobase/nocobase/pull/8699)) oleh @zhangzhonghe
- **[AI LLM: GigaChat]** Memperbaiki plugin GigaChat yang tidak berfungsi di versi 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) oleh @cgyrock
- **[Karyawan AI]**

  - Menyeragamkan input file untuk API chatGPT menggunakan ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) oleh @cgyrock
  - Memperbaiki kesalahan agen AI saat pengguna mengirim pesan baru tanpa mengonfirmasi eksekusi alat ([#8697](https://github.com/nocobase/nocobase/pull/8697)) oleh @cgyrock
- **[AI: Basis Pengetahuan]** Memperbaiki kesalahan startup plugin basis pengetahuan AI. oleh @cgyrock
- **[Manajer Email]** Kesalahan rendering gambar oleh @jiannx

### [v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

*Tanggal rilis: 25-02-2026*

### 🎉 Fitur Baru

- **[tidak ditentukan]**

  - Menambahkan plugin "Blok Referensi" eksperimental, yang memungkinkan penggunaan kembali blok yang ada dengan mereferensi atau menyalin. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) oleh @gchust
  - Draf formulir oleh @chenos
- **[acl]** Membuka sumber plugin komersial dan memperbarui lisensi dari AGPL-3.0 ke Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) oleh @chenos
- **[klien]**

  - Mendukung konfigurasi judul tab browser untuk halaman, tab halaman, popup, dan tab popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) oleh @zhangzhonghe
  - mendukung konfigurasi bidang dari bidang koleksi asosiasi di blok formulir ([#8578](https://github.com/nocobase/nocobase/pull/8578)) oleh @katherinehhh
  - Mendukung konfigurasi mode pemuatan data ([#8551](https://github.com/nocobase/nocobase/pull/8551)) oleh @zhangzhonghe
  - menambahkan komponen bidang sub-tabel (pengeditan popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) oleh @katherinehhh
  - Saat membuat koleksi, tipe bidang id preset dapat diubah ([#8129](https://github.com/nocobase/nocobase/pull/8129)) oleh @cgyrock
  - menambahkan dukungan untuk pengaturan tambah/pilih/pisahkan di subform to-many ([#8099](https://github.com/nocobase/nocobase/pull/8099)) oleh @katherinehhh
  - Mendukung kustomisasi gaya global di editor tema ([#7960](https://github.com/nocobase/nocobase/pull/7960)) oleh @ljmiaoo
  - mendukung pengaturan aturan pengurutan default di blok detail ([#8070](https://github.com/nocobase/nocobase/pull/8070)) oleh @katherinehhh
  - Mendukung pengaturan tipe data untuk bidang Angka (opsi: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) oleh @chenos
  - mendukung pengurutan bidang kolom di tabel ([#7900](https://github.com/nocobase/nocobase/pull/7900)) oleh @katherinehhh
  - menambahkan dukungan buat cepat ke pilihan bidang asosiasi ([#7887](https://github.com/nocobase/nocobase/pull/7887)) oleh @katherinehhh
  - mendukung pemilih kaskade untuk bidang asosiasi koleksi pohon ([#7846](https://github.com/nocobase/nocobase/pull/7846)) oleh @katherinehhh
  - Mendukung penyeretan untuk tindakan kolom tabel ([#7842](https://github.com/nocobase/nocobase/pull/7842)) oleh @zhangzhonghe
  - menambahkan dukungan paginasi ke sub-tabel ([#7754](https://github.com/nocobase/nocobase/pull/7754)) oleh @katherinehhh
  - Alur Peristiwa: Memperkenalkan tindakan yang telah ditentukan sebelumnya baru untuk meningkatkan opsi kustomisasi untuk penanganan peristiwa, memungkinkan pengguna untuk menyederhanakan alur kerja dan meningkatkan efisiensi ([#7672](https://github.com/nocobase/nocobase/pull/7672)) oleh @zhangzhonghe
  - Menambahkan blok markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) oleh @katherinehhh
  - Mendukung pengaturan aturan tautan untuk sub-formulir ([#7640](https://github.com/nocobase/nocobase/pull/7640)) oleh @zhangzhonghe
  - Menambahkan dukungan untuk pendengar peristiwa klik baris tabel, memungkinkan pengguna untuk menjalankan tindakan tertentu saat baris dalam tabel diklik ([#7622](https://github.com/nocobase/nocobase/pull/7622)) oleh @zhangzhonghe
  - Menambahkan dukungan untuk variabel kustom ([#7585](https://github.com/nocobase/nocobase/pull/7585)) oleh @zhangzhonghe
  - Menambahkan variabel "Tipe perangkat saat ini" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) oleh @zhangzhonghe
- **[flow-engine]** mendukung env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) oleh @chenos
- **[server]** Memfaktorkan ulang supervisor aplikasi untuk mendukung manajemen multi-aplikasi di berbagai skenario ([#8043](https://github.com/nocobase/nocobase/pull/8043)) oleh @2013xile
- **[test]** menambahkan kontrol konkurensi tingkat proses untuk manajer tugas dasar ([#8343](https://github.com/nocobase/nocobase/pull/8343)) oleh @cgyrock
- **[Aksi: Edit massal]** edit massal 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) oleh @jiannx
- **[Blok: GridCard]**

  - mendukung tinggi blok yang dapat dikonfigurasi ([#8583](https://github.com/nocobase/nocobase/pull/8583)) oleh @katherinehhh
  - Menambahkan blok kartu grid 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) oleh @katherinehhh
- **[Aksi: Duplikat rekaman]** menambahkan aksi duplikat 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) oleh @katherinehhh
-


Karena keterbatasan ruang, silakan merujuk ke tautan di bawah untuk catatan rilis lengkap.

[https://www.nocobase.com/en/blog/v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

### [v1.9.48](https://www.nocobase.com/en/blog/v1.9.48)

*Tanggal rilis: 24-02-2026*

### 🚀 Peningkatan

- **[Kontrol akses]** Menyediakan API sanitasi untuk memfilter nilai asosiasi dalam aksi ([#8601](https://github.com/nocobase/nocobase/pull/8601)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[Alur Kerja: Persetujuan]** Membersihkan nilai asosiasi dalam tindakan persetujuan, untuk menghindari manipulasi data di luar izin oleh @mytharcher

### [v2.0.2](https://www.nocobase.com/en/blog/v2.0.2])

*Tanggal rilis: 22-02-2026*

### 🐛 Perbaikan Bug

- **[Kalender]** Memperbaiki masalah lokalisasi kalender dan pemformatan tanggal ([#8498](https://github.com/nocobase/nocobase/pull/8498)) oleh @sembaev-a-a

### [v2.0.1](https://www.nocobase.com/en/blog/v2.0.1)

*Tanggal rilis: 16-02-2026*

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki OOM browser saat menggunakan karyawan AI ([#8653](https://github.com/nocobase/nocobase/pull/8653)) oleh @mytharcher

### [v1.9.47](https://www.nocobase.com/en/blog/v1.9.47)

*Tanggal rilis: 13-02-2026*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana bidang lampiran asosiasi yang dibersihkan tidak disimpan setelah dikirimkan dalam formulir edit ([#8616](https://github.com/nocobase/nocobase/pull/8616)) oleh @katherinehhh
- **[utils]** Memperbaiki masalah keamanan mesin evaluator `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana data persetujuan tidak ditampilkan di popup detail rekaman jika mode alur kerja diatur ke "Sebelum simpan" oleh @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.2](https://www.nocobase.com/en/blog/v2.1.0-beta.2)

*Tanggal rilis: 22-02-2026*

### 🐛 Perbaikan Bug

- **[Kalender]** Memperbaiki masalah lokalisasi kalender dan pemformatan tanggal ([#8498](https://github.com/nocobase/nocobase/pull/8498)) oleh @sembaev-a-a
- **[Karyawan AI]** Memperbaiki OOM browser saat menggunakan karyawan AI ([#8653](https://github.com/nocobase/nocobase/pull/8653)) oleh @mytharcher

### [v2.1.0-beta.1](https://www.nocobase.com/en/blog/v2.1.0-beta.1)

*Tanggal rilis: 14-02-2026*

### 🎉 Fitur Baru

- **[server]** Memfaktorkan ulang supervisor aplikasi untuk mendukung manajemen multi-aplikasi di berbagai skenario ([#8043](https://github.com/nocobase/nocobase/pull/8043)) oleh @2013xile

### 🚀 Peningkatan

- **[klien]**
  - Meningkatkan UI penugasan bidang tanggal/waktu untuk mendukung pemilihan tanggal/waktu relatif. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) oleh @gchust
  - Mendukung penentuan bidang judul untuk bidang asosiasi saat menetapkan bidang. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) oleh @gchust

### 🐛 Perbaikan Bug

- **[flow-engine]**

  - Memperbaiki masalah di mana submenu bidang filter tidak dapat diperluas saat kata kunci pencarian ada. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) oleh @gchust
  - memperbaiki aksi hapus kolom tidak berfungsi di edit sub-tabel popup saat createModelOptions dikonfigurasi ([#8560](https://github.com/nocobase/nocobase/pull/8560)) oleh @katherinehhh
- **[klien]**

  - Memperbaiki masalah di mana menetapkan satu rekaman ke bidang relasi many-to-many menghasilkan hasil yang salah. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) oleh @gchust
  - mengurai tanggal menggunakan pemilih tanggal dan menambahkan validasi kekuatan kata sandi, dll ([#8647](https://github.com/nocobase/nocobase/pull/8647)) oleh @jiannx
  - Memperbaiki masalah jarak yang disebabkan oleh tindakan tertaut yang tersembunyi di kolom aksi tabel ([#8646](https://github.com/nocobase/nocobase/pull/8646)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana `Action.Modal` tidak dapat ditutup setelah beberapa interaksi ([#8642](https://github.com/nocobase/nocobase/pull/8642)) oleh @mytharcher
  - memperbaiki kesalahan sintaksis saat item markdown merender Liquid yang tidak valid ([#8637](https://github.com/nocobase/nocobase/pull/8637)) oleh @katherinehhh
  - Memperbaiki permintaan parsing backend yang tidak perlu untuk properti bidang to-many di blok formulir. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) oleh @gchust
  - memperbaiki format angka yang hilang untuk bidang rumus angka dan pengaturan format tanggal untuk bidang rumus tanggal ([#8625](https://github.com/nocobase/nocobase/pull/8625)) oleh @katherinehhh
  - memperbaiki rendering batas atas yang tidak lengkap pada item formulir pertama ([#8623](https://github.com/nocobase/nocobase/pull/8623)) oleh @katherinehhh
  - perbaikan: sembunyikan "Aktifkan tabel pohon" dan "Perluas semua baris secara default" untuk koleksi non-pohon ([#8566](https://github.com/nocobase/nocobase/pull/8566)) oleh @katherinehhh
- **[utils]** Memperbaiki masalah keamanan mesin evaluator `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) oleh @mytharcher
- **[Karyawan AI]**

  - Memperbaiki masalah di mana tautan kutipan dari pencarian web AI tidak ditampilkan di kotak obrolan ([#8651](https://github.com/nocobase/nocobase/pull/8651)) oleh @cgyrock
  - memperbaiki kesalahan parameter API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) oleh @cgyrock
- **[Cetak template]** memperbaiki bidang dengan kunci yang sama menyebabkan kesalahan rendering oleh @jiannx
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana kesalahan muncul saat menyetujui rekaman yang dihapus oleh @mytharcher
  - Memperbaiki masalah di mana data persetujuan tidak ditampilkan di popup detail rekaman jika mode alur kerja diatur ke "Sebelum simpan" oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.6](https://www.nocobase.com/en/blog/v2.1.0-alpha.6)

*Tanggal rilis: 25-02-2026*

### 🎉 Fitur Baru

- **[acl]** Membuka sumber plugin komersial dan memperbarui lisensi dari AGPL-3.0 ke Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) oleh @chenos

### 🚀 Peningkatan

- **[tidak ditentukan]** Memperbarui dokumen karyawan AI ([#8690](https://github.com/nocobase/nocobase/pull/8690)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[klien]**

  - Menyeragamkan perilaku paginasi seluler untuk tabel dan kartu grid ([#8691](https://github.com/nocobase/nocobase/pull/8691)) oleh @zhangzhonghe
  - filter blok bagan tidak berfungsi ([#8671](https://github.com/nocobase/nocobase/pull/8671)) oleh @chenos
- **[Karyawan AI]** API aiTools:list mengembalikan 403 ([#8672](https://github.com/nocobase/nocobase/pull/8672)) oleh @chenos
- **[Lokalisasi]** meningkatkan penanganan kunci i18n yang hilang ([#8673](https://github.com/nocobase/nocobase/pull/8673)) oleh @chenos

### [v2.1.0-alpha.3](https://www.nocobase.com/en/blog/v2.1.0-alpha.3)

*Tanggal rilis: 16-02-2026*

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki OOM browser saat menggunakan karyawan AI ([#8653](https://github.com/nocobase/nocobase/pull/8653)) oleh @mytharcher

### [v2.1.0-alpha.2](https://www.nocobase.com/en/blog/v2.1.0-alpha.2)

*Tanggal rilis: 15-02-2026*

### 🎉 Fitur Baru

- **[Alur Kerja: Persetujuan]** Menambahkan kontrol ACL untuk API persetujuan oleh @mytharcher
- **[Auth: DingTalk]** Memungkinkan untuk mengikat pengguna dengan `unionId` oleh @2013xile

### 🚀 Peningkatan

- **[AI: Basis Pengetahuan]** Mengoptimalkan output build untuk mengurangi ukuran paket plugin-ai-knowledge-base. oleh @cgyrock
- **[Multi-ruang]** kontrol izin multi-ruang mengakses acl oleh @jiannx
- **[Aksi: Ekspor rekaman Pro]** Meningkatkan cakupan data aksi ekspor berdasarkan rekaman yang dipilih atau filter sumber daya oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Menghapus dukungan untuk bidang JS oleh @zhangzhonghe
  - Menyederhanakan parameter dalam kueri, dan meningkatkan kinerja oleh @mytharcher
  - Menerapkan kontrol akses untuk API untuk mencegah operasi data yang tidak sah oleh @mytharcher
  - Menambahkan logika perbaikan untuk audiens sinkron setelah migrasi oleh @mytharcher
- **[Auth: DingTalk]** Menggunakan `userid` sebagai kunci default untuk asosiasi pengguna, sambil mempertahankan kompatibilitas dengan otentikator yang ada yang bergantung pada ponsel oleh @2013xile

### 🐛 Perbaikan Bug

- **[Multi-ruang]**

  - menambahkan skrip migrasi untuk menghapus x-ready-pretty di bidang ruang oleh @jiannx
  - Ruang terkait saat menambahkan data terkait oleh @jiannx
  - Warna pemilih ruang mengikuti tema oleh @jiannx
  - menghapus atribut read-pretty untuk bidang ruang oleh @jiannx
- **[Komponen bidang: mask]** Memperbaiki masalah di mana popup pengaturan bidang mask tidak dapat memuat semua peran pengguna dengan benar. oleh @gchust
- **[Aksi: Impor rekaman Pro]**

  - Memperbaiki masalah di mana alur kerja dipicu oleh impor asinkron tertunda untuk dieksekusi oleh @mytharcher
  - Memperbaiki angka hitungan dalam hasil impor dan terjemahan pesan oleh @mytharcher
- **[AI: Basis Pengetahuan]** Memperbaiki masalah di mana sistem tidak dapat dimulai setelah pembangunan oleh @cgyrock
- **[Sumber data: REST API]** Menambahkan toleransi kesalahan untuk konteks permintaan, untuk menghindari kesalahan yang muncul saat metode tidak dalam konteks oleh @mytharcher
- **[Alur Kerja: Peristiwa aksi kustom]** Memperbaiki masalah di mana parameter dan payload salah saat memicu alur kerja kustom oleh @mytharcher
- **[Aksi: Ekspor rekaman Pro]** Memperbaiki kesalahan saat sub-aplikasi menjalankan tugas impor/ekspor asinkron sementara aplikasi utama tidak mengaktifkan plugin impor/ekspor pro oleh @cgyrock
- **[Alur Kerja: Webhook]**

  - Memperbaiki masalah di mana kesalahan 404 muncul saat posting ke URL webhook di sub-aplikasi oleh @mytharcher
  - Memperbaiki masalah di mana data body hilang saat parsing body tidak dikonfigurasi oleh @mytharcher
- **[Alur Kerja: Subalur]** Memperbaiki jalur rute tautan alur kerja oleh @mytharcher
- **[Cetak template]**

  - memperbaiki masalah tampilan daftar bidang dalam konfigurasi aksi cetak template oleh @katherinehhh
  - memperbaiki bidang dengan kunci yang sama menyebabkan kesalahan rendering oleh @jiannx
  - Memperbaiki masalah pop-up template konfigurasi yang terhalang oleh @zhangzhonghe
  - menghapus tombol footer dari konfigurasi template cetak oleh @katherinehhh
  - Memperbaiki logika izin tombol cetak yang salah saat peran digabungkan. oleh @jiannx
  - mendukung bidang ruang oleh @jiannx
  - menampilkan bidang ruang di versi 2.0 oleh @jiannx
- **[Penyimpanan file: S3(Pro)]** Memperbaiki masalah di mana mode penggantian nama file tidak berfungsi oleh @mytharcher
- **[Visualisasi data: ECharts]** Memperbaiki kesalahan ejaan ECharts oleh @heziqiang
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana kesalahan muncul saat menyetujui rekaman yang dihapus oleh @mytharcher
  - Memperbaiki kesalahan yang muncul saat menjalankan pada mode sebelum simpan oleh @mytharcher
  - Memperbaiki masalah di mana data persetujuan tidak ditampilkan di popup detail rekaman jika mode alur kerja diatur ke "Sebelum simpan" oleh @mytharcher
  - Menambahkan toleransi kesalahan pada alur kerja yang dihapus, untuk menghindari kesalahan pemuatan di daftar tugas oleh @mytharcher
  - Memperbaiki masalah di mana nilai hilang dari popup detail "Aplikasi saya" oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan muncul di popup rekaman persetujuan 1.x oleh @mytharcher
  - Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON dalam pemuatan daftar (MySQL) oleh @mytharcher
  - Memperbaiki id yang salah untuk memuat rekaman detail oleh @mytharcher
  - Memperbaiki masalah di mana konkurensi membuat eksekusi dilanjutkan berulang kali oleh @mytharcher
  - Memperbaiki kesalahan build yang disebabkan oleh dependensi yang terlewat oleh @mytharcher
  - Memperbaiki masalah di mana rekaman yang salah dimuat karena parameter yang salah oleh @mytharcher
  - Memperbaiki masalah di mana mengembalikan persetujuan ke node sebelumnya tetapi kembali ke awal oleh @mytharcher
  - Memperbaiki kesalahan yang muncul saat menambahkan peran ke pengguna jika alur kerja audiens dinonaktifkan oleh @mytharcher
  - Memperbaiki blok nilai tidak ditampilkan yang disebabkan oleh komponen `ValueBlock.Result` yang hilang oleh @mytharcher
  - Memperbaiki masalah di mana bidang tidak ditampilkan pada kartu tugas persetujuan oleh @zhangzhonghe
  - Memperbaiki masalah di mana bidang filter tidak berfungsi dengan benar di pusat tugas oleh @mytharcher
- **[Manajer Email]**

  - memperbaiki rantai percakapan oleh @jiannx
  - Memperbaiki tautan balasan Outlook yang kadang terputus oleh @jiannx
  - body tidak menciut saat teks dipilih. memperbaiki unduh lampiran gagal oleh @jiannx
  - Memperbaiki masalah email di kotak surat yang sama antara beberapa pengguna dan mengoptimalkan kinerja oleh @jiannx
  - menambahkan filter ke manajemen oleh @jiannx
  - menampilkan tombol balas semua dan cakupan data mendukung pemfilteran pesan anak. oleh @jiannx
  - Memperbaiki masalah di mana popup konfigurasi email terhalang oleh @zhangzhonghe
- **[WeCom]** Memperbaiki masalah di mana pengguna tidak dapat didaftarkan secara otomatis saat ponsel hilang oleh @2013xile
- **[Manajer migrasi]** Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock

### [v2.1.0-alpha.1](https://www.nocobase.com/en/blog/v2.1.0-alpha.1)

*Tanggal rilis: 14-02-2026*

### 🎉 Fitur Baru

- **[Aksi: Edit massal]** edit massal 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) oleh @jiannx

### 🚀 Peningkatan

- **[klien]**

  - Meningkatkan UI penugasan bidang tanggal/waktu untuk mendukung pemilihan tanggal/waktu relatif. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) oleh @gchust
  - Mendukung penentuan bidang judul untuk bidang asosiasi saat menetapkan bidang. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) oleh @gchust
  - Tabel 2.0 mendukung pengurutan seret dan lepas ([#8540](https://github.com/nocobase/nocobase/pull/8540)) oleh @jiannx
  - Memindahkan penugasan bidang dan pengaturan nilai default ke konfigurasi tingkat formulir. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) oleh @chenos
- **[Lokalisasi]** secara otomatis membuat kunci i18n yang hilang ([#8588](https://github.com/nocobase/nocobase/pull/8588)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki masalah di mana submenu bidang filter tidak dapat diperluas saat kata kunci pencarian ada. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) oleh @gchust
- **[klien]**

  - Memperbaiki masalah di mana menetapkan satu rekaman ke bidang relasi many-to-many menghasilkan hasil yang salah. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) oleh @gchust
  - mengurai tanggal menggunakan pemilih tanggal dan menambahkan validasi kekuatan kata sandi, dll ([#8647](https://github.com/nocobase/nocobase/pull/8647)) oleh @jiannx
  - Memperbaiki masalah jarak yang disebabkan oleh tindakan tertaut yang tersembunyi di kolom aksi tabel ([#8646](https://github.com/nocobase/nocobase/pull/8646)) oleh @zhangzhonghe
  - memperbaiki kesalahan sintaksis saat item markdown merender Liquid yang tidak valid ([#8637](https://github.com/nocobase/nocobase/pull/8637)) oleh @katherinehhh
  - Memperbaiki permintaan parsing backend yang tidak perlu untuk properti bidang to-many di blok formulir. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) oleh @gchust
  - Memperbaiki masalah di mana `Action.Modal` tidak dapat ditutup setelah beberapa interaksi ([#8642](https://github.com/nocobase/nocobase/pull/8642)) oleh @mytharcher
  - memperbaiki format angka yang hilang untuk bidang rumus angka dan pengaturan format tanggal untuk bidang rumus tanggal ([#8625](https://github.com/nocobase/nocobase/pull/8625)) oleh @katherinehhh
  - memperbaiki rendering batas atas yang tidak lengkap pada item formulir pertama ([#8623](https://github.com/nocobase/nocobase/pull/8623)) oleh @katherinehhh
  - Memperbaiki masalah di mana bidang lampiran asosiasi yang dibersihkan tidak disimpan setelah dikirimkan dalam formulir edit ([#8616](https://github.com/nocobase/nocobase/pull/8616)) oleh @katherinehhh
  - memperbaiki data yang difilter salah di dropdown asosiasi saat bidang judul adalah kunci asing ([#8619](https://github.com/nocobase/nocobase/pull/8619)) oleh @katherinehhh
  - memperbaiki tidak dapat mengembalikan data yang dipilih di komponen bidang pemilih rekaman setelah diedit ([#8610](https://github.com/nocobase/nocobase/pull/8610)) oleh @katherinehhh
  - Memperbaiki opsi komponen bidang tidak disegarkan secara real-time saat bidang asosiasi mengganti pola ([#8611](https://github.com/nocobase/nocobase/pull/8611)) oleh @katherinehhh
- **[utils]** Memperbaiki masalah keamanan mesin evaluator `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) oleh @mytharcher
- **[Karyawan AI]**

  - Memperbaiki masalah di mana tautan kutipan dari pencarian web AI tidak ditampilkan di kotak obrolan ([#8651](https://github.com/nocobase/nocobase/pull/8651)) oleh @cgyrock
  - memperbaiki kesalahan parameter API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) oleh @cgyrock
- **[Manajer file]** memperbaiki masalah di mana komponen bidang file masih dapat membuka dialog pemilih saat dinonaktifkan ([#8617](https://github.com/nocobase/nocobase/pull/8617)) oleh @katherinehhh
