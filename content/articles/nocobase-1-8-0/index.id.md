---
title: "Mengumumkan NocoBase v1.8.0"
description: "Peningkatan Proses Autentikasi, Mendukung Variabel Statistik Kustom Dan Peningkatan Manajemen Email, Mengoptimalkan Pengalaman Alur Kerja Dan Interaksi Seluler"
---

## Fitur Baru

### Lupa Kata Sandi – Pemulihan Email Didukung

Pengguna kini dapat memulihkan kata sandi mereka melalui email. Aktifkan fitur ini di **Pengaturan > Autentikasi > Lupa Kata Sandi**, konfigurasikan saluran notifikasi email, dan sesuaikan email pengaturan ulang kata sandi (mendukung variabel dan format HTML).

![Lupa Kata Sandi – Pemulihan Email Didukung.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

Referensi: [Lupa Kata Sandi](https://docs.nocobase.com/handbook/auth/user#forgot-password)

### Variabel Agregasi Kustom

Mendukung pembuatan variabel statistik seperti jumlah, total, dan rata-rata. Variabel ini dapat digunakan di lencana menu, label halaman, dan area lainnya untuk membuat antarmuka lebih intuitif dan kaya informasi.

![Variabel Agregasi Kustom.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

Referensi: [Variabel Kustom](https://docs.nocobase.com/handbook/custom-variables)

### Manajemen Email

Modul manajemen email telah ditingkatkan sepenuhnya, kini mendukung penghapusan email, pengiriman massal, pengaturan interval sinkronisasi, dan berbagai peningkatan pengalaman pengguna.

![Manajemen Email.png](https://static-docs.nocobase.com/image-9dyulg.png)

### Sumber Data

Mendukung kolom BIT SQL Server di sumber data eksternal dan mengaktifkan pemuatan sesuai permintaan tabel data dari sumber eksternal.

![Sumber Data.png](https://static-docs.nocobase.com/image-rml96b.png)

### Salin Teks

Mendukung penyalinan konten bidang teks satu klik.

![Salin Teks.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [Workflow: Node Permintaan HTTP] Dukungan untuk Tipe `multipart/form-data`

Saat mengonfigurasi node Permintaan HTTP di workflow, Anda kini dapat memilih tipe konten `multipart/form-data`. Setelah diaktifkan, body permintaan menerima pengiriman form-data—termasuk bidang `file`—untuk mendukung unggahan file dan skenario serupa.

![Workflow.png](https://static-docs.nocobase.com/image-gutu74.png)

### [Workflow: Persetujuan] Hasil Node Persetujuan Mendukung Pembuatan Variabel Catatan Persetujuan

Hasil eksekusi node persetujuan kini dapat digunakan sebagai variabel di node berikutnya, dengan pencatatan otomatis status dan data terkait.

![Workflow: Persetujuan](https://static-docs.nocobase.com/20250614095052.png)

Referensi: [Hasil Node](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## Peningkatan

### Input Isi-Pindai

Komponen input teks umum kini menyertakan opsi **Aktifkan Pindai**. Saat diaktifkan, tombol pindai muncul di sisi kanan bidang input, memungkinkan data dimasukkan melalui perangkat pemindai. Anda juga dapat mengonfigurasi apakah input manual diizinkan.

![Input Isi-Pindai.png](https://static-docs.nocobase.com/image-u7gfro.png)

Referensi: [Aktifkan pindai](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Dukungan Lokalisasi di Blok Markdown

Konten Markdown kini mendukung lokalisasi menggunakan sintaks `{{t 'xxx'}}` untuk menyisipkan teks multibahasa.

![Dukungan Lokalisasi di Blok Markdown.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

Referensi: [Lokalisasi](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### Tautan Menu Mendukung Pembukaan di Jendela Baru

Opsi **"Buka di jendela baru"** baru telah ditambahkan untuk tautan menu, memungkinkan Anda menyesuaikan cara tautan dibuka.

![Tautan Menu Mendukung Pembukaan di Jendela Baru.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### Blok Kalender Mendukung Pengaturan Hari Awal Minggu

Anda kini dapat menyesuaikan hari awal minggu tampilan kalender, memilih Minggu atau Senin agar sesuai dengan preferensi dan kebiasaan regional yang berbeda.

![Blok Kalender Mendukung Pengaturan Hari Awal Minggu.png](https://static-docs.nocobase.com/image-uu5ubi.png)

Referensi: [Hari awal minggu](https://docs.nocobase.com/handbook/calendar#week-start-day)

### Mode Tampilan Markdown (Vditor) Mendukung Zoom Gambar dengan Klik

Dalam mode tampilan, gambar dalam konten Markdown dapat diklik untuk diperbesar, meningkatkan pengalaman membaca.

![Mode Tampilan Markdown (Vditor) Mendukung Zoom Gambar dengan Klik.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### Peningkatan Komprehensif Fungsionalitas dan Kinerja Modul Workflow

- Mendukung pemfilteran workflow berdasarkan lebih banyak bidang untuk meningkatkan efisiensi pencarian
- Mengoptimalkan gaya tampilan seluler untuk meningkatkan pengalaman pengguna
- Mengecualikan pemuatan bidang JSON untuk meningkatkan kinerja pemuatan daftar rencana eksekusi secara signifikan
- Menambahkan API log baru untuk uji coba node
- Menyesuaikan antarmuka API metode `getCollectionFieldOptions` untuk meningkatkan fleksibilitas

![Modul Workflow.png](https://static-docs.nocobase.com/image-5b3byb.png)

### Peningkatan Fungsionalitas Proses Persetujuan dan Pengalaman

- Menambahkan Opsi Konfigurasi Untuk Daftar Pemilihan Personel Transfer dan Tambah Tanda Tangan, Mendukung Tampilan Informasi Bidang Lebih Banyak Untuk Membantu Pemilihan yang Lebih Akurat
- Menyesuaikan Tampilan Waktu di Timeline ke Waktu Absolut Untuk Meningkatkan Keterbacaan
- Mengimpor Tabel Data Terkait Persetujuan Dari Plugin Workflow Untuk Mencegah Tabel Lokal Tertimpa
- Menyesuaikan Struktur Antarmuka API Variabel Untuk Meningkatkan Fleksibilitas dan Konsistensi

![Proses Persetujuan.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### Mendukung Konfigurasi Opsi Pool Koneksi Database Melalui Variabel Lingkungan

Parameter pool koneksi database dapat diatur secara fleksibel melalui variabel lingkungan untuk meningkatkan fleksibilitas deployment.

![Mendukung Konfigurasi Opsi Pool Koneksi Database Melalui Variabel Lingkungan.png](https://static-docs.nocobase.com/image-tz87as.png)

### Blok Komentar Mendukung Paginasi

Mendukung pemuatan komentar dengan paginasi untuk meningkatkan kinerja pemuatan dan pengalaman membaca dalam skenario dengan volume data besar.

![Blok Komentar Mendukung Paginasi.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### Peningkatan Pengalaman Seluler

- Popup Notifikasi Disesuaikan Dengan Gaya Seluler
- Logika Deteksi Tata Letak Seluler Dioptimalkan Untuk Meningkatkan Akurasi Responsif
