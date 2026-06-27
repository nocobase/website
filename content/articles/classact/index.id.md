---
title: "Respons Sub-Detik dalam Skala Besar: Classact Menjalankan NocoBase di Kubernetes"
description: "Classact menerapkan NocoBase di Kubernetes, mencapai respons sub-detik untuk ratusan ribu catatan, mencakup manajemen SDM dan kepatuhan, serta secara signifikan meningkatkan efisiensi dan pengalaman pengguna."
---

## **Tentang Classact**

[Classact Co., Ltd](https://www.classact.co.jp/). adalah penyedia layanan infrastruktur TI yang menawarkan dukungan teknis dan penyediaan staf teknisi. Perusahaan ini juga termasuk salah satu yang pertama di Jepang yang menerima sertifikasi Proxmox Gold Partner, dengan pengalaman luas di bidang virtualisasi dan pusat data. Sambil memberikan solusi TI dengan ketersediaan tinggi kepada klien, Classact juga terus berupaya menyederhanakan sistem dan proses internalnya sendiri untuk memastikan efisiensi operasional dan kepatuhan.

Seperti banyak perusahaan, kebutuhan digital Classact tidak hanya terbatas pada tim teknis. Departemen seperti administrasi, SDM, dan penjualan juga membutuhkan sistem yang andal untuk mengelola rekrutmen, operasional karyawan, pelatihan, dan kepatuhan keamanan informasi.

![company.png](https://static-docs.nocobase.com/1-ifaq7k.png)

## **Tantangan dan Kebutuhan**

Sebelum mengadopsi NocoBase, Classact terutama mengandalkan alat sumber terbuka Exment untuk manajemen basis data internal.

![exment.PNG](https://static-docs.nocobase.com/2-x35h8j.PNG)

Namun, seiring dengan meningkatnya skala operasi bisnis dan volume data, masalah kinerja Exment mulai memengaruhi penggunaan sehari-hari:

* **Muat halaman lambat**: Pada kumpulan data besar, satu halaman bisa membutuhkan waktu 5–10 detik untuk dimuat, memperlambat alur kerja secara signifikan.
* **Pengalaman pengguna yang buruk**: Waktu tunggu yang lama menyebabkan seringnya keluhan karyawan dan mengurangi kemauan untuk menggunakan sistem.
* **Skalabilitas terbatas**: Sistem tidak memiliki fleksibilitas untuk mengakomodasi kebutuhan bisnis yang terus berkembang atau mendukung skenario aplikasi baru.

Pada saat yang sama, tim yang berbeda bereksperimen dengan alat lain. Beberapa mengadopsi ClickUp untuk manajemen tugas, sementara Classact juga mengevaluasi Airtable dan NocoDB.

Melalui eksplorasi ini, Classact memperjelas kebutuhannya akan solusi baru:

* **Kinerja tinggi**: Menangani ratusan ribu catatan sambil mempertahankan waktu respons yang cepat.
* **Fleksibilitas**: Memungkinkan departemen untuk dengan cepat menyesuaikan aplikasi sesuai kebutuhan spesifik mereka.
* **Kontrol perusahaan**: Mendukung penyebaran mandiri (self-hosted) dan privat, memastikan kontrol penuh atas data.

Kebutuhan-kebutuhan ini pada akhirnya membawa Classact memilih NocoBase sebagai solusi yang paling sesuai.

## **Penyebaran dan Validasi**

Sebelum digunakan secara langsung, Classact pertama-tama menguji NocoBase di lingkungan pementasan (staging). Tim mengimpor ratusan ribu catatan untuk mensimulasikan skenario bisnis nyata, dengan fokus pada kinerja kueri dan muat halaman. Hasilnya menunjukkan bahwa NocoBase mempertahankan kinerja yang stabil bahkan dengan kumpulan data besar, sepenuhnya memenuhi ekspektasi.

Berdasarkan validasi ini, perusahaan menyebarkan NocoBase di klaster Kubernetes yang dikelola sendiri untuk memastikan stabilitas tingkat perusahaan. Tim teknis juga membeli beberapa plugin, yang mempercepat pengembangan aplikasi dan memungkinkan peluncuran cepat sistem manajemen operasional karyawan dan pelatihan yang sebelumnya terhenti.

Pendekatan penyebaran dan validasi ini tidak hanya mengonfirmasi keandalan NocoBase dalam hal kinerja dan skalabilitas, tetapi juga memungkinkan Classact untuk melakukan migrasi dengan risiko minimal dan dengan cepat memajukan transformasi digital internalnya.

## **Cakupan Aplikasi**

Setelah penyebaran, Classact dengan cepat membangun dan meluncurkan serangkaian aplikasi untuk mendukung berbagai aspek operasi internal. Aplikasi-aplikasi ini mencakup proses bisnis umum seperti SDM, layanan karyawan, dan manajemen aset, serta area yang lebih khusus seperti kepatuhan ISMS dan program mentoring.

![nocobase](https://static-docs.nocobase.com/3-z5vksi.PNG)

![nocobase.PNG](https://static-docs.nocobase.com/4-g1sz0z.PNG)

* **Manajemen Sumber Daya Manusia**

Pemeliharaan data karyawan, laporan dan notifikasi pelatihan, aktivitas rekrutmen (catatan wawancara dan notifikasi), penugasan peran dan posisi, pemilihan perwakilan karyawan, dan pelacakan sertifikasi profesional.

* **Layanan Karyawan**

Pembaruan informasi (misalnya, alamat atau rute perjalanan), aplikasi tunjangan, penggantian biaya, pembelian peralatan dan buku, permintaan kartu nama, konsultasi medis, dan pelaporan untuk acara perayaan atau belasungkawa.

* **Manajemen Aset dan Tugas**

Manajemen aset sistem internal dan peralatan, bersama dengan pelacakan tugas harian.

* **Pembelajaran dan Pengembangan**

Manajemen lisensi e-learning, manajemen program mentoring dan pelaporan untuk mendukung pertumbuhan karyawan yang berkelanjutan.

* **Keamanan Informasi dan Kepatuhan**

Manajemen operasi ISMS untuk memenuhi standar keamanan informasi.

* **Pengumpulan Data dan Keterlibatan**

Formulir publik untuk mengumpulkan informasi kandidat, survei karyawan, dan umpan balik internal.

Sebagian besar sistem perusahaan hanya mencakup satu skenario, memaksa organisasi untuk mengandalkan banyak alat untuk mengelola proses yang berbeda secara paralel. **NocoBase mematahkan batasan ini, memungkinkan Classact untuk membangun dan menggabungkan aplikasi secara bebas dalam satu platform.**

Dengan pendekatan ini, Classact telah menciptakan platform manajemen internal terintegrasi yang disesuaikan dengan kebutuhannya, dengan fleksibilitas yang jauh lebih besar daripada solusi tradisional.

## **Hasil**

Dengan mengadopsi NocoBase, Classact mencapai peningkatan signifikan dalam hal kinerja dan pengalaman pengguna:

* **Optimalisasi kinerja**: Waktu muat halaman turun dari 5–10 detik menjadi hanya 1–2 detik, sangat meningkatkan efisiensi harian.
* **Kepuasan pengguna yang lebih tinggi**: Berkurangnya waktu tunggu mengurangi frustrasi dan resistensi, menghasilkan umpan balik karyawan yang secara konsisten positif.
* **Visualisasi**: Grafik, filter fleksibel, dan opsi tampilan membuat data jauh lebih intuitif untuk dianalisis.
* **Optimalisasi proses**: Fitur alur kerja menyederhanakan proses bisnis yang kompleks lebih jauh lagi.

Classact juga berbagi umpan balik positif tentang pengalaman mereka dengan NocoBase:

> *"Apa yang paling kami hargai dari NocoBase adalah stabilitas dan skalabilitasnya. Bahkan dengan kumpulan data besar, ia secara konsisten memberikan kinerja yang stabil. Fitur grafik memberi kami visualisasi data yang intuitif, plugin LDAP memungkinkan integrasi yang mulus dengan Active Directory, formulir publik memudahkan pengumpulan data kandidat dan karyawan, dan fungsi alur kerja telah sangat menyederhanakan proses internal kami."*  — **Hidetoshi Honma, CEO Classact**

## **Kesimpulan**

Pengalaman Classact menunjukkan bahwa NocoBase tidak hanya memberikan waktu respons di bawah satu detik dengan kumpulan data ratusan ribu, tetapi juga, melalui penyebaran Kubernetes dan arsitektur pluginnya, mendukung kebutuhan multi-departemen dan multi-proses yang kompleks pada satu platform.

Tidak seperti sistem silo tradisional, NocoBase menyediakan arsitektur berbasis model, dapat diperluas, dan dapat dikomposisi. Hal ini memungkinkan perusahaan untuk terus mengembangkan sistem internal mereka dengan biaya lebih rendah sambil tetap menyediakan ruang untuk ekspansi di masa depan.


**Lebih Banyak Kisah Pelanggan:**

* [Pabrik Digital BIEL Crystal: Mendukung 1,85 Miliar Unit per Tahun](https://www.nocobase.com/en/blog/bielcrystal)
* [Bagaimana Distinct HealthCare Menggunakan NocoBase untuk Membangun Sistem Perawatan Jangka Panjang yang Dipersonalisasi](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Perjalanan Tanpa Kode di Dalam SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [Apa yang Membuat Perusahaan Properti Terkemuka di Jepang Beralih dari Salesforce ke NocoBase Sumber Terbuka?](https://www.nocobase.com/en/blog/century-21)
* [Bagaimana Second-Brain Membangun Sistem AI untuk Lembaga Keuangan dengan NocoBase](https://www.nocobase.com/en/blog/second-brain)
* [Bagaimana Merek Perekam Suara AI No.1 Membangun Sistem Internalnya](https://www.nocobase.com/en/blog/plaud)
