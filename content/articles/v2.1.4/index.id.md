---
title: "NocoBase v2.1.4: Mengubah file impor yang diunggah menjadi penyimpanan disk untuk mengurangi tekanan memori selama impor data besar"
description: "Catatan Rilis v2.1.4"
---

### 🚀 Peningkatan

- **[Alur Kerja]** Meningkatkan pengalaman pengeditan metadata alur kerja dengan mendukung pengeditan deskripsi di popup detail dan secara otomatis mengisi metadata alur kerja sumber saat menduplikasi alur kerja. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Aksi: Impor catatan]** Mengubah file impor yang diunggah menjadi penyimpanan disk untuk mengurangi tekanan memori selama impor data besar. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) oleh @mytharcher
- **[Manajer cadangan]** Memperbaiki masalah keamanan di mana nama skema PostgreSQL yang tidak aman dapat diterima selama pemulihan cadangan. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) oleh @2013xile
- **[Alur Kerja]**

  - Memperbaiki penanganan waktu habis alur kerja sehingga eksekusi yang dibatalkan dan tugas tertundanya dapat diperbarui secara atomik. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) oleh @mytharcher
  - Memperbaiki masalah di mana bidang terakhir diperbarui oleh alur kerja tidak diperbarui setelah perubahan node alur kerja. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) oleh @mytharcher
- **[Aksi: Impor catatan Pro]** Menghindari penguraian file besar di node permintaan sebelum impor Pro membuat tugas asinkron. oleh @mytharcher
- **[Kontrol versi]** Menyesuaikan posisi pintasan entri atas kontrol versi sehingga muncul di samping editor UI di tata letak admin lama dan v2. oleh @cgyrock
