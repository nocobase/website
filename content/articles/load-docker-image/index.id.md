---
title: "Cara mengunggah gambar Docker ke server intranet"
description: "Artikel ini memandu pengguna tentang cara memuat gambar Docker di NocoBase untuk memudahkan migrasi instance dan penerapan offline."
---

## 1. Unduh image Docker

Jalankan perintah berikut di terminal lokal Anda:

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. Simpan image Docker sebagai file tar

Setelah unduhan selesai, jalankan perintah berikut untuk menyimpan image sebagai file tar:

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. Unggah file tar ke server

Jalankan perintah berikut di terminal lokal Anda untuk mengunggah `nocobase-latest.tar` ke server:

```bash
scp nocobase-latest.tar user@ip:/home/user/
```

## 4. Muat image Docker di server

Hubungkan ke server melalui SSH dan muat image Docker:

```bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

Setelah menyelesaikan langkah-langkah ini, image Docker akan berhasil diimpor ke server internal.
