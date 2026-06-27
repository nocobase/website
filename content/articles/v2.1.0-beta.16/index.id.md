---
title: "NocoBase v2.1.0-beta.16: refaktor CLI NocoBase"
description: "Catatan Rilis v2.1.0-beta.16"
---

### 🎉 Fitur Baru

- **[undefined]** Menambahkan alur kerja CI yang memeriksa `plugin-*` peerDependencies yang hilang dan menjalankan build, dengan pelaporan komentar PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) oleh @Molunerfinn

- **[cli-v1]** menyelesaikan jalur penyimpanan dari env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) oleh @chenos

- **[cli]** merefaktor NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) oleh @chenos

- **[flow-engine]** Menambahkan `getSubclassesOfAsync` ke FlowEngine untuk menemukan kelas model yang terdaftar secara asinkron melalui field `extends` baru di `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) oleh @Molunerfinn

- **[Workflow]**
  - Menambahkan API untuk memeriksa pembuatan node ([#9207](https://github.com/nocobase/nocobase/pull/9207)) oleh @mytharcher

  - Menambahkan field log untuk jobs, untuk menampilkan konten log dari beberapa node untuk debug ([#9165](https://github.com/nocobase/nocobase/pull/9165)) oleh @mytharcher

- **[AI employees]**
  - Workflow telah menambahkan instruksi AI employee ([#9025](https://github.com/nocobase/nocobase/pull/9025)) oleh @cgyrock

  - Menambahkan alat kueri data dan alat laporan analisis bisnis untuk AI employees ([#9040](https://github.com/nocobase/nocobase/pull/9040)) oleh @2013xile

  - Menambahkan kemampuan untuk memanggil sub agen untuk AI employees ([#8935](https://github.com/nocobase/nocobase/pull/8935)) oleh @cgyrock

  - Menambahkan kemampuan SKILLS ke AI employees. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) oleh @cgyrock

- **[Auth: API keys]** menambahkan perintah `pm list` dan `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) oleh @chenos

- **[AI: MCP server]**
  - Menyediakan API kueri koleksi data generik, dapat dipanggil melalui MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) oleh @2013xile

  - Menambahkan plugin server MCP baru untuk memungkinkan pembangunan sistem NocoBase dan mendukung alur kerja bisnis. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) oleh @2013xile

- **[Data source manager]** Mendukung pemuatan sesuai permintaan alat MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) oleh @2013xile

- **[IdP: OAuth]** Menambahkan plugin IdP: OAuth baru untuk memungkinkan layanan MCP mengautentikasi melalui OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) oleh @2013xile

### 🚀 Peningkatan

