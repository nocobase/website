---
title: "NocoBase v1.4.0 Resmi Dirilis"
description: "Formulir publik, sumber data baru, dan fitur lainnya."
---

## Fitur Baru Utama

### Menyederhanakan proses penambahan dan pembaruan plugin

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* Daftar plugin sekarang dibaca langsung dari direktori lokal.
* Menggabungkan proses penambahan dan pembaruan plugin.
* Antarmuka mendukung aktivasi plugin secara batch.
* Menyederhanakan proses unduh dan upgrade untuk plugin komersial.

Dokumentasi referensi:

* [Instalasi dan Upgrade Plugin](https://docs.nocobase.com/welcome/getting-started/plugin)
* [Catatan Rilis / Menyederhanakan proses penambahan dan pembaruan plugin](https://www.nocobase.com/en/blog/simplify-the-process-of-adding-and-updating-plugins)

### Notifikasi

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **Notifikasi: Pesan dalam aplikasi**
  Mendukung pengguna untuk menerima notifikasi pesan waktu nyata di dalam aplikasi NocoBase;
* **Notifikasi: Email**
  Digunakan untuk mengirim notifikasi email dengan transport SMTP bawaan. Detail;
* **Notifikasi: WeCom**
  Mengirim notifikasi melalui saluran WeCom.

Dokumentasi referensi:

* [Manajer Notifikasi](https://docs.nocobase.com/handbook/notification-manager)

### Sinkronisasi Data Pengguna

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

Dokumentasi referensi:

* [Sinkronisasi Data Pengguna](https://docs.nocobase.com/handbook/user-data-sync)

### Manajer Cadangan

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

Dokumentasi referensi:

* [Manajer Cadangan](https://docs.nocobase.com/handbook/backups)

### Formulir Publik

Bagikan formulir publik secara eksternal untuk mengumpulkan informasi dari pengguna anonim.

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

Dokumentasi referensi:

* [Formulir Publik](https://docs.nocobase.com/handbook/public-forms)

### Sumber Data: KingbaseES

Gunakan database KingbaseES sebagai sumber data, baik sebagai database utama maupun database eksternal.

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

Dokumentasi referensi:

* [Sumber Data: Database KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### Sumber Data: Oracle Eksternal

Gunakan database Oracle eksternal sebagai sumber data.

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

Dokumentasi referensi:

* [Sumber Data Eksternal: Oracle](https://docs.nocobase.com/handbook/data-source-external-oracle)

### Kolom Koleksi: Lampiran (URL)

Mendukung lampiran berbasis URL.

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

Dokumentasi referensi:

* [Kolom Tabel Data: Lampiran (URL)](https://docs.nocobase.com/handbook/field-attachment-url)

### Komponen Kolom: Masker

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

Dokumentasi referensi:

* [Komponen kolom: Masker](https://docs.nocobase.com/handbook/field-component-mask)

### Alur Kerja: JavaScript

Node JavaScript memungkinkan pengguna untuk mengeksekusi JavaScript dalam alur kerja. Skrip dapat menggunakan variabel dari node hulu dalam proses sebagai parameter dan nilai kembalian skrip dapat digunakan di node hilir.

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

Dokumentasi referensi:

* [Node Alur Kerja - JavaScript](https://docs.nocobase.com/handbook/workflow-javascript)

### Visualisasi Data: ECharts

Menambahkan ECharts, mendukung diagram corong, radar, dan lainnya, serta menyediakan konfigurasi yang lebih ramah pengguna.

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

Dokumentasi referensi:

* [Visualisasi Data: Echarts](https://docs.nocobase.com/handbook/data-visualization-echarts)

### Blok: Formulir multi-langkah

Pisahkan formulir dengan banyak kolom menjadi beberapa langkah untuk meringankan beban pengguna.

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

Dokumentasi referensi:

* [Blok: Formulir multi-langkah](https://docs.nocobase.com/handbook/block-multi-step-from)

### Blok: Panel Aksi

Dirancang untuk menampung berbagai aksi cepat, saat ini mendukung:

* Tautan
* Pindai kode QR
* Popup
* Permintaan kustom

Mendukung tata letak grid dan daftar

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

Dokumentasi referensi:

* [Blok: Panel Aksi](https://docs.nocobase.com/handbook/block-action-panel)

## Fitur yang Dihapus

### Plugin Cadangan dan Pulihkan yang Tidak Lagi Didukung

Sejak NocoBase v0.19, kami memperkenalkan plugin `@nocobase/plugin-backup-restore` untuk pencadangan dan pemulihan aplikasi. Namun, umpan balik pengguna mengungkapkan beberapa keterbatasan dalam fungsinya:

1. Tidak dapat mencadangkan dan memulihkan metadata tingkat database, seperti nilai default untuk kolom database dan indeks unik.
2. Tidak dapat menangani objek database seperti tampilan, prosedur tersimpan, fungsi, dan pemicu selama pencadangan atau pemulihan.
3. Memerlukan konfigurasi `dumpRules` individual untuk setiap formulir plugin, seringkali memerlukan logika kustom dari pengembang plugin untuk menghindari kegagalan dalam proses pencadangan atau pemulihan.
4. Desain pengelompokan cadangan yang rumit meningkatkan beban kognitif dan dapat menyebabkan kegagalan pencadangan atau kehilangan data jika tidak dipilih dengan benar.
5. Proses pencadangan dan pemulihan terjadi di lapisan aplikasi, yang berarti akan gagal jika aplikasi tidak dapat dimulai.

Setelah pertimbangan yang matang, mulai dari versi v1.4, kami memutuskan untuk tidak lagi mendukung plugin ini. Untuk solusi cadangan baru, silakan merujuk pada dokumentasi di bawah ini.

Dokumentasi Referensi:

* [Cara Mencadangkan dan Memulihkan NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
