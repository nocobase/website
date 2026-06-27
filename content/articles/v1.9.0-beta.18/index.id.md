---
title: "NocoBase v1.9.0-beta.18: Memperbarui bidang urutan secara otomatis setelah migrasi data"
description: "Catatan Rilis v1.9.0-beta.18"
---

### 🎉 Fitur Baru

- **[Bidang koleksi: Urutan]** Memperbarui bidang urutan secara otomatis setelah migrasi data ([#8063](https://github.com/nocobase/nocobase/pull/8063)) oleh @cgyrock

- **[Sumber data: REST API]** menambahkan opsi `error message transformer` dalam konfigurasi sumber data restful api oleh @cgyrock

- **[Auth: OIDC]** Mendukung pengalihan otomatis ke URL SSO saat tidak terautentikasi oleh @heziqiang

### 🚀 Peningkatan

- **[auth]** Memperbaiki [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) oleh @2013xile

- **[client]**
  - menampilkan opsi yang diciutkan saat dihover pada komponen Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) oleh @katherinehhh

  - mengoptimalkan pesan validasi untuk subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) oleh @katherinehhh

  - Menambahkan status loading untuk tombol aksi perbarui rekaman dan hapus rekaman, menghindari permintaan duplikat ([#7964](https://github.com/nocobase/nocobase/pull/7964)) oleh @mytharcher

  - Gunakan kurung kurawal tiga (`{{{` dan `}}}`) untuk variabel dalam konten pesan, untuk menghindari variabel di-escape oleh Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) oleh @mytharcher

- **[Aksi: Impor rekaman]** mengizinkan pemilihan ID untuk bidang impor ([#8132](https://github.com/nocobase/nocobase/pull/8132)) oleh @katherinehhh

- **[Workflow]** Menambahkan konteks sumber data "utama" untuk UserSelect, untuk menyediakan komponen yang lebih umum yang dapat digunakan di tempat lain ([#8010](https://github.com/nocobase/nocobase/pull/8010)) oleh @mytharcher

- **[Bidang koleksi: Markdown(Vditor)]** menyesuaikan lebar konten layar penuh vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) oleh @katherinehhh

- **[Manajer tugas asinkron]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron untuk memberikan alasan spesifik kepada pengguna atas kegagalan tugas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) oleh @mytharcher

- **[Aksi: Impor rekaman Pro]** Pesan kesalahan yang ditingkatkan untuk tugas asinkron untuk memberikan alasan spesifik kepada pengguna atas kegagalan tugas oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki pemilihan variabel di AssigneeSelect, membatasi hanya PK atau FK dari koleksi pengguna yang dapat dipilih oleh @mytharcher

  - Menggunakan komponen umum untuk mengurangi kode duplikat oleh @mytharcher

  - Membuat payload dari eksekusi manual (atau dipicu oleh node sub-flow) kompatibel dengan rekaman atau kunci utama. Hindari masalah konsistensi dalam konteks pemicu. oleh @mytharcher

  - Mengurangi asosiasi yang dimuat di popup persetujuan, untuk memberikan kinerja yang lebih baik oleh @mytharcher

- **[Log audit]** Memperbarui bidang pengidentifikasi unik menjadi `text` untuk mencegah luapan panjang pengidentifikasi selama pengeditan massal oleh @2013xile

- **[Manajer migrasi]** Memperbarui bidang urutan secara otomatis setelah migrasi data oleh @cgyrock

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana workflow yang dipicu tidak ditambahkan ke antrian pemrosesan setelah mengimpor data, memastikan workflow berjalan seperti yang diharapkan segera setelah impor ([#8121](https://github.com/nocobase/nocobase/pull/8121)) oleh @mytharcher

- **[acl]** Memperbaiki masalah di mana info meta ACL salah ketika lingkup izin sumber data eksternal menggunakan variabel terkait pengguna saat ini ([#8013](https://github.com/nocobase/nocobase/pull/8013)) oleh @2013xile

- **[client]**
  - Memperbaiki bug lazy load di Variable.Input, yang akan menyebabkan menu opsi variabel di-render ulang secara tidak benar ([#8009](https://github.com/nocobase/nocobase/pull/8009)) oleh @mytharcher

  - menyelesaikan kesalahan saat menambahkan rekaman anak di blok tabel pohon asosiasi ([#7989](https://github.com/nocobase/nocobase/pull/7989)) oleh @katherinehhh

  - Memperbaiki masalah kedipan pada kotak pilihan dropdown aturan tautan ([#8018](https://github.com/nocobase/nocobase/pull/8018)) oleh @zhangzhonghe

  - Menghindari kesalahan yang muncul saat membuka pengaturan nilai default ([#7997](https://github.com/nocobase/nocobase/pull/7997)) oleh @mytharcher

  - Memperbaiki masalah routing saat menggunakan Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) oleh @zhangzhonghe

  - memperbaiki remote select yang tidak menampilkan label yang benar untuk nilai non-objek ([#7975](https://github.com/nocobase/nocobase/pull/7975)) oleh @katherinehhh

- **[database]** Memperbaiki: menghapus pemrosesan UTC dalam konversi waktu untuk bidang hanya-waktu untuk mencegah pergeseran yang disebabkan oleh zona waktu. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) oleh @ChimingLiu

- **[Aksi: Impor rekaman]**
  - Bidang yang diimpor tidak cocok dengan bidang yang diatur dalam pengaturan ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) oleh @2013xile

  - Memperbaiki masalah di mana kesalahan muncul ketika bidang dalam xlsx yang diimpor memiliki nilai `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) oleh @mytharcher

  - Memperbaiki masalah saat mengimpor data di tabel pohon ([#7976](https://github.com/nocobase/nocobase/pull/7976)) oleh @cgyrock

- **[Workflow]**
  - Memperbaiki masalah di mana halaman eksekusi menampilkan kesalahan ketika jobs pada node tidak terdefinisi ([#8066](https://github.com/nocobase/nocobase/pull/8066)) oleh @mytharcher

  - Memperbaiki masalah di mana kesalahan muncul di kanvas eksekusi ketika node dihapus ([#8090](https://github.com/nocobase/nocobase/pull/8090)) oleh @mytharcher

  - Memperbaiki masalah di mana antrian ditutup sebelum pesan dipublikasikan ([#8003](https://github.com/nocobase/nocobase/pull/8003)) oleh @mytharcher

  - Memperbaiki masalah di mana eksekusi yang disiapkan tidak dikirim ke antrian sebelum berhenti ([#7981](https://github.com/nocobase/nocobase/pull/7981)) oleh @mytharcher

  - Memperbaiki masalah di mana beberapa menu tugas workflow tidak ditampilkan ([#7980](https://github.com/nocobase/nocobase/pull/7980)) oleh @mytharcher

  - Memperbaiki masalah di mana tautan tugas mengarah ke halaman kesalahan ([#7983](https://github.com/nocobase/nocobase/pull/7983)) oleh @mytharcher

  - Memperbaiki jumlah tugas yang tidak ditampilkan karena penyalahgunaan provider ([#7968](https://github.com/nocobase/nocobase/pull/7968)) oleh @mytharcher

- **[Manajer multi-aplikasi]** Pengaturan level log tidak diterapkan ke sub aplikasi ([#8045](https://github.com/nocobase/nocobase/pull/8045)) oleh @2013xile

- **[Kontrol akses]** Menambahkan middleware untuk pemeriksaan izin pada operasi asosiasi untuk sumber data eksternal ([#8062](https://github.com/nocobase/nocobase/pull/8062)) oleh @2013xile

- **[Bidang koleksi: Many to many (array)]** Memperbaiki masalah di mana bidang array m2m di subtable tidak dapat diperbarui ([#7998](https://github.com/nocobase/nocobase/pull/7998)) oleh @cgyrock

- **[Editor tema]** Mengaktifkan pengalih tema pada perangkat seluler ([#8046](https://github.com/nocobase/nocobase/pull/8046)) oleh @zhangzhonghe

- **[Visualisasi data]**
  - Pengaturan bidang filter untuk koleksi sumber data eksternal tidak menampilkan properti tertentu ([#7982](https://github.com/nocobase/nocobase/pull/7982)) oleh @2013xile

  - Menyelesaikan masalah di mana kueri bagan tidak mendukung lingkup data ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) oleh @2013xile

- **[Koleksi: Pohon]** Memperbaiki kegagalan pembaruan tabel jalur yang disebabkan oleh pencarian bidang induk pohon yang salah ([#8000](https://github.com/nocobase/nocobase/pull/8000)) oleh @2013xile

- **[Workflow: Node manual]** Memperbaiki masalah di mana jumlah tugas manual tidak benar ([#7984](https://github.com/nocobase/nocobase/pull/7984)) oleh @mytharcher

- **[Manajer tugas asinkron]** Menambahkan aturan migrasi untuk koleksi `asyncTasks`, hindari rekaman tugas asinkron untuk dimigrasi ([#7950](https://github.com/nocobase/nocobase/pull/7950)) oleh @mytharcher

- **[Manajer sumber data]** Memperbaiki kegagalan pembaruan kata sandi sumber data ketika kata sandi database diubah ([#7977](https://github.com/nocobase/nocobase/pull/7977)) oleh @cgyrock

- **[Departemen]** Memperbaiki masalah di mana bidang terkait departemen tidak dapat diedit ([#7462](https://github.com/nocobase/nocobase/pull/7462)) oleh @heziqiang

- **[Workflow: Subflow]** Memperbaiki masalah workflow yang dipilih menampilkan "N/A" ketika jumlah workflow lebih dari 200 oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki file bahasa oleh @mytharcher

  - Memperbaiki masalah di mana rekaman persetujuan tidak disertakan dalam hasil job di cabang pengembalian oleh @mytharcher

  - Memperbaiki masalah di mana tidak ada data saat memuat persetujuan terkait dengan variabel lingkup ACL oleh @mytharcher

  - Memperbaiki masalah izin saat mendapatkan `approvalRecords.reassignee` karena `RemoteSelect` berubah oleh @mytharcher

  - Memperbaiki masalah di mana aksi cetak tidak berfungsi saat menyegarkan halaman dengan modal terbuka oleh @mytharcher

  - Menambahkan migrasi untuk menghindari kesalahan rekaman duplikat saat menambahkan indeks oleh @mytharcher

  - Memperbaiki masalah di mana proses tidak benar saat bercabang dengan urutan dan tanda tangan bersama oleh @mytharcher

  - Memperbaiki masalah di mana komentar dalam hasil job adalah null setelah pengguna mengirimkan persetujuan dengan komentar oleh @mytharcher

  - Memperbaiki tidak ada data pemohon dalam konteks eksekusi setelah pengguna mengirimkan ulang oleh @mytharcher

  - Memperbaiki masalah kesalahan izin yang muncul saat memuat persetujuan terkait rekaman di drawer detail oleh @mytharcher

  - Memperbaiki masalah di mana jendela pop-up pemberi persetujuan tidak menampilkan judul oleh @zhangzhonghe

  - Memperbaiki masalah di mana kesalahan muncul saat memuat persetujuan terkait dalam mode peran union only oleh @mytharcher

  - Memperbaiki masalah saat daftar persetujuan OOM terjadi oleh @mytharcher
