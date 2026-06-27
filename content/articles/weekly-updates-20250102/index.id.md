---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: optimasi alur kerja, perbaikan bug, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/en/blog/v1.4.16)

*Tanggal rilis: 26-12-2024*

#### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah konversi presisi bidang UnixTimestamp ([#5931](https://github.com/nocobase/nocobase/pull/5931)) oleh @chenos
- **[Aksi: Duplikat rekaman]** Memperbaiki bidang asosiasi o2o tidak menampilkan bidang koleksi target yang dikonfigurasi di blok detail dan formulir ([#5921](https://github.com/nocobase/nocobase/pull/5921)) oleh @katherinehhh
- **[Manajer cadangan]** Memperbaiki kesalahan cadangan ketika versi mysqldump di bawah 8 oleh @gchust

### [v1.4.17](https://www.nocobase.com/en/blog/v1.4.17)

*Tanggal rilis: 31-12-2024*

#### 🎉 Fitur Baru

- **[klien]** Mendukung penggunaan variabel "Rekaman tabel yang dipilih" di bidang array m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) oleh @2013xile

#### 🚀 Peningkatan

- **[tidak terdefinisi]** Mengaktifkan plugin tema secara default ([#5957](https://github.com/nocobase/nocobase/pull/5957)) oleh @zhangzhonghe
- **[Sumber data: Utama]** Menambahkan validasi konflik nama untuk mencegah pengguna membuat Koleksi dengan nama yang sama dengan Koleksi sistem ([#5962](https://github.com/nocobase/nocobase/pull/5962)) oleh @chareice
- **[Alur kerja]** Menghindari penyalahgunaan variabel rentang tanggal di sebagian besar tempat kecuali komponen filter ([#5954](https://github.com/nocobase/nocobase/pull/5954)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[database]**

  - Memperbaiki masalah dalam aksi destroy di mana filterByTk dengan parameter filter tidak dapat menghapus data ([#5976](https://github.com/nocobase/nocobase/pull/5976)) oleh @chareice
  - Metode firstOrCreate dan updateOrCreate dari repositori kehilangan konteks ([#5973](https://github.com/nocobase/nocobase/pull/5973)) oleh @chenos
- **[klien]**

  - Memperbaiki masalah saat menambahkan bidang relasi satu-ke-satu dalam formulir ([#5975](https://github.com/nocobase/nocobase/pull/5975)) oleh @katherinehhh
  - Memperbaiki masalah dengan penetapan bidang di sub-tabel saat memilih ulang data setelah menghapus data ([#5958](https://github.com/nocobase/nocobase/pull/5958)) oleh @katherinehhh
  - Memperbaiki kesalahan blok tabel yang disebabkan oleh data yang berisi bidang bernama 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) oleh @zhangzhonghe
- **[Sumber data: Utama]** Memperbaiki masalah dukungan warisan dengan bidang unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) oleh @chareice
- **[Alur kerja]** Memperbaiki blok sub-detail yang menimbulkan kesalahan dalam konfigurasi UI node manual ([#5953](https://github.com/nocobase/nocobase/pull/5953)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/en/blog/v1.5.0-beta.18)

*Tanggal rilis: 27-12-2024*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah tampilan sel tabel yang tidak terduga di plugin pihak ketiga ([#5934](https://github.com/nocobase/nocobase/pull/5934)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana tombol hapus dinonaktifkan di halaman manajemen template blok ([#5922](https://github.com/nocobase/nocobase/pull/5922)) oleh @zhangzhonghe
- **[Verifikasi]** Memperbaiki bidang formulir kosong saat membuka laci edit di halaman pengaturan Verifikasi ([#5949](https://github.com/nocobase/nocobase/pull/5949)) oleh @chenos
- **[Alur kerja: Acara aksi kustom]**

  - Memperbaiki kasus uji yang gagal di SQLite oleh @mytharcher
  - Memperbaiki kasus uji pemicu aksi kustom oleh @mytharcher
- **[Alur kerja: Acara pra-aksi]** Memperbaiki kasus uji interceptor permintaan oleh @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/en/blog/v1.5.0-beta.19)

*Tanggal rilis: 31-12-2024*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki pemilih rentang tanggal di formulir/aksi filter tidak menampilkan pemilih waktu ketika showTime diatur ([#5956](https://github.com/nocobase/nocobase/pull/5956)) oleh @katherinehhh
  - Memperbaiki masalah di mana mengklik bidang asosiasi tidak membuka dialog popup ([#5972](https://github.com/nocobase/nocobase/pull/5972)) oleh @zhangzhonghe
- **[Alur kerja: Pesan respons]** Memperbaiki nama parameter yang salah digunakan oleh @mytharcher

### v1.5.0-beta.20

*Tanggal rilis: 31-12-2024*

#### 🎉 Fitur Baru

- **[[Aksi: Impor rekaman(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Meningkatkan kemampuan impor data dengan dukungan untuk impor asinkron, impor rekaman jutaan baris, identifikasi dan pemrosesan data duplikat, pembaruan data, dan pemicu alur kerja.
- **[[Aksi: Ekspor rekaman(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Meningkatkan kemampuan ekspor data dengan dukungan untuk ekspor asinkron, ekspor rekaman jutaan baris, dan ekspor lampiran.

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
