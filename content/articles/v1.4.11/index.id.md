---
title: "NocoBase v1.4.11: Optimalkan item konfigurasi komponen"
description: "Catatan Rilis v1.4.11"
---

### 🚀 Peningkatan

- **[client]** Membuat lebih banyak komponen mendukung item konfigurasi 'Konten overflow Ellipsis' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) oleh @zhangzhonghe

- **[database]** menambahkan firstOrCreate & updateOrCreate ke repositori relasi ([#5894](https://github.com/nocobase/nocobase/pull/5894)) oleh @chareice

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki parameter x-data-source yang hilang dalam template permintaan duplikat untuk blok sumber data eksternal ([#5882](https://github.com/nocobase/nocobase/pull/5882)) oleh @katherinehhh

  - Memperbaiki masalah scrollbar horizontal di tabel dalam plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) oleh @katherinehhh

  - Memperbaiki masalah di mana opsi 'N/A' tambahan terkadang muncul di dropdown bidang asosiasi ([#5878](https://github.com/nocobase/nocobase/pull/5878)) oleh @zhangzhonghe

  - Memperbaiki masalah pembuatan tampilan PG, mengatasi error saat memilih tampilan di seluruh skema ([#5881](https://github.com/nocobase/nocobase/pull/5881)) oleh @katherinehhh

  - Memperbaiki masalah dengan gaya grup di blok formulir ketika tata letak diatur ke horizontal ([#5884](https://github.com/nocobase/nocobase/pull/5884)) oleh @katherinehhh

- **[Pengguna]**
  - Memperbaiki masalah di mana formulir tidak direset setelah menambah atau mengedit pengguna di manajemen pengguna. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) oleh @2013xile

  - Memperbaiki masalah di mana pengaturan paginasi direset setelah mengedit dan mengirimkan profil pengguna di manajemen pengguna setelah perpindahan halaman atau perubahan ukuran halaman. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) oleh @2013xile

- **[Manajer sumber data]** Memperbaiki masalah pemfilteran dengan Collection sumber data eksternal ([#5890](https://github.com/nocobase/nocobase/pull/5890)) oleh @chareice

- **[Formulir publik]** Memperbaiki masalah di mana peralihan tema global mempengaruhi tema halaman pratinjau formulir publik ([#5883](https://github.com/nocobase/nocobase/pull/5883)) oleh @katherinehhh
