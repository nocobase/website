---
title: "Tiket Bertenaga AI Dibangun dengan NocoBase 2.0"
description: "Solusi tiket AI yang lebih ekstensibel ketika sistem siap pakai tidak memadai."
---

Sistem tiket bertenaga AI yang dibangun di atas NocoBase 2.0, siap digunakan dan dikembangkan.

Pengantar: [https://www.nocobase.com/en/solutions/ticketing-v2](https://www.nocobase.com/en/solutions/ticketing-v2)

Dokumentasi: [https://v2.docs.nocobase.com/en/solution/ticket-system/](https://v2.docs.nocobase.com/en/solution/ticket-system/)

![ticketing.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(1)-x5nrzk.png)

## Dibangun untuk Perubahan

Dalam skenario dukungan pelanggan, operasi TI, pemeliharaan peralatan, dan meja bantuan internal, sistem tiket adalah bagian fundamental dari operasional perusahaan.

Namun dalam praktiknya, banyak tim menghadapi tantangan yang sama:

* Permintaan tiket datang dari mana-mana: formulir, email, dan alat layanan pelanggan, masing-masing ditangani secara terpisah
* Klasifikasi dan penugasan tiket sangat bergantung pada upaya manual, yang menyebabkan efisiensi rendah dan sering terjadi kesalahan
* SLA ada di atas kertas tetapi sulit dilacak dan ditegakkan dalam praktik
* Masalah yang sama terus berulang, sementara pengalaman dan solusi gagal terakumulasi seiring waktu

**Apakah mungkin untuk membangun solusi tiket yang dapat diluncurkan dengan cepat dan tetap berkembang seiring perubahan kebutuhan bisnis?**

Ini adalah masalah inti yang dirancang untuk dipecahkan oleh **solusi tiket AI NocoBase**.

## Keterbatasan Sistem Tiket Tradisional

Berdasarkan riset kami, sebagian besar tim pada akhirnya memilih salah satu dari berikut ini:

### SaaS Tiket

Solusi tiket SaaS cepat diadopsi dan memiliki fitur yang kaya, tetapi keterbatasannya jelas:

* Fleksibilitas terbatas dalam alur kerja dan kustomisasi bidang
* Fitur AI sebagian besar bersifat dangkal, bukan terintegrasi secara mendalam
* Data dan logika bisnis tidak sepenuhnya berada di bawah kendali tim
* Biaya terus meningkat seiring pertumbuhan organisasi

### Sistem Tiket Internal

Pendekatan ini tampaknya menawarkan fleksibilitas maksimum, tetapi dalam praktiknya:

* Pengembangan awal memakan waktu lama dan membutuhkan investasi signifikan
* Pemeliharaan berkelanjutan sepenuhnya bergantung pada pengembang asli
* Setiap perubahan dalam alur kerja membutuhkan pekerjaan pengembangan tambahan
* Sulit untuk mengubah akumulasi pengalaman menjadi sistem yang dapat digunakan kembali dan diproduktifkan

## Prinsip Desain

Posisi kami adalah arsitektur tiket yang dapat diperluas, dapat dikonfigurasi, dan asli AI.

Tujuannya adalah membantu perusahaan membangun sistem tiket yang fleksibel, dapat diskalakan, dan sepenuhnya dikendalikan sendiri dengan biaya lebih rendah, memungkinkan sistem untuk terus beradaptasi dengan kebutuhan bisnis yang berkembang daripada dibatasi oleh kemampuan yang kaku.

### Model Data yang Dapat Diperluas

Kami menggunakan model data berbentuk T:

![Model data berbentuk T.png](https://static-docs.nocobase.com/screenshot-20260108-130433-9gm35a.png)

* Tabel master tiket: menangani kemampuan bersama seperti alur kerja status, penanggung jawab, prioritas, SLA, dan riwayat komunikasi
* Tabel ekstensi bisnis: dirancang untuk kasus penggunaan yang berbeda, termasuk:
  * Tiket dukungan TI
  * Tiket pemeliharaan peralatan
  * Keluhan dan umpan balik pelanggan
  * Permintaan administratif internal

Desain ini menghadirkan beberapa keuntungan utama:

* Jenis tiket baru dapat ditambahkan tanpa mengubah alur kerja inti
* Setiap skenario bisnis dapat memiliki bidang dan tata letak halamannya sendiri
* Logika inti tetap konsisten, menjaga biaya ekstensi tetap sangat rendah

Hasilnya, solusi ini sangat cocok untuk lingkungan perusahaan dengan banyak departemen dan lini bisnis.

### Penerimaan Tiket Terpadu

Di NocoBase, tiket dapat dibuat melalui berbagai saluran:

* Formulir eksternal atau internal
* Email yang diurai secara otomatis
* API dan webhook
* Entri manual oleh tim dukungan pelanggan atau operasi

Sistem kemudian menstandarisasi semuanya dengan menangani:

* Identifikasi sumber
* Deteksi duplikat
* Pengayaan data dasar

Hasilnya, semua permintaan dibawa ke dalam satu alur kerja tiket terpadu, bukan tersebar di berbagai alat dan sistem yang berbeda.

![Email.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(3)-xzkr06.png)

### Penugasan Bertenaga AI

Di NocoBase, AI melampaui balasan otomatis dan memainkan peran aktif di seluruh proses penanganan tiket:

* Memahami maksud dan urgensi tiket
* Mengevaluasi prioritas menggunakan aturan dan data historis
* Menugaskan tiket secara cerdas berdasarkan keterampilan anggota tim dan beban kerja saat ini
* Memberikan saran tanggapan dan konteks yang relevan kepada agen

AI tidak dirancang untuk menggantikan manusia. Tujuannya adalah untuk mengurangi biaya penilaian manual, memungkinkan tim untuk fokus pada keputusan yang benar-benar membutuhkan keterlibatan manusia.

![AI.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(4)-q39am4.png)

### SLA

Tanpa penegakan SLA, sistem tiket pasti akan berubah menjadi tidak lebih dari sekadar daftar tugas.

Dalam solusi ini:

* Prioritas yang berbeda (P0-P3) dapat dikonfigurasi dengan target SLA yang berbeda
* Waktu respons dan waktu resolusi dilacak secara otomatis
* Pelanggaran SLA memicu notifikasi atau alur kerja eskalasi
* Metrik SLA dapat langsung digunakan untuk pelaporan dan analisis retrospektif

![SLA.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(5)-04o2xf.png)

### Basis Pengetahuan

Sistem tiket yang dirancang dengan baik secara alami akan berkembang menjadi sistem pengetahuan seiring waktu.

Dalam solusi NocoBase:

* Proses resolusi tiket secara otomatis ditangkap sebagai entri pengetahuan
* Saat tiket baru dibuat, sistem merekomendasikan solusi serupa
* AI membantu menghasilkan ringkasan, menyempurnakan konten, dan mendukung banyak bahasa
* Basis pengetahuan ini, pada gilirannya, terus meningkatkan efisiensi penanganan tiket

![Basis Pengetahuan.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(6)-bu5gpu.png)

Berbeda dari Solusi Tradisional


| Dimensi              | SaaS Tiket Tradisional | Sistem Internal          | Solusi Tiket NocoBase      |
| -------------------- | ---------------------- | ------------------------ | -------------------------- |
| Waktu peluncuran     | Cepat                  | Lambat                   | Cepat                      |
| Kustomisasi          | Terbatas               | Tinggi                   | Tinggi                     |
| Biaya ekstensi       | Tinggi                 | Tinggi                   | Rendah                     |
| Integrasi AI         | Dasar dan tambahan     | Memerlukan pengembangan khusus | Asli dan terintegrasi dalam |
| Data dan penyebaran  | Dikendalikan sebagian  | Dikendalikan sepenuhnya  | Dikendalikan sepenuhnya    |

## Instalasi dan Penggunaan

Silakan merujuk ke dokumentasi dan pilih opsi yang paling sesuai dengan edisi NocoBase dan latar belakang teknis Anda.

[https://v2.docs.nocobase.com/cn/solution/ticket-system/installation](https://v2.docs.nocobase.com/cn/solution/ticket-system/installation?utm_source=chatgpt.com)

## Peta Jalan

Solusi tiket NocoBase masih terus berkembang, dan beberapa kemampuan belum sepenuhnya tersedia di versi saat ini. Kami akan terus meningkatkan dan memperluas solusi berdasarkan kasus penggunaan dunia nyata dan umpan balik dari komunitas.

Dalam periode mendatang, kami berencana untuk fokus pada area berikut:

* **Dukungan multibahasa**: memperluas cakupan bahasa untuk tim global
* **Peningkatan dokumentasi**: menyediakan dokumentasi terperinci untuk alur kerja dan modul inti untuk membuat sistem lebih mudah dipahami dan digunakan

Jika Anda mengalami masalah saat menggunakan sistem, atau memiliki saran tentang fitur atau desainnya, kami menyambut Anda untuk berbagi umpan balik di forum komunitas NocoBase.

Kami secara aktif meninjau umpan balik ini dan menggunakannya sebagai masukan penting untuk iterasi di masa mendatang.

Forum: [https://forum.nocobase.com](https://forum.nocobase.com)

Anda juga dipersilakan untuk mencoba solusi tiket lengkap di lingkungan demo kami: [https://demo.nocobase.com/new](https://demo.nocobase.com/new)
