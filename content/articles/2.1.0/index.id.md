---
title: "Mengumumkan NocoBase 2.1.0"
description: "NocoBase 2.1 memperkenalkan CLI baru bagi manusia dan AI Agent untuk terhubung dan mengelola aplikasi. Rilis ini juga meningkatkan pembangunan AI, Skills, pengembangan plugin AI, AI Employees, kolaborasi multi-aplikasi, manajemen versi, alur kerja, dan kompatibilitas 2.0."
---

NocoBase 2.1 adalah peningkatan besar pada **kemampuan AI, multi-aplikasi, dan adaptasi 2.0**. Kami telah memperkenalkan NocoBase CLI, yang memudahkan baik manusia maupun AI Agent untuk terhubung dan mengelola aplikasi NocoBase. Mulai dari pembuatan aplikasi dan pembangunan berbantuan AI hingga AI Employees yang ditingkatkan dan plugin pengembangan AI, ini mencakup alur lengkap dari orientasi lingkungan hingga pembangunan sistem dan kolaborasi bisnis. Kami juga telah meningkatkan kemampuan multi-aplikasi untuk membuat interaksi dan kolaborasi antar aplikasi menjadi lebih mudah. Pada saat yang sama, kami telah menambahkan kontrol versi dan terus melengkapi secara substansial dukungan halaman 2.0 dan kemampuan inti — lebih banyak blok, bidang, tindakan, dan plugin sekarang mendukung 2.0.

## Apa yang Baru

### Memperkenalkan NocoBase CLI

Dalam rilis ini, NocoBase CLI (`nb`) adalah titik masuk inti bagi pengguna biasa dan AI Agent untuk terhubung ke NocoBase.

CLI digunakan untuk menginisialisasi, menghubungkan, dan mengelola aplikasi NocoBase di ruang kerja lokal. Ini mencakup beberapa skenario:

- Menginstal aplikasi NocoBase baru melalui Docker, npm, atau Git, lalu menyimpannya sebagai env CLI
- Terhubung ke aplikasi NocoBase yang sudah ada dan menyimpannya sebagai env CLI
- Menginstal, membuat, dan mengaktifkan plugin
- Mengoperasikan, mencadangkan, dan mengelola aplikasi NocoBase

