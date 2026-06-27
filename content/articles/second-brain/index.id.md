---
title: "Bagaimana Second-Brain membangun sistem AI untuk lembaga keuangan dengan NocoBase"
description: "Perusahaan AI yang berbasis di Hong Kong, Second-Brain, menggunakan NocoBase untuk mengatasi tantangan keamanan tinggi dan siklus pendek, membangun sistem AI untuk perusahaan keuangan guna mencapai pengiriman yang efisien dan akumulasi kemampuan."
---

## Pilihan Kritis Sebuah Startup AI

[Second-Brain](http://www.dbl-brain.com/) adalah sebuah startup AI yang berbasis di Hong Kong, didirikan oleh tim dengan latar belakang di bidang keuangan dan konsultasi. Mereka berspesialisasi dalam membangun sistem pengambilan keputusan berbasis AI untuk perusahaan.

![Second-Brain](https://static-docs.nocobase.com/1-esvvr0.PNG)

Di lingkungan perusahaan B2B, bagian tersulit dalam membangun sistem AI bukanlah modelnya itu sendiri—melainkan data yang berantakan dan terfragmentasi di belakangnya. Kebijakan internal, alur kerja, dan catatan bisnis seringkali berada dalam silo, dalam format yang tidak konsisten, dan terkadang bahkan saling bertentangan. Tanpa membersihkan dan menata data ini, AI tidak dapat menghasilkan wawasan yang berarti.

Untuk memungkinkan AI "memahami" sebuah perusahaan, langkah pertama Second-Brain adalah membangun lapisan fundamental yang mengkonsolidasikan pengetahuan perusahaan yang eksklusif, termasuk peraturan dan regulasi internal, proses bisnis, dan standar kepatuhan eksternal.

Saat mengembangkan sistem pengetahuan AI untuk klien perbankan, Second-Brain menghadapi tantangan pengiriman yang signifikan:

* Mendukung **ratusan halaman** dengan kontrol izin yang rumit
* Penerapan **sepenuhnya offline** tanpa **akses ke layanan online**
* **Jadwal pengiriman yang ketat** tanpa kompromi pada pengalaman pengguna

Dengan fokus yang kuat pada model AI dan desain produk vertikal, Second-Brain membutuhkan tulang punggung sistem yang **fleksibel, dihosting sendiri, dan cepat diimplementasikan**—dengan dukungan yang kuat untuk pemodelan dan konfigurasi data.

## Mengapa NocoBase?

Ketika proyek dimulai, Second-Brain dengan cermat melihat beberapa platform low-code dan no-code. Ini termasuk berbagai alat SaaS dan proyek open-source dari dalam dan luar negeri. Namun, masalah dengan opsi penerapan, lisensi, atau kontrol kode berarti mereka tidak dapat memenuhi kebutuhan ketat klien untuk penerapan offline dan keamanan informasi.

Pada satu titik, mereka bahkan mempertimbangkan untuk kembali ke "pendekatan tradisional": mengembangkan seluruh front-end dan back-end secara internal. Metode ini menawarkan kontrol yang besar dan membantu melindungi kekayaan intelektual (IP). Tetapi dengan tenggat waktu pengiriman yang ketat dan ekspektasi klien yang tinggi, jalur ini terlalu mahal dan berisiko.

Tepat ketika tim sedang berjuang dengan keputusan ini, mereka menemukan NocoBase.

Tim tersebut tertarik pada arsitektur dan prinsip NocoBase: **tidak bergantung pada SaaS, menawarkan fleksibilitas, dan dapat disesuaikan, diperluas, serta dikirimkan**. Sifat open-source-nya memungkinkan Second-Brain untuk mendapatkan pemahaman mendalam tentang cara kerja NocoBase, membantu mereka dengan cepat menanggapi masukan klien.

Pada akhirnya, Second-Brain memilih NocoBase sebagai platform fundamental untuk sistem mereka dan mulai membangun serta mengirimkan proyek tersebut. Tantangan sebenarnya bukan hanya memilih alat, tetapi bagaimana menggunakannya untuk membangun sistem aplikasi AI berbasis data yang kompleks dan mengirimkannya dengan cepat.

## Implementasi Proyek: Tantangan dan Solusi

Proyek ini bukan hanya tentang membangun platform manajemen pengetahuan tradisional—ini tentang menciptakan basis pengetahuan jangka panjang yang andal yang benar-benar dapat dipahami dan digunakan oleh AI.

Tujuannya adalah untuk membersihkan, mengklasifikasikan, dan memodelkan peraturan internal dan aturan bisnis yang tidak terstruktur, kemudian mengeksposnya melalui API standar untuk akses model AI. Ini membutuhkan kemampuan canggih dalam pemodelan data, organisasi, dan desain antarmuka.

Karena klien beroperasi di industri keuangan, keamanan adalah yang terpenting. **Seluruh penerapan harus berjalan sepenuhnya offline, dan setiap pembaruan harus melalui proses persetujuan dan transfer yang terisolasi secara fisik.**

Setelah NocoBase terbukti layak secara teknis, Second-Brain melanjutkan dengan arsitektur solusi dan pemilihan teknologi, akhirnya memenangkan tender dan mendorong proyek ke depan.

NocoBase berfungsi sebagai tulang punggung sistem, memungkinkan tim untuk:

* **Mengubah dokumen peraturan dan kebijakan menjadi data terstruktur dan terstandarisasi** yang dapat dikonsumsi oleh model AI

![Mengubah dokumen peraturan dan kebijakan menjadi data terstruktur dan terstandarisasi](https://static-docs.nocobase.com/2-5xor3v.PNG)

* **Menggerakkan infrastruktur data di belakang modul Tanya Jawab AI**, memungkinkan:
  * Tanya Jawab sehari-hari dan pertanyaan terkait kebijakan
  * Pertanyaan bisnis yang mencakup beberapa kumpulan data
  * Analisis yang berorientasi pada manajemen yang memberikan kesimpulan terstruktur

![Menggerakkan infrastruktur data di belakang modul Tanya Jawab AI](https://static-docs.nocobase.com/3-p8o62u.PNG)

* **Mendukung alur kerja AI dengan alat internal** seperti:Pra-pemrosesan dokumen (misalnya, mengonversi PDF, file Word, atau gambar menjadi teks yang dapat diekstrak)

  ![Pra-pemrosesan dokumen](https://static-docs.nocobase.com/4-sdv8mt.png)

  Menghasilkan pasangan Tanya Jawab dari korpus yang dikurasi untuk memperkaya kumpulan data fine-tuning.![Menghasilkan pasangan Tanya Jawab](https://static-docs.nocobase.com/5-hb6nly.png)
* **Membangun plugin ECharts khusus untuk memvisualisasikan hubungan** antara aturan dan regulasi sebagai grafik pengetahuan.

![Plugin ECharts](https://static-docs.nocobase.com/6-qalqnu.png)

## Arsitektur Plugin: Sebuah Kejutan yang Menyenangkan

Ketika berhadapan dengan persyaratan keamanan yang ketat, **desain berbasis plugin NocoBase terbukti menjadi pengubah permainan untuk penerapan dan kolaborasi**.

Second-Brain memodulasi fitur inti menjadi plugin individual—sehingga setiap kali sistem perlu diperbarui, mereka dapat mengirimkan hanya plugin yang diperbarui untuk disetujui. Ini membuatnya jauh lebih mudah untuk mematuhi proses peninjauan klien dan secara dramatis mengurangi beban pemindaian keamanan dan pengujian. Ini adalah kecocokan yang ideal untuk lembaga keuangan dengan kontrol ketat atas pembaruan perangkat lunak.

Manfaatnya tidak berhenti di situ. **Pendekatan plugin juga meningkatkan kecepatan pengembangan tim.**

Butuh waktu sekitar dua minggu untuk membuat plugin pertama sambil mencari tahu struktur dan templat yang ideal. Tetapi setelah itu, plugin baru dapat dikloning dan disesuaikan dalam waktu yang jauh lebih singkat.

Mereka sekarang telah mengembangkan hampir 20 plugin yang mencakup berbagai modul seperti visualisasi grafik, manajemen izin, dan pembersihan data. Ini membangun perpustakaan aset yang dapat digunakan kembali untuk pengiriman di masa depan.

## Wawasan dari Garis Depan Penggunaan Dunia Nyata

Sepanjang proses pengiriman, Second-Brain membagikan beberapa kesimpulan utama dari bekerja dengan NocoBase dalam produksi.

**1. Stabilitas**

Bahkan dengan iterasi yang sering, NocoBase mempertahankan konsistensi versi yang kuat. **Sistem tidak pernah mati karena upgrade**—faktor penting ketika bekerja dengan klien di industri keuangan.

> “NocoBase sangat konsisten di berbagai versi. Kami belum pernah mengalami crash selama upgrade antar versi—yang, sejujurnya, cukup langka.”  — Zhengxing Yang, Pimpinan Teknis di Second-Brain

**2. Kolaborasi**

Second-Brain memiliki kolaborasi yang lancar dan responsif dengan tim teknis NocoBase sepanjang siklus pengiriman. Dari perbaikan bug hingga permintaan fitur, setiap respons tepat waktu dan membantu.

Model kerja “open source, tetapi tidak pernah sendiri” ini adalah faktor kunci dalam proyek berisiko tinggi dan keamanan tinggi ini.

Meskipun proyek sekarang sudah selesai, alat dan pendekatannya terus membentuk cara klien beroperasi saat ini.

## Kesimpulan

Second-Brain mengirimkan sistem AI yang kompleks dan berkemanan tinggi dengan tim yang ramping. Dengan mengandalkan NocoBase untuk menangani fondasi sistem, tim bebas menyalurkan energi mereka ke dalam membangun kemampuan AI yang benar-benar penting.

Itulah tepatnya yang ingin dicapai NocoBase: **membebaskan tim dari pengembangan sistem yang berulang, sehingga mereka dapat fokus pada pekerjaan kreatif dan berdampak tinggi yang mendorong nilai bisnis nyata**.

Di industri dengan tuntutan keamanan yang ketat dan persyaratan yang kompleks, proyek ini menunjukkan bagaimana platform no-code dan low-code yang benar-benar fleksibel dapat mendefinisikan ulang apa yang mungkin dalam pengiriman sistem perusahaan.

**Bacaan terkait:**

* [Bagaimana Merek Perekam Suara AI No.1 Membangun Sistem Internalnya](https://www.nocobase.com/en/blog/plaud)
* [Melampaui Spreadsheet: Manajemen Data Karyawan Classmethod dengan NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Bagaimana Satu Pabrik Furnitur Membangun ERP Sendiri—Tanpa Coding](https://www.nocobase.com/en/blog/olmon)
* [Dari Desainer ke Pembangun: Transformasi Digital L&A dengan NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Bagaimana KIGLAND Menskalakan Produksi Topeng Anime Kustom dengan Alat Open-Source](https://www.nocobase.com/en/blog/kigland)
* [Bagaimana Firma Hukum dengan 400+ Pengacara Menyederhanakan Manajemen Komisi dengan NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
