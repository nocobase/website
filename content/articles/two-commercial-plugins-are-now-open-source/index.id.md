---
title: "Dua Plugin Komersial Kini Menjadi Sumber Terbuka"
description: "Mencakup alasan di balik open-sourcing, kemampuan plugin, dan penyesuaian untuk pelanggan yang sudah ada."
---

Berdasarkan masukan pengguna, kami memutuskan untuk menjadikan dua plugin alur kerja komersial sebagai sumber terbuka:

* [Kalkulasi JSON](https://v2.docs.nocobase.com/workflow/nodes/json-query)
* [Pemetaan Variabel JSON](https://v2.docs.nocobase.com/workflow/nodes/json-variable-mapping)

## Mengapa sumber terbuka?

Plugin-plugin ini termasuk yang paling sering digunakan dalam alur kerja dan sering dibutuhkan setelah node SQL atau Permintaan HTTP. Saat masih menjadi plugin komersial, pengguna edisi komunitas tidak dapat menggunakan node Permintaan HTTP secara penuh, yang menciptakan pengalaman yang buruk. Itulah mengapa kami menjadikannya sumber terbuka.

## Ikhtisar plugin

### Kalkulasi JSON

Menangani JSON kompleks yang dihasilkan oleh node hulu, memungkinkan Anda menghitung, mengekstrak, atau membentuk ulang data.

Kasus penggunaan umum meliputi:

* Hasil kueri SQL
* Data yang dikembalikan dari permintaan HTTP

Ini membantu mengonversi output tersebut ke dalam format variabel dan nilai bidang yang dibutuhkan oleh node hilir.

### Pemetaan Variabel JSON

Memetakan struktur JSON kompleks ke dalam variabel yang lebih mudah digunakan di langkah-langkah alur kerja selanjutnya.

Kasus penggunaan umum meliputi:

* Mengekstrak bidang kunci dari JSON bersarang yang dikembalikan oleh API atau SQL
* Mengganti nama bidang atau menyesuaikan struktur array
* Menyiapkan variabel yang lebih bersih untuk node berikutnya

Dengan plugin ini, Anda menghindari konfigurasi berulang jalur bidang yang dalam di setiap node.

## Penyesuaian untuk pelanggan yang sudah ada

Hak Anda akan tetap tidak berubah. Kami akan mengembalikan poin plugin sebagai berikut:

* *Penggunaan seumur hidup, upgrade 1 tahun* → 2 poin
* *Penggunaan & upgrade seumur hidup* → 4 poin

Penyesuaian ini akan selesai untuk semua pelanggan yang sudah ada pada 23 November 2025, dan perusahaan induk NocoBase akan memberikan interpretasi akhir.

## Penutup

Terima kasih kepada semua pengguna NocoBase dan kontributor sumber terbuka. Masukan dan laporan masalah Anda membantu kami berkembang di setiap rilis. Kami akan terus bergerak lebih cepat dan memberikan kemampuan yang lebih kuat dengan harga yang lebih bersahabat.
