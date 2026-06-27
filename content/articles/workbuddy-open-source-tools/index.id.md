---
title: "6 Alat Sumber Terbuka untuk Digunakan dengan WorkBuddy"
description: "Jelajahi enam alat sumber terbuka, termasuk NocoBase, Activepieces, dan Twenty, dan pelajari cara kerjanya dengan WorkBuddy untuk menghubungkan sistem bisnis, alur kerja otomatisasi, CRM, manajemen proyek, API data, dan analitik BI."
---

## Apa itu WorkBuddy?

WorkBuddy adalah ruang kerja AI untuk tugas-tugas di tempat kerja yang diluncurkan oleh Tencent. Ini terutama dirancang untuk pekerjaan kantor perusahaan, pemrosesan file, analisis data, dan penanganan tugas multi-langkah.![WorkBuddy-8xxz2q.png](https://static-docs.nocobase.com/WorkBuddy-8xxz2q.png)

Dibandingkan dengan alat seperti OpenClaw, Claude Code, dan Codex, WorkBuddy memiliki fokus yang berbeda. OpenClaw menekankan kemampuan Agent terbuka dan ekosistem keterampilan lintas platform. Claude Code dan Codex lebih cocok untuk pembuatan kode, kolaborasi pengembangan, dan tugas-tugas teknik. WorkBuddy lebih fokus pada skenario tempat kerja. Ini dapat terhubung ke alat komunikasi dan kolaborasi umum seperti WeChat, QQ, WeCom, Feishu, dan DingTalk, memungkinkan pengguna untuk memulai tugas dari titik masuk kerja yang sudah dikenal.

Jika sebuah tim ingin terhubung lebih dalam dengan sistem bisnis perusahaan dan alur kerja internal, WorkBuddy juga dapat berfungsi sebagai titik masuk tugas AI dan lapisan orkestrasi. WorkBuddy menerima instruksi, memecah tugas, dan mengembalikan hasil. Alat sumber terbuka menyediakan sistem bisnis yang mendasarinya, alur kerja otomatisasi, CRM, manajemen proyek, API data, dan kemampuan analitik BI.

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan tanpa kode/rendah kode bertenaga AI yang paling dapat diperluas untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Ini sepenuhnya di-host sendiri, berbasis plugin, dan ramah pengembang. →[ Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---



Artikel ini memperkenalkan beberapa alat sumber terbuka yang bekerja dengan baik dengan WorkBuddy. Kami akan melihat kemampuan apa yang dapat mereka berikan untuk perusahaan dan skenario umum apa yang dapat mereka cakup jika digabungkan dengan WorkBuddy.

## 1. NocoBase: cocok untuk membangun sistem bisnis khusus yang dapat dipanggil oleh WorkBuddy

![NocoBase1-vpe2x5.png](https://static-docs.nocobase.com/NocoBase1-vpe2x5.png)

**Situs web resmi**: [https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**: 22,3k

**Dokumentasi**: [https://docs.nocobase.com/](https://docs.nocobase.com/)

**Sumber daya terkait**:

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

WorkBuddy + NocoBase: [https://docs.nocobase.com/en/ai/workbuddy](https://docs.nocobase.com/en/ai/workbuddy)

### Pengantar produk

NocoBase adalah platform pengembangan tanpa kode / rendah kode sumber terbuka bertenaga AI untuk membangun aplikasi perusahaan, alat internal, dan berbagai sistem bisnis dengan cepat. Ini mendukung penyebaran pribadi dan dibangun di atas arsitektur berbasis plugin, membuatnya cocok bagi perusahaan untuk membangun CRM, ERP, sistem persetujuan, sistem tiket, sistem inventaris, sistem manajemen proyek, backend operasi, dan sistem lainnya berdasarkan kebutuhan bisnis mereka sendiri.

![NocoBase2-t4x1fo.png](https://static-docs.nocobase.com/NocoBase2-t4x1fo.png)

Untuk tim yang ingin menghubungkan WorkBuddy ke alat internal, NocoBase lebih cocok sebagai lapisan aplikasi bisnis. Ini menyediakan struktur data yang stabil, batasan izin, aturan proses, dan kemampuan sistem yang dapat dipanggil.

NocoBase juga merancang kemampuan AI-nya di sekitar sistem bisnis nyata. Ini mendukung AI Employees, AI Skills, CLI, MCP, dan banyak lagi. AI Employees dapat bertindak sebagai asisten cerdas di dalam sistem dan membantu dengan kueri data, pembuatan konten, penanganan tugas, dan pekerjaan lainnya. AI Skills membantu Agen eksternal memahami bagaimana NocoBase dikonfigurasi dan apa yang dapat dan tidak dapat mereka operasikan. CLI memungkinkan Agen menjalankan operasi instalasi, pembuatan, modifikasi, dan lainnya melalui perintah. MCP menyediakan titik masuk yang lebih standar bagi alat AI eksternal untuk terhubung ke NocoBase.

![NocoBase3-ejtyuu.png](https://static-docs.nocobase.com/NocoBase3-ejtyuu.png)

### Keunggulan inti

* **Didorong oleh model data**: NocoBase mendukung pendefinisian tabel data, bidang, dan hubungan terlebih dahulu, kemudian membangun halaman dan interaksi. Ini membuatnya lebih cocok untuk sistem bisnis yang kompleks daripada pengumpulan formulir sederhana.
* **Cocok untuk penyebaran pribadi**: Perusahaan dapat menyebarkan sistem di server mereka sendiri, membuatnya lebih cocok untuk sistem internal dengan persyaratan keamanan data, kontrol izin, dan pemeliharaan jangka panjang.
* **Kemampuan izin dan alur kerja yang lengkap**: Ini mendukung izin peran, izin bidang, izin data, dan izin operasi. Alur kerja juga dapat menangani persetujuan, notifikasi, pembaruan data, Webhooks, permintaan HTTP, dan proses lainnya.
* **Arsitektur plugin yang fleksibel**: NocoBase menggunakan arsitektur mikrokernel berbasis plugin. Fitur dapat diperluas melalui plugin, membuatnya cocok untuk perusahaan yang perlu menyesuaikan logika bisnis di luar kemampuan standar.
* **Kemampuan AI lebih dekat ke sistem bisnis**: NocoBase mendukung AI Employees, AI Skills, basis pengetahuan, dan kemampuan lainnya. Ini dapat bekerja di sekitar halaman, tabel data, rekaman yang dipilih, dan aturan bisnis.

### Kasus penggunaan umum dengan WorkBuddy

Dalam banyak skenario, WorkBuddy menerima instruksi, memecah tugas, dan mengembalikan hasil, sementara NocoBase menyediakan objek bisnis dan kemampuan sistem tertentu, seperti pelanggan, pesanan, persetujuan, tiket, inventaris, dan proyek.

![NocoBase4-ono1dm.png](https://static-docs.nocobase.com/NocoBase4-ono1dm.png)

Berikut adalah 3 skenario umum:

**CRM** Perusahaan dapat menggunakan NocoBase untuk membangun sistem manajemen pelanggan dan secara terpusat memelihara profil pelanggan, status tindak lanjut, tingkatan pelanggan, pemilik, jumlah kontrak, dan informasi lainnya. Manajer penjualan dapat mengirim instruksi langsung dari WeCom atau Feishu dan meminta WorkBuddy untuk menanyakan pelanggan yang baru ditambahkan, prospek yang sudah lama tidak ditindaklanjuti, dan pelanggan utama. NocoBase menyediakan data pelanggan, izin, dan logika pemfilteran. AI Employees atau Skills terkait selanjutnya dapat membantu mengatur prioritas tindak lanjut, menghasilkan ringkasan pelanggan, atau membuat daftar tugas penjualan.

**Manajemen tiket** Di tim purna jual atau operasi, NocoBase dapat mencatat status tiket, jenis masalah, prioritas, penangan, dan tenggat waktu. Selama pemeriksaan harian atau tinjauan mingguan, tim dapat meminta WorkBuddy untuk merangkum tiket yang terlambat, masalah prioritas tinggi, dan item yang tertunda, kemudian mengklasifikasikannya berdasarkan pemilik, urgensi, atau jenis masalah, sehingga memudahkan untuk mengonfirmasi urutan penanganan.

**Manajemen proyek** Bagi manajer, persetujuan dan kemajuan proyek seringkali tersebar di beberapa node. NocoBase dapat mengelola alur kerja persetujuan, pencapaian proyek, pemilik, risiko, dan status kemajuan. WorkBuddy dapat mengekstrak persetujuan yang tertunda, tugas yang tertunda, dan risiko proyek berdasarkan instruksi, kemudian menghasilkan ringkasan berdasarkan departemen, pemilik, atau prioritas.

## 2. Activepieces: cocok untuk menghubungkan WorkBuddy ke lebih banyak alur kerja otomatisasi

![Activepieces1-xrlqbe.png](https://static-docs.nocobase.com/Activepieces1-xrlqbe.png)

**Situs web resmi**: [https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub**: [https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**GitHub Stars**: sekitar 23k

**Dokumentasi**: [https://www.activepieces.com/docs](https://www.activepieces.com/docs)

### Pengantar produk

Activepieces adalah platform otomatisasi AI sumber terbuka untuk membangun alur kerja otomatisasi di seluruh alat dan sistem. Ini dapat menghubungkan API, Webhooks, basis data, spreadsheet, email, CRM, alat manajemen proyek, dan layanan pihak ketiga lainnya, mengubah operasi yang tersebar di berbagai alat menjadi alur kerja yang dapat digunakan kembali.

Activepieces bekerja dengan baik dengan WorkBuddy dalam skenario di mana instruksi dimulai dari titik masuk kantor dan tindakan terjadi di beberapa sistem. WorkBuddy dapat menerima permintaan dari WeCom, Feishu, DingTalk, dan titik masuk kerja lainnya. Activepieces kemudian menjalankan alur kerja yang mendasarinya, seperti membaca data, memanggil API, menyinkronkan catatan, mengirim notifikasi, atau memicu tugas tindak lanjut.

### Keunggulan inti

* **Konektivitas lintas alat yang kuat**: Cocok untuk menghubungkan API, Webhooks, basis data, dan aplikasi pihak ketiga, mengurangi pekerjaan manual yang berulang.
* **Cocok untuk mengubah otomatisasi menjadi alur kerja yang dapat digunakan kembali**: Proses seperti sinkronisasi prospek, pengiriman notifikasi, pembaruan spreadsheet, penugasan tugas, dan pengorganisasian data dapat diubah menjadi alur kerja tetap.
* **Mendukung hosting sendiri**: Perusahaan dapat menyebarkannya di lingkungan mereka sendiri, sehingga lebih mudah untuk mengelola kunci, data, dan log eksekusi.
* **Dekat dengan cara Agen AI memanggil alat**: Potongan Activepieces dapat digunakan sebagai server MCP, sehingga lebih mudah untuk digabungkan dengan alat Agen.

![Activepieces2-6x447z.png](https://static-docs.nocobase.com/Activepieces2-6x447z.png)

### Kasus penggunaan umum dengan WorkBuddy

Activepieces cocok untuk otomatisasi lintas sistem. Misalnya, formulir situs web, umpan balik dukungan pelanggan, GitHub Issues, dan prospek penjualan mungkin tersebar di berbagai alat. Tim pertama-tama dapat menggunakan Activepieces untuk mengonfigurasi alur kerja untuk membaca data, menghapus duplikat, mengklasifikasikan, dan menyinkronkan. Kemudian, dengan instruksi WorkBuddy sederhana seperti "atur prospek baru hari ini dan kelompokkan berdasarkan sumber dan prioritas," hasilnya dapat dikembalikan ke obrolan grup, dokumen, atau spreadsheet.

## 3. Twenty: cocok untuk membangun lapisan data CRM yang di-host sendiri

![Twenty-tqe8g2.png](https://static-docs.nocobase.com/Twenty-tqe8g2.png)

**Situs web resmi**: [https://twenty.com/](https://twenty.com/)

**GitHub**: [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

**GitHub Stars**: 49k

**Dokumentasi**: [https://twenty.com/developers](https://twenty.com/developers)

### Pengantar produk

Twenty adalah CRM sumber terbuka, secara resmi diposisikan sebagai alternatif sumber terbuka untuk Salesforce. Ini cocok untuk mengelola perusahaan, kontak, hubungan pelanggan, peluang, tugas, catatan, dan proses penjualan. Tim teknis juga dapat menyesuaikannya berdasarkan proses bisnis mereka sendiri.

Jika sebuah perusahaan ingin menjaga data pelanggan tetap terkendali dan menghindari ketergantungan penuh pada CRM tertutup, Twenty dapat berfungsi sebagai lapisan data pelanggan di belakang WorkBuddy. Catatan pelanggan, peluang, dan catatan tindak lanjut penjualan disimpan di Twenty, sementara WorkBuddy menerima permintaan kueri, pengaturan, dan pengingat dari titik masuk tempat kerja.

### Keunggulan inti

* **Berfokus pada skenario CRM**: Lebih cocok untuk manajemen pelanggan, tindak lanjut peluang, tugas penjualan, dan pengorganisasian data pelanggan.
* **Sumber terbuka dan dapat di-host sendiri**: Perusahaan dapat mengontrol data pelanggan, lingkungan sistem, dan penyesuaian di masa depan dengan lebih baik.
* **Cocok untuk tim teknis untuk menyesuaikan**: Objek, bidang, dan struktur bisnis dapat disesuaikan di sekitar proses penjualan perusahaan itu sendiri.
* **Objek bisnis yang lebih terfokus**: Dibandingkan dengan alat internal tujuan umum, struktur data Twenty lebih dekat dengan pekerjaan sehari-hari tim penjualan.

### Kasus penggunaan umum dengan WorkBuddy

Tim penjualan dapat memelihara profil pelanggan, informasi perusahaan, tahapan peluang, catatan tindak lanjut, dan tindakan selanjutnya di Twenty. Ketika manajer penjualan perlu melihat pelanggan utama, mereka tidak harus masuk ke backend CRM dan memfilter catatan satu per satu. Mereka dapat memulai kueri melalui WorkBuddy, seperti "temukan pelanggan bernilai tinggi yang belum ditindaklanjuti selama 7 hari," "atur peluang baru minggu ini," atau "daftarkan kesepakatan bernilai tinggi tanpa tindakan selanjutnya."

Twenty menyimpan dan mengelola data penjualan. WorkBuddy mengatur hasil kueri menjadi daftar tindak lanjut, ringkasan pengingat, atau laporan mingguan. Ini membantu tim dengan cepat mengidentifikasi pelanggan dan peluang yang perlu ditangani secara prioritas, dan mengurangi risiko bahwa data penjualan tetap terkubur di backend CRM tanpa tinjauan tepat waktu.

## 4. Plane: cocok untuk membiarkan WorkBuddy membaca status proyek dan kemajuan tugas

![Plane1-a68yj9.png](https://static-docs.nocobase.com/Plane1-a68yj9.png)

**Situs web resmi**: [https://plane.so/](https://plane.so/)

**GitHub**: [https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**GitHub Stars**: 49,8k

**Dokumentasi**: [https://docs.plane.so/](https://docs.plane.so/)

### Pengantar produk

Plane adalah alat manajemen proyek sumber terbuka untuk melacak Issues, mengelola Cycles, memelihara Roadmaps, dan menyimpan dokumen proyek serta tugas tim. Ini lebih cocok untuk tim produk, teknik, dan manajemen proyek untuk mengelola rencana rilis, status tugas, risiko proyek, dan ritme kolaborasi.

Plane juga secara resmi menekankan kolaborasi antara tim dan agen. Dalam skenario WorkBuddy, Plane dapat berfungsi sebagai lapisan kolaborasi proyek: proyek, tugas, pemilik, status, prioritas, dan rencana rilis disimpan di Plane, sementara WorkBuddy membawa status-status ini ke titik masuk kerja sehari-hari tim.

![Plane2-ojwlpm.png](https://static-docs.nocobase.com/Plane2-ojwlpm.png)

### Keunggulan inti

* **Cocok untuk kolaborasi produk dan teknik**: Dapat mengelola Issues, Cycles, Roadmaps, dokumen, dan tugas tim.
* **Status tugas yang lebih jelas**: Cocok untuk melacak prioritas, pemilik, rencana rilis, dan risiko penundaan.
* **Mendukung hosting sendiri**: Lebih cocok untuk tim yang perlu mengontrol data proyek dan informasi teknik.
* **Cocok untuk digunakan dengan Agen**: Plane sudah menekankan ruang kolaborasi untuk tim dan agen, membuatnya cocok untuk kombinasi seputar kemajuan tugas, status proyek, dan akumulasi pengetahuan.

### Kasus penggunaan umum dengan WorkBuddy

Manajer produk dapat bertanya kepada WorkBuddy di Feishu, "Masalah P0 mana dalam rilis ini yang masih terbuka?" Pemilik proyek dapat bertanya, "Tugas mana yang tertunda minggu ini, dan siapa yang menghalangi mereka?" Pimpinan teknik juga dapat meminta WorkBuddy untuk mengatur Issues prioritas tinggi berdasarkan modul.

Dalam skenario ini, Plane mencatat proyek, Issues, Roadmaps, dan informasi pemilik. WorkBuddy memulai kueri dari titik masuk tempat kerja dan mengatur hasilnya menjadi ringkasan atau pengingat. Untuk tim dengan banyak tugas, siklus rilis cepat, dan kebutuhan sinkronisasi status yang sering, kombinasi ini dapat mengurangi biaya untuk berulang kali membuka backend proyek untuk memeriksa status.

## 5. Directus: cocok untuk mengubah basis data yang ada menjadi antarmuka data yang dapat dipanggil

![Directus1-x5gl6h.png](https://static-docs.nocobase.com/Directus1-x5gl6h.png)

**Situs web resmi**: [https://directus.io/](https://directus.io/)

**GitHub**: [https://github.com/directus/directus](https://github.com/directus/directus)

**GitHub Stars**: 34,2k

**Dokumentasi**: [https://directus.io/docs](https://directus.io/docs)

### Pengantar produk

Directus adalah platform data sumber terbuka yang dapat menghasilkan antarmuka manajemen, REST API, dan GraphQL API di atas basis data SQL. Ini cocok untuk tim yang sudah memiliki basis data tetapi tidak memiliki backend yang ramah pengguna, antarmuka standar, atau lapisan akses data yang terpadu.

Banyak perusahaan tidak kekurangan data. Masalahnya adalah data tersebar di sistem lama, tabel basis data, atau beberapa aplikasi internal. Membiarkan Agen mengakses basis data secara langsung relatif berisiko, dan meminta pengguna bisnis untuk menulis SQL tidak realistis. Directus dapat menambahkan lapisan API dan manajemen izin antara basis data dan WorkBuddy, membuat data yang ada lebih mudah untuk dikueri, diatur, dan dipanggil.

### Keunggulan inti

* **Terhubung ke basis data SQL yang ada**: Cocok untuk membungkus basis data yang ada menjadi layanan data yang lebih mudah digunakan.
* **Secara otomatis menghasilkan API**: Data dapat diakses melalui REST, GraphQL, atau SDK.
* **Menyediakan antarmuka manajemen data**: Ini bukan hanya lapisan API, tetapi juga dapat digunakan sebagai backend data.
* **Cocok untuk modernisasi progresif**: Perusahaan tidak perlu membangun kembali seluruh sistem. Mereka pertama-tama dapat mengekspos tabel data utama melalui Directus.

![Directus2-9ia8ca.png](https://static-docs.nocobase.com/Directus2-9ia8ca.png)

### Kasus penggunaan umum dengan WorkBuddy

Misalnya, sebuah perusahaan mungkin sudah memiliki basis data pelanggan, basis data pesanan, tabel inventaris, atau pustaka aset konten, tetapi data tersebut tersebar di sistem lama, sehingga sulit bagi pengguna bisnis untuk melakukan kueri dengan cepat. Perusahaan pertama-tama dapat menggunakan Directus untuk menghubungkan tabel data utama, mengonfigurasi izin dan API, dan kemudian membiarkan WorkBuddy menanyakan data melalui antarmuka.

Karyawan dapat memulai permintaan dari titik masuk tempat kerja, seperti "periksa pesanan baru hari ini," "temukan produk yang inventarisnya di bawah tingkat stok aman," atau "rangkum 3 transaksi terakhir pelanggan." Directus menyediakan API dan batasan izin. WorkBuddy mengubah permintaan bahasa alami menjadi tugas kueri dan mengatur hasilnya menjadi ringkasan yang lebih mudah dibaca.

## 6. Metabase: cocok untuk membiarkan WorkBuddy membaca laporan dan metrik bisnis

![Metabase-uupms9.png](https://static-docs.nocobase.com/Metabase-uupms9.png)

**Situs web resmi**: [https://www.metabase.com/](https://www.metabase.com/)

**GitHub**: [https://github.com/metabase/metabase](https://github.com/metabase/metabase)

**GitHub Stars**: 47k

**Dokumentasi**: [https://www.metabase.com/docs](https://www.metabase.com/docs)

### Pengantar produk

Metabase adalah alat BI sumber terbuka untuk membangun dasbor data, laporan bisnis, dan analitik layanan mandiri. Ini dapat terhubung ke basis data, memungkinkan tim untuk membangun sistem metrik dan dasbor seputar data penjualan, operasi, produk, keuangan, dukungan pelanggan, dan lainnya.

Jika Directus lebih cocok untuk mengubah basis data menjadi API, Metabase lebih cocok untuk mengubah data menjadi pertanyaan bisnis dan dasbor metrik. Ketika digunakan dengan WorkBuddy, Metabase dapat berfungsi sebagai lapisan analitik data, memungkinkan manajer untuk mendapatkan metrik utama dan ringkasan bisnis melalui titik masuk tempat kerja.

### Keunggulan inti

* **Cocok untuk analisis data bisnis**: Dapat terhubung ke basis data dan membangun dasbor, bagan, dan laporan.
* **Menurunkan hambatan untuk kueri data**: Pengguna bisnis dapat melihat metrik melalui antarmuka visual dan tidak harus menulis SQL.
* **Cocok untuk tim manajemen dan operasi**: Skenario umum termasuk dasbor penjualan, analisis saluran, pertumbuhan pengguna, tren tiket, dan analisis inventaris.
* **Menyediakan kemampuan API**: Metabase menyediakan API yang dapat digunakan untuk mengotomatiskan beberapa tugas backend dan skenario kueri data.

### Kasus penggunaan umum dengan WorkBuddy

Manajer tidak harus membuka sistem BI setiap hari untuk menjelajahi beberapa dasbor, tetapi mereka biasanya perlu memahami perubahan utama dengan cepat. Misalnya, "Bagaimana perubahan pendapatan penjualan minggu ini dibandingkan dengan minggu lalu?" "Dari saluran mana pengguna terdaftar baru hari ini berasal?" "Lini produk mana yang memiliki peningkatan volume tiket tercepat?" "Halaman mana yang memiliki penurunan tingkat konversi paling jelas?" Ini membuat kombinasi Metabase dan WorkBuddy sangat cocok untuk ringkasan data bisnis.

Metabase menghubungkan basis data dan menyimpan metrik serta dasbor. WorkBuddy membawa metrik ini ke WeCom, Feishu, atau DingTalk. Pengguna dapat mengajukan pertanyaan langsung dari titik masuk tempat kerja, dan WorkBuddy dapat memanggil laporan atau antarmuka data yang relevan, kemudian mengembalikan ringkasan terstruktur.

## FAQ

### 1. Bisakah WorkBuddy terhubung langsung ke SaaS, ERP, atau CRM tradisional?

Ya, tetapi tergantung pada apakah sistem itu sendiri menyediakan API, Webhooks, plugin, MCP, atau kemampuan yang dapat dipanggil lainnya.

Banyak SaaS, ERP, dan CRM tradisional memiliki struktur data dan aturan proses yang relatif tetap. Sistem dapat digunakan, tetapi hubungan bidang, kemampuan antarmuka, batasan izin, dan catatan audit mereka mungkin tidak cocok untuk akses Agen langsung.

Untuk kueri sederhana, notifikasi, atau sinkronisasi data, sistem tradisional juga dapat dihubungkan melalui API atau platform integrasi. Tetapi jika sebuah perusahaan ingin secara fleksibel mengonfigurasi data, izin, dan alur kerja di sekitar objek seperti pelanggan, pesanan, persetujuan, tiket, inventaris, dan proyek, alat sumber terbuka atau platform yang dapat di-host sendiri biasanya lebih cocok sebagai lapisan yang menampung kemampuan ini.

### 2. Mengapa memilih alat sumber terbuka untuk digunakan dengan WorkBuddy?

Alat sumber terbuka biasanya lebih cocok untuk tim yang membutuhkan hosting sendiri, kontrol data, antarmuka terbuka, dan ekstensibilitas jangka panjang.

Perusahaan dapat lebih memahami di mana data disimpan, bagaimana izin sistem dikonfigurasi, bagaimana antarmuka dipanggil, dan bagaimana log operasi disimpan. Mereka juga dapat melakukan pengembangan sekunder atau integrasi sistem berdasarkan kebutuhan mereka sendiri. Untuk skenario yang melibatkan informasi pelanggan, data proyek, catatan pesanan, metrik bisnis, dan alur kerja internal, tingkat kontrol ini sangat penting.

WorkBuddy menangani titik masuk tempat kerja dan orkestrasi tugas. Alat sumber terbuka menampung kemampuan seperti sistem bisnis, alur kerja otomatisasi, CRM, manajemen proyek, API data, dan analitik BI. Bersama-sama, mereka menghubungkan titik masuk tempat kerja sehari-hari dengan sistem bisnis tertentu.

### 3. Jika kami ingin membangun alat internal tingkat sistem, mana yang harus kami lihat terlebih dahulu?

**NocoBase**.

Jika sebuah perusahaan ingin membangun CRM, ERP, sistem tiket, sistem persetujuan, manajemen inventaris, manajemen proyek, atau backend operasi, NocoBase lebih cocok sebagai platform alat internal tingkat sistem. Ini menggunakan arsitektur yang didorong oleh model data, membuatnya cocok untuk mendefinisikan objek bisnis seperti pelanggan, pesanan, tiket, persetujuan, inventaris, dan proyek terlebih dahulu, dan kemudian mengonfigurasi halaman, izin, alur kerja, dan plugin.

Pada saat yang sama, NocoBase telah menerbitkan dokumentasi integrasi WorkBuddy, membuatnya relevan secara langsung dengan topik ini. Untuk tim yang perlu mengelola data bisnis yang kompleks, batasan izin, dan aturan alur kerja, NocoBase menawarkan cakupan yang lebih luas daripada CRM tunggal, alat otomatisasi tunggal, atau alat BI tunggal.

### 4. Jika tujuan utamanya adalah pemantauan dasbor dan analisis data bisnis, mana yang harus kami pilih?

**Metabase**.

Metabase lebih cocok untuk menghubungkan basis data, membangun dasbor, memelihara metrik bisnis, dan menghasilkan laporan data. Skenario seperti dasbor penjualan, analisis saluran, pertumbuhan pengguna, tren tiket, perubahan inventaris, dan perubahan tingkat konversi semuanya cocok untuk Metabase.

Ketika dipasangkan dengan WorkBuddy, manajer dapat menanyakan metrik utama dari titik masuk tempat kerja, seperti "Bagaimana perubahan pendapatan penjualan minggu ini dibandingkan dengan minggu lalu?" "Dari saluran mana pengguna baru hari ini terutama berasal?" dan "Lini produk mana yang memiliki peningkatan volume tiket tercepat?" Metabase menyimpan metrik dan dasbor, sementara WorkBuddy memulai kueri dan mengembalikan ringkasan terstruktur.

### 5. Apa yang harus dilakukan perusahaan jika sudah memiliki basis data tetapi tidak memiliki titik masuk kueri yang terpadu?

Banyak perusahaan sudah memiliki basis data pelanggan, basis data pesanan, tabel inventaris, atau pustaka aset konten, tetapi data tersebut tersebar di sistem lama atau basis data internal. Ketika pengguna bisnis ingin menanyakan data, mereka sering kali harus masuk ke beberapa backend atau meminta rekan teknis untuk mengekspor data sementara.

Directus dapat menghasilkan antarmuka manajemen, REST API, dan GraphQL API di atas basis data SQL, yang setara dengan menambahkan titik masuk akses data yang lebih jelas untuk basis data yang ada. Ketika dipasangkan dengan WorkBuddy, karyawan dapat menanyakan informasi seperti "pesanan baru hari ini," "produk yang inventarisnya di bawah tingkat stok aman," dan "3 transaksi terakhir pelanggan" dari titik masuk tempat kerja.

### 6. Apakah menggunakan WorkBuddy dengan alat sumber terbuka memerlukan tim teknis?

Itu tergantung pada seberapa dalam penggunaannya.

Untuk kueri sederhana, pengingat, pengorganisasian informasi, atau ringkasan laporan, tim bisnis dapat memulai dengan kemampuan alat yang ada. Tetapi jika WorkBuddy membutuhkan integrasi yang andal dengan sistem internal, seperti memanggil API, mengonfigurasi izin, merancang alur kerja, mengelola kunci, dan menyimpan log operasi, tim TI atau pengembangan perlu dilibatkan.

Pendekatan yang lebih aman adalah memulai dengan skenario berisiko rendah dan frekuensi tinggi, seperti daftar tindak lanjut pelanggan, ringkasan kemajuan proyek, pengingat tiket yang terlambat, dasbor data bisnis, dan kueri pengecualian inventaris. Setelah alur kerja menjadi stabil, secara bertahap dapat diperluas ke operasi sistem yang lebih kompleks dan otomatisasi lintas alat.

### 7. Kapan WorkBuddy menjadi pilihan yang baik?

WorkBuddy adalah pilihan yang tepat jika sebuah tim terutama berkolaborasi melalui WeChat, QQ, WeCom, Feishu, DingTalk, dan titik masuk serupa, dan ingin menggunakan AI Agents untuk menangani tugas kantor sehari-hari seperti pengorganisasian file, analisis spreadsheet, pembuatan PPT, ringkasan rapat, dan penugasan tugas.

Jika perusahaan juga ingin lebih menghubungkan alat internal, CRM, manajemen proyek, dasbor data, alur kerja otomatisasi, dan sistem lainnya, mereka dapat menggunakan WorkBuddy sebagai titik masuk tugas, dan memasangkannya dengan alat sumber terbuka seperti NocoBase, Activepieces, dan Twenty untuk menambahkan sistem bisnis dan kemampuan data tertentu.

Jika artikel ini bermanfaat, jangan ragu untuk membagikannya dengan teman-teman yang mengikuti AI Agents.


**Bacaan terkait**

* [6 Alat AI Sumber Terbuka Teratas berdasarkan GitHub Stars untuk AI Agents yang Lebih Kuat](https://www.nocobase.com/en/blog/6-github-top-open-source-ai-tools-for-ai-agents)
* [5 Alat Internal Sumber Terbuka untuk Digunakan dengan Hermes Agent](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw dan 5 Alat Sumber Terbuka untuk Memantau Alur Kerja Bisnis](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Alat Sumber Terbuka Apa yang Bekerja Baik dengan OpenCode? 5 Proyek untuk Dicoba](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Membangun Alat Internal dengan Codex: 6 Proyek Sumber Terbuka untuk Pengembang](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Setelah Claude Code: 6 Alat Sumber Terbuka yang Harus Anda Ketahui](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [10 Alat AI dan Tanpa Kode Sumber Terbuka Teratas untuk Pengembangan Perangkat Lunak Perusahaan](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Platform Agen AI Sumber Terbuka untuk Membangun Alat Internal](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [CRM Host-Sendiri Tingkat Perusahaan Terbaik dengan Dukungan RBAC, AI, dan Open API](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Alat Sumber Terbuka Terbaik untuk Mengganti Middleware Integrasi Kustom](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Ganti Excel dengan NocoBase atau Airtable? Perbandingan Biaya per Biaya](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Cara Membangun Aplikasi Web dengan Cepat dari Data Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
