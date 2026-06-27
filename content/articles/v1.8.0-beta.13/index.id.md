---
title: "NocoBase v1.8.0-beta.13: Dukungan untuk bidang BIT di SQL Server untuk sumber data eksternal"
description: "Catatan Rilis v1.8.0-beta.13"
---

### 🎉 Fitur Baru

- **[klien]**

  - Mendukung field BIT di SQL Server untuk sumber data eksternal. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) oleh @aaaaaajie
  - Mendukung variabel agregasi kustom ([#6916](https://github.com/nocobase/nocobase/pull/6916)) oleh @zhangzhonghe
    Referensi: [Variabel kustom](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** mendukung otorisasi komersial ([#6554](https://github.com/nocobase/nocobase/pull/6554)) oleh @jiannx
- **[Manajer sumber data]** ✨ Mendukung pemuatan koleksi sesuai permintaan dari sumber data eksternal ([#6979](https://github.com/nocobase/nocobase/pull/6979)) oleh @aaaaaajie
- **[Pengaturan lisensi]** menambahkan pengaturan lisensi dan memvalidasi lisensi sebelum mengunduh plugin ([#7026](https://github.com/nocobase/nocobase/pull/7026)) oleh @jiannx
- **[Autentikasi]** Mendukung fungsi "Lupa Kata Sandi" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) oleh @zhangzhonghe
  Referensi: [Lupa kata sandi](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Aksi: Pembaruan massal]** Mendukung penyegaran data di blok data lain setelah memperbarui data di suatu blok ([#6591](https://github.com/nocobase/nocobase/pull/6591)) oleh @zhangzhonghe
- **[Sumber data: SQL Server Eksternal]**

  - Menambahkan dukungan untuk field BIT SQL Server di sumber data eksternal oleh @aaaaaajie
  - Mendukung pemuatan koleksi sesuai permintaan dari sumber data eksternal oleh @aaaaaajie
- **[Variabel kustom]** Mendukung variabel agregasi kustom oleh @zhangzhonghe
  Referensi: [Variabel kustom](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[Manajer email]**

  - mendukung penghapusan email oleh @jiannx
  - mendukung pengaturan interval sinkronisasi email oleh @jiannx
  - mendukung pengiriman massal oleh @jiannx

### 🚀 Peningkatan

- **[klien]**

  - Mendukung pengisian field input melalui pemindaian kode QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) oleh @katherinehhh
  - Menentukan apakah akan menampilkan komponen seluler berdasarkan tipe perangkat, bukan lebar halaman ([#6611](https://github.com/nocobase/nocobase/pull/6611)) oleh @zhangzhonghe
  - mendukung lokalisasi untuk konten blok Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) oleh @katherinehhh
  - Menentukan apakah akan menampilkan tata letak seluler berdasarkan tipe perangkat, bukan lebar halaman ([#6600](https://github.com/nocobase/nocobase/pull/6600)) oleh @zhangzhonghe
- **[Manajer tugas asinkron]** Meningkatkan kinerja pembuatan tugas selama ekspor ([#7078](https://github.com/nocobase/nocobase/pull/7078)) oleh @aaaaaajie
- **[Seluler]** Menyesuaikan gaya pop-up notifikasi untuk perangkat seluler ([#6557](https://github.com/nocobase/nocobase/pull/6557)) oleh @zhangzhonghe
- **[Manajer email]**

  - mendukung balasan dan penerusan email terpisah dalam subjek yang sama oleh @jiannx
  - implementasi skema kemudian kirim email dan dukung ai oleh @jiannx
  - mendukung nilai pengiriman default di pop-up, mendukung pencarian fuzzy untuk penerima, dan memperbaiki masalah oleh @jiannx
  - melengkapi fungsi pengiriman massal oleh @jiannx
  - peningkatan fungsional dan perbaikan masalah oleh @jiannx

### 🐛 Perbaikan Bug

- **[cli]**

  - Menyesuaikan salinan lisensi saat menginstal plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) oleh @jiannx
  - kesalahan undefined saat mengunduh plugin ([#7143](https://github.com/nocobase/nocobase/pull/7143)) oleh @jiannx
- **[klien]**

  - Setelah membersihkan nilai badge, UI tidak diperbarui ([#7055](https://github.com/nocobase/nocobase/pull/7055)) oleh @zhangzhonghe
  - Kesalahan saat mengklik tombol filter ([#7100](https://github.com/nocobase/nocobase/pull/7100)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana data pengguna saat ini kosong ([#7016](https://github.com/nocobase/nocobase/pull/7016)) oleh @zhangzhonghe
  - Konten ditampilkan salah pada halaman yang dibuka melalui tautan popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) oleh @zhangzhonghe
  - Meneruskan props lain ke komponen Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) oleh @sheldon66
  - Aksi simpan sebagai template akan gagal jika mengandung field asosiasi ([#6543](https://github.com/nocobase/nocobase/pull/6543)) oleh @gchust
- **[database]** membuat operator eq untuk field string kompatibel dengan tipe angka ([#7062](https://github.com/nocobase/nocobase/pull/7062)) oleh @chenos
- **[build]** memperbaiki kesalahan runtime klien di plugin-workflow-javascript, kesalahan process undefine ([#6859](https://github.com/nocobase/nocobase/pull/6859)) oleh @jiannx
- **[Visualisasi data]** Masalah paginasi tabel ([#7151](https://github.com/nocobase/nocobase/pull/7151)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki masalah di mana kombinasi pemuatan sumber data sesuai permintaan dan konfigurasi prefiks tabel menyebabkan kesalahan "ConnectionManager.getConnection was called after the connection manager was closed". ([#7150](https://github.com/nocobase/nocobase/pull/7150)) oleh @aaaaaajie
- **[plugin-service-platform]** menyesuaikan teks lisensi oleh @jiannx
- **[Variabel kustom]** Setelah membersihkan nilai badge, UI tidak diperbarui oleh @zhangzhonghe
- **[Manajer email]**

  - lampiran tidak ditampilkan oleh @jiannx
  - kesalahan penghapusan email oleh @jiannx
  - penghapusan email gagal oleh @jiannx
  - pop-up pengaturan tidak ditampilkan oleh @jiannx
  - drawer balasan tidak terlihat oleh @jiannx
  - pencarian fuzzy penerima mendukung field asosiasi oleh @jiannx
  - menambahkan field "id" ke mailmessagelabelsMailmessages oleh @jiannx
  - pencarian fuzzy email untuk membuat filter unik oleh @jiannx
  - beberapa kunci utama untuk tabel "mailmessagelabels_mailmessages" oleh @jiannx
