---
title: "Pembaruan Mingguan NocoBase: Dukungan Pemicu Aksi Kustom Secara Global atau Batch"
description: "Pembaruan minggu ini meliputi: dukungan untuk memicu aksi kustom secara global atau batch, perluasan bidang preset dalam koleksi, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/en/blog/v1.5.7)

*Tanggal rilis: 14-02-2025*

#### 🚀 Peningkatan

- **[Notifikasi: Pesan dalam aplikasi]** Hapus pencatatan kesalahan konsol untuk percobaan ulang koneksi SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) oleh @sheldon66

#### 🐛 Perbaikan Bug

- **[klien]**

  - pengaturan seret yang hilang di modal operasi pembuatan cepat data relasi ([#6201](https://github.com/nocobase/nocobase/pull/6201)) oleh @katherinehhh
  - masalah dengan pemformatan angka presisi tinggi yang tidak diterapkan ([#6202](https://github.com/nocobase/nocobase/pull/6202)) oleh @katherinehhh
  - Memperbaiki masalah di mana membersihkan bidang asosiasi dalam formulir tidak benar-benar membersihkan nilai bidang saat mengirimkan formulir ([#5540](https://github.com/nocobase/nocobase/pull/5540)) oleh @zhangzhonghe
  - Blok tidak menyegarkan setelah pengiriman formulir ([#6206](https://github.com/nocobase/nocobase/pull/6206)) oleh @zhangzhonghe
  - nilai bidang tertaut yang bertahan pada pengiriman setelah pengaturan ulang bidang relasi ([#6207](https://github.com/nocobase/nocobase/pull/6207)) oleh @katherinehhh
  - tindakan perbarui ditampilkan untuk baris tanpa izin perbarui di tabel ([#6204](https://github.com/nocobase/nocobase/pull/6204)) oleh @katherinehhh
- **[Bidang koleksi: Urutkan]** Perbaiki tipe bidang urutkan tidak terdaftar di sumber data eksternal ([#6212](https://github.com/nocobase/nocobase/pull/6212)) oleh @mytharcher
- **[Otentikasi]** Masalah otentikasi WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) oleh @2013xile
- **[Bidang koleksi: Lampiran(URL)]** Perbaiki URL permintaan yang tidak berlaku di hook oleh @mytharcher

### [v1.5.8](https://www.nocobase.com/en/blog/v1.5.8)

*Tanggal rilis: 17-02-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - Tidak dapat membuka popup tautan bidang di halaman sematan ([#6222](https://github.com/nocobase/nocobase/pull/6222)) oleh @gchust
  - Di formulir edit, nilai bidang asosiasi yang ditampilkan tidak berubah saat bidang terkait diperbarui ([#6210](https://github.com/nocobase/nocobase/pull/6210)) oleh @Cyx649312038
- **[Seluler]** Data menu seluler tidak lengkap di tabel konfigurasi izin ([#6219](https://github.com/nocobase/nocobase/pull/6219)) oleh @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/en/blog/v1.5.9)

*Tanggal rilis: 17-02-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - masalah scrollbar horizontal pada halaman ([#6232](https://github.com/nocobase/nocobase/pull/6232)) oleh @katherinehhh
  - Saat menutup sub-halaman, beberapa permintaan data blok dipicu ([#6233](https://github.com/nocobase/nocobase/pull/6233)) oleh @zhangzhonghe
  - Kunci unik yang hilang untuk submenu bidang asosiasi di UI ([#6230](https://github.com/nocobase/nocobase/pull/6230)) oleh @gchust
- **[Visualisasi data]** Kesalahan pemfilteran terjadi ketika nama sumber data mengandung tanda hubung `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) oleh @2013xile

### [v1.5.10](https://www.nocobase.com/en/blog/v1.5.10)

*Tanggal rilis: 18-02-2025*

#### 🚀 Peningkatan

- **[Bidang koleksi: Markdown(Vditor)]** Vditor CDN menggunakan sumber daya lokal ([#6229](https://github.com/nocobase/nocobase/pull/6229)) oleh @chenos

#### 🐛 Perbaikan Bug

- **[Alur kerja: Node perulangan]** Perbaiki perulangan keluar lebih awal ketika node di dalam tertunda ([#6236](https://github.com/nocobase/nocobase/pull/6236)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/en/blog/v1.6.0-beta.7)

*Tanggal rilis: 14-02-2025*

#### 🐛 Perbaikan Bug

- **[Otentikasi]** Tingkatkan logika penanganan kesalahan pembaruan token bersamaan dan otentikasi. ([#6208](https://github.com/nocobase/nocobase/pull/6208)) oleh @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/en/blog/v1.6.0-beta.8)

*Tanggal rilis: 15-02-2025*

#### 🐛 Perbaikan Bug

- **[WeCom]** Masalah login otomatis di klien WeCom oleh @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/en/blog/v1.6.0-alpha.26)

*Tanggal rilis: 16-02-2025*

#### 🎉 Fitur Baru

- **[klien]** Mendukung perluasan operator filter frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) oleh @katherinehhh
- **[Alur kerja: Acara tindakan kustom]** Mendukung rekaman global atau batch yang memicu acara tindakan kustom oleh @mytharcher

#### 🚀 Peningkatan

- **[Alur kerja]** Pindahkan pengaturan ikat alur kerja ke plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) oleh @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/en/blog/v1.6.0-alpha.27)

*Tanggal rilis: 16-02-2025*

#### 🎉 Fitur Baru

- **[klien]** mendukung perluasan bidang preset dalam koleksi ([#6183](https://github.com/nocobase/nocobase/pull/6183)) oleh @katherinehhh
- **[Kalender]** Mendukung perluasan bidang opsional untuk plugin Kanban, Kalender, dan Bidang Formula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) oleh @katherinehhh

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
