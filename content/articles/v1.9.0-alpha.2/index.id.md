---
title: "NocoBase v1.9.0-alpha.2: Dukungan untuk mengonfigurasi rahasia auth independen untuk sub-aplikasi"
description: "Catatan Rilis v1.9.0-alpha.2"
---

### 🎉 Fitur Baru

- **[Multi-app manager]** Mendukung konfigurasi rahasia otentikasi independen untuk sub-aplikasi ([#7197](https://github.com/nocobase/nocobase/pull/7197)) oleh @mytharcher

- **[Workflow: CC]** Menambahkan node CC ke workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) oleh @mytharcher

- **[Workflow: Approval]** Menambahkan penginisialisasi untuk pemicu oleh @mytharcher

### 🚀 Peningkatan

- **[Field koleksi: Formula]** Menambahkan lebih banyak antarmuka yang dapat dihitung ([#7215](https://github.com/nocobase/nocobase/pull/7215)) oleh @mytharcher

- **[Workflow]**
  - Menggunakan pencatatan log alih-alih melempar error ketika eksekusi seharusnya tidak berjalan karena status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) oleh @mytharcher

  - Mengonversi operan menjadi string sebelum perbandingan string dalam perhitungan logika ([#7190](https://github.com/nocobase/nocobase/pull/7190)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]** Mengoptimalkan ukuran font untuk halaman pesan seluler ([#7199](https://github.com/nocobase/nocobase/pull/7199)) oleh @zhangzhonghe

- **[Multi-app manager]**
  - Menambahkan opsi basis data dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher

  - Menambahkan opsi basis data dan otorisasi untuk sub-aplikasi ([#7184](https://github.com/nocobase/nocobase/pull/7184)) oleh @mytharcher

- **[Field koleksi: Kode]** Menambahkan pengaturan indentasi oleh @mytharcher

- **[Workflow: Approval]** Mendukung penghapusan persetujuan ketika data terkait dihapus oleh @mytharcher

- **[Auth: DingTalk]** Mendukung konfigurasi protokol dan nomor port URL callback oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**
  - Masalah di mana field lampiran tidak dapat dipilih sebagai variabel dalam aturan tautan ([#7213](https://github.com/nocobase/nocobase/pull/7213)) oleh @zhangzhonghe

  - Filter collapse: Filter tidak terpicu selama inisialisasi halaman setelah menetapkan nilai default untuk field ([#7206](https://github.com/nocobase/nocobase/pull/7206)) oleh @zhangzhonghe

  - Masalah tampilan untuk field asosiasi dalam aturan tautan ([#7220](https://github.com/nocobase/nocobase/pull/7220)) oleh @katherinehhh

  - Penetapan nilai gagal dalam formulir edit ketika nilai dan opsi diatur untuk field pilihan ([#7209](https://github.com/nocobase/nocobase/pull/7209)) oleh @katherinehhh

  - Error saat menetapkan nilai di blok daftar menggunakan field urutan kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) oleh @katherinehhh

  - Aksi popup: Tampilan halaman tidak sesuai harapan setelah mengganti tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) oleh @zhangzhonghe

  - Judul tab browser tidak tersinkronisasi saat berpindah antar submenu ([#7207](https://github.com/nocobase/nocobase/pull/7207)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana komponen pilihan dropdown terhalang oleh keyboard di iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) oleh @zhangzhonghe

  - Tampilan field kotak centang salah dalam koleksi field asosiasi di dalam formulir ([#7176](https://github.com/nocobase/nocobase/pull/7176)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana mengklik tombol tidak dapat membuka popup ([#7180](https://github.com/nocobase/nocobase/pull/7180)) oleh @zhangzhonghe

- **[acl]** Memperbaiki error saat menghapus peran di bawah mode gabungan peran yang menyertakan peran root. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) oleh @aaaaaajie

- **[database]** Memperbaiki masalah di mana field dari tampilan tidak ditampilkan di blok. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) oleh @aaaaaajie

- **[Multi-app manager]** Memperbaiki opsi auth di posisi yang tidak diharapkan ([#7210](https://github.com/nocobase/nocobase/pull/7210)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki stempel waktu BigInt dalam format string yang menyebabkan masalah dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) oleh @mytharcher

- **[Otentikasi]** Memperbaiki masalah di mana halaman login tidak bisa di-scroll ([#7159](https://github.com/nocobase/nocobase/pull/7159)) oleh @zhangzhonghe

- **[Aksi: Permintaan kustom]** Masalah penguraian variabel di URL selama navigasi rute setelah permintaan kustom berhasil ([#7186](https://github.com/nocobase/nocobase/pull/7186)) oleh @katherinehhh

- **[Blok: Kanban]** Memperbaiki masalah UI sub-tabel di Kanban dan menambahkan dukungan untuk pengaturan lebar kolom Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) oleh @katherinehhh

- **[Workflow: Node manual]** Memperbaiki error yang muncul saat menggunakan variabel ([#7177](https://github.com/nocobase/nocobase/pull/7177)) oleh @mytharcher

- **[Cetak template]** Menambahkan skrip migrasi ke field rootDataType oleh @jiannx

- **[Workflow: Approval]**
  - Memperbaiki asosiasi saat mengirimkan persetujuan oleh @mytharcher

  - Memperbaiki pengecualian saat menghapus rekaman oleh @mytharcher

  - Memperbaiki cabang yang disetujui tidak berjalan ketika tidak ada penugasan oleh @mytharcher

  - Untuk menghindari error ketika pengguna tidak ada oleh @mytharcher

  - Memperbaiki bug blok dan asosiasi oleh @mytharcher

  - Menambahkan `try/catch` dalam migrasi saat memperbarui skema UI oleh @mytharcher

  - Memuat ulang asosiasi pada rekaman oleh @mytharcher
