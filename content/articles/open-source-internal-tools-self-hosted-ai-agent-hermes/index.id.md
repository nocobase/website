---
title: "5 Alat Internal Open-Source untuk Digunakan dengan Hermes Agent"
description: "Pelajari bagaimana NocoBase, Appsmith, Budibase, Directus, dan Baserow dapat bekerja dengan Hermes Agent untuk meningkatkan pembuatan, konfigurasi, dan pemeliharaan alat internal."
---

AI Agents tidak lagi hanya populer di skenario pengembangan.

Selain alat seperti Claude Code dan OpenClaw, Hermes Agent juga mulai mendapat lebih banyak perhatian akhir-akhir ini.

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[Di Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/), seorang pengguna menyebutkan bahwa setelah mencoba beberapa alat Agent, termasuk OpenClaw, Nanobot, dan Nanoclaw, mereka tetap lebih memilih Hermes Agent pada akhirnya. Alat ini mempertahankan kemampuan yang benar-benar mereka butuhkan tanpa beban yang tidak perlu. Untuk skenario seperti model lokal, server yang dihosting sendiri, akses SSH, dan operasi berbasis Telegram, alat ini juga cocok untuk pengaturan yang lebih ringan dan terkontrol.

> 💡Baca selengkapnya:
>
> [Bagaimana OpenClaw dapat digunakan dalam bisnis nyata? 5 alat sumber terbuka yang direkomendasikan](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
>
> [Setelah menggunakan Claude Code, Anda memerlukan 6 alat sumber terbuka ini](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

Bagi tim yang sudah berencana membangun sistem bisnis atau alat internal yang dihosting sendiri, Hermes Agent sangat cocok jika AI Agent perlu digunakan di dalam sistem bisnis nyata untuk menangani kueri data, konfigurasi sistem, pemeliharaan alur kerja, dan eksekusi tugas.

Platform alat internal menyediakan fondasi untuk sistem bisnis, sementara Hermes bekerja sebagai Agent yang dihosting sendiri yang membantu tim melakukan kueri, mengonfigurasi, dan memelihara sistem dengan bahasa alami, serta menangkap operasi yang dapat diulang sebagai Skills yang dapat digunakan kembali.

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan tanpa kode/rendah kode bertenaga AI yang paling dapat diperluas untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Sepenuhnya dihosting sendiri, berbasis plugin, dan ramah pengembang. →[ Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---

Artikel ini berfokus pada platform alat internal seperti NocoBase, Appsmith, Budibase, Directus, dan Baserow, dan menjelaskan bagaimana mereka dapat digunakan dengan Hermes Agent dalam skenario yang berbeda.

Pertama, berikut adalah tabel alat yang dibahas dalam artikel ini, sistem bisnis umum yang cocok untuk mereka, dan kemampuan yang dapat ditambahkan oleh Hermes Agent.

| Alat      | Sistem bisnis / alat internal yang direkomendasikan                                                                                                             | Apa yang dapat ditambahkan oleh Hermes Agent                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NocoBase  | CRM, ERP, sistem persetujuan, sistem tiket, manajemen proyek, manajemen pemasok, manajemen aset, backend operasional, dan sistem bisnis lainnya                | Gunakan bahasa alami untuk merencanakan model data, mengonfigurasi halaman dan izin, memelihara alur kerja, dan menangkap modul bisnis frekuensi tinggi sebagai Skills yang dapat digunakan kembali |
| Appsmith  | Panel admin, dasbor data, backend layanan pelanggan, panel tinjauan, alat operasional, antarmuka manajemen basis data                                          | Perjelas struktur halaman, atur logika kueri dan filter, jelaskan hubungan antara komponen dan sumber data, dan gunakan kembali template panel admin umum                         |
| Budibase  | Sistem formulir, alur kerja persetujuan, permintaan karyawan, meja layanan TI, aplikasi alur kerja operasional, alat alur kerja internal                       | Perjelas bidang formulir, node persetujuan, dan transisi status, hasilkan template alur kerja, dan tangkap Skills penanganan permintaan                                          |
| Directus  | Backend basis data, manajemen API, sistem manajemen konten, platform manajemen data terstruktur, backend operasi data                                          | Jelaskan struktur data, atur hubungan bidang, dukung kueri bahasa alami, dan tangkap alur kerja manajemen data dan pemeliharaan konten                                            |
| Baserow   | Basis data berbasis tabel, CRM ringan, daftar pemasok, rencana konten, tabel kemajuan proyek, daftar inventaris                                                   | Rencanakan struktur tabel dan tampilan, atur aturan filter, hasilkan bidang kategori dan status, dan gunakan kembali template aplikasi ringan                                    |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

Situs web resmi: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star: 22,6k

### Perkenalan

NocoBase adalah platform tanpa kode / rendah kode AI sumber terbuka untuk membangun sistem bisnis internal perusahaan dan backend admin.

Pada intinya, NocoBase membantu tim membangun sistem bisnis yang berjalan lama melalui model data, konfigurasi halaman, manajemen izin, alur kerja, dan ekstensi plugin. Sistem ini biasanya berubah seiring waktu: bidang perlu disesuaikan, halaman perlu dioptimalkan, izin perlu didefinisikan ulang, dan alur kerja persetujuan serta notifikasi perlu diperbarui seiring perubahan bisnis.

NocoBase sangat cocok untuk sistem jangka panjang ini, sementara Hermes Agent selanjutnya dapat berpartisipasi dalam pembangunan, konfigurasi, dan pemeliharaan sistem.

Dalam hal kemampuan AI, NocoBase sudah menyediakan AI Employees, AI Skills, CLI, MCP, dan dukungan terkait. AI Employees dapat bertindak sebagai asisten cerdas di dalam sistem dan membantu dengan kueri data, pembuatan konten, penanganan tugas, dan banyak lagi. AI Skills membantu Agent eksternal memahami bagaimana NocoBase dikonfigurasi dan apa yang dapat dan tidak dapat mereka operasikan. CLI memungkinkan Agent menjalankan instalasi, pembuatan, modifikasi, dan operasi lainnya melalui perintah. MCP menyediakan titik masuk yang lebih standar bagi alat AI eksternal untuk terhubung ke NocoBase.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### Apa yang dapat dilakukan dengan Hermes?

Setelah Hermes terhubung ke NocoBase, ia dapat memahami sistem konfigurasi NocoBase melalui NocoBase Skills dan menjalankan pembuatan, modifikasi, penerapan, dan operasi lainnya melalui NocoBase CLI.

**1. Buat modul bisnis dengan bahasa alami**

Misalnya, saat membuat modul manajemen perpanjangan pelanggan, Anda dapat terlebih dahulu meminta Hermes untuk mengatur struktur data untuk pelanggan, kontrak, catatan perpanjangan, tugas tindak lanjut, dan banyak lagi. Kemudian ia dapat merencanakan halaman daftar, halaman detail, dasbor, dan izin dasar.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. Bantu memelihara izin dan alur kerja**

Misalnya, jika aturannya adalah "staf penjualan hanya dapat melihat pelanggan yang mereka miliki, supervisor dapat melihat pelanggan tim mereka, dan keuangan dapat melihat jumlah kontrak," Hermes dapat mengubah deskripsi bisnis ini menjadi logika konfigurasi izin dan alur kerja yang lebih spesifik.

**3. Tangkap operasi frekuensi tinggi sebagai Skills**

Setelah menyelesaikan modul CRM, alur kerja persetujuan, atau manajemen pemasok untuk pertama kalinya, Hermes dapat menangkap praktik seperti penamaan bidang, struktur halaman, dan aturan izin. Ini kemudian dapat digunakan kembali saat membangun modul serupa nanti.

### Contoh instruksi tugas

```text
Bantu saya membuat modul manajemen perpanjangan pelanggan di NocoBase.

Ini perlu mencakup informasi pelanggan, tanggal kedaluwarsa kontrak, status perpanjangan, pemilik, catatan tindak lanjut, dan alur kerja persetujuan.

Untuk izin:
Staf penjualan hanya dapat melihat pelanggan yang mereka miliki.
Supervisor penjualan dapat melihat pelanggan tim.
Keuangan dapat melihat jumlah kontrak dan status pembayaran.
Administrator dapat melihat dan mengedit semua konten.

Untuk alur kerja:
Secara otomatis menghasilkan pengingat perpanjangan 30 hari sebelum kontrak kedaluwarsa.
Ketika jumlah perpanjangan melebihi 100.000 yuan, persetujuan supervisor dan keuangan diperlukan.
Setelah disetujui, perbarui status perpanjangan dan hasilkan tugas tindak lanjut berikutnya.

Setelah selesai, harap atur proses pembuatan modul ini menjadi Skill yang dapat digunakan kembali, sehingga nantinya dapat digunakan untuk membuat modul manajemen pemasok, manajemen kontrak, atau manajemen proyek.
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### Sumber daya terkait

Dokumentasi: [https://docs.nocobase.com/](https://docs.nocobase.com/)

Dokumentasi AI: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

Hermes Agent: [https://docs.nocobase.com/en/ai/hermes-agent](https://docs.nocobase.com/en/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

Situs web resmi: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star: 39,9k

### Perkenalan

Appsmith adalah platform kode rendah sumber terbuka yang terutama digunakan untuk membangun aplikasi internal seperti panel admin, dasbor data, backend dukungan pelanggan, alat tinjauan, dan alat TI. Ini dapat terhubung ke basis data, API, dan layanan pihak ketiga, dan dengan cepat membangun antarmuka untuk tim internal melalui komponen seret dan lepas, konfigurasi kueri, dan ekstensi JavaScript.

Appsmith menyediakan Appsmith AI, yang dapat menambahkan kueri AI, pembuatan teks, klasifikasi, peringkasan, dan kemampuan lainnya ke aplikasi. Ini juga dapat membangun interaksi AI di sekitar data internal. Appsmith juga mengembangkan Appsmith Agents untuk menghadirkan kemampuan AI ke dalam alat dan sistem yang digunakan tim setiap hari.

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### Apa yang dapat dilakukan dengan Hermes?

Appsmith membangun halaman spesifik dan antarmuka operasi data, sementara Hermes membantu tim mengubah persyaratan bahasa alami menjadi struktur halaman, logika kueri, dan aturan operasi yang lebih jelas.

1. Rencanakan antarmuka admin internal

Misalnya, saat membangun panel penanganan pengecualian pesanan, Anda dapat terlebih dahulu meminta Hermes untuk memperjelas bidang mana yang harus ditampilkan, filter mana yang diperlukan, tombol tindakan mana yang diperlukan, dan bagaimana halaman harus dibagi menjadi beberapa bagian. Appsmith kemudian dapat menangani pembangunan antarmuka spesifik dan koneksi data.

2. Atur logika kueri dan filter

Masalah umum dengan alat internal bukanlah apakah suatu halaman ada, tetapi apakah logika data di balik halaman tersebut jelas. Hermes dapat membantu tim mengubah deskripsi seperti "pesanan mana yang ingin saya lihat," "bagaimana pengecualian harus diidentifikasi," dan "catatan mana yang harus diprioritaskan" menjadi kondisi kueri dan aturan operasi.

3. Tangkap template halaman admin

Backend dukungan pelanggan, panel tinjauan, dasbor operasional, dan halaman kueri keuangan sering muncul berulang kali. Hermes dapat menangkap bidang umum, tata letak komponen, filter, dan logika operasi sebagai Skills, sehingga halaman serupa dapat digunakan kembali nanti.

### Contoh instruksi tugas

```text
Bantu saya merencanakan panel penanganan pengecualian pesanan, yang nantinya akan dibangun di Appsmith.

Halaman perlu menampilkan pesanan abnormal, nama pelanggan, jumlah pesanan, pemilik, alasan pengecualian, status pemrosesan, dan catatan komunikasi terbaru.

Filter meliputi:
Wilayah.
Jumlah pesanan.
Status pemrosesan.
Pemilik.
Jenis pengecualian.

Untuk operasi:
Staf operasional dapat memperbarui status pemrosesan.
Supervisor dapat menetapkan pemilik secara massal.
Keuangan hanya dapat melihat jumlah pesanan dan status pembayaran.

Harap atur struktur halaman, logika kueri data, dan tata letak komponen, dan tangkap sebagai template halaman alat internal yang dapat digunakan kembali.
```

### Sumber daya terkait

Dokumentasi: [https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI: [https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

Situs web resmi: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

GitHub Star: 28k

### Perkenalan

Budibase adalah platform operasi sumber terbuka yang terutama digunakan untuk membangun aplikasi internal, alur kerja otomatisasi, dan AI Agents. Ini lebih fokus pada skenario bisnis berbasis proses, seperti permintaan karyawan, penanganan persetujuan, meja layanan TI, perutean formulir, pembaruan data, dan otomatisasi operasi.

Budibase mendukung pembuatan kode, pembuatan tabel basis data, dan pembuatan alur kerja otomatisasi yang didukung oleh model bahasa besar. Budibase Agents juga sedang dikembangkan, memungkinkan tim untuk mendefinisikan perilaku Agent melalui bahasa alami dan menghubungkannya ke data internal dan API.

### Apa yang dapat dilakukan dengan Hermes?

Budibase lebih cocok untuk aplikasi berbasis formulir, persetujuan, dan alur kerja. Hermes dapat membantu tim memperjelas aturan pada tahap awal desain alur kerja dan menangkap metode penanganan permintaan frekuensi tinggi nanti.

1. Perjelas formulir dan alur kerja persetujuan

Untuk proses seperti permintaan peralatan, penggantian biaya, dukungan pelanggan, dan persetujuan kontrak, Hermes pertama-tama dapat membantu tim memecah bidang, node persetujuan, kondisi pemicu, dan aturan notifikasi. Budibase kemudian dapat menangani pembangunan aplikasi yang sebenarnya.

2. Hasilkan template penanganan alur kerja

Banyak permintaan internal mengikuti pola penanganan tetap. Hermes dapat mengatur alur kerja seperti "karyawan mengirimkan permintaan, supervisor menyetujuinya, departemen terkait menanganinya, status diperbarui, dan pemohon diberitahu" menjadi template untuk digunakan kembali dengan cepat nanti.

3. Tangkap aturan operasi

Aplikasi berbasis alur kerja sering kali perlu berubah seiring perubahan aturan organisasi. Hermes dapat merekam urutan persetujuan, metode penanganan pengecualian, tanggung jawab peran, dan aturan notifikasi, mengubahnya menjadi Skills yang dapat digunakan kembali.

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### Contoh instruksi tugas

```text
Bantu saya merancang proses permintaan peralatan karyawan, yang nantinya akan dibangun di Budibase.

Prosesnya meliputi:
Karyawan mengirimkan permintaan peralatan.
Supervisor menyetujuinya.
TI mengonfirmasi inventaris.
Setelah disetujui, status peralatan diperbarui.
Sistem memberi tahu pemohon untuk mengambil peralatan.

Bidang formulir meliputi:
Pemohon.
Departemen.
Jenis peralatan.
Deskripsi tujuan.
Perkiraan waktu pengambilan.
Status persetujuan.
Penangan.

Harap atur bidang formulir, node persetujuan, transisi status, dan aturan notifikasi, dan tangkap proses permintaan peralatan ini sebagai Skill yang dapat digunakan kembali.
```

### Sumber daya terkait

Dokumentasi: [https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI: [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

Situs web resmi: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star: 35,9k

### Perkenalan

Directus adalah API waktu nyata dan backend aplikasi untuk mengelola konten basis data SQL. Ini dapat menghasilkan REST / GraphQL API dan antarmuka admin di atas basis data yang ada. Ini mendukung PostgreSQL, MySQL, SQLite, OracleDB, MariaDB, MS SQL, dan basis data lainnya, serta penerapan lokal, penerapan pribadi, dan layanan cloud.

Dalam hal kemampuan AI, Directus menyediakan Directus MCP, yang memungkinkan alat AI seperti Claude dan ChatGPT untuk membaca, membuat, dan mengelola data Directus. Directus MCP mengikuti sistem izin yang ada, sehingga tindakan akses dan modifikasi AI perlu melalui lapisan autentikasi dan otorisasi yang sama.

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### Apa yang dapat dilakukan dengan Hermes?

Directus lebih fokus pada backend data dan manajemen API. Ketika Hermes digunakan dengan Directus, fokusnya bukan pada pembuatan halaman, tetapi membantu tim memahami struktur data, melakukan kueri data bisnis, dan menangkap tindakan manajemen data umum.

1. Jelaskan struktur data

Untuk basis data yang ada, pengguna bisnis sering tidak memahami bagaimana bidang berhubungan satu sama lain. Hermes dapat membantu mengatur koleksi, bidang, hubungan, dan batasan izin, membuat struktur data lebih mudah dipahami.

2. Bantu dengan kueri dan pengaturan data

Misalnya, saat melakukan kueri pemasok, kontrak, pembayaran, status konten, catatan pelanggan, dan informasi serupa, Hermes dapat mengubah persyaratan bahasa alami menjadi logika kueri data yang lebih spesifik.

3. Tangkap tindakan manajemen data

Tindakan seperti tinjauan konten, pemeliharaan profil pemasok, pengaturan data pelanggan, dan pemeriksaan status kontrak sering berulang. Hermes dapat mengatur proses operasi data ini menjadi Skills, sehingga dapat dieksekusi dengan aturan yang sama nanti.

### Contoh instruksi tugas

```text
Bantu saya mengatur struktur data pemasok di Directus.

Ini perlu membedakan:
Informasi dasar pemasok.
Kontak.
Catatan kontrak.
Status pembayaran.
Status kerja sama.
Catatan komunikasi terbaru.

Harap jelaskan bagaimana koleksi ini harus dihubungkan dan atur proses pemeriksaan status pemasok.

Nanti, saya berharap dapat menggunakan bahasa alami untuk melakukan kueri:
Kontrak pemasok mana yang akan segera kedaluwarsa.
Pemasok mana yang memiliki status pembayaran tidak normal.
Pemasok mana yang belum memperbarui catatan komunikasi selama lebih dari 30 hari.

Harap tangkap metode pengaturan data dan kueri ini sebagai Skill yang dapat digunakan kembali.
```

### Sumber daya terkait

Dokumentasi: [https://directus.io/docs](https://directus.io/docs)

Directus MCP: [https://directus.io/mcp](https://directus.io/mcp)

Dokumentasi MCP: [https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

Situs web resmi: [https://baserow.io/](https://baserow.io/)

GitHub: [https://github.com/baserow/baserow](https://github.com/baserow/baserow)

GitHub Star: 4,9k

### Perkenalan

Baserow adalah platform tanpa kode sumber terbuka yang dapat digunakan untuk membangun basis data, aplikasi, otomatisasi, dan AI Agents. Ini sering dilihat sebagai alternatif sumber terbuka untuk Airtable. Ini mendukung penerapan cloud dan dihosting sendiri, dan cocok untuk mengelola data terstruktur dan aplikasi bisnis ringan.

Baserow 2.0 memperkenalkan asisten AI Kuma, yang dapat membuat basis data, menulis formula, dan membangun otomatisasi dengan bahasa alami. Ini juga menyediakan bidang AI, pembangun otomatisasi, pencarian ruang kerja, dan kemampuan lainnya.

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### Apa yang dapat dilakukan dengan Hermes?

Baserow lebih cocok untuk membangun aplikasi ringan mulai dari data berbasis tabel. Ketika digunakan dengan Baserow, Hermes dapat membantu tim beralih dari "mengatur tabel" menjadi "menangkap kebiasaan manajemen data."

1. Buat struktur tabel dan tampilan

Untuk daftar pelanggan, daftar pemasok, rencana konten, kemajuan proyek, catatan inventaris, dan kasus penggunaan serupa, Hermes pertama-tama dapat merencanakan struktur tabel, bidang, dan tampilan berdasarkan deskripsi bisnis. Baserow kemudian menangani manajemen data.

2. Atur filter dan aturan klasifikasi

Aplikasi ringan sering bergantung pada tampilan yang berbeda. Hermes dapat mengubah aturan bisnis seperti "menunggu tinjauan," "dalam kerja sama," "akan segera kedaluwarsa," dan "prioritas tinggi" menjadi kondisi filter dan pengaturan tampilan.

3. Tangkap template aplikasi ringan

Jika tim sering menggunakan Baserow untuk mengelola data bisnis serupa, Hermes dapat menangkap struktur bidang, aturan tampilan, dan kategori status sebagai Skills, kemudian menggunakannya kembali saat membuat tabel baru nanti.

### Contoh instruksi tugas

```text
Bantu saya merencanakan tabel manajemen pemasok, yang nantinya akan dibuat di Baserow.

Bidang meliputi:
Nama pemasok.
Kontak.
Informasi kontak.
Status kerja sama.
Tanggal kedaluwarsa kontrak.
Status pembayaran.
Pemilik.
Waktu komunikasi terbaru.
Catatan.

Tiga tampilan perlu dibuat:
Pemasok menunggu tinjauan.
Pemasok dalam kerja sama.
Pemasok dengan kontrak yang akan segera kedaluwarsa.

Harap rancang kondisi filter untuk setiap tampilan dan tangkap struktur tabel pemasok dan aturan tampilan ini sebagai Skill yang dapat digunakan kembali, sehingga akan lebih mudah untuk membuat tabel pelanggan, tabel saluran, atau tabel mitra nanti.
```

### Sumber daya terkait

Dokumentasi: [https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI: [https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## FAQ

### 1. Jika platform ini sudah memiliki kemampuan AI, mengapa Hermes masih diperlukan?

AI bawaan di platform ini biasanya lebih baik dalam menyelesaikan tugas dalam produk tertentu, seperti menghasilkan halaman, SQL, logika formulir, atau konfigurasi komponen.

Nilai Hermes terletak pada hosting sendiri, memori jangka panjang, dan akumulasi Skill. Ini lebih cocok untuk mengingat aturan bisnis, kebiasaan izin, dan metode konfigurasi sistem di seluruh tugas dan percakapan.

### 2. Platform alat internal mana yang paling cocok dengan Hermes?

Platform yang lebih cocok untuk Hermes adalah platform sistem bisnis yang berjalan lama yang memerlukan pemeliharaan berkelanjutan, seperti NocoBase, Budibase, Appsmith, Directus, dan Baserow.

Di antaranya, NocoBase lebih cocok untuk memelihara sistem bisnis yang lengkap. Appsmith lebih cocok untuk antarmuka internal dan panel data. Budibase lebih cocok untuk formulir dan alur kerja. Directus dan Baserow lebih cocok untuk skenario manajemen data.

### 3. Tim seperti apa yang cocok untuk Hermes Agent?

Hermes lebih cocok untuk tim yang sudah menggunakan alat yang dihosting sendiri, menghargai keamanan data, perlu memelihara sistem bisnis dalam jangka panjang, dan ingin AI mengingat kebiasaan konfigurasi dan menangkap pengalaman operasional.

### 4. Mengapa AI Agents yang dihosting sendiri penting untuk alat internal perusahaan?

Karena alat internal biasanya berisi data bisnis sensitif, seperti pelanggan, pesanan, kontrak, persetujuan, karyawan, dan keuangan.

Ketika AI Agent perlu mengakses data ini dan berpartisipasi dalam operasi sistem, tim akan lebih memperhatikan di mana data disimpan, bagaimana izin dikontrol, bagaimana operasi ditinjau, dan bagaimana memori jangka panjang dikelola. Agent yang dihosting sendiri lebih cocok untuk tim yang membutuhkan kontrol yang lebih kuat.

Ada banyak produk AI Agent, tetapi jika tim Anda sudah menggunakan platform alat internal sumber terbuka dan ingin membawa AI Agents ke dalam sistem internal perusahaan dengan cara yang lebih aman dan terkontrol, Hermes Agent layak dicoba. Jika artikel ini bermanfaat, jangan ragu untuk membagikannya dengan teman-teman yang mengikuti AI Agents yang dihosting sendiri dan pembuatan alat internal.


**Bacaan terkait**

* [OpenClaw dan 5 Alat Sumber Terbuka untuk Memantau Alur Kerja Bisnis](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Alat Sumber Terbuka Apa yang Bekerja Baik dengan OpenCode? 5 Proyek untuk Dicoba](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Membangun Alat Internal dengan Codex: 6 Proyek Sumber Terbuka untuk Pengembang](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Setelah Claude Code: 6 Alat Sumber Terbuka yang Harus Anda Ketahui](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [10 Alat AI dan Tanpa Kode Sumber Terbuka Teratas untuk Pengembangan Perangkat Lunak Perusahaan](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Platform AI Agent Sumber Terbuka untuk Membangun Alat Internal](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [CRM Hosting Sendiri Terbaik Tingkat Perusahaan dengan Dukungan RBAC, AI, dan Open API](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Alat Sumber Terbuka Terbaik untuk Mengganti Middleware Integrasi Kustom](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Ganti Excel dengan NocoBase atau Airtable? Perbandingan Biaya per Biaya](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Cara Membangun Aplikasi Web dengan Cepat dari Data Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Bukan Hanya PostgreSQL: Membandingkan 5 Platform Tanpa Kode/Rendah Kode dengan Dukungan Basis Data Eksternal](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Panduan Pemilihan Alat Manajemen Proyek Sumber Terbuka, Edisi 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
