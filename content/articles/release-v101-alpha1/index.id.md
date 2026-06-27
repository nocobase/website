---
title: "NocoBase v1.0.1-alpha.1: Blok mendukung pengaturan tinggi"
description: "NocoBase v1.0.1-alpha.1 memperkenalkan fitur baru seperti pengaturan tinggi blok, tindakan tautan URL, dan dukungan variabel untuk iframe, bersama dengan berbagai perbaikan dan pembaruan bug untuk meningkatkan fungsionalitas dan kinerja platform."
---

## Fitur baru

### Blok mendukung pengaturan tinggi ([#4441](https://github.com/nocobase/nocobase/pull/4441))

![20240603115253](https://static-docs.nocobase.com/20240603115253.gif)

Dokumen referensi:

* [Mengatur tinggi blok](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### Tindakan tautan: navigasi ke URL yang ditentukan ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Mendukung konfigurasi variabel di URL atau parameter pencarian.

<video controls="" height="250" width="100%"></video>

Dokumen referensi:

* [Tindakan tautan](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Menambahkan variabel baru bernama "Parameter pencarian URL" ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Variabel ini hanya tersedia jika ada string kueri di URL halaman, sehingga lebih nyaman digunakan bersama dengan [tindakan tautan](https://docs.nocobase.com/handbook/ui/actions/types/link).

![20240603170651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

Dokumen referensi:

* [Parameter pencarian URL](https://docs.nocobase.com/handbook/ui/variables#url-search-params)
* [Tindakan tautan](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Iframe mendukung variabel ([#4512](https://github.com/nocobase/nocobase/pull/4512))

![20240603114711](https://static-docs.nocobase.com/20240603114711.png)

![20240603114750](https://static-docs.nocobase.com/20240603114750.png)

Dokumen referensi:

* [Blok iframe](https://docs.nocobase.com/handbook/block-iframe)

### Penyimpanan file mendukung konfigurasi ukuran dan tipe file ([#4118](https://github.com/nocobase/nocobase/pull/4118))

![20240603115303](https://static-docs.nocobase.com/20240603115303.png)

Dokumen referensi:

* [Penyimpanan File](https://docs.nocobase.com/handbook/file-manager/storage)

### Alur kerja: node variabel mendukung pemilihan jalur parsial dari objek data sebagai nilai variabel

![20240531211727](https://static-docs.nocobase.com/20240531211727.png)

### Bidang URL mendukung pratinjau ([#4559](https://github.com/nocobase/nocobase/pull/4559))

Saat ini hanya mendukung pratinjau gambar.

![337101796-916a6c97-bc08-4560-9526-53e482e2ac6c](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### Visualisasi data: Dukungan untuk variabel "Parameter kueri URL" dan "Peran saat ini" ([#4586](https://github.com/nocobase/nocobase/pull/4586))

![data-visualization-filter-block](https://static-docs.nocobase.com/202406071148997.png)

![data-visualization-filter](https://static-docs.nocobase.com/202406071149567.png)

## Peningkatan

### Optimasi fungsi impor dan ekspor ([#4468](https://github.com/nocobase/nocobase/pull/4468))

Meningkatkan stabilitas fungsi impor dan ekspor, meningkatkan batas impor dan ekspor hingga 2000 catatan. Mendukung logika impor dan ekspor yang diperluas untuk tipe bidang kustom.

![20240611112948](https://static-docs.nocobase.com/20240611112948.png)

### Menghindari kesalahan operasi dengan menonaktifkan opsi variabel tanggal ([#4452](https://github.com/nocobase/nocobase/pull/4452))

Kecuali untuk "waktu saat ini", variabel yang mewakili tanggal adalah interval (array) bukan momen (string). Variabel tersebut dapat digunakan untuk pemfilteran, tetapi tidak dapat langsung digunakan sebagai nilai default.

![20240527150429](https://static-docs.nocobase.com/20240527150429.png)

### Optimasi interaksi penugasan aturan tautan ([#4492](https://github.com/nocobase/nocobase/pull/4492))

Bidang pilihan ganda tidak menampilkan opsi penugasan. Jika bidang pilihan tunggal dipilih dan ditugaskan, kemudian beralih ke bidang pilihan ganda akan menghapus konfigurasi.

![20240603143309](https://static-docs.nocobase.com/20240603143309.png)

### Menyesuaikan ikon kanan atas dari kolom tindakan di blok tabel ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![20240603115131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### ErrorFallback ([#4459](https://github.com/nocobase/nocobase/pull/4459))

Menyempurnakan fallback error untuk berbagai komponen di frontend untuk mencegah seluruh halaman menjadi tidak dapat digunakan karena error frontend.

![error-fallback](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### Mengumpulkan informasi debug dan mengunduh log dengan cepat saat terjadi error frontend ([#4524](https://github.com/nocobase/nocobase/pull/4524))

![error-fallback-log](https://static-docs.nocobase.com/202406041224009.png)

### Lainnya

* Mengubah batas panjang karakter nama pengguna menjadi 1-50 ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* Jangan sembunyikan bidang kunci asing ([#4499](https://github.com/nocobase/nocobase/pull/4499))

## Perbaikan bug

### Lingkup data dalam dialog konfigurasi izin tidak boleh mendukung variabel "Formulir saat ini" dan "Catatan popup saat ini" ([#4484](https://github.com/nocobase/nocobase/pull/4484))

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### Mendukung pemilihan nilai variabel secara langsung sebagai nilai default untuk bidang asosiasi ([#4439](https://github.com/nocobase/nocobase/pull/4439))

![20240603121447](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### Memperbaiki masalah error saat menambahkan tindakan "Permintaan kustom" beberapa kali ([#4458](https://github.com/nocobase/nocobase/pull/4458))

![20240603115234](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### Lainnya

* Memperbaiki masalah konten di sub-tabel tidak dibersihkan setelah pengiriman formulir. ([#4475](https://github.com/nocobase/nocobase/pull/4475))
* Memperbaiki masalah penggunaan variabel "Objek saat ini" yang tidak normal di sub-tabel. ([#4521](https://github.com/nocobase/nocobase/pull/4521))
* Menambahkan opsi 'Atur tingkat zoom default' untuk bidang peta. ([#4527](https://github.com/nocobase/nocobase/pull/4527))
* Memperbaiki masalah blok tidak ditampilkan saat menambahkan blok menggunakan template blok di jendela popup. ([#4531](https://github.com/nocobase/nocobase/pull/4531))
* Memperbaiki masalah gaya template data formulir. ([#4536](https://github.com/nocobase/nocobase/pull/4536))
* Alur kerja: gaya kotak ekspresi menghilang di node kalkulasi. ([#4513](https://github.com/nocobase/nocobase/pull/4513))
* Alur kerja: tipe bidang salah saat dibuat di formulir kustom node manual. ([#4519](https://github.com/nocobase/nocobase/pull/4519))
* Alur kerja: masalah izin saat memicu event tindakan kustom. ([#4522](https://github.com/nocobase/nocobase/pull/4522))
* Alur kerja: konfigurasi kedalaman yang salah dari pramuat asosiasi untuk beberapa sumber data. ([#4526](https://github.com/nocobase/nocobase/pull/4526))
* Bug pustaka `json-templates`. ([#4525](https://github.com/nocobase/nocobase/pull/4525))
* Manajer file: error saat mengunggah atau menghapus file di COS. ([#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537))
* Aturan tautan formulir menampilkan [object Object] saat menetapkan nilai 0,00 ke bidang numerik. ([#4482](https://github.com/nocobase/nocobase/pull/4482))
* Sub-tabel kehilangan item pengaturan kontrol untuk tombol tambah baru. ([#4498](https://github.com/nocobase/nocobase/pull/4498))
* Tombol kirim di formulir edit tabel kehilangan item pengaturan aturan tautan. ([#4515](https://github.com/nocobase/nocobase/pull/4515))
* Visualisasi data: memperbaiki masalah komponen bidang tidak terlihat saat mengatur nilai default untuk bidang filter bagan ([#4509](https://github.com/nocobase/nocobase/pull/4509))
* Autentikasi: memperbaiki masalah halaman pendaftaran tidak ditemukan untuk autentikator dasar yang baru dibuat. ([#4556](https://github.com/nocobase/nocobase/pull/4556))
* Lokalisasi: memperbaiki masalah judul halaman tidak diterjemahkan saat menerjemahkan teks menu. ([#4557](https://github.com/nocobase/nocobase/pull/4557))
* Peta: memperbaiki masalah AMap menampilkan error kunci meskipun konfigurasi sudah benar. ([#4574](https://github.com/nocobase/nocobase/pull/4574))
