---
title: "Pembaruan Mingguan｜Tingkatkan Kemampuan Karyawan AI dalam Mengurai Dokumen yang Diunggah"
description: "Ini adalah ringkasan pembaruan dan peningkatan fitur NocoBase dari 16 April hingga 23 April 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alpha, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.41](https://www.nocobase.com/en/blog/v2.0.41)

*Tanggal rilis: 22-04-2026*

### 🎉 Fitur Baru

- **[Auth: OIDC]** atribut pemetaan mendukung bidang khusus oleh @chenzhizdt
- **[DingTalk]** DingTalk: notifikasi, login otomatis di dalam DingTalk, dan sinkronisasi pengguna. oleh @chenzhizdt

### 🚀 Peningkatan

- **[ai]** Karyawan AI dan basis pengetahuan sekarang mendukung jenis file tambahan untuk diunggah (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) oleh @cgyrock
- **[undefined]** Menambahkan terjemahan bahasa Arab untuk bagian panduan dan navigasi ([#9141](https://github.com/nocobase/nocobase/pull/9141)) oleh @saraTabbane

### 🐛 Perbaikan Bug

- **[data-source-manager]** Memperbaiki bidang persentase yang diatur ulang menjadi numerik saat menyinkronkan ulang sumber data eksternal ([#9178](https://github.com/nocobase/nocobase/pull/9178)) oleh @jiannx
- **[client]**

  - Memperbaiki masalah di mana nilai default tidak akan berlaku setelah membuat rekaman. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) oleh @gchust
  - Memperbaiki masalah di mana tombol Tambah tab terlalu dekat dengan tepi kanan ([#9177](https://github.com/nocobase/nocobase/pull/9177)) oleh @zhangzhonghe
- **[Departments]** Memperbaiki masalah di mana sinkronisasi departemen berulang tidak dapat memperbarui urutan pengurutan departemen ([#9173](https://github.com/nocobase/nocobase/pull/9173)) oleh @2013xile
- **[Data source: Main]** Memperbaiki sinkronisasi bidang dari database untuk tampilan yang terhubung ketika nama koleksi berbeda dari nama tampilan database ([#9155](https://github.com/nocobase/nocobase/pull/9155)) oleh @2013xile
- **[Workflow: JavaScript]** Memperbaiki masalah keamanan eksekusi skrip dalam mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) oleh @mytharcher
- **[AI: Knowledge base]** Memperbaiki masalah di mana database vektor tidak disinkronkan saat menghapus dokumen basis pengetahuan. oleh @cgyrock
- **[WeCom]** Memperbaiki urutan departemen yang hilang saat menyinkronkan departemen dari WeCom oleh @2013xile

### [v2.0.40](https://www.nocobase.com/en/blog/v2.0.40)

*Tanggal rilis: 20-04-2026*

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana memperbarui nilai sub-tabel melalui penugasan bidang akan mengakibatkan kontaminasi data. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) oleh @gchust
- **[data-source-manager]** Memperbaiki masalah di mana bidang urutan dapat diubah menjadi string setelah sinkronisasi database ([#9143](https://github.com/nocobase/nocobase/pull/9143)) oleh @2013xile
- **[File manager]** Mengembalikan null ketika URL pratinjau tidak ada ([#9104](https://github.com/nocobase/nocobase/pull/9104)) oleh @gaston98765
- **[Workflow: JavaScript]** Memperbaiki masalah keamanan eksekusi skrip dalam mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) oleh @mytharcher
- **[Departments]**

  - Memperbaiki daftar departemen di manajemen departemen tidak mengikuti urutan bidang `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) oleh @2013xile
  - Memperbaiki nilai departemen utama yang hilang atau basi setelah menyimpan departemen pengguna ([#9156](https://github.com/nocobase/nocobase/pull/9156)) oleh @2013xile

### [v2.0.39](https://www.nocobase.com/en/blog/v2.0.39)

*Tanggal rilis: 18-04-2026*

### 🚀 Peningkatan

- **[Departments]** Menampilkan bidang kunci asing `parentId` dari koleksi departemen di UI ([#9130](https://github.com/nocobase/nocobase/pull/9130)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[data-source-manager]** Memperbaiki sinkronisasi bidang koleksi file yang menghapus bidang `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) oleh @2013xile
- **[client]**

  - Memperbaiki masalah di mana komponen bidang asosiasi salah di pengaturan nilai bidang. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) oleh @gchust
  - Memperbaiki tinggi dan lebar tab yang terlalu besar dalam mode konfigurasi halaman ([#9144](https://github.com/nocobase/nocobase/pull/9144)) oleh @zhangzhonghe
- **[database]** Memperbaiki risiko injeksi SQL dalam pemuatan bersemangat pohon rekursif dan inisialisasi pengurutan terbatas ([#9133](https://github.com/nocobase/nocobase/pull/9133)) oleh @2013xile
- **[Data visualization]** Memperbaiki pengurutan blok grafik untuk menggunakan ukuran dan dimensi alias dalam kueri agregat ([#9131](https://github.com/nocobase/nocobase/pull/9131)) oleh @2013xile
- **[Collection: SQL]** Memperbaiki validasi SQL yang hilang pada pembaruan koleksi SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) oleh @2013xile

### [v2.0.38](https://www.nocobase.com/en/blog/v2.0.38)

*Tanggal rilis: 16-04-2026*

### 🎉 Fitur Baru

- **[AI employees]** Meningkatkan kemampuan karyawan AI untuk mengurai dokumen yang diunggah ([#9126](https://github.com/nocobase/nocobase/pull/9126)) oleh @cgyrock

### 🚀 Peningkatan

- **[logger]** Menambahkan informasi `referer` ke log permintaan ([#9110](https://github.com/nocobase/nocobase/pull/9110)) oleh @2013xile
- **[undefined]** Menyinkronkan dokumen variabel lingkungan dan mode kluster yang diterjemahkan dengan pembaruan bahasa China terbaru. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) oleh @mytharcher
- **[AI employees]** Setelah pemilihan blok karyawan AI, isi lampiran formulir ke area unggah ([#9127](https://github.com/nocobase/nocobase/pull/9127)) oleh @cgyrock
- **[Workflow: Manual node]** Gunakan `simplePagination` pada koleksi terkait tugas alur kerja untuk kinerja daftar yang lebih baik ([#9117](https://github.com/nocobase/nocobase/pull/9117)) oleh @mytharcher
- **[Workflow: Approval]** Gunakan `simplePagination` pada koleksi `approvals` dan `approvalRecords` untuk kinerja daftar yang lebih baik oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki opsi opsional bidang pilih tunggal di konfigurasi aturan bidang kosong ([#9119](https://github.com/nocobase/nocobase/pull/9119)) oleh @jiannx
  - Memperbaiki pengaturan nilai default yang salah untuk sub tabel dalam formulir. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) oleh @gchust
- **[Notification: In-app message]** Memperbaiki masalah di mana komponen pilih penerima tidak berfungsi dengan benar ([#9123](https://github.com/nocobase/nocobase/pull/9123)) oleh @mytharcher
- **[AI employees]** Memperbaiki masalah di mana pengaturan baseURL dari layanan LLM google-gen-ai tidak berpengaruh ([#9107](https://github.com/nocobase/nocobase/pull/9107)) oleh @cgyrock
- **[Email manager]** Hapus prompt penutupan formulir setelah email berhasil dikirim oleh @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.14](https://www.nocobase.com/en/blog/v2.1.0-beta.14)

*Tanggal rilis: 20-04-2026*

### 🎉 Fitur Baru

- **[Calendar]** blok kalender v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) oleh @jiannx
- **[AI employees]** Meningkatkan kemampuan karyawan AI untuk mengurai dokumen yang diunggah ([#9126](https://github.com/nocobase/nocobase/pull/9126)) oleh @cgyrock
- **[Block: Tree]** Menambahkan blok filter pohon ([#9016](https://github.com/nocobase/nocobase/pull/9016)) oleh @jiannx
- **[Email manager]** gmail mendukung pengiriman email dengan alias oleh @jiannx

### 🚀 Peningkatan

- **[undefined]**

  - Menambahkan terjemahan bahasa Arab untuk bagian panduan dan navigasi ([#9141](https://github.com/nocobase/nocobase/pull/9141)) oleh @saraTabbane
  - Menyinkronkan dokumen variabel lingkungan dan mode kluster yang diterjemahkan dengan pembaruan bahasa China terbaru. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) oleh @mytharcher
  - Menambahkan terjemahan bahasa Arab untuk beranda dokumentasi ([#9043](https://github.com/nocobase/nocobase/pull/9043)) oleh @gaston98765
  - Menambahkan konsistensi TOC di seluruh README yang dilokalkan ([#9038](https://github.com/nocobase/nocobase/pull/9038)) oleh @gaston98765
  - Menambahkan Daftar Isi ke README bahasa Prancis ([#9037](https://github.com/nocobase/nocobase/pull/9037)) oleh @saraTabbane
  - Docs: menambahkan terjemahan bahasa Arab untuk halaman pengantar memulai ([#9044](https://github.com/nocobase/nocobase/pull/9044)) oleh @gaston98765
- **[logger]** Menambahkan informasi `referer` ke log permintaan ([#9110](https://github.com/nocobase/nocobase/pull/9110)) oleh @2013xile
- **[client]** menambahkan sakelar verifikasi wajib formulir ([#9060](https://github.com/nocobase/nocobase/pull/9060)) oleh @jiannx
- **[database]** Mengoptimalkan kueri hitungan repositori dengan hanya mengaktifkan distinct ketika includes ada. ([#9094](https://github.com/nocobase/nocobase/pull/9094)) oleh @mytharcher
- **[Departments]** Menampilkan bidang kunci asing `parentId` dari koleksi departemen di UI ([#9130](https://github.com/nocobase/nocobase/pull/9130)) oleh @2013xile
- **[AI employees]** Setelah pemilihan blok karyawan AI, isi lampiran formulir ke area unggah ([#9127](https://github.com/nocobase/nocobase/pull/9127)) oleh @cgyrock
- **[Workflow: Manual node]** Gunakan `simplePagination` pada koleksi terkait tugas alur kerja untuk kinerja daftar yang lebih baik ([#9117](https://github.com/nocobase/nocobase/pull/9117)) oleh @mytharcher
- **[Workflow: Approval]** Gunakan `simplePagination` pada koleksi `approvals` dan `approvalRecords` untuk kinerja daftar yang lebih baik oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana memperbarui nilai sub-tabel melalui penugasan bidang akan mengakibatkan kontaminasi data. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) oleh @gchust
  - Memperbaiki tinggi dan lebar tab yang terlalu besar dalam mode konfigurasi halaman ([#9144](https://github.com/nocobase/nocobase/pull/9144)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana komponen bidang asosiasi salah di pengaturan nilai bidang. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) oleh @gchust
  - Memperbaiki opsi opsional bidang pilih tunggal di konfigurasi aturan bidang kosong ([#9119](https://github.com/nocobase/nocobase/pull/9119)) oleh @jiannx
  - Memperbaiki pengaturan nilai default yang salah untuk sub tabel dalam formulir. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) oleh @gchust
  - memperbaiki kesalahan subtable menambahkan bidang many-to-many ([#9070](https://github.com/nocobase/nocobase/pull/9070)) oleh @jiannx
  - Memperbaiki masalah di mana popup pengambilan rekaman dari tombol pemilihan sub-tabel tidak dapat menyelesaikan nilai variabel item induk dengan benar. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) oleh @gchust
- **[data-source-manager]**

  - Memperbaiki masalah di mana bidang urutan dapat diubah menjadi string setelah sinkronisasi database ([#9143](https://github.com/nocobase/nocobase/pull/9143)) oleh @2013xile
  - Memperbaiki sinkronisasi bidang koleksi file yang menghapus bidang `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) oleh @2013xile
- **[database]** Memperbaiki risiko injeksi SQL dalam pemuatan bersemangat pohon rekursif dan inisialisasi pengurutan terbatas ([#9133](https://github.com/nocobase/nocobase/pull/9133)) oleh @2013xile
- **[undefined]** Memperbaiki kesalahan render di blok sumber daya kustom ketika sumber daya tidak ada ([#9095](https://github.com/nocobase/nocobase/pull/9095)) oleh @Molunerfinn
- **[utils]** Menambahkan kontrol keamanan untuk pengiriman permintaan HTTP server, untuk menghindari kemungkinan SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) oleh @mytharcher
  Referensi: [Variabel lingkungan](https://docs.nocobase.com/get-started/installation/env)
- **[flow-engine]**

  - Memperbaiki masalah di mana bidang many-to-one dari sumber data eksternal tidak dapat ditambahkan di blok tabel ([#9068](https://github.com/nocobase/nocobase/pull/9068)) oleh @jiannx
  - Memperbaiki kesalahan pengamat acak ketika visibilitas halaman berubah ([#9067](https://github.com/nocobase/nocobase/pull/9067)) oleh @zhangzhonghe
- **[Data source: Main]** Memperbaiki sinkronisasi bidang dari database untuk tampilan yang terhubung ketika nama koleksi berbeda dari nama tampilan database ([#9155](https://github.com/nocobase/nocobase/pull/9155)) oleh @2013xile
- **[File manager]** Mengembalikan null ketika URL pratinjau tidak ada ([#9104](https://github.com/nocobase/nocobase/pull/9104)) oleh @gaston98765
- **[Departments]**

  - Memperbaiki nilai departemen utama yang hilang atau basi setelah menyimpan departemen pengguna ([#9156](https://github.com/nocobase/nocobase/pull/9156)) oleh @2013xile
  - Memperbaiki daftar departemen di manajemen departemen tidak mengikuti urutan bidang `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) oleh @2013xile
- **[Workflow: JavaScript]** Memperbaiki masalah keamanan eksekusi skrip dalam mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) oleh @mytharcher
- **[Collection: SQL]** Memperbaiki validasi SQL yang hilang pada pembaruan koleksi SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) oleh @2013xile
- **[Data visualization]** Memperbaiki pengurutan blok grafik untuk menggunakan ukuran dan dimensi alias dalam kueri agregat ([#9131](https://github.com/nocobase/nocobase/pull/9131)) oleh @2013xile
- **[Notification: In-app message]** Memperbaiki masalah di mana komponen pilih penerima tidak berfungsi dengan benar ([#9123](https://github.com/nocobase/nocobase/pull/9123)) oleh @mytharcher
- **[AI employees]** Memperbaiki masalah di mana pengaturan baseURL dari layanan LLM google-gen-ai tidak berpengaruh ([#9107](https://github.com/nocobase/nocobase/pull/9107)) oleh @cgyrock
- **[Notification manager]** Mengoptimalkan kinerja pengiriman notifikasi dalam aplikasi dalam skenario alur kerja ([#9066](https://github.com/nocobase/nocobase/pull/9066)) oleh @mytharcher
- **[Access control]** Memperbaiki masalah di mana membersihkan nilai relasi dengan array kosong dapat gagal di bawah ACL ([#9059](https://github.com/nocobase/nocobase/pull/9059)) oleh @2013xile
- **[Collection field: Code]** Memperbaiki antarmuka UI dari bidang kode ([#9061](https://github.com/nocobase/nocobase/pull/9061)) oleh @2013xile
- **[Email manager]** Hapus prompt penutupan formulir setelah email berhasil dikirim oleh @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.20](https://www.nocobase.com/en/blog/v2.1.0-alpha.20)

*Tanggal rilis: 20-04-2026*

### 🎉 Fitur Baru

- **[Workflow]** Menambahkan bidang log untuk pekerjaan, untuk menampilkan konten log dari beberapa node untuk debug ([#9165](https://github.com/nocobase/nocobase/pull/9165)) oleh @mytharcher

### 🚀 Peningkatan

- **[undefined]** Menambahkan terjemahan bahasa Arab untuk bagian panduan dan navigasi ([#9141](https://github.com/nocobase/nocobase/pull/9141)) oleh @saraTabbane
- **[cli]** Meningkatkan output bantuan CLI API yang dihasilkan dan pengelompokan perintah ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana memperbarui nilai sub-tabel melalui penugasan bidang akan mengakibatkan kontaminasi data. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) oleh @gchust
- **[data-source-manager]** Memperbaiki masalah di mana bidang urutan dapat diubah menjadi string setelah sinkronisasi database ([#9143](https://github.com/nocobase/nocobase/pull/9143)) oleh @2013xile
- **[cli]** Memperbaiki kegagalan login OAuth CLI di Windows yang disebabkan oleh URL otorisasi yang panjang ([#9159](https://github.com/nocobase/nocobase/pull/9159)) oleh @2013xile
- **[Departments]** Memperbaiki nilai departemen utama yang hilang atau basi setelah menyimpan departemen pengguna ([#9156](https://github.com/nocobase/nocobase/pull/9156)) oleh @2013xile
- **[Data source: Main]** Memperbaiki sinkronisasi bidang dari database untuk tampilan yang terhubung ketika nama koleksi berbeda dari nama tampilan database ([#9155](https://github.com/nocobase/nocobase/pull/9155)) oleh @2013xile
- **[File manager]** Mengembalikan null ketika URL pratinjau tidak ada ([#9104](https://github.com/nocobase/nocobase/pull/9104)) oleh @gaston98765

### [v2.1.0-alpha.19](https://www.nocobase.com/en/blog/v2.1.0-alpha.19)

*Tanggal rilis: 19-04-2026*

### 🎉 Fitur Baru

- **[cli-v1]** menyelesaikan jalur penyimpanan dari env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) oleh @chenos
- **[Calendar]** blok kalender v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) oleh @jiannx

### 🚀 Peningkatan

- **[cli]** Meningkatkan fallback bantuan `nb api` dan menyatukan pesan peringatan untuk kegagalan bootstrap runtime ([#9153](https://github.com/nocobase/nocobase/pull/9153)) oleh @2013xile
- **[Departments]** Menampilkan bidang kunci asing `parentId` dari koleksi departemen di UI ([#9130](https://github.com/nocobase/nocobase/pull/9130)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki tinggi dan lebar tab yang terlalu besar dalam mode konfigurasi halaman ([#9144](https://github.com/nocobase/nocobase/pull/9144)) oleh @zhangzhonghe
- **[database]** Memperbaiki risiko injeksi SQL dalam pemuatan bersemangat pohon rekursif dan inisialisasi pengurutan terbatas ([#9133](https://github.com/nocobase/nocobase/pull/9133)) oleh @2013xile
- **[Workflow: JavaScript]** Memperbaiki masalah keamanan eksekusi skrip dalam mode `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) oleh @mytharcher
- **[IdP: OAuth]** Memperbaiki kegagalan pendaftaran klien OAuth dan penyegaran token setelah restart layanan ([#9139](https://github.com/nocobase/nocobase/pull/9139)) oleh @2013xile
- **[Departments]** Memperbaiki daftar departemen di manajemen departemen tidak mengikuti urutan bidang `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) oleh @2013xile
- **[Collection: SQL]** Memperbaiki validasi SQL yang hilang pada pembaruan koleksi SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) oleh @2013xile
- **[Data visualization]** Memperbaiki pengurutan blok grafik untuk menggunakan ukuran dan dimensi alias dalam kueri agregat ([#9131](https://github.com/nocobase/nocobase/pull/9131)) oleh @2013xile

### [v2.1.0-alpha.18](https://www.nocobase.com/en/blog/v2.1.0-alpha.18)

*Tanggal rilis: 17-04-2026*

### 🐛 Perbaikan Bug

- **[data-source-manager]** Memperbaiki sinkronisasi bidang koleksi file yang menghapus bidang `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) oleh @2013xile

### [v2.1.0-alpha.17](https://www.nocobase.com/en/blog/v2.1.0-alpha.17)

*Tanggal rilis: 17-04-2026*

### 🎉 Fitur Baru

- **[cli]** refaktor NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) oleh @chenos
- **[AI employees]** Meningkatkan kemampuan karyawan AI untuk mengurai dokumen yang diunggah ([#9126](https://github.com/nocobase/nocobase/pull/9126)) oleh @cgyrock

### 🚀 Peningkatan

- **[undefined]**

  - Menyinkronkan dokumen variabel lingkungan dan mode kluster yang diterjemahkan dengan pembaruan bahasa China terbaru. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) oleh @mytharcher
  - Docs: menambahkan terjemahan bahasa Arab untuk halaman pengantar memulai ([#9044](https://github.com/nocobase/nocobase/pull/9044)) oleh @gaston98765
  - Menambahkan terjemahan bahasa Arab untuk beranda dokumentasi ([#9043](https://github.com/nocobase/nocobase/pull/9043)) oleh @gaston98765
- **[logger]** Menambahkan informasi `referer` ke log permintaan ([#9110](https://github.com/nocobase/nocobase/pull/9110)) oleh @2013xile
- **[client]** menambahkan sakelar verifikasi wajib formulir ([#9060](https://github.com/nocobase/nocobase/pull/9060)) oleh @jiannx
- **[Workflow: Manual node]** Gunakan `simplePagination` pada koleksi terkait tugas alur kerja untuk kinerja daftar yang lebih baik ([#9117](https://github.com/nocobase/nocobase/pull/9117)) oleh @mytharcher
- **[AI employees]** Setelah pemilihan blok karyawan AI, isi lampiran formulir ke area unggah ([#9127](https://github.com/nocobase/nocobase/pull/9127)) oleh @cgyrock
- **[Workflow: Approval]** Gunakan `simplePagination` pada koleksi `approvals` dan `approvalRecords` untuk kinerja daftar yang lebih baik oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki opsi opsional bidang pilih tunggal di konfigurasi aturan bidang kosong ([#9119](https://github.com/nocobase/nocobase/pull/9119)) oleh @jiannx
  - Memperbaiki masalah di mana komponen bidang asosiasi salah di pengaturan nilai bidang. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) oleh @gchust
  - Memperbaiki pengaturan nilai default yang salah untuk sub tabel dalam formulir. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) oleh @gchust
- **[utils]** Menambahkan kontrol keamanan untuk pengiriman permintaan HTTP server, untuk menghindari kemungkinan SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) oleh @mytharcher
  Referensi: [Variabel lingkungan](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Loop node]** Memperbaiki validasi node alur kerja ([#9111](https://github.com/nocobase/nocobase/pull/9111)) oleh @mytharcher
- **[Notification: In-app message]** Memperbaiki masalah di mana komponen pilih penerima tidak berfungsi dengan benar ([#9123](https://github.com/nocobase/nocobase/pull/9123)) oleh @mytharcher
- **[IdP: OAuth]** Memperbaiki akses OAuth untuk permintaan API reguler ([#9120](https://github.com/nocobase/nocobase/pull/9120)) oleh @2013xile
- **[AI employees]**

  - Memperbaiki pengurutan kueri agregat yang dijatuhkan oleh ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) oleh @2013xile
  - Memperbaiki masalah di mana pengaturan baseURL dari layanan LLM google-gen-ai tidak berpengaruh ([#9107](https://github.com/nocobase/nocobase/pull/9107)) oleh @cgyrock
- **[Email manager]** Hapus prompt penutupan formulir setelah email berhasil dikirim oleh @jiannx
