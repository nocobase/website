---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: dukungan untuk mengatur batas ukuran body permintaan melalui variabel lingkungan, dukungan untuk pratinjau file Office melalui pratinjau langsung Microsoft, dan peningkatan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.11](https://www.nocobase.com/en/blog/v1.8.11)

*Tanggal rilis: 31-07-2025*

#### 🎉 Fitur Baru

- **[Pratinjau File Office]** Mendukung pratinjau file Office melalui pratinjau langsung Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) oleh @mytharcher

#### 🚀 Peningkatan

- **[klien]** Jangan menutup menu secara otomatis setelah pemilihan ([#7252](https://github.com/nocobase/nocobase/pull/7252)) oleh @kerwin612
- **[Notifikasi: Pesan dalam aplikasi]** Ubah pesan dalam aplikasi dari SSE ke WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) oleh @mytharcher
- **[Alur Kerja]** Kurangi jumlah pekerjaan yang dimuat saat mempersiapkan eksekusi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) oleh @mytharcher
- **[Auth: DingTalk]** Di klien DingTalk, atur judul bilah navigasi menjadi string kosong, bukan menampilkan "Memuat…" oleh @2013xile

#### 🐛 Perbaikan Bug

- **[klien]**

  - Perbaiki masalah di mana tabel pohon tidak dapat diperluas ([#7309](https://github.com/nocobase/nocobase/pull/7309)) oleh @zhangzhonghe
  - Perbaiki perilaku tak terduga dalam pengurutan seret dan lepas baris tabel ([#6959](https://github.com/nocobase/nocobase/pull/6959)) oleh @ChimingLiu
  - Perbaiki masalah loop tak terbatas saat mengurai nilai default bidang ([#7301](https://github.com/nocobase/nocobase/pull/7301)) oleh @zhangzhonghe
  - Perbaiki masalah tampilan bidang tanggal di popup pemilih data bidang relasi pada formulir filter ([#7290](https://github.com/nocobase/nocobase/pull/7290)) oleh @katherinehhh
- **[Alur Kerja: Node permintaan HTTP]** Perbaiki bug kondisi balapan ([#7310](https://github.com/nocobase/nocobase/pull/7310)) oleh @mytharcher
- **[Alur Kerja]** Perbaiki masalah ID BigInt di MySQL saat menyimpan pekerjaan ([#7292](https://github.com/nocobase/nocobase/pull/7292)) oleh @mytharcher
- **[Aksi: Ekspor catatan]** Memperbaiki pemformatan yang salah dari bidang relasi bersarang saat mengekspor ke Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) oleh @aaaaaajie
- **[Sumber data: SQL Server Eksternal]** Perbaiki format penyimpanan yang tidak konsisten untuk bidang datetime MSSQL (tanpa zona waktu) dari sumber data eksternal oleh @aaaaaajie
- **[Alur Kerja: Persetujuan]** Perbaiki kesalahan yang muncul dari pemilih penerima tugas di dalam sumber data eksternal oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.4](https://www.nocobase.com/en/blog/v1.9.0-alpha.4)

*Tanggal rilis: 01-08-2025*

#### 🎉 Fitur Baru

- **[server]** Mendukung konfigurasi batas ukuran badan permintaan melalui variabel lingkungan ([#7273](https://github.com/nocobase/nocobase/pull/7273)) oleh @aaaaaajie
- **[klien]** Blok tabel mendukung penambahan tombol 'Pengaturan kolom' untuk mengonfigurasi urutan dan visibilitas kolom ([#7204](https://github.com/nocobase/nocobase/pull/7204)) oleh @kerwin612
- **[Pratinjau File Office]** Mendukung pratinjau file Office melalui pratinjau langsung Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) oleh @mytharcher
- **[Sumber data: Utama]**

  - mendukung pembacaan tabel dari sumber data utama ([#7238](https://github.com/nocobase/nocobase/pull/7238)) oleh @aaaaaajie
- **[Alur Kerja: Node paralel]** Tambahkan mode "Semua terselesaikan" untuk node paralel ([#7263](https://github.com/nocobase/nocobase/pull/7263)) oleh @mytharcher
- **[Auth: SAML 2.0]** Mendukung pengalihan otomatis ke URL SSO saat pengguna tidak diautentikasi oleh @2013xile
- **[Adaptor antrian Redis]** Tambahkan adaptor Redis untuk antrian peristiwa oleh @mytharcher

#### 🚀 Peningkatan

- **[klien]** Jangan menutup menu secara otomatis setelah pemilihan ([#7252](https://github.com/nocobase/nocobase/pull/7252)) oleh @kerwin612
- **[server]** Buat antrian memori bersamaan tersedia saat memproses item tidak penuh ([#7267](https://github.com/nocobase/nocobase/pull/7267)) oleh @mytharcher
- **[database]** Secara otomatis mengaktifkan penomoran halaman sederhana saat kumpulan data melebihi ambang batas ([#7227](https://github.com/nocobase/nocobase/pull/7227)) oleh @aaaaaajie
- **[Notifikasi: Pesan dalam aplikasi]** Ubah pesan dalam aplikasi dari SSE ke WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) oleh @mytharcher
- **[Alur Kerja]**

  - Kurangi jumlah pekerjaan yang dimuat saat mempersiapkan eksekusi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) oleh @mytharcher
  - Tambahkan konstanta tipe json untuk variabel pengujian ([#7274](https://github.com/nocobase/nocobase/pull/7274)) oleh @mytharcher
- **[Integrasi AI]** Hapus `await` untuk memanggil `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) oleh @mytharcher
- **[Alur Kerja: Node manual]** storePopupContext mendukung penyimpanan konteks default ([#7264](https://github.com/nocobase/nocobase/pull/7264)) oleh @zhangzhonghe
- **[Alur Kerja: Perhitungan JSON]** Buat node kueri JSON dapat diuji oleh @mytharcher
- **[Adaptor antrian Redis]** Buat antrian bersamaan tersedia saat memproses item tidak penuh untuk adaptor Redis oleh @mytharcher
- **[Auth: DingTalk]** Di klien DingTalk, atur judul bilah navigasi menjadi string kosong, bukan menampilkan "Memuat…" oleh @2013xile

#### 🐛 Perbaikan Bug

- **[utils]** penanganan zona waktu yang salah untuk parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) oleh @katherinehhh
- **[klien]**

  - Perbaiki item pratinjau file pada url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) oleh @mytharcher
  - Tambahkan URL lengkap ke file lokal saat mempratinjau ([#7314](https://github.com/nocobase/nocobase/pull/7314)) oleh @mytharcher
  - Perbaiki masalah di mana tabel pohon tidak dapat diperluas ([#7309](https://github.com/nocobase/nocobase/pull/7309)) oleh @zhangzhonghe
  - Perbaiki perilaku tak terduga dalam pengurutan seret dan lepas baris tabel ([#6959](https://github.com/nocobase/nocobase/pull/6959)) oleh @ChimingLiu
  - Perbaiki masalah loop tak terbatas saat mengurai nilai default bidang ([#7301](https://github.com/nocobase/nocobase/pull/7301)) oleh @zhangzhonghe
  - masalah tampilan bidang tanggal di popup pemilih data bidang relasi pada formulir filter ([#7290](https://github.com/nocobase/nocobase/pull/7290)) oleh @katherinehhh
  - pencarian fuzzy tidak berfungsi di bidang relasi pilih saat menggunakan rumus sebagai bidang judul ([#7280](https://github.com/nocobase/nocobase/pull/7280)) oleh @katherinehhh
  - variabel objek saat ini hilang dalam aturan tautan sub-tabel ([#7266](https://github.com/nocobase/nocobase/pull/7266)) oleh @katherinehhh
  - Perbaiki masalah di mana bidang Markdown tidak dirender dengan benar di tampilan detail. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) oleh @aaaaaajie
  - Setelah perubahan bidang, bidang relasi yang bergantung pada bidang ini belum menghapus nilainya ([#7262](https://github.com/nocobase/nocobase/pull/7262)) oleh @zhangzhonghe
  - masalah tampilan ketika variabel tanggal yang tidak digunakan lagi digunakan di bidang tanggal data historis ([#7253](https://github.com/nocobase/nocobase/pull/7253)) oleh @katherinehhh
  - Pengaturan bidang judul pemilih data tidak valid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) oleh @zhangzhonghe
- **[database]**

  - Selesaikan kegagalan penomoran halaman sederhana otomatis yang disebabkan oleh konvensi penamaan tabel. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) oleh @aaaaaajie
  - Memperbaiki kegagalan saat mengekspor kumpulan data besar dari PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) oleh @aaaaaajie
  - Perbaiki masalah di mana pengurutan kunci utama default menyebabkan kegagalan pemuatan daftar saat menggunakan sumber data eksternal MSSQL di blok tabel. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) oleh @aaaaaajie
- **[auth]** Perbaiki masalah di mana `secret` kosong dalam konfigurasi sub-aplikasi mencegah masuk ([#7239](https://github.com/nocobase/nocobase/pull/7239)) oleh @2013xile
- **[Manajer File]** Perbaiki izin bidang penyimpanan ([#7316](https://github.com/nocobase/nocobase/pull/7316)) oleh @mytharcher
- **[Alur Kerja]**

  - Perbaiki hasil `undefined` saat prosesor keluar ([#7317](https://github.com/nocobase/nocobase/pull/7317)) oleh @mytharcher
  - Perbaiki masalah ID BigInt di MySQL saat menyimpan pekerjaan ([#7292](https://github.com/nocobase/nocobase/pull/7292)) oleh @mytharcher
  - Perbaiki versi dependensi yang salah ([#7258](https://github.com/nocobase/nocobase/pull/7258)) oleh @mytharcher
- **[Alur Kerja: Node permintaan HTTP]** Perbaiki bug kondisi balapan ([#7310](https://github.com/nocobase/nocobase/pull/7310)) oleh @mytharcher
- **[Aksi: Ekspor catatan]** Memperbaiki pemformatan yang salah dari bidang relasi bersarang saat mengekspor ke Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) oleh @aaaaaajie
- **[Manajer sumber data]** Memperbaiki atribut sumber data eksternal yang dipertahankan dalam konfigurasi koleksi ([#7249](https://github.com/nocobase/nocobase/pull/7249)) oleh @aaaaaajie
- **[Aksi: Edit massal]** Tidak dapat melakukan edit massal dan perbarui massal di pemilih data ([#7250](https://github.com/nocobase/nocobase/pull/7250)) oleh @zhangzhonghe
- **[Sumber data: Oracle Eksternal]** Memperbaiki atribut sumber data eksternal yang dipertahankan dalam konfigurasi koleksi oleh @aaaaaajie
- **[Sumber data: SQL Server Eksternal]** Perbaiki format penyimpanan yang tidak konsisten untuk bidang datetime MSSQL (tanpa zona waktu) dari sumber data eksternal oleh @aaaaaajie
- **[Alur Kerja: Subalur]** Perbaiki alur yang ditangguhkan oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Perbaiki kesalahan yang muncul dari pemilih penerima tugas di dalam sumber data eksternal oleh @mytharcher
  - URL tombol Tautan mengarah ke popup di halaman saat ini, tetapi mengkliknya menunjukkan kesalahan 404 oleh @zhangzhonghe
- **[Manajer Email]**

  - tambahkan bidang rawId untuk optimalisasi kinerja oleh @jiannx
  - atribut ref dalam html menyebabkan pengecualian rendering oleh @jiannx
  - koleksi hubungan pesan dan label mengalami pengecualian di bawah mysql oleh @jiannx
