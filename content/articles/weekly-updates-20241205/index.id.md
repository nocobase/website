---
title: "Pembaruan Mingguan NocoBase: Dukungan untuk mengaktifkan pop up tautan di bidang readPretty"
description: "Pembaruan minggu ini meliputi: dukungan untuk mengaktifkan pop up tautan di bidang readPretty, dukungan untuk memicu alur kerja secara manual, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**Minggu ini kami merilis [NocoBase 1.4.0](https://www.nocobase.com/en/blog/nocobase-1-4-0), yang menghadirkan beberapa fitur baru dan peningkatan, termasuk manajemen plugin yang disederhanakan, fungsi notifikasi yang ditingkatkan, sinkronisasi data pengguna, dan manajer cadangan.**

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan teknologi terdepan produk, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/en/blog/v1.3.53)

*Tanggal rilis: 28-11-2024*

### 🚀 Peningkatan

- **[klien]**

  - mengekspor hook penting ([#5702](https://github.com/nocobase/nocobase/pull/5702)) oleh @mytharcher
  - plugin bidang wilayah china dihapus dari plugin bawaan ([#5693](https://github.com/nocobase/nocobase/pull/5693)) oleh @katherinehhh
- **[Workflow: Acara pra-tindakan]** hapus log peringatan di interceptor permintaan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[cli]** Mode daemon tidak menghapus file sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) oleh @chenos
- **[klien]**

  - Perbaiki masalah bidang asosiasi yang saling mempengaruhi ketika beberapa bidang asosiasi memiliki koleksi target yang sama ([#5744](https://github.com/nocobase/nocobase/pull/5744)) oleh @katherinehhh
  - Perbaiki masalah perataan kotak centang di sub-tabel ([#5735](https://github.com/nocobase/nocobase/pull/5735)) oleh @katherinehhh
  - Perbaiki masalah tampilan bidang kunci asing di pemilih data ([#5734](https://github.com/nocobase/nocobase/pull/5734)) oleh @katherinehhh
  - Perbaiki penyesuaian feedbackLayout untuk meningkatkan pesan validasi di sub-tabel ([#5700](https://github.com/nocobase/nocobase/pull/5700)) oleh @katherinehhh
- **[server]** Muat plugin dalam urutan dependensi ([#5706](https://github.com/nocobase/nocobase/pull/5706)) oleh @chenos
- **[Blok: Peta]** Perbaiki kesalahan saat mengubah tingkat zoom di Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) oleh @katherinehhh
- **[Sumber data: Utama]** Perbaiki nama bidang inferensi di koleksi tampilan ([#5729](https://github.com/nocobase/nocobase/pull/5729)) oleh @chareice
- **[Manajer file]** ketika endpoint tidak kosong, forcePathStyle disetel ke true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) oleh @chenos

## [v1.3.55](https://www.nocobase.com/en/blog/v1.3.55)

*Tanggal rilis: 03-12-2024*

### 🚀 Peningkatan

- **[klien]** Untuk menggunakan ikon dengan makna yang lebih akurat untuk penginisialisasi blok ([#5757](https://github.com/nocobase/nocobase/pull/5757)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Perbaiki kasus E2E berdasarkan ikon yang diubah ([#5768](https://github.com/nocobase/nocobase/pull/5768)) oleh @mytharcher
  - Perbaiki bidang pilih untuk menampilkan kosong saat data kosong ([#5762](https://github.com/nocobase/nocobase/pull/5762)) oleh @katherinehhh
- **[database]** Perbaiki pembaruan nilai asosiasi hasOne/belongsTo tanpa kunci asing ([#5754](https://github.com/nocobase/nocobase/pull/5754)) oleh @chareice
- **[Manajer sumber data]** Perbaiki tampilan kunci sumber yang salah ([#5771](https://github.com/nocobase/nocobase/pull/5771)) oleh @katherinehhh
- **[Workflow: Acara tindakan kustom]**

  - Izinkan semua peran untuk memicu acara tindakan kustom di sumber data eksternal oleh @mytharcher
  - Perbaiki sumber data default sebagai utama oleh @mytharcher
  - Perbaiki kesalahan sumber data saat tidak cocok oleh @mytharcher
  - Perbaiki pemicu tindakan kustom tidak memicu pada asosiasi oleh @mytharcher

## [v1.4.1](https://www.nocobase.com/en/blog/v1.4.1)

*Tanggal rilis: 04-12-2024*

### 🚀 Peningkatan

- **[cli]** optimalkan perintah pkg ([#5785](https://github.com/nocobase/nocobase/pull/5785)) oleh @chenos

### 🐛 Perbaikan Bug

- **[Seluler]** Perbaiki bidang input tanggal yang hilang dalam operasi filter di seluler ([#5786](https://github.com/nocobase/nocobase/pull/5786)) oleh @katherinehhh

## [v1.4.2](https://www.nocobase.com/en/blog/v1.4.2)

*Tanggal rilis: 04-12-2024*

### 🐛 Perbaikan Bug

- **[Workflow]** Perbaiki tag workflow asinkron yang hilang di tabel workflow ([#5787](https://github.com/nocobase/nocobase/pull/5787)) oleh @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/en/blog/v1.4.0-beta.9)

*Tanggal rilis: 28-11-2024*

### 🚀 Peningkatan

- **[Seluler]** optimalkan tema ringkas untuk seluler ([#5723](https://github.com/nocobase/nocobase/pull/5723)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[Visualisasi data]** Perbaiki masalah pengambilan zona waktu dari `context` secara tidak benar ([#5743](https://github.com/nocobase/nocobase/pull/5743)) oleh @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/en/blog/v1.4.0-beta.10)

*Tanggal rilis: 28-11-2024*

### 🚀 Peningkatan

- **[klien]** dukung komponen input variabel untuk menggunakan komponen kustom saat `nullable` disetel ke `false` ([#5746](https://github.com/nocobase/nocobase/pull/5746)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah scrollbar ketika tabel memiliki sedikit kolom dengan ukuran sedang ([#5745](https://github.com/nocobase/nocobase/pull/5745)) oleh @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/en/blog/v1.4.0-beta.11)

*Tanggal rilis: 02-12-2024*

### 🚀 Peningkatan

- **[klien]** Dukung bidang file lampiran di formulir publik ([#5749](https://github.com/nocobase/nocobase/pull/5749)) oleh @katherinehhh
- **[cli]** Mulai ulang proses saat plugin ditambahkan atau dihapus ([#5761](https://github.com/nocobase/nocobase/pull/5761)) oleh @chenos
- **[Kalender]** Dukung pembuatan jadwal cepat dengan mengklik tanggal di blok kalender ([#5733](https://github.com/nocobase/nocobase/pull/5733)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah lebar bidang di sub tabel dalam tata letak horizontal ([#5763](https://github.com/nocobase/nocobase/pull/5763)) oleh @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/en/blog/v1.5.0-beta.1)

*Tanggal rilis: 03-12-2024*

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki pemilih rekaman tidak menampilkan item yang dipilih saat memilih di seluruh halaman ([#5770](https://github.com/nocobase/nocobase/pull/5770)) oleh @katherinehhh
- **[Seluler]** Perbaiki bidang input tanggal yang hilang dalam operasi filter di seluler ([#5779](https://github.com/nocobase/nocobase/pull/5779)) oleh @katherinehhh
- **[Workflow]** Perbaiki variabel tidak muncul di modal tes node ([#5766](https://github.com/nocobase/nocobase/pull/5766)) oleh @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/en/blog/v1.6.0-alpha.2)

*Tanggal rilis: 03-12-2024*

### 🎉 Fitur Baru

- **[klien]**

  - Dukung mengaktifkan tautan membuka pop up di bidang readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) oleh @katherinehhh
  - Dukung tindakan kaitkan dan lepaskan kaitan di blok asosiasi ([#5695](https://github.com/nocobase/nocobase/pull/5695)) oleh @katherinehhh
- **[server]** Tambahkan manajer audit ([#5601](https://github.com/nocobase/nocobase/pull/5601)) oleh @chenzhizdt
- **[Workflow]** dukung pemicuan workflow secara manual ([#5664](https://github.com/nocobase/nocobase/pull/5664)) oleh @mytharcher
- **[Workflow: Acara pra-tindakan]** dukung pemicuan workflow secara manual oleh @mytharcher

### 🚀 Peningkatan

- **[klien]**

  - terapkan pemuatan sesuai permintaan untuk komponen front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) oleh @gchust
  - Tingkatkan kinerja rendering halaman dan dukung fungsionalitas keep-alive halaman ([#5515](https://github.com/nocobase/nocobase/pull/5515)) oleh @zhangzhonghe
- **[Bidang koleksi: Urutkan]** tambahkan deskripsi plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) oleh @mytharcher
- **[Sematkan NocoBase]** Tingkatkan kinerja rendering halaman oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[klien]**

  - Perbaiki masalah di mana variabel tidak dapat digunakan dengan benar di blok sumber data pihak ketiga ([#5782](https://github.com/nocobase/nocobase/pull/5782)) oleh @zhangzhonghe
  - Perbaiki masalah di mana nilai bidang asosiasi kosong di template blok. Perbaiki masalah di mana lingkup data blok yang menggunakan variabel tidak berfungsi dengan benar di sumber data pihak ketiga ([#5777](https://github.com/nocobase/nocobase/pull/5777)) oleh @zhangzhonghe
  - Perbaiki masalah di mana properti dinamis komponen tidak berfungsi dengan pemuatan lambat ([#5776](https://github.com/nocobase/nocobase/pull/5776)) oleh @gchust
  - perbaiki pesan peringatan di React saat memuat hook secara dinamis di lingkungan pengembangan ([#5758](https://github.com/nocobase/nocobase/pull/5758)) oleh @gchust
- **[Visualisasi data]** Perbaiki masalah di mana komponen bidang filter blok bagan tidak merender ([#5769](https://github.com/nocobase/nocobase/pull/5769)) oleh @2013xile

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Platform ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
