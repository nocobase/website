---
title: "Mengumumkan NocoBase v1.9.0"
description: "Peningkatan validasi data dan penjadwalan tugas, mendukung pemisahan layanan dan penghentian yang lancar untuk meningkatkan stabilitas dan fleksibilitas sistem secara keseluruhan."
---

## Fitur Baru

### Aturan Validasi Kolom

Mendukung konfigurasi beberapa aturan validasi untuk kolom — seperti wajib diisi, format, panjang, rentang, dan ekspresi kustom.
Data yang dimasukkan akan divalidasi secara otomatis saat pengiriman formulir untuk memastikan keakuratan dan konsistensi.
Aturan validasi dapat dikonfigurasi secara fleksibel di pengaturan kolom.

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

Referensi: [Validasi kolom](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### Blok Tabel Mendukung Pengaturan Kolom

Blok tabel kini menyertakan fitur Pengaturan Kolom, yang memungkinkan pengguna menyesuaikan urutan kolom, visibilitas, dan posisi semat tanpa harus masuk ke mode edit — membuat tampilan data lebih fleksibel dan ramah pengguna.

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### Mode Pemicu Sebelum Data Disimpan untuk Persetujuan

Persetujuan kini mendukung mode pemicu Sebelum Data Disimpan — saat diaktifkan, data tidak akan disimpan saat persetujuan dimulai dan hanya akan disimpan setelah persetujuan disetujui.

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### Pemicu Persetujuan Mengekspos Variabel ID Persetujuan

Pemicu persetujuan kini mengekspos variabel ID persetujuan, memungkinkannya untuk direferensikan dalam alur kerja dan proses otomatisasi untuk konfigurasi dan pelacakan data yang lebih fleksibel.

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [Manajer Tugas Async] Dukungan untuk Pemisahan Layanan melalui Variabel Lingkungan dan Antrean

Memperkenalkan mekanisme pemisahan layanan baru, yang memungkinkan layanan tugas asinkron dan alur kerja berjalan secara independen melalui variabel lingkungan `WORKER_MODE` — memungkinkan deployment multi-node dan optimalisasi kinerja.

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

Referensi: [Pemisahan Layanan](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### Antrean Acara Baru untuk Menangani Pesan Antrean

Menambahkan antrean acara khusus untuk menangani pesan antrean sistem, meningkatkan pemrosesan tugas asinkron dan keandalan.

Referensi: [Mode Klaster: Antrean Pesan](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### Dukungan Siklus Hidup Penghentian yang Anggun

Memperkenalkan penanganan penghentian yang anggun.
Ketika proses aplikasi menerima sinyal SIGTERM atau SIGINT, proses tersebut sekarang memulai urutan penghentian yang tepat untuk mencegah masalah dari operasi yang sedang berlangsung.

## Peningkatan

### Tabel Sistem Menggunakan ID Mirip Snowflake 53-bit

Memperbarui ID tabel sistem yang sebelumnya menggunakan kunci utama auto-increment tanpa keunikan global menjadi ID mirip Snowflake 53-bit untuk identifikasi unik secara global.

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### Melihat dan Melanjutkan Tugas dari Alur Kerja yang Dinonaktifkan

Blok tugas manual kini menampilkan tugas yang tertunda bahkan dari alur kerja yang dinonaktifkan dan memungkinkan pengguna untuk terus memprosesnya.

### Peningkatan Manajer Email

* Data email mendukung sinkronisasi ulang
* Memungkinkan pengubahan ukuran gambar yang disisipkan ke editor email.
* Editor teks kaya kini mendukung pemisahan baris lunak, meningkatkan pengalaman pemformatan email.
* Peningkatan kinerja daftar email untuk pengoperasian yang lebih lancar.

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### Optimalisasi Modul Alur Kerja

* Mengoptimalkan kinerja kueri dalam eksekusi antrean alur kerja dengan memperkenalkan bidang dan indeks yang dipisahkan untuk pengambilan data yang lebih cepat.

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
