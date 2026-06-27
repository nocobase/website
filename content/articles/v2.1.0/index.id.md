---
title: "NocoBase v2.1.0: Peningkatan aplikasi terkelola dan manajemen plugin di CLI"
description: "Catatan Rilis v2.1.0"
---

### 🎉 Fitur Baru

- **[tidak ditentukan]**

  - Menambahkan perintah proxy tingkat atas untuk nginx dan caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) oleh @chenos
  - Peningkatan manajemen aplikasi terkelola dan plugin di CLI, termasuk penanganan lingkungan yang sadar appPath, impor plugin, sinkronisasi plugin berlisensi, dan pembaruan dokumentasi terkait. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) oleh @chenos
    Referensi: [Dokumentasi CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Panduan Memulai Cepat](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
  - Menambahkan karyawan AI baru, Localization Engineer Lina, untuk membantu tugas terjemahan lokalisasi ([#9434](https://github.com/nocobase/nocobase/pull/9434)) oleh @2013xile
    Referensi: [Manajemen Lokalisasi](https://docs.nocobase.com/system-management/localization)<br>[Lina: Localization Engineer](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Gunakan Lina dan HY-MT1.5-1.8B lokal untuk menerjemahkan entri lokalisasi](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
  - Menambahkan dokumentasi Bahasa Indonesia dan Vietnam. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) oleh @Molunerfinn
  - Menambahkan alur kerja CI yang memeriksa `plugin-*` peerDependencies yang hilang dan menjalankan build, dengan pelaporan komentar PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) oleh @Molunerfinn
- **[client-v2]**

  - Mendukung input pindai untuk bidang teks ([#9599](https://github.com/nocobase/nocobase/pull/9599)) oleh @katherinehhh
  - Menambahkan `TypedVariableInput` sehingga bidang port SMTP dan mode aman plugin email v2 dapat menerima konstanta bertipe atau variabel `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) oleh @Molunerfinn
  - Mendukung penetapan nilai bidang dalam aksi kirim formulir ([#9570](https://github.com/nocobase/nocobase/pull/9570)) oleh @katherinehhh
  - Mendukung halaman v2 yang disematkan dan halaman formulir publik v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) oleh @zhangzhonghe
  - Menulis ulang halaman manajer Plugin client-v2 menjadi UI berbasis kartu responsif dengan filter kategori, pencarian, aktifkan/nonaktifkan/hapus, Aktifkan massal, dan modal detail plugin; juga membuat halaman manajer Plugin client-v1 responsif di layar sempit. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) oleh @Molunerfinn
  - Menambahkan menu Keamanan dan halaman pengaturan kebijakan Token ke admin v2; pusat pengguna sekarang mendukung Ubah kata sandi. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) oleh @Molunerfinn
- **[cli]**

  - Menambahkan pengawal kompatibilitas perintah API dinamis ([#9613](https://github.com/nocobase/nocobase/pull/9613)) oleh @chenos
  - Mendukung autentikasi dasar ([#9558](https://github.com/nocobase/nocobase/pull/9558)) oleh @chenos
  - Menambahkan perintah buat dan pulihkan cadangan ([#9541](https://github.com/nocobase/nocobase/pull/9541)) oleh @chenos
  - Menambahkan perintah rilis di API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) oleh @Andrew1989Y
  - Refaktor CLI NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) oleh @chenos
- **[client]**

  - Menambahkan dukungan aturan tautan untuk item menu halaman ([#9304](https://github.com/nocobase/nocobase/pull/9304)) oleh @zhangzhonghe
  - menambahkan variabel js ke alur peristiwa ([#8938](https://github.com/nocobase/nocobase/pull/8938)) oleh @jiannx
  - menambahkan aksi item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) oleh @jiannx
- **[flow-engine]**

  - Memigrasikan `plugin-environment-variables` ke client-v2 dengan halaman pengaturan berbasis React dan variabel runtime `$env` yang terdaftar secara global; menambahkan entri client-v2 ke `plugin-file-manager` dengan halaman konfigurasi penyimpanan berbasis React dan bidang unggah, aksi unggah, dan pratinjau berbasis FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) oleh @Molunerfinn
  - Menambahkan `getSubclassesOfAsync` ke FlowEngine untuk menemukan kelas model yang terdaftar secara async melalui bidang `extends` baru di `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) oleh @Molunerfinn
- **[server]** Karyawan AI dapat mencari dokumentasi yang dibundel dengan perintah Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) oleh @2013xile
- **[cli-v1]** Selesaikan jalur penyimpanan dari env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) oleh @chenos
- **[Manajer tugas async]** Menambahkan dukungan klien v2 untuk aksi bilah atas manajer tugas async. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) oleh @jiannx
- **[Manajer cadangan]**

  - Menambahkan dukungan runtime klien v2 untuk plugin manajer cadangan. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) oleh @katherinehhh
  - Beradaptasi dengan plugin kontrol versi baru ([#9563](https://github.com/nocobase/nocobase/pull/9563)) oleh @cgyrock
- **[Blok: Gantt]**

  - Menambahkan opsi untuk blok Gantt agar fokus pada hari ini secara default saat dibuka ([#9692](https://github.com/nocobase/nocobase/pull/9692)) oleh @jiannx
  - Menambahkan dukungan v2 untuk blok Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) oleh @jiannx
- **[Kontrol akses]** Memigrasikan halaman pengaturan Pengguna dan Peran & Izin ke v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) oleh @jiannx
- **[Pratinjau File Office]** Memigrasikan plugin pratinjau file Office ke klien v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) oleh @Molunerfinn
- **[Alur Kerja]**

  - Menambahkan kontrol waktu tunggu untuk alur kerja, mendukung pembatalan otomatis eksekusi yang kehabisan waktu jika opsi waktu tunggu diatur ([#9363](https://github.com/nocobase/nocobase/pull/9363)) oleh @mytharcher
  - Menambahkan bidang dibuat dan diperbarui oleh untuk alur kerja ([#9217](https://github.com/nocobase/nocobase/pull/9217)) oleh @mytharcher
  - Menambahkan API untuk memeriksa pembuatan node ([#9207](https://github.com/nocobase/nocobase/pull/9207)) oleh @mytharcher
  - Menambahkan bidang log untuk pekerjaan, untuk menampilkan konten log dari beberapa node untuk debug ([#9165](https://github.com/nocobase/nocobase/pull/9165)) oleh @mytharcher
- **[IdP: OAuth]**

  - Menambahkan dukungan dasar untuk single sign-on aplikasi dalam deployment multi-aplikasi ([#9547](https://github.com/nocobase/nocobase/pull/9547)) oleh @2013xile
  - Menambahkan plugin IdP: OAuth baru untuk memungkinkan layanan MCP mengautentikasi melalui OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) oleh @2013xile
- **[Editor tema]** Editor tema sekarang tersedia di antarmuka v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) oleh @zhangzhonghe
- **[Blok: Kanban]**

  - Menambahkan dukungan client-v2 untuk plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) oleh @jiannx
  - blok kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) oleh @jiannx
- **[Blok: Markdown]** Menambahkan dukungan client-v2 untuk blok Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) oleh @jiannx
- **[Blok: Daftar]** Blok daftar mendukung client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) oleh @jiannx
- **[Kalender]**

  - Menambahkan dukungan client-v2 untuk plugin Kalender. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) oleh @jiannx
  - blok kalender v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) oleh @jiannx
- **[Blok: Pohon]**

  - Menambahkan dukungan client-v2 untuk blok filter pohon. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) oleh @jiannx
  - Menambahkan blok filter pohon ([#9016](https://github.com/nocobase/nocobase/pull/9016)) oleh @jiannx
- **[Karyawan AI]**

  - Node karyawan AI Alur Kerja mendukung memuat file dari bidang lampiran. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) oleh @cgyrock
  - Alur kerja telah menambahkan instruksi karyawan AI ([#9025](https://github.com/nocobase/nocobase/pull/9025)) oleh @cgyrock
  - Menambahkan alat kueri data dan alat laporan analisis bisnis untuk karyawan AI ([#9040](https://github.com/nocobase/nocobase/pull/9040)) oleh @2013xile
  - Menambahkan kemampuan untuk memanggil sub-agen untuk karyawan AI ([#8935](https://github.com/nocobase/nocobase/pull/8935)) oleh @cgyrock
  - Menambahkan kemampuan SKILLS ke karyawan AI. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) oleh @cgyrock
- **[Visualisasi data]** Menambahkan dukungan client-v2 untuk plugin blok ([#9297](https://github.com/nocobase/nocobase/pull/9297)) oleh @zhangzhonghe
- **[Auth: Kunci API]** menambahkan perintah `pm list` dan `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) oleh @chenos
- **[AI: Server MCP]**

  - Menyediakan API kueri koleksi data generik, dapat dipanggil melalui MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) oleh @2013xile
  - Menambahkan plugin server MCP baru untuk memungkinkan pembangunan sistem NocoBase dan mendukung alur kerja bisnis. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) oleh @2013xile
- **[Manajer sumber data]** Mendukung pemuatan sesuai permintaan alat MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) oleh @2013xile
- **[Bidang koleksi: Kode]** field-code mendukung 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) oleh @jiannx
- **[Sumber data: NocoBase Eksternal]** Menambahkan plugin sumber data: NocoBase eksternal oleh @2013xile
- **[Multi-ruang]** Menambahkan dukungan client-v2 untuk plugin multi-ruang, termasuk peralihan ruang dan manajemen ruang. oleh @jiannx
- **[SSO Aplikasi]** Menambahkan plugin SSO Aplikasi untuk masuk otomatis antar aplikasi oleh @2013xile
- **[Kontrol versi]** Menambahkan plugin kontrol versi oleh @cgyrock
- **[Autentikasi dua faktor (2FA)]** TOTP dan autentikasi dua faktor sekarang dapat diikat, diverifikasi, dan dikonfigurasi dari klien v2. oleh @Molunerfinn
- **[Kebijakan kata sandi]** Memigrasikan plugin-password-policy ke shell admin client-v2 dengan halaman pengaturan Kebijakan kata sandi / Pengguna terkunci dan penegakan aturan sisi klien pada formulir ubah kata sandi pusat pengguna. oleh @Molunerfinn
- **[Alur Kerja: Webhook]** Menambahkan status respons 408 untuk alur kerja webhook yang kehabisan waktu (mode sinkron) oleh @mytharcher
- **[Alur Kerja: Subalur]** Mendukung pengaturan waktu tunggu di alur kerja oleh @mytharcher
- **[Manajer migrasi]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y
- **[Penyimpanan file: S3(Pro)]** Mendukung unggah file melalui penyimpanan S3 Pro di manajer file v2. oleh @Molunerfinn
- **[Auth: OIDC]** Memigrasikan `plugin-auth-oidc` ke admin v2; tombol masuk, formulir pengaturan admin, dan pengalihan otomatis SSO sekarang berfungsi di bawah v2. oleh @Molunerfinn
- **[Alur Kerja: Persetujuan]**

  - Mendukung pengaturan waktu tunggu di alur kerja oleh @mytharcher
  - Mendukung penghapusan draf persetujuan oleh @mytharcher
- **[Manajer email]** Gmail mendukung pengiriman email dengan alias oleh @jiannx
- **[Pengawas aplikasi]** Menambahkan pengaturan SSO Aplikasi untuk sub-aplikasi oleh @2013xile
- **[Auth: LDAP]** Menambahkan entri klien v2 sehingga autentikator LDAP merender formulir masuk dan pengaturan adminnya di aplikasi v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[tidak ditentukan]**

  - Mendukung env saat ini yang terlingkup sesi di nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) oleh @chenos
  - Menyelaraskan dokumentasi Bahasa Spanyol, Portugis, Rusia, dan Jerman dengan sumber Bahasa Inggris. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) oleh @Molunerfinn
  - Sinkronkan dokumentasi Bahasa Prancis dengan sumber Bahasa Mandarin. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) oleh @Molunerfinn
  - Perbarui dokumen AI untuk memerlukan NocoBase >= 2.1.0-beta.20 dan merekomendasikan versi beta terbaru. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) oleh @Molunerfinn
  - Tingkatkan panduan instalasi AI Agent untuk mencegah Agent melewati wizard `--ui` dan untuk mendeteksi manajer versi Node secara otomatis. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) oleh @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) oleh @Molunerfinn
  - Menambahkan entri client-v2 khusus dan membangunnya secara independen dengan rsbuild sambil menjaga v1 tetap tidak berubah. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) oleh @Molunerfinn
- **[client-v2]**

  - Menambahkan dukungan untuk menonaktifkan pemilihan ganda di bidang asosiasi pilih popup v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) oleh @katherinehhh
  - Peningkatan rendering blok v2 ketika sumber data eksternal yang dikonfigurasi dinonaktifkan, mencegah kesalahan render dan menampilkan placeholder Editor UI yang lebih jelas. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) oleh @katherinehhh
  - Menambahkan pengaturan pemilihan baris tabel v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) oleh @katherinehhh
  - Mendukung warna aksi panel aksi ([#9612](https://github.com/nocobase/nocobase/pull/9612)) oleh @katherinehhh
  - Menghapus opsi Tersembunyi dari konfigurasi menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) oleh @zhangzhonghe
  - Filter menu v1 di tata letak v2 dan hanya tampilkan menu v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) oleh @zhangzhonghe
  - Pisahkan client-v2 dari client-v1, dan hapus ketergantungannya pada client-v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) oleh @zhangzhonghe
- **[server]**

  - Klien modern sekarang dilayani di bawah `/v/` alih-alih `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) oleh @Molunerfinn
  - Peningkatan dokumentasi API swagger dari manajer plugin ([#9080](https://github.com/nocobase/nocobase/pull/9080)) oleh @2013xile
- **[cli]**

  - Tingkatkan panduan inisialisasi dan pembaruan mandiri ([#9633](https://github.com/nocobase/nocobase/pull/9633)) oleh @chenos
  - merampingkan alur upgrade aplikasi ([#9587](https://github.com/nocobase/nocobase/pull/9587)) oleh @chenos
  - tingkatkan alur auth env ([#9546](https://github.com/nocobase/nocobase/pull/9546)) oleh @chenos
  - Peningkatan pengalaman prompt CLI NocoBase dengan memigrasikan alur kerja pengaturan dan manajemen ke Inquirer, dan memperbaiki masalah instalasi, keterampilan, dan runtime Docker terkait. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) oleh @chenos
  - Menambahkan pelacakan sumber permintaan CLI di log permintaan dan log audit ([#9223](https://github.com/nocobase/nocobase/pull/9223)) oleh @2013xile
  - Peningkatan output bantuan CLI API yang dihasilkan dan pengelompokan perintah ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) oleh @2013xile
  - Peningkatan fallback bantuan `nb API` dan pesan peringatan terpadu untuk kegagalan bootstrap runtime ([#9153](https://github.com/nocobase/nocobase/pull/9153)) oleh @2013xile
- **[client]**

  - Memigrasikan jsonLogic dari Application v1 ke BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) oleh @zhangzhonghe
  - mendukung pengaturan gaya bidang melalui runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) oleh @jiannx
  - Refaktor pengaturan tata letak admin dan aplikasi untuk memodelkan arsitektur host dengan pengaman kompatibilitas v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) oleh @zhangzhonghe
- **[build]**

  - Menambahkan cakupan regresi untuk menjaga `deleteServerFiles` agar tidak menghapus artefak build `client` dan `client-v2` di seluruh jalur Windows dan POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) oleh @Molunerfinn
  - Build produksi klien Aplikasi sekarang berjalan di Rsbuild, dan pembuatan profil build plus peningkatan penjadwalan deklarasi membuat hambatan build lebih mudah diidentifikasi dan dikurangi. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) oleh @Molunerfinn
  - Memigrasikan pipeline build klien di `@nocobase/build` dari Vite ke Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) oleh @Molunerfinn
- **[database]** Memperbaiki pembuatan laporan bisnis AI dan perilaku kueri data untuk menghindari output bagan yang salah, penanganan datetime yang salah, dan cakupan multi-sumber data yang hilang ([#9078](https://github.com/nocobase/nocobase/pull/9078)) oleh @2013xile
- **[flow-engine]**

  - Tingkatkan validasi skema untuk API pembuatan UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) oleh @gchust
- **[app]** Menambahkan alur kerja dev berbasis Rsbuild untuk client-v1 sambil menjaga kompatibilitas pengembangan plugin lokal dan topologi `/v2/` saat ini ([#8902](https://github.com/nocobase/nocobase/pull/8902)) oleh @Molunerfinn
- **[Variabel dan rahasia]** Variabel lingkungan (`$env`) sekarang dapat dipilih oleh pemilih variabel berbasis flow-engine di runtime v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) oleh @Molunerfinn
- **[Manajer sumber data]**

  - Menambahkan manajemen izin sumber data client-v2 dan menyelaraskan laci pemilih izin terkait. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) oleh @jiannx
  - Optimalkan API pemodelan data untuk mendukung pembuatan koleksi komentar dengan AI, mengonfigurasi bidang relasi untuk sumber data eksternal, dan mengatur aturan validasi bidang ([#9480](https://github.com/nocobase/nocobase/pull/9480)) oleh @2013xile
- **[Koleksi: Hubungkan ke data asing (FDW)]** Peningkatan paritas template koleksi V2 untuk koleksi SQL dan koleksi data asing, termasuk konfirmasi SQL, manajemen server database asing, dan pengurutan template. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) oleh @katherinehhh
- **[Filter multi-kata kunci]** Memigrasikan filter multi kata kunci ke client-v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) oleh @gchust
- **[Alur Kerja]**

  - Menghapus kopling transaksi riwayat alur kerja dari eksekusi alur kerja. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) oleh @mytharcher
  - Refaktor pemeriksaan ketersediaan node-async alur kerja ([#9532](https://github.com/nocobase/nocobase/pull/9532)) oleh @mytharcher
  - Menambahkan validasi untuk semua pemicu dan node ([#8930](https://github.com/nocobase/nocobase/pull/8930)) oleh @mytharcher
- **[Template UI]** Memigrasikan template UI ke client-v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) oleh @gchust
- **[Departemen]** Menambahkan halaman pengaturan v2 untuk mengelola departemen, anggota departemen, dan penugasan departemen pengguna. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) oleh @jiannx
- **[Manajer notifikasi]** Memigrasikan plugin terkait notifikasi ke v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) oleh @Molunerfinn
- **[Visualisasi data]** Menambahkan dukungan client-v2 untuk blok bagan. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) oleh @jiannx
- **[Verifikasi]** Menambahkan klien v2 ke plugin Verifikasi (halaman pengaturan admin, entri pusat pengguna, formulir OTP SMS). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) oleh @Molunerfinn
- **[Autentikasi]**

  - Pengaturan merek khusus sekarang berfungsi dengan benar di klien v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) oleh @zhangzhonghe
  - Implementasikan halaman pengaturan Authenticators di client-v2 dan kirimkan tabel client-v2 yang dapat digunakan kembali, input variabel, dan primitif formulir. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) oleh @Molunerfinn
- **[Blok: Peta]** Menambahkan dukungan klien v2 untuk plugin peta. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) oleh @jiannx
- **[Lokalisasi]** Peningkatan tugas terjemahan lokalisasi Lina dengan cakupan terjemahan, pengaturan bahasa referensi, dan pengeditan cepat ([#9521](https://github.com/nocobase/nocobase/pull/9521)) oleh @2013xile
- **[Alur Kerja: Aksi peristiwa khusus]**

  - Memigrasikan plugin block-workbench dan workflow-custom-action-trigger ke client-v2, termasuk model aksi dan alur pemindai QR mereka. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) oleh @jiannx
  - Menambahkan kontrol ACL dari pemicuan pada mode rekaman (tunggal dan ganda) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) oleh @mytharcher
- **[Blok: iframe]** Menambahkan dukungan v2 untuk blok iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) oleh @jiannx
- **[Blok: GridCard]** Memperbarui plugin kartu grid untuk mendukung client-v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) oleh @jiannx
- **[Karyawan AI]**

  - Interaksi percakapan paralel karyawan AI dan optimalisasi kinerja ([#9462](https://github.com/nocobase/nocobase/pull/9462)) oleh @cgyrock
  - Karyawan AI mendukung pemrosesan paralel beberapa percakapan ([#9344](https://github.com/nocobase/nocobase/pull/9344)) oleh @cgyrock
  - Peningkatan alat pengeditan RunJS Nathan dan mengurangi lag selama percakapan AI yang panjang ([#9311](https://github.com/nocobase/nocobase/pull/9311)) oleh @2013xile
  - Perbarui konfigurasi tugas pintasan karyawan AI untuk menggunakan komponen pengaturan keterampilan yang sama dengan konfigurasi node karyawan AI alur kerja ([#9246](https://github.com/nocobase/nocobase/pull/9246)) oleh @cgyrock
  - Sesuaikan interaksi konfigurasi keterampilan/alat untuk instruksi karyawan AI ([#9232](https://github.com/nocobase/nocobase/pull/9232)) oleh @cgyrock
  - Perbarui prompt pengguna kotak obrolan AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) oleh @heziqiang
  - Perbarui prompt pengguna kotak obrolan AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) oleh @heziqiang
- **[Manajer file]** Plugin penyimpanan pihak ketiga sekarang dapat mendaftarkan formulir jenis penyimpanan mereka sendiri di halaman pengaturan manajer file v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) oleh @Molunerfinn
- **[Blok: Kanban]**

  - Peningkatan konsistensi spasi bidang detail v2 dan membuat spasi kartu kanban dan kolom lebih baik beradaptasi dengan pengaturan tema. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) oleh @jiannx
  - Mengurangi lebar kolom kanban default. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) oleh @jiannx
  - Peningkatan pengaturan pembuatan blok Kalender dan Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) oleh @jiannx
- **[IdP: OAuth]** Sesi OAuth sekarang menggunakan pengaturan kedaluwarsa yang sama dengan kebijakan token sistem ([#9345](https://github.com/nocobase/nocobase/pull/9345)) oleh @2013xile
- **[Kontrol akses]** Menambahkan API baru untuk keterampilan acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) oleh @Andrew1989Y
- **[Flow engine]** Menambahkan API baru untuk pembuatan UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) oleh @gchust
- **[Aksi: Permintaan khusus]**

  - menambahkan model aksi untuk permintaan khusus ([#8890](https://github.com/nocobase/nocobase/pull/8890)) oleh @jiannx
  - Streaming peristiwa mendukung permintaan khusus ([#8749](https://github.com/nocobase/nocobase/pull/8749)) oleh @jiannx
- **[Alur Kerja: Peristiwa pra-aksi]** Menambahkan aturan validasi untuk pemicu dan node ([#8971](https://github.com/nocobase/nocobase/pull/8971)) oleh @mytharcher
- **[Bidang koleksi: pembagian administratif China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) oleh @jiannx
- **[Auth: SAML 2.0]**

  - Pengalihan masuk SAML/CAS sekarang mengikuti prefiks klien modern. oleh @Molunerfinn
  - Menambahkan entri client-v2 untuk plugin autentikasi CAS dan SAML sehingga berfungsi dengan halaman masuk v2 dan pengaturan Authenticators. oleh @Molunerfinn
- **[Pembatasan IP]** Menambahkan klien v2 untuk plugin pembatasan IP. oleh @Molunerfinn
- **[Merek khusus]** Pengaturan merek khusus sekarang tersedia di klien v2 oleh @zhangzhonghe
- **[Alur Kerja: Webhook]** Menambahkan validasi untuk membuat API pemicu/node oleh @mytharcher
- **[Alur Kerja: Subalur]**

  - Menghapus kopling transaksi riwayat alur kerja dari instruksi alur kerja subalur. oleh @mytharcher
  - Menambahkan validasi untuk membuat API node oleh @mytharcher
- **[Cetak template]** Memperbarui metadata koleksi template cetak untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Auth: OIDC]** Pengalihan masuk OIDC sekarang mengikuti prefiks klien modern. oleh @Molunerfinn
- **[Riwayat rekaman]** Memperbarui metadata koleksi riwayat rekaman untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Alur Kerja: Persetujuan]**

  - Menambahkan bendera `async` untuk instruksi persetujuan, untuk beradaptasi dengan API pembuatan node baru di kanvas alur kerja oleh @mytharcher
  - Menghapus kopling transaksi riwayat alur kerja dari instruksi alur kerja persetujuan. oleh @mytharcher
  - Menambahkan validasi untuk pembuatan node persetujuan oleh @mytharcher
  - Memperbarui metadata koleksi persetujuan alur kerja untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
  - Menambahkan validasi untuk API pemicu/node oleh @mytharcher
  - Sesuaikan aturan validasi untuk konfigurasi pemicu persetujuan dan konfigurasi node, untuk memastikan bidang UI ada oleh @mytharcher
- **[Log audit]** Memperbarui metadata koleksi logger audit untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Manajer email]** Memperbarui metadata koleksi manajer email untuk klasifikasi cadangan kontrol versi. oleh @cgyrock
- **[Pengawas aplikasi]** Memperbarui metadata koleksi pengawas aplikasi untuk klasifikasi cadangan kontrol versi. oleh @cgyrock

### 🐛 Perbaikan Bug

- **[tidak ditentukan]**

  - menyelaraskan jalur konfigurasi nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) oleh @chenos
  - Memperbaiki tautan mati dalam dokumentasi terjemahan dan mengaktifkan deteksi tautan mati secara default di build dokumentasi. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) oleh @Molunerfinn
  - Perbaiki alur kerja dependensi-dan-build sehingga kegagalan checkout plugin pro mandiri memutus CI alih-alih secara diam-diam melewatkan cakupan build. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) oleh @Molunerfinn
  - Memperbaiki file terjemahan yang membengkak dan menyelaraskan struktur dokumentasi lintas bahasa. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) oleh @Molunerfinn
  - Memperbaiki pemilih bahasa yang menghasilkan URL yang salah (misalnya, `/cn/es/` alih-alih `/es/`) di situs dokumentasi. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) oleh @Molunerfinn
- **[client-v2]**

  - Memperbaiki bidang JSON di tampilan tampilan client-v2 yang merender sel kosong untuk nilai objek. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) oleh @katherinehhh
  - Memperbaiki bidang opsi V2 yang salah menerjemahkan label opsi biasa di lingkungan yang dilokalkan. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) oleh @katherinehhh
  - Memperbaiki kolom tabel v2 menjadi tidak terlihat ketika lebar kolom khusus diatur ke 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) oleh @katherinehhh
  - Menyesuaikan semua pemilih bidang relasi untuk membatasi bidang asosiasi hingga maksimal dua tingkat ([#9454](https://github.com/nocobase/nocobase/pull/9454)) oleh @jiannx
  - Perbaiki kesalahan simpan aturan tautan menu ([#9666](https://github.com/nocobase/nocobase/pull/9666)) oleh @zhangzhonghe
  - Perbaiki spasi berlebihan di atas blok di halaman v2 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) oleh @zhangzhonghe
  - pertahankan nilai bidang yang ditetapkan ([#9640](https://github.com/nocobase/nocobase/pull/9640)) oleh @katherinehhh
  - Perbaiki tab masuk sub-aplikasi yang merender template terjemahan mentah, dan cegah laci edit metode autentikasi v2 menjatuhkan nilai bidang saat dikirim. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) oleh @Molunerfinn
  - Tingkatkan kinerja halaman manajer plugin dengan menggunakan CSS line-clamp alih-alih antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) oleh @Molunerfinn
  - Memperbaiki metadata bahasa browser sehingga halaman aplikasi mengikuti bahasa aplikasi yang dipilih alih-alih ditandai sebagai Bahasa Inggris. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) oleh @Molunerfinn
  - Memperbaiki pendaftaran dependensi dnd-kit yang tidak konsisten. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) oleh @jiannx
  - Memperbaiki rute v2 plugin Kanban gagal dimuat karena dependensi dnd-kit tidak disediakan oleh klien. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) oleh @jiannx
  - Komponen Tabel v2 bersama sekarang menampilkan pemilih ukuran halaman secara default, cocok dengan perilaku v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) oleh @Molunerfinn
  - Memperbaiki masalah di mana daftar opsi bidang judul kosong untuk bidang relasi di blok tabel ([#9490](https://github.com/nocobase/nocobase/pull/9490)) oleh @katherinehhh
  - Pertahankan grup kosong setelah memfilter menu v1 di tata letak v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana halaman menjadi kosong di belakang dialog pengaktifan plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) oleh @zhangzhonghe
  - Perbaiki halaman admin v1 yang mogok ketika mereka mereferensikan modul plugin v2 di build produksi. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) oleh @Molunerfinn
  - Memperbaiki kesalahan saat memilih bidang asosiasi di pengaturan bidang. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) oleh @gchust
  - Memperbaiki masalah di mana halaman 404 berkedip setelah aplikasi dimulai ([#9365](https://github.com/nocobase/nocobase/pull/9365)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana beberapa halaman v2 gagal memuat plugin jarak jauh ([#9369](https://github.com/nocobase/nocobase/pull/9369)) oleh @zhangzhonghe
  - Perbaiki placeholder seret blok halaman v2 dan masalah posisi jatuhkan ([#9361](https://github.com/nocobase/nocobase/pull/9361)) oleh @zhangzhonghe
  - Memperbaiki pemuatan plugin jarak jauh sehingga URL plugin yang sudah diakhiri dengan `.js` tidak diselesaikan ke jalur `.js.js` duplikat. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) oleh @Molunerfinn
  - Memperbaiki masalah di mana `RemoteSelect` tidak merender dalam konfigurasi ikatan alur kerja ([#9314](https://github.com/nocobase/nocobase/pull/9314)) oleh @mytharcher
- **[client]**

  - Memperbaiki masalah di mana blok mungkin salah ditampilkan sebagai dihapus setelah menyegarkan halaman ([#9662](https://github.com/nocobase/nocobase/pull/9662)) oleh @zhangzhonghe
  - perbaiki masalah di mana sub-tabel dalam sub-formulir tidak dapat menambahkan baris kedua ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh
  - perbaiki pertahankan format waktu untuk bidang waktu v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh
  - tingkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
  - perbaiki sinkronisasi nilai popup pemilih tanggal seluler ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh
  - Memperbaiki pemuatan mode dev untuk plugin penyimpanan bawaan yang bergantung pada ekspor bernama dari plugin sumber lokal. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) oleh @Molunerfinn
  - Memperbaiki masalah di mana pengaturan sistem muncul kosong setelah dikirim ([#9458](https://github.com/nocobase/nocobase/pull/9458)) oleh @zhangzhonghe
  - filter blok opsional yang tidak penting di kotak pop-up pemilihan bidang terkait ([#9224](https://github.com/nocobase/nocobase/pull/9224)) oleh @jiannx
  - Memperbaiki masalah di mana judul halaman tidak diperbarui setelah mengganti menu ([#8864](https://github.com/nocobase/nocobase/pull/8864)) oleh @zhangzhonghe
- **[flow-engine]**

  - Memperbaiki masalah di mana pencarian bidang dibersihkan saat mengarahkan kursor ke bidang asosiasi ([#9646](https://github.com/nocobase/nocobase/pull/9646)) oleh @zhangzhonghe
  - Memperbaiki menu bertingkat yang tidak stabil saat mengetik di kotak pencarian ([#9473](https://github.com/nocobase/nocobase/pull/9473)) oleh @zhangzhonghe
  - Memperbaiki pesan kesalahan yang salah di konsol browser. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) oleh @gchust
  - Memperbaiki submenu bidang relasi yang tidak stabil di menu submodel ([#9417](https://github.com/nocobase/nocobase/pull/9417)) oleh @jiannx
  - Menambahkan potongan js untuk mengatur item formulir dan item detail ([#8974](https://github.com/nocobase/nocobase/pull/8974)) oleh @jiannx
- **[build]**

  - Aset teks di build server sekarang disalin sebagai file alih-alih diubah menjadi modul JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) oleh @Molunerfinn
  - Memperbaiki kegagalan build plugin ketika kode klien v1 mengimpor entri `/client-v2` plugin lain. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) oleh @Molunerfinn
- **[cli-v1]**

  - Memperbaiki startup pengembangan create-nocobase-app dengan menggunakan kembali shell aplikasi yang dikemas sambil mengaktifkan pengembangan plugin lokal. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) oleh @Molunerfinn
  - Memperbaiki kegagalan startup pengembangan di aplikasi yang dibuat dengan create-nocobase-app yang disebabkan oleh resolusi jalur klien app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) oleh @Molunerfinn
- **[server]**

  - Memperbaiki permintaan penemuan OAuth sub-aplikasi yang dirutekan sebagai permintaan aplikasi utama ([#9383](https://github.com/nocobase/nocobase/pull/9383)) oleh @2013xile
  - Mendukung mendapatkan aplikasi target berdasarkan hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) oleh @2013xile
- **[cli]**

  - Memperbaiki opsi boolean CLI sehingga dapat dinonaktifkan dengan bendera yang dinegasikan ([#9337](https://github.com/nocobase/nocobase/pull/9337)) oleh @2013xile
  - Memperbaiki kegagalan login OAuth CLI di Windows yang disebabkan oleh URL otorisasi yang panjang ([#9159](https://github.com/nocobase/nocobase/pull/9159)) oleh @2013xile
- **[ai]** Memperbaiki pengaturan bidang kategori yang hilang selama pendaftaran karyawan AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) oleh @cgyrock
- **[test]** Memperbaiki build plugin sehingga dependensi server dengan nama paket bertitik seperti `big.js` dikemas ke dalam `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) oleh @Molunerfinn
- **[Kalender]**

  - Memperbaiki masalah di mana blok Detail dan Edit tidak dapat ditambahkan di laci detail blok kalender v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) oleh @jiannx
  - Memperbaiki warna acara kalender tidak merender dari bidang warna yang dikonfigurasi di halaman v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) oleh @jiannx
  - Memperbaiki gaya kursor untuk item acara di overlay lebih-banyak-acara kalender ([#9519](https://github.com/nocobase/nocobase/pull/9519)) oleh @jiannx
  - Jangan mendaftarkan aksi kalender ke blok lain ([#9200](https://github.com/nocobase/nocobase/pull/9200)) oleh @jiannx
- **[Karyawan AI]**

  - Peningkatan prompt kueri data karyawan AI untuk memuat keterampilan yang diperlukan sebelum menggunakan alat kueri. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) oleh @cgyrock
  - Memperbaiki tombol asisten Dara yang hilang di pengaturan bagan client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) oleh @cgyrock
  - Node karyawan AI Alur Kerja dapat menggunakan model default ([#9679](https://github.com/nocobase/nocobase/pull/9679)) oleh @cgyrock
  - Memperbaiki kesalahan `ctx.get` di node alur kerja karyawan AI ([#9661](https://github.com/nocobase/nocobase/pull/9661)) oleh @cgyrock
  - Memperbaiki kesalahan ketika karyawan AI mengakses basis pengetahuan hanya-baca ([#9538](https://github.com/nocobase/nocobase/pull/9538)) oleh @cgyrock
  - Memperbaiki kartu panggilan alat AI tidak muncul segera ketika peristiwa alat yang dialirkan terpisah ([#9534](https://github.com/nocobase/nocobase/pull/9534)) oleh @2013xile
  - Memperbaiki masalah di mana izin peran operator tidak berlaku di node karyawan AI ([#9513](https://github.com/nocobase/nocobase/pull/9513)) oleh @cgyrock
  - Memperbaiki kesalahan muat plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) oleh @cgyrock
  - Memperbaiki node karyawan AI alur kerja tidak berakhir dengan benar setelah penugasan alat. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) oleh @cgyrock
  - Memperbaiki kesalahan lampiran bidang asosiasi bacaan node karyawan AI di alur kerja ([#9377](https://github.com/nocobase/nocobase/pull/9377)) oleh @cgyrock
  - Memperbaiki masalah di mana node karyawan AI alur kerja menghapus keterampilan setelah mengganti karyawan AI ([#9342](https://github.com/nocobase/nocobase/pull/9342)) oleh @cgyrock
  - Memperbaiki kesalahan rendering tugas pintasan karyawan AI ([#9267](https://github.com/nocobase/nocobase/pull/9267)) oleh @cgyrock
  - Memperbaiki kesalahan di API untuk mengambil daftar karyawan AI ([#9241](https://github.com/nocobase/nocobase/pull/9241)) oleh @cgyrock
  - Perilaku delegasi tugas Atlas yang disempurnakan dan Viz diperbarui untuk menggunakan alur kerja laporan bisnis untuk permintaan laporan ([#9229](https://github.com/nocobase/nocobase/pull/9229)) oleh @2013xile
  - Karyawan AI Alur Kerja: Penyesuaian UI dan perbaikan bug. ([#9213](https://github.com/nocobase/nocobase/pull/9213)) oleh @cgyrock
  - Memperbaiki anomali pencatatan log dalam instruksi karyawan AI ([#9180](https://github.com/nocobase/nocobase/pull/9180)) oleh @cgyrock
  - Memperbaiki pengurutan kueri agregat yang dijatuhkan oleh ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) oleh @2013xile
  - Memperbaiki masalah di mana pesan kesalahan tidak ditampilkan dalam percakapan karyawan AI ([#9097](https://github.com/nocobase/nocobase/pull/9097)) oleh @cgyrock
  - Memperbaiki masalah di mana karyawan AI tidak dapat menggunakan keterampilan ([#9023](https://github.com/nocobase/nocobase/pull/9023)) oleh @cgyrock
  - Memperbaiki masalah di mana LLM masih mencoba memuat keterampilan setelah alat getSkill dinonaktifkan ([#9013](https://github.com/nocobase/nocobase/pull/9013)) oleh @cgyrock
  - Memperbaiki kasus uji yang gagal di modul ai dari paket inti. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) oleh @cgyrock
- **[Manajer sumber data]**

  - Memperbaiki tampilan bidang judul basi saat membuka kembali laci konfigurasi bidang sumber data v2 setelah mengubah bidang judul. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) oleh @katherinehhh
  - Peningkatan pesan kesalahan manajer sumber data V2 ketika operasi koleksi, bidang, sinkronisasi, dan pemuatan tabel gagal. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) oleh @katherinehhh
  - Memperbaiki lokalisasi bidang multi-ruang di manajer sumber data v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) oleh @jiannx
  - Mengoptimalkan penamaan alat MCP dan mengurangi respons API yang berlebihan untuk menghindari konsumsi konteks percakapan AI yang berlebihan ([#9000](https://github.com/nocobase/nocobase/pull/9000)) oleh @2013xile
- **[Blok: Peta]** Memperbaiki bidang geometri peta yang hilang dari menu tambah-bidang manajer sumber data v2 setelah mengaktifkan plugin peta. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) oleh @katherinehhh
- **[Koleksi: SQL]** Memblokir akses Koleksi SQL ke metadata PostgreSQL sensitif ([#9683](https://github.com/nocobase/nocobase/pull/9683)) oleh @2013xile
- **[Alur Kerja: Aksi peristiwa khusus]**

  - Memperbaiki aksi pemicu alur kerja yang hilang dari daftar tombol panel aksi workbench. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) oleh @katherinehhh
  - Perbaiki opsi Trigger workflow duplikat di menu aksi blok v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) oleh @zhangzhonghe
  - Filter opsi pengikatan alur kerja aksi khusus oleh koleksi blok saat ini. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) oleh @mytharcher
- **[Aksi: Duplikat rekaman]** Setel ulang status tombol pada kegagalan pengiriman ([#9676](https://github.com/nocobase/nocobase/pull/9676)) oleh @katherinehhh
- **[Blok: Gantt]**

  - Peningkatan penempatan tooltip gantt untuk menghindari menutupi bilah tugas dan menyelaraskan label tugas secara konsisten di dalam dan di luar bilah ([#9638](https://github.com/nocobase/nocobase/pull/9638)) oleh @jiannx
  - Memperbaiki jalur folder bersama gantt v2 dan menambahkan zebra striping. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) oleh @jiannx
- **[Pengaturan lisensi]**

  - Menambahkan dukungan client-v2 untuk pengaturan lisensi dan injeksi lisensi komersial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) oleh @jiannx
  - menyelesaikan symlinked bundled deps ([#9518](https://github.com/nocobase/nocobase/pull/9518)) oleh @chenos
- **[Manajer file]** Peningkatan pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
  Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)
- **[Blok: iframe]** Perbaiki konten iframe tidak mengisi tinggi blok yang dikonfigurasi ([#9540](https://github.com/nocobase/nocobase/pull/9540)) oleh @katherinehhh
- **[Aksi: Ekspor rekaman]** Tingkatkan kinerja konfigurasi bidang dengan banyak bidang asosiasi ([#9524](https://github.com/nocobase/nocobase/pull/9524)) oleh @katherinehhh
- **[Lokalisasi]** Memperbaiki terjemahan referensi lokalisasi bawaan untuk tugas terjemahan AI ([#9531](https://github.com/nocobase/nocobase/pull/9531)) oleh @2013xile
- **[Autentikasi]** Cegah server mogok ketika token auth WebSocket mereferensikan autentikator yang plugin tipe auth-nya dibongkar atau hilang. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) oleh @Molunerfinn
- **[Alur Kerja: JavaScript]**

  - Memperbaiki pemuatan paket runtime QuickJS JavaScript alur kerja di build produksi. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan muncul saat mengkonfigurasi node JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) oleh @mytharcher
- **[Blok: Markdown]** Memperbaiki masalah blok Markdown v2 yang melaporkan kesalahan ([#9440](https://github.com/nocobase/nocobase/pull/9440)) oleh @zhangzhonghe
- **[Blok: Pohon]**

  - Peningkatan pengaturan blok filter pohon dan memperbaiki asosiasi yang tidak didukung, fallback bidang judul, dan perilaku setel ulang pencarian. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) oleh @jiannx
  - Perbaiki tampilan abnormal node blok filter ([#9260](https://github.com/nocobase/nocobase/pull/9260)) oleh @jiannx
- **[Seluler (usang)]** Memperbaiki popup pesan seluler yang tidak dapat ditutup atau digulir ([#9424](https://github.com/nocobase/nocobase/pull/9424)) oleh @zhangzhonghe
- **[AI: Server MCP]**

  - Memperbaiki pengemasan server MCP sehingga dependensi runtime disertakan ([#9401](https://github.com/nocobase/nocobase/pull/9401)) oleh @2013xile
  - Memperbaiki ketidakcocokan autentikasi yang disebabkan oleh header yang diteruskan tidak terkait di alat CRUD generik MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) oleh @2013xile
  - Memperbaiki alat MCP yang dihasilkan dari Swagger ketika skema input menyertakan tipe `null` atau penanda `nullable` yang tidak valid untuk validasi alat OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) oleh @2013xile
- **[Flow engine]** Memperbaiki masalah di mana blok yang dihasilkan oleh AI tidak dapat dikonversi dari template referensi kembali ke template duplikat. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) oleh @gchust
- **[Blok: Kanban]**

  - Peningkatan gaya kompak kartu Kanban dan mengoptimalkan pemilihan template popup buat cepat. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) oleh @jiannx
  - Memperbaiki blok terkait kanban yang menggunakan parameter sumber daya runtime yang belum terselesaikan dalam konteks popup atau halaman sekunder. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) oleh @jiannx
  - Memperbaiki tampilan berulang dari lapisan mengambang konfigurasi bidang ([#9271](https://github.com/nocobase/nocobase/pull/9271)) oleh @jiannx
- **[Aksi: Permintaan khusus]** Upgrade Koa ke v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) oleh @chenos
- **[Visualisasi data]** Memperbaiki pemilih bidang kosong dalam konfigurasi kueri bagan di halaman alur ([#9276](https://github.com/nocobase/nocobase/pull/9276)) oleh @2013xile
- **[IdP: OAuth]**

  - Memperbaiki kegagalan masuk CLI OAuth dan membatasi pendaftaran dinamis ke URL callback lokal ([#9248](https://github.com/nocobase/nocobase/pull/9248)) oleh @2013xile
  - Memperbaiki kegagalan pendaftaran klien OAuth dan penyegaran token setelah restart layanan ([#9139](https://github.com/nocobase/nocobase/pull/9139)) oleh @2013xile
  - Memperbaiki akses OAuth untuk permintaan API reguler ([#9120](https://github.com/nocobase/nocobase/pull/9120)) oleh @2013xile
  - Memperbaiki pengalihan yang salah setelah login MCP OAuth di sub-aplikasi ([#9015](https://github.com/nocobase/nocobase/pull/9015)) oleh @2013xile
- **[Alur Kerja: Node agregat]** Memperbaiki masalah di mana node agregat tidak dapat disimpan karena aturan validasi yang salah ([#9208](https://github.com/nocobase/nocobase/pull/9208)) oleh @mytharcher
- **[Alur Kerja: Node loop]** Memperbaiki validasi node alur kerja ([#9111](https://github.com/nocobase/nocobase/pull/9111)) oleh @mytharcher
- **[Kontrol akses]** perbarui acl swagger untuk server mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) oleh @Andrew1989Y
- **[Alur Kerja: node mailer]** Memperbaiki validasi untuk bidang variabel ([#9047](https://github.com/nocobase/nocobase/pull/9047)) oleh @mytharcher
- **[Alur Kerja]**

  - Memperbaiki aturan validasi instruksi kondisi yang salah ([#9017](https://github.com/nocobase/nocobase/pull/9017)) oleh @mytharcher
  - Memperbaiki masalah di mana mode pemicu koleksi tidak dapat diatur ke "buat atau perbarui" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) oleh @mytharcher
- **[Kebijakan kata sandi]** Memperbaiki kegagalan masuk yang menutupi kesalahan sebenarnya dengan "argument #1 unsupported type undefined" ketika kesalahan yang mendasarinya tidak memiliki kode status. oleh @Molunerfinn
- **[Sumber data: REST API]** Memperbaiki kegagalan build deklarasi plugin sumber data REST API yang disebabkan oleh deklarasi tipe client-v2 manajer sumber data yang tidak cocok. oleh @katherinehhh
- **[plugin-commercial]** Menambahkan komponen lisensi komersial client-v2 dan entri status lisensi bilah atas. oleh @jiannx
- **[Auth: SAML 2.0]** Memperbaiki interceptor pengalihan otomatis SAML yang membuat shell aplikasi berkedip dan membuka laci dua kali pada setiap navigasi. oleh @Molunerfinn
- **[Alur Kerja: Webhook]** Memperbaiki masalah di mana pembuatan node respons dicegat oleh validasi konfigurasi `statusCode` oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki `migration:create` yang mengembalikan `taskId` dari rekaman tugas async. oleh @Andrew1989Y
- **[Cetak template]** Memperbaiki kesalahan konversi PDF cetak template tidak dikembalikan ke klien dengan benar oleh @jiannx
- **[Manajer email]**

  - tidak ada konfirmasi penutupan yang ditampilkan setelah email dikirim oleh @jiannx
  - Memperbaiki tampilan judul identitas email oleh @jiannx
