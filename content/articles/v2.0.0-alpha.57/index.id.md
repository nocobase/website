---
title: "NocoBase v2.0.0-alpha.57: Tambahkan variabel sistem baru dalam alur kerja, termasuk `instanceId` dan `genSnowflakeId`"
description: "Catatan Rilis v2.0.0-alpha.57"
---

### 🎉 Fitur Baru

- **[Workflow]** Menambahkan variabel sistem baru dalam workflow, termasuk `instanceId` dan `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Menggunakan select untuk konfigurasi lebar kolom operasi ([#8218](https://github.com/nocobase/nocobase/pull/8218)) oleh @katherinehhh
- **[AI employees]** Memperbaiki AI employee yang tidak merespons pada pengiriman edit pertama<br/>Menghapus AI employee bawaan yang tidak diperlukan "Avery Form Assistant"<br/>Menambahkan izin peran awal default untuk AI employee bawaan<br/>Meningkatkan penanganan kesalahan dan perilaku output AI employee<br/>Menambahkan dukungan bagi AI untuk mengakses variabel konteks modal<br/>Menambahkan dukungan untuk sumber data eksternal bagi AI<br/>Memperbaiki pemotongan percakapan yang salah saat AI memproses volume data besar ([#8191](https://github.com/nocobase/nocobase/pull/8191)) oleh @heziqiang
- **[Workflow]**

  - Menambahkan instance workflow asli ke API duplikat ([#8225](https://github.com/nocobase/nocobase/pull/8225)) oleh @mytharcher
  - Meningkatkan deskripsi bidang `changed` dalam event koleksi ([#8216](https://github.com/nocobase/nocobase/pull/8216)) oleh @mytharcher
- **[Async task manager]** Meningkatkan penanganan kesalahan selama tugas pembersihan dengan menambahkan mekanisme penangkapan pengecualian untuk mencegah kerusakan aplikasi ([#8215](https://github.com/nocobase/nocobase/pull/8215)) oleh @mytharcher
- **[Block: Action panel]** Meningkatkan tampilan blok, aksi, dan bidang yang disembunyikan dalam mode konfigurasi ([#8174](https://github.com/nocobase/nocobase/pull/8174)) oleh @katherinehhh
- **[UI templates]** Menambahkan plugin template UI, menyediakan kemampuan untuk menggunakan kembali template blok dan template popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) oleh @gchust
- **[Action: Export records Pro]** Mengimpor pro & mengekspor pro action mendukung kontrol izin oleh @katherinehhh
- **[Workflow: Approval]** Memperbarui `approval.data` ke versi terbaru dari record yang disetujui saat eksekusi berakhir, agar sesuai dengan mode tampilan record "Terbaru" oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]**

  - Memperbaiki masalah pemeriksaan izin untuk menambahkan record anak di tabel pohon ([#8240](https://github.com/nocobase/nocobase/pull/8240)) oleh @katherinehhh
  - Memperbaiki masalah di mana beberapa variabel terkait record popup blok ditampilkan secara tidak benar. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) oleh @gchust
  - Memperbaiki masalah di mana aksi atau tab yang ditambahkan setelah menyeret aksi atau tab tidak ditampilkan. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) oleh @gchust
  - Masalah pemeriksaan izin di sumber data eksternal ([#8221](https://github.com/nocobase/nocobase/pull/8221)) oleh @katherinehhh
  - Memperbaiki aksi sumber data eksternal yang disembunyikan meskipun memiliki izin ([#8217](https://github.com/nocobase/nocobase/pull/8217)) oleh @katherinehhh
- **[client]**

  - Menangani aturan tautan kosong untuk mencegah kesalahan ([#8239](https://github.com/nocobase/nocobase/pull/8239)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana kolom operasi blok tabel tidak dapat dihapus. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) oleh @gchust
  - Memperbaiki masalah di mana eksekusi pratinjau menulis output JSX yang dikompilasi kembali ke stepParams, menyebabkan kode sumber yang disimpan ditulis ulang. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) oleh @gchust
  - Memperbaiki kesalahan unggah lampiran S3 Pro dan meningkatkan pratinjau file ([#8211](https://github.com/nocobase/nocobase/pull/8211)) oleh @katherinehhh
- **[cli]** license-kit kompatibel dengan kasus di mana DB_PASSWORD kosong ([#8220](https://github.com/nocobase/nocobase/pull/8220)) oleh @jiannx
- **[database]** Memperbaiki inkonsistensi kueri bidang tanggal antara sumber data utama dan eksternal ([#8181](https://github.com/nocobase/nocobase/pull/8181)) oleh @cgyrock
- **[Collection field: Sequence]** Memperbaiki kesalahan saat perintah perbaikan field-sequence menemukan koleksi yang tidak ada di lingkungan saat ini. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) oleh @cgyrock
- **[Workflow: Manual node]** Memperbaiki masalah di mana kesalahan muncul saat membatalkan eksekusi workflow yang telah dihapus ([#8258](https://github.com/nocobase/nocobase/pull/8258)) oleh @mytharcher
- **[UI templates]** Memperbaiki kesalahan di mana membuka popup bidang asosiasi akan salah menggunakan template popup bidang non-asosiasi. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) oleh @gchust
- **[Departments]** Memperbaiki masalah di mana pencarian agregat tidak dapat menemukan pengguna ([#8222](https://github.com/nocobase/nocobase/pull/8222)) oleh @2013xile
- **[Collection field: Many to many (array)]** Memperbaiki masalah di mana bidang many-to-many (array) tidak dapat dibuat ketika tipe kunci target adalah Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) oleh @2013xile
- **[License settings]** Memperbaiki tampilan plugin berlisensi yang tidak normal ([#8214](https://github.com/nocobase/nocobase/pull/8214)) oleh @jiannx
- **[Action: Import records]** Memperbaiki masalah di mana indeks baris dalam pesan kesalahan selalu 1 ketika kesalahan terjadi dalam aksi impor ([#8244](https://github.com/nocobase/nocobase/pull/8244)) oleh @mytharcher
- **[Template print]** Memperbaiki permintaan cetak template yang tidak berfungsi dengan sumber data eksternal oleh @katherinehhh
- **[Workflow: Approval]**

  - Memperbaiki rollback duplikat dari transaksi yang sama oleh @mytharcher
  - Memperbaiki masalah di mana persetujuan membuat asosiasi ke record baru oleh @mytharcher
  - Memperbaiki masalah di mana persetujuan membuat asosiasi to-many ke record baru oleh @mytharcher