- **[cli]**
  - Menambahkan pelacakan sumber permintaan CLI di log permintaan dan log audit ([#9223](https://github.com/nocobase/nocobase/pull/9223)) oleh @2013xile

  - Meningkatkan output bantuan API CLI yang dihasilkan dan pengelompokan perintah ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) oleh @2013xile

  - Meningkatkan fallback bantuan `nb api` dan menyatukan pesan peringatan untuk kegagalan bootstrap runtime ([#9153](https://github.com/nocobase/nocobase/pull/9153)) oleh @2013xile

- **[server]** Meningkatkan dokumentasi API swagger dari plugin manager ([#9080](https://github.com/nocobase/nocobase/pull/9080)) oleh @2013xile

- **[database]** Memperbaiki pembuatan laporan bisnis AI dan perilaku kueri data untuk menghindari output grafik yang salah, penanganan datetime yang tidak tepat, dan kurangnya cakupan multi-data-source ([#9078](https://github.com/nocobase/nocobase/pull/9078)) oleh @2013xile

- **[build]**
  - Build produksi klien App sekarang berjalan di Rsbuild, dan profiling build serta peningkatan penjadwalan deklarasi membuat hambatan build lebih mudah diidentifikasi dan dikurangi. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) oleh @Molunerfinn

  - Memigrasikan pipeline build klien di `@nocobase/build` dari Vite ke Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) oleh @Molunerfinn

- **[client]** Merefaktor pengaturan tata letak admin dan aplikasi ke arsitektur model host dengan kompatibilitas v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) oleh @zhangzhonghe

- **[flow-engine]**
  - Meningkatkan validasi skema untuk api pembangunan ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) oleh @gchust

  - Meningkatkan validasi skema untuk api pembangunan ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) oleh @gchust

- **[app]** Menambahkan alur kerja dev berbasis Rsbuild untuk client-v1 sambil menjaga pengembangan plugin lokal dan topologi `/v2/` saat ini tetap kompatibel ([#8902](https://github.com/nocobase/nocobase/pull/8902)) oleh @Molunerfinn

- **[undefined]** Menambahkan entri client-v2 khusus dan membangunnya secara independen dengan rsbuild sambil menjaga v1 tidak berubah. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) oleh @Molunerfinn

- **[Access control]** menambahkan beberapa api baru untuk acl skill ([#9198](https://github.com/nocobase/nocobase/pull/9198)) oleh @Andrew1989Y

- **[Workflow: Custom action event]** Menambahkan kontrol ACL untuk pemicuan pada mode record (baik tunggal maupun ganda) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) oleh @mytharcher

- **[Flow engine]** Menambahkan api baru untuk pembangunan ui. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) oleh @gchust

- **[Workflow: Pre-action event]** Menambahkan aturan validasi untuk pemicu dan node ([#8971](https://github.com/nocobase/nocobase/pull/8971)) oleh @mytharcher

- **[Workflow]** Menambahkan validasi untuk semua pemicu dan node ([#8930](https://github.com/nocobase/nocobase/pull/8930)) oleh @mytharcher

- **[Workflow: Webhook]** Menambahkan validasi untuk pembuatan API pemicu / node oleh @mytharcher

- **[Workflow: Subflow]** Menambahkan validasi untuk pembuatan API node oleh @mytharcher

- **[Workflow: Approval]**
  - Menambahkan validasi untuk pembuatan node persetujuan oleh @mytharcher

  - Menambahkan validasi untuk API pemicu / node oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - sakelar urutan field relasi yang tersembunyi ([#9220](https://github.com/nocobase/nocobase/pull/9220)) oleh @jiannx

  - Memperbaiki masalah di mana judul halaman tidak diperbarui setelah mengganti menu ([#8864](https://github.com/nocobase/nocobase/pull/8864)) oleh @zhangzhonghe

- **[cli]** Memperbaiki kegagalan login OAuth CLI di Windows yang disebabkan oleh URL otorisasi yang panjang ([#9159](https://github.com/nocobase/nocobase/pull/9159)) oleh @2013xile

- **[test]** Memperbaiki build plugin sehingga dependensi server dengan nama paket bertitik seperti `big.js` dikemas ke dalam `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) oleh @Molunerfinn

- **[server]** Mendukung mendapatkan aplikasi target berdasarkan hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) oleh @2013xile

- **[Workflow: Aggregate node]** Memperbaiki masalah di mana node agregat tidak dapat disimpan karena aturan validasi yang salah ([#9208](https://github.com/nocobase/nocobase/pull/9208)) oleh @mytharcher

- **[AI employees]**
  - Memperbaiki anomali pencatatan log dalam instruksi AI employee ([#9180](https://github.com/nocobase/nocobase/pull/9180)) oleh @cgyrock

  - Memperbaiki pengurutan kueri agregat yang dijatuhkan oleh ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) oleh @2013xile

  - Memperbaiki masalah di mana pesan kesalahan tidak ditampilkan dalam percakapan AI employee ([#9097](https://github.com/nocobase/nocobase/pull/9097)) oleh @cgyrock

  - Memperbaiki masalah di mana AI employees tidak dapat menggunakan skills ([#9023](https://github.com/nocobase/nocobase/pull/9023)) oleh @cgyrock

  - Memperbaiki masalah di mana LLM masih mencoba memuat skills setelah alat getSkill dinonaktifkan ([#9013](https://github.com/nocobase/nocobase/pull/9013)) oleh @cgyrock

  - Memperbaiki kasus uji yang gagal di modul ai dari paket inti. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) oleh @cgyrock

- **[Workflow: JavaScript]** Memperbaiki masalah di mana kesalahan muncul saat mengkonfigurasi node JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) oleh @mytharcher

- **[IdP: OAuth]**
  - Memperbaiki kegagalan pendaftaran klien OAuth dan refresh token setelah restart layanan ([#9139](https://github.com/nocobase/nocobase/pull/9139)) oleh @2013xile

  - Memperbaiki akses OAuth untuk permintaan API reguler ([#9120](https://github.com/nocobase/nocobase/pull/9120)) oleh @2013xile

  - Memperbaiki pengalihan yang salah setelah login MCP OAuth di sub aplikasi ([#9015](https://github.com/nocobase/nocobase/pull/9015)) oleh @2013xile

- **[Workflow: Loop node]** Memperbaiki validasi node workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) oleh @mytharcher

- **[Access control]** memperbarui acl swagger untuk server mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) oleh @Andrew1989Y

- **[Workflow: mailer node]** Memperbaiki validasi untuk field variabel ([#9047](https://github.com/nocobase/nocobase/pull/9047)) oleh @mytharcher

- **[Workflow]**
  - Memperbaiki aturan validasi yang salah dari instruksi kondisi ([#9017](https://github.com/nocobase/nocobase/pull/9017)) oleh @mytharcher

  - Memperbaiki masalah di mana mode pemicu koleksi tidak dapat diatur ke "buat atau perbarui" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) oleh @mytharcher

- **[Data source manager]** Mengoptimalkan penamaan alat MCP dan mengurangi respons API yang berlebihan untuk menghindari konsumsi konteks percakapan AI yang berlebihan ([#9000](https://github.com/nocobase/nocobase/pull/9000)) oleh @2013xile

- **[AI: MCP server]**
  - Memperbaiki alat MCP yang dihasilkan dari Swagger ketika skema input menyertakan tipe `null` atau penanda `nullable` yang tidak valid untuk validasi alat OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) oleh @2013xile

  - Memperbaiki ketidakcocokan autentikasi yang disebabkan oleh header yang diteruskan tidak terkait dalam alat CRUD generik MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) oleh @2013xile
