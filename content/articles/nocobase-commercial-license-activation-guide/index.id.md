---
title: "Panduan Aktivasi Lisensi Komersial NocoBase"
description: "Panduan untuk mengaktifkan lisensi komersial NocoBase Anda. Pelajari cara mengaktifkan fitur komersial Anda dengan cepat dan aman menggunakan metode \"ID Instansi\" dan \"Kunci Lisensi\" yang baru."
---

## **Panduan Aktivasi Lisensi Komersial NocoBase**

Untuk meningkatkan pengalaman pengguna dan memperkuat keamanan, kami telah meningkatkan secara komprehensif proses lisensi dan aktivasi komersial kami. Metode otorisasi baru menggantikan pendekatan sebelumnya yaitu memasukkan nama pengguna dan kata sandi di file konfigurasi, dengan memperkenalkan mekanisme berdasarkan "ID Instans" dan "Kunci Lisensi".

Keunggulan inti dari solusi baru ini meliputi:

* **Keamanan yang Ditingkatkan**: Tidak lagi perlu menyimpan informasi akun Anda dalam teks biasa, mengurangi risiko kebocoran informasi sensitif.
* **Proses yang Disederhanakan**: Otorisasi langsung terikat dengan instans NocoBase Anda, membuat manajemen dan pembaruan lisensi lebih intuitif dan nyaman.
* **Fleksibilitas yang Meningkat**: Ketika lingkungan penerapan Anda berubah, Anda dapat dengan mudah membuat ulang otorisasi untuk beradaptasi dengan cepat ke lingkungan baru.
* **Perlindungan Lisensi**: Melalui manajemen lisensi backend dan pemantauan status, Anda dapat memantau penggunaan aktual lisensi Anda, segera mendeteksi dan menangani aplikasi yang tidak sah, serta mencegah penyalahgunaan lisensi komersial.

Panduan ini akan memandu Anda melalui proses aktivasi lisensi komersial NocoBase yang baru secara lengkap.

<image src="https://static-docs.nocobase.com/undefined20250701160935956.png" >

---

## **Panduan Langkah-demi-Langkah Aktivasi Lisensi**

Sebelum memulai, pastikan Anda telah berhasil menginstal dan menjalankan NocoBase Edisi Komunitas.

### **Langkah 1: Akses Halaman Lisensi dan Salin ID Instans**

1. Di aplikasi NocoBase lokal Anda, navigasikan ke halaman `Pengaturan Sistem` -> `Pengaturan Lisensi`.
2. Di halaman ini, Anda akan melihat string **ID Instans**, yang merupakan pengidentifikasi unik untuk lingkungan berjalan Anda saat ini. Klik ikon salin di sebelah kanannya.

