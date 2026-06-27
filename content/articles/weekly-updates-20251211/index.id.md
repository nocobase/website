---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Mendukung kustomisasi gaya global di editor tema dan mendukung pengaturan aturan pengurutan default di blok detail, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/en/blog/v1.9.24)

*Tanggal rilis: 2025-12-09*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana komponen `RemoteSelect` salah memuat rekaman saat nilainya null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) oleh @mytharcher
- **[Bidang Koleksi: Urutan]** Meningkatkan ketahanan plugin-field-sequence saat menangani perintah perbaikan ([#8139](https://github.com/nocobase/nocobase/pull/8139)) oleh @cgyrock
- **[Notifikasi: Email]** memperbaiki batasan koneksi notifikasi email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) oleh @jiannx

### [v1.9.23](https://www.nocobase.com/en/blog/v1.9.23)

*Tanggal rilis: 2025-12-09*

### 🚀 Peningkatan

- **[auth]** Memperbaiki [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) oleh @2013xile
- **[Aksi: Impor rekaman]** mengizinkan pemilihan ID untuk bidang impor ([#8132](https://github.com/nocobase/nocobase/pull/8132)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana alur kerja yang dipicu tidak ditambahkan ke antrian pemrosesan setelah mengimpor data, memastikan bahwa alur kerja berjalan seperti yang diharapkan segera setelah impor ([#8121](https://github.com/nocobase/nocobase/pull/8121)) oleh @mytharcher

### [v1.9.21](https://www.nocobase.com/en/blog/v1.9.21)

*Tanggal rilis: 2025-12-07*

### 🚀 Peningkatan

- **[Log Audit]** Memperbarui bidang pengidentifikasi unik menjadi `teks` untuk mencegah luapan panjang pengidentifikasi selama pengeditan massal oleh @2013xile

### 🐛 Perbaikan Bug

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana tidak ada data saat memuat persetujuan terkait dengan variabel lingkup ACL oleh @mytharcher

### [v1.9.20](https://www.nocobase.com/en/blog/v1.9.20)

*Tanggal rilis: 2025-12-05*

### 🎉 Fitur Baru

- **[Bidang Koleksi: Urutan]** Memperbarui bidang urutan secara otomatis setelah migrasi data ([#8063](https://github.com/nocobase/nocobase/pull/8063)) oleh @cgyrock

### 🚀 Peningkatan

- **[Manajer migrasi]** Memperbarui bidang urutan secara otomatis setelah migrasi data oleh @cgyrock

### 🐛 Perbaikan Bug

- **[Alur Kerja]** Memperbaiki masalah di mana kesalahan muncul di kanvas eksekusi saat node dihapus ([#8090](https://github.com/nocobase/nocobase/pull/8090)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana kesalahan muncul saat memuat persetujuan terkait dalam mode peran gabungan saja oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/en/blog/v1.9.0-beta.18)

*Tanggal rilis: 2025-12-09*

### 🎉 Fitur Baru

- **[Bidang Koleksi: Urutan]** Memperbarui bidang urutan secara otomatis setelah migrasi data ([#8063](https://github.com/nocobase/nocobase/pull/8063)) oleh @cgyrock
- **[Sumber Data: REST API]** menambahkan opsi `pengubah pesan kesalahan` dalam konfigurasi sumber data api restful oleh @cgyrock
- **[Auth: OIDC]** Mendukung pengalihan otomatis ke URL SSO saat tidak terautentikasi oleh @heziqiang

### 🚀 Peningkatan

- **[auth]** Memperbaiki [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) oleh @2013xile
- **[klien]**

  - menampilkan opsi yang diciutkan saat diarahkan di komponen Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) oleh @katherinehhh
  - mengoptimalkan pesan validasi untuk sub-tabel ([#8001](https://github.com/nocobase/nocobase/pull/8001)) oleh @katherinehhh
  - Menambahkan status pemuatan untuk tombol aksi perbarui rekaman dan hancurkan rekaman, hindari permintaan duplikat ([#7964](https://github.com/nocobase/nocobase/pull/7964)) oleh @mytharcher
  - Gunakan kurung kurawal tiga (`{{{` dan `}}}`) untuk variabel dalam konten pesan, untuk menghindari variabel di-escape oleh Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) oleh @mytharcher
- **[Aksi: Impor rekaman]** mengizinkan pemilihan ID untuk bidang impor ([#8132](https://github.com/nocobase/nocobase/pull/8132)) oleh @katherinehhh
- **[Alur Kerja]** Menambahkan konteks sumber data "utama" untuk UserSelect, untuk menyediakan komponen yang lebih umum yang dapat digunakan di tempat lain ([#8010](https://github.com/nocobase/nocobase/pull/8010)) oleh @mytharcher
- **[Bidang Koleksi: Markdown(Vditor)]** menyesuaikan lebar konten layar penuh vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) oleh @katherinehhh
- **[Manajer tugas asinkron]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron untuk memberikan pengguna alasan spesifik untuk kegagalan tugas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) oleh @mytharcher
- **[Aksi: Impor rekaman Pro]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron untuk memberikan pengguna alasan spesifik untuk kegagalan tugas oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki pemilihan variabel di AssigneeSelect, batasi hanya PK atau FK dari koleksi pengguna yang dapat dipilih oleh @mytharcher
  - Gunakan komponen umum untuk mengurangi kode duplikat oleh @mytharcher
  - Membuat payload dari eksekusi manual (atau dipicu oleh node sub-alur) kompatibel dengan rekaman atau kunci utama. Hindari masalah konsistensi dalam konteks pemicu. oleh @mytharcher
  - Mengurangi asosiasi yang dimuat di popup persetujuan, untuk memberikan kinerja yang lebih baik oleh @mytharcher
- **[Log Audit]** Memperbarui bidang pengidentifikasi unik menjadi `teks` untuk mencegah luapan panjang pengidentifikasi selama pengeditan massal oleh @2013xile
- **[Manajer migrasi]** Memperbarui bidang urutan secara otomatis setelah migrasi data oleh @cgyrock

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana alur kerja yang dipicu tidak ditambahkan ke antrian pemrosesan setelah mengimpor data, memastikan bahwa alur kerja berjalan seperti yang diharapkan segera setelah impor ([#8121](https://github.com/nocobase/nocobase/pull/8121)) oleh @mytharcher
- **[acl]** Memperbaiki masalah di mana info meta ACL salah ketika lingkup izin sumber data eksternal menggunakan variabel terkait pengguna saat ini ([#8013](https://github.com/nocobase/nocobase/pull/8013)) oleh @2013xile
- **[klien]**

  - Memperbaiki bug muat lambat di Variable.Input, yang akan menyebabkan menu opsi variabel di-render ulang secara tidak benar ([#8009](https://github.com/nocobase/nocobase/pull/8009)) oleh @mytharcher
  - menyelesaikan kesalahan saat menambahkan rekaman anak di blok tabel pohon asosiasi ([#7989](https://github.com/nocobase/nocobase/pull/7989)) oleh @katherinehhh
  - Memperbaiki masalah kedipan pada kotak pilih dropdown aturan tautan ([#8018](https://github.com/nocobase/nocobase/pull/8018)) oleh @zhangzhonghe
  - Hindari kesalahan yang muncul saat membuka pengaturan nilai default ([#7997](https://github.com/nocobase/nocobase/pull/7997)) oleh @mytharcher
  - Memperbaiki masalah perutean saat menggunakan Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) oleh @zhangzhonghe
  - memperbaiki remote select tidak menampilkan label yang benar untuk nilai non-objek ([#7975](https://github.com/nocobase/nocobase/pull/7975)) oleh @katherinehhh
- **[database]** Perbaikan: hapus pemrosesan UTC dalam konversi waktu untuk bidang hanya waktu untuk mencegah pergeseran yang disebabkan oleh zona waktu. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) oleh @ChimingLiu
- **[Aksi: Impor rekaman]**

  - Bidang yang diimpor tidak cocok dengan bidang yang ditetapkan di pengaturan ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) oleh @2013xile
  - Memperbaiki masalah di mana kesalahan muncul saat bidang dalam xlsx yang diimpor memiliki nilai `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) oleh @mytharcher
  - Memperbaiki masalah saat mengimpor data di tabel pohon ([#7976](https://github.com/nocobase/nocobase/pull/7976)) oleh @cgyrock
- **[Alur Kerja]**

  - Memperbaiki masalah di mana halaman eksekusi melempar kesalahan saat pekerjaan di node tidak terdefinisi ([#8066](https://github.com/nocobase/nocobase/pull/8066)) oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan muncul di kanvas eksekusi saat node dihapus ([#8090](https://github.com/nocobase/nocobase/pull/8090)) oleh @mytharcher
  - Memperbaiki masalah di mana antrian ditutup sebelum pesan dipublikasikan ([#8003](https://github.com/nocobase/nocobase/pull/8003)) oleh @mytharcher
  - Memperbaiki masalah di mana eksekusi yang disiapkan tidak dikirim ke antrian sebelum berhenti ([#7981](https://github.com/nocobase/nocobase/pull/7981)) oleh @mytharcher
  - Memperbaiki masalah di mana beberapa menu tugas alur kerja tidak ditampilkan ([#7980](https://github.com/nocobase/nocobase/pull/7980)) oleh @mytharcher
  - Memperbaiki masalah di mana tautan tugas mengarah ke halaman kesalahan ([#7983](https://github.com/nocobase/nocobase/pull/7983)) oleh @mytharcher
  - Memperbaiki jumlah tugas tidak ditampilkan yang disebabkan oleh penyalahgunaan penyedia ([#7968](https://github.com/nocobase/nocobase/pull/7968)) oleh @mytharcher
- **[Manajer multi-aplikasi]** Pengaturan tingkat log tidak diterapkan ke sub-aplikasi ([#8045](https://github.com/nocobase/nocobase/pull/8045)) oleh @2013xile
- **[Kontrol akses]** Menambahkan middleware untuk pemeriksaan izin pada operasi asosiasi untuk sumber data eksternal ([#8062](https://github.com/nocobase/nocobase/pull/8062)) oleh @2013xile
- **[Bidang Koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana bidang array m2m di sub-tabel tidak dapat diperbarui ([#7998](https://github.com/nocobase/nocobase/pull/7998)) oleh @cgyrock
- **[Editor tema]** Mengaktifkan pengalih tema pada perangkat seluler ([#8046](https://github.com/nocobase/nocobase/pull/8046)) oleh @zhangzhonghe
- **[Visualisasi data]**

  - Pengaturan bidang filter untuk koleksi sumber data eksternal tidak menampilkan properti tertentu ([#7982](https://github.com/nocobase/nocobase/pull/7982)) oleh @2013xile
  - Menyelesaikan masalah di mana kueri bagan tidak mendukung lingkup data ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) oleh @2013xile
- **[Koleksi: Pohon]** Memperbaiki kegagalan pembaruan tabel jalur yang disebabkan oleh pencarian bidang induk pohon yang salah ([#8000](https://github.com/nocobase/nocobase/pull/8000)) oleh @2013xile
- **[Alur Kerja: Node manual]** Memperbaiki masalah di mana jumlah tugas manual tidak benar ([#7984](https://github.com/nocobase/nocobase/pull/7984)) oleh @mytharcher
- **[Manajer tugas asinkron]** Menambahkan aturan migrasi untuk koleksi `asyncTasks`, hindari rekaman tugas asinkron untuk dimigrasi ([#7950](https://github.com/nocobase/nocobase/pull/7950)) oleh @mytharcher
- **[Manajer sumber data]** Memperbaiki kegagalan pembaruan kata sandi sumber data saat kata sandi basis data diubah ([#7977](https://github.com/nocobase/nocobase/pull/7977)) oleh @cgyrock
- **[Departemen]** Memperbaiki masalah di mana bidang terkait departemen tidak dapat diedit ([#7462](https://github.com/nocobase/nocobase/pull/7462)) oleh @heziqiang
- **[Alur Kerja: Sub-alur]** Memperbaiki masalah alur kerja yang dipilih menampilkan "N/A" saat jumlah alur kerja lebih besar dari 200 oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki file bahasa oleh @mytharcher
  - Memperbaiki masalah di mana rekaman persetujuan tidak disertakan dalam hasil pekerjaan di cabang pengembalian oleh @mytharcher
  - Memperbaiki masalah di mana tidak ada data saat memuat persetujuan terkait dengan variabel lingkup ACL oleh @mytharcher
  - Memperbaiki masalah izin saat mendapatkan `approvalRecords.reassignee` karena `RemoteSelect` berubah oleh @mytharcher
  - Memperbaiki masalah di mana aksi cetak tidak berfungsi saat menyegarkan halaman dengan modal terbuka oleh @mytharcher
  - Menambahkan migrasi untuk menghindari kesalahan rekaman duplikat saat menambahkan indeks oleh @mytharcher
  - Memperbaiki masalah di mana proses tidak benar saat bercabang dengan urutan dan tanda tangan balas oleh @mytharcher
  - Memperbaiki masalah di mana komentar dalam hasil pekerjaan adalah null setelah pengguna mengirimkan persetujuan dengan komentar oleh @mytharcher
  - Memperbaiki tidak ada data pemohon dalam konteks eksekusi setelah pengguna mengirimkan ulang oleh @mytharcher
  - Memperbaiki masalah kesalahan izin yang muncul saat memuat persetujuan terkait rekaman di laci detail oleh @mytharcher
  - Memperbaiki masalah di mana jendela pop-up penyetuju tidak menampilkan judul oleh @zhangzhonghe
  - Memperbaiki masalah di mana kesalahan muncul saat memuat persetujuan terkait dalam mode peran gabungan saja oleh @mytharcher
  - Memperbaiki masalah saat daftar persetujuan OOM terjadi oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/en/blog/v2.0.0-alpha.52)

*Tanggal rilis: 2025-12-07*

### 🎉 Fitur Baru

- **[klien]** menambahkan dukungan untuk pengaturan tambah/pilih/lepaskan asosiasi di subform ke-banyak ([#8099](https://github.com/nocobase/nocobase/pull/8099)) oleh @katherinehhh
- **[Sumber Data: REST API]** menambahkan opsi `pengubah pesan kesalahan` dalam konfigurasi sumber data api restful oleh @cgyrock

### 🚀 Peningkatan

- **[auth]** Memperbaiki [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) oleh @2013xile
- **[Aksi: Impor rekaman]**

  - mengizinkan pemilihan ID untuk bidang impor ([#8133](https://github.com/nocobase/nocobase/pull/8133)) oleh @katherinehhh
  - mengizinkan pemilihan ID untuk bidang impor ([#8132](https://github.com/nocobase/nocobase/pull/8132)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]** Mengubah API untuk mendapatkan satu item persetujuan, dan menyederhanakan kode oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki mencegah status nonaktif anak memblokir pemilihan bidang relasi ([#8131](https://github.com/nocobase/nocobase/pull/8131)) oleh @katherinehhh
  - Memperbaiki masalah di mana komponen `RemoteSelect` salah memuat rekaman saat nilainya null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) oleh @mytharcher
  - Memperbaiki masalah di mana lebar komponen UI tidak konsisten saat memilih "Masa Lalu" atau "Berikutnya" untuk bidang filter tanggal. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) oleh @gchust
  - Memperbaiki masalah di mana label bidang default di blok formulir filter tidak dapat diterjemahkan dengan benar dalam beberapa bahasa. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) oleh @gchust
  - Memperbaiki masalah di mana gaya judul dan deskripsi blok JS tidak konsisten dengan blok lainnya. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) oleh @gchust
  - memperbaiki sub-tabel bersarang di subform tidak menampilkan data ([#8117](https://github.com/nocobase/nocobase/pull/8117)) oleh @katherinehhh
  - memperbaiki masalah pemutusan baris tooltip bidang teks panjang ([#8122](https://github.com/nocobase/nocobase/pull/8122)) oleh @katherinehhh
  - Memperbaiki masalah di mana data yang dapat dipilih untuk bidang asosiasi di blok formulir filter tidak benar. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) oleh @gchust
  - Memperbaiki masalah di mana opsi yang dapat dipilih tidak terdaftar sepenuhnya saat menggunakan operator "adalah salah satu dari" atau "bukan salah satu dari" untuk pemfilteran bidang berbasis opsi. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) oleh @gchust
  - Memperbaiki masalah di mana konfigurasi bidang khusus dalam filter form tidak diisi sebelumnya dengan benar dan beberapa pengaturan tidak berlaku. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) oleh @gchust
  - Memperbaiki masalah di mana membersihkan nilai filter waktu antara dan memicu filter lagi menyebabkan kesalahan. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) oleh @gchust
  - Memperbaiki masalah di mana nilai bidang angka tidak diisi sebelumnya dengan benar di aksi filter. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) oleh @gchust
  - Memperbaiki masalah di mana beberapa operator bidang dalam formulir filter gagal memfilter data dengan benar. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) oleh @gchust
  - Memperbaiki masalah di mana pemfilteran pada bidang Checkbox tidak berpengaruh. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) oleh @gchust
- **[flow-engine]**

  - perbaikan: konversi yang salah saat menggunakan tipe integer sebagai opsi enum ([#8138](https://github.com/nocobase/nocobase/pull/8138)) oleh @chenos
  - Memperbaiki item menu sub-model yang dapat dialihkan gagal saat `useModel` dihilangkan dengan menyimpulkannya dari `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) oleh @zhangzhonghe
- **[server]** Memperbaiki masalah di mana alur kerja yang dipicu tidak ditambahkan ke antrian pemrosesan setelah mengimpor data, memastikan bahwa alur kerja berjalan seperti yang diharapkan segera setelah impor ([#8121](https://github.com/nocobase/nocobase/pull/8121)) oleh @mytharcher
- **[Notifikasi: Email]** memperbaiki batasan koneksi notifikasi email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) oleh @jiannx
- **[Bidang Koleksi: Rumus]** Memperbaiki masalah di mana bidang rumus di aksi filter dan blok formulir filter tidak dapat mengetik nilai input. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) oleh @gchust
- **[Multi-ruang]** Memperbaiki pembuatan bidang lain di koleksi sistem oleh @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/en/blog/v2.0.0-alpha.51)

*Tanggal rilis: 2025-12-07*

### 🎉 Fitur Baru

- **[klien]**

  - Mendukung penyesuaian gaya global di editor tema ([#7960](https://github.com/nocobase/nocobase/pull/7960)) oleh @ljmiaoo
  - Mendukung pengaturan aturan pengurutan default di blok detail ([#8070](https://github.com/nocobase/nocobase/pull/8070)) oleh @katherinehhh
  - Mendukung pengaturan tipe data untuk bidang Angka (opsi: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) oleh @chenos
- **[Bidang Koleksi: Urutan]** Memperbarui bidang urutan secara otomatis setelah migrasi data ([#8063](https://github.com/nocobase/nocobase/pull/8063)) oleh @cgyrock

### 🚀 Peningkatan

- **[klien]**

  - memperbaiki lompatan paginasi sub-tabel setelah penghapusan baris dan menambahkan dukungan untuk aturan validasi kolom ([#8094](https://github.com/nocobase/nocobase/pull/8094)) oleh @katherinehhh
  - menyesuaikan tampilan bidang besar di sub-tabel yang dapat diedit ([#8078](https://github.com/nocobase/nocobase/pull/8078)) oleh @katherinehhh
  - mendukung elipsis untuk konten bidang JSON yang meluap ([#8067](https://github.com/nocobase/nocobase/pull/8067)) oleh @katherinehhh
- **[flow-engine]**

  - Menambahkan opsi useCache ke FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) oleh @zhangzhonghe
  - Menambahkan metode `removeModelWithSubModels` untuk menghapus model dan sub-modelnya secara rekursif ([#8064](https://github.com/nocobase/nocobase/pull/8064)) oleh @zhangzhonghe
- **[Blok: GridCard]** menambahkan konfigurasi jumlah baris ke kartu grid dan mengganti pageSize dengan perhitungan otomatis ([#8055](https://github.com/nocobase/nocobase/pull/8055)) oleh @katherinehhh
- **[Log Audit]** Memperbarui bidang pengidentifikasi unik menjadi `teks` untuk mencegah luapan panjang pengidentifikasi selama pengeditan massal oleh @2013xile
- **[Manajer migrasi]** Memperbarui bidang urutan secara otomatis setelah migrasi data oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana bidang yang dikonfigurasi dari blok yang dihapus tidak dihapus dari blok filter. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) oleh @gchust
  - memperbaiki celah ruang ekstra saat tombol disembunyikan dalam mode non-konfigurasi ([#8092](https://github.com/nocobase/nocobase/pull/8092)) oleh @katherinehhh
  - Memperbaiki masalah di mana teks tombol reset di blok formulir filter tidak dapat dimodifikasi. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) oleh @gchust
  - Memperbaiki masalah di mana input bidang tidak mendukung beberapa nilai saat menggunakan operator \$in / \$notIn untuk memfilter bidang. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) oleh @gchust
  - Memperbaiki masalah di mana blok data yang baru ditambahkan tidak secara otomatis muncul di menu bidang blok formulir filter. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) oleh @gchust
  - Menu konfigurasi untuk bidang asosiasi dalam formulir filter tidak boleh menampilkan opsi buat cepat. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) oleh @gchust
  - memperbaiki masalah data sub-tabel asosiasi di blok Daftar ([#8082](https://github.com/nocobase/nocobase/pull/8082)) oleh @katherinehhh
  - memperbaiki aturan validasi bidang numerik dari pengaturan koleksi tidak diterapkan ([#8025](https://github.com/nocobase/nocobase/pull/8025)) oleh @katherinehhh
  - Memperbaiki masalah di mana bidang dalam formulir filter dibatasi oleh aturan validasi backend untuk bidang. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) oleh @gchust
  - masalah edit cepat bidang json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) oleh @katherinehhh
  - memperbaiki masalah tampilan bidang besar di edit sub-tabel ([#8069](https://github.com/nocobase/nocobase/pull/8069)) oleh @katherinehhh
  - memperbaiki buat cepat melempar kesalahan saat allowMultiple dinonaktifkan di pilih rekaman asosiasi ([#8034](https://github.com/nocobase/nocobase/pull/8034)) oleh @katherinehhh
  - memperbaiki bidang json harus dikirimkan sebagai objek ([#8057](https://github.com/nocobase/nocobase/pull/8057)) oleh @katherinehhh
  - Memperbaiki masalah di mana tombol enter tidak dapat digunakan untuk memicu aksi filter. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) oleh @gchust
- **[flow-engine]**

  - Memperbaiki masalah di mana opsi konfigurasi dari komponen sebelumnya tetap terlihat di menu setelah mengganti komponen bidang. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) oleh @gchust
  - Memindahkan useEffect sebelum pengembalian bersyarat di FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana bidang asosiasi yang tidak didukung muncul di bidang operasi filter. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) oleh @gchust
- **[acl]** perbaikan: acl.allow dieksekusi terlalu awal ([#8065](https://github.com/nocobase/nocobase/pull/8065)) oleh @chenos
- **[Manajer file]**

  - Memperbaiki tampilan data sub-detail yang salah di blok Daftar dan Kartu Grid ([#8087](https://github.com/nocobase/nocobase/pull/8087)) oleh @katherinehhh
  - Memperbaiki bidang lampiran tidak ditampilkan dengan benar di readPretty subtable ([#8073](https://github.com/nocobase/nocobase/pull/8073)) oleh @katherinehhh
- **[Alur Kerja]**

  - Memperbaiki masalah di mana kesalahan muncul di kanvas eksekusi saat node dihapus ([#8090](https://github.com/nocobase/nocobase/pull/8090)) oleh @mytharcher
  - Memperbaiki masalah di mana halaman eksekusi melempar kesalahan saat pekerjaan di node tidak terdefinisi ([#8066](https://github.com/nocobase/nocobase/pull/8066)) oleh @mytharcher
- **[Bidang Koleksi: Rumus]** Memperbaiki masalah di mana bidang rumus tidak dapat ditambahkan ke blok formulir filter. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) oleh @gchust
- **[Blok: Panel aksi]** mengoptimalkan gaya di tata letak Daftar blok panel aksi ([#8084](https://github.com/nocobase/nocobase/pull/8084)) oleh @katherinehhh
- **[Karyawan AI]**

  - Menyelesaikan masalah di mana nama peran sumber data tidak dikompilasi ([#8076](https://github.com/nocobase/nocobase/pull/8076)) oleh @heziqiang
  - Memperbaiki masalah di mana beberapa bidang rekaman saat ini tidak dapat ditampilkan di komponen pemilihan variabel. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) oleh @gchust
- **[Aksi: Impor rekaman]** Bidang yang diimpor tidak cocok dengan bidang yang ditetapkan di pengaturan ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) oleh @2013xile
- **[Kontrol akses]** Menambahkan middleware untuk pemeriksaan izin pada operasi asosiasi untuk sumber data eksternal ([#8062](https://github.com/nocobase/nocobase/pull/8062)) oleh @2013xile
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana tidak ada data saat memuat persetujuan terkait dengan variabel lingkup ACL oleh @mytharcher
  - Memperbaiki masalah data yang diisi menghilang di formulir penyetuju oleh @mytharcher
  - Memperbaiki masalah kesalahan izin yang muncul saat memuat persetujuan terkait rekaman di laci detail oleh @mytharcher
  - Memperbaiki masalah di mana proses tidak benar saat bercabang dengan urutan dan tanda tangan balas oleh @mytharcher
  - Memperbaiki masalah saat daftar persetujuan OOM terjadi oleh @mytharcher
  - Memperbaiki masalah di mana rekaman persetujuan tidak disertakan dalam hasil pekerjaan di cabang pengembalian oleh @mytharcher
  - Memperbaiki masalah di mana jendela pop-up penyetuju tidak menampilkan judul oleh @zhangzhonghe
  - Memperbaiki masalah di mana kesalahan muncul saat memuat persetujuan terkait dalam mode peran gabungan saja oleh @mytharcher
- **[Manajer email]**

  - Menangani data abnormal oleh @jiannx
  - tidak menyinkronkan status terjadwal gmail oleh @jiannx
