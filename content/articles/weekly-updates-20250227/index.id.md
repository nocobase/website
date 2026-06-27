---
title: "Pembaruan Mingguan NocoBase: Tambahkan Manajemen Rute"
description: "Pembaruan minggu ini meliputi: dukungan konfigurasi izin untuk tab halaman, tambahkan halaman manajemen rute, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk yang mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/en/blog/v1.5.11)

*Tanggal rilis: 20-02-2025*

#### 🎉 Fitur Baru

- **[Workflow]** Dukungan untuk memperluas grup instruksi dalam alur kerja ([#6237](https://github.com/nocobase/nocobase/pull/6237)) oleh @mytharcher
  Referensi: [Memperluas Grup Node](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 Perbaikan Bug

- **[client]**

  - masalah popup tindakan kait blok asosiasi di perangkat seluler ([#6235](https://github.com/nocobase/nocobase/pull/6235)) oleh @katherinehhh
  - ketidakcocokan format pemilih di bidang formulir filter ([#6234](https://github.com/nocobase/nocobase/pull/6234)) oleh @katherinehhh
  - Menampilkan komponen `<Variable.TextArea />` dengan benar dalam mode nonaktif ([#6197](https://github.com/nocobase/nocobase/pull/6197)) oleh @mytharcher
  - Memperbaiki file yang terlewat setelah diunggah ([#6247](https://github.com/nocobase/nocobase/pull/6247)) oleh @mytharcher
- **[Workflow]**

  - Memperbaiki detail gaya di kanvas alur kerja ([#6240](https://github.com/nocobase/nocobase/pull/6240)) oleh @mytharcher
  - Dukungan untuk memicu alur kerja saat mengubah kata sandi ([#6248](https://github.com/nocobase/nocobase/pull/6248)) oleh @mytharcher

### [v1.5.12](https://www.nocobase.com/en/blog/v1.5.12)

*Tanggal rilis: 21-02-2025*

#### 🚀 Peningkatan

- **[Workflow]** Sembunyikan id node dari kartu node di kanvas alur kerja ([#6251](https://github.com/nocobase/nocobase/pull/6251)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Manajer file]** Tingkatkan versi AWS SDK untuk memperbaiki bug unggahan MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) oleh @mytharcher

### [v1.5.13](https://www.nocobase.com/en/blog/v1.5.13)

*Tanggal rilis: 22-02-2025*

#### 🐛 Perbaikan Bug

- **[client]** Memperbaiki file yang diunggah terlewat saat satu per satu ([#6260](https://github.com/nocobase/nocobase/pull/6260)) oleh @mytharcher
- **[Workflow: Acara pra-tindakan]** Memperbaiki pesan kesalahan dari node pesan respons tidak ditampilkan oleh @mytharcher

### [v1.5.14](https://www.nocobase.com/en/blog/v1.5.14)

*Tanggal rilis: 24-02-2025*

#### 🐛 Perbaikan Bug

- **[Manajer cadangan]** Ikon hapus dari dialog operasi pulihkan dari lokal tidak berfungsi oleh @gchust

### [v1.5.15](https://www.nocobase.com/en/blog/v1.5.15)

*Tanggal rilis: 24-02-2025*

#### 🚀 Peningkatan

- **[Manajer file]**

  - Tingkatkan panjang URL menjadi 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) oleh @mytharcher
  - Nama file selama pengunggahan akan berubah dari acak menjadi nama asli dengan akhiran acak. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) oleh @chenos
- **[Blok: Panel tindakan]** Optimalkan gaya seluler ([#6270](https://github.com/nocobase/nocobase/pull/6270)) oleh @zhangzhonghe

#### 🐛 Perbaikan Bug

- **[cli]** Tingkatkan logika internal perintah upgrade nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) oleh @chenos

### [v1.5.16](https://www.nocobase.com/en/blog/v1.5.16)

*Tanggal rilis: 26-02-2025*

#### 🚀 Peningkatan

- **[Manajer cadangan]** Izinkan memulihkan cadangan ke aplikasi meskipun beberapa plugin hilang oleh @gchust

#### 🐛 Perbaikan Bug

- **[client]** komponen bidang teks kaya tidak dapat dibersihkan sepenuhnya ([#6287](https://github.com/nocobase/nocobase/pull/6287)) oleh @katherinehhh
- **[Manajer file]**

  - Perbaiki migrasi dan tambahkan kasus uji ([#6288](https://github.com/nocobase/nocobase/pull/6288)) oleh @mytharcher
  - Perbaiki tipe kolom `path` dari koleksi file ([#6294](https://github.com/nocobase/nocobase/pull/6294)) oleh @mytharcher
  - Perbaiki migrasi dan tambahkan kasus uji ([#6288](https://github.com/nocobase/nocobase/pull/6288)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*Tanggal rilis: 27-02-2025*

#### 🎉 Fitur Baru

* [Workflow] Dukungan untuk memperluas grup instruksi dalam alur kerja ([#6237](https://github.com/nocobase/nocobase/pull/6237)) oleh @mytharcher
  Referensi: [Memperluas Grup Node](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* [Workflow: Acara tindakan kustom] Dukungan untuk pemicu global atau catatan batch untuk acara tindakan kustom ([#272](https://github.com/nocobase/pro-plugins/pull/272)) oleh @mytharcher
* **[client]**

  * Dukungan untuk ekstensi bidang preset dalam koleksi ([#6183](https://github.com/nocobase/nocobase/pull/6183)) oleh @katherinehhh
  * Dukungan untuk memperluas operator filter frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) oleh @katherinehhh
  * Dukungan untuk mengatur properti deskripsi di blok ([#6015](https://github.com/nocobase/nocobase/pull/6015)) oleh @katherinehhh
  * Tambahkan schemaSetting untuk menampilkan nama file untuk lampiran ([#5995](https://github.com/nocobase/nocobase/pull/5995)) oleh @katherinehhh
* **[Kalender]** Dukungan untuk ekstensi bidang opsional untuk plugin Kanban, Kalender, dan Bidang Formula ([#6076](https://github.com/nocobase/nocobase/pull/6076)) oleh @katherinehhh
* **[Lokalisasi]** Lokalisasi untuk rute desktop dan seluler ([#6180](https://github.com/nocobase/nocobase/pull/6180)) oleh @2013xile
* **[Blok: Panel tindakan]** Dukungan untuk mengkonfigurasi jumlah ikon per baris di panel tindakan seluler ([#6046](https://github.com/nocobase/nocobase/pull/6046)) oleh @katherinehhh
* **[Klien WEB]** Dukungan untuk konfigurasi izin untuk tab halaman dan tambahkan halaman manajemen rute ([#5955](https://github.com/nocobase/nocobase/pull/5955)) oleh @zhangzhonghe
  Referensi: [Rute](https://docs.nocobase.com/handbook/routes)
* **[Otentikasi]** Dukungan untuk konfigurasi keamanan token ([#5948](https://github.com/nocobase/nocobase/pull/5948)) oleh @sheldon66
  Referensi: [Kebijakan keamanan token](https://docs.nocobase.com/handbook/token-policy)
* **[Workflow: Node manual]** Tambahkan kolom judul tugas di blok todo ([#6051](https://github.com/nocobase/nocobase/pull/6051)) oleh @mytharcher
* **[Variabel dan rahasia]** Mendukung konfigurasi variabel lingkungan dinamis dan rahasia ([#5966](https://github.com/nocobase/nocobase/pull/5966)) oleh @katherinehhh

#### 🚀 Peningkatan

* [Bidang koleksi: Markdown(Vditor)] Vditor CDN menggunakan sumber daya lokal ([#6229](https://github.com/nocobase/nocobase/pull/6229)) oleh @chenos
* [Workflow] Sembunyikan id node dari kartu node di kanvas alur kerja ([#6251](https://github.com/nocobase/nocobase/pull/6251)) oleh @mytharcher
* **[client]** Ekspansi dan peningkatan pusat pribadi pengguna ([#6213](https://github.com/nocobase/nocobase/pull/6213)) oleh @katherinehhh
* **[client]**

  * Judul halaman default menggunakan judul rute ([#6188](https://github.com/nocobase/nocobase/pull/6188)) oleh @zhangzhonghe
  * Tambahkan lebih banyak ikon ke IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) oleh @katherinehhh
* **[server]**

  * Pindahkan AesEncryptor ke inti ([#6132](https://github.com/nocobase/nocobase/pull/6132)) oleh @chenos
  * 1. Tambahkan middleware server untuk mengekstrak alamat IP klien.
    2. Selesaikan masalah reload tak terbatas saat IP diblokir.
    3. Tambahkan header HTTP `X-Forwarded-For` di proxy untuk mengaktifkan penerusan untuk debugging lokal ([#6069](https://github.com/nocobase/nocobase/pull/6069)) oleh @sheldon66
* **[Workflow]** Pindahkan pengaturan ikat alur kerja ke plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) oleh @mytharcher
* **[Manajer sumber data]** Ubah fungsi login pengujian menjadi asinkron dan perbarui kasus uji yang relevan ([#6181](https://github.com/nocobase/nocobase/pull/6181)) oleh @sheldon66

#### 🐛 Perbaikan Bug

* [client]

  * Tidak dapat membuka popup tautan bidang di halaman sematan ([#6222](https://github.com/nocobase/nocobase/pull/6222)) oleh @gchust
  * Saat menutup sub-halaman, beberapa permintaan data blok dipicu ([#6233](https://github.com/nocobase/nocobase/pull/6233)) oleh @zhangzhonghe
  * ketidakcocokan format pemilih di bidang formulir filter ([#6234](https://github.com/nocobase/nocobase/pull/6234)) oleh @katherinehhh
  * Kunci unik yang hilang untuk submenu bidang asosiasi di UI ([#6230](https://github.com/nocobase/nocobase/pull/6230)) oleh @gchust
  * Menampilkan komponen `<Variable.TextArea />` dengan benar dalam mode nonaktif ([#6197](https://github.com/nocobase/nocobase/pull/6197)) oleh @mytharcher
  * masalah scrollbar horizontal di halaman ([#6232](https://github.com/nocobase/nocobase/pull/6232)) oleh @katherinehhh
  * Memperbaiki karakter tag html di bidang input formulir konfigurasi saluran email. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) oleh @sheldon66
  * masalah popup tindakan kait blok asosiasi di perangkat seluler ([#6235](https://github.com/nocobase/nocobase/pull/6235)) oleh @katherinehhh
  * Memperbaiki file yang terlewat setelah diunggah ([#6247](https://github.com/nocobase/nocobase/pull/6247)) oleh @mytharcher
  * Lewati kesalahan auth untuk CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) oleh @sheldon66
* [Workflow: Node loop] Memperbaiki loop keluar lebih awal saat node di dalam tertunda ([#6236](https://github.com/nocobase/nocobase/pull/6236)) oleh @mytharcher
* [Manajer file] Tingkatkan versi AWS SDK untuk memperbaiki bug unggahan MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) oleh @mytharcher
* [Seluler] Data menu seluler tidak lengkap di tabel konfigurasi izin ([#6219](https://github.com/nocobase/nocobase/pull/6219)) oleh @zhangzhonghe
* [Workflow]

  * Memperbaiki detail gaya di kanvas alur kerja ([#6240](https://github.com/nocobase/nocobase/pull/6240)) oleh @mytharcher
  * Dukungan untuk memicu alur kerja saat mengubah kata sandi ([#6248](https://github.com/nocobase/nocobase/pull/6248)) oleh @mytharcher
* [Visualisasi data] Kesalahan pemfilteran terjadi saat nama sumber data mengandung tanda hubung `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) oleh @2013xile
* [Workflow: Acara pra-tindakan] Memperbaiki pesan kesalahan dari node pesan respons tidak ditampilkan ([#277](https://github.com/nocobase/pro-plugins/pull/277)) oleh @mytharcher
* **[client]** Memperbaiki file yang diunggah terlewat saat satu per satu ([#6260](https://github.com/nocobase/nocobase/pull/6260)) oleh @mytharcher
* **[client]** Memperbaiki opsi "Pilih dari data yang ada" masih muncul saat menonaktifkan "Izinkan banyak" di subform relasi ke-banyak ([#6167](https://github.com/nocobase/nocobase/pull/6167)) oleh @katherinehhh
* **[auth]** Perbarui logika middleware auth klien untuk mencegah kegagalan pembaruan token karena konkurensi ([#6135](https://github.com/nocobase/nocobase/pull/6135)) oleh @sheldon66
* **[Klien WEB]**

  * Izin perutean tidak normal setelah upgrade ([#6177](https://github.com/nocobase/nocobase/pull/6177)) oleh @zhangzhonghe
  * Hapus judul tab halaman default ([#6178](https://github.com/nocobase/nocobase/pull/6178)) oleh @zhangzhonghe
* **[Manajer sumber data]** Gunakan loginWithJti untuk memperbarui kasus uji terkait otentikasi dan mencegah kesalahan ([#6175](https://github.com/nocobase/nocobase/pull/6175)) oleh @sheldon66
* **[Manajer multi-aplikasi]** Hanya sub-aplikasi yang dimulai dengan aplikasi utama yang ditingkatkan bersamanya ([#6133](https://github.com/nocobase/nocobase/pull/6133)) oleh @chenos
* **[Otentikasi]** Perbarui aturan migrasi untuk token yang diterbitkan dan konfigurasi kebijakan token ([#6107](https://github.com/nocobase/nocobase/pull/6107)) oleh @sheldon66
* **[Workflow]** Perbaiki tipe nilai untuk komponen DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) oleh @mytharcher

## Tentang NocoBase

NocoBase adalah platform tanpa kode sumber terbuka dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
