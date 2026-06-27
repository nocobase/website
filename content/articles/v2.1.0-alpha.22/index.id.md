---
title: "NocoBase v2.1.0-alpha.22: Menambahkan API untuk memeriksa pembuatan node"
description: "Catatan Rilis v2.1.0-alpha.22"
---

### 🎉 Fitur Baru

- **[Workflow]** Menambahkan API untuk memeriksa pembuatan node ([#9207](https://github.com/nocobase/nocobase/pull/9207)) oleh @mytharcher

### 🚀 Peningkatan

- **[cli]** Menambahkan pelacakan sumber permintaan CLI di log permintaan dan log audit ([#9223](https://github.com/nocobase/nocobase/pull/9223)) oleh @2013xile

- **[Kontrol akses]** Menambahkan beberapa API baru untuk keterampilan acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) oleh @Andrew1989Y

- **[Workflow: Persetujuan]**
  - Menambahkan validasi untuk pembuatan node persetujuan oleh @mytharcher

  - Menambahkan indeks pada kolom catatan persetujuan untuk meningkatkan kinerja pada tindakan daftar dan kirim oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Tombol urutkan tersembunyi pada bidang relasi ([#9220](https://github.com/nocobase/nocobase/pull/9220)) oleh @jiannx

- **[database]** Memperbaiki masalah di mana bidang desimal dengan validasi dapat menolak input numerik yang valid ([#9204](https://github.com/nocobase/nocobase/pull/9204)) oleh @2013xile

- **[Karyawan AI]** Memperbaiki masalah nilai bidang URL yang hilang untuk lampiran dalam pilihan formulir karyawan AI. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) oleh @cgyrock

- **[Pengguna]** Memperbaiki bidang yang dikonfigurasi secara dinamis di Edit profil tidak memuat data pengguna terbaru ([#9205](https://github.com/nocobase/nocobase/pull/9205)) oleh @2013xile

- **[Manajer sumber data]** Memperbaiki masalah di mana pengurutan berkelompok pada bidang urut sumber data eksternal tidak dapat dibersihkan ([#9203](https://github.com/nocobase/nocobase/pull/9203)) oleh @2013xile
