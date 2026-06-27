---
title: "Pembaruan Mingguan NocoBase: Meningkatkan Ekstensibilitas Penyimpanan Berkas"
description: "Pembaruan minggu ini meliputi: meningkatkan ekstensibilitas penyimpanan berkas, perbaikan bug, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat diperiksa di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alpha, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/en/blog/v1.4.25)

*Tanggal rilis: 2025-01-16*

#### 🚀 Peningkatan

- **[klien]** Meningkatkan ekstensibilitas penyimpanan file ([#6071](https://github.com/nocobase/nocobase/pull/6071)) oleh @chenos
- **[Alur Kerja]** Memperbaiki komponen bidang ulangi dalam konfigurasi jadwal ([#6067](https://github.com/nocobase/nocobase/pull/6067)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Seluler]** Memperbaiki masalah tombol bawah yang terhalang di perangkat seluler ([#6068](https://github.com/nocobase/nocobase/pull/6068)) oleh @zhangzhonghe
- **[Alur Kerja: Acara tindakan kustom]** Memperbaiki konteks untuk koleksi http oleh @mytharcher
- **[Manajer cadangan]** Memperbaiki kemungkinan kesalahan cadangan saat plugin collection-fdw tidak diaktifkan oleh @gchust
- **[Departemen]** Memperbaiki acara tindakan kustom tidak dapat dipicu pada koleksi departemen oleh @mytharcher

### [v1.4.26](https://www.nocobase.com/en/blog/v1.4.26)

*Tanggal rilis: 2025-01-16*

#### 🚀 Peningkatan

- **[klien]** Memungkinkan menambahkan deskripsi untuk koleksi SQL ([#6081](https://github.com/nocobase/nocobase/pull/6081)) oleh @2013xile
- **[resourcer]** Mengizinkan objek kosong sebagai nilai dalam aksi ([#6070](https://github.com/nocobase/nocobase/pull/6070)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Lokalisasi]** Menghindari permintaan API saat mencoba menghapus terjemahan kosong ([#6078](https://github.com/nocobase/nocobase/pull/6078)) oleh @2013xile

### [v1.4.27](https://www.nocobase.com/en/blog/v1.4.27)

*Tanggal rilis: 2025-01-18*

#### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana data blok kosong di jendela popup pada halaman tersemat ([#6086](https://github.com/nocobase/nocobase/pull/6086)) oleh @zhangzhonghe
- **[Alur Kerja]** Memperbaiki dispatch tidak diproses dalam fase persiapan ([#6087](https://github.com/nocobase/nocobase/pull/6087)) oleh @mytharcher

### [v1.4.28](https://www.nocobase.com/en/blog/v1.4.28)

*Tanggal rilis: 2025-01-21*

#### 🐛 Perbaikan Bug

- **[klien]** Nilai default bidang asosiasi belum diperbarui ([#6103](https://github.com/nocobase/nocobase/pull/6103)) oleh @chenos
- **[Aksi: Edit massal]** Hapus template data formulir dari pengaturan formulir aksi edit massal ([#6098](https://github.com/nocobase/nocobase/pull/6098)) oleh @katherinehhh
- **[Verifikasi]** Memperbaiki ID penyedia dapat diedit ([#6097](https://github.com/nocobase/nocobase/pull/6097)) oleh @mytharcher

### [v1.4.29](https://www.nocobase.com/en/blog/v1.4.29)

*Tanggal rilis: 2025-01-21*

#### 🎉 Fitur Baru

- **[Blok: Panel aksi]** Mendukung konfigurasi jumlah ikon per baris di panel aksi seluler ([#6106](https://github.com/nocobase/nocobase/pull/6106)) oleh @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/en/blog/v1.5.0-beta.29)

*Tanggal rilis: 2025-01-16*

#### 🚀 Peningkatan

- **[Manajer cadangan]** Pesan kesalahan yang ditingkatkan untuk kegagalan pemulihan oleh @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/en/blog/v1.5.0-beta.30)

*Tanggal rilis: 2025-01-16*

#### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana nilai default untuk bidang asosiasi tidak berlaku dalam mode Easy-reading ([#6066](https://github.com/nocobase/nocobase/pull/6066)) oleh @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/en/blog/v1.5.0-beta.31)

*Tanggal rilis: 2025-01-17*

#### 🐛 Perbaikan Bug

- **[Sinkronisasi data pengguna]** Memperbaiki masalah di mana tombol "coba lagi" tidak ditampilkan di daftar tugas ([#6079](https://github.com/nocobase/nocobase/pull/6079)) oleh @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/en/blog/v1.5.0-beta.32)

*Tanggal rilis: 2025-01-17*

#### 🚀 Peningkatan

- **[Alur Kerja]** Mengubah nama API menjadi yang masuk akal ([#6082](https://github.com/nocobase/nocobase/pull/6082)) oleh @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/en/blog/v1.5.0-beta.33)

*Tanggal rilis: 2025-01-21*

#### 🎉 Fitur Baru

- **[Alur Kerja]** Menambahkan konfigurasi batas tumpukan untuk alur kerja ([#6077](https://github.com/nocobase/nocobase/pull/6077)) oleh @citlalinda

#### 🚀 Peningkatan

- **[Alur Kerja: Node loop]** Memperbaiki gaya ([#6095](https://github.com/nocobase/nocobase/pull/6095)) oleh @mytharcher
- **[Manajer file]** dukungan untuk plugin penyimpanan lainnya ([#6096](https://github.com/nocobase/nocobase/pull/6096)) oleh @jiannx
  Referensi: [Penyimpanan File: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Alur Kerja: test kit]** menyesuaikan gaya kanvas alur kerja, untuk membuat konten lebih padat ([#6088](https://github.com/nocobase/nocobase/pull/6088)) oleh @mytharcher
- **[Alur Kerja: Node kueri JSON]** Menambahkan ikon ke node oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/en/blog/v1.6.0-alpha.15)

*Tanggal rilis: 2025-01-19*

#### 🎉 Fitur Baru

- **[klien]** Mendukung pengaturan properti deskripsi di blok ([#6015](https://github.com/nocobase/nocobase/pull/6015)) oleh @katherinehhh
- **[Otentikasi]** Mendukung konfigurasi keamanan token. ([#5948](https://github.com/nocobase/nocobase/pull/5948)) oleh @sheldon66
  Referensi: [Kebijakan keamanan token](https://docs.nocobase.com/handbook/token-policy)
- **[Alur Kerja: Node manual]** Menambahkan kolom judul tugas di blok todo ([#6051](https://github.com/nocobase/nocobase/pull/6051)) oleh @mytharcher

#### 🚀 Peningkatan

- **[Alur Kerja: Acara tindakan kustom]** Mengubah API dari eksekusi manual oleh @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/en/blog/v1.6.0-alpha.16)

*Tanggal rilis: 2025-01-19*

#### 🎉 Fitur Baru

- **[Blok: Panel aksi]** Mendukung konfigurasi jumlah ikon per baris di panel aksi seluler ([#6046](https://github.com/nocobase/nocobase/pull/6046)) oleh @katherinehhh

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
