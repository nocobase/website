---
title: "NocoBase v1.9.0-alpha.4: Dukung konfigurasi batas ukuran body permintaan melalui variabel lingkungan"
description: "Catatan Rilis v1.9.0-alpha.4"
---

### 🎉 Fitur Baru

- **[server]** Mendukung konfigurasi batas ukuran body permintaan melalui variabel lingkungan ([#7273](https://github.com/nocobase/nocobase/pull/7273)) oleh @aaaaaajie
- **[client]** Blok tabel mendukung penambahan tombol 'Pengaturan kolom' untuk mengatur urutan dan visibilitas kolom ([#7204](https://github.com/nocobase/nocobase/pull/7204)) oleh @kerwin612
- **[Office File Previewer]** Mendukung pratinjau file Office melalui pratinjau langsung Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) oleh @mytharcher
- **[Data source: Main]**

  - mendukung pembacaan tabel dari sumber data utama ([#7238](https://github.com/nocobase/nocobase/pull/7238)) oleh @aaaaaajie
- **[Workflow: Parallel node]** Menambahkan mode "Semua terselesaikan" untuk node paralel ([#7263](https://github.com/nocobase/nocobase/pull/7263)) oleh @mytharcher
- **[Auth: SAML 2.0]** Mendukung pengalihan otomatis ke URL SSO saat pengguna tidak terautentikasi oleh @2013xile
- **[Redis queue adapter]** Menambahkan adapter Redis untuk antrian peristiwa oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Tidak lagi menutup menu secara otomatis setelah pemilihan ([#7252](https://github.com/nocobase/nocobase/pull/7252)) oleh @kerwin612
- **[server]** Membuat antrian memori bersamaan tersedia saat item yang diproses tidak penuh ([#7267](https://github.com/nocobase/nocobase/pull/7267)) oleh @mytharcher
- **[database]** Secara otomatis mengaktifkan paginasi sederhana saat kumpulan data melebihi ambang batas ([#7227](https://github.com/nocobase/nocobase/pull/7227)) oleh @aaaaaajie
- **[Notification: In-app message]** Mengubah pesan dalam aplikasi dari SSE menjadi WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) oleh @mytharcher
- **[Workflow]**

  - Mengurangi jumlah pekerjaan yang dimuat saat mempersiapkan eksekusi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) oleh @mytharcher
  - Menambahkan konstanta tipe json untuk variabel pengujian ([#7274](https://github.com/nocobase/nocobase/pull/7274)) oleh @mytharcher
- **[AI integration]** Menghapus `await` untuk memanggil `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) oleh @mytharcher
- **[Workflow: Manual node]** storePopupContext mendukung penyimpanan konteks default ([#7264](https://github.com/nocobase/nocobase/pull/7264)) oleh @zhangzhonghe
- **[Workflow: JSON calculation]** Membuat node kueri JSON dapat diuji oleh @mytharcher
- **[Redis queue adapter]** Membuat antrian bersamaan tersedia saat item yang diproses tidak penuh untuk adapter Redis oleh @mytharcher
- **[Auth: DingTalk]** Di klien DingTalk, atur judul bilah navigasi menjadi string kosong, bukan menampilkan "Memuat…" oleh @2013xile

### 🐛 Perbaikan Bug

- **[utils]** Penanganan zona waktu yang salah untuk parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) oleh @katherinehhh
- **[client]**

  - Memperbaiki item pratinjau file pada url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) oleh @mytharcher
  - Menambahkan URL lengkap ke file lokal saat mempratinjau ([#7314](https://github.com/nocobase/nocobase/pull/7314)) oleh @mytharcher
  - Memperbaiki masalah di mana tabel pohon tidak dapat diperluas ([#7309](https://github.com/nocobase/nocobase/pull/7309)) oleh @zhangzhonghe
  - Memperbaiki perilaku tak terduga dalam pengurutan seret dan lepas baris tabel ([#6959](https://github.com/nocobase/nocobase/pull/6959)) oleh @ChimingLiu
  - Memperbaiki masalah loop tak terbatas saat mengurai nilai default bidang ([#7301](https://github.com/nocobase/nocobase/pull/7301)) oleh @zhangzhonghe
  - Masalah tampilan bidang tanggal di popup pemilih data bidang asosiasi dari formulir filter ([#7290](https://github.com/nocobase/nocobase/pull/7290)) oleh @katherinehhh
  - Pencarian fuzzy tidak berfungsi di bidang asosiasi pilih saat menggunakan rumus sebagai bidang judul ([#7280](https://github.com/nocobase/nocobase/pull/7280)) oleh @katherinehhh
  - Variabel objek saat ini hilang dalam aturan tautan sub-tabel ([#7266](https://github.com/nocobase/nocobase/pull/7266)) oleh @katherinehhh
  - Memperbaiki masalah di mana bidang Markdown tidak dirender dengan benar di tampilan detail. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) oleh @aaaaaajie
  - Setelah perubahan bidang, bidang asosiasi yang bergantung pada bidang ini belum menghapus nilainya ([#7262](https://github.com/nocobase/nocobase/pull/7262)) oleh @zhangzhonghe
  - Masalah tampilan saat variabel tanggal yang tidak digunakan lagi digunakan di bidang tanggal data historis ([#7253](https://github.com/nocobase/nocobase/pull/7253)) oleh @katherinehhh
  - Pengaturan bidang judul pemilih data tidak valid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) oleh @zhangzhonghe
- **[database]**

  - Menyelesaikan kegagalan paginasi sederhana otomatis yang disebabkan oleh konvensi penamaan tabel. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) oleh @aaaaaajie
  - Memperbaiki kegagalan saat mengekspor kumpulan data besar dari PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) oleh @aaaaaajie
  - Memperbaiki masalah di mana pengurutan kunci utama default menyebabkan kegagalan pemuatan daftar saat menggunakan sumber data eksternal MSSQL di blok tabel. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) oleh @aaaaaajie
- **[auth]** Memperbaiki masalah di mana `secret` kosong dalam konfigurasi sub-aplikasi mencegah masuk ([#7239](https://github.com/nocobase/nocobase/pull/7239)) oleh @2013xile
- **[File manager]** Memperbaiki izin bidang penyimpanan ([#7316](https://github.com/nocobase/nocobase/pull/7316)) oleh @mytharcher
- **[Workflow]**

  - Memperbaiki hasil `undefined` saat prosesor keluar ([#7317](https://github.com/nocobase/nocobase/pull/7317)) oleh @mytharcher
  - Memperbaiki masalah ID BigInt di MySQL saat menyimpan pekerjaan ([#7292](https://github.com/nocobase/nocobase/pull/7292)) oleh @mytharcher
  - Memperbaiki versi dependensi yang salah ([#7258](https://github.com/nocobase/nocobase/pull/7258)) oleh @mytharcher
- **[Workflow: HTTP request node]** Memperbaiki bug kondisi balapan ([#7310](https://github.com/nocobase/nocobase/pull/7310)) oleh @mytharcher
- **[Action: Export records]** Memperbaiki pemformatan bidang relasional bersarang yang salah saat mengekspor ke Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) oleh @aaaaaajie
- **[Data source manager]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi ([#7249](https://github.com/nocobase/nocobase/pull/7249)) oleh @aaaaaajie
- **[Action: Batch edit]** Tidak dapat melakukan edit massal dan perbarui massal di pemilih data ([#7250](https://github.com/nocobase/nocobase/pull/7250)) oleh @zhangzhonghe
- **[Data source: External Oracle]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi oleh @aaaaaajie
- **[Data source: External SQL Server]** Memperbaiki format penyimpanan yang tidak konsisten untuk bidang datetime MSSQL (tanpa zona waktu) dari sumber data eksternal oleh @aaaaaajie
- **[Workflow: Subflow]** Memperbaiki aliran yang ditangguhkan oleh @mytharcher
- **[Workflow: Approval]**

  - Memperbaiki kesalahan yang muncul dari pemilih penerima tugas di dalam sumber data eksternal oleh @mytharcher
  - URL tombol Tautan mengarah ke popup di halaman saat ini, tetapi mengkliknya menunjukkan kesalahan 404 oleh @zhangzhonghe
- **[Email manager]**

  - menambahkan bidang rawId untuk optimasi kinerja oleh @jiannx
  - atribut ref dalam html menyebabkan pengecualian rendering oleh @jiannx
  - hubungan koleksi pesan dan label tidak normal di bawah mysql oleh @jiannx
