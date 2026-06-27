---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini mencakup: dukungan untuk variabel kustom, pendengar acara klik baris tabel, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/en/blog/v1.8.31)

*Tanggal rilis: 2025-10-17*

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki error yang muncul ketika operator `$in` bertemu dengan nilai `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki masalah batas waktu transaksi yang disebabkan oleh transaksi yang tidak rollback dengan benar ketika terjadi kesalahan database setelah pengajuan persetujuan oleh @mytharcher
  - Memperbaiki masalah di mana variabel tidak diuraikan dalam formulir pengajuan persetujuan oleh @mytharcher

### [v1.8.30](https://www.nocobase.com/en/blog/v1.8.30)

*Tanggal rilis: 2025-10-16*

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah pop-up ikon tab yang terhalang ([#7607](https://github.com/nocobase/nocobase/pull/7607)) oleh @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/en/blog/v1.9.0-beta.13)

*Tanggal rilis: 2025-10-22*

### 🚀 Peningkatan

- **[client]** Untuk mendapatkan tipe MIME file yang lebih akurat, gunakan paket `mime` untuk mendeteksi tipe MIME file di klien ([#7551](https://github.com/nocobase/nocobase/pull/7551)) oleh @mytharcher
- **[Sumber Data: Utama]** Memperbarui logika lokalisasi untuk pesan kesalahan, dan menanganinya dalam plugin penanganan kesalahan ([#7582](https://github.com/nocobase/nocobase/pull/7582)) oleh @2013xile
- **[Workflow]** Menambahkan opsi `keepBranch` saat menghapus node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbarui konfigurasi cabang untuk beradaptasi dengan perubahan kernel oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - memperbaiki error saat membersihkan field tanggal di blok filter ([#7632](https://github.com/nocobase/nocobase/pull/7632)) oleh @katherinehhh
  - memperbaiki nilai default subtable tidak berfungsi di drawer form edit ([#7631](https://github.com/nocobase/nocobase/pull/7631)) oleh @katherinehhh
  - Memperbaiki masalah di mana gambar tidak ditampilkan dengan benar ketika diputar dan diskalakan selama pratinjau ([#7573](https://github.com/nocobase/nocobase/pull/7573)) oleh @mytharcher
  - Memperbaiki masalah pop-up ikon tab yang terhalang ([#7607](https://github.com/nocobase/nocobase/pull/7607)) oleh @zhangzhonghe
- **[database]** Memperbaiki error yang muncul ketika operator `$in` bertemu dengan nilai `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) oleh @mytharcher
- **[Sumber Data: Utama]** Memperbaiki masalah di mana metadata tidak disinkronkan di beberapa node setelah membuat field asosiasi terbalik ([#7628](https://github.com/nocobase/nocobase/pull/7628)) oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki masalah skrip migrasi error karena tabel tidak ada ketika aplikasi tidak diinstal oleh @mytharcher
  - Memperbaiki masalah ID Snowflake tidak dihasilkan karena hook dilewati oleh @mytharcher
- **[Auth: LDAP]** Memperbaiki kegagalan bind LDAP dengan DN non-ASCII (UTF-8) di Active Directory oleh @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/en/blog/v2.0.0-alpha.19)

*Tanggal rilis: 2025-10-21*

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana URL tidak diperbarui dengan benar setelah mengganti tab di dalam popup, membuka kembali popup bersarang, dan kemudian menutup semua popup. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) oleh @gchust
  - memperbaiki nilai default subtable tidak berfungsi di drawer form edit ([#7631](https://github.com/nocobase/nocobase/pull/7631)) oleh @katherinehhh
  - memperbaiki error saat membersihkan field tanggal di blok filter ([#7632](https://github.com/nocobase/nocobase/pull/7632)) oleh @katherinehhh
- **[Manajer multi-aplikasi (usang)]** Memperbaiki tidak dapat menonaktifkan manajer multi-aplikasi lama ([#7633](https://github.com/nocobase/nocobase/pull/7633)) oleh @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/en/blog/v2.0.0-alpha.17)

*Tanggal rilis: 2025-10-21*

### 🎉 Fitur Baru

- **[client]** Menambahkan dukungan untuk pendengar event klik baris tabel, memungkinkan pengguna untuk menjalankan tindakan tertentu ketika sebuah baris di tabel diklik ([#7622](https://github.com/nocobase/nocobase/pull/7622)) oleh @zhangzhonghe
- **[Workflow: Persetujuan]** Mengekspos variabel `approvalId` untuk digunakan dari pemicu persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki masalah terjemahan tidak berpengaruh di komponen antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) oleh @zhangzhonghe
- **[Sumber Data: Utama]** Memperbaiki masalah di mana metadata tidak disinkronkan di beberapa node setelah membuat field asosiasi terbalik ([#7628](https://github.com/nocobase/nocobase/pull/7628)) oleh @mytharcher
- **[plugin-demo-platform]** demo mendukung penghentian aplikasi otomatis oleh @jiannx
- **[Multi-aplikasi]**

  - migrasi multi-aplikasi tidak memancarkan hook oleh @jiannx
  - proxy multi-aplikasi mendukung cache oleh @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/en/blog/v2.0.0-alpha.16)

*Tanggal rilis: 2025-10-20*

### 🎉 Fitur Baru

- **[Draf formulir]** Draf formulir oleh @chenos

### 🐛 Perbaikan Bug

- **[flow-engine]** tidak dapat memperoleh konteks tampilan saat ini di blok referensi ([#7620](https://github.com/nocobase/nocobase/pull/7620)) oleh @gchust
- **[client]** menangani konteks yang hilang di usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) oleh @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/en/blog/v2.0.0-alpha.15)

*Tanggal rilis: 2025-10-20*

### 🚀 Peningkatan

- **[client]** mendukung field asosiasi di model field JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) oleh @gchust
- **[Karyawan AI]**

  - Memperbarui OpenAI LLM Provider menjadi dua penyedia terpisah untuk mendukung API Completions dan Responses OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) oleh @cgyrock
  - Menambahkan penyedia LLM baru Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) oleh @ReLaMi96

### 🐛 Perbaikan Bug

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah jumlah tugas tidak diperbarui setelah menambahkan penerima tugas oleh @mytharcher
  - Memperbaiki masalah batas waktu transaksi yang disebabkan oleh transaksi yang tidak rollback dengan benar ketika terjadi kesalahan database setelah pengajuan persetujuan oleh @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/en/blog/v2.0.0-alpha.14)

*Tanggal rilis: 2025-10-17*

### 🚀 Peningkatan

- **[Karyawan AI]** Optimasi pengkodean AI ([#7614](https://github.com/nocobase/nocobase/pull/7614)) oleh @cgyrock
- **[Sumber Data: Utama]** Memperbarui logika lokalisasi untuk pesan kesalahan, dan menanganinya dalam plugin penanganan kesalahan ([#7582](https://github.com/nocobase/nocobase/pull/7582)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[database]**

  - Mengatur `search_path` sebelum mengeksekusi pernyataan SQL menggunakan metode `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) oleh @2013xile
  - Memperbaiki error yang muncul ketika operator `$in` bertemu dengan nilai `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) oleh @mytharcher
- **[client]** Memperbaiki masalah pop-up ikon tab yang terhalang ([#7607](https://github.com/nocobase/nocobase/pull/7607)) oleh @zhangzhonghe
- **[Workflow: Persetujuan]** Memperbaiki masalah di mana variabel tidak diuraikan dalam formulir pengajuan persetujuan oleh @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/en/blog/v2.0.0-alpha.13)

*Tanggal rilis: 2025-10-16*

### 🎉 Fitur Baru

- **[Blok: Referensi]** Menambahkan plugin "Blok referensi" eksperimental, yang memungkinkan penggunaan kembali blok yang ada dengan mereferensi atau menyalin. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) oleh @gchust

### 🐛 Perbaikan Bug

- **[Visualisasi Data]** Memperbaiki masalah di mana bagan tidak dapat ditampilkan karena batas waktu pendaftaran event ([#7608](https://github.com/nocobase/nocobase/pull/7608)) oleh @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/en/blog/v2.0.0-alpha.10)

*Tanggal rilis: 2025-10-15*

### 🚀 Peningkatan

- **[Visualisasi Data]** Memperbarui plugin-data-vi 2.0, memperbaiki beberapa masalah dan mengoptimalkan UI. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) oleh @heziqiang

### 🐛 Perbaikan Bug

- **[Workflow: Persetujuan]** Memperbaiki masalah ID Snowflake tidak dihasilkan karena hook dilewati oleh @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/en/blog/v2.0.0-alpha.9)

*Tanggal rilis: 2025-10-15*

### 🎉 Fitur Baru

- **[client]** Menambahkan dukungan untuk variabel kustom ([#7585](https://github.com/nocobase/nocobase/pull/7585)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[Karyawan AI]** menambahkan tombol perkecil untuk kotak obrolan di tata letak seluler ([#7595](https://github.com/nocobase/nocobase/pull/7595)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[server]** Mempertahankan field.targetKey saat menyalin field referensi ([#7599](https://github.com/nocobase/nocobase/pull/7599)) oleh @chenos
- **[Karyawan AI]** memperbaiki masalah tata letak kotak obrolan di tata letak seluler ([#7591](https://github.com/nocobase/nocobase/pull/7591)) oleh @cgyrock
