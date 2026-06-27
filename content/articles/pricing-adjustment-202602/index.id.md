---
title: "Penyesuaian Lisensi Open Source dan Harga NocoBase"
description: "Kami telah menyesuaikan perjanjian lisensi dan harga untuk plugin komersial, bundel plugin komersial, serta manfaat edisi komersial. Selain itu, kami menawarkan penyesuaian gratis bagi pengguna yang telah melakukan pembelian."
---

NocoBase 2.0 resmi dirilis pada 15 Februari 2026. Mulai dari versi ini, NocoBase beralih menjadi berbasis AI, membantu perusahaan tradisional mengimplementasikan kemampuan AI dan memastikan AI memberikan nilai nyata dalam skenario bisnis praktis. Sejalan dengan arah baru ini, kami telah menyesuaikan lisensi sumber terbuka dan struktur harga untuk memastikan lisensi lebih fleksibel dan ramah, rencana harga lebih sederhana, dan biaya penggunaan lebih rendah bagi pengguna kami.

### Perubahan Lisensi: Dari AGPL-3.0 ke Apache-2.0

Transisi ini menyediakan lingkungan yang lebih ramah bisnis, menawarkan pengguna fleksibilitas lebih besar untuk kustomisasi dan distribusi komersial dengan lebih sedikit batasan.

### Open-Sourcing Plugin Komersial Utama

Plugin komersial berikut kini **open-source dan gratis digunakan**


| Plugin                                    | Nama Paket                                       | Catatan                                        |
| ----------------------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| AI LLM: GigaChat                          | `@nocobase/plugin-ai-gigachat`                   |                                                |
| Formulir multi-langkah                    | `@nocobase/plugin-block-multi-step-form`         | Tersedia di Halaman V1, belum diadaptasi untuk 2.0 |
| Blok: Pohon                               | `@nocobase/plugin-block-tree`                    | Tersedia di Halaman V1, belum diadaptasi untuk 2.0 |
| Komentar                                  | `@nocobase/plugin-comments`                      |                                                |
| Variabel kustom                           | `@nocobase/plugin-custom-variables`              | Tersedia di Halaman V1, belum diadaptasi untuk 2.0 |
| Visualisasi data: ECharts                 | `@nocobase/plugin-data-visualization-echarts`    | Tidak digunakan lagi di 2.0, gunakan blok Chart |
| Sematkan NocoBase                         | `@nocobase/plugin-embed`                         | Tersedia di Halaman V1, belum diadaptasi untuk 2.0 |
| Bidang: Kode                              | `@nocobase/plugin-field-code`                    | Belum diadaptasi untuk 2.0                    |
| Draf formulir                             | `@nocobase/plugin-form-drafts`                   | Hanya mendukung blok Form 2.0                 |
| Filter multi-kata kunci                   | `@nocobase/plugin-multi-keyword-filter`          |                                                |
| Alur kerja: Pemicu tindakan kustom        | `@nocobase/plugin-workflow-custom-action-trigger`|                                                |
| Alur kerja: Node perhitungan tanggal      | `@nocobase/plugin-workflow-date-calculation`     |                                                |
| Alur kerja: Node JavaScript               | `@nocobase/plugin-workflow-javascript`           |                                                |
| Alur kerja: Pencegat permintaan           | `@nocobase/plugin-workflow-request-interceptor`  |                                                |
| Alur kerja: Variabel                      | `@nocobase/plugin-workflow-variable`             |                                                |
| Koleksi: Hubungkan ke data asing (FDW)    | `@nocobase/plugin-collection-fdw`                |                                                |

### Menggabungkan Plugin Komersial yang Tersisa

