---
title: "NocoBase v2.0.0-alpha.8: Meningkatkan fungsi pencarian web plugin-ai"
description: "Catatan Rilis v2.0.0-alpha.8"
---

### 🎉 Fitur Baru

- **[AI employees]** Meningkatkan fungsi pencarian web pada plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) oleh @cgyrock

### 🚀 Peningkatan

- **[client]** Untuk mendapatkan tipe MIME file yang lebih akurat, gunakan paket `mime` untuk mendeteksi tipe MIME file di klien ([#7551](https://github.com/nocobase/nocobase/pull/7551)) oleh @mytharcher

- **[flow-engine]**
  - mendukung variabel popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) oleh @gchust

  - Meningkatkan pengalaman pengeditan kode dengan cuplikan yang lebih kaya dan penyelesaian kode yang sadar konteks untuk berbagai skenario ([#7559](https://github.com/nocobase/nocobase/pull/7559)) oleh @gchust

  - Alur kerja otomatis yang terstandarisasi dipicu secara konsisten oleh event "beforeRender", memastikan operasi yang dapat diprediksi dan terpadu di seluruh proses. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) oleh @gchust

- **[Workflow]** Menambahkan opsi `keepBranch` saat menghapus node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) oleh @mytharcher

- **[Data visualization]** Memperluas jenis grafik; Mengoptimalkan UI dan pengalaman interaktif. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) oleh @heziqiang

- **[Workflow: Approval]** Memfaktorkan ulang konfigurasi cabang untuk beradaptasi dengan perubahan kernel oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki masalah tampilan halaman yang tidak normal saat mengganti paginasi tabel ([#7572](https://github.com/nocobase/nocobase/pull/7572)) oleh @zhangzhonghe

  - Tidak dapat mengonfigurasi nilai field assign untuk aksi `Update` dan `Bulk update` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) oleh @gchust

  - Memperbaiki masalah gambar yang tidak ditampilkan dengan benar saat diputar dan diskalakan selama pratinjau ([#7573](https://github.com/nocobase/nocobase/pull/7573)) oleh @mytharcher

- **[Workflow: Approval]** Memperbaiki masalah error skrip migrasi karena tabel tidak ada saat aplikasi tidak diinstal oleh @mytharcher

- **[Auth: LDAP]** Memperbaiki kegagalan bind LDAP dengan DN non-ASCII (UTF-8) di Active Directory oleh @2013xile
