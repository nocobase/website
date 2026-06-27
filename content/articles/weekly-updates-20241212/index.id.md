---
title: "Pembaruan Mingguan NocoBase: Meningkatkan Kinerja"
description: "Pembaruan minggu ini meliputi: Mengoptimalkan panel aksi dan komponen formulir publik untuk adaptasi seluler, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alpha, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/en/blog/v1.4.3)

*Tanggal rilis: 2024-12-05*

#### 🚀 Peningkatan

- **[test]** Mengizinkan login dengan nama peran dalam kasus uji ([#5794](https://github.com/nocobase/nocobase/pull/5794)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** memperbarui judul untuk URL detail dalam formulir pesan dalam aplikasi dan file lokalisasi ([#5742](https://github.com/nocobase/nocobase/pull/5742)) oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana token tidak dibersihkan setelah pengguna tanpa peran mengalami kesalahan masuk dan mengklik tombol "Masuk dengan akun lain" ([#5790](https://github.com/nocobase/nocobase/pull/5790)) oleh @2013xile
  - Kehilangan header permintaan pada permintaan diam ([#5795](https://github.com/nocobase/nocobase/pull/5795)) oleh @chenos
  - Halaman kosong ketika pengguna tidak memiliki peran ([#5797](https://github.com/nocobase/nocobase/pull/5797)) oleh @chenos
  - Memperbaiki masalah scrollbar di sub-tabel dengan ukuran kecil di bawah tema kompak ([#5796](https://github.com/nocobase/nocobase/pull/5796)) oleh @katherinehhh

### [v1.4.4](https://www.nocobase.com/en/blog/v1.4.4)

*Tanggal rilis: 2024-12-08*

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah bidang sumber data eksternal tidak ditampilkan di blok tabel ([#5825](https://github.com/nocobase/nocobase/pull/5825)) oleh @katherinehhh
  - Memperbaiki masalah tampilan untuk bidang warisan dalam konfigurasi formulir ([#5822](https://github.com/nocobase/nocobase/pull/5822)) oleh @katherinehhh
  - Memperbaiki bidang warisan tidak muncul di daftar bidang dan tidak dapat ditimpa ([#5800](https://github.com/nocobase/nocobase/pull/5800)) oleh @katherinehhh
- **[Visualisasi Data]** Memperbaiki masalah saat memformat bidang tanggal yang sadar zona waktu di MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) oleh @2013xile
- **[Alur Kerja]**

  - Memperbaiki transaksi di seluruh sumber data yang menyebabkan kesalahan acara koleksi ([#5818](https://github.com/nocobase/nocobase/pull/5818)) oleh @mytharcher
  - Memperbaiki tipe tanggal yang terlewat dalam konfigurasi jadwal berdasarkan bidang tanggal ([#5816](https://github.com/nocobase/nocobase/pull/5816)) oleh @mytharcher
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana memperbarui bidang array m2m dalam koleksi relasi tunggal tidak berpengaruh ([#5820](https://github.com/nocobase/nocobase/pull/5820)) oleh @2013xile
- **[Kalender]**

  - Memperbaiki kesalahan saat mengklik tanggal kosong di kalender ([#5803](https://github.com/nocobase/nocobase/pull/5803)) oleh @katherinehhh
  - Memperbaiki masalah di mana menutup popup yang dibuka melalui 'Blok Kalender' menyebabkan semua popup tertutup ([#5793](https://github.com/nocobase/nocobase/pull/5793)) oleh @zhangzhonghe
- **[Formulir publik]** Memperbaiki jalur pemindaian kode QC yang salah di formulir publik sub-aplikasi ([#5799](https://github.com/nocobase/nocobase/pull/5799)) oleh @katherinehhh

### [v1.4.5](https://www.nocobase.com/en/blog/v1.4.5)

*Tanggal rilis: 2024-12-08*

#### 🐛 Perbaikan Bug

- **[Kontrol akses]** Segarkan halaman ketika peran pengguna salah ([#5821](https://github.com/nocobase/nocobase/pull/5821)) oleh @chenos

### [v1.4.6](https://www.nocobase.com/en/blog/v1.4.6)

*Tanggal rilis: 2024-12-08*

#### 🐛 Perbaikan Bug

- **[Aksi: Impor catatan]** memperbaiki data impor dengan tabel dalam asosiasi ([#5833](https://github.com/nocobase/nocobase/pull/5833)) oleh @chareice
- **[Kontrol akses]** Memperbaiki masalah penggunaan bidang untuk menanyakan relasi di ACL ([#5832](https://github.com/nocobase/nocobase/pull/5832)) oleh @chareice

### [v1.4.7](https://www.nocobase.com/en/blog/v1.4.7)

*Tanggal rilis: 2024-12-09*

#### 🐛 Perbaikan Bug

- **[Seluler]** Memperbaiki masalah tampilan warna latar belakang seluler ([#5809](https://github.com/nocobase/nocobase/pull/5809)) oleh @katherinehhh

### [v1.4.8](https://www.nocobase.com/en/blog/v1.4.8)

*Tanggal rilis: 2024-12-10*

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah template data di formulir filter yang dikonfigurasi di pemilih catatan bidang asosiasi ([#5837](https://github.com/nocobase/nocobase/pull/5837)) oleh @katherinehhh
  - Memperbaiki masalah dengan template string Markdown tidak memuat data data asosiasi (Sumber Data Eksternal) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) oleh @katherinehhh
- **[Sinkronisasi data pengguna]** Lewati tipe data yang tidak didukung selama sinkronisasi alih-alih memunculkan kesalahan. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) oleh @chenzhizdt
- **[Manajer cadangan]**

  - Memperbaiki popup lambat dari jendela unduhan untuk file cadangan besar oleh @gchust
  - Memperbaiki masalah di mana memulihkan sub-aplikasi cadangan menyebabkan semua aplikasi dimulai ulang oleh @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/en/blog/v1.5.0-beta.2)

*Tanggal rilis: 2024-12-06*

#### 🚀 Peningkatan

- **[client]** Mengoptimalkan logika rekursif di useMenuSearch untuk kinerja yang lebih baik ([#5784](https://github.com/nocobase/nocobase/pull/5784)) oleh @katherinehhh
- **[Formulir publik]** Mengoptimalkan panel aksi dan komponen formulir publik untuk adaptasi seluler ([#5788](https://github.com/nocobase/nocobase/pull/5788)) oleh @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/en/blog/v1.5.0-beta.3)

*Tanggal rilis: 2024-12-10*

#### 🎉 Fitur Baru

- **[client]** Mendukung konfigurasi teks, ikon, dan tipe untuk tombol tambah dan pilih di sub-tabel ([#5778](https://github.com/nocobase/nocobase/pull/5778)) oleh @katherinehhh
- **[Kalender]** Plugin kalender menambahkan mode pembukaan acara ([#5808](https://github.com/nocobase/nocobase/pull/5808)) oleh @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/en/blog/v1.5.0-beta.4)

*Tanggal rilis: 2024-12-11*

#### 🐛 Perbaikan Bug

- **[Seluler]** Memperbaiki adaptasi seluler dari komponen tanggal di sub-halaman ([#5859](https://github.com/nocobase/nocobase/pull/5859)) oleh @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/en/blog/v1.5.0-beta.6)

*Tanggal rilis: 2024-12-11*

#### 🚀 Peningkatan

- **[client]** Hapus komponen kerangka baris tabel ([#5751](https://github.com/nocobase/nocobase/pull/5751)) oleh @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Tanggal rilis: 2024-12-09*

#### 🚀 Peningkatan

- **[client]** Hapus komponen Formily dari tabel untuk meningkatkan kinerja saat mengganti paginasi tabel ([#5738](https://github.com/nocobase/nocobase/pull/5738)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana bidang tidak ditampilkan setelah menambahkannya di subformulir ([#5827](https://github.com/nocobase/nocobase/pull/5827)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana mengubah nilai bidang asosiasi di blok detail tidak langsung disegarkan ([#5826](https://github.com/nocobase/nocobase/pull/5826)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana mengklik tautan tidak membuka popup ketika 'Aktifkan tautan' diaktifkan untuk pertama kalinya ([#5812](https://github.com/nocobase/nocobase/pull/5812)) oleh @zhangzhonghe
  - Mencegah beberapa panggilan API saat menutup popup ([#5804](https://github.com/nocobase/nocobase/pull/5804)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana login seluler mengarahkan ke halaman desktop ([#5805](https://github.com/nocobase/nocobase/pull/5805)) oleh @zhangzhonghe
  - Memperbaiki tombol aksi konfigurasi harus rata kiri ([#5798](https://github.com/nocobase/nocobase/pull/5798)) oleh @katherinehhh
- **[build]** Memperbaiki caching yang salah dari file js frontend setelah pembuatan plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) oleh @gchust

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
