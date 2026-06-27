---
title: "Penyederhanaan Tata Kelola Arsitektur: Membangun Katalog Aplikasi dengan NocoBase"
description: "Tujuannya adalah untuk menunjukkan potensi dan kemudahan NocoBase dalam mengembangkan aplikasi web tanpa coding."
---

📝 **Catatan:** Artikel ini terakhir diperbarui pada 23 Januari 2026. Kami secara rutin memperbarui informasi untuk memastikan Anda mendapatkan wawasan terbaru! 😊

Blog ini dibuat oleh Leandro Martins dan pertama kali diterbitkan di [Build Application Catalog with NocoBase](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#).

Tujuannya adalah untuk mendemonstrasikan potensi dan kemudahan [NocoBase](https://www.nocobase.com/) dalam mengembangkan aplikasi web tanpa coding. Sebagai studi kasus, saya akan membuat katalog aplikasi untuk membantu tata kelola arsitektur. Kasus ini akan melibatkan pemodelan, instalasi, pembuatan tabel, menu, formulir, grafik, dan alur kerja menggunakan fitur-fitur NocoBase.

Untuk artikel ini, kita akan menggunakan teknologi berikut: NocoBase, Postgres, dan Docker.

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan tanpa kode/rendah kode berbasis AI yang paling ekstensibel untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Platform ini sepenuhnya di-host sendiri, berbasis plugin, dan ramah pengembang. →[ Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---

## **Apa itu NocoBase?**

[NocoBase](https://www.nocobase.com/) adalah platform sumber terbuka yang ditulis dalam JavaScript, menggunakan NodeJS, TypeScript, dan AntDesign, yang dirancang untuk membuat aplikasi kustom tanpa perlu coding. Ini adalah solusi backend rendah kode yang memungkinkan pembuatan tabel secara visual, formulir kustom, otomatisasi alur kerja, dan antarmuka yang disesuaikan.

![Apa itu NocoBase?.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **Sorotan Utama NocoBase**:

* **Komunitas aktif**: Forum yang sangat aktif untuk mendukung pengembangan plugin dan pemecahan masalah.
* **Kode yang terus ditinjau**: Pembaruan sering dengan kontribusi di GitHub, memiliki lebih dari 13 ribu bintang.
* **Kompatibilitas basis data**: Mendukung basis data relasional utama seperti Postgres dan MySQL.
* **Pemodelan data visual**: Tentukan tabel dan data secara visual menggunakan plugin Basis Data Utama.
* **Pustaka plugin yang luas**: Menawarkan berbagai plugin gratis dan berbayar, dengan kemampuan untuk mengembangkan plugin kustom.

* **Karyawan AI yang tertanam dalam sistem**: Integrasikan kemampuan AI secara mulus ke dalam antarmuka pengguna, alur kerja bisnis, dan konteks data, memungkinkan AI diterapkan secara praktis dalam skenario perusahaan nyata.

![Sorotan Utama NocoBase.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **Ikhtisar Studi Kasus**

Untuk menampilkan beberapa fitur NocoBase, kita akan membuat studi kasus bernama *Portal Arsitektur*. Portal ini dirancang untuk mengatur data tentang aplikasi suatu organisasi, dengan fungsionalitas berikut:

* **Katalog aplikasi**.
* **Pengingat untuk pembaruan**, seperti peningkatan versi dan perpanjangan sertifikat.
* **Katalog API** untuk sistem organisasi.
* **Grafik** untuk visualisasi data yang mendalam.

![Ikhtisar Studi Kasus.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **Tahapan Pengembangan**

### **Memodelkan Data**

Langkah pertama adalah memetakan dan mendefinisikan bidang yang akan kita sertakan di Portal Arsitektur. Berikut adalah contohnya:

```
1. Katalog Aplikasi

Aplikasi:
id: Pengidentifikasi unik.
name: Nama aplikasi.
description: Deskripsi detail aplikasi.
stack: Teknologi yang digunakan.
owner: Orang atau tim yang bertanggung jawab.
created_at: Tanggal pembuatan.
last_updated: Tanggal pembaruan terakhir.

Pengingat (Tertaut ke Aplikasi):
id: Pengidentifikasi unik.
application_id: Referensi ke aplikasi.
type: Jenis pengingat (misalnya, pembaruan versi, perpanjangan sertifikat).
description: Deskripsi pengingat.
scheduled_date: Tanggal yang dijadwalkan untuk pengingat.
status: Status (misalnya, Tertunda, Selesai).

2. Katalog API

API:
id: Pengidentifikasi unik.
Application_id: Referensi ke sistem yang sesuai.
name: Nama API.
description: Deskripsi fungsional API.
documentation_url: Tautan ke dokumentasi resmi.
last_updated: Tanggal pembaruan terakhir.
version: Versi saat ini.
```

### **Menginstal NocoBase**

Untuk [instalasi](https://docs.nocobase.com/welcome/getting-started/installation) dan konfigurasi, saya memilih untuk menggunakan versi Docker secara lokal. Opsi instalasi lainnya termasuk npm atau sumber Git.

Di bawah ini adalah kode YAML untuk Docker Compose. Setelah menginstal Docker, navigasikan ke direktori file YAML dan jalankan perintah berikut:

```
docker compose up -d
```

Ini akan meluncurkan NocoBase di mesin Anda pada port `13000`. Buka [`http://localhost:13000`](http://localhost:13000/) di peramban web Anda. Kredensial default adalah [`admin@nocobase.com`](mailto:admin@nocobase.com) dan `admin123`.

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # Kunci rahasia aplikasi, digunakan untuk menghasilkan token pengguna, dll.
      # Jika APP_KEY diubah, token lama juga akan menjadi tidak valid.
      # Ini bisa berupa string acak apa pun, dan pastikan tidak terekspos.
      - APP_KEY=your-secret-key
      # Jenis basis data, mendukung postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Host basis data, dapat diganti dengan IP server basis data yang ada
      - DB_HOST=postgres
      # Nama basis data
      - DB_DATABASE=nocobase
      # Pengguna basis data
      - DB_USER=nocobase
      # Kata sandi basis data
      - DB_PASSWORD=nocobase
      # Zona waktu
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # Jika menggunakan server basis data yang ada, layanan postgres dapat dihilangkan
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **Membuat Tabel dan Data**

Menggunakan plugin **Manajer Sumber Data**, kita dapat membuat koleksi (tabel) dan mendefinisikan bidang. Prosesnya sederhana dan mengikuti model yang diuraikan di atas. Berikut adalah beberapa referensi dan tautan untuk detail lebih lanjut tentang plugin [di sini](https://www.nocobase.com/en/plugins)).

![Membuat Tabel dan Data.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![Membuat Tabel dan Data.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **Membuat Menu**

Dengan mengklik ikon seperti pensil di sisi kanan layar, Anda dapat membuat menu atas dan samping, seperti yang ditunjukkan pada gambar. Mari kita tiru seperti yang didemonstrasikan pada gambar.

![Membuat Menu.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **Membuat Formulir**

Membuat formulir (CRUD) juga sangat mudah. NocoBase menggunakan blok untuk membuat tabel, formulir, detail, daftar, grafik, kartu, dan lainnya. Setelah memilih jenis blok, cukup pilih koleksi (tabel) mana yang ingin Anda tautkan ke blok ini, dan komponen (blok) yang tertaut ke koleksi akan muncul secara ajaib. Setiap blok memiliki pengaturan kustomisasinya sendiri. Untuk detail lebih lanjut tentang blok, periksa di sini.

![Membuat Formulir.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **Membuat Grafik**

Membangun grafik juga sederhana. Cukup tambahkan blok bernama *Grafik* dan pilih koleksi yang ingin Anda gunakan sebagai sumber data, seperti yang ditunjukkan pada gambar di bawah ini.

![Membuat Grafik.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

Setelah blok dipilih, Anda dapat mengonfigurasi properti grafik. Gambar di bawah ini menunjukkan opsi konfigurasi grafik, yang memungkinkan Anda mendefinisikan indikator, pengelompokan, filter, berbagai jenis grafik, dan judul, di antara properti lain yang tersedia. Di sini, Anda dapat menjelajahi semua kemungkinan konfigurasi.

![Membuat Grafik.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **Membuat Alur Kerja Terjadwal untuk Pengingat**

NocoBase memungkinkan Anda membuat alur kerja otomatis untuk melakukan berbagai jenis tugas melalui peristiwa. Tiga jenis pemicu adalah: *Peristiwa Koleksi, Peristiwa Terjadwal, dan Peristiwa Pasca-Tindakan.* Menggunakan pemicu ini, Anda dapat membuat tindakan dalam sistem, seperti mengirim notifikasi, menyisipkan data ke tabel lain, atau membuat permintaan ke API eksternal. Di bawah ini adalah contoh alur kerja untuk mengirim notifikasi dalam aplikasi.

![Alur Kerja.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

Dalam kasus kami, kami akan membuat alur kerja untuk mengirim notifikasi pada hari pengingat dijadwalkan. Ini akan menjadi **Peristiwa Terjadwal** untuk berjalan setiap hari pada waktu tertentu, seperti yang ditunjukkan pada gambar di bawah ini.

![Alur Kerja.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![Alur Kerja.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

Selain mengonfigurasi jadwal, Anda perlu mengatur alur kerja untuk menanyakan koleksi **Pengingat**, mengambil pengingat untuk hari itu, mengulangi setiap pengingat, dan mengirim notifikasi untuk setiap pengingat, seperti yang ditunjukkan pada gambar di bawah ini. Prosesnya sederhana: cukup tambahkan tindakan ini dengan mengklik tombol "+" dan mengonfigurasinya.

![Alur Kerja.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

Setelah menyelesaikan konfigurasi, cukup aktifkan alur kerja dengan mengklik tombol "Aktif" di sudut kanan atas. Untuk melihat hasil eksekusi, klik "…" di sudut kanan atas dan pilih **Riwayat Eksekusi**, seperti yang ditunjukkan pada gambar di bawah ini.

![Alur Kerja.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **Kesimpulan**

Seperti yang telah didemonstrasikan, NocoBase menawarkan banyak fitur untuk mempercepat pengembangan aplikasi. Tergantung pada skala dan persyaratan, ia memberikan fleksibilitas untuk membangun aplikasi, dengan kemampuan tambahan seperti manajemen file, internasionalisasi, dukungan seluler, dan pengeditan tema. Anda bahkan dapat mengembangkan plugin Anda sendiri atau membeli plugin komersial yang tersedia di marketplace.

Bacaan terkait:

* [Bagaimana cara membangun aplikasi dengan NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [8 Platform Pengembangan Tanpa Kode Terkuat di Tahun 2025](https://www.nocobase.com/en/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [12 Alat Tanpa Kode Sumber Terbuka dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [15 Proyek Rendah Kode Sumber Terbuka dengan Bintang GitHub Terbanyak](https://www.nocobase.com/en/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [6 Alat Tanpa Kode Teratas untuk Pengembang](https://www.nocobase.com/en/blog/top-6-no-code-tools-for-developers)
* [7 Platform Pengembangan Cepat Sumber Terbuka Teratas](https://www.nocobase.com/en/blog/rapid-development-platform)
