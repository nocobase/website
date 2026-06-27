---
title: "Membangun Alat Internal dengan Codex: 6 Proyek Open-Source untuk Pengembang"
description: "Jelajahi proyek open-source seperti NocoBase, Refine, dan Payload CMS yang membantu Codex membangun alat internal yang lebih stabil dan mudah dipelihara."
---

## Latar Belakang

Baru-baru ini, saya menemukan diskusi tentang AI Coding Agents di [Hacker News](https://news.ycombinator.com/item?id=47796469): **meminta AI untuk membuat aplikasi dari awal biasanya bukan cara yang paling andal untuk menggunakannya.**

![HN.png](https://static-docs.nocobase.com/HN-nb8ae5.png)

Pengembang tersebut menunjukkan bahwa jika Anda hanya memberi tahu AI, "Bantu saya membuat aplikasi," seringkali AI menghasilkan sesuatu yang **terlihat bagus pada awalnya, tetapi memiliki struktur yang tidak andal di bawahnya.**

AI sangat baik dalam meningkatkan kecepatan eksekusi, tetapi AI bekerja paling baik ketika beroperasi dalam struktur yang jelas.

Untuk alat internal perusahaan yang sesungguhnya, Anda memerlukan fondasi teknis yang andal terlebih dahulu, lalu menggunakan Coding Agent untuk meningkatkan efisiensi pengembangan.

Dalam artikel ini, kami akan fokus pada alat internal perusahaan dan merekomendasikan beberapa proyek sumber terbuka yang bekerja dengan baik dengan Codex, membantu pengembang membangun sistem dan alat internal dengan lebih efisien.

---

💬 Hei, Anda sedang membaca blog NocoBase. NocoBase adalah platform pengembangan no-code/low-code bertenaga AI yang paling dapat diperluas untuk membangun aplikasi perusahaan, alat internal, dan semua jenis sistem. Sepenuhnya di-host sendiri, berbasis plugin, dan ramah pengembang. →[ Jelajahi NocoBase di GitHub](https://github.com/nocobase/nocobase)

---

| Proyek       | Terbaik untuk                                                                             | Paling cocok untuk                                                                              |
| ------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| NocoBase     | Membangun sistem bisnis internal seperti CRM, tiket, persetujuan, dan manajemen aset      | Pengembang yang perlu dengan cepat membangun sistem bisnis yang dapat dipelihara                |
| Refine       | Membangun panel admin React, dasbor, dan aplikasi B2B                                     | Pengembang yang akrab dengan React yang menginginkan kendali penuh atas kode                    |
| Payload CMS  | Membangun backend data TypeScript / Next.js dan sistem admin                              | Pengembang yang lebih menyukai backend dan Panel Admin berbasis TypeScript                      |
| Directus     | Membuat API dan panel admin untuk database SQL yang sudah ada                              | Tim dengan database yang sudah ada yang membutuhkan panel admin dan lapisan API dengan cepat    |
| Supabase     | Membangun backend Postgres untuk alat internal                                            | Pengembang yang membutuhkan autentikasi, database, penyimpanan, fitur realtime, dan fungsi backend |
| Windmill     | Mengubah skrip menjadi alat internal, tugas, dan alur kerja                               | Tim teknis dengan banyak skrip internal dan tugas otomatisasi                                   |

## 1. NocoBase

Situs web resmi: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars: 22,4k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-nfhndl.png)

NocoBase adalah platform no-code AI sumber terbuka untuk membangun sistem internal perusahaan seperti CRM, sistem tiket, sistem persetujuan, manajemen proyek, manajemen aset, dan backend operasional.

Nilai inti NocoBase **adalah menyediakan kerangka sistem yang lengkap untuk alat internal**, termasuk model data, konfigurasi halaman, kontrol akses, alur kerja, ekstensi plugin, dan kemampuan AI. Bagi pengembang, ini lebih dari sekadar pembangun halaman seret dan lepas. Ini adalah infrastruktur sistem bisnis yang masih dapat diperluas dengan kode.

NocoBase menyediakan dokumentasi Codex resmi: [Menggunakan Codex dengan NocoBase untuk membangun dan mengembangkan](https://docs.nocobase.com/en/ai/codex)

Setelah menghubungkan Codex, Codex dapat menggunakan [NocoBase Skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills) dan [CLI](https://docs.nocobase.com/en/api/cli/) untuk memahami bagaimana NocoBase dikonfigurasi dan dikembangkan. Ini dapat membantu pengembang membuat tabel data, mengonfigurasi halaman, mendesain alur kerja, mengatur izin, dan selanjutnya menangani pengembangan plugin, ekstensi fitur, dan pemecahan masalah melalui bahasa alami.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-40774f.png)

**Dibandingkan dengan meminta Codex untuk menghasilkan sistem internal dari awal, NocoBase memberinya kerangka sistem yang lebih stabil untuk bekerja di dalamnya.** Hasilnya bukanlah kode sekali pakai yang sulit dipelihara, tetapi sistem yang berjalan dalam kerangka NocoBase dan dapat terus ditingkatkan.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-qu1ijq.png)

Di luar tahap pembangunan awal, NocoBase juga menyediakan kemampuan AI Employee. AI Employee dapat bekerja dengan halaman bisnis, tabel data, dan konteks alur kerja untuk membantu pengorganisasian data, analisis data, penerjemahan, riset, pemrosesan email, pemodelan data, konfigurasi bagan, dan banyak lagi. Dengan kata lain, Codex lebih cocok untuk membantu pengembang membangun dan memperluas sistem, sementara NocoBase AI Employee dapat berpartisipasi dalam operasi bisnis sehari-hari setelah sistem berjalan.

![ai员工填表单-yhms5j.gif](https://static-docs.nocobase.com/ai%E5%91%98%E5%B7%A5%E5%A1%AB%E8%A1%A8%E5%8D%95-yhms5j.gif)

Dengan mengonfigurasi layanan LLM, Skills, basis pengetahuan, dan tugas cepat, AI Employee dapat lebih cocok dengan operasi bisnis nyata, membantu tim meningkatkan efisiensi pembangunan sistem dan penggunaan sehari-hari.

### Apa yang dapat Anda bangun dengan Codex dan NocoBase

Codex dan NocoBase dapat membantu pengembang membangun sistem internal perusahaan yang dapat dipelihara dengan lebih cepat, seperti:

* CRM
* Sistem tiket
* Sistem persetujuan
* Manajemen proyek
* Manajemen aset
* Backend operasional
* Dasbor data

Codex menangani pemahaman kebutuhan, penguraian struktur bisnis, dan pembuatan implementasi. NocoBase menyediakan model data, izin, halaman, alur kerja, dan ekstensi plugin. Alih-alih meminta AI untuk menghasilkan kode yang sulit dipelihara dari awal, pengembang dapat membiarkan Codex membangun dan mengembangkan dalam kerangka sistem NocoBase yang sudah ada.

### Prompt yang disarankan

#### Instal NocoBase

Salin prompt di bawah ini ke Codex untuk menginstal dan mengonfigurasi NocoBase secara otomatis:

```text
Bantu saya menginstal CLI NocoBase dan menyelesaikan inisialisasi: https://docs.nocobase.com/en/ai/ai-quick-start.md Silakan buka dan baca tautan secara langsung.
```

#### Desain sebuah sistem

```text
Bantu saya menggunakan skill nocobase-dsl-reconciler untuk membangun sistem manajemen tiket, termasuk dasbor, daftar tiket, manajemen pengguna, dan konfigurasi SLA.
```

#### Hasil aktual

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-1klco2.png)

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-fhuwo3.png)

### Sumber daya terkait

Anda dapat menyalin tautan ini dan mengirimkannya ke Codex untuk digunakan langsung.

Dokumentasi: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

## 2. Refine

Situs web resmi: [https://refine.dev/](https://refine.dev/)

GitHub: [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

GitHub Stars: 34,7k

![Refine1.png](https://static-docs.nocobase.com/Refine1-8qgxcz.png)

Refine adalah kerangka kerja React sumber terbuka untuk pengembang. Ini terutama digunakan untuk membangun alat internal, panel admin, dasbor, dan aplikasi B2B. Ini menyediakan kemampuan inti seperti autentikasi, kontrol akses, perutean, pengambilan data, manajemen status, dan internasionalisasi, sehingga cocok untuk dengan cepat membangun aplikasi berat CRUD.

Refine juga memperkuat dukungannya untuk skenario AI Agent. Ini menyediakan alur kerja yang dirancang untuk aplikasi yang dihasilkan AI: terhubung ke REST API yang ada atau proyek Supabase, analisis struktur backend, dan buat cetak biru untuk agen AI sehingga hasil yang dihasilkan lebih cocok dengan model data nyata.

Inilah mengapa Refine bekerja dengan baik dengan Codex. Codex tidak perlu menebak bagaimana alat internal harus dibangun dari awal. Ini dapat menghasilkan halaman daftar, halaman detail, halaman edit, formulir, filter, pemeriksaan izin, dan logika panggilan API berdasarkan struktur proyek Refine, model sumber daya, dan konfigurasi sumber data.

![Refine2.png](https://static-docs.nocobase.com/Refine2-jpcnwg.png)

Refine juga menyediakan CLI untuk membuat sumber daya, mengelola pembaruan, menukar komponen, dan menjalankan tugas proyek seperti build, start, dan dev. Untuk Coding Agents seperti Codex, titik masuk baris perintah yang jelas ini lebih mudah diotomatisasi dan lebih cocok untuk iterasi berkelanjutan dalam proyek yang ada.

### Apa yang dapat Anda bangun dengan Codex dan Refine

Codex dan Refine sangat cocok untuk dengan cepat mengembangkan antarmuka admin internal dalam tumpukan React, seperti backend CRM, backend manajemen pesanan, platform tinjauan operasional, meja kerja layanan pelanggan, panel manajemen data, dan portal admin B2B SaaS.

Misalnya, jika Anda ingin membangun backend manajemen pesanan, Codex dapat menghasilkan daftar pesanan, halaman detail pesanan, formulir edit, filter, tombol pembaruan status, dan logika izin berdasarkan struktur data seperti pesanan, pelanggan, produk, dan status pembayaran. Refine menyediakan struktur dasar untuk alat internal React, sementara Codex mempercepat pengembangan halaman bisnis tertentu.

Pengaturan ini lebih baik untuk pengembang yang menginginkan kendali penuh atas kode. Hasil akhirnya adalah proyek React, bukan konfigurasi yang terkunci di dalam platform tertutup. Anda dapat terus menggunakan Codex nanti untuk memodifikasi komponen, merefaktor logika, menghubungkan API baru, atau memperluas modul bisnis.

### Prompt yang disarankan

```text
Bantu saya membuat backend manajemen pesanan berdasarkan Refine, menggunakan REST API sebagai sumber data. Ini harus mencakup daftar pesanan, detail pesanan, formulir edit pesanan, filter pelanggan, pembaruan status pesanan, dan kontrol izin dasar.
```

## 3. Payload CMS

Situs web resmi: [https://payloadcms.com/](https://payloadcms.com/)

GitHub: [https://github.com/payloadcms/payload](https://github.com/payloadcms/payload)

GitHub Stars: 42,5k

![Payload CMS1.png](https://static-docs.nocobase.com/Payload%20CMS1-9l7yh9.png)

Payload CMS adalah kerangka kerja Next.js full-stack sumber terbuka untuk membangun CMS, panel admin, aplikasi berbasis data, dan alat internal perusahaan. Ini menyediakan konfigurasi TypeScript, koleksi data, kontrol akses, Panel Admin, REST / GraphQL API, Hooks, plugin, manajemen file, dan banyak lagi.

Payload mendefinisikan model data dan logika bisnis melalui kode. Anda dapat mengonfigurasi koleksi, bidang, kontrol akses, hook, dan UI admin di TypeScript, menjaga backend, API, dan antarmuka admin alat internal dalam satu basis kode.

Payload juga telah mulai mendukung skenario AI Agent. Dokumentasi resminya menyediakan Plugin MCP yang memungkinkan pengembang mengontrol koleksi dan global mana yang dapat digunakan AI untuk operasi seperti find, create, update, dan delete. Pengembang juga dapat menentukan prompt, alat, dan sumber daya mereka sendiri.

![Payload CMS2.png](https://static-docs.nocobase.com/Payload%20CMS2-jczl8t.png)

### Apa yang dapat Anda bangun dengan Codex dan Payload

Codex dan Payload cocok untuk dengan cepat mengembangkan backend data berbasis TypeScript / Next.js, sistem manajemen konten, portal pelanggan, backend pesanan, sistem manajemen aset, dan alat manajemen operasional.

![Payload CMS3.png](https://static-docs.nocobase.com/Payload%20CMS3-lejqn0.png)

Misalnya, jika Anda ingin membangun backend manajemen aset, Codex dapat menghasilkan koleksi Payload, konfigurasi bidang, izin akses, dan hook berdasarkan persyaratan seperti peralatan, karyawan, departemen, catatan penggunaan, catatan pemeliharaan, dan status persetujuan. Payload menyediakan antarmuka manajemen data, API, dan penegakan izin. Jika Anda perlu menambahkan lebih banyak logika bisnis nanti, Anda dapat terus menggunakan Codex untuk memodifikasi konfigurasi TypeScript dan kode ekstensi.

### Prompt yang disarankan

```text
Bantu saya membuat backend manajemen aset berdasarkan Payload CMS, termasuk koleksi untuk peralatan, karyawan, departemen, catatan penggunaan, dan catatan pemeliharaan. Juga konfigurasikan bidang dasar, izin akses, bidang tampilan Panel Admin, dan hook umum.
```

## 4. Directus

Situs web resmi: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Stars: 35,7k

![Directus1.png](https://static-docs.nocobase.com/Directus1-7w23p8.png)

Directus adalah platform backend data sumber terbuka yang dapat dengan cepat mengubah database SQL seperti PostgreSQL, MySQL, SQLite, MariaDB, MS SQL, dan OracleDB menjadi REST / GraphQL API dan panel admin visual. Ini cocok untuk membangun backend manajemen data, sistem manajemen konten, backend operasional, backend data pelanggan, lapisan API internal, dan proyek serupa.

Directus sangat ramah terhadap database yang sudah ada. Banyak alat internal tidak dimulai dari awal. Database bisnis mungkin sudah ada, tetapi tim masih kekurangan panel admin yang dapat digunakan, manajemen izin, dan lapisan API. Directus dapat terhubung langsung ke database SQL yang ada dan menyediakan manajemen model data, izin peran, manajemen file, alur kerja otomatisasi, dan kemampuan ekstensi di atasnya.

Directus sudah menyediakan MCP Server, memungkinkan alat AI seperti Claude, ChatGPT, dan Cursor untuk terhubung ke Directus. AI dapat membuat, mengedit, dan mengelola konten dalam sistem izin yang ada, tanpa menyalin data ke tempat lain atau melewati kontrol izin Directus.

![Directus2.png](https://static-docs.nocobase.com/Directus2-otlau7.png)

### Apa yang dapat Anda bangun dengan Codex dan Directus

Codex dan Directus cocok untuk dengan cepat membangun backend data internal dan lapisan API di atas database yang sudah ada, seperti manajemen data pelanggan, manajemen data pesanan, manajemen konten, manajemen katalog produk, backend konfigurasi operasional, dan sistem tinjauan data.

Nilai dari kombinasi ini jelas: Directus menghubungkan database, menghasilkan API, menyediakan panel admin, dan menangani izin. Codex memahami persyaratan bisnis, mendesain struktur data, menulis logika ekstensi, Hooks, Custom Endpoints, skrip data, dan kode integrasi frontend.

Keuntungannya adalah pengembang tidak perlu menulis ulang database atau backend yang ada. Directus menyediakan lapisan data dan panel admin, sementara Codex mempercepat logika bisnis dan pengembangan ekstensi. Ini membuat kombinasi ini cocok untuk tim yang sudah memiliki database tetapi perlu dengan cepat menambahkan kemampuan alat internal.

### Prompt yang disarankan

```text
Bantu saya mendesain panel admin internal untuk database pesanan yang ada berdasarkan Directus. Ini harus mencakup empat jenis data: pesanan, pelanggan, produk, dan catatan pembayaran. Juga konfigurasikan izin dasar, tampilan daftar, alur kerja pembaruan status, dan Hook notifikasi setelah status pesanan berubah.
```

## 5. Supabase

Situs web resmi: [https://supabase.com/](https://supabase.com/)

GitHub: [https://github.com/supabase/supabase](https://github.com/supabase/supabase)

GitHub Stars: 103k

Supabase mungkin tidak perlu diperkenalkan lagi.

Supabase menyediakan Supabase MCP Server resmi yang memungkinkan alat AI untuk terhubung ke proyek Supabase dan melakukan kueri atau mengoperasikannya dalam lingkup izin yang diizinkan. Supabase juga menyediakan keterampilan untuk agen AI, yang mencakup database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues, CLI, MCP, perubahan skema, migrasi, kebijakan RLS, audit keamanan, dan banyak lagi.

![Supabase1-rq907o.png](https://static-docs.nocobase.com/Supabase1-rq907o.png)

### Apa yang dapat Anda bangun dengan Codex dan Supabase?

Codex dan Supabase cocok untuk dengan cepat membangun lapisan backend alat internal. Supabase menyediakan database, autentikasi, API, penyimpanan, dan lingkungan runtime fungsi. Codex mendesain skema berdasarkan persyaratan bisnis, menulis SQL, mengonfigurasi izin RLS, menghasilkan Edge Functions, dan membantu frontend memanggil API Supabase.

Misalnya, jika Anda ingin membangun backend manajemen pelanggan, Codex dapat mendesain tabel Postgres, hubungan bidang, indeks, dan kebijakan RLS berdasarkan persyaratan seperti pelanggan, kontak, catatan tindak lanjut, peluang penjualan, kontrak, dan lampiran. Supabase menyediakan database, autentikasi, API otomatis, dan penegakan izin. Nanti, jika Anda memerlukan penugasan pelanggan otomatis, sinkronisasi data eksternal, atau pembuatan ringkasan AI, Anda dapat terus menggunakan Codex untuk menulis Edge Functions atau fungsi database.

### Prompt yang disarankan

```text
Bantu saya mendesain backend untuk sistem manajemen pelanggan berdasarkan Supabase. Ini harus mencakup tabel untuk pelanggan, kontak, peluang, kontrak, follow_ups, dan lampiran. Harap buat migrasi SQL, indeks dasar, kebijakan RLS, desain autentikasi dan izin, dan Edge Function untuk secara otomatis menetapkan pemilik penjualan.
```

## 6. Windmill

Situs web resmi: [https://www.windmill.dev/](https://www.windmill.dev/)

GitHub: [https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

GitHub Stars: 16,5k

Windmill adalah platform sumber terbuka untuk pengembang. Ini dapat dengan cepat mengubah skrip yang ditulis dalam Python, TypeScript, Go, Bash, SQL, dan bahasa lainnya menjadi API, tugas latar belakang, alur kerja, dan aplikasi internal. Ini cocok untuk membangun alur kerja otomatisasi, tugas pemrosesan data, alat operasional, manajemen tugas latar belakang, platform skrip internal, dan antarmuka admin ringan.

![Windmill1-kcvxsb.png](https://static-docs.nocobase.com/Windmill1-kcvxsb.png)

Dengan CLI dan keterampilan AI bawaannya, Windmill memungkinkan pengembang menggunakan Claude Code atau Codex secara lokal, lalu menyebarkannya ke ruang kerja jarak jauh melalui `wmill sync push`. Dalam pengaturan ini, Codex menulis skrip dan logika alur kerja, sementara Windmill menangani eksekusi, penjadwalan, izin, log, dan antarmuka operasi visual.

### Apa yang dapat Anda bangun dengan Codex dan Windmill

Codex dan Windmill sangat cocok untuk mengubah skrip yang ditulis pengembang menjadi alat internal yang dapat digunakan oleh seluruh tim. Contohnya termasuk sinkronisasi data, pembuatan laporan, impor dan ekspor batch, pemrosesan Webhook, tugas terjadwal, pembersihan data pelanggan, sinkronisasi status pesanan, notifikasi Slack / Email, dan alur kerja pemrosesan data AI.

Misalnya, jika Anda ingin membangun alur kerja internal yang menyinkronkan data pelanggan CRM setiap malam dan menghasilkan laporan pengecualian, Codex dapat membantu menulis skrip untuk membaca, membersihkan, membandingkan, dan melaporkan data. Windmill dapat mengonfigurasi alur kerja sebagai tugas terjadwal, mencatat log eksekusi, dan menyediakan halaman internal tempat tim dapat memicu alur kerja secara manual atau melihat hasilnya.

### Prompt yang disarankan

```text
Bantu saya membuat alur kerja sinkronisasi data pelanggan berdasarkan Windmill: baca data pelanggan dari PostgreSQL setiap malam, bersihkan catatan duplikat, identifikasi email abnormal, hasilkan laporan pengecualian, dan beri tahu tim operasional melalui Slack. Harap tulis skrip dalam TypeScript dan jelaskan cara mengonfigurasi tugas terjadwal dan parameter input.
```

## Pemikiran akhir

AI Coding Agents seperti Codex mengubah cara pengembang membangun alat internal.

NocoBase, Refine, Payload, Directus, Supabase, dan Windmill masing-masing menyediakan fondasi teknik yang lebih jelas dari sudut pandang yang berbeda, termasuk sistem bisnis, kerangka kerja frontend, backend data, layanan backend, dan otomatisasi skrip.

Nilai Codex adalah meningkatkan efisiensi pengembangan di atas fondasi ini: membantu Anda menguraikan persyaratan, menghasilkan kode, mengonfigurasi sumber daya, menulis skrip, mendesain alur kerja, menangani integrasi, dan memecahkan masalah.

Pendekatan pengembangan yang lebih baik adalah:

> Pilih infrastruktur sumber terbuka yang tepat terlebih dahulu, lalu biarkan Codex menyelesaikan implementasi spesifik dalam struktur yang jelas.

Alat internal yang dibangun dengan cara ini lebih mudah dipelihara, diperluas, dan digunakan secara nyata.

**Bacaan terkait**

* [After Claude Code: 6 Open-Source Tools You Should Know ](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Open-Source AI And No-Code Tools for Enterprise Software Development](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Open-Source AI Agent Platforms for Building Internal Tools](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [The Best Enterprise-Grade Self-Hosted CRMs with RBAC, AI, and Open API Support](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Best Open-Source Tools to Replace Custom Integration Middleware](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Replace Excel with NocoBase or Airtable? A Cost-by-Cost Comparison](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Ways to Quickly Build Web Apps from Excel Data](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Not Just PostgreSQL: Comparing 5 No-Code/Low-Code Platforms with External Database Support](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Open Source Project Management Tool Selection Guide, 2026 Edition](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [How to Build a Custom CRM with PostgreSQL](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
* [Top 20 AI Projects on GitHub to Watch in 2026: Not Just OpenClaw](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)