![img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g](https://static-docs.nocobase.com/img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g.jpg)

### **Langkah 2: Buat Aplikasi di Platform Layanan dan Kaitkan ID Instans**

1. Masuk ke platform Layanan NocoBase, klik tombol "Tambah" di halaman manajemen "Aplikasi".
2. Di formulir popup, isi informasi aplikasi Anda dan tempelkan `ID Instans` yang disalin dari langkah sebelumnya ke dalam kolom input `ID Instans`, lalu kirim.

![20250707233019](https://static-docs.nocobase.com/20250707233019.png)

### **Langkah 3: Dapatkan Kunci Lisensi**

1. Setelah aplikasi berhasil dibuat, kembali ke daftar lisensi, temukan entri yang sesuai, dan klik tombol "Lihat Lisensi" di kolom tindakan.
2. Di popup detail lisensi, klik tombol "Salin" untuk mendapatkan **Kunci Lisensi** yang cocok dengan instans Anda.
   ![img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g](https://static-docs.nocobase.com/img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g.jpg)

### **Langkah 4: Konfigurasikan Kunci Lisensi di NocoBase**

1. Kembali ke halaman `Pengaturan Lisensi` NocoBase lokal Anda.
2. Tempelkan `Kunci Lisensi` yang baru saja disalin ke dalam kolom input `Kunci lisensi` dan klik tombol "Kirim".
3. Setelah berhasil disimpan, sistem akan menampilkan "Kunci lisensi berhasil disimpan, silakan mulai ulang server", yang menunjukkan bahwa kunci lisensi telah berhasil dikonfigurasi dan menunggu mulai ulang.

![img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g](https://static-docs.nocobase.com/img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g.jpg)

### **Langkah 5: Selesaikan Aktivasi dan Unduh Versi Komersial serta Plugin Komersial**

Mulai ulang layanan NocoBase Anda untuk menerapkan lisensi dan secara otomatis mengunduh versi komersial serta plugin komersial.

* **Untuk penerapan Docker**: Jalankan perintah mulai ulang `docker compose restart app`.
* **Untuk penerapan kode sumber atau `create-nocobase-app`**: Jalankan perintah `yarn nocobase pkg download-pro` di direktori root proyek.

Setelah layanan dimulai ulang dan berhasil mengunduh plugin, lisensi komersial Anda diaktifkan. Jika Anda perlu mengubah lisensi, Anda dapat masuk kembali ke halaman pengaturan lisensi, klik tombol "Ubah kunci", dan ulangi proses di atas.

---

## **Cara Melihat Informasi Lisensi**

Setelah aktivasi lisensi, Anda dapat mengklik ikon informasi lisensi di sudut kanan atas antarmuka NocoBase kapan saja untuk melihat status detail lisensi saat ini, termasuk versi lisensi, tanggal kedaluwarsa, status pencocokan domain, dan daftar plugin yang diotorisasi.

![20250707234415](https://static-docs.nocobase.com/20250707234415.png)

---

## Daftar Periksa Cepat Penerapan dan Lisensi

Saat mengalami masalah, Anda dapat merujuk ke daftar periksa ini untuk pemecahan masalah cepat:

- [ ]  **Langkah 1: Dapatkan ID Instans**
  - [ ]  NocoBase Edisi Komunitas/Edisi Tanpa Lisensi berjalan dengan sukses.
  - [ ]  `ID Instans` telah disalin sepenuhnya dari halaman `Pengaturan lisensi`.
- [ ]  **Langkah 2: Hasilkan Kunci Lisensi**
  - [ ]  Aplikasi telah dibuat di platform Layanan.
  - [ ]  `ID Instans` yang ditempelkan saat membuat aplikasi adalah yang terbaru dan benar.
  - [ ]  `Kunci Lisensi` telah disalin sepenuhnya dari "Lihat Lisensi".
- [ ]  **Langkah 3: Aktivasi**
  - [ ]  `Kunci Lisensi` telah ditempelkan kembali ke NocoBase dan berhasil disimpan.
  - [ ]  **Mulai ulang kontainer atau perintah `download-pro` telah dijalankan sesuai dengan metode penerapan.** (Banyak pengguna melewatkan langkah ini!)
- [ ]  **Verifikasi**
  - [ ]  Popup informasi lisensi menunjukkan status sebagai "Aktif".

## Pertanyaan yang Sering Diajukan (FAQ)

Selama instalasi atau penggunaan, Anda mungkin menemui petunjuk berikut. Silakan ikuti solusi yang sesuai:

### 1. `License key mismatch` - Kunci Lisensi Tidak Cocok dengan Lingkungan

<image src="https://static-docs.nocobase.com/undefined20250701193351673.png" />

[T]Mengapa saya mendapatkan `License key mismatch` setelah konfigurasi?

[J]Lingkungan berjalan Anda mungkin telah berubah, menyebabkan "`ID Instans`" diperbarui, tetapi aplikasi Anda masih memiliki "`Kunci Lisensi`" lama.
**Solusi**: Silakan ikuti **Langkah 1** dari panduan ini dengan ketat untuk mendapatkan `ID Instans` terbaru dari **lingkungan Anda saat ini**, lalu selesaikan proses selanjutnya untuk menghasilkan "kunci" baru.

### 2. `Invalid license key` - Kunci Lisensi Telah Kedaluwarsa

<image src="https://static-docs.nocobase.com/undefined20250701193558012.png" />

[T]Apa arti `Invalid license key`?

[J]`Kunci Lisensi` Anda mungkin telah kedaluwarsa atau ditandai sebagai tidak valid oleh platform karena alasan lain.
**Solusi**: Silakan hubungi kami atau periksa status lisensi Anda di platform layanan. Jika perlu, buat ulang `Kunci Lisensi` dan konfigurasikan.

### 3. `Invalid license key format` - Kesalahan Format Kunci Lisensi

<image src="https://static-docs.nocobase.com/undefined20250701193148501.png" />

[T]Apa yang harus saya lakukan dengan `Invalid license key format`?

[J]`Kunci Lisensi` yang Anda tempel tidak lengkap atau formatnya salah, sehingga sistem tidak dapat menguraikannya.
**Solusi**: Silakan kembali ke platform layanan, pastikan Anda telah menyalin `Kunci Lisensi` sepenuhnya, lalu tempel ulang dan simpan.

### 4. Dialog Informasi Lisensi Muncul Secara Paksa Saat Mengakses Sistem

<image src="https://static-docs.nocobase.com/undefined20250625164238000.png" width="400" />

[T]Mengapa dialog informasi lisensi selalu muncul?

[J]Popup ini biasanya menunjukkan kegagalan verifikasi lisensi. Kemungkinan penyebabnya meliputi:

- `Kunci Lisensi` rusak atau tidak cocok dengan lingkungan lokal
- Lisensi telah kedaluwarsa atau tidak valid
- `Kunci Lisensi` tidak cocok dengan versi plugin komersial yang Anda jalankan

**Solusi**: Solusi paling langsung adalah **menjalankan ulang sepenuhnya proses konfigurasi lisensi**: dapatkan `ID Instans` terbaru, buat `Kunci Lisensi` baru, dan atur di sistem lokal.

### 5. Masalah Terkait Migrasi Lingkungan

[T]Saya memigrasikan server/database saya, dan plugin komersial berhenti berfungsi. Apa yang harus saya lakukan?

[J]Ini adalah masalah yang sama seperti di atas. Server atau database adalah informasi kunci yang membentuk "KTP (`ID Instans`)", dan ketika mereka berubah, `ID Instans` berubah.

**Solusi**: Sama seperti di atas, dapatkan `ID Instans` baru, buat `Kunci Lisensi` baru, dan aktifkan kembali. Seluruh proses seperti memperbarui alamat KTP Anda setelah pindah rumah.

### 6. Plugin Tidak Berpengaruh

[T]Saya sudah memulai ulang, mengapa plugin komersial masih tidak berfungsi?

[J]Jika Anda telah mengonfirmasi konfigurasi `Kunci Lisensi` sudah benar, coba pemecahan masalah berikut:

1. **Periksa Jaringan**: Pastikan server Anda dapat mengakses repositori npm NocoBase.
2. **Periksa Log**: Tinjau log startup NocoBase untuk kegagalan unduhan plugin atau kesalahan verifikasi lisensi.
3. **Eksekusi Manual**: Jika Anda menggunakan penerapan sumber, jalankan kembali perintah `yarn nocobase pkg download-pro` secara manual dan amati output baris perintah.

### 7. Plugin komersial tidak muncul setelah aktivasi pada sistem yang sedang berjalan?

**[T]** Saya memulai sistem NocoBase terlebih dahulu dan kemudian memasukkan Kunci Lisensi di pengaturan. Aktivasi berhasil, jadi mengapa plugin komersial tidak muncul?

**[J]** Ini adalah perilaku yang diharapkan dan pertanyaan yang sangat umum. NocoBase dirancang untuk memeriksa lisensi dan memuat plugin yang sesuai **pada saat startup layanan**. Jika Anda menyelesaikan aktivasi saat sistem sudah berjalan, Anda perlu **memulai ulang layanan NocoBase** untuk memicu pengunduhan dan aktivasi plugin komersial.

Sederhananya, lisensi seperti "tiket masuk" untuk NocoBase, tetapi perlu "masuk kembali ke pintu" (mulai ulang) untuk memeriksa dan menggunakan tiket ini.

Silakan lakukan operasi mulai ulang sesuai dengan metode penerapan Anda:

* **Untuk penerapan Docker**: Jalankan perintah mulai ulang `docker compose restart app`.
* **Untuk penerapan kode sumber atau `create-nocobase-app`**: Pertama, hentikan layanan yang berjalan di terminal Anda (biasanya dengan menekan `Ctrl+C`), lalu jalankan kembali perintah mulai, seperti `yarn start`.

### 8. Perbandingan Antara Metode Otorisasi Lama dan Baru

[T]Bagaimana proses ini berbeda dari metode nama pengguna/kata sandi sebelumnya?

[J]Metode lama mengekspos kata sandi akun Anda langsung di lingkungan, yang tidak cukup aman. Sistem `Kunci Lisensi` baru memiliki beberapa manfaat:

1. **Lebih Aman**: Anda tidak perlu mengekspos kata sandi akun utama Anda, hanya menggunakan kunci yang terikat dengan lingkungan tertentu.
2. **Lebih Fleksibel**: Anda dapat menghasilkan `Kunci Lisensi` yang berbeda untuk klien atau proyek yang berbeda, membuat manajemen lebih mudah.
3. **Lebih Jelas**: Informasi lisensi jelas sekilas, dengan semua detail tercatat di platform Layanan.
