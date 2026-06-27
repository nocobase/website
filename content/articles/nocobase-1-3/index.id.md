---
title: "NocoBase 1.3: Sumber data REST API, mobile v2, dan fitur lainnya"
description: "NocoBase 1.3 memperkenalkan sumber data REST API dan MSSQL, dukungan untuk membuka pop-up melalui URL, konfigurasi komponen bidang secara dinamis, versi mobile yang ditingkatkan, autentikasi WeCom, array many-to-many, dan node perhitungan tanggal baru dalam alur kerja."
---

Mulai dari versi 1.3, NocoBase menyediakan dua cabang utama: **main** dan **next**.

- **main** (versi beta) berfokus pada perbaikan bug, memastikan versi yang stabil bagi pengguna.
- **next** (versi alfa) berisi beberapa fitur baru yang belum dirilis. Versi ini tidak stabil dan ditujukan bagi pengembang atau penguji untuk merasakan fitur baru lebih awal atau melakukan pengujian kompatibilitas.

Fitur baru dalam versi beta 1.3 meliputi:

## Inti

### Dukungan untuk membuka pop-up melalui URL

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

Dokumentasi referensi:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Dukungan untuk membuka pop-up sebagai halaman

Opsi "halaman" baru telah ditambahkan untuk operasi pop-up.

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

Dokumentasi referensi:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Bidang mendukung konfigurasi atribut gaya

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

Dokumentasi referensi:

- [Pengaturan bidang / Gaya](https://docs.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown dan iframe HTML mendukung mesin template Handlebars

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Dokumentasi referensi:

- [Mesin template Markdown Handlebars](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Mesin template Iframe HTML Handlebars](https://docs.nocobase.com/handbook/block-iframe#handlebars)

### Dukungan untuk mengonfigurasi komponen bidang secara dinamis

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

Dokumentasi referensi:

- [Pengaturan bidang / Komponen bidang](https://docs.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [Contoh plugin / Komponen bidang dengan nilai](https://docs.nocobase.com/plugin-samples/field/value)

## Plugin

### Sumber data REST API

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

Dokumentasi referensi:

- [Sumber data / Sumber data REST API](https://docs.nocobase.com/handbook/data-source-rest-api)

### Sumber data eksternal MSSQL

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

Dokumentasi referensi:

- [Sumber data / Basis data eksternal / MSSQL Eksternal](https://docs.nocobase.com/handbook/data-source-external-mssql)

### Mobile V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

Dokumentasi referensi:

- [Seluler](https://docs.nocobase.com/handbook/mobile)

### Banyak-ke-banyak (array)

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

Dokumentasi referensi:

- [Banyak-ke-banyak (array)](https://docs.nocobase.com/handbook/field-m2m-array)

### Autentikasi: WeCom

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

Dokumentasi referensi:

- [Autentikasi: WeCom](https://docs.nocobase.com/handbook/wecom/auth)

### Alur kerja: Node perhitungan tanggal

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

Dokumentasi referensi:

- [Alur kerja: Node perhitungan tanggal](https://docs.nocobase.com/handbook/workflow-date-calculation)

## Perubahan penting

### Variabel lingkungan `DB_TIMEZONE` diubah menjadi `TZ`

Variabel lingkungan baru `TZ` telah ditambahkan untuk mengatur zona waktu aplikasi, dengan default zona waktu sistem operasi. `DB_TIMEZONE` lama tetap kompatibel tetapi tidak digunakan lagi.

Referensi:

- [Variabel Lingkungan / TZ](https://docs.nocobase.com/welcome/getting-started/env#tz)
