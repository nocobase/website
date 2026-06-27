---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Dukungan pengurutan kolom di tabel, Dukungan pengalihan otomatis ke URL SSO saat tidak terautentikasi, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/en/blog/v1.9.14)

*Tanggal rilis: 27-11-2025*

### 🎉 Fitur Baru

- **[Auth: OIDC]** Mendukung pengalihan otomatis ke URL SSO saat tidak terautentikasi oleh @heziqiang

### 🚀 Peningkatan

- **[client]** Menggunakan kurung kurawal tiga (`{{{` dan `}}}`) untuk variabel dalam konten pesan, untuk menghindari variabel di-escape oleh Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) oleh @mytharcher
- **[Bidang koleksi: Markdown(Vditor)]** menyesuaikan lebar konten layar penuh vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[database]** Perbaikan: hapus pemrosesan UTC dalam konversi waktu untuk bidang hanya-waktu untuk mencegah pergeseran yang disebabkan oleh zona waktu. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) oleh @ChimingLiu
- **[client]** perbaiki remote select tidak menampilkan label yang benar untuk nilai non-objek ([#7975](https://github.com/nocobase/nocobase/pull/7975)) oleh @katherinehhh
- **[Workflow]**

  - Perbaiki masalah di mana eksekusi yang disiapkan tidak dikirim ke antrian sebelum berhenti ([#7981](https://github.com/nocobase/nocobase/pull/7981)) oleh @mytharcher
  - Perbaiki masalah di mana tautan tugas mengarah ke halaman error ([#7983](https://github.com/nocobase/nocobase/pull/7983)) oleh @mytharcher
  - Perbaiki masalah di mana beberapa menu tugas workflow tidak ditampilkan ([#7980](https://github.com/nocobase/nocobase/pull/7980)) oleh @mytharcher
  - Perbaiki jumlah tugas tidak muncul karena penyalahgunaan provider ([#7968](https://github.com/nocobase/nocobase/pull/7968)) oleh @mytharcher
- **[Workflow: Node manual]** Perbaiki masalah di mana jumlah tugas manual tidak benar ([#7984](https://github.com/nocobase/nocobase/pull/7984)) oleh @mytharcher
- **[Visualisasi data]**

  - Pengaturan bidang filter untuk koleksi sumber data eksternal tidak menampilkan properti tertentu ([#7982](https://github.com/nocobase/nocobase/pull/7982)) oleh @2013xile
  - Selesaikan masalah di mana kueri bagan tidak mendukung cakupan data ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki kegagalan pembaruan kata sandi sumber data saat kata sandi database diubah ([#7977](https://github.com/nocobase/nocobase/pull/7977)) oleh @cgyrock
- **[Aksi: Impor catatan]** Memperbaiki masalah saat mengimpor data di tabel pohon ([#7976](https://github.com/nocobase/nocobase/pull/7976)) oleh @cgyrock

### [v1.9.13](https://www.nocobase.com/en/blog/v1.9.13)

*Tanggal rilis: 25-11-2025*

### 🐛 Perbaikan Bug

- **[client]** Perbaiki masalah routing saat menggunakan Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) oleh @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/en/blog/v1.9.12)

*Tanggal rilis: 24-11-2025*

### 🚀 Peningkatan

- **[client]** Tambahkan status loading untuk tombol aksi perbarui catatan dan hapus catatan, hindari permintaan duplikat ([#7964](https://github.com/nocobase/nocobase/pull/7964)) oleh @mytharcher
- **[Manajer tugas asinkron]** Pesan error yang ditingkatkan untuk tugas asinkron untuk memberikan alasan spesifik kepada pengguna atas kegagalan tugas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) oleh @mytharcher
- **[Aksi: Impor catatan Pro]** Pesan error yang ditingkatkan untuk tugas asinkron untuk memberikan alasan spesifik kepada pengguna atas kegagalan tugas oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Perbaiki pilihan variabel di AssigneeSelect, batasi hanya PK atau FK dari koleksi pengguna yang dapat dipilih oleh @mytharcher
  - Kurangi asosiasi yang dimuat di popup persetujuan, untuk memberikan kinerja yang lebih baik oleh @mytharcher
  - Buat payload dari eksekusi manual (atau dipicu oleh node sub-flow) kompatibel dengan catatan atau kunci utama. Hindari masalah konsistensi dalam konteks pemicu. oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Manajer tugas asinkron]** Tambahkan aturan migrasi untuk koleksi `asyncTasks`, hindari catatan tugas asinkron untuk dimigrasi ([#7950](https://github.com/nocobase/nocobase/pull/7950)) oleh @mytharcher
- **[Workflow: Persetujuan]** Perbaiki file bahasa oleh @mytharcher

### [v1.9.11](https://www.nocobase.com/en/blog/v1.9.11)

*Tanggal rilis: 24-11-2025*

### 🐛 Perbaikan Bug

- **[client]** Perbaiki antarmuka bidang yang menampilkan many-to-one alih-alih one-to-one untuk belongsTo dalam konfigurasi sumber data eksternal ([#7936](https://github.com/nocobase/nocobase/pull/7936)) oleh @cgyrock
- **[Workflow]** Memperbaiki masalah di mana memperbarui jumlah tugas secara tidak sengaja akan mereset status formulir yang sedang diisi ([#7937](https://github.com/nocobase/nocobase/pull/7937)) oleh @mytharcher
- **[Bidang koleksi: Many to many (array)]** Perbaiki masalah bidang M2M (array) saat membuat/memperbarui data terkait ([#7926](https://github.com/nocobase/nocobase/pull/7926)) oleh @cgyrock

### [v1.9.10](https://www.nocobase.com/en/blog/v1.9.10)

*Tanggal rilis: 20-11-2025*

### 🚀 Peningkatan

- **[Kontrol akses]** Kurangi izin default untuk peran anggota ([#7921](https://github.com/nocobase/nocobase/pull/7921)) oleh @2013xile
- **[Visualisasi data]** Menambahkan dukungan bahasa Rusia untuk antarmuka plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) oleh @sembaev-a-a
- **[Workflow: Webhook]** Tambahkan ikon untuk tipe node respons oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Perbaiki error: Can't resolve 'antd-mobile' dan Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) oleh @zhangzhonghe
- **[Kontrol akses]** Dukung pembatasan cakupan data untuk operasi asosiasi. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) oleh @2013xile
- **[Sumber data: Utama]** Perbaiki masalah di mana bidang one-to-many yang baru ditambahkan tidak dapat dipilih sebagai kunci asing sebelum memulai ulang aplikasi. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) oleh @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/en/blog/v1.9.0-beta.17)

*Tanggal rilis: 21-11-2025*

### 🚀 Peningkatan

- **[database]** Tambahkan opsi `multipleStatements` ke instance koneksi MariaDB untuk mendukung pemanggilan beberapa pernyataan dalam satu kueri ([#7781](https://github.com/nocobase/nocobase/pull/7781)) oleh @mytharcher
- **[Kontrol akses]**

  - Kurangi izin default untuk peran anggota ([#7921](https://github.com/nocobase/nocobase/pull/7921)) oleh @2013xile
  - Optimalkan logika kontrol izin untuk operasi bidang asosiasi ([#7800](https://github.com/nocobase/nocobase/pull/7800)) oleh @2013xile
- **[Visualisasi data]** Menambahkan dukungan bahasa Rusia untuk antarmuka plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) oleh @sembaev-a-a
- **[Workflow]** Dukung blok data di workflow untuk menggunakan menu pengaturan detail konsolidasi ([#7771](https://github.com/nocobase/nocobase/pull/7771)) oleh @mytharcher
- **[Workflow: Webhook]** Tambahkan ikon untuk tipe node respons oleh @mytharcher
- **[Workflow: JavaScript]** Perbaiki kerentanan keamanan yang disebabkan oleh fungsi tingkat atas yang diteruskan ke lingkungan eksekusi, mencegah eksploitasi yang dapat memberikan akses ke konteks eksekusi atas oleh @mytharcher
- **[Auth: OIDC]** Tingkatkan batas waktu permintaan oleh @2013xile
- **[Workflow: Persetujuan]** Tambahkan notifikasi untuk penerima tugas yang didelegasikan dan ditambahkan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - Perbaiki antarmuka bidang yang menampilkan many-to-one alih-alih one-to-one untuk belongsTo dalam konfigurasi sumber data eksternal ([#7936](https://github.com/nocobase/nocobase/pull/7936)) oleh @cgyrock
  - Perbaiki error: Can't resolve 'antd-mobile' dan Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) oleh @zhangzhonghe
  - Perbaiki masalah di mana template duplikat tidak muncul, yang disebabkan oleh menyeret lalu menghapus template yang direferensikan ([#7847](https://github.com/nocobase/nocobase/pull/7847)) oleh @zhangzhonghe
  - Perbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi ([#7858](https://github.com/nocobase/nocobase/pull/7858)) oleh @zhangzhonghe
  - perbaiki masalah halaman berikutnya kosong di blok detail paginasi sederhana ([#7784](https://github.com/nocobase/nocobase/pull/7784)) oleh @katherinehhh
  - Perbaiki "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) oleh @zhangzhonghe
- **[server]**

  - Perbaiki masalah dalam mode pemisahan layanan di mana pesan antrian yang tidak berlangganan tidak dapat dipublikasikan ([#7875](https://github.com/nocobase/nocobase/pull/7875)) oleh @mytharcher
  - Isolasi saluran Pub-Sub berdasarkan nama aplikasi ([#7762](https://github.com/nocobase/nocobase/pull/7762)) oleh @mytharcher
  - Perbaiki masalah di mana, setelah mengaktifkan mode pemisahan layanan, proses pekerja yang mengirim pesan melalui antrian pesan akan menyebabkan error ([#7797](https://github.com/nocobase/nocobase/pull/7797)) oleh @mytharcher
- **[utils]** Aktifkan penggabungan objek dalam strategi intersect ([#7840](https://github.com/nocobase/nocobase/pull/7840)) oleh @chenos
- **[database]** Deteksi bidang indeks yang salah saat nama bidang menggunakan gaya snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) oleh @2013xile
- **[Bidang koleksi: Many to many (array)]** Perbaiki masalah bidang M2M (array) saat membuat/memperbarui data terkait ([#7926](https://github.com/nocobase/nocobase/pull/7926)) oleh @cgyrock
- **[Sumber data: Utama]** Perbaiki masalah di mana bidang one-to-many yang baru ditambahkan tidak dapat dipilih sebagai kunci asing sebelum memulai ulang aplikasi. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) oleh @cgyrock
- **[Workflow]**

  - Memperbaiki masalah di mana memperbarui jumlah tugas secara tidak sengaja akan mereset status formulir yang sedang diisi ([#7937](https://github.com/nocobase/nocobase/pull/7937)) oleh @mytharcher
  - Gunakan eventQueue alih-alih backgroundJob bersama untuk mencegah antrian bersama dikonsumsi secara tidak benar dalam mode pemisahan layanan ([#7871](https://github.com/nocobase/nocobase/pull/7871)) oleh @mytharcher
  - Perbaiki masalah di mana plugin workflow masih mengonsumsi acara antrian saat tidak dalam mode pekerja di bawah mode pemisahan layanan ([#7820](https://github.com/nocobase/nocobase/pull/7820)) oleh @mytharcher
  - Perbaiki error yang disebabkan oleh mendengarkan acara sumber data eksternal yang tidak ada ([#7855](https://github.com/nocobase/nocobase/pull/7855)) oleh @mytharcher
  - Perbaiki masalah di mana, dalam mode pemisahan layanan, menjalankan workflow secara manual yang berisi node interupsi akan tetap macet dalam status tertunda ([#7767](https://github.com/nocobase/nocobase/pull/7767)) oleh @mytharcher
  - Tambahkan `workflowId` sebagai data identitas untuk log workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) oleh @mytharcher
  - Menyelesaikan masalah di mana dispatcher workflow dalam mode cluster gagal mengidentifikasi status idle dengan benar, yang dapat menyebabkan konsumsi acara antrian yang tidak perlu sebelum plugin siap ([#7768](https://github.com/nocobase/nocobase/pull/7768)) oleh @mytharcher
- **[Kontrol akses]**

  - Dukung pembatasan cakupan data untuk operasi asosiasi. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) oleh @2013xile
  - Masalah cuplikan operasi asosiasi tidak berpengaruh ([#7876](https://github.com/nocobase/nocobase/pull/7876)) oleh @2013xile
- **[Workflow: Node manual]** Perbaiki namespace dari bahasa lokal yang harus digunakan, untuk menampilkan konten terjemahan yang benar ([#7877](https://github.com/nocobase/nocobase/pull/7877)) oleh @mytharcher
- **[Pengguna]** Penyegaran indeks yang salah saat nama bidang menggunakan gaya snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) oleh @2013xile
- **[Seluler (usang)]** Perbaiki masalah di mana popup nilai default bidang tanggal di seluler tidak dapat memilih tanggal ([#7783](https://github.com/nocobase/nocobase/pull/7783)) oleh @zhangzhonghe
- **[Workflow: Variabel kustom]** Perbaiki error yang muncul saat tidak ada konfigurasi di node variabel oleh @mytharcher
- **[Workflow: Acara aksi kustom]** Perbaiki error yang disebabkan oleh mendengarkan acara sumber data eksternal yang tidak ada oleh @mytharcher
- **[Cetak template]** parse variabel dalam filter oleh @jiannx
- **[Visualisasi data: ECharts]** Perbaiki masalah di mana konfigurasi tipe Label dalam opsi ECharts tidak berpengaruh. oleh @heziqiang
- **[Workflow: Persetujuan]**

  - Perbaiki format tanggal pada kartu daftar persetujuan di pusat tugas untuk menampilkan tanggal dan waktu lengkap oleh @mytharcher
  - Perbaiki masalah di mana ukuran halaman saluran notifikasi pemuatan tidak cukup besar, dan menyebabkan daftar tidak dimuat sepenuhnya oleh @mytharcher
  - Perbaiki masalah kinerja yang terjadi saat menanyakan daftar catatan persetujuan selama pengajuan persetujuan oleh @mytharcher
  - Perbaiki masalah di mana bidang koleksi utama tidak dikecualikan saat memuat ulang data asosiasi oleh @mytharcher
  - Perbaiki masalah di mana kondisi balapan yang terjadi selama pemrosesan persetujuan bersamaan oleh beberapa penyetuju dapat menyebabkan node workflow dieksekusi lebih dari sekali oleh @mytharcher
  - Membuat node persetujuan di cabang paralel tidak lagi didukung untuk menghindari masalah yang disebabkan oleh status proses oleh @mytharcher
  - Perbaiki masalah di mana aturan tautan untuk formulir persetujuan tidak berfungsi oleh @zhangzhonghe
  - Perbaiki error yang muncul saat workflow persetujuan duplikat oleh @mytharcher
- **[Manajer email]**

  - tambahkan log sinkronisasi oleh @jiannx
  - sinkronkan status baca email microsoft tanpa stempel waktu oleh @jiannx
  - koleksi mailMessages tambahkan indeks oleh @jiannx
  - tambahkan migrasi untuk indeks oleh @jiannx
  - Perbaiki masalah gambar yang dipesan dan sinkronisasi di outlook oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/en/blog/v2.0.0-alpha.47)

*Tanggal rilis: 26-11-2025*

### 🚀 Peningkatan

- **[client]**

  - Mendukung inisialisasi bidang filter yang dipilih dalam kueri bagan ([#7933](https://github.com/nocobase/nocobase/pull/7933)) oleh @heziqiang
  - Menggunakan kurung kurawal tiga (`{{{` dan `}}}`) untuk variabel dalam konten pesan, untuk menghindari variabel di-escape oleh Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) oleh @mytharcher
  - Tambahkan status loading untuk tombol aksi perbarui catatan dan hapus catatan, hindari permintaan duplikat ([#7964](https://github.com/nocobase/nocobase/pull/7964)) oleh @mytharcher
- **[Bidang koleksi: Markdown(Vditor)]** menyesuaikan lebar konten layar penuh vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah di mana membuka blok detail di popup untuk bidang relasi non-ID menyebabkan error. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) oleh @gchust
  - Memperbaiki masalah di mana data asosiasi gagal dimuat dengan benar di popup untuk bidang relasi non-ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) oleh @gchust
  - Perbaiki masalah routing saat menggunakan Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) oleh @zhangzhonghe
  - perbaiki masalah dengan pengaturan presisi yang tidak valid untuk format bidang numerik ([#7967](https://github.com/nocobase/nocobase/pull/7967)) oleh @katherinehhh
  - Perbaiki pengetikan yang salah di halaman 2.0 baru ([#7945](https://github.com/nocobase/nocobase/pull/7945)) oleh @zhangzhonghe
  - perbaiki masalah di mana nilai filter tidak dibersihkan saat mengklik tombol Reset ([#7966](https://github.com/nocobase/nocobase/pull/7966)) oleh @zhangzhonghe
- **[Workflow]** Perbaiki jumlah tugas tidak muncul karena penyalahgunaan provider ([#7968](https://github.com/nocobase/nocobase/pull/7968)) oleh @mytharcher
- **[Visualisasi data]** Selesaikan masalah di mana kueri bagan tidak mendukung cakupan data ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) oleh @2013xile
- **[Blok: Referensi]** Memperbaiki masalah di mana mengutip blok akan menghapus blok yang dikutip dari halaman asli. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) oleh @gchust
- **[Karyawan AI]** Perbaiki masalah saat AI menghasilkan output SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) oleh @heziqiang
- **[Cetak template]** perbaiki gagal menambahkan template di operasi cetak template catatan oleh @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/en/blog/v2.0.0-alpha.46)

*Tanggal rilis: 24-11-2025*

### 🚀 Peningkatan

- **[flow-engine]** Dukung mengganti kelas model aliran secara dinamis ([#7952](https://github.com/nocobase/nocobase/pull/7952)) oleh @gchust
- **[Karyawan AI]** Plugin karyawan AI menambahkan hook upgrade ([#7951](https://github.com/nocobase/nocobase/pull/7951)) oleh @heziqiang
- **[Manajer tugas asinkron]** Pesan error yang ditingkatkan untuk tugas asinkron untuk memberikan alasan spesifik kepada pengguna atas kegagalan tugas ([#7796](https://github.com/nocobase/nocobase/pull/7796)) oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Buat payload dari eksekusi manual (atau dipicu oleh node sub-flow) kompatibel dengan catatan atau kunci utama. Hindari masalah konsistensi dalam konteks pemicu. oleh @mytharcher
  - Kurangi asosiasi yang dimuat di popup persetujuan, untuk memberikan kinerja yang lebih baik oleh @mytharcher
  - Perbaiki pilihan variabel di AssigneeSelect, batasi hanya PK atau FK dari koleksi pengguna yang dapat dipilih oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** perbaiki teks bidang bungkus otomatis di blok detail saat konten melebihi lebar ([#7955](https://github.com/nocobase/nocobase/pull/7955)) oleh @katherinehhh
- **[Manajer tugas asinkron]** Tambahkan aturan migrasi untuk koleksi `asyncTasks`, hindari catatan tugas asinkron untuk dimigrasi ([#7950](https://github.com/nocobase/nocobase/pull/7950)) oleh @mytharcher
- **[Manajer file]** perbaiki unggah file ke penyimpanan yang ditentukan alih-alih penyimpanan default ([#7947](https://github.com/nocobase/nocobase/pull/7947)) oleh @katherinehhh
- **[Workflow: Persetujuan]** Perbaiki file bahasa oleh @mytharcher

### [v2.0.0-alpha.45](https://www.nocobase.com/en/blog/v2.0.0-alpha.45)

*Tanggal rilis: 21-11-2025*

### 🎉 Fitur Baru

- **[client]** dukung pengurutan bidang kolom di tabel ([#7900](https://github.com/nocobase/nocobase/pull/7900)) oleh @katherinehhh
- **[Workflow]** Tambahkan node "Multi-kondisi", berikan kontrol aliran seperti `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** perbaiki error yang muncul saat membersihkan nilai di kaskade multi-level ([#7943](https://github.com/nocobase/nocobase/pull/7943)) oleh @katherinehhh
- **[Visualisasi data]** Perbaiki masalah di mana blok bagan tidak diperbarui setelah disimpan ([#7920](https://github.com/nocobase/nocobase/pull/7920)) oleh @heziqiang
- **[Cetak template]** perbaiki error aksi cetak template di blok detail oleh @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/en/blog/v2.0.0-alpha.44)

*Tanggal rilis: 21-11-2025*

### 🎉 Fitur Baru

- **[client]**

  - tambahkan dukungan pembuatan cepat ke pilihan bidang asosiasi ([#7887](https://github.com/nocobase/nocobase/pull/7887)) oleh @katherinehhh
  - dukung pemilih kaskade untuk bidang asosiasi koleksi pohon ([#7846](https://github.com/nocobase/nocobase/pull/7846)) oleh @katherinehhh
- **[Telemetri]** Tambahkan plugin baru: Telemetri, plugin telemetri berbasis OpenTelemetry yang menyediakan metrik CPU, memori, dan permintaan HTTP dengan dukungan ekspor HTTP oleh @2013xile

### 🚀 Peningkatan

- **[telemetri]** Dukung pengontrolan metrik mana yang diekspor ([#7938](https://github.com/nocobase/nocobase/pull/7938)) oleh @2013xile
- **[Manajer tugas asinkron]** Tugas asinkron untuk sub-aplikasi harus memulai hanya sub-aplikasi target di Pekerja ([#7927](https://github.com/nocobase/nocobase/pull/7927)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**

  - hapus aksi tree-table dari blok koleksi non-pohon ([#7931](https://github.com/nocobase/nocobase/pull/7931)) oleh @katherinehhh
  - Perbaiki antarmuka bidang yang menampilkan many-to-one alih-alih one-to-one untuk belongsTo dalam konfigurasi sumber data eksternal ([#7936](https://github.com/nocobase/nocobase/pull/7936)) oleh @cgyrock
- **[flow-engine]** Perbaiki masalah tampilan ikon toolbar yang tidak sejajar di tombol blok detail ([#7929](https://github.com/nocobase/nocobase/pull/7929)) oleh @zhangzhonghe
- **[Workflow]** Memperbaiki masalah di mana memperbarui jumlah tugas secara tidak sengaja akan mereset status formulir yang sedang diisi ([#7937](https://github.com/nocobase/nocobase/pull/7937)) oleh @mytharcher
- **[Bidang koleksi: Many to many (array)]** Perbaiki masalah bidang M2M (array) saat membuat/memperbarui data terkait ([#7926](https://github.com/nocobase/nocobase/pull/7926)) oleh @cgyrock
- **[Aksi: Impor catatan Pro]** perbaiki masalah di mana modifikasi pengunggah opsi impor tidak berpengaruh oleh @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/en/blog/v2.0.0-alpha.43)

*Tanggal rilis: 20-11-2025*

### 🚀 Peningkatan

- **[Visualisasi data]** Menambahkan dukungan bahasa Rusia untuk antarmuka plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) oleh @sembaev-a-a
- **[Kontrol akses]** Kurangi izin default untuk peran anggota ([#7921](https://github.com/nocobase/nocobase/pull/7921)) oleh @2013xile
- **[Workflow: Webhook]** Tambahkan ikon untuk tipe node respons oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Perbaiki error: Can't resolve 'antd-mobile' dan Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) oleh @zhangzhonghe
- **[flow-engine]** Memperbaiki masalah di mana membuka formulir edit cepat blok tabel menyebabkan error. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) oleh @gchust
- **[Flow engine]** Pastikan variabel catatan selalu mengembalikan catatan lengkap saat digunakan bersama dengan bidang individualnya. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) oleh @gchust
- **[Sumber data: Utama]** Perbaiki masalah di mana bidang one-to-many yang baru ditambahkan tidak dapat dipilih sebagai kunci asing sebelum memulai ulang aplikasi. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) oleh @cgyrock
- **[Kontrol akses]** Dukung pembatasan cakupan data untuk operasi asosiasi. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) oleh @2013xile
