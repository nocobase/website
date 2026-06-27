---
title: "Pembaruan Mingguan NocoBase: Dukungan Konfigurasi Izin untuk Aksi"
description: "Pembaruan minggu ini meliputi: dukungan konfigurasi izin untuk aksi, bidang waktu mendukung format waktu, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*Tanggal rilis: 27-02-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - error saat membuat blok komentar tanpa koleksi komentar ([#6309](https://github.com/nocobase/nocobase/pull/6309)) oleh @katherinehhh
  - Terjadi error saat mengklik node blok pohon ([#6314](https://github.com/nocobase/nocobase/pull/6314)) oleh @zhangzhonghe
  - Setelah mengklik menu kiri, sub-halaman ditutup secara tidak normal ([#6305](https://github.com/nocobase/nocobase/pull/6305)) oleh @zhangzhonghe
  - Jangan hapus nilai bidang saat nilai ekspresi kosong ([#6300](https://github.com/nocobase/nocobase/pull/6300)) oleh @zhangzhonghe
- **[Bidang koleksi: Urutan]** Perbaiki bidang urutan tidak dinonaktifkan saat dalam mode hanya-baca ([#6274](https://github.com/nocobase/nocobase/pull/6274)) oleh @mytharcher
- **[Manajer file]** Perbaiki migrasi untuk koleksi yang diwarisi ([#6310](https://github.com/nocobase/nocobase/pull/6310)) oleh @mytharcher
- **[Kontrol akses]** Rekaman data yang salah saat menggunakan bidang many to many sebagai lingkup data dalam izin koleksi ([#6304](https://github.com/nocobase/nocobase/pull/6304)) oleh @2013xile
- **[Blok: Kanban]** Pemfilteran data yang salah di blok Kanban popup menggunakan variabel rekaman popup ([#6290](https://github.com/nocobase/nocobase/pull/6290)) oleh @katherinehhh
- **[Blok: Pohon]** Terjadi error saat mengklik node blok pohon oleh @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*Tanggal rilis: 27-02-2025*

#### 🐛 Perbaikan Bug

- **[Blok: Panel aksi]** Pengaturan tinggi panel aksi tidak valid ([#6321](https://github.com/nocobase/nocobase/pull/6321)) oleh @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*Tanggal rilis: 01-03-2025*

#### 🐛 Perbaikan Bug

- **[klien]** tombol tambah baru muncul saat hover dalam mode hanya-baca bidang asosiasi ([#6322](https://github.com/nocobase/nocobase/pull/6322)) oleh @katherinehhh
- **[Aksi: Ekspor rekaman Pro]** hapus opsi 'tambah blok' di pengaturan tombol lampiran ekspor oleh @katherinehhh
- **[Aksi: Impor rekaman Pro]** deteksi rekaman duplikat tombol impor blok asosiasi tidak menampilkan data di dropdown bidang oleh @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*Tanggal rilis: 03-03-2025*

#### 🐛 Perbaikan Bug

- **[klien]** Halaman dengan favicon kustom berkedip singkat menampilkan favicon NocoBase saat memuat ([#6337](https://github.com/nocobase/nocobase/pull/6337)) oleh @zhangzhonghe
- **[Blok: Peta]** Pengaturan konfigurasi untuk bidang peta hilang/tidak terlihat ([#6336](https://github.com/nocobase/nocobase/pull/6336)) oleh @zhangzhonghe
- **[Merek kustom]** Halaman dengan favicon kustom berkedip singkat menampilkan favicon NocoBase saat memuat oleh @zhangzhonghe
- **[Cetak template]** Pulihkan dari lokal gagal saat plugin cetak template aksi dan manajer cadangan keduanya diaktifkan oleh @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*Tanggal rilis: 27-02-2025*

#### 🐛 Perbaikan Bug

- **[klien]**

  - error saat membuat blok komentar tanpa koleksi komentar ([#6309](https://github.com/nocobase/nocobase/pull/6309)) oleh @katherinehhh
  - Posisi yang salah setelah menyeret menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) oleh @zhangzhonghe
- **[Alur kerja: Acara aksi kustom]** Perbaiki error build oleh @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*Tanggal rilis: 04-03-2025*

#### 🎉 Fitur Baru

- **[klien]** bidang waktu mendukung format waktu ([#6329](https://github.com/nocobase/nocobase/pull/6329)) oleh @katherinehhh

#### 🚀 Peningkatan

- **[server]** Upgrade koa ke 2.15.4; upgrade @koa/cors ke 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) oleh @2013xile
- **[Alur kerja]** Muat lambat hasil pekerjaan untuk kinerja yang lebih baik ([#6344](https://github.com/nocobase/nocobase/pull/6344)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[auth]** Hindari memperbarui token selama otorisasi WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) oleh @sheldon66
- **[klien]**

  - Halaman dengan favicon kustom berkedip singkat menampilkan favicon NocoBase saat memuat ([#6337](https://github.com/nocobase/nocobase/pull/6337)) oleh @zhangzhonghe
  - tombol tambah baru muncul saat hover dalam mode hanya-baca bidang asosiasi ([#6322](https://github.com/nocobase/nocobase/pull/6322)) oleh @katherinehhh
- **[devtools]** Pastikan header X-Forwarded-For hanya diatur jika req.ip tidak undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) oleh @sheldon66
- **[Blok: Peta]** Pengaturan konfigurasi untuk bidang peta hilang/tidak terlihat ([#6336](https://github.com/nocobase/nocobase/pull/6336)) oleh @zhangzhonghe
- **[Seluler]** Error halaman: Tidak dapat membaca properti null (membaca 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) oleh @zhangzhonghe
- **[Pengguna]** UI error berkedip singkat saat tabel manajemen izin pengguna dimuat untuk pertama kali ([#6324](https://github.com/nocobase/nocobase/pull/6324)) oleh @zhangzhonghe
- **[Blok: Panel aksi]** Pengaturan tinggi panel aksi tidak valid ([#6321](https://github.com/nocobase/nocobase/pull/6321)) oleh @zhangzhonghe
- **[Aksi: Impor rekaman Pro]** deteksi rekaman duplikat tombol impor blok asosiasi tidak menampilkan data di dropdown bidang oleh @katherinehhh
- **[Aksi: Ekspor rekaman Pro]** hapus opsi 'tambah blok' di pengaturan tombol lampiran ekspor oleh @katherinehhh
- **[Alur kerja: Acara aksi kustom]** Perbaiki migrasi untuk tombol lama yang terikat dengan alur kerja aksi kustom oleh @mytharcher
- **[Merek kustom]** Halaman dengan favicon kustom berkedip singkat menampilkan favicon NocoBase saat memuat oleh @zhangzhonghe
- **[Cetak template]** Pulihkan dari lokal gagal saat plugin cetak template aksi dan manajer cadangan keduanya diaktifkan oleh @gchust
- **[Alur kerja: Persetujuan]**

  - Perbaiki `.toJSON()` menyebabkan error oleh @mytharcher
  - Perbaiki migrasi tidak berjalan karena nomor versi oleh @mytharcher
  - Perbaiki migrasi untuk blok lama oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/en/blog/v1.6.0-alpha.29)

*Tanggal rilis: 27-02-2025*

#### 🎉 Fitur Baru

- **[klien]** dukung konfigurasi izin untuk aksi ([#6254](https://github.com/nocobase/nocobase/pull/6254)) oleh @katherinehhh
- **[Blok: template]** Tambahkan plugin `Blok: template`, menyediakan dukungan template untuk blok berdasarkan mekanisme pewarisan. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) oleh @gchust
- **[Alur kerja: Acara aksi kustom]** aksi pemicu alur kerja mendukung kontrol akses oleh @katherinehhh

#### 🚀 Peningkatan

- **[klien]**

  - Upgrade definisi tipe react ([#6278](https://github.com/nocobase/nocobase/pull/6278)) oleh @gchust
  - Ekspansi dan peningkatan pusat pribadi pengguna ([#6213](https://github.com/nocobase/nocobase/pull/6213)) oleh @katherinehhh
- **[Manajer file]**

  - Tingkatkan panjang URL menjadi 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) oleh @mytharcher
  - tambahkan kode backend untuk menghasilkan URL pratinjau file ([#6281](https://github.com/nocobase/nocobase/pull/6281)) oleh @jiannx
  - Nama file selama unggahan akan berubah dari acak menjadi nama asli dengan akhiran acak. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) oleh @chenos
  - tambahkan kode backend untuk menghasilkan URL pratinjau file ([#6223](https://github.com/nocobase/nocobase/pull/6223)) oleh @jiannx
  - Ubah api tipe penyimpanan dan tambahkan api plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) oleh @mytharcher
  - Ubah api tipe penyimpanan dan tambahkan api plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) oleh @mytharcher
- **[Blok: Panel aksi]** Optimalkan gaya seluler ([#6270](https://github.com/nocobase/nocobase/pull/6270)) oleh @zhangzhonghe
- **[Alur kerja]** Sembunyikan id node dari kartu node di kanvas alur kerja ([#6251](https://github.com/nocobase/nocobase/pull/6251)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]**

  - Sesuaikan API penyimpanan berdasarkan repositori utama oleh @mytharcher
  - Dukung konfigurasi opsi thumbnailRule oleh @jiannx
- **[Manajer cadangan]** Izinkan memulihkan cadangan ke aplikasi meskipun beberapa plugin hilang oleh @gchust

#### 🐛 Perbaikan Bug

- **[devtools]** Pastikan header X-Forwarded-For hanya diatur jika req.ip tidak undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) oleh @sheldon66
- **[klien]**

  - Posisi yang salah setelah menyeret menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) oleh @zhangzhonghe
  - error saat membuat blok komentar tanpa koleksi komentar ([#6309](https://github.com/nocobase/nocobase/pull/6309)) oleh @katherinehhh
  - Terjadi error saat mengklik node blok pohon ([#6314](https://github.com/nocobase/nocobase/pull/6314)) oleh @zhangzhonghe
  - Setelah mengklik menu kiri, sub-halaman ditutup secara tidak normal ([#6305](https://github.com/nocobase/nocobase/pull/6305)) oleh @zhangzhonghe
  - Jangan hapus nilai bidang saat nilai ekspresi kosong ([#6300](https://github.com/nocobase/nocobase/pull/6300)) oleh @zhangzhonghe
  - komponen bidang teks kaya tidak dapat dibersihkan sepenuhnya ([#6287](https://github.com/nocobase/nocobase/pull/6287)) oleh @katherinehhh
  - Tidak dapat memindahkan halaman ke dalam grup ([#6289](https://github.com/nocobase/nocobase/pull/6289)) oleh @zhangzhonghe
  - Lewati error auth untuk CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) oleh @sheldon66
  - Perbaiki file yang diunggah terlewat saat satu per satu ([#6260](https://github.com/nocobase/nocobase/pull/6260)) oleh @mytharcher
  - Memperbaiki karakter tag html di kolom input formulir konfigurasi saluran email. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) oleh @sheldon66
  - Perbaiki file yang terlewat setelah diunggah ([#6247](https://github.com/nocobase/nocobase/pull/6247)) oleh @mytharcher
  - ketidakcocokan format pemilih di bidang formulir filter ([#6234](https://github.com/nocobase/nocobase/pull/6234)) oleh @katherinehhh
  - Tampilkan komponen `<Variable.TextArea />` dengan benar dalam mode dinonaktifkan ([#6197](https://github.com/nocobase/nocobase/pull/6197)) oleh @mytharcher
- **[create-nocobase-app]** Terjadi error di klien web setelah menjalankan `create-nocobase-app` diikuti dengan `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) oleh @gchust
- **[auth]** Lewati pemeriksaan auth pengguna saat token adalah kunci api ([#6291](https://github.com/nocobase/nocobase/pull/6291)) oleh @sheldon66
- **[cli]** Tingkatkan logika internal perintah upgrade nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) oleh @chenos
- **[Manajer file]**

  - Perbaiki migrasi untuk koleksi yang diwarisi ([#6310](https://github.com/nocobase/nocobase/pull/6310)) oleh @mytharcher
  - Perbaiki migrasi dan tambahkan kasus uji ([#6288](https://github.com/nocobase/nocobase/pull/6288)) oleh @mytharcher
  - Perbaiki migrasi dan tambahkan kasus uji ([#6288](https://github.com/nocobase/nocobase/pull/6288)) oleh @mytharcher
  - Perbaiki tipe kolom `path` dari koleksi file ([#6294](https://github.com/nocobase/nocobase/pull/6294)) oleh @mytharcher
  - Upgrade versi AWS SDK untuk memperbaiki bug unggahan MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) oleh @mytharcher
- **[Blok: template]** Memerlukan login saat mengakses formulir publik ([#6258](https://github.com/nocobase/nocobase/pull/6258)) oleh @gchust
- **[Kontrol akses]** Rekaman data yang salah saat menggunakan bidang many to many sebagai lingkup data dalam izin koleksi ([#6304](https://github.com/nocobase/nocobase/pull/6304)) oleh @2013xile
- **[Blok: Kanban]** Pemfilteran data yang salah di blok Kanban popup menggunakan variabel rekaman popup ([#6290](https://github.com/nocobase/nocobase/pull/6290)) oleh @katherinehhh
- **[Bidang koleksi: Urutan]** Perbaiki bidang urutan tidak dinonaktifkan saat dalam mode hanya-baca ([#6274](https://github.com/nocobase/nocobase/pull/6274)) oleh @mytharcher
- **[Alur kerja: test kit]** Perbaiki kasus uji E2E berdasarkan fitur baru ([#6296](https://github.com/nocobase/nocobase/pull/6296)) oleh @mytharcher
- **[Formulir publik]** Lewati pemeriksaan auth di formulir publik ([#6284](https://github.com/nocobase/nocobase/pull/6284)) oleh @chenos
- **[Otentikasi]** Hapus pembungkus NavigateIfNotSignIn yang tidak perlu dari AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) oleh @sheldon66
- **[Alur kerja]**

  - Perbaiki detail gaya di kanvas alur kerja ([#6240](https://github.com/nocobase/nocobase/pull/6240)) oleh @mytharcher
  - Dukung untuk memicu alur kerja saat mengubah kata sandi ([#6248](https://github.com/nocobase/nocobase/pull/6248)) oleh @mytharcher
- **[Alur kerja: Acara aksi kustom]**

  - Perbaiki error build oleh @mytharcher
  - Perbaiki kasus uji E2E oleh @mytharcher
  - Perbaiki penginisialisasi alur kerja pemicu oleh @mytharcher
  - Perbaiki error build oleh @mytharcher
- **[Alur kerja: Acara pra-aksi]** Perbaiki pesan error dari node pesan respons tidak ditampilkan oleh @mytharcher
- **[Alur kerja: JavaScript]** Dukung untuk memerlukan modul NocoBase oleh @mytharcher
- **[Manajer email]** publik koleksi mailmessage dan perbaiki data modal yang hilang oleh @jiannx
- **[Penyimpanan file: S3(Pro)]**

  - Upgrade versi AWS SDK untuk memperbaiki bug unggahan MinIO. oleh @mytharcher
  - setel nilai default forcePathStyleForAccess ke virtual oleh @jiannx
- **[Blok: Formulir multi-langkah]** error pengurutan item setelah drag oleh @jiannx
- **[Blok: Pohon]** Terjadi error saat mengklik node blok pohon oleh @zhangzhonghe
- **[Manajer cadangan]** Ikon hapus dari dialog operasi pulihkan dari lokal tidak berfungsi oleh @gchust
- **[Alur kerja: Persetujuan]**

  - Perbaiki migrasi tidak berjalan karena nomor versi oleh @mytharcher
  - Perbaiki kasus uji E2E berdasarkan fitur baru oleh @mytharcher

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
