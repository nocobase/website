---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Menambahkan variabel \"Tipe perangkat saat ini\", Meningkatkan fungsi pencarian web dari plugin-ai"
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/en/blog/v1.8.29)

*Tanggal rilis: 2025-10-15*

### 🚀 Peningkatan

* **[Workflow: Persetujuan]** Refaktor konfigurasi cabang untuk menyesuaikan dengan perubahan kernel oleh @mytharcher

### 🐛 Perbaikan Bug

* **[Workflow: Persetujuan]** Memperbaiki masalah kesalahan skrip migrasi karena tabel tidak ada saat aplikasi tidak diinstal oleh @mytharcher

### [v1.8.28](https://www.nocobase.com/en/blog/v1.8.28)

*Tanggal rilis: 2025-10-14*

### 🚀 Peningkatan

* **[klien]** Untuk mendapatkan tipe MIME file yang lebih akurat, gunakan paket `mime` untuk mendeteksi tipe MIME file di klien ([#7551](https://github.com/nocobase/nocobase/pull/7551)) oleh @mytharcher
* **[Workflow]**
  * Mendukung pembatasan jumlah maksimum node dalam workflow melalui variabel lingkungan ([#7542](https://github.com/nocobase/nocobase/pull/7542)) oleh @mytharcher
  * Menambahkan opsi `keepBranch` saat menghapus node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) oleh @mytharcher
* **[Workflow: Node loop]** Mendukung pembatasan jumlah maksimum siklus untuk node loop melalui variabel lingkungan ([#7543](https://github.com/nocobase/nocobase/pull/7543)) oleh @mytharcher
* **[Workflow: Persetujuan]** Menambahkan tombol cetak ke popup detail di blok persetujuan kustom oleh @mytharcher

### 🐛 Perbaikan Bug

* **[klien]**
  * Memperbaiki masalah gambar tidak ditampilkan dengan benar saat diputar dan diskalakan selama pratinjau ([#7573](https://github.com/nocobase/nocobase/pull/7573)) oleh @mytharcher
  * Memperbaiki masalah properti dinamis yang hilang di komponen `AssignedField` menyebabkan kesalahan unggah file di node "Buat rekaman" atau "Perbarui rekaman" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) oleh @mytharcher
* **[Formulir publik]** Memperbaiki masalah aturan unggah untuk bidang file di formulir publik yang salah ([#7553](https://github.com/nocobase/nocobase/pull/7553)) oleh @mytharcher
* **[Kalender]** Memperbaiki masalah kueri data yang disebabkan oleh pengidentifikasi unik di blok kalender ([#7562](https://github.com/nocobase/nocobase/pull/7562)) oleh @katherinehhh
* **[Auth: LDAP]** Memperbaiki kegagalan bind LDAP dengan DN non-ASCII (UTF-8) di Active Directory oleh @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/en/blog/v1.9.0-beta.12)

*Tanggal rilis: 2025-10-11*

### 🐛 Perbaikan Bug

* **[server]** Kesalahan migrasi kunci utama ([#7568](https://github.com/nocobase/nocobase/pull/7568)) oleh @2013xile
* **[Kalender]** Memperbaiki masalah kueri data yang disebabkan oleh pengidentifikasi unik di blok kalender ([#7562](https://github.com/nocobase/nocobase/pull/7562)) oleh @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/en/blog/v2.0.0-alpha.8)

*Tanggal rilis: 2025-10-14*

### 🎉 Fitur Baru

* **[Karyawan AI]** Meningkatkan fungsi pencarian web dari plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) oleh @cgyrock

### 🚀 Peningkatan

* **[klien]** Untuk mendapatkan tipe MIME file yang lebih akurat, gunakan paket `mime` untuk mendeteksi tipe MIME file di klien ([#7551](https://github.com/nocobase/nocobase/pull/7551)) oleh @mytharcher
* **[flow-engine]**
  * mendukung variabel popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) oleh @gchust
  * Meningkatkan pengalaman pengeditan kode dengan cuplikan yang lebih kaya dan penyelesaian kode yang peka konteks untuk berbagai skenario ([#7559](https://github.com/nocobase/nocobase/pull/7559)) oleh @gchust
  * Workflow otomatis yang distandarisasi untuk dipicu secara konsisten oleh peristiwa "beforeRender", memastikan operasi yang dapat diprediksi dan terpadu di seluruh proses. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) oleh @gchust
* **[Workflow]** Menambahkan opsi `keepBranch` saat menghapus node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) oleh @mytharcher
* **[Visualisasi data]** Memperluas jenis bagan; Mengoptimalkan UI dan pengalaman interaktif. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) oleh @heziqiang
* **[Workflow: Persetujuan]** Refaktor konfigurasi cabang untuk menyesuaikan dengan perubahan kernel oleh @mytharcher

### 🐛 Perbaikan Bug

* **[klien]**
  * Memperbaiki masalah tampilan halaman yang tidak normal saat mengganti paginasi tabel ([#7572](https://github.com/nocobase/nocobase/pull/7572)) oleh @zhangzhonghe
  * Tidak dapat mengonfigurasi nilai bidang tetapkan untuk tindakan `Perbarui` dan `Perbarui massal` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) oleh @gchust
  * Memperbaiki masalah gambar tidak ditampilkan dengan benar saat diputar dan diskalakan selama pratinjau ([#7573](https://github.com/nocobase/nocobase/pull/7573)) oleh @mytharcher
* **[Workflow: Persetujuan]** Memperbaiki masalah kesalahan skrip migrasi karena tabel tidak ada saat aplikasi tidak diinstal oleh @mytharcher
* **[Auth: LDAP]** Memperbaiki kegagalan bind LDAP dengan DN non-ASCII (UTF-8) di Active Directory oleh @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/en/blog/v2.0.0-alpha.7)

*Tanggal rilis: 2025-10-13*

### 🎉 Fitur Baru

* **[klien]** Menambahkan variabel "Tipe perangkat saat ini" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) oleh @zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/en/blog/v2.0.0-alpha.6)

*Tanggal rilis: 2025-10-11*

### 🐛 Perbaikan Bug

* **[server]** Kesalahan migrasi kunci utama ([#7568](https://github.com/nocobase/nocobase/pull/7568)) oleh @2013xile
* **[tidak terdefinisi]** Pencocokan jalur routing mendukung beberapa aplikasi baru ([#7570](https://github.com/nocobase/nocobase/pull/7570)) oleh @jiannx
* **[Karyawan AI]** Memperbaiki kesalahan di alat pemodelan data karyawan AI saat menggunakan ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) oleh @cgyrock
