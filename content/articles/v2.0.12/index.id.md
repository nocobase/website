---
title: "NocoBase v2.0.12: Menambahkan kunci untuk pencadangan terjadwal di seluruh node klaster"
description: "Catatan Rilis v2.0.12"
---

### 🚀 Peningkatan

- **[Adaptor kunci Redis]** Perubahan ulang karena API LockManager berubah di repositori utama oleh @mytharcher

- **[Manajer cadangan]** Menambahkan kunci untuk penjadwalan cadangan di seluruh node kluster oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Blok V2 sekarang hanya menampilkan aksi yang didukung oleh sumber data saat ini ([#8803](https://github.com/nocobase/nocobase/pull/8803)) oleh @zhangzhonghe

  - Memperbaiki masalah gaya pada tombol kembali di sub-halaman v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) oleh @zhangzhonghe

- **[manajer-kunci]** Memperbaiki masalah kondisi balapan pada manajer kunci ([#8734](https://github.com/nocobase/nocobase/pull/8734)) oleh @mytharcher

- **[server]** Memperbaiki masalah kesalahan dalam kueri data pada sumber data non-database ([#8776](https://github.com/nocobase/nocobase/pull/8776)) oleh @cgyrock

- **[Kontrol akses]** Memperbaiki kesalahan modifikasi data pada sumber data API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) oleh @cgyrock

- **[Aksi: Ekspor rekaman]** Memperbaiki masalah kolom belongsToArray yang kosong di excel yang diekspor ([#8787](https://github.com/nocobase/nocobase/pull/8787)) oleh @cgyrock
