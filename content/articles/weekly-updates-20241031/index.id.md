---
title: "Pembaruan Mingguan NocoBase: Meningkatkan kinerja rendering blok tabel, dan lainnya"
description: "Pembaruan Mingguan NocoBase 2024-10-31"
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase saat ini diperbarui dengan dua cabang: `main` dan `next`.

* `main`：Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`：Versi alfa, mencakup beberapa fitur baru yang belum dirilis. Versi ini mungkin tidak sepenuhnya stabil dan cocok untuk pengembang atau penguji yang ingin mencoba fitur baru lebih awal atau melakukan pengujian kompatibilitas.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*Tanggal rilis: 2024-10-24*

### 🐛 Perbaikan Bug

- **[klien]**

  - masalah paginasi di blok daftar dengan koleksi paginasi sederhana ([#5500](https://github.com/nocobase/nocobase/pull/5500)) oleh @katherinehhh
  - Dalam mode non-konfigurasi, tampilkan hanya koleksi saat ini di formulir edit. ([#5499](https://github.com/nocobase/nocobase/pull/5499)) oleh @katherinehhh
- **[Workflow: Node permintaan HTTP]** perbaiki spasi putih khusus yang muncul saat menempelkan konten ke textarea variabel yang menyebabkan masalah ([#5497](https://github.com/nocobase/nocobase/pull/5497)) oleh @mytharcher
- **[Departemen]** Perbaiki masalah pemeriksaan izin sumber data eksternal yang salah di bawah peran departemen oleh @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*Tanggal rilis: 2024-10-24*

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah di mana blok filter tidak dapat ditambahkan di popup ([#5502](https://github.com/nocobase/nocobase/pull/5502)) oleh @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*Tanggal rilis: 2024-10-25*

### 🎉 Fitur Baru

- **[Auth: OIDC]** Tambahkan opsi untuk mengizinkan melewatkan verifikasi SSL oleh @2013xile

### 🚀 Peningkatan

- **[klien]** tampilkan kotak centang yang dinonaktifkan (tidak dicentang) untuk bidang yang tidak dipilih ([#5503](https://github.com/nocobase/nocobase/pull/5503)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[database]** Perbaiki masalah di mana operator string "mengandung" dan "tidak mengandung" tidak menangani nilai `null` dengan benar ([#5509](https://github.com/nocobase/nocobase/pull/5509)) oleh @2013xile
- **[klien]** Perbaiki aturan tautan untuk mengevaluasi variabel parameter URL dengan benar ([#5504](https://github.com/nocobase/nocobase/pull/5504)) oleh @katherinehhh
- **[Blok: Peta]** Perbaiki masalah di mana beberapa peta ditampilkan secara tidak benar ketika ada beberapa peta karena beberapa panggilan ke metode `load` dari AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) oleh @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*Tanggal rilis: 2024-10-27*

### 🚀 Peningkatan

- **[Kontrol akses]** Optimalkan kinerja untuk tabel besar di acl ([#5496](https://github.com/nocobase/nocobase/pull/5496)) oleh @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*Tanggal rilis: 2024-10-28*

### 🐛 Perbaikan Bug

- **[Koleksi: Pohon]** Perbaiki masalah di mana jalur node tidak diperbarui saat memutuskan tautan anak ([#5522](https://github.com/nocobase/nocobase/pull/5522)) oleh @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*Tanggal rilis: 2024-10-24*

### 🎉 Fitur Baru

- **[klien]** Dukung penambahan grup pada formulir dan blok detail ([#5498](https://github.com/nocobase/nocobase/pull/5498)) oleh @katherinehhh
- **[Kalender]** plugin-kalender menambahkan pengaturan tampilan default dan konfigurasi internasionalisasi ([#5487](https://github.com/nocobase/nocobase/pull/5487)) oleh @Cyx649312038
- **[Sumber data: KingbaseES]** Dukungan untuk menggunakan database Kingbase sebagai sumber data utama atau eksternal (mode pg) oleh @chareice
  Referensi: [Sumber data - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 Peningkatan

- **[database]** Dukungan untuk logika pemuatan statis plugin ([#5466](https://github.com/nocobase/nocobase/pull/5466)) oleh @chareice
- **[klien]** Tingkatkan kinerja rendering blok tabel (waktu rendering pertama berkurang sekitar 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) oleh @zhangzhonghe
- **[Seluler]** klien seluler mendukung blok formulir filter ([#5482](https://github.com/nocobase/nocobase/pull/5482)) oleh @katherinehhh
- **[Manajer cadangan]**

  - ubah pengaturan default `Cadangkan file penyimpanan lokal` menjadi true oleh @gchust
  - Kembalikan data database jika tindakan pemulihan gagal oleh @gchust

### 🐛 Perbaikan Bug

- **[server]** Acara afterLoad aplikasi tidak dipicu setelah instalasi ([#5506](https://github.com/nocobase/nocobase/pull/5506)) oleh @chenos
- **[Formulir publik]** pendaftaran cuplikan ACL untuk formulir publik ([#5505](https://github.com/nocobase/nocobase/pull/5505)) oleh @katherinehhh
- **[Manajer cadangan]** perbaiki setelah memulihkan sub aplikasi, aplikasi utama akan crash jika sub aplikasi menggunakan skema yang berbeda oleh @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*Tanggal rilis: 2024-10-24*

### 🎉 Fitur Baru

- **[Blok: Panel aksi]** Tambahkan pengaturan judul untuk blok panel aksi ([#5492](https://github.com/nocobase/nocobase/pull/5492)) oleh @Cyx649312038

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Platform ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
