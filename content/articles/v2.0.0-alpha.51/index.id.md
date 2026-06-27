---
title: "NocoBase v2.0.0-alpha.51: Mendukung penyesuaian gaya global di editor tema"
description: "Catatan Rilis v2.0.0-alpha.51"
---

### 🎉 Fitur Baru

- **[client]**
  - Mendukung kustomisasi gaya global di editor tema ([#7960](https://github.com/nocobase/nocobase/pull/7960)) oleh @ljmiaoo

  - Mendukung pengaturan aturan pengurutan default di blok detail ([#8070](https://github.com/nocobase/nocobase/pull/8070)) oleh @katherinehhh

  - Mendukung pengaturan tipe data untuk field Number (opsi: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) oleh @chenos

- **[Collection field: Sequence]** Memperbarui field urutan secara otomatis setelah migrasi data ([#8063](https://github.com/nocobase/nocobase/pull/8063)) oleh @cgyrock

### 🚀 Peningkatan

- **[client]**
  - Memperbaiki lompatan paginasi sub-tabel setelah penghapusan baris dan menambahkan dukungan untuk aturan validasi kolom ([#8094](https://github.com/nocobase/nocobase/pull/8094)) oleh @katherinehhh

  - Menyesuaikan tampilan field besar di sub-tabel yang dapat diedit ([#8078](https://github.com/nocobase/nocobase/pull/8078)) oleh @katherinehhh

  - Mendukung elipsis untuk konten field JSON yang meluap ([#8067](https://github.com/nocobase/nocobase/pull/8067)) oleh @katherinehhh

- **[flow-engine]**
  - Menambahkan opsi useCache ke FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) oleh @zhangzhonghe

  - Menambahkan metode `removeModelWithSubModels` untuk menghapus model dan sub-modelnya secara rekursif ([#8064](https://github.com/nocobase/nocobase/pull/8064)) oleh @zhangzhonghe

- **[Block: GridCard]** menambahkan konfigurasi jumlah baris ke grid card dan mengganti pageSize dengan perhitungan otomatis ([#8055](https://github.com/nocobase/nocobase/pull/8055)) oleh @katherinehhh

- **[Audit logs]** Memperbarui field pengidentifikasi unik menjadi `text` untuk mencegah luapan panjang pengidentifikasi selama pengeditan massal oleh @2013xile

- **[Migration manager]** Memperbarui field urutan secara otomatis setelah migrasi data oleh @cgyrock

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah di mana field yang dikonfigurasi dari blok yang dihapus tidak dihapus dari blok filter. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) oleh @gchust

  - Memperbaiki celah spasi ekstra saat tombol disembunyikan dalam mode non-konfigurasi ([#8092](https://github.com/nocobase/nocobase/pull/8092)) oleh @katherinehhh

  - Memperbaiki masalah di mana teks tombol reset di blok form filter tidak dapat dimodifikasi. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) oleh @gchust

  - Memperbaiki masalah di mana input field tidak mendukung beberapa nilai saat menggunakan operator $in atau $notIn untuk memfilter field. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) oleh @gchust

  - Memperbaiki masalah di mana blok data yang baru ditambahkan tidak secara otomatis muncul di menu field blok form filter. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) oleh @gchust

  - Menu konfigurasi untuk field asosiasi di form filter tidak boleh menampilkan opsi buat cepat. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) oleh @gchust

  - Memperbaiki masalah data sub-tabel asosiasi di blok List ([#8082](https://github.com/nocobase/nocobase/pull/8082)) oleh @katherinehhh

  - Memperbaiki aturan validasi field numerik dari pengaturan koleksi yang tidak diterapkan ([#8025](https://github.com/nocobase/nocobase/pull/8025)) oleh @katherinehhh

  - Memperbaiki masalah di mana field di form filter dibatasi oleh aturan validasi backend untuk field. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) oleh @gchust

  - Masalah edit cepat field json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) oleh @katherinehhh

  - Memperbaiki masalah tampilan field besar di edit sub-tabel ([#8069](https://github.com/nocobase/nocobase/pull/8069)) oleh @katherinehhh

  - Memperbaiki buat cepat yang memunculkan error saat allowMultiple dinonaktifkan di pilihan rekaman asosiasi ([#8034](https://github.com/nocobase/nocobase/pull/8034)) oleh @katherinehhh

  - Memperbaiki field json harus dikirim sebagai objek ([#8057](https://github.com/nocobase/nocobase/pull/8057)) oleh @katherinehhh

  - Memperbaiki masalah di mana tombol enter tidak dapat digunakan untuk memicu aksi filter. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) oleh @gchust

- **[flow-engine]**
  - Memperbaiki masalah di mana opsi konfigurasi dari komponen sebelumnya tetap terlihat di menu setelah mengganti komponen field. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) oleh @gchust

  - Memindahkan useEffect sebelum pengembalian bersyarat di FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana field asosiasi yang tidak didukung muncul di field operasi filter. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) oleh @gchust

- **[acl]** perbaikan: acl.allow dieksekusi terlalu awal ([#8065](https://github.com/nocobase/nocobase/pull/8065)) oleh @chenos

- **[File manager]**
  - Memperbaiki tampilan data sub-detail yang salah di blok List dan Grid Card ([#8087](https://github.com/nocobase/nocobase/pull/8087)) oleh @katherinehhh

  - Memperbaiki field lampiran yang tidak ditampilkan dengan benar di sub-tabel readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) oleh @katherinehhh

- **[Workflow]**
  - Memperbaiki masalah di mana error muncul di kanvas eksekusi saat node dihapus ([#8090](https://github.com/nocobase/nocobase/pull/8090)) oleh @mytharcher

  - Memperbaiki masalah di mana halaman eksekusi memunculkan error saat jobs di node tidak terdefinisi ([#8066](https://github.com/nocobase/nocobase/pull/8066)) oleh @mytharcher

- **[Collection field: Formula]** Memperbaiki masalah di mana field formula tidak dapat ditambahkan ke blok form filter. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) oleh @gchust

- **[Block: Action panel]** mengoptimalkan gaya di tata letak List blok panel aksi ([#8084](https://github.com/nocobase/nocobase/pull/8084)) oleh @katherinehhh

- **[AI employees]**
  - Menyelesaikan masalah di mana nama peran sumber data tidak dikompilasi ([#8076](https://github.com/nocobase/nocobase/pull/8076)) oleh @heziqiang

  - Memperbaiki masalah di mana beberapa field rekaman saat ini tidak dapat ditampilkan di komponen pemilihan variabel. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) oleh @gchust

- **[Action: Import records]** Field yang diimpor tidak cocok dengan field yang diatur di pengaturan ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) oleh @2013xile

- **[Access control]** Menambahkan middleware untuk pemeriksaan izin pada operasi asosiasi untuk sumber data eksternal ([#8062](https://github.com/nocobase/nocobase/pull/8062)) oleh @2013xile

- **[Workflow: Approval]**
  - Memperbaiki masalah di mana tidak ada data saat memuat persetujuan terkait dengan variabel lingkup ACL oleh @mytharcher

  - Memperbaiki masalah data yang diisi menghilang di form penerima tugas oleh @mytharcher

  - Memperbaiki masalah error izin yang muncul saat memuat persetujuan terkait rekaman di drawer detail oleh @mytharcher

  - Memperbaiki masalah di mana proses tidak benar saat bercabang dengan urutan dan tanda tangan bersama oleh @mytharcher

  - Memperbaiki masalah saat daftar persetujuan menyebabkan OOM oleh @mytharcher

  - Memperbaiki masalah di mana rekaman persetujuan tidak disertakan dalam hasil job di cabang pengembalian oleh @mytharcher

  - Memperbaiki masalah di mana jendela pop-up pemberi persetujuan tidak menampilkan judul oleh @zhangzhonghe

  - Memperbaiki masalah di mana error muncul saat memuat persetujuan terkait dalam mode peran union only oleh @mytharcher

- **[Email manager]**
  - Menangani data abnormal oleh @jiannx

  - Tidak menyinkronkan status terjadwal gmail oleh @jiannx
