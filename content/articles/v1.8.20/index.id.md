---
title: "NocoBase v1.8.20: Menyesuaikan API variabel alur kerja untuk mendukung preset daftar variabel tambahan"
description: "Catatan Rilis v1.8.20"
---

### 🚀 Peningkatan

- **[Workflow]** Menyesuaikan API variabel workflow untuk mendukung penyetelan daftar variabel tambahan ([#7439](https://github.com/nocobase/nocobase/pull/7439)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Mendukung penggunaan variabel terkait persetujuan dalam notifikasi kustom oleh @mytharcher

  - Mendukung pembaruan status persetujuan setelah node akhir menghentikan eksekusi oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana, dalam skenario tertentu, mengedit rekaman di popup pemilih rekaman seluler menyebabkan kesalahan ([#7444](https://github.com/nocobase/nocobase/pull/7444)) oleh @zhangzhonghe

  - validasi wajib tidak berfungsi untuk bidang lampiran di sub-tabel ([#7431](https://github.com/nocobase/nocobase/pull/7431)) oleh @katherinehhh

  - Memperbaiki masalah di mana ikon ditampilkan secara tidak benar ketika URL di bidang URL lampiran berisi parameter kueri ([#7432](https://github.com/nocobase/nocobase/pull/7432)) oleh @mytharcher

- **[basis data]**
  - Memperbaiki kesalahan sintaks MySQL yang terjadi saat memuat lebih banyak pesan dalam aplikasi. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) oleh @aaaaaajie

  - Memperbaiki masalah presisi untuk bidang Angka yang diekspor ([#7421](https://github.com/nocobase/nocobase/pull/7421)) oleh @aaaaaajie

- **[tidak terdefinisi]** Memperbaiki masalah pemfilteran berdasarkan bidang tanggal hanya di sumber eksternal MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) oleh @aaaaaajie

- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana impor gagal ketika kunci utama tabel adalah teks satu baris ([#7416](https://github.com/nocobase/nocobase/pull/7416)) oleh @aaaaaajie

- **[Workflow]**
  - Melengkapi opsi untuk secara otomatis menghapus status eksekusi workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) oleh @mytharcher

  - Memperbaiki masalah terkait menu seluler di tugas workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) oleh @mytharcher

- **[Aksi: Impor rekaman Pro]** Memperbaiki hasil pembaruan yang tidak terduga saat menggunakan kunci utama string dalam impor xlsx. oleh @aaaaaajie
