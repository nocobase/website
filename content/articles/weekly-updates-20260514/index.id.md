---
title: "Pembaruan Mingguan｜Dukungan Karyawan AI Memproses Beberapa Percakapan Secara Paralel"
description: "Ini adalah ringkasan pembaruan dan peningkatan fitur NocoBase dari 7 Mei hingga 14 Mei 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main` , `next` dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`：Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`：Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/en/blog/v2.0.52)

*Tanggal rilis: 13-05-2026*

### 🎉 Fitur Baru

- **[client]**
  - menambahkan variabel bahasa pengguna saat ini di v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) oleh @katherinehhh
  - menambahkan opsi batas rentang tanggal untuk bidang tanggal di formulir v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) oleh @katherinehhh

### 🚀 Peningkatan

- **[client]** mengecualikan rekaman yang sudah diasosiasikan dalam dialog pemilihan asosiasi blok tabel satu-ke-banyak ([#9448](https://github.com/nocobase/nocobase/pull/9448)) oleh @katherinehhh
- **[Departemen]** mengoptimalkan gaya daftar departemen dengan menambahkan ikon dan menyesuaikan jarak ([#9435](https://github.com/nocobase/nocobase/pull/9435)) oleh @katherinehhh
- **[AI: Basis Pengetahuan]** Pengidentifikasi unik untuk basis pengetahuan dapat dikonfigurasi pada saat pembuatan oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana pengaturan nilai default lama tidak dapat dihapus. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) oleh @gchust
  - Memperbaiki masalah di mana tidak dapat memilih opsi untuk bidang pilih asosiasi. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) oleh @gchust
  - Memperbaiki masalah di mana lingkup data blok target diatur secara tidak benar ketika membatalkan pilih data baris dalam alur peristiwa blok tabel. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) oleh @gchust
  - Memperbaiki permintaan tabel duplikat ketika formulir filter memiliki nilai default ([#9423](https://github.com/nocobase/nocobase/pull/9423)) oleh @zhangzhonghe
  - Memperbaiki aturan tautan V2 untuk mendukung pengaturan opsi yang dapat dipilih untuk bidang ([#9399](https://github.com/nocobase/nocobase/pull/9399)) oleh @jiannx
  - memperbaiki kesalahan saat mengubah bidang judul bidang asosiasi di blok tabel v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) oleh @katherinehhh
  - Memperbaiki masalah intermiten di mana aturan tautan tombol aksi gagal berlaku. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) oleh @gchust
  - menyembunyikan komponen subtabel untuk bidang asosiasi ke-banyak di subtabel v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) oleh @katherinehhh
- **[server]** fix(file-manager): memaksa unduh file konten aktif di penyimpanan lokal/publik ([#9437](https://github.com/nocobase/nocobase/pull/9437)) oleh @mytharcher
- **[Karyawan AI]** Memperbaiki uji coba Ollama yang memerlukan input kunci ([#9450](https://github.com/nocobase/nocobase/pull/9450)) oleh @cgyrock
- **[Manajer koleksi grafik]** memperbaiki tata letak otomatis antarmuka grafis yang memunculkan kesalahan filter aksi pembaruan ([#9421](https://github.com/nocobase/nocobase/pull/9421)) oleh @katherinehhh
- **[Alur Kerja]** fix: mengembalikan teks bantuan di dialog pengikatan alur kerja FlowModel untuk peristiwa aksi operasi dan kustom ([#9447](https://github.com/nocobase/nocobase/pull/9447)) oleh @mytharcher
- **[Departemen]** memperbaiki konflik terjemahan antara tombol tambah pengguna dan tambah departemen di pengaturan Pengguna & Izin ([#9456](https://github.com/nocobase/nocobase/pull/9456)) oleh @katherinehhh
- **[Bidang Koleksi: Markdown(Vditor)]** memperbaiki tooltip bidang markdown yang tersembunyi di tata letak formulir horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) oleh @katherinehhh
- **[Klien WEB]** Memperbaiki pemfilteran jenis rute saat menggunakan label terjemahan ([#9425](https://github.com/nocobase/nocobase/pull/9425)) oleh @zhangzhonghe
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana bidang JS muncul di pengaturan proses persetujuan oleh @zhangzhonghe
  - Memperbaiki tata letak formulir persetujuan pada perangkat seluler oleh @zhangzhonghe
  - Memperbaiki indeks catatan persetujuan duplikat saat mendelegasikan tugas persetujuan. oleh @mytharcher
- **[Manajer Cadangan]** Memperbaiki masalah di mana pencadangan akan gagal dengan kesalahan ketika file tidak dapat ditemukan. oleh @gchust

### [v2.0.51](https://www.nocobase.com/en/blog/v2.0.51)

*Tanggal rilis: 10-05-2026*

### 🚀 Peningkatan

- **[Alur Kerja: Persetujuan]** Memperbaiki perilaku validasi wajib untuk formulir persetujuan oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana kode JS tidak dapat diedit lagi setelah bidang JS diatur menjadi hanya-baca. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) oleh @gchust
  - Memperbaiki masalah di mana penugasan bidang sub-tabel tidak akan berlaku dalam aturan tautan bidang. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) oleh @gchust
  - Memperbaiki masalah di mana tab halaman v2 tidak sinkron segera setelah menyimpan pengaturan ([#9396](https://github.com/nocobase/nocobase/pull/9396)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana popup nilai default untuk bidang asosiasi di formulir buat akan ditampilkan secara tidak benar. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) oleh @gchust
- **[Kebijakan Kata Sandi]** Memperbaiki masalah di mana pengguna yang terkunci secara permanen dapat masuk setelah restart layanan oleh @2013xile
- **[Aksi: Impor Rekaman Pro]** Memperbaiki masalah di mana pemeriksaan duplikat pada bidang tanggal selalu gagal oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana laci pilih rekaman terhalang dalam konfigurasi alur kerja persetujuan oleh @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/en/blog/v2.0.50)

*Tanggal rilis: 09-05-2026*

### 🎉 Fitur Baru

- **[client]** menambahkan aksi asosiasi dan disasosiasi ke blok asosiasi ([#9366](https://github.com/nocobase/nocobase/pull/9366)) oleh @katherinehhh
- **[Salin Teks]** mendukung opsi "Tampilkan tombol salin" untuk bidang teks hanya-baca ([#9394](https://github.com/nocobase/nocobase/pull/9394)) oleh @katherinehhh

### 🚀 Peningkatan

- **[undefined]** melewati versi yang sudah dipublikasikan di pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) oleh @Molunerfinn
- **[client]** Mengizinkan untuk menetapkan nilai bidang untuk bidang urutan ([#9397](https://github.com/nocobase/nocobase/pull/9397)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki pesan validasi bidang tabel data yang tidak diterjemahkan di formulir alur v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) oleh @jiannx
- **[client]**

  - Memperbaiki bidang `Tersembunyi (nilai cadangan)` di blok formulir sehingga tetap terlihat dalam mode Editor UI, dan mengembalikan dukungan input nilai untuk menetapkannya di Penugasan Bidang ([#9373](https://github.com/nocobase/nocobase/pull/9373)) oleh @jiannx
  - Memperbaiki nama file unduhan yang salah untuk bidang AttachmentURL ketika metadata file hilang. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) oleh @mytharcher
  - Memperbaiki pemicu alur kerja massal tabel v2 sehingga pemilihan baris tetap konsisten setelah mengarahkan ulang antar tab dan baris dapat dipilih lagi setelah kembali ([#9388](https://github.com/nocobase/nocobase/pull/9388)) oleh @jiannx
  - Memperbaiki formulir filter yang tidak bisa diciutkan ([#9386](https://github.com/nocobase/nocobase/pull/9386)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana aturan tautan subtabel v1 secara tidak benar mengubah gaya bidang wajib ([#9364](https://github.com/nocobase/nocobase/pull/9364)) oleh @zhangzhonghe
  - memperbaiki rendering data yang salah di blok kartu grid setelah pembaruan dan penyegaran ([#9351](https://github.com/nocobase/nocobase/pull/9351)) oleh @katherinehhh
  - memperbaiki bidang opsi wajib di subtabel tidak divalidasi dengan benar pada pemilihan pertama di perangkat seluler ([#9352](https://github.com/nocobase/nocobase/pull/9352)) oleh @katherinehhh
  - Memperbaiki masalah di mana variabel parameter kueri URL menjadi tidak valid setelah mengganti halaman yang di-cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) oleh @zhangzhonghe
  - memperbaiki adaptasi DividerItem ke tema di v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) oleh @katherinehhh
  - memperbaiki menyembunyikan opsi buat cepat untuk bidang pilih asosiasi di subtabel v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) oleh @katherinehhh
  - Memperbaiki aturan tautan belum dijalankan ulang setelah nilai formulir berubah. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) oleh @gchust
  - Memperbaiki kesalahan saat memfilter bidang skalar dengan filter multi-pilih kustom ([#9387](https://github.com/nocobase/nocobase/pull/9387)) oleh @zhangzhonghe
- **[server]** memvalidasi nama paket plugin sebelum operasi sistem file ([#9367](https://github.com/nocobase/nocobase/pull/9367)) oleh @chenos
- **[Manajer sumber data]** mencegah pengeditan dan penghapusan semua rekaman dalam izin lingkup kustom untuk sumber data eksternal ([#9395](https://github.com/nocobase/nocobase/pull/9395)) oleh @katherinehhh
- **[Sumber Data: Utama]** Memperbaiki tabel database yang diimpor menggunakan nama tabel berprefiks yang salah ketika prefiks tabel diaktifkan ([#9403](https://github.com/nocobase/nocobase/pull/9403)) oleh @2013xile
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana daftar pesan dalam aplikasi tidak disegarkan setelah menerima notifikasi waktu nyata ([#9409](https://github.com/nocobase/nocobase/pull/9409)) oleh @mytharcher
- **[Blok: Kanban]** fix mencegah pembungkusan kata tunggal di bidang teks panjang blok kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) oleh @katherinehhh
- **[Bidang Koleksi: Formula]** memperbaiki bidang formula di subtabel v2 tidak terpicu untuk menghitung otomatis ([#9354](https://github.com/nocobase/nocobase/pull/9354)) oleh @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/en/blog/v2.1.0-beta.32)

*Tanggal rilis: 13-05-2026*

### 🎉 Fitur Baru

- **[undefined]** Menambahkan karyawan AI baru, Insinyur Lokalisasi Lina, untuk membantu tugas terjemahan lokalisasi ([#9434](https://github.com/nocobase/nocobase/pull/9434)) oleh @2013xile
  Referensi: [Manajemen Lokalisasi](https://docs.nocobase.com/system-management/localization)<br>[Lina: Insinyur Lokalisasi](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Gunakan Lina dan HY-MT1.5-1.8B lokal untuk menerjemahkan entri lokalisasi](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Penyimpanan File: S3(Pro)]** Mendukung unggah file melalui penyimpanan S3 Pro di manajer file v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[build]** Menambahkan cakupan regresi untuk menjaga `deleteServerFiles` agar tidak menghapus artefak build `client` dan `client-v2` di seluruh jalur Windows dan POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) oleh @Molunerfinn
- **[client]** mengecualikan rekaman yang sudah diasosiasikan dalam dialog pemilihan asosiasi blok tabel satu-ke-banyak ([#9448](https://github.com/nocobase/nocobase/pull/9448)) oleh @katherinehhh
- **[Manajer File]** Plugin penyimpanan pihak ketiga sekarang dapat mendaftarkan formulir jenis penyimpanan mereka sendiri di halaman pengaturan manajer file v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) oleh @Molunerfinn
- **[AI: Basis Pengetahuan]** Pengidentifikasi unik untuk basis pengetahuan dapat dikonfigurasi pada saat pembuatan oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana tidak dapat memilih opsi untuk bidang pilih asosiasi. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) oleh @gchust
  - Memperbaiki masalah di mana pengaturan sistem tampak kosong setelah mengirimkan ([#9458](https://github.com/nocobase/nocobase/pull/9458)) oleh @zhangzhonghe
  - Memperbaiki permintaan tabel duplikat ketika formulir filter memiliki nilai default ([#9423](https://github.com/nocobase/nocobase/pull/9423)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana lingkup data blok target diatur secara tidak benar ketika membatalkan pilih data baris dalam alur peristiwa blok tabel. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) oleh @gchust
  - Memperbaiki aturan tautan V2 untuk mendukung pengaturan opsi yang dapat dipilih untuk bidang ([#9399](https://github.com/nocobase/nocobase/pull/9399)) oleh @jiannx
  - memperbaiki kesalahan saat mengubah bidang judul bidang asosiasi di blok tabel v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) oleh @katherinehhh
- **[client-v2]**

  - Memperbaiki masalah di mana halaman menjadi kosong di balik dialog pengaktifan plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) oleh @zhangzhonghe
  - Memperbaiki halaman admin v1 yang crash ketika mereka mereferensikan modul plugin v2 di build produksi. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) oleh @Molunerfinn
- **[cli-v1]** Memperbaiki kegagalan startup pengembangan di aplikasi yang dibuat dengan create-nocobase-app yang disebabkan oleh resolusi jalur klien app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) oleh @Molunerfinn
- **[server]** fix(file-manager): memaksa unduh file konten aktif di penyimpanan lokal/publik ([#9437](https://github.com/nocobase/nocobase/pull/9437)) oleh @mytharcher
- **[Departemen]** memperbaiki konflik terjemahan antara tombol tambah pengguna dan tambah departemen di pengaturan Pengguna & Izin ([#9456](https://github.com/nocobase/nocobase/pull/9456)) oleh @katherinehhh
- **[Blok: Markdown]** Memperbaiki masalah blok Markdown v2 yang melaporkan kesalahan ([#9440](https://github.com/nocobase/nocobase/pull/9440)) oleh @zhangzhonghe
- **[Alur Kerja]** fix: mengembalikan teks bantuan di dialog pengikatan alur kerja FlowModel untuk peristiwa aksi operasi dan kustom ([#9447](https://github.com/nocobase/nocobase/pull/9447)) oleh @mytharcher
- **[Karyawan AI]** Memperbaiki uji coba Ollama yang memerlukan input kunci ([#9450](https://github.com/nocobase/nocobase/pull/9450)) oleh @cgyrock
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki indeks catatan persetujuan duplikat saat mendelegasikan tugas persetujuan. oleh @mytharcher
  - Memperbaiki tata letak formulir persetujuan pada perangkat seluler oleh @zhangzhonghe
- **[Manajer Cadangan]** Memperbaiki masalah di mana pencadangan akan gagal dengan kesalahan ketika file tidak dapat ditemukan. oleh @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/en/blog/v2.1.0-beta.30)

*Tanggal rilis: 12-05-2026*

### 🎉 Fitur Baru

- **[client]**
  - Menambahkan dukungan aturan tautan untuk item menu halaman ([#9304](https://github.com/nocobase/nocobase/pull/9304)) oleh @zhangzhonghe
  - menambahkan variabel bahasa pengguna saat ini di v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) oleh @katherinehhh

### 🚀 Peningkatan

- **[client-v2]** Memfilter menu v1 di tata letak v2 dan hanya menampilkan menu v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) oleh @zhangzhonghe
- **[undefined]** mendukung env saat ini yang terikat sesi di nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) oleh @chenos
- **[Karyawan AI]** Karyawan AI mendukung pemrosesan paralel dari beberapa percakapan ([#9344](https://github.com/nocobase/nocobase/pull/9344)) oleh @cgyrock
- **[Departemen]** mengoptimalkan gaya daftar departemen dengan menambahkan ikon dan menyesuaikan jarak ([#9435](https://github.com/nocobase/nocobase/pull/9435)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[build]** Memperbaiki kegagalan build plugin ketika kode klien v1 mengimpor entri `/client-v2` plugin lain. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) oleh @Molunerfinn
- **[client]**

  - menyembunyikan komponen subtabel untuk bidang asosiasi ke-banyak di subtabel v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) oleh @katherinehhh
  - Memperbaiki masalah intermiten di mana aturan tautan tombol aksi gagal berlaku. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) oleh @gchust
- **[Manajer koleksi grafik]** memperbaiki tata letak otomatis antarmuka grafis yang memunculkan kesalahan filter aksi pembaruan ([#9421](https://github.com/nocobase/nocobase/pull/9421)) oleh @katherinehhh
- **[Blok: Pohon]** Meningkatkan pengaturan blok filter pohon dan memperbaiki asosiasi yang tidak didukung, fallback bidang-judul, dan perilaku reset pencarian. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) oleh @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/en/blog/v2.1.0-beta.29)

*Tanggal rilis: 10-05-2026*

### 🎉 Fitur Baru

- **[client]** menambahkan opsi batas rentang tanggal untuk bidang tanggal di formulir v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) oleh @katherinehhh
- **[flow-engine]** Migrasikan `plugin-environment-variables` ke client-v2 dengan halaman pengaturan berbasis React dan variabel runtime `$env` yang terdaftar secara global; tambahkan entri client-v2 ke `plugin-file-manager` dengan halaman konfigurasi penyimpanan berbasis React dan bidang unggah, aksi unggah, dan pratinjau berbasis FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana kode JS tidak dapat diedit lagi setelah bidang JS diatur menjadi hanya-baca. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) oleh @gchust
  - Memperbaiki masalah di mana tab halaman v2 tidak sinkron segera setelah menyimpan pengaturan ([#9396](https://github.com/nocobase/nocobase/pull/9396)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana penugasan bidang sub-tabel tidak akan berlaku dalam aturan tautan bidang. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) oleh @gchust
  - Memperbaiki masalah di mana popup nilai default untuk bidang asosiasi di formulir buat akan ditampilkan secara tidak benar. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) oleh @gchust
- **[Bidang Koleksi: Markdown(Vditor)]** memperbaiki tooltip bidang markdown yang tersembunyi di tata letak formulir horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) oleh @katherinehhh
- **[Seluler (usang)]** Memperbaiki popup pesan seluler yang tidak dapat ditutup atau digulir ([#9424](https://github.com/nocobase/nocobase/pull/9424)) oleh @zhangzhonghe
- **[Klien WEB]** Memperbaiki pemfilteran jenis rute saat menggunakan label terjemahan ([#9425](https://github.com/nocobase/nocobase/pull/9425)) oleh @zhangzhonghe
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana bidang JS muncul di pengaturan proses persetujuan oleh @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/en/blog/v2.1.0-beta.27)

*Tanggal rilis: 09-05-2026*

### 🎉 Fitur Baru

- **[server]** Karyawan AI dapat mencari dokumentasi yang dibundel dengan perintah Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) oleh @2013xile
- **[Karyawan AI]** Node karyawan AI Alur Kerja mendukung memuat file dari bidang lampiran. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) oleh @cgyrock
- **[Salin Teks]** mendukung opsi "Tampilkan tombol salin" untuk bidang teks hanya-baca ([#9394](https://github.com/nocobase/nocobase/pull/9394)) oleh @katherinehhh

### 🚀 Peningkatan

- **[client]** Mengizinkan untuk menetapkan nilai bidang untuk bidang urutan ([#9397](https://github.com/nocobase/nocobase/pull/9397)) oleh @mytharcher
- **[Blok: Kanban]** Meningkatkan konsistensi jarak bidang detail v2 dan membuat jarak kartu kanban dan kolom lebih baik beradaptasi dengan pengaturan tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) oleh @jiannx
- **[Karyawan AI]** Meningkatkan alat pengeditan RunJS Nathan dan mengurangi lag selama percakapan AI yang panjang ([#9311](https://github.com/nocobase/nocobase/pull/9311)) oleh @2013xile
- **[Alur Kerja: Persetujuan]** Memperbaiki perilaku validasi wajib untuk formulir persetujuan oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki pesan validasi bidang tabel data yang tidak diterjemahkan di formulir alur v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) oleh @jiannx
- **[client]**

  - Memperbaiki formulir filter yang tidak bisa diciutkan ([#9386](https://github.com/nocobase/nocobase/pull/9386)) oleh @zhangzhonghe
  - Memperbaiki kesalahan saat memfilter bidang skalar dengan filter multi-pilih kustom ([#9387](https://github.com/nocobase/nocobase/pull/9387)) oleh @zhangzhonghe
  - Memperbaiki nama file unduhan yang salah untuk bidang AttachmentURL ketika metadata file hilang. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) oleh @mytharcher
  - memperbaiki adaptasi DividerItem ke tema di v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) oleh @katherinehhh
  - Memperbaiki masalah di mana aturan tautan subtabel v1 secara tidak benar mengubah gaya bidang wajib ([#9364](https://github.com/nocobase/nocobase/pull/9364)) oleh @zhangzhonghe
  - Memperbaiki bidang `Tersembunyi (nilai cadangan)` di blok formulir sehingga tetap terlihat dalam mode Editor UI, dan mengembalikan dukungan input nilai untuk menetapkannya di Penugasan Bidang ([#9373](https://github.com/nocobase/nocobase/pull/9373)) oleh @jiannx
  - Memperbaiki pemicu alur kerja massal tabel v2 sehingga pemilihan baris tetap konsisten setelah mengarahkan ulang antar tab dan baris dapat dipilih lagi setelah kembali ([#9388](https://github.com/nocobase/nocobase/pull/9388)) oleh @jiannx
- **[client-v2]**

  - Memperbaiki kesalahan saat memilih bidang asosiasi di pengaturan bidang. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) oleh @gchust
  - Memperbaiki masalah di mana halaman 404 berkedip setelah aplikasi dimulai ([#9365](https://github.com/nocobase/nocobase/pull/9365)) oleh @zhangzhonghe
- **[server]** Memperbaiki permintaan penemuan OAuth sub-aplikasi yang dirutekan sebagai permintaan aplikasi utama ([#9383](https://github.com/nocobase/nocobase/pull/9383)) oleh @2013xile
- **[Sumber Data: Utama]** Memperbaiki tabel database yang diimpor menggunakan nama tabel berprefiks yang salah ketika prefiks tabel diaktifkan ([#9403](https://github.com/nocobase/nocobase/pull/9403)) oleh @2013xile
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana daftar pesan dalam aplikasi tidak disegarkan setelah menerima notifikasi waktu nyata ([#9409](https://github.com/nocobase/nocobase/pull/9409)) oleh @mytharcher
- **[Manajer sumber data]** mencegah pengeditan dan penghapusan semua rekaman dalam izin lingkup kustom untuk sumber data eksternal ([#9395](https://github.com/nocobase/nocobase/pull/9395)) oleh @katherinehhh
- **[AI: Server MCP]** Memperbaiki pengemasan server MCP sehingga dependensi runtime disertakan ([#9401](https://github.com/nocobase/nocobase/pull/9401)) oleh @2013xile
- **[Mesin Alur]** Memperbaiki masalah di mana blok yang dihasilkan oleh AI tidak dapat dikonversi dari template referensi kembali ke template duplikat. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) oleh @gchust
- **[Aksi: Impor Rekaman Pro]** Memperbaiki masalah di mana pemeriksaan duplikat pada bidang tanggal selalu gagal oleh @mytharcher
- **[Kebijakan Kata Sandi]** Memperbaiki masalah di mana pengguna yang terkunci secara permanen dapat masuk setelah restart layanan oleh @2013xile
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana laci pilih rekaman terhalang dalam konfigurasi alur kerja persetujuan oleh @zhangzhonghe
- **[Manajer Cadangan]** fix adaptasi skema pg oleh @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/en/blog/v2.1.0-beta.26)

*Tanggal rilis: 08-05-2026*

### 🎉 Fitur Baru

- **[client]** menambahkan aksi asosiasi dan disasosiasi ke blok asosiasi ([#9366](https://github.com/nocobase/nocobase/pull/9366)) oleh @katherinehhh
- **[Visualisasi Data]** Menambahkan dukungan client-v2 untuk plugin blok ([#9297](https://github.com/nocobase/nocobase/pull/9297)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[undefined]** melewati versi yang sudah dipublikasikan di pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[client-v2]**

  - Memperbaiki masalah di mana beberapa halaman v2 gagal memuat plugin jarak jauh ([#9369](https://github.com/nocobase/nocobase/pull/9369)) oleh @zhangzhonghe
  - Memperbaiki masalah placeholder seret blok halaman v2 dan posisi jatuhkan ([#9361](https://github.com/nocobase/nocobase/pull/9361)) oleh @zhangzhonghe
- **[client]**

  - Memperbaiki aturan tautan belum dijalankan ulang setelah nilai formulir berubah. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) oleh @gchust
  - memperbaiki bidang opsi wajib di subtabel tidak divalidasi dengan benar pada pemilihan pertama di perangkat seluler ([#9352](https://github.com/nocobase/nocobase/pull/9352)) oleh @katherinehhh
  - memperbaiki menyembunyikan opsi buat cepat untuk bidang pilih asosiasi di subtabel v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) oleh @katherinehhh
  - Memperbaiki masalah di mana variabel parameter kueri URL menjadi tidak valid setelah mengganti halaman yang di-cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) oleh @zhangzhonghe
  - memperbaiki rendering data yang salah di blok kartu grid setelah pembaruan dan penyegaran ([#9351](https://github.com/nocobase/nocobase/pull/9351)) oleh @katherinehhh
- **[server]** memvalidasi nama paket plugin sebelum operasi sistem file ([#9367](https://github.com/nocobase/nocobase/pull/9367)) oleh @chenos
- **[undefined]** Memperbaiki tautan mati di dokumentasi terjemahan dan mengaktifkan deteksi tautan mati secara default di build docs. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) oleh @Molunerfinn
- **[Karyawan AI]**

  - Memperbaiki kesalahan lampiran bidang bacaan asosiasi node karyawan AI di alur kerja ([#9377](https://github.com/nocobase/nocobase/pull/9377)) oleh @cgyrock
  - Memperbaiki node karyawan AI alur kerja tidak berakhir dengan benar setelah penugasan alat. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) oleh @cgyrock
- **[Blok: Kanban]**

  - Meningkatkan gaya ringkas kartu Kanban dan mengoptimalkan pemilihan template popup buat cepat. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) oleh @jiannx
  - fix mencegah pembungkusan kata tunggal di bidang teks panjang blok kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) oleh @katherinehhh
  - Memperbaiki blok terkait kanban yang menggunakan parameter sumber daya runtime yang belum terselesaikan dalam konteks popup atau halaman sekunder. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) oleh @jiannx
- **[Aksi: Permintaan kustom]** upgrade koa ke v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) oleh @chenos
- **[Bidang Koleksi: Formula]** memperbaiki bidang formula di subtabel v2 tidak terpicu untuk menghitung otomatis ([#9354](https://github.com/nocobase/nocobase/pull/9354)) oleh @katherinehhh
- **[Manajer Email]** Memperbaiki tampilan judul identitas email oleh @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/en/blog/v2.1.0-alpha.34)

*Tanggal rilis: 12-05-2026*

### 🚀 Peningkatan

- **[Karyawan AI]** Karyawan AI mendukung pemrosesan paralel dari beberapa percakapan ([#9344](https://github.com/nocobase/nocobase/pull/9344)) oleh @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/en/blog/v2.1.0-alpha.33)

*Tanggal rilis: 11-05-2026*

### 🎉 Fitur Baru

- **[client]**
  - menambahkan variabel bahasa pengguna saat ini di v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) oleh @katherinehhh
  - Menambahkan dukungan aturan tautan untuk item menu halaman ([#9304](https://github.com/nocobase/nocobase/pull/9304)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[client-v2]** Memfilter menu v1 di tata letak v2 dan hanya menampilkan menu v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) oleh @zhangzhonghe
- **[Departemen]** mengoptimalkan gaya daftar departemen dengan menambahkan ikon dan menyesuaikan jarak ([#9435](https://github.com/nocobase/nocobase/pull/9435)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[build]** Memperbaiki kegagalan build plugin ketika kode klien v1 mengimpor entri `/client-v2` plugin lain. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) oleh @Molunerfinn
- **[client]**

  - Memperbaiki masalah intermiten di mana aturan tautan tombol aksi gagal berlaku. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) oleh @gchust
  - menyembunyikan komponen subtabel untuk bidang asosiasi ke-banyak di subtabel v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) oleh @katherinehhh
- **[Manajer koleksi grafik]** memperbaiki tata letak otomatis antarmuka grafis yang memunculkan kesalahan filter aksi pembaruan ([#9421](https://github.com/nocobase/nocobase/pull/9421)) oleh @katherinehhh
- **[Blok: Pohon]** Meningkatkan pengaturan blok filter pohon dan memperbaiki asosiasi yang tidak didukung, fallback bidang-judul, dan perilaku reset pencarian. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) oleh @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/en/blog/v2.1.0-alpha.32)

*Tanggal rilis: 10-05-2026*

### 🎉 Fitur Baru

- **[client]** menambahkan opsi batas rentang tanggal untuk bidang tanggal di formulir v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) oleh @katherinehhh
- **[flow-engine]** Migrasikan `plugin-environment-variables` ke client-v2 dengan halaman pengaturan berbasis React dan variabel runtime `$env` yang terdaftar secara global; tambahkan entri client-v2 ke `plugin-file-manager` dengan halaman konfigurasi penyimpanan berbasis React dan bidang unggah, aksi unggah, dan pratinjau berbasis FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) oleh @Molunerfinn

### 🚀 Peningkatan

- **[undefined]** mendukung env saat ini yang terikat sesi di nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) oleh @chenos

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana popup nilai default untuk bidang asosiasi di formulir buat akan ditampilkan secara tidak benar. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) oleh @gchust
  - Memperbaiki masalah di mana kode JS tidak dapat diedit lagi setelah bidang JS diatur menjadi hanya-baca. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) oleh @gchust
  - Memperbaiki masalah di mana tab halaman v2 tidak sinkron segera setelah menyimpan pengaturan ([#9396](https://github.com/nocobase/nocobase/pull/9396)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana penugasan bidang sub-tabel tidak akan berlaku dalam aturan tautan bidang. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) oleh @gchust
- **[Bidang Koleksi: Markdown(Vditor)]** memperbaiki tooltip bidang markdown yang tersembunyi di tata letak formulir horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) oleh @katherinehhh
- **[Klien WEB]** Memperbaiki pemfilteran jenis rute saat menggunakan label terjemahan ([#9425](https://github.com/nocobase/nocobase/pull/9425)) oleh @zhangzhonghe
- **[Seluler (usang)]** Memperbaiki popup pesan seluler yang tidak dapat ditutup atau digulir ([#9424](https://github.com/nocobase/nocobase/pull/9424)) oleh @zhangzhonghe
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana bidang JS muncul di pengaturan proses persetujuan oleh @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Tanggal rilis: 09-05-2026*

### 🎉 Fitur Baru

- **[client]** menambahkan aksi asosiasi dan disasosiasi ke blok asosiasi ([#9366](https://github.com/nocobase/nocobase/pull/9366)) oleh @katherinehhh
- **[Salin Teks]** mendukung opsi "Tampilkan tombol salin" untuk bidang teks hanya-baca ([#9394](https://github.com/nocobase/nocobase/pull/9394)) oleh @katherinehhh
- **[Karyawan AI]** Node karyawan AI Alur Kerja mendukung memuat file dari bidang lampiran. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) oleh @cgyrock
- **[Visualisasi Data]** Menambahkan dukungan client-v2 untuk plugin blok ([#9297](https://github.com/nocobase/nocobase/pull/9297)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[client]** Mengizinkan untuk menetapkan nilai bidang untuk bidang urutan ([#9397](https://github.com/nocobase/nocobase/pull/9397)) oleh @mytharcher
- **[undefined]** melewati versi yang sudah dipublikasikan di pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) oleh @Molunerfinn
- **[Blok: Kanban]** Meningkatkan konsistensi jarak bidang detail v2 dan membuat jarak kartu kanban dan kolom lebih baik beradaptasi dengan pengaturan tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) oleh @jiannx
- **[Alur Kerja: Persetujuan]** Memperbaiki perilaku validasi wajib untuk formulir persetujuan oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki formulir filter yang tidak bisa diciutkan ([#9386](https://github.com/nocobase/nocobase/pull/9386)) oleh @zhangzhonghe
  - Memperbaiki pemicu alur kerja massal tabel v2 sehingga pemilihan baris tetap konsisten setelah mengarahkan ulang antar tab dan baris dapat dipilih lagi setelah kembali ([#9388](https://github.com/nocobase/nocobase/pull/9388)) oleh @jiannx
  - Memperbaiki bidang `Tersembunyi (nilai cadangan)` di blok formulir sehingga tetap terlihat dalam mode Editor UI, dan mengembalikan dukungan input nilai untuk menetapkannya di Penugasan Bidang ([#9373](https://github.com/nocobase/nocobase/pull/9373)) oleh @jiannx
  - memperbaiki adaptasi DividerItem ke tema di v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) oleh @katherinehhh
  - Memperbaiki nama file unduhan yang salah untuk bidang AttachmentURL ketika metadata file hilang. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) oleh @mytharcher
  - Memperbaiki kesalahan saat memfilter bidang skalar dengan filter multi-pilih kustom ([#9387](https://github.com/nocobase/nocobase/pull/9387)) oleh @zhangzhonghe
  - Memperbaiki aturan tautan belum dijalankan ulang setelah nilai formulir berubah. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) oleh @gchust
  - Memperbaiki masalah di mana aturan tautan subtabel v1 secara tidak benar mengubah gaya bidang wajib ([#9364](https://github.com/nocobase/nocobase/pull/9364)) oleh @zhangzhonghe
  - memperbaiki rendering data yang salah di blok kartu grid setelah pembaruan dan penyegaran ([#9351](https://github.com/nocobase/nocobase/pull/9351)) oleh @katherinehhh
  - memperbaiki bidang opsi wajib di subtabel tidak divalidasi dengan benar pada pemilihan pertama di perangkat seluler ([#9352](https://github.com/nocobase/nocobase/pull/9352)) oleh @katherinehhh
  - memperbaiki menyembunyikan opsi buat cepat untuk bidang pilih asosiasi di subtabel v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) oleh @katherinehhh
  - Memperbaiki masalah di mana variabel parameter kueri URL menjadi tidak valid setelah mengganti halaman yang di-cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) oleh @zhangzhonghe
- **[flow-engine]** Memperbaiki pesan validasi bidang tabel data yang tidak diterjemahkan di formulir alur v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) oleh @jiannx
- **[server]**

  - Memperbaiki permintaan penemuan OAuth sub-aplikasi yang dirutekan sebagai permintaan aplikasi utama ([#9383](https://github.com/nocobase/nocobase/pull/9383)) oleh @2013xile
  - memvalidasi nama paket plugin sebelum operasi sistem file ([#9367](https://github.com/nocobase/nocobase/pull/9367)) oleh @chenos
- **[client-v2]**

  - Memperbaiki kesalahan saat memilih bidang asosiasi di pengaturan bidang. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) oleh @gchust
  - Memperbaiki masalah di mana halaman 404 berkedip setelah aplikasi dimulai ([#9365](https://github.com/nocobase/nocobase/pull/9365)) oleh @zhangzhonghe
  - Memperbaiki masalah placeholder seret blok halaman v2 dan posisi jatuhkan ([#9361](https://github.com/nocobase/nocobase/pull/9361)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana beberapa halaman v2 gagal memuat plugin jarak jauh ([#9369](https://github.com/nocobase/nocobase/pull/9369)) oleh @zhangzhonghe
- **[undefined]** Memperbaiki tautan mati di dokumentasi terjemahan dan mengaktifkan deteksi tautan mati secara default di build docs. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) oleh @Molunerfinn
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana daftar pesan dalam aplikasi tidak disegarkan setelah menerima notifikasi waktu nyata ([#9409](https://github.com/nocobase/nocobase/pull/9409)) oleh @mytharcher
- **[Manajer sumber data]** mencegah pengeditan dan penghapusan semua rekaman dalam izin lingkup kustom untuk sumber data eksternal ([#9395](https://github.com/nocobase/nocobase/pull/9395)) oleh @katherinehhh
- **[AI: Server MCP]** Memperbaiki pengemasan server MCP sehingga dependensi runtime disertakan ([#9401](https://github.com/nocobase/nocobase/pull/9401)) oleh @2013xile
- **[Sumber Data: Utama]** Memperbaiki tabel database yang diimpor menggunakan nama tabel berprefiks yang salah ketika prefiks tabel diaktifkan ([#9403](https://github.com/nocobase/nocobase/pull/9403)) oleh @2013xile
- **[Mesin Alur]** Memperbaiki masalah di mana blok yang dihasilkan oleh AI tidak dapat dikonversi dari template referensi kembali ke template duplikat. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) oleh @gchust
- **[Karyawan AI]**

  - Memperbaiki kesalahan lampiran bidang bacaan asosiasi node karyawan AI di alur kerja ([#9377](https://github.com/nocobase/nocobase/pull/9377)) oleh @cgyrock
  - Memperbaiki node karyawan AI alur kerja tidak berakhir dengan benar setelah penugasan alat. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) oleh @cgyrock
- **[Aksi: Permintaan kustom]** upgrade koa ke v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) oleh @chenos
- **[Blok: Kanban]**

  - Meningkatkan gaya ringkas kartu Kanban dan mengoptimalkan pemilihan template popup buat cepat. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) oleh @jiannx
  - fix mencegah pembungkusan kata tunggal di bidang teks panjang blok kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) oleh @katherinehhh
- **[Bidang Koleksi: Formula]** memperbaiki bidang formula di subtabel v2 tidak terpicu untuk menghitung otomatis ([#9354](https://github.com/nocobase/nocobase/pull/9354)) oleh @katherinehhh
- **[Aksi: Impor Rekaman Pro]** Memperbaiki masalah di mana pemeriksaan duplikat pada bidang tanggal selalu gagal oleh @mytharcher
- **[Kebijakan Kata Sandi]** Memperbaiki masalah di mana pengguna yang terkunci secara permanen dapat masuk setelah restart layanan oleh @2013xile
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana laci pilih rekaman terhalang dalam konfigurasi alur kerja persetujuan oleh @zhangzhonghe
- **[Manajer Email]** Memperbaiki tampilan judul identitas email oleh @jiannx
- **[Manajer Cadangan]** fix adaptasi skema pg oleh @Andrew1989Y
