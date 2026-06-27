---
title: "NocoBase 2.0: Temui Karyawan AI Anda"
description: "Sekarang, saatnya memperkenalkan NocoBase 2.0-alpha secara resmi!"
---

NocoBase 1.0-alpha dirilis pada 28 April 2024, menandai dimulainya perjalanan komersial kami.
Dalam setahun terakhir, kami telah menerima masukan dari ribuan pengguna, kontribusi kode dari pengembang di seluruh dunia, dan pesanan komersial dari ratusan perusahaan di lebih dari 50 negara.

Kami dengan tulus berterima kasih kepada setiap pengguna, kontributor, dan pelanggan berbayar atas kepercayaan dan dukungan Anda.

Selama enam bulan terakhir, sambil terus melakukan iterasi dan peningkatan pada versi 1.x, kami juga telah menghabiskan banyak waktu untuk berpikir, berdiskusi, dan mengembangkan generasi berikutnya dari NocoBase.

Sekarang, saatnya untuk secara resmi memperkenalkan **NocoBase 2.0-alpha!**

## Karyawan AI

Tahun lalu menyaksikan kemajuan pesat dalam AI, dengan model besar yang menunjukkan kemampuan yang luar biasa - bahkan menakjubkan - di banyak domain.

Sebagai pengguna AI berat, kami telah membawa AI langsung ke dalam NocoBase 2.0 dalam bentuk **Karyawan AI** - rekan kerja cerdas yang bekerja di dalam sistem Anda.

Karyawan AI di NocoBase **bukanlah chatbot**, atau agen yang terisolasi.

Mereka **terintegrasi dengan mulus** ke dalam sistem bisnis Anda, mampu memahami konteks dan menjalankan tugas secara langsung.

* Mereka muncul di mana pun Anda membutuhkannya - di samping tabel dan formulir Anda - siap membantu.
* Mereka dapat merangkum email, menganalisis data, mengatur konten tidak terstruktur dan mengisi formulir secara otomatis, merancang model data, atau bahkan menulis kode JavaScript.
* Mereka secara otomatis mengambil data kontekstual dan struktur halaman untuk eksekusi tugas yang cerdas.
* Masing-masing memiliki keterampilan, alat, dan basis pengetahuan yang unik.
* Anda dapat membuat Karyawan AI dalam jumlah tak terbatas untuk membentuk tim AI Anda sendiri.