![Panduan visual NocoBase CLI](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Baik Anda ingin menyematkan AI ke dalam sistem yang sudah ada atau membuat aplikasi baru dari awal, Anda dapat menangani inisialisasi dan manajemen berkelanjutan melalui CLI.

Untuk tim, CLI menyediakan titik masuk standar yang dapat dipahami dan dioperasikan oleh AI Agent — inisialisasi lingkungan, konfigurasi koneksi, dan manajemen runtime semuanya berbagi alur yang sama.

Rilis resmi juga menambahkan serangkaian perintah terkait operasi:

- `nb api`: Memanggil API NocoBase melalui CLI.
- `nb app`: Mengelola status runtime aplikasi: mulai, hentikan, mulai ulang, log, dan tingkatkan.
- `nb backup`: Membuat cadangan dan mengunduhnya secara lokal, atau memulihkan file cadangan lokal ke env target.
- `nb config`: Mengelola konfigurasi default CLI.
- `nb db`: Mengelola database bawaan dari env yang dipilih.
- `nb env`: Mengelola lingkungan proyek NocoBase, env saat ini, status, detail, dan perintah runtime.
- `nb license`: Mengelola lisensi komersial dan plugin berlisensi.
- `nb plugin`: Mengelola plugin dari env NocoBase yang dipilih.
- `nb scaffold`: Menghasilkan kerangka pengembangan plugin NocoBase.
- `nb self`: Memeriksa atau memperbarui NocoBase CLI itu sendiri.
- `nb source`: Mengelola proyek sumber lokal: unduh, kembangkan, bangun, dan uji.

Dokumentasi terkait:

- [Instal NocoBase dengan CLI](https://docs.nocobase.com/quickstart/installation/cli)
- [Panduan integrasi AI Agent](https://docs.nocobase.com/ai/quick-start)
- [Referensi perintah NocoBase CLI](https://docs.nocobase.com/api/cli/)

### Pembangunan berbantuan AI: ganti konfigurasi manual dengan percakapan

Pembangunan berbantuan AI adalah salah satu pengalaman inti dalam rilis ini. Anda dapat mendeskripsikan kebutuhan bisnis Anda dalam bahasa alami, dan AI membantu menyelesaikan pemodelan data, konfigurasi halaman, pengaturan izin, dan orkestrasi alur kerja.

Dibandingkan dengan pembangunan low-code tradisional, pembangunan berbantuan AI memiliki beberapa keunggulan yang jelas:

- Hambatan masuk yang lebih rendah — Anda tidak perlu terbiasa dengan setiap konsep konfigurasi terlebih dahulu
- Jalur yang lebih pendek dari deskripsi kebutuhan ke prototipe yang berfungsi
- Data, UI, dan konfigurasi alur kerja dapat diselesaikan oleh AI secara berkelanjutan

Contohnya: "rancang model data CRM untuk saya", "buat halaman manajemen pelanggan untuk saya", atau "orkestrasi alur kerja yang secara otomatis mengurangi stok setelah pesanan dibuat" — semua ini dapat ditangani oleh AI dalam lingkup kemampuan NocoBase.

Dokumentasi terkait:

- [Mulai cepat pembangunan berbantuan AI](https://docs.nocobase.com/ai-builder/)

### NocoBase Skills mencakup alur pembangunan penuh

Untuk membantu AI benar-benar memahami sistem konfigurasi NocoBase, rilis ini menyertakan serangkaian paket pengetahuan domain yang dapat diinstal ke AI Agent — NocoBase Skills.

Skills adalah pembungkus pengetahuan dan operasi standar yang diatur di sekitar domain kemampuan utama NocoBase, membantu AI lebih akurat memahami model objek, struktur konfigurasi, dan batasan eksekusi.

Kami saat ini menyediakan 8 Skills yang mencakup alur pembangunan penuh:

- [Manajemen lingkungan](https://docs.nocobase.com/ai-builder/env-bootstrap) — pemeriksaan lingkungan, instal/deploy, upgrade, dan pemecahan masalah
- [Pemodelan data](https://docs.nocobase.com/ai-builder/data-modeling) — buat dan kelola tabel, bidang, dan relasi
- [Pembangunan UI](https://docs.nocobase.com/ai-builder/ui-builder) — buat dan edit halaman, blok, popup, dan reaksi interaksi
- [Manajemen alur kerja](https://docs.nocobase.com/ai-builder/workflow) — buat, edit, aktifkan, dan diagnosa alur kerja
- [Konfigurasi izin](https://docs.nocobase.com/ai-builder/acl) — kelola peran, kebijakan izin, pengikatan pengguna, dan penilaian risiko
- [Solusi](https://docs.nocobase.com/ai-builder/dsl-reconciler) — bangun massal seluruh sistem bisnis dari YAML (masih dalam beta, dengan stabilitas terbatas)
- [Manajemen plugin](https://docs.nocobase.com/ai-builder/plugin-manage) — lihat, aktifkan, dan nonaktifkan plugin
- [Manajemen publikasi](https://docs.nocobase.com/ai-builder/publish) — publikasi lintas lingkungan, pencadangan/pemulihan, dan migrasi

Dengan Skills, AI dapat lebih akurat memahami sistem konfigurasi NocoBase dan memberikan bantuan yang lebih cerdas saat membangun dan mengelola sistem.

**Catatan**: NocoBase Skills masih terus ditingkatkan secara aktif. NocoBase Skills juga diinstal secara otomatis saat Anda menginstal dan menginisialisasi NocoBase CLI, jadi dalam banyak kasus Anda tidak perlu menginstalnya secara terpisah.

Dokumentasi terkait:

- [NocoBase Skills](https://github.com/nocobase/skills)

### Plugin pengembangan AI

Rilis ini mengisi kemampuan dasar yang diperlukan untuk pengembangan plugin AI, sehingga AI dapat berpartisipasi tidak hanya dalam pembangunan aplikasi tetapi juga dalam pengembangan plugin kustom.

Ini terlihat dalam tiga area utama:

- Pipeline build `rsbuild/rspack` yang terpadu, menggabungkan pengembangan plugin dan sistem build frontend
- Kemampuan `client-v2` dan sistem perutean `/v/` yang ditujukan untuk pengembangan AI, mempersiapkan pengembangan plugin klien generasi berikutnya
- Skills pengembangan plugin AI yang membantu AI lebih memahami struktur plugin, organisasi kode, dan pola implementasi

Persiapan seputar `client-v2` meliputi:

- `@nocobase/app` mengekspos entri `client-v2`
- Kernel mengirimkan paket `@nocobase/client-v2` dengan komponen dasar, utilitas, dan definisi tipe
- Setiap plugin mendapatkan direktori `/src/client-v2`
- Rute `/v/` baru ditambahkan — masih terus ditingkatkan secara aktif, tersedia untuk pengadopsi awal
- Kernel secara bertahap bermigrasi ke V2
- Plugin secara bertahap bermigrasi ke V2

Pipeline build yang terpadu menurunkan biaya pengembangan dan debugging plugin frontend. Peluncuran bertahap `client-v2` juga memberi AI struktur target yang lebih stabil untuk menghasilkan dan memelihara kode plugin.

Dalam praktiknya: Anda dapat mendeskripsikan kebutuhan plugin dalam bahasa alami, dan AI membantu menghasilkan kode frontend dan backend, tabel data, API, konfigurasi izin, dan konten i18n.

**Catatan**: Pengembangan plugin AI hanya untuk plugin baru bergaya `client-v2`. Kami akan menindaklanjuti dengan dokumentasi migrasi dan Skills untuk memindahkan plugin dari `client-v1` ke `client-v2`, untuk membantu Anda membawa plugin yang ada ke dalam sistem baru.

Dokumentasi terkait:

- [Mulai cepat plugin pengembangan AI](https://docs.nocobase.com/ai-dev/)
- [Pengembangan plugin](https://docs.nocobase.com/plugin-development/)

### Peningkatan AI Employees

Pembangunan berbantuan AI menjawab "bagaimana cara menggunakan AI untuk membangun sistem"; AI Employees menjawab "bagaimana cara membiarkan AI bekerja di dalam sistem untuk memecahkan masalah bisnis yang konkret".

AI Employees sudah ada di rilis sebelumnya, tetapi dalam rilis ini kemampuan terkait telah ditingkatkan dan kernel AI telah dilengkapi:

- [Dukungan MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Atlas AI Employee baru](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), berperan sebagai pemimpin tim dan mengirim AI Employee lain untuk menyelesaikan tugas berdasarkan niat pengguna
- [Node alur kerja AI Employee](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Alat pencarian web berbasis LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Alat kueri agregasi baru dan alat pembuatan laporan](https://docs.nocobase.com/ai-employees/scenarios/business-report) untuk menghasilkan laporan analisis bisnis
- [Insinyur lokalisasi baru Lina](https://docs.nocobase.com/ai-employees/built-in/lina), AI Employee bawaan dari plugin lokalisasi yang digunakan untuk terjemahan lokalisasi sistem, mendukung cakupan terjemahan inkremental, terpilih, dan penuh

Peningkatan ini membawa kemampuan ekstensibilitas, orkestrasi, dan eksekusi AI Employees di dalam sistem bisnis ke tingkat berikutnya. AI Employees dapat memahami konteks bisnis saat ini, memanggil skill untuk menjalankan tugas tertentu, berpartisipasi dalam alur kerja otomatis, dan menggabungkan informasi eksternal untuk memberikan analisis dan keluaran.

Rilis resmi juga menambahkan dukungan bagi AI Employees untuk memuat file dari bidang lampiran alur kerja dan untuk menangani beberapa percakapan secara paralel, lebih lanjut meningkatkan kegunaan AI Employees dalam proses bisnis nyata.

Dokumentasi terkait:

- [AI Employees](https://docs.nocobase.com/ai-employees/)
- [Lina: Insinyur lokalisasi](https://docs.nocobase.com/ai-employees/built-in/lina)
- [Terjemahkan istilah lokalisasi dengan Lina dan model lokal HY-MT1.5-1.8B](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)

### Kontrol versi

Kontrol versi membantu Anda mengelola iterasi versi dan riwayat perubahan aplikasi dengan lebih baik. Anda dapat membuat, melihat, dan memulihkan berbagai versi aplikasi, sehingga memudahkan untuk mengganti versi dan memulihkan dari masalah selama pengembangan dan operasi. **Catatan: Fitur ini memerlukan edisi Professional atau lebih tinggi.**

![](https://static-docs.nocobase.com/20260526220510.png)

Dokumentasi terkait:

- [Kontrol versi](https://docs.nocobase.com/ops-management/version-control/)
- [Manajer cadangan](https://docs.nocobase.com/ops-management/backup-manager/)

### Peningkatan multi-aplikasi

Dalam rilis ini, kami telah melakukan beberapa peningkatan penting pada penerapan multi-aplikasi, terutama di tiga area:

- [Blok aplikasi baru dan pemilih aplikasi](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher), yang memungkinkan Anda menampilkan titik masuk ke sub-aplikasi lain di halaman, memudahkan pengguna untuk beralih antara aplikasi utama dan sub-aplikasi.

![](https://static-docs.nocobase.com/202605271403304.png)

- [Single sign-on aplikasi baru](https://docs.nocobase.com/multi-app/multi-app/app-sso). Saat pengguna masuk ke sub-aplikasi dari aplikasi utama, atau beralih antar sub-aplikasi, sistem akan mencoba masuk secara otomatis ke sub-aplikasi target menggunakan pengguna yang saat ini masuk. Pengguna tidak perlu lagi memasukkan kredensial mereka di setiap sub-aplikasi.

![](https://static-docs.nocobase.com/202605271406542.png)

- [Memanggil API sub-aplikasi](https://docs.nocobase.com/multi-app/multi-app/sub-app-api). Dalam skenario multi-aplikasi, setiap sub-aplikasi memiliki API independennya sendiri, dibedakan oleh prefiks jalur, parameter, dan sebagainya, sehingga memudahkan untuk memanggil API sub-aplikasi.

Peningkatan ini sangat praktis bagi pengguna yang menjalankan penerapan multi-aplikasi, membuatnya lebih mudah untuk bertukar data dan beroperasi di beberapa aplikasi dan meningkatkan efisiensi kolaborasi keseluruhan sistem multi-aplikasi.

Dokumentasi terkait:

- [Blok aplikasi dan pemilih aplikasi](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher)
- [Single sign-on aplikasi](https://docs.nocobase.com/multi-app/multi-app/app-sso)
- [Memanggil API sub-aplikasi](https://docs.nocobase.com/multi-app/multi-app/sub-app-api)

### Peningkatan alur kerja

Rilis ini meningkatkan **kemampuan kontrol dan observabilitas** alur kerja:

- Menambahkan kontrol waktu tunggu — alur kerja yang berjalan terlalu lama akan dihentikan secara otomatis (sub-alur juga mendukung konfigurasi waktu tunggu)
- Menambahkan bidang dibuat-oleh dan diperbarui-oleh
- Menambahkan bidang log ke pekerjaan node, memudahkan untuk melihat log node saat debugging
- Pemicu Webhook (mode sinkron) mengembalikan status respons 408 saat waktu tunggu habis

Dokumentasi terkait:

- [Alur kerja](https://docs.nocobase.com/workflow/)

### Bidang tanda tangan tulisan tangan

Menambahkan bidang tanda tangan tulisan tangan yang memungkinkan Anda menggambar dan menyimpan tanda tangan dalam formulir, cocok untuk persetujuan, lembar konfirmasi, tanda terima, dan skenario serupa.

Dokumentasi terkait:

- [Bidang tanda tangan tulisan tangan](https://docs.nocobase.com/data-sources/field-signature/)

### Tindakan JS Item

Menambahkan tindakan JS Item, yang memungkinkan Anda menjalankan logika kustom dalam suatu tindakan dengan menulis JS, bekerja bersama dengan alur peristiwa untuk memenuhi kebutuhan interaksi yang lebih fleksibel.

Dokumentasi terkait:

- [Tindakan JS Item](https://docs.nocobase.com/interface-builder/actions/types/js-item)

### Adaptasi 2.0 dan fitur baru

Di luar AI, rilis ini terus memigrasikan modul fitur utama ke 2.0, sambil juga meluncurkan fitur baru untuk skenario bisnis dunia nyata.

Fitur baru

- [Bidang tanda tangan tulisan tangan](https://docs.nocobase.com/data-sources/field-signature/)
- [Tindakan JS Item](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Adaptasi 2.0

- [Permintaan kustom](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Blok filter pohon](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Blok kalender](https://docs.nocobase.com/data-sources/calendar/)
- [Blok Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
- [Blok Gantt](https://docs.nocobase.com/plugins/@nocobase/plugin-gantt)
- [Blok daftar](https://docs.nocobase.com/interface-builder/blocks/data-blocks/list)
- [Blok kartu grid](https://docs.nocobase.com/interface-builder/blocks/data-blocks/grid-card)
- [Blok peta](https://docs.nocobase.com/plugins/@nocobase/plugin-map)
- [Blok Markdown](https://docs.nocobase.com/interface-builder/blocks/other-blocks/markdown)
- [Blok iframe](https://docs.nocobase.com/integration/embed)
- [Blok bagan / Visualisasi data](https://docs.nocobase.com/data-visualization)

## Dokumentasi multibahasa

- Menambahkan dokumentasi bahasa Indonesia dan Vietnam
