---
title: "Pembaruan Mingguan NocoBase: Tambahkan saluran notifikasi baru"
description: "Pembaruan Mingguan NocoBase 2024-11-07"
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase saat ini diperbarui dengan dua cabang: `main` dan `next`.

* `main`：Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`：Versi alfa, termasuk beberapa fitur baru yang belum dirilis. Versi ini mungkin tidak sepenuhnya stabil dan cocok untuk pengembang atau penguji untuk merasakan fitur baru lebih awal atau melakukan pengujian kompatibilitas.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/en/blog/v1.3.43-beta)

*Tanggal rilis: 2024-11-05*

### 🚀 Peningkatan

- **[klien]** presisi numerik dapat dikonfigurasi hingga 8 digit ([#5552](https://github.com/nocobase/nocobase/pull/5552)) oleh @chenos

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki gaya tautan yang tidak diperbarui di formulir. ([#5539](https://github.com/nocobase/nocobase/pull/5539)) oleh @sheldon66
- **[Auth: API keys]** Memperbaiki jalur URL untuk halaman pengaturan kunci API ([#5562](https://github.com/nocobase/nocobase/pull/5562)) oleh @2013xile
- **[Mobile]** Memperbaiki masalah gambar pratinjau yang tertutup oleh halaman ([#5535](https://github.com/nocobase/nocobase/pull/5535)) oleh @zhangzhonghe
- **[Blok: Peta]** memperbaiki rendering peta di sub-detail dan tampilan nilai yang salah untuk bidang kosong ([#5526](https://github.com/nocobase/nocobase/pull/5526)) oleh @katherinehhh
- **[Koleksi: Pohon]** Memperbaiki kesalahan saat memperbarui koleksi jalur ([#5551](https://github.com/nocobase/nocobase/pull/5551)) oleh @2013xile

## [v1.3.44-beta](https://www.nocobase.com/en/blog/v1.3.44-beta)

*Tanggal rilis: 2024-11-05*

### 🎉 Fitur Baru

- **[Auth: OIDC]** Menambahkan opsi "aktifkan logout yang diprakarsai RP" oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah filter saat mengatur bidang pilih tunggal sebagai bidang judul di pilih asosiasi ([#5581](https://github.com/nocobase/nocobase/pull/5581)) oleh @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241031134640)

*Tanggal rilis: 2024-10-31*

### 🎉 Fitur Baru

- **[WeCom]** Menambahkan saluran notifikasi WeCom oleh @chenzhizdt

### 🚀 Peningkatan

- **[klien]** mengembalikan nilai default saat judul bidang dibersihkan ([#5549](https://github.com/nocobase/nocobase/pull/5549)) oleh @katherinehhh
- **[Manajer notifikasi]**

  - Menambahkan komponen UserSelect dan UserAddition untuk menyederhanakan pengembangan saluran notifikasi ([#5553](https://github.com/nocobase/nocobase/pull/5553)) oleh @2013xile
  - menambahkan API untuk mendapatkan registri jenis saluran plugin notifikasi ([#5531](https://github.com/nocobase/nocobase/pull/5531)) oleh @mytharcher
  - menyesuaikan nama registri jenis saluran plugin notifikasi ([#5532](https://github.com/nocobase/nocobase/pull/5532)) oleh @mytharcher
  - menambahkan API plugin manajer notifikasi untuk mendapatkan semua jenis yang terdaftar ([#5529](https://github.com/nocobase/nocobase/pull/5529)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Meningkatkan UI pesan dalam aplikasi dan menambahkan beberapa log. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) oleh @sheldon66

### 🐛 Perbaikan Bug

- **[database]**

  - memperbaiki opsi pembaruan koleksi dengan kunci target filter ([#5558](https://github.com/nocobase/nocobase/pull/5558)) oleh @chareice
  - memperbaiki nilai primaryKeyField yang salah di sequelize saat bekerja dengan beberapa kunci target filter ([#5556](https://github.com/nocobase/nocobase/pull/5556)) oleh @chareice
- **[klien]**

  - Memperbaiki masalah di mana komponen kerangka di blok tabel tidak hilang ([#5548](https://github.com/nocobase/nocobase/pull/5548)) oleh @zhangzhonghe
  - Memperbaiki masalah dengan tindakan penghapusan, elipsis teks, dan tampilan data baru di sub-tabel ([#5523](https://github.com/nocobase/nocobase/pull/5523)) oleh @katherinehhh
- **[Manajer sumber data]** Memperbaiki penghapusan sumber data dalam status gagal ([#5554](https://github.com/nocobase/nocobase/pull/5554)) oleh @chareice
- **[Notifikasi: Email]**

  - memperbaiki kueri untuk pengguna berdasarkan id di notifikasi email ([#5533](https://github.com/nocobase/nocobase/pull/5533)) oleh @mytharcher
  - memperbaiki subjek yang terlewat di notifikasi email berdasarkan id pengguna ([#5534](https://github.com/nocobase/nocobase/pull/5534)) oleh @mytharcher
  - memperbaiki jalur bidang reaksi di formulir dinamis notifikasi email ([#5527](https://github.com/nocobase/nocobase/pull/5527)) oleh @mytharcher
- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana komponen pilih untuk bidang banyak ke banyak (array) hanya memiliki satu opsi ([#5544](https://github.com/nocobase/nocobase/pull/5544)) oleh @2013xile
- **[Manajer notifikasi]** memperbaiki crash halaman karena jenis saluran yang salah ([#5528](https://github.com/nocobase/nocobase/pull/5528)) oleh @mytharcher
- **[Alur kerja: Node SQL]** Memperbaiki sse yang menyebabkan "waitForLoadState('networkidle')" timeout ([#5524](https://github.com/nocobase/nocobase/pull/5524)) oleh @hongboji
- **[Komponen bidang: mask]** Memperbaiki data asli tidak dapat ditampilkan dengan mengklik jika komponen dalam keadaan readonly oleh @gchust
- **[Alur kerja: Acara tindakan kustom]** Memperbaiki sse yang menyebabkan "waitForLoadState('networkidle')" timeout oleh @hongboji
- **[WeCom]** Memperbaiki masalah respons 404 tidak ditemukan saat masuk ke aplikasi dari workbench WeCom oleh @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241104151643)

*Tanggal rilis: 2024-11-04*

### 🎉 Fitur Baru

- **[klien]**
  - [tabel] Menambahkan tindakan 'popup' untuk mengonfigurasi tindakan ([#5580](https://github.com/nocobase/nocobase/pull/5580)) oleh @bignof
  - "Bidang konfigurasi" mendukung pemfilteran bidang ([#5471](https://github.com/nocobase/nocobase/pull/5471)) oleh @katherinehhh

### 🚀 Peningkatan

- **[klien]** menambahkan dukungan untuk parameter Tata Letak (labelAlign, labelWidth, labelWrap) ([#5521](https://github.com/nocobase/nocobase/pull/5521)) oleh @katherinehhh
- **[Manajer multi-aplikasi]** mulai cepat sub-aplikasi asinkron ([#5571](https://github.com/nocobase/nocobase/pull/5571)) oleh @chenos
- **[Koleksi: Pohon]** Meningkatkan logika muat koleksi dengan atribut skema ([#5541](https://github.com/nocobase/nocobase/pull/5541)) oleh @chareice

### 🐛 Perbaikan Bug

- **[klien]**
  - bidang pencarian harus dicari berdasarkan teks yang diterjemahkan ([#5572](https://github.com/nocobase/nocobase/pull/5572)) oleh @katherinehhh
  - Memperbaiki masalah dengan menambahkan data ke sub-tabel setelah penghapusan ([#5566](https://github.com/nocobase/nocobase/pull/5566)) oleh @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105053324)

*Tanggal rilis: 2024-11-05*

### 🐛 Perbaikan Bug

- **[klien]** hapus kotak pencarian saat menambahkan blok ke halaman ([#5577](https://github.com/nocobase/nocobase/pull/5577)) oleh @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105230315)

*Tanggal rilis: 2024-11-06*

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki kesalahan resolusi saat mengonfigurasi bidang setelah menambahkan sumber data baru ([#5576](https://github.com/nocobase/nocobase/pull/5576)) oleh @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/en/blog/v1.4.0-alpha.1)

*Tanggal rilis: 2024-11-06*

### 🎉 Fitur Baru

- **[utils]** mendukung penggunaan handlebars dalam konten pesan ([#5559](https://github.com/nocobase/nocobase/pull/5559)) oleh @mytharcher
- **[klien]** blok tabel mendukung pengaturan ukuran ([#5563](https://github.com/nocobase/nocobase/pull/5563)) oleh @katherinehhh
- **[Notifikasi: Pesan dalam aplikasi]** mendukung pesan dalam aplikasi untuk klien seluler ([#5560](https://github.com/nocobase/nocobase/pull/5560)) oleh @sheldon66

### 🚀 Peningkatan

- **[Manajer notifikasi]** Menambahkan penerima ke log notifikasi ([#5561](https://github.com/nocobase/nocobase/pull/5561)) oleh @sheldon66

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki kesalahan saat membuka popup di kanban ([#5592](https://github.com/nocobase/nocobase/pull/5592)) oleh @zhangzhonghe
- **[Kontrol akses]** Memperbaiki meta acl dengan beberapa kunci target filter ([#5598](https://github.com/nocobase/nocobase/pull/5598)) oleh @chareice

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
