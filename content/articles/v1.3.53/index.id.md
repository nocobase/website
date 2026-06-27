---
title: "NocoBase v1.3.53: Ekspor hook penting"
description: "Catatan Rilis v1.3.53"
---

### 🚀 Peningkatan

- **[client]**
  - mengekspor hook esensial ([#5702](https://github.com/nocobase/nocobase/pull/5702)) oleh @mytharcher

  - plugin bidang wilayah china dihapus dari plugin bawaan ([#5693](https://github.com/nocobase/nocobase/pull/5693)) oleh @katherinehhh

- **[Workflow: Aksi pra-acara]** menghapus log peringatan di interceptor permintaan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[cli]** Mode daemon tidak menghapus file sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) oleh @chenos

- **[client]**
  - Memperbaiki masalah bidang asosiasi yang saling memengaruhi ketika beberapa bidang asosiasi memiliki koleksi target yang sama ([#5744](https://github.com/nocobase/nocobase/pull/5744)) oleh @katherinehhh

  - Memperbaiki masalah perataan kotak centang di sub-tabel ([#5735](https://github.com/nocobase/nocobase/pull/5735)) oleh @katherinehhh

  - Memperbaiki masalah tampilan bidang kunci asing di pemilih data ([#5734](https://github.com/nocobase/nocobase/pull/5734)) oleh @katherinehhh

  - Memperbaiki penyesuaian feedbackLayout untuk meningkatkan pesan validasi di sub-tabel ([#5700](https://github.com/nocobase/nocobase/pull/5700)) oleh @katherinehhh

- **[server]** Memuat plugin sesuai urutan dependensi ([#5706](https://github.com/nocobase/nocobase/pull/5706)) oleh @chenos

- **[Blok: Peta]** Memperbaiki error saat mengubah level zoom di Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) oleh @katherinehhh

- **[Sumber data: Utama]** Memperbaiki inferensi nama bidang di koleksi tampilan ([#5729](https://github.com/nocobase/nocobase/pull/5729)) oleh @chareice

- **[Manajer file]** ketika endpoint tidak kosong, forcePathStyle disetel ke true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) oleh @chenos
