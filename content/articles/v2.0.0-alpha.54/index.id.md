---
title: "NocoBase v2.0.0-alpha.54: Saat membuat koleksi, tipe field id preset dapat diubah"
description: "Catatan Rilis v2.0.0-alpha.54"
---

### 🎉 Fitur Baru

- **[client]** Saat membuat koleksi, tipe field id preset dapat diubah ([#8129](https://github.com/nocobase/nocobase/pull/8129)) oleh @cgyrock

### 🚀 Peningkatan

- **[client]**
  - mengubah lebar kolom tabel menjadi opsi yang dapat dipilih ([#8188](https://github.com/nocobase/nocobase/pull/8188)) oleh @katherinehhh

  - meningkatkan gaya recordPicker dengan maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) oleh @katherinehhh

  - mengoptimalkan opsi konfigurasi (Blok, Field, Aksi) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) oleh @katherinehhh

- **[Penanganan error]** Tidak mengekspos pesan error database mentah pada kesalahan sintaks SQL, untuk menghindari pengungkapan tipe database ([#8195](https://github.com/nocobase/nocobase/pull/8195)) oleh @2013xile

- **[Blok: Peta]** mendukung elipsis teks overflow untuk field peta dalam mode tampilan teks ([#8189](https://github.com/nocobase/nocobase/pull/8189)) oleh @katherinehhh

- **[Workflow]** Mendukung penggunaan konfigurasi lama untuk membuat baru dalam workflow duplikat ([#8165](https://github.com/nocobase/nocobase/pull/8165)) oleh @mytharcher

- **[Kontrol akses]** Melarang penugasan peran root kepada pengguna ([#8180](https://github.com/nocobase/nocobase/pull/8180)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**
  - memperbaiki tombol submit tidak muncul di form buat ketika peran memiliki izin buat ([#8190](https://github.com/nocobase/nocobase/pull/8190)) oleh @katherinehhh

  - mencegah data subtable/subform yang ada terhapus saat submit tanpa memilih item apapun ([#8172](https://github.com/nocobase/nocobase/pull/8172)) oleh @katherinehhh

  - mencegah pengaturan Cakupan data muncul di konfigurasi form buat ([#8176](https://github.com/nocobase/nocobase/pull/8176)) oleh @katherinehhh

  - Gagal menyimpan alur event tab ([#8168](https://github.com/nocobase/nocobase/pull/8168)) oleh @chenos

  - menghapus spasi ekstra setelah tab disembunyikan ([#8167](https://github.com/nocobase/nocobase/pull/8167)) oleh @chenos

  - memperbaiki pemfilteran opsi yang dipilih yang salah pada pilihan record asosiasi ([#8151](https://github.com/nocobase/nocobase/pull/8151)) oleh @katherinehhh

  - Memperbaiki masalah rendering field tableoid di blok form ([#8177](https://github.com/nocobase/nocobase/pull/8177)) oleh @katherinehhh

- **[server]**
  - Memperbarui license-kit ke versi terbaru ([#8173](https://github.com/nocobase/nocobase/pull/8173)) oleh @jiannx

  - Mendukung field Snowflake ID (53-bit) untuk sumber data eksternal ([#8185](https://github.com/nocobase/nocobase/pull/8185)) oleh @2013xile

- **[Blok: Peta]** memperbaiki level zoom peta yang salah setelah perpindahan menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) oleh @katherinehhh

- **[Workflow]** Memperbaiki masalah di mana hanya satu record yang ditampilkan dalam daftar record untuk dieksekusi secara manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) oleh @mytharcher

- **[Visualisasi data]** Menyelesaikan masalah tentang mode SQL memilih sumber data eksternal; <br/>Menyelesaikan masalah tentang status pemuatan blok chart selama pengambilan data; <br/>Menyelesaikan masalah tentang pembatalan konfigurasi blok chart kosong; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) oleh @heziqiang

- **[Karyawan AI]** Menyelesaikan masalah tentang pemutusan baris pesan ai ([#8096](https://github.com/nocobase/nocobase/pull/8096)) oleh @heziqiang

- **[Pengaturan lisensi]**
  - memperbaiki pengecualian build ts plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) oleh @jiannx

  - optimasi lisensi dan penambahan informasi petunjuk ([#7993](https://github.com/nocobase/nocobase/pull/7993)) oleh @jiannx

- **[Manajer file]** Memperbaiki masalah di mana pratinjau file `.txt` di OSS mendapatkan charset yang salah ([#8161](https://github.com/nocobase/nocobase/pull/8161)) oleh @mytharcher

- **[Sumber data: SQL Server Eksternal]** Memperbaiki masalah di mana opsi `encrypt` dan `trustServerCertificate` tidak tersedia oleh @2013xile

- **[Koleksi: Hubungkan ke data asing (FDW)]** Memperbaiki masalah di mana pemuatan gagal untuk tabel dengan nama huruf kapital oleh @2013xile

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana status catatan persetujuan yang tidak terkait secara salah diubah menjadi `UNPROCESSED` oleh aksi approve oleh @mytharcher
