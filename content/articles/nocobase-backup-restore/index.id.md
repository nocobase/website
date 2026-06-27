---
title: "Cara Mencadangkan dan Memulihkan NocoBase"
description: "Bagaimana pencadangan dan pemulihan harus ditangani di versi baru? Artikel ini akan memberikan pengenalan mendetail tentang solusi pencadangan baru."
---

## Latar Belakang

Mulai dari NocoBase v0.19, kami memperkenalkan plugin `@nocobase/plugin-backup-restore` untuk pencadangan dan pemulihan aplikasi. Namun, pengalaman pengguna yang sebenarnya belum ideal, dengan masalah utama sebagai berikut:

1. Plugin tidak mendukung pencadangan dan pemulihan metadata tingkat basis data seperti nilai default, indeks unik, dll.
2. Tampilan basis data, prosedur tersimpan, fungsi, pemicu, dan komponen lainnya tidak dapat dicadangkan atau dipulihkan.
3. Setiap formulir plugin memerlukan konfigurasi `dumpRules` terpisah, dan pengembang plugin mungkin perlu menerapkan logika kustom. Tanpa ini, pencadangan dan pemulihan dapat dengan mudah gagal.
4. Desain pengelompokan pencadangan rumit dan memiliki kurva pembelajaran yang tinggi. Pemilihan yang tidak tepat dapat menyebabkan kegagalan pencadangan atau kehilangan data.
5. Proses pencadangan dan pemulihan terjadi di lapisan aplikasi. Jika aplikasi gagal dimulai, pencadangan atau pemulihan juga akan gagal.

Setelah pertimbangan yang matang, mulai dari versi v1.4, kami memutuskan untuk tidak lagi menggunakan plugin ini. Lalu, bagaimana cara menangani pencadangan dan pemulihan di versi baru? Artikel ini akan memberikan pengenalan mendetail tentang solusi pencadangan baru.

## Data Apa yang Harus Dicadangkan?

Dalam proses pencadangan dan pemulihan NocoBase, jenis data berikut terutama terlibat:

* **Data Basis Data Utama**: Jenis basis data utama yang didukung meliputi PostgreSQL, MySQL, MariaDB, dan KingbaseES.
* **Data Basis Data Eksternal**: Jenis basis data eksternal yang didukung meliputi PostgreSQL, MySQL, MariaDB, MSSQL, Oracle, dan KingbaseES.
* **Data Basis Data Sub-aplikasi**: Setiap sub-aplikasi adalah basis data independen. Jika menggunakan PostgreSQL, sub-aplikasi yang berbeda juga dapat dibedakan dengan skema.
* **Data Direktori Penyimpanan**: Anda dapat mencadangkan seluruh folder atau hanya data penting tertentu, seperti:
  * **Data Lampiran**: File di direktori `./storage/uploads`, yang merupakan penyimpanan lokal untuk pengelola file.
  * **Kode Plugin**: Plugin di direktori `./storage/plugins`, termasuk plugin komersial dan plugin pihak ketiga.

## Proses Pencadangan dan Pemulihan

### 1. Mencadangkan Data Basis Data

Perintah pencadangan untuk basis data yang berbeda adalah sebagai berikut:

#### PostgreSQL

```bash
pg_dump -U [nama-pengguna] -h [host] -p [port] -F c -b --quote-all-identifiers -f [jalur-file-cadangan] [nama-basis-data]
```

#### MySQL/MariaDB

```bash
mysqldump -u [nama-pengguna] -p -h [host] -P [port] --databases [nama-basis-data] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [jalur-file-cadangan].sql
```

### 2. Memulihkan Cadangan ke Basis Data Aplikasi Target

Perintah pemulihan untuk basis data yang berbeda adalah sebagai berikut:

#### PostgreSQL

```bash
pg_restore -U [nama-pengguna] -h [host] -p [port] -d [nama-basis-data] --clean --if-exists --no-owner [jalur-file-cadangan]
```

#### MySQL/MariaDB

```bash
mysql -u [nama-pengguna] -p -h [host] -P [port] [nama-basis-data] < [jalur-file-cadangan].sql
```

### 3. Menimpa Penyimpanan Aplikasi Target dengan Penyimpanan Cadangan

```bash
# 1. Cadangkan direktori /app2/storage/ ke /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. Salin semua konten dari /app1/storage/ ke /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. Jalankan Perintah Upgrade dan Mulai Aplikasi

```bash
# Upgrade aplikasi
yarn nocobase upgrade

# Mulai aplikasi di lingkungan produksi
yarn start

# Mulai aplikasi di lingkungan pengembangan lokal
yarn dev
```

Catatan:

* Jika Anda menggunakan Docker, cukup mulai ulang kontainer.

## Plugin Pengelola Cadangan

Mulai dari NocoBase v1.4, pengguna edisi Professional atau Enterprise dapat langsung menggunakan plugin [Pengelola Cadangan](https://docs.nocobase.com/handbook/backups) yang baru untuk mengelola pencadangan dan pemulihan data aplikasi dengan mudah.