Plugin komersial yang tersisa tidak akan lagi dijual secara individual. Sebagai gantinya, plugin-plugin tersebut kini **digabungkan ke dalam Lisensi Komersial**. Setelah Anda membeli Lisensi Komersial, Anda mendapatkan akses ke fitur-fitur ini. Untuk detail lengkap, silakan kunjungi halaman harga kami: [https://www.nocobase.com/commercial](https://www.google.com/search?q=https://www.nocobase.com/commercial)

### Kredit Penuh untuk Upgrade dari Edisi Rendah ke Edisi Tinggi

Berdasarkan kebijakan harga sebelum 15 Februari, saat meningkatkan dari edisi rendah ke edisi tinggi, hanya nilai sisa yang diprorata yang dapat dikreditkan. Misalnya, jika meningkatkan dari Edisi Standar ke Edisi Profesional setelah 6 bulan, dengan nilai sisa 400 USD, selisih harga yang diperlukan adalah 7.600 USD.

Berdasarkan kebijakan harga setelah 15 Februari, saat meningkatkan dari edisi rendah ke edisi tinggi, jumlah penuh yang dibelanjakan pada edisi rendah dapat dikreditkan. Misalnya, jika meningkatkan dari Edisi Standar ke Edisi Profesional setelah 18 bulan, 800 USD penuh yang dibelanjakan pada Edisi Standar dapat dikreditkan, dan selisih harga yang diperlukan adalah 7.200 USD.

### Kebijakan untuk Pelanggan yang Ada

Untuk pengguna yang membeli lisensi komersial, plugin, atau paket plugin sebelum transisi:

1. Hak yang dibeli sebelum 15 Februari tetap tidak terpengaruh.
   * Semua plugin komersial yang sebelumnya dibeli atau ditukarkan tetap menjadi milik Anda.
   * Poin yang tersisa di paket plugin masih dapat digunakan untuk menukarkan plugin komersial apa pun.
2. Fitur baru yang ditambahkan ke versi komersial setelah 15 Februari akan tersedia secara gratis untuk pengguna yang sebelumnya membeli Edisi Komersial yang sesuai.
3. Meningkatkan dari Edisi Komersial yang dibeli sebelum 15 Februari: Saat meningkatkan ke edisi yang lebih tinggi setelah 15 Februari, jumlah penuh yang dibayarkan untuk edisi asli dapat dikreditkan untuk upgrade.
4. Meningkatkan dari Plugin Komersial individual ke Edisi Komersial: Jika Anda membeli plugin komersial sebelum 15 Februari dan ingin meningkatkan ke Edisi Komersial yang sekarang menyertakan plugin tersebut, jumlah penuh yang dibelanjakan untuk plugin asli dapat dikreditkan untuk pembelian edisi tersebut.

### FAQ

**T:** Saya membeli Edisi Profesional sebelum 15 Feb, yang mencakup Multi-aplikasi dan Multi-ruang. Sekarang fitur-fitur itu hanya ada di Edisi Perusahaan. Apakah saya akan kehilangannya?

**J:** Tidak. Semua fitur yang sudah Anda miliki, termasuk Multi-aplikasi dan Multi-ruang, secara permanen disertakan dalam lisensi Anda.

**T:** Saya membeli Edisi Standar sebelum 15 Feb dan memiliki 8 poin tersisa. Saya ingin menukarkan plugin Persetujuan, tetapi sekarang terbatas pada Edisi Profesional. Bisakah saya tetap mendapatkannya?

**J:** Ya. Poin plugin Anda yang tersisa masih dapat digunakan untuk menukarkan plugin komersial apa pun tanpa memandang tingkatan baru.

**T:** Saya membeli Edisi Standar sebelum Edisi tersebut menyertakan Sumber Data Eksternal. Sekarang Edisi Standar menyertakannya (setelah 15 Feb), apakah saya mendapatkannya secara gratis?

**J:** Ya. Fitur baru apa pun yang ditambahkan ke Edisi Anda setelah 15 Feb gratis untuk pemilik yang ada dari Edisi tersebut. Ini termasuk sumber data eksternal MariaDB, MySQL, PostgreSQL, MSSQL, dan Rest API.

**T:** Saya membeli Edisi Standar dan plugin Persetujuan sebelum 15 Februari, dengan total 800 USD + 800 USD = 1.600 USD. Dapatkah saya mengkreditkan jumlah ini untuk upgrade ke Edisi Profesional?

**J:** Ya. 1.600 USD penuh dapat dikreditkan untuk upgrade.

*Interpretasi dari penyesuaian ini adalah milik perusahaan induk NocoBase. Untuk pengguna komersial yang ada, semua hak dan penyesuaian pelengkap akan difinalisasi pada **24 Februari**.*

Kami ingin berterima kasih kepada semua pengguna berbayar dan gratis, serta kontributor sumber terbuka kami. Kami akan terus melakukan iterasi dengan cepat untuk menyediakan produk yang lebih baik dengan harga yang lebih rendah.