[Pelajari lebih lanjut tentang Karyawan AI](https://v2.docs.nocobase.com/ai-employees)

[Coba Demo](https://demo.nocobase.com/new)

<video controls>
  <source src="https://static-docs.nocobase.com/Meet-Your-AI-Employee-EN.mp4" type="video/mp4">
</video>

## Sistem Halaman 2.0 yang Baru Sama Sekali

Meskipun NocoBase selalu berbasis plugin, versi 1.x memiliki keterbatasan ketika berhadapan dengan interaksi dinamis, tata letak yang fleksibel, atau logika yang disesuaikan di frontend.

Sulit untuk mencapai persyaratan seperti itu tanpa biaya yang signifikan.

NocoBase 2.0 memperkenalkan **sistem halaman yang direstrukturisasi sepenuhnya** yang dirancang untuk mendukung kebutuhan frontend yang dipersonalisasi dan kompleks secara efisien.

### RUNJS

**RunJS** menyediakan cara ringan untuk memperluas dan menyesuaikan logika UI atau gaya - tanpa membuat plugin atau memodifikasi kode sumber.

Di dalam perancang halaman, Anda dapat menulis JavaScript secara langsung untuk:

* Menyesuaikan konten yang dirender (bidang, blok, kolom, item, dll.)
* Mendefinisikan interaksi khusus (tindakan tombol, pemicu peristiwa)
* Menggabungkan dengan data kontekstual untuk perilaku dinamis

RunJS didukung di:

* Blok JS
* Tindakan JS
* Bidang JS
* Item JS
* Aturan tautan
* Alur peristiwa

[Pelajari lebih lanjut tentang RUNJS](https://v2.docs.nocobase.com/interface-builder/runjs)

![20251102213506-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251102213506-2025-11-02-21-35-08.png)

### Alur Peristiwa

Di NocoBase 1.x, sistem aturan tautan memungkinkan orkestrasi logika yang terbatas, terbatas pada satu blok.

NocoBase 2.0 memperkenalkan **Alur Peristiwa**, peningkatan besar pada konfigurasi logika frontend.

Alur Peristiwa terdiri dari:

* **Peristiwa pemicu**, seperti sebelum render, saat diklik, atau perubahan nilai
* **Kondisi pemicu**
* **Langkah tindakan**, seperti menampilkan notifikasi, menyegarkan blok target, atau menjalankan JavaScript

[Pelajari lebih lanjut tentang Alur Peristiwa](https://v2.docs.nocobase.com/interface-builder/event-flow)

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251031093341.png)

### Tata Letak Grid

Dalam versi 1.x, blok dan bidang menggunakan tata letak seret fleksibel lebar penuh, yang membatasi presisi dan estetika.

NocoBase 2.0 memperkenalkan **sistem tata letak grid baru**, yang memungkinkan setiap elemen untuk menyelaraskan dengan unit grid untuk kontrol yang lebih halus.

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251029201501.gif)

### Blok dan Modal yang Dapat Digunakan Kembali

Di 1.x, fitur salin/referensi untuk blok terbatas dan rentan terhadap bug, dan seluruh modal tidak dapat direferensikan.

NocoBase 2.0 mendefinisikan ulang ini sepenuhnya - memungkinkan **referensi dan duplikasi yang fleksibel** dari blok dan modal, secara dramatis mengurangi upaya konfigurasi.

[Pelajari lebih lanjut tentang Referensi & Salinan Blok](https://v2.docs.nocobase.com/interface-builder/blocks/other-blocks/block-reference)

[Pelajari lebih lanjut tentang Referensi Modal](https://v2.docs.nocobase.com/interface-builder/actions/action-settings/edit-popup)

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102211459_rec_.gif)

### Pengalaman Blok yang Ditingkatkan

Berdasarkan masukan pengguna, NocoBase 2.0 menghadirkan banyak penyempurnaan pada komponen blok.

Misalnya, tabel sekarang mendukung **pengeditan sebaris** langsung di dalam sel - tidak perlu popup.

Lebih banyak peningkatan sedang dalam perjalanan.

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102215026-2025-11-02-21-50-28.png)

### Performa Lebih Baik

NocoBase 2.0 memberikan peningkatan performa frontend yang signifikan dibandingkan dengan 1.x.

## FlowEngine

Sistem halaman baru di 2.0 didukung oleh **FlowEngine** - mesin frontend low-code generasi berikutnya yang menggabungkan **Model** dan **Alur**.

Ini menyederhanakan logika frontend, meningkatkan penggunaan kembali, dan meningkatkan pemeliharaan.

Dengan memanfaatkan sifat Alur yang dapat dikonfigurasi, ini menghadirkan orkestrasi tanpa kode ke komponen frontend dan logika bisnis.

Mengembangkan frontend plugin di 1.x sering kali melibatkan tantangan yang kompleks. Dengan FlowEngine, ini sekarang sangat disederhanakan.

[Pelajari lebih lanjut tentang FlowEngine](https://v2.docs.nocobase.com/flow-engine/what-is-flow-engine)

## Multi-Aplikasi dan Multi-Ruang

Versi 1.x mendukung kemampuan multi-aplikasi dasar, tetapi semua aplikasi berbagi satu proses dan tidak dapat dipantau atau dikelola secara individual.

NocoBase 2.0 memperkenalkan **arsitektur Multi-Aplikasi dan Multi-Ruang yang baru sama sekali**.

* **Plugin Multi-Aplikasi** *(dalam pengembangan)*
  Memungkinkan pembuatan dan pengelolaan dinamis beberapa aplikasi mandiri tanpa penerapan terpisah.
  Setiap aplikasi berjalan sebagai instance independen dengan database, plugin, dan konfigurasinya sendiri - baik dalam proses yang terisolasi atau bersama.
  Aplikasi induk dapat memantau dan mengelola penggunaan sumber daya dan status sub-aplikasi, ideal untuk skenario multi-penyewa.
* **Plugin Multi-Ruang**
  Memungkinkan isolasi logis dalam satu instance - sempurna untuk skenario seperti multi-cabang atau multi-pabrik.
  Logika bisnis, alur kerja, dan konfigurasi tetap konsisten, sementara data tetap terisolasi sepenuhnya.

[Pelajari lebih lanjut tentang Multi-Ruang](https://v2.docs.nocobase.com/multi-app/multi-space)

![20251102220714-2025-11-02-22-07-16](https://static-docs.nocobase.com/20251102220714-2025-11-02-22-07-16.png)

## Visualisasi Data Baru

Plugin bagan 1.x didasarkan pada Ant Design Charts dan ECharts, cocok untuk kasus sederhana tetapi terbatas untuk visualisasi yang kompleks, interaktif, atau tertaut.

NocoBase 2.0 memperkenalkan **Plugin Visualisasi Data baru** yang dibangun sepenuhnya di atas ECharts, mendukung:

* Mode konfigurasi visual
* Mode SQL dan JSON
* Interaksi yang digerakkan oleh peristiwa
* Tautan multi-bagan dan penelusuran mendalam

Dan jika SQL atau JSON tampak terlalu rumit - Karyawan AI Anda **Nathan** dapat membantu.

[Pelajari lebih lanjut tentang Visualisasi Data](https://v2.docs.nocobase.com/data-visualization)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

## Menyinkronkan Struktur Database & Mengubah Tipe Bidang

Dalam versi 1.x, tabel dan bidang hanya dapat dibuat melalui Manajer Sumber Data NocoBase dan tipe bidang tidak dapat diubah setelahnya.

NocoBase 2.0 sekarang memungkinkan:

* Menyinkronkan tabel dan bidang yang ada dari database utama Anda
* Mengubah tipe bidang setelah pembuatan

Ini berarti Anda dapat langsung menggunakan skema database yang ada sebagai sumber data utama Anda.

![20251102222325-2025-11-02-22-23-27](https://static-docs.nocobase.com/20251102222325-2025-11-02-22-23-27.png)

## Plugin Tambahan

### Riwayat Rekam

Plugin Riwayat Rekam secara otomatis melacak perubahan data - penyisipan, pembaruan, penghapusan - menyimpan snapshot dan diff untuk tujuan audit dan pengembalian.

[Pelajari lebih lanjut tentang Riwayat Rekam](https://v2.docs.nocobase.com/record-history/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/202511011346400.png)

### Draf Formulir

Plugin Draf Formulir secara otomatis menyimpan data draf saat pengguna mengisi formulir, mencegah kehilangan yang tidak disengaja.

### Manajer Email Baru

Dibangun kembali dengan FlowEngine, Manajer Email baru mengintegrasikan Karyawan AI dengan mulus untuk merangkum, menganalisis, dan menulis email.

Ini juga memperkenalkan penyimpanan draf otomatis dan peningkatan lainnya.

[Pelajari lebih lanjut tentang Manajer Email](https://v2.docs.nocobase.com/email-manager/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

## Memutakhirkan dari 1.x ke 2.0

Memutakhirkan dari 1.x ke 2.0 sangatlah mudah - cukup ikuti [panduan resmi](https://v2.docs.nocobase.com/get-started/upgrading/docker).

Namun, perlu diperhatikan bahwa **NocoBase 2.0 saat ini dalam tahap alpha**, jadi perkirakan beberapa ketidakstabilan.

Berkat **arsitektur terpisah antara UI dan data** NocoBase, aplikasi 1.x Anda yang sudah ada akan tetap utuh sepenuhnya.

Saat membuat halaman baru, Anda sekarang dapat memilih antara tipe **v1** dan **v2** - pilih v2 untuk mengakses fitur NocoBase 2.0 yang baru.

![20251102222729-2025-11-02-22-27-31](https://static-docs.nocobase.com/20251102222729-2025-11-02-22-27-31.png)
