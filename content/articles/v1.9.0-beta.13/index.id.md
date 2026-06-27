---
title: "NocoBase v1.9.0-beta.13: Refaktor konfigurasi cabang untuk menyesuaikan dengan perubahan kernel"
description: "Catatan Rilis v1.9.0-beta.13"
---

### 🚀 Peningkatan

- **[klien]** Untuk mendapatkan tipe MIME file yang lebih akurat, gunakan paket `mime` untuk mendeteksi tipe MIME file di klien ([#7551](https://github.com/nocobase/nocobase/pull/7551)) oleh @mytharcher

- **[Sumber data: Utama]** Memperbarui logika lokalisasi untuk pesan kesalahan, dan menanganinya dalam plugin penanganan kesalahan ([#7582](https://github.com/nocobase/nocobase/pull/7582)) oleh @2013xile

- **[Alur Kerja]** Menambahkan opsi `keepBranch` saat menghapus node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]** Memperbarui konfigurasi cabang untuk menyesuaikan dengan perubahan kernel oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki kesalahan saat membersihkan kolom tanggal di blok filter ([#7632](https://github.com/nocobase/nocobase/pull/7632)) oleh @katherinehhh

  - Memperbaiki nilai default subtable yang tidak berfungsi di formulir edit drawer ([#7631](https://github.com/nocobase/nocobase/pull/7631)) oleh @katherinehhh

  - Memperbaiki masalah gambar yang tidak ditampilkan dengan benar saat diputar dan diskalakan selama pratinjau ([#7573](https://github.com/nocobase/nocobase/pull/7573)) oleh @mytharcher

  - Memperbaiki masalah pop-up ikon tab yang terhalang ([#7607](https://github.com/nocobase/nocobase/pull/7607)) oleh @zhangzhonghe

- **[database]** Memperbaiki kesalahan yang muncul saat operator `$in` bertemu nilai `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) oleh @mytharcher

- **[Sumber data: Utama]** Memperbaiki masalah metadata yang tidak tersinkronisasi di beberapa node setelah membuat kolom asosiasi terbalik ([#7628](https://github.com/nocobase/nocobase/pull/7628)) oleh @mytharcher

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki masalah kesalahan skrip migrasi karena tabel yang tidak ada saat aplikasi belum diinstal oleh @mytharcher

  - Memperbaiki masalah ID Snowflake yang tidak dihasilkan karena hook yang dilewati oleh @mytharcher

- **[Auth: LDAP]** Memperbaiki kegagalan bind LDAP dengan DN non-ASCII (UTF-8) di Active Directory oleh @2013xile
