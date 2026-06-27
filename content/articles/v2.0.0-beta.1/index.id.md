---
title: "NocoBase v2.0.0-beta.1: Dukungan komponen pemeliharaan yang ditentukan plugin saat aplikasi memasuki status pemeliharaan"
description: "Catatan Rilis v2.0.0-beta.1"
---

### 🎉 Fitur Baru

- **[undefined]** Menambahkan plugin "Blok Referensi" eksperimental, yang memungkinkan penggunaan ulang blok yang sudah ada dengan mereferensi atau menyalin. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) oleh @gchust

- **[client]**
  - Mendukung komponen pemeliharaan yang ditentukan plugin saat aplikasi memasuki status pemeliharaan ([#8252](https://github.com/nocobase/nocobase/pull/8252)) oleh @cgyrock

  - Saat membuat koleksi, tipe field id preset dapat diubah ([#8129](https://github.com/nocobase/nocobase/pull/8129)) oleh @cgyrock

  - menambahkan dukungan untuk pengaturan tambah/pilih/pisahkan di subform to-many ([#8099](https://github.com/nocobase/nocobase/pull/8099)) oleh @katherinehhh

  - Mendukung kustomisasi gaya global di editor tema ([#7960](https://github.com/nocobase/nocobase/pull/7960)) oleh @ljmiaoo

  - mendukung pengaturan aturan pengurutan default di blok detail ([#8070](https://github.com/nocobase/nocobase/pull/8070)) oleh @katherinehhh

  - Mendukung pengaturan tipe data untuk field Angka (opsi: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) oleh @chenos

  - mendukung pengurutan field kolom di tabel ([#7900](https://github.com/nocobase/nocobase/pull/7900)) oleh @katherinehhh

  - menambahkan dukungan buat cepat ke pilihan field asosiasi ([#7887](https://github.com/nocobase/nocobase/pull/7887)) oleh @katherinehhh

  - mendukung pemilih kaskade untuk field asosiasi koleksi pohon ([#7846](https://github.com/nocobase/nocobase/pull/7846)) oleh @katherinehhh

  - Mendukung drag-and-drop untuk aksi kolom tabel ([#7842](https://github.com/nocobase/nocobase/pull/7842)) oleh @zhangzhonghe

  - menambahkan dukungan paginasi ke sub tabel ([#7754](https://github.com/nocobase/nocobase/pull/7754)) oleh @katherinehhh

  - Alur Peristiwa: Memperkenalkan aksi standar baru untuk meningkatkan opsi kustomisasi penanganan peristiwa, memungkinkan pengguna menyederhanakan alur kerja dan meningkatkan efisiensi ([#7672](https://github.com/nocobase/nocobase/pull/7672)) oleh @zhangzhonghe

  - Menambahkan blok markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) oleh @katherinehhh

  - Dukungan untuk mengatur aturan tautan untuk sub-form ([#7640](https://github.com/nocobase/nocobase/pull/7640)) oleh @zhangzhonghe

  - Menambahkan dukungan untuk pendengar peristiwa klik baris tabel, memungkinkan pengguna menjalankan aksi tertentu saat baris dalam tabel diklik ([#7622](https://github.com/nocobase/nocobase/pull/7622)) oleh @zhangzhonghe

  - Menambahkan dukungan untuk variabel kustom ([#7585](https://github.com/nocobase/nocobase/pull/7585)) oleh @zhangzhonghe

  - Menambahkan variabel "Tipe perangkat saat ini" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) oleh @zhangzhonghe

- **[File manager]** Mendukung konfigurasi metode penggantian nama file ([#8231](https://github.com/nocobase/nocobase/pull/8231)) oleh @JAVA-LW

- **[Workflow]**
  - Menambahkan variabel sistem baru di alur kerja, termasuk `instanceId` dan `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) oleh @mytharcher

  - Menambahkan node "Multi-kondisi", menyediakan kontrol alur seperti `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) oleh @mytharcher

- **[Blok: Peta]** menambahkan blok peta 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) oleh @katherinehhh

- **[Visualisasi data]**
  - menambahkan karyawan AI untuk mengonfigurasi grafik ([#7815](https://github.com/nocobase/nocobase/pull/7815)) oleh @heziqiang

  - menambahkan sumber data sql grafik ([#7830](https://github.com/nocobase/nocobase/pull/7830)) oleh @heziqiang

  - menambahkan tipe grafik "Grafik Donat" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) oleh @heziqiang

- **[Flow engine]** Mendukung penggunaan string template LiquidJS dalam pernyataan SQL ([#7667](https://github.com/nocobase/nocobase/pull/7667)) oleh @2013xile

- **[Manajer sumber data]**
  - Sumber data utama sekarang mendukung pembacaan tabel database secara langsung dari database utama dan memungkinkan modifikasi antarmuka field ([#7118](https://github.com/nocobase/nocobase/pull/7118)) oleh @aaaaaajie

  - Sumber data utama sekarang mendukung pembacaan tabel database secara langsung dari database utama dan memungkinkan modifikasi antarmuka field ([#7118](https://github.com/nocobase/nocobase/pull/7118)) oleh @aaaaaajie

- **[Blok: GridCard]** Menambahkan blok kartu grid 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) oleh @katherinehhh

- **[Blok: Daftar]** Menambahkan blok daftar 2.0 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) oleh @katherinehhh

- **[Blok: Panel aksi]** Menambahkan blok panel aksi 2.0 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) oleh @katherinehhh

- **[Karyawan AI]** Meningkatkan fungsi pencarian web dari plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) oleh @cgyrock

- **[Telemetri]** Menambahkan plugin baru: Telemetri, plugin telemetri berbasis OpenTelemetry yang menyediakan metrik CPU, memori, dan permintaan HTTP dengan dukungan ekspor HTTP oleh @2013xile

- **[Draf formulir]** Draf formulir oleh @chenos

- **[Penyimpanan file: S3(Pro)]** Menambahkan opsi mode penggantian nama untuk penyimpanan S3 Pro oleh @mytharcher

- **[Alur Kerja: Persetujuan]**
  - Mengizinkan untuk memilih apakah akan menampilkan snapshot atau record terbaru di UI proses persetujuan oleh @mytharcher

  - Menambahkan konfigurasi audiens untuk mengontrol siapa yang dapat memulai persetujuan oleh @mytharcher

- **[Manajer Email]** Implementasi manajemen email 2.0 oleh @jiannx

### 🚀 Peningkatan

- **[undefined]**
  - memperbarui dokumentasi bahasa Inggris dari plugin grafik ([#7748](https://github.com/nocobase/nocobase/pull/7748)) oleh @heziqiang

  - memperbarui dokumen ikhtisar grafik ([#7702](https://github.com/nocobase/nocobase/pull/7702)) oleh @heziqiang

- **[flow-engine]**
  - Mendukung metode window.loacation.reload di lingkungan runjs. ([#8316](https://github.com/nocobase/nocobase/pull/8316)) oleh @gchust

  - Mengoptimalkan masalah kinerja saat mengganti mode konfigurasi ([#8241](https://github.com/nocobase/nocobase/pull/8241)) oleh @zhangzhonghe

  - Mendukung objek FormData di lingkungan runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) oleh @gchust

  - mendukung menyembunyikan menu konfigurasi langkah secara dinamis ([#7924](https://github.com/nocobase/nocobase/pull/7924)) oleh @gchust

  - Menambahkan opsi useCache ke FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) oleh @zhangzhonghe

  - Menambahkan metode `removeModelWithSubModels` untuk menghapus model dan sub-modelnya secara rekursif ([#8064](https://github.com/nocobase/nocobase/pull/8064)) oleh @zhangzhonghe

  - Mendukung peralihan kelas model aliran secara dinamis ([#7952](https://github.com/nocobase/nocobase/pull/7952)) oleh @gchust

  - Mendukung mendengarkan peristiwa perubahan pohon model aliran di flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) oleh @gchust

  - meningkatkan resolusi variabel record saat ini, membuat pembukaan dialog lebih cepat ([#7895](https://github.com/nocobase/nocobase/pull/7895)) oleh @gchust

  - Mengoptimalkan struktur API dari pustaka pihak ketiga dalam konteks runjs dan menambahkan dukungan untuk pustaka ikon Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) oleh @gchust

  - Mengoptimalkan gaya toolbar untuk mencegah ikon terhalang ([#7883](https://github.com/nocobase/nocobase/pull/7883)) oleh @zhangzhonghe

  - Mengoptimalkan gaya toolbar untuk tab halaman ([#7795](https://github.com/nocobase/nocobase/pull/7795)) oleh @zhangzhonghe

  - mendukung operasi tertunda dalam model aliran ([#7786](https://github.com/nocobase/nocobase/pull/7786)) oleh @gchust

  - Meningkatkan pesan kesalahan yang ditampilkan saat menyalin UID gagal, memberikan instruksi yang lebih jelas untuk menyelesaikan masalah. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) oleh @gchust

  - Mendukung pendefinisian konteks variabel dalam definisi langkah aliran ([#7674](https://github.com/nocobase/nocobase/pull/7674)) oleh @gchust

  - Mendukung melewatkan langkah aliran runjs dengan menambahkan skipRunJs=true ke string kueri URL. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) oleh @gchust

  - mendukung variabel popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) oleh @gchust

  - Menstandarisasi alur kerja otomatis untuk dipicu secara konsisten oleh peristiwa "beforeRender", memastikan operasi yang dapat diprediksi dan terpadu di seluruh proses. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) oleh @gchust

  - Meningkatkan pengalaman pengeditan kode dengan cuplikan yang lebih kaya dan penyelesaian kode yang sadar konteks untuk berbagai skenario ([#7559](https://github.com/nocobase/nocobase/pull/7559)) oleh @gchust

  - Mengoptimalkan fungsionalitas drag and drop ([#7526](https://github.com/nocobase/nocobase/pull/7526)) oleh @zhangzhonghe

- **[sdk]** Meningkatkan implementasi penyimpanan API ([#8308](https://github.com/nocobase/nocobase/pull/8308)) oleh @chenos

- **[client]**
  - Mendukung mode layar penuh untuk editor kode JS. ([#8294](https://github.com/nocobase/nocobase/pull/8294)) oleh @gchust

  - membuat Tambah anak setara dengan Tambah baru dari asosiasi anak yang sesuai ([#8272](https://github.com/nocobase/nocobase/pull/8272)) oleh @katherinehhh

  - mendukung pembersihan nilai default untuk field warna ([#8268](https://github.com/nocobase/nocobase/pull/8268)) oleh @katherinehhh

  - menggunakan select untuk konfigurasi lebar kolom operasi ([#8218](https://github.com/nocobase/nocobase/pull/8218)) oleh @katherinehhh

  - mendukung lebar kolom kustom untuk kolom tabel ([#8200](https://github.com/nocobase/nocobase/pull/8200)) oleh @katherinehhh

  - mengubah lebar kolom tabel untuk menggunakan opsi yang dapat dipilih ([#8188](https://github.com/nocobase/nocobase/pull/8188)) oleh @katherinehhh

  - meningkatkan gaya recordPicker dengan maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) oleh @katherinehhh

  - mengoptimalkan opsi konfigurasi (Blok, Field, Aksi) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) oleh @katherinehhh

  - mendukung pemformatan angka untuk field persentase ([#8123](https://github.com/nocobase/nocobase/pull/8123)) oleh @katherinehhh

  - memperbaiki lompatan paginasi subtable setelah penghapusan baris dan menambahkan dukungan untuk aturan validasi kolom ([#8094](https://github.com/nocobase/nocobase/pull/8094)) oleh @katherinehhh

  - menyesuaikan tampilan field besar di subtable yang dapat diedit ([#8078](https://github.com/nocobase/nocobase/pull/8078)) oleh @katherinehhh

  - mendukung elipsis untuk konten field JSON yang meluap ([#8067](https://github.com/nocobase/nocobase/pull/8067)) oleh @katherinehhh

  - mendukung pengaturan allowMultiple di komponen unggah lampiran ([#8052](https://github.com/nocobase/nocobase/pull/8052)) oleh @katherinehhh

  - menampilkan opsi yang diciutkan saat dihover di komponen Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) oleh @katherinehhh

  - Mendukung inisialisasi field filter yang dipilih dalam kueri grafik ([#7933](https://github.com/nocobase/nocobase/pull/7933)) oleh @heziqiang

  - Mengadaptasi Komponen untuk Perangkat Seluler ([#7870](https://github.com/nocobase/nocobase/pull/7870)) oleh @zhangzhonghe

  - Menambahkan dukungan untuk pustaka Day.js dalam konteks skrip RunJS, memungkinkan manipulasi tanggal dan waktu yang lebih mudah. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) oleh @gchust

  - menambahkan versi info halaman ke konteks flow engine ([#7826](https://github.com/nocobase/nocobase/pull/7826)) oleh @gchust

  - meningkatkan Editor Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) oleh @katherinehhh

  - beradaptasi dengan field tableoid di 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) oleh @katherinehhh

  - mendukung jsx di editor kode JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) oleh @gchust

  - mendukung field asosiasi di model field JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) oleh @gchust

- **[server]** Menambahkan toleransi kesalahan saat instance aplikasi yang hilang menyebabkan kesalahan saat mengambil pesan pemeliharaan aplikasi ([#8196](https://github.com/nocobase/nocobase/pull/8196)) oleh @2013xile

- **[acl]** Mendukung API `acl.registerSnippet` untuk menggabungkan konfigurasi cuplikan ([#8155](https://github.com/nocobase/nocobase/pull/8155)) oleh @mytharcher

- **[telemetri]**
  - Mendukung pengontrolan metrik mana yang diekspor ([#7938](https://github.com/nocobase/nocobase/pull/7938)) oleh @2013xile

  - Menambahkan metrik telemetri untuk jumlah sub-aplikasi online, dll ([#7743](https://github.com/nocobase/nocobase/pull/7743)) oleh @2013xile

- **[database]** Merefaktor plugin enkripsi field untuk meningkatkan keamanan, mendukung pembuatan dan rotasi kunci aplikasi, serta kunci enkripsi per field. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) oleh @cgyrock

- **[Karyawan AI]**
  - meningkatkan kompatibilitas Gemini untuk node LLM dalam alur kerja.<br/>mengoptimalkan alat AI dataSourceQuery untuk penanganan data skala besar.<br/>menyelesaikan masalah pemodelan data.<br/>menambahkan alat saran AI. ([#8249](https://github.com/nocobase/nocobase/pull/8249)) oleh @heziqiang

  - Memperbaiki karyawan AI tidak merespons pada pengiriman edit pertama<br/>Menghapus karyawan AI bawaan yang tidak perlu "Avery Form Assistant"<br/>Menambahkan izin peran awal default untuk karyawan AI bawaan<br/>Meningkatkan penanganan kesalahan dan perilaku output karyawan AI<br/>Menambahkan dukungan untuk AI mengakses variabel konteks modal<br/>Menambahkan dukungan untuk sumber data eksternal untuk AI<br/>Memperbaiki pemotongan percakapan yang salah saat AI memproses volume data besar ([#8191](https://github.com/nocobase/nocobase/pull/8191)) oleh @heziqiang

  - Mengaktifkan fungsionalitas pengeditan untuk prompt sistem asisten AI bawaan.<br/>Mengoptimalkan prompt sistem untuk asisten AI Nathan.<br/>Memperbaiki masalah dengan server gagal membaca file statis. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) oleh @heziqiang

  - menambahkan field penyedia yang hilang ke formulir Tambah LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) oleh @heziqiang

  - Plugin karyawan AI menambahkan hook upgrade ([#7951](https://github.com/nocobase/nocobase/pull/7951)) oleh @heziqiang

  - Meningkatkan logika interaksi karyawan AI dan mengoptimalkan alur konfigurasi tugas ([#7707](https://github.com/nocobase/nocobase/pull/7707)) oleh @cgyrock

  - Karyawan AI dapat secara otonom menanyakan data berdasarkan metadata blok tabel ([#7703](https://github.com/nocobase/nocobase/pull/7703)) oleh @cgyrock

  - Mengoptimalkan pengalaman pengkodean AI, termasuk menggunakan karyawan AI untuk meninjau, mendiagnosis, dan memperbaiki kode. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) oleh @cgyrock

  - Merefaktor Penyedia LLM OpenAI menjadi dua penyedia terpisah untuk mendukung API Completions dan Responses OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) oleh @cgyrock

  - Menambahkan penyedia LLM baru Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) oleh @ReLaMi96

  - Optimasi pengkodean AI ([#7614](https://github.com/nocobase/nocobase/pull/7614)) oleh @cgyrock

  - menambahkan tombol perkecil untuk kotak obrolan di tata letak seluler ([#7595](https://github.com/nocobase/nocobase/pull/7595)) oleh @cgyrock

- **[Template UI]**
  - Menambahkan dukungan template field untuk blok detail. ([#8247](https://github.com/nocobase/nocobase/pull/8247)) oleh @gchust

  - Menambahkan plugin template UI, menyediakan kemampuan untuk menggunakan kembali template blok dan template popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) oleh @gchust

- **[Workflow]**
  - Menambahkan instance alur kerja asli ke API duplikat ([#8225](https://github.com/nocobase/nocobase/pull/8225)) oleh @mytharcher

  - Meningkatkan deskripsi field `changed` dalam peristiwa koleksi ([#8216](https://github.com/nocobase/nocobase/pull/8216)) oleh @mytharcher

  - Mendukung penggunaan konfigurasi lama untuk membuat yang baru dalam alur kerja yang diduplikasi ([#8165](https://github.com/nocobase/nocobase/pull/8165)) oleh @mytharcher

  - Menambahkan logika toleransi kesalahan untuk data yang hilang dalam persiapan prosesor, untuk menghindari eksekusi menggantung ([#8156](https://github.com/nocobase/nocobase/pull/8156)) oleh @mytharcher

  - Menggunakan lazy load untuk data asosiasi di kanvas alur kerja untuk meningkatkan kinerja ([#8142](https://github.com/nocobase/nocobase/pull/8142)) oleh @mytharcher

  - Melengkapi konfigurasi alur kerja terikat untuk tombol aksi perbarui record ([#7668](https://github.com/nocobase/nocobase/pull/7668)) oleh @mytharcher

- **[Manajer tugas async]**
  - Meningkatkan penanganan kesalahan selama tugas pembersihan dengan menambahkan mekanisme penangkapan pengecualian untuk mencegah kerusakan aplikasi ([#8215](https://github.com/nocobase/nocobase/pull/8215)) oleh @mytharcher

  - Tugas async untuk sub aplikasi harus memulai hanya sub aplikasi target di Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) oleh @2013xile

- **[Blok: Panel aksi]** meningkatkan tampilan blok, aksi, dan field yang tersembunyi dalam mode konfigurasi ([#8174](https://github.com/nocobase/nocobase/pull/8174)) oleh @katherinehhh

- **[Blok: Daftar]** menambahkan tombol Tautan untuk blok Tabel, Daftar, dan Kartu Grid ([#8194](https://github.com/nocobase/nocobase/pull/8194)) oleh @katherinehhh

- **[Penangan kesalahan]** Tidak mengekspos pesan kesalahan database mentah pada kesalahan sintaks SQL, untuk menghindari pengungkapan tipe database ([#8195](https://github.com/nocobase/nocobase/pull/8195)) oleh @2013xile

- **[Blok: Peta]** mendukung elipsis luapan teks untuk field peta dalam mode tampilan teks ([#8189](https://github.com/nocobase/nocobase/pull/8189)) oleh @katherinehhh

- **[Kontrol akses]** Melarang penugasan peran root kepada pengguna ([#8180](https://github.com/nocobase/nocobase/pull/8180)) oleh @2013xile

- **[Blok: GridCard]**
  - Mengoptimalkan gaya blok Kartu Grid untuk tata letak yang lebih ringkas ([#8152](https://github.com/nocobase/nocobase/pull/8152)) oleh @katherinehhh

  - menambahkan konfigurasi jumlah baris ke kartu grid dan mengganti pageSize dengan perhitungan otomatis ([#8055](https://github.com/nocobase/nocobase/pull/8055)) oleh @katherinehhh

- **[Field koleksi: Markdown(Vditor)]** Menonaktifkan penguraian variabel di field Markdown secara default dalam mode readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) oleh @katherinehhh

- **[Aksi: Impor record]** mengizinkan pemilihan ID untuk field impor ([#8133](https://github.com/nocobase/nocobase/pull/8133)) oleh @katherinehhh

- **[Visualisasi data]**
  - memperbarui tips peringatan dan anotasi template kode peristiwa ([#7814](https://github.com/nocobase/nocobase/pull/7814)) oleh @heziqiang

  - menambahkan opsi format waktu data grafik ([#7763](https://github.com/nocobase/nocobase/pull/7763)) oleh @heziqiang

  - menambahkan tip untuk menjalankan kueri sebelum mengonfigurasi opsi grafik ([#7685](https://github.com/nocobase/nocobase/pull/7685)) oleh @heziqiang

  - menyegarkan data grafik pada klik tombol pratinjau global ([#7678](https://github.com/nocobase/nocobase/pull/7678)) oleh @heziqiang

  - Memperbarui plugin-data-vi 2.0, memperbaiki beberapa masalah dan mengoptimalkan UI. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) oleh @heziqiang

  - Memperluas tipe grafik; Mengoptimalkan UI dan pengalaman interaktif. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) oleh @heziqiang

- **[Manajer multi-aplikasi (usang)]**
  - Mengaktifkan startup asinkron untuk sub-aplikasi menggunakan antrian ([#7749](https://github.com/nocobase/nocobase/pull/7749)) oleh @2013xile

  - meningkatkan supervisor aplikasi ([#7661](https://github.com/nocobase/nocobase/pull/7661)) oleh @chenos

- **[Manajer sumber data]** Menyesuaikan urutan kolom tipe field dan antarmuka, dan menambahkan langkah konfirmasi saat melakukan modifikasi. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) oleh @2013xile

- **[Multi-ruang]** menggunakan api.storage untuk mengganti localstorage, refactoring kontrol izin dan perbaikan bug oleh @jiannx

- **[Aksi: Ekspor record Pro]** impor pro & ekspor pro aksi mendukung kontrol izin oleh @katherinehhh

- **[Telemetri: Prometheus]** Memutakhirkan `@opentelemetry/exporter-prometheus` oleh @2013xile

- **[Field koleksi: Enkripsi]** Mengoptimalkan plugin enkripsi field untuk mendukung pengambilan data dengan IV independen oleh @cgyrock

- **[Alur Kerja: Persetujuan]**
  - Memperbarui `approval.data` ke versi terbaru dari record yang disetujui saat eksekusi berakhir, agar sesuai dengan mode tampilan "Terbaru" oleh @mytharcher

  - Mengubah API untuk mendapatkan satu item persetujuan, dan menyederhanakan kode oleh @mytharcher

- **[Manajer migrasi]** Meningkatkan pemeriksaan migrasi, dukungan unduhan SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[undefined]**
  - Memperbaiki masalah gaya yang salah di halaman beranda dokumentasi plugin dalam mode gelap. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) oleh @gchust

  - pencocokan jalur routing mendukung beberapa aplikasi baru ([#7570](https://github.com/nocobase/nocobase/pull/7570)) oleh @jiannx

  - Memperbaiki masalah di mana mengutip blok akan menghapus blok yang dikutip dari halaman asli. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) oleh @gchust

- **[client]**
  - memperbaiki data yang salah di dialog sub-detail dari blok detail ([#8318](https://github.com/nocobase/nocobase/pull/8318)) oleh @katherinehhh

  - Memperbaiki masalah di mana terjadi kesalahan saat menutup popup saat ini setelah membuka popup konfigurasi aturan tautan dan alur peristiwa secara berurutan. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) oleh @gchust

  - Memperbaiki masalah di mana terjadi kesalahan saat menutup popup saat ini setelah membuka popup konfigurasi aturan tautan dan alur peristiwa secara berurutan. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) oleh @gchust

  - Memperbaiki masalah di mana perubahan pada toggle edit cepat di blok tabel memerlukan penyegaran halaman untuk berlaku. ([#8311](https://github.com/nocobase/nocobase/pull/8311)) oleh @gchust

  - Memperbaiki masalah di mana blok yang menggunakan parameter kueri URL sebagai lingkup data tidak disegarkan dengan benar saat parameter kueri berubah selama peralihan menu. ([#8310](https://github.com/nocobase/nocobase/pull/8310)) oleh @gchust

  - memperbaiki masalah izin di komponen field asosiasi ([#8243](https://github.com/nocobase/nocobase/pull/8243)) oleh @katherinehhh

  - memperbaiki data sub-detail tidak diperbarui saat melakukan paginasi blok detail ([#8305](https://github.com/nocobase/nocobase/pull/8305)) oleh @katherinehhh

  - memperbaiki konten subtable bersarang tidak diperbarui saat mengganti halaman dalam formulir edit ([#8304](https://github.com/nocobase/nocobase/pull/8304)) oleh @katherinehhh

  - Memperbaiki masalah di mana popup tidak dapat dibuka dan meningkatkan stabilitas navigasi ([#8287](https://github.com/nocobase/nocobase/pull/8287)) oleh @zhangzhonghe

  - Memperbaiki kesalahan saat beralih dari komponen Select ke komponen Array Subform ([#8301](https://github.com/nocobase/nocobase/pull/8301)) oleh @katherinehhh

  - Melarang penambahan field asosiasi ke blok formulir melalui JS Field. ([#8296](https://github.com/nocobase/nocobase/pull/8296)) oleh @gchust

  - Memperbaiki masalah di mana data akan disegarkan beberapa kali setelah aksi perbarui record. ([#8299](https://github.com/nocobase/nocobase/pull/8299)) oleh @gchust

  - Memperbaiki masalah di mana menambahkan data baru di subform ditimpa oleh data yang dipilih ([#8292](https://github.com/nocobase/nocobase/pull/8292)) oleh @katherinehhh

  - Memperbaiki masalah di mana JS Item tidak disegarkan setelah mengedit record di blok detail. ([#8291](https://github.com/nocobase/nocobase/pull/8291)) oleh @gchust

  - Memperbaiki masalah di mana record yang baru ditambahkan tidak disegarkan di popup komponen pemilih data. ([#8289](https://github.com/nocobase/nocobase/pull/8289)) oleh @gchust

  - Memperbaiki kesalahan render untuk blok JS dalam keadaan tersembunyi. ([#8286](https://github.com/nocobase/nocobase/pull/8286)) oleh @gchust

  - Memperbaiki masalah di mana kesalahan muncul di pengaturan blok formulir filter dari field m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) oleh @mytharcher

  - Memperbaiki masalah di mana kesalahan muncul di pengaturan blok formulir filter dari field m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) oleh @mytharcher

  - memperbaiki mencegah kesalahan blok setelah field asosiasi dihapus ([#8273](https://github.com/nocobase/nocobase/pull/8273)) oleh @katherinehhh

  - Memperbaiki nilai default formulir filter tidak memicu filter pada render awal ([#8232](https://github.com/nocobase/nocobase/pull/8232)) oleh @zhangzhonghe

  - Memperbaiki stack overflow yang disebabkan oleh infinite loop dalam lazy loading field asosiasi tampilan ([#8262](https://github.com/nocobase/nocobase/pull/8262)) oleh @zhangzhonghe

  - Menangani aturan tautan kosong untuk mencegah kesalahan ([#8239](https://github.com/nocobase/nocobase/pull/8239)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana kolom operasi blok tabel tidak dapat dihapus. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) oleh @gchust

  - Memperbaiki masalah di mana eksekusi pratinjau menulis output JSX yang dikompilasi kembali ke stepParams, menyebabkan kode sumber yang disimpan ditulis ulang. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) oleh @gchust

  - Memperbaiki kesalahan unggah lampiran S3 Pro dan meningkatkan pratinjau file ([#8211](https://github.com/nocobase/nocobase/pull/8211)) oleh @katherinehhh

  - Mencegah luapan lebar total baris selama pengubahan ukuran kolom ([#8166](https://github.com/nocobase/nocobase/pull/8166)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana memilih "Tidak" untuk filter kotak centang masih menerapkan filter "Ya". ([#8170](https://github.com/nocobase/nocobase/pull/8170)) oleh @gchust

  - memperbaiki tombol kirim tidak ditampilkan dalam formulir buat saat peran memiliki izin buat ([#8190](https://github.com/nocobase/nocobase/pull/8190)) oleh @katherinehhh

  - mencegah data subtable/subform yang ada agar tidak dibersihkan saat mengirim tanpa memilih item apa pun ([#8172](https://github.com/nocobase/nocobase/pull/8172)) oleh @katherinehhh

  - mencegah pengaturan Lingkup data muncul dalam konfigurasi formulir buat ([#8176](https://github.com/nocobase/nocobase/pull/8176)) oleh @katherinehhh

  - Memperbaiki masalah rendering field tableoid di blok formulir ([#8177](https://github.com/nocobase/nocobase/pull/8177)) oleh @katherinehhh

  - Gagal menyimpan alur peristiwa tab ([#8168](https://github.com/nocobase/nocobase/pull/8168)) oleh @chenos

  - menghapus spasi ekstra setelah tab disembunyikan ([#8167](https://github.com/nocobase/nocobase/pull/8167)) oleh @chenos

  - memperbaiki pemfilteran opsi yang dipilih yang salah di pilihan record asosiasi ([#8151](https://github.com/nocobase/nocobase/pull/8151)) oleh @katherinehhh

  - memperbaiki dropdown field asosiasi dinonaktifkan saat field opsi ada ([#8153](https://github.com/nocobase/nocobase/pull/8153)) oleh @katherinehhh

  - Memperbaiki masalah di mana mengganti field label menyebabkan konfigurasi popup hilang. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) oleh @gchust

  - Memperbaiki masalah di mana memasukkan teks bahasa Cina menghapus opsi yang ada saat menggunakan operator multi-pilih pada field pilih tunggal di blok formulir filter. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) oleh @gchust

  - Memperbaiki masalah di mana komponen `RemoteSelect` salah memuat record saat nilainya null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) oleh @mytharcher

  - memperbaiki mencegah status dinonaktifkan anak memblokir pemilihan field relasi ([#8131](https://github.com/nocobase/nocobase/pull/8131)) oleh @katherinehhh

  - Memperbaiki masalah di mana label field default di blok formulir filter tidak dapat diterjemahkan dengan benar dalam beberapa bahasa. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) oleh @gchust

  - Memperbaiki masalah di mana lebar komponen UI tidak konsisten saat memilih "Masa Lalu" atau "Berikutnya" untuk field filter tanggal. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) oleh @gchust

  - Memperbaiki masalah di mana gaya judul dan deskripsi blok JS tidak konsisten dengan blok lain. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) oleh @gchust

  - memperbaiki masalah pemutusan baris tooltip field teks panjang ([#8122](https://github.com/nocobase/nocobase/pull/8122)) oleh @katherinehhh

  - Memperbaiki masalah di mana opsi yang dapat dipilih tidak tercantum sepenuhnya saat menggunakan operator "is any of" atau "is none of" untuk pemfilteran field berbasis opsi. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) oleh @gchust

  - memperbaiki subtable bersarang di subform tidak menampilkan data ([#8117](https://github.com/nocobase/nocobase/pull/8117)) oleh @katherinehhh

  - Memperbaiki masalah di mana membersihkan nilai filter waktu antara dan memicu filter lagi menyebabkan kesalahan. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) oleh @gchust

  - Memperbaiki masalah di mana data yang dapat dipilih untuk field asosiasi di blok formulir filter salah. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) oleh @gchust

  - Memperbaiki masalah di mana konfigurasi field kustom dalam formulir filter tidak diisi sebelumnya dengan benar dan beberapa pengaturan tidak berlaku. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) oleh @gchust

  - Memperbaiki masalah di mana pemfilteran pada field Kotak Centang tidak berlaku. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) oleh @gchust

  - Memperbaiki masalah di mana nilai field angka tidak diisi sebelumnya dengan benar dalam aksi filter. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) oleh @gchust

  - Memperbaiki masalah di mana beberapa operator field dalam formulir filter gagal memfilter data dengan benar. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) oleh @gchust

  - Memperbaiki masalah di mana field yang dikonfigurasi dari blok yang dihapus tidak dihapus dari blok filter. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) oleh @gchust

  - memperbaiki celah spasi ekstra saat tombol disembunyikan dalam mode non-konfigurasi ([#8092](https://github.com/nocobase/nocobase/pull/8092)) oleh @katherinehhh

  - Memperbaiki masalah di mana teks tombol reset di blok formulir filter tidak dapat dimodifikasi. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) oleh @gchust

  - Memperbaiki masalah di mana input field tidak mendukung beberapa nilai saat menggunakan operator $in atau $notIn untuk memfilter field. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) oleh @gchust

  - Memperbaiki masalah di mana blok data yang baru ditambahkan tidak muncul secara otomatis di menu field blok formulir filter. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) oleh @gchust

  - Menu konfigurasi untuk field asosiasi dalam formulir filter tidak boleh menampilkan opsi buat cepat. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) oleh @gchust

  - memperbaiki masalah data subtable asosiasi di blok Daftar ([#8082](https://github.com/nocobase/nocobase/pull/8082)) oleh @katherinehhh

  - memperbaiki aturan validasi field numerik dari pengaturan koleksi tidak diterapkan ([#8025](https://github.com/nocobase/nocobase/pull/8025)) oleh @katherinehhh

  - Memperbaiki masalah di mana field dalam formulir filter dibatasi oleh aturan validasi backend untuk field. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) oleh @gchust

  - memperbaiki masalah tampilan field besar di edit subtable ([#8069](https://github.com/nocobase/nocobase/pull/8069)) oleh @katherinehhh

  - memperbaiki buat cepat memunculkan kesalahan saat allowMultiple dinonaktifkan di pilihan record asosiasi ([#8034](https://github.com/nocobase/nocobase/pull/8034)) oleh @katherinehhh

  - masalah edit cepat field json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) oleh @katherinehhh

  - memperbaiki field json harus dikirimkan sebagai objek ([#8057](https://github.com/nocobase/nocobase/pull/8057)) oleh @katherinehhh

  - Memperbaiki masalah di mana tombol enter tidak dapat digunakan untuk memicu aksi filter. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) oleh @gchust

  - Memperbaiki masalah di mana N/A ditampilkan setelah menonaktifkan allowMultiple di pilihan record asosiasi many-to-many ([#8050](https://github.com/nocobase/nocobase/pull/8050)) oleh @katherinehhh

  - Memperbaiki gagal menghapus record di blok pemilih record ([#8023](https://github.com/nocobase/nocobase/pull/8023)) oleh @katherinehhh

  - Memperbaiki masalah di mana menu record saat ini muncul saat menambahkan blok komentar. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) oleh @gchust

  - Memperbaiki masalah di mana mengganti field tanggal ke field waktu dalam aksi filter menyebabkan kesalahan rendering. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) oleh @gchust

  - Memperbaiki masalah di mana judul default dari popup aksi edit dan buat baru salah. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) oleh @gchust

  - Memperbaiki masalah di mana gaya default field JS di blok detail salah. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) oleh @gchust

  - memperbaiki lebar kolom subtable tidak diterapkan ([#8027](https://github.com/nocobase/nocobase/pull/8027)) oleh @katherinehhh

  - memperbaiki drag kolom subtable tidak berfungsi ([#8026](https://github.com/nocobase/nocobase/pull/8026)) oleh @katherinehhh

  - Memperbaiki masalah di mana variabel record popup saat ini tidak dapat diselesaikan dengan benar di popup yang dibuka oleh field asosiasi. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) oleh @gchust

  - memperbaiki masalah gaya popover field tampilan markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) oleh @katherinehhh

  - Menyelesaikan masalah yang menyebabkan kesalahan saat memuat data untuk field asosiasi di jendela popup, memastikan tampilan data dan fungsionalitas yang lebih lancar. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) oleh @gchust

  - memperbaiki blok tabel pohon tidak dapat memperluas node anak ([#8011](https://github.com/nocobase/nocobase/pull/8011)) oleh @katherinehhh

  - Memperbaiki masalah pemilihan dan penghapusan blok tabel untuk kunci komposit ([#7978](https://github.com/nocobase/nocobase/pull/7978)) oleh @katherinehhh

  - Memperbaiki masalah di mana status tab halaman dan rute tidak sesuai ([#7991](https://github.com/nocobase/nocobase/pull/7991)) oleh @zhangzhonghe

  - memperbaiki masalah tampilan saat field markdown dielipsis dalam mode HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) oleh @katherinehhh

  - memperbaiki hasil pencarian yang tidak lengkap di pemilih kaskade ([#7990](https://github.com/nocobase/nocobase/pull/7990)) oleh @katherinehhh

  - Memperbaiki masalah di mana membuka blok detail di popup untuk field relasi non-ID menyebabkan kesalahan. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) oleh @gchust

  - Memperbaiki masalah di mana data asosiasi gagal dimuat dengan benar di popup untuk field relasi non-ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) oleh @gchust

  - memperbaiki masalah dengan pengaturan presisi yang tidak valid untuk format field numerik ([#7967](https://github.com/nocobase/nocobase/pull/7967)) oleh @katherinehhh

  - memperbaiki masalah di mana nilai filter tidak dibersihkan saat mengklik tombol Reset ([#7966](https://github.com/nocobase/nocobase/pull/7966)) oleh @zhangzhonghe

  - Memperbaiki pengetikan yang salah di halaman 2.0 baru ([#7945](https://github.com/nocobase/nocobase/pull/7945)) oleh @zhangzhonghe

  - memperbaiki field teks auto-wrap di blok detail saat konten melebihi lebar ([#7955](https://github.com/nocobase/nocobase/pull/7955)) oleh @katherinehhh

  - memperbaiki kesalahan yang muncul saat membersihkan nilai di kaskade multi-level ([#7943](https://github.com/nocobase/nocobase/pull/7943)) oleh @katherinehhh

  - menghapus aksi tree-table dari blok non-tree-collection ([#7931](https://github.com/nocobase/nocobase/pull/7931)) oleh @katherinehhh

  - Memperbaiki masalah di mana judul dan deskripsi tidak ditampilkan di blok JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) oleh @gchust

  - Memperbaiki masalah di mana blok tersembunyi masih menempati ruang di halaman. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) oleh @gchust

  - Memperbaiki masalah di mana tombol reset di tombol filter menghapus kondisi default ([#7903](https://github.com/nocobase/nocobase/pull/7903)) oleh @zhangzhonghe

  - memperbaiki pemeriksaan izin yang salah untuk field subform dalam formulir baru ([#7902](https://github.com/nocobase/nocobase/pull/7902)) oleh @katherinehhh

  - memperbaiki masalah dalam pengaturan item formulir ([#7867](https://github.com/nocobase/nocobase/pull/7867)) oleh @katherinehhh

  - Memperbaiki masalah di mana field teks kaya tidak dapat memasukkan nilai default dan field multi-pilih nilai default tidak dapat memilih beberapa opsi. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) oleh @gchust

  - Memperbaiki masalah konfigurasi field JS default tidak menggunakan pengaturan mode tampilan. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) oleh @gchust

  - Memperbaiki masalah tentang tidak dapat mengatur nilai default field tanggal di model blok formulir filter. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) oleh @gchust

  - Memperbaiki masalah operasi edit cepat di blok tabel tidak memperbarui data dengan benar. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) oleh @gchust

  - Memperbaiki kesalahan saat pratinjau kode di editor kode jika kode berisi sintaks jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) oleh @gchust

  - Memperbaiki masalah di mana aturan tautan untuk tombol aksi baris di blok tabel tidak dijalankan ulang setelah data baris diperbarui, memastikan aturan sekarang diterapkan kembali dengan benar saat perubahan terjadi. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) oleh @gchust

  - Memperbaiki kesalahan 'value.replace is not a function' di field relasi formulir filter ([#7824](https://github.com/nocobase/nocobase/pull/7824)) oleh @zhangzhonghe

  - variabel koleksi saat ini tidak boleh dipilih dari pemilih variabel komponen filter ([#7818](https://github.com/nocobase/nocobase/pull/7818)) oleh @gchust

  - Memperbaiki parameter yang salah di callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) oleh @zhangzhonghe

  - tidak dapat menyembunyikan kolom aksi blok tabel ([#7804](https://github.com/nocobase/nocobase/pull/7804)) oleh @gchust

  - Memperbaiki field pemilih koleksi tidak dapat memilih koleksi dengan benar ([#7794](https://github.com/nocobase/nocobase/pull/7794)) oleh @katherinehhh

  - mendukung pemilihan seluruh objek variabel di prompt karyawan AI ([#7791](https://github.com/nocobase/nocobase/pull/7791)) oleh @gchust

  - memperbaiki lebar aksi tabel dan jsColumn tidak diterapkan ([#7777](https://github.com/nocobase/nocobase/pull/7777)) oleh @katherinehhh

  - lingkup data blok tidak berfungsi jika diatur oleh alur peristiwa halaman ([#7788](https://github.com/nocobase/nocobase/pull/7788)) oleh @gchust

  - memperbaiki elipsis field judul field asosiasi tidak diterapkan ([#7778](https://github.com/nocobase/nocobase/pull/7778)) oleh @katherinehhh

  - aturan tautan aksi perbarui record tidak berfungsi ([#7774](https://github.com/nocobase/nocobase/pull/7774)) oleh @gchust

  - Memperbaiki kegagalan validasi wajib untuk field Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) oleh @katherinehhh

  - Memperbaiki masalah di mana label tipe enum dalam komponen terkait variabel tidak ditampilkan dalam bahasa yang benar. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) oleh @gchust

  - Memperbaiki indikator field wajib yang hilang setelah mengatur validasi frontend ([#7760](https://github.com/nocobase/nocobase/pull/7760)) oleh @katherinehhh

  - Menambahkan konfigurasi lingkup data untuk field relasi dalam formulir filter ([#7761](https://github.com/nocobase/nocobase/pull/7761)) oleh @zhangzhonghe

  - memperbaiki masalah dengan membersihkan tanggal non-timezone dalam formulir edit ([#7759](https://github.com/nocobase/nocobase/pull/7759)) oleh @katherinehhh

  - Memperbaiki validasi field wajib untuk aturan tautan ([#7756](https://github.com/nocobase/nocobase/pull/7756)) oleh @zhangzhonghe

  - memperbaiki masalah format waktu di field subtable ([#7750](https://github.com/nocobase/nocobase/pull/7750)) oleh @katherinehhh

  - menyelesaikan masalah Tanggal Tidak Valid saat menghapus Tanggal Tertentu di filter… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) oleh @katherinehhh

  - tidak dapat memuat field variabel formulir saat ini ([#7745](https://github.com/nocobase/nocobase/pull/7745)) oleh @gchust

  - Menyelesaikan masalah di mana menetapkan array sebagai nilai atau nilai default ke field "toOne" menghasilkan kesalahan. Ini memastikan penanganan hasil resolusi variabel yang tepat, meningkatkan stabilitas dan akurasi sistem. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) oleh @gchust

  - Menyelesaikan masalah di mana variabel field asosiasi dalam formulir saat ini tidak dapat diidentifikasi dengan benar, memastikan pemrosesan data yang akurat dalam formulir. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) oleh @gchust

  - Memperbaiki masalah di mana field yang tidak dapat difilter salah tercantum dalam opsi filter, memastikan hanya field yang berlaku yang muncul untuk dipilih. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) oleh @gchust

  - menyelesaikan masalah UI saat menghapus field asosiasi di koleksi ([#7706](https://github.com/nocobase/nocobase/pull/7706)) oleh @katherinehhh

  - Memperbaiki masalah yang diketahui dengan aturan tautan subform ([#7698](https://github.com/nocobase/nocobase/pull/7698)) oleh @zhangzhonghe

  - menu field blok js tidak dapat dimuat di blok formulir filter ([#7690](https://github.com/nocobase/nocobase/pull/7690)) oleh @gchust

  - Menyelesaikan masalah di mana pengguna tidak dapat mengatur nilai default untuk field yang ditampilkan dalam mode hanya-baca. Ini memastikan konfigurasi field yang lebih lancar saat field tidak dapat diedit. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) oleh @gchust

  - Memperbaiki masalah di mana URL tidak diperbarui dengan benar setelah mengganti tab dalam popup, membuka kembali popup bersarang, dan kemudian menutup semua popup. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) oleh @gchust

  - menangani konteks yang hilang di usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) oleh @chenos

  - Memperbaiki masalah tampilan halaman yang tidak normal saat mengganti paginasi tabel ([#7572](https://github.com/nocobase/nocobase/pull/7572)) oleh @zhangzhonghe

  - Tidak dapat mengonfigurasi nilai field tugas untuk aksi `Perbarui` dan `Perbarui massal` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) oleh @gchust

  - Memperbaiki masalah tidak menyegarkan data setelah mengirimkan formulir ([#7560](https://github.com/nocobase/nocobase/pull/7560)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana aksi "Jalankan" di editor kode tidak berfungsi, memastikan pengguna sekarang dapat menjalankan kode dengan benar. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) oleh @gchust

- **[flow-engine]**
  - Memperbaiki masalah di mana dropdown pemilih field koleksi dalam aksi filter memiliki ketinggian yang tidak mencukupi. ([#8288](https://github.com/nocobase/nocobase/pull/8288)) oleh @gchust

  - Memperbaiki konten tab popup tidak ditampilkan ([#8281](https://github.com/nocobase/nocobase/pull/8281)) oleh @zhangzhonghe

  - Memperbaiki masalah unmount halaman dan render ulang saat membuka sub-halaman ([#8276](https://github.com/nocobase/nocobase/pull/8276)) oleh @zhangzhonghe

  - memperbaiki masalah pemeriksaan izin untuk menambahkan record anak di tabel pohon ([#8240](https://github.com/nocobase/nocobase/pull/8240)) oleh @katherinehhh

  - Memperbaiki masalah di mana beberapa variabel terkait record popup blok ditampilkan secara salah. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) oleh @gchust

  - Memperbaiki masalah di mana aksi atau tab yang ditambahkan setelah menyeret aksi atau tab tidak ditampilkan. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) oleh @gchust

  - masalah pemeriksaan izin di sumber data eksternal ([#8221](https://github.com/nocobase/nocobase/pull/8221)) oleh @katherinehhh

  - memperbaiki aksi sumber data eksternal disembunyikan meskipun memiliki izin ([#8217](https://github.com/nocobase/nocobase/pull/8217)) oleh @katherinehhh

  - Memperbaiki masalah di mana mengirimkan formulir dalam modal yang digunakan kembali melalui uid popup tidak menyegarkan data blok. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) oleh @gchust

  - Memperbaiki unduhan file yang salah untuk lampiran ([#8154](https://github.com/nocobase/nocobase/pull/8154)) oleh @katherinehhh

  - perbaikan: konversi yang salah saat menggunakan tipe integer sebagai opsi enum ([#8138](https://github.com/nocobase/nocobase/pull/8138)) oleh @chenos

  - Memperbaiki item menu sub-model yang dapat dialihkan gagal saat `useModel` dihilangkan dengan menyimpulkannya dari `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana opsi konfigurasi dari komponen sebelumnya tetap terlihat di menu setelah mengganti komponen field. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) oleh @gchust

  - Memindahkan useEffect sebelum pengembalian bersyarat di FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana field asosiasi yang tidak didukung muncul di field operasi filter. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) oleh @gchust

  - memperbaiki record komentar gagal disimpan setelah diedit ([#8035](https://github.com/nocobase/nocobase/pull/8035)) oleh @katherinehhh

  - Memperbaiki masalah di mana blok data tidak disegarkan saat menutup popup dengan mengklik tombol kirim formulir di dalam popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) oleh @gchust

  - Memperbaiki masalah di mana variabel record saat ini tidak dapat dipicu dengan benar untuk diselesaikan di blok detail. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) oleh @gchust

  - Memperbaiki masalah tampilan ikon toolbar yang tidak sejajar di tombol blok detail ([#7929](https://github.com/nocobase/nocobase/pull/7929)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana membuka formulir edit cepat blok tabel menyebabkan kesalahan. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) oleh @gchust

  - Memperbaiki masalah di mana data izin ACL tidak dimuat ulang setelah logout dan login. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) oleh @gchust

  - Memperbaiki masalah di mana perubahan pada alur peristiwa hanya akan berlaku setelah menyegarkan halaman. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) oleh @gchust

  - Memperbaiki masalah di mana variabel dalam field asosiasi subform tidak diselesaikan dengan benar saat field dimodifikasi melalui antarmuka pengguna. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) oleh @gchust

  - kesalahan dalam formulir edit untuk record kunci utama multi ([#7798](https://github.com/nocobase/nocobase/pull/7798)) oleh @gchust

  - Memperbaiki masalah di mana konfigurasi tertentu untuk aksi "Buka Tampilan" tidak diterapkan, memastikan aksi sekarang berfungsi sebagaimana mestinya untuk semua konfigurasi yang ditentukan. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) oleh @gchust

  - Memperbaiki masalah di mana tombol aksi di blok tabel tidak diperbarui dengan benar setelah mengganti halaman, memastikan fungsionalitasnya cocok dengan data halaman saat ini. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) oleh @gchust

  - ketika nilai filter field disetel ke false, permintaan dengan lingkup data salah ([#7766](https://github.com/nocobase/nocobase/pull/7766)) oleh @gchust

  - perbaikan: menyelesaikan masalah parameter permintaan halaman setelah menghapus data di halaman terakhir ([#7755](https://github.com/nocobase/nocobase/pull/7755)) oleh @katherinehhh

  - tidak dapat menyelesaikan nilai field asosiasi variabel objek saat ini subform ([#7751](https://github.com/nocobase/nocobase/pull/7751)) oleh @gchust

  - langkah-langkah alur peristiwa tidak boleh ditampilkan di menu konfigurasi ([#7723](https://github.com/nocobase/nocobase/pull/7723)) oleh @gchust

  - pemilihan konteks yang salah dari record popup saat ini saat mengedit lingkup data field terkait di dalam formulir edit ([#7675](https://github.com/nocobase/nocobase/pull/7675)) oleh @gchust

  - Menyelesaikan masalah di mana aksi aliran yang ditentukan oleh model aliran tidak dapat dikonfigurasi, memastikan pengguna sekarang dapat menyesuaikan aksi aliran sebagaimana mestinya. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) oleh @gchust

  - Memperbaiki kesalahan saat menyalin atau menempelkan cuplikan kode di editor kode JS. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) oleh @gchust

  - Memperbaiki masalah terjemahan tidak berlaku di komponen antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) oleh @zhangzhonghe

  - tidak dapat memperoleh konteks tampilan saat ini di blok referensi ([#7620](https://github.com/nocobase/nocobase/pull/7620)) oleh @gchust

- **[database]**
  - Menyertakan through scope saat menanyakan relasi m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) oleh @2013xile

  - Menyertakan through scope saat menanyakan relasi m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) oleh @2013xile

  - Memperbaiki inkonsistensi kueri field tanggal antara sumber data utama dan eksternal ([#8181](https://github.com/nocobase/nocobase/pull/8181)) oleh @cgyrock

  - `filterByTk` sekarang mendukung array saat menanyakan koleksi dengan beberapa kunci target filter ([#7986](https://github.com/nocobase/nocobase/pull/7986)) oleh @chenos

  - Mengatur `search_path` sebelum menjalankan pernyataan SQL menggunakan metode `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) oleh @2013xile

- **[cli]** license-kit kompatibel dengan kasus di mana DB_PASSWORD kosong ([#8220](https://github.com/nocobase/nocobase/pull/8220)) oleh @jiannx

- **[server]**
  - Mendukung field Snowflake ID (53-bit) untuk sumber data eksternal ([#8185](https://github.com/nocobase/nocobase/pull/8185)) oleh @2013xile

  - Memperbarui license-kit ke versi terbaru ([#8173](https://github.com/nocobase/nocobase/pull/8173)) oleh @jiannx

  - Mempertahankan field.targetKey saat menyalin field referensi ([#7599](https://github.com/nocobase/nocobase/pull/7599)) oleh @chenos

  - Kesalahan migrasi kunci utama ([#7563](https://github.com/nocobase/nocobase/pull/7563)) oleh @2013xile

- **[acl]**
  - Memperbaiki masalah di mana API `acl.can` mengembalikan `null` saat peran adalah `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) oleh @mytharcher

  - perbaikan: acl.allow dieksekusi terlalu awal ([#8065](https://github.com/nocobase/nocobase/pull/8065)) oleh @chenos

- **[utils]**
  - Memperbaiki kesalahan "Invalid filter item type" pada tombol filter ([#7838](https://github.com/nocobase/nocobase/pull/7838)) oleh @zhangzhonghe

  - Memperbaiki kesalahan 'Unrecognized operation' dalam alur peristiwa ([#7835](https://github.com/nocobase/nocobase/pull/7835)) oleh @zhangzhonghe

- **[Aksi: Perbarui massal]** Memperbaiki kesalahan dalam aksi perbarui massal untuk sumber data eksternal. ([#8320](https://github.com/nocobase/nocobase/pull/8320)) oleh @gchust

- **[Visualisasi data]**
  - Memperbaiki masalah tentang tampilan label grafik pai AI, menormalkan opsi untuk grafik pai berbasis dataset.<br/> Membatasi field urutan grafik hanya ke field yang dipilih. ([#8309](https://github.com/nocobase/nocobase/pull/8309)) oleh @heziqiang

  - Menyelesaikan masalah tentang mode SQL memilih sumber data eksternal; <br/>Menyelesaikan masalah tentang status pemuatan blok grafik selama pengambilan data; <br/> Menyelesaikan masalah tentang pembatalan konfigurasi blok grafik kosong; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) oleh @heziqiang

  - Memperbaiki masalah di mana blok grafik tidak diperbarui setelah disimpan ([#7920](https://github.com/nocobase/nocobase/pull/7920)) oleh @heziqiang

  - Menggunakan mode debug sumber daya sql hanya selama pratinjau grafik ([#7893](https://github.com/nocobase/nocobase/pull/7893)) oleh @heziqiang

  - menggunakan API sql:runById untuk mengambil data kueri pada inisialisasi ([#7677](https://github.com/nocobase/nocobase/pull/7677)) oleh @heziqiang

  - memperbaiki masalah kueri SQL saat mengurai variabel ([#7642](https://github.com/nocobase/nocobase/pull/7642)) oleh @heziqiang

  - memperbaiki parameter pesanan yang hilang dalam kueri data grafik ([#7636](https://github.com/nocobase/nocobase/pull/7636)) oleh @heziqiang

  - Memperbaiki masalah di mana grafik tidak dapat ditampilkan karena batas waktu pendaftaran peristiwa ([#7608](https://github.com/nocobase/nocobase/pull/7608)) oleh @heziqiang

- **[Aksi: Impor record]**
  - Verifikasi ruang saat mengimpor file ([#8285](https://github.com/nocobase/nocobase/pull/8285)) oleh @jiannx

  - Memperbaiki masalah di mana indeks baris dalam pesan kesalahan selalu 1 saat kesalahan muncul dalam aksi impor ([#8244](https://github.com/nocobase/nocobase/pull/8244)) oleh @mytharcher

  - Menunggu secara sinkron untuk peristiwa `afterCreate` yang dipicu oleh impor selesai. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) oleh @2013xile

  - menyelesaikan masalah dengan tampilan daftar field di field yang Dapat Diimpor ([#7710](https://github.com/nocobase/nocobase/pull/7710)) oleh @katherinehhh

- **[File manager]**
  - Memperbaiki masalah di mana kesalahan muncul saat mengunggah file lebih besar dari 5MB ke AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) oleh @mytharcher

  - Memperbaiki masalah di mana pratinjau file `.txt` di OSS mendapatkan charset yang salah ([#8161](https://github.com/nocobase/nocobase/pull/8161)) oleh @mytharcher

  - Memperbaiki tampilan data sub-detail yang salah di blok Daftar dan Kartu Grid ([#8087](https://github.com/nocobase/nocobase/pull/8087)) oleh @katherinehhh

  - Memperbaiki field lampiran tidak ditampilkan dengan benar di subtable readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) oleh @katherinehhh

  - memperbaiki unggah file ke penyimpanan yang ditentukan alih-alih penyimpanan default ([#7947](https://github.com/nocobase/nocobase/pull/7947)) oleh @katherinehhh

  - memperbaiki masalah konfigurasi field blok tabel ([#7843](https://github.com/nocobase/nocobase/pull/7843)) oleh @katherinehhh

- **[Manajer tugas async]**
  - Memperbaiki bahasa pembatalan tugas latar belakang ([#8245](https://github.com/nocobase/nocobase/pull/8245)) oleh @mytharcher

  - Memperbaiki bahasa pembatalan tugas latar belakang ([#8245](https://github.com/nocobase/nocobase/pull/8245)) oleh @mytharcher

- **[Workflow]**
  - Memperbaiki peristiwa database menjadi tidak valid setelah menyegarkan sumber data eksternal ([#8207](https://github.com/nocobase/nocobase/pull/8207)) oleh @cgyrock

  - Memperbaiki peristiwa database menjadi tidak valid setelah menyegarkan sumber data eksternal ([#8207](https://github.com/nocobase/nocobase/pull/8207)) oleh @cgyrock

  - Memperbaiki masalah di mana kesalahan muncul saat menghapus versi alur kerja yang bukan saat ini ([#8203](https://github.com/nocobase/nocobase/pull/8203)) oleh @mytharcher

  - Memperbaiki masalah di mana hanya satu record yang ditampilkan dalam daftar record untuk dieksekusi secara manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) oleh @mytharcher

  - Memperbaiki masalah di mana menambahkan alur kerja dalam konfigurasi tombol alur kerja terikat menyebabkan aplikasi membeku setelah diklik ([#7541](https://github.com/nocobase/nocobase/pull/7541)) oleh @mytharcher

- **[Template UI]**
  - Memperbaiki masalah di mana beberapa popup lama tidak dapat digunakan kembali dengan benar setelah diubah menjadi template. ([#8283](https://github.com/nocobase/nocobase/pull/8283)) oleh @gchust

  - Memperbaiki masalah di mana template field tidak dapat menerapkan aturan tautan dan tata letak formulir. ([#8266](https://github.com/nocobase/nocobase/pull/8266)) oleh @gchust

  - Memperbaiki kesalahan di mana membuka popup field asosiasi akan salah menggunakan template popup field non-asosiasi. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) oleh @gchust

- **[Koleksi: Pohon]** Memperbarui jalur setelah membuat node koleksi pohon secara massal ([#8267](https://github.com/nocobase/nocobase/pull/8267)) oleh @2013xile

- **[Karyawan AI]**
  - Menyelesaikan masalah di mana konten pesan node llm tidak ditampilkan ([#8257](https://github.com/nocobase/nocobase/pull/8257)) oleh @heziqiang

  - Menyelesaikan masalah tentang pemutusan baris pesan ai ([#8096](https://github.com/nocobase/nocobase/pull/8096)) oleh @heziqiang

  - Menyelesaikan masalah di mana nama peran sumber data tidak dikompilasi ([#8076](https://github.com/nocobase/nocobase/pull/8076)) oleh @heziqiang

  - Memperbaiki masalah di mana beberapa field record saat ini tidak dapat ditampilkan di komponen pemilihan variabel. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) oleh @gchust

  - Memperbaiki masalah saat ai menghasilkan output SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) oleh @heziqiang

  - Menyembunyikan tombol obrolan karyawan AI di halaman v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) oleh @cgyrock

  - Mengoptimalkan perilaku pencarian web dan petunjuk pengguna untuk Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) oleh @cgyrock

  - Memperbaiki masalah di mana blok dengan sumber daya API terkait tidak mengambil data yang sesuai saat dipilih. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) oleh @cgyrock

  - memperbaiki masalah tata letak kotak obrolan di tata letak seluler ([#7591](https://github.com/nocobase/nocobase/pull/7591)) oleh @cgyrock

  - Memperbaiki kesalahan dalam alat pemodelan data karyawan AI saat menggunakan ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) oleh @cgyrock

  - Memperbaiki kesalahan pada halaman konfigurasi izin karyawan ai ([#7548](https://github.com/nocobase/nocobase/pull/7548)) oleh @2013xile

- **[Alur Kerja: Node manual]**
  - Memperbaiki masalah di mana kesalahan muncul saat membatalkan eksekusi alur kerja yang dihapus ([#8258](https://github.com/nocobase/nocobase/pull/8258)) oleh @mytharcher

  - Memperbaiki masalah daftar tugas manual menggunakan API yang salah ([#8144](https://github.com/nocobase/nocobase/pull/8144)) oleh @mytharcher

- **[Field koleksi: Urutan]**
  - Memperbaiki kesalahan saat perintah perbaikan field-urutan menemukan koleksi yang tidak ada di lingkungan saat ini. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) oleh @cgyrock

  - Meningkatkan ketahanan plugin-field-sequence saat menangani perintah perbaikan ([#8139](https://github.com/nocobase/nocobase/pull/8139)) oleh @cgyrock

- **[Departemen]** Memperbaiki masalah di mana pencarian agregat tidak dapat menemukan pengguna ([#8222](https://github.com/nocobase/nocobase/pull/8222)) oleh @2013xile

- **[Field koleksi: Many to many (array)]** Memperbaiki masalah di mana field many-to-many (array) tidak dapat dibuat saat tipe kunci target adalah Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) oleh @2013xile

- **[Pengaturan lisensi]**
  - Memperbaiki tampilan plugin berlisensi yang tidak normal ([#8214](https://github.com/nocobase/nocobase/pull/8214)) oleh @jiannx

  - memperbaiki pengecualian build ts plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) oleh @jiannx

  - optimasi lisensi dan penambahan informasi petunjuk ([#7993](https://github.com/nocobase/nocobase/pull/7993)) oleh @jiannx

- **[Field koleksi: Rumus]**
  - Memperbaiki masalah di mana field BigInt tidak dapat ditambahkan ke blok Detail dan Formulir ([#8201](https://github.com/nocobase/nocobase/pull/8201)) oleh @katherinehhh

  - Memperbaiki masalah di mana field rumus dalam aksi filter dan blok formulir filter tidak dapat mengetik nilai input. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) oleh @gchust

  - Memperbaiki masalah di mana field rumus tidak dapat ditambahkan ke blok formulir filter. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) oleh @gchust

- **[Blok: Peta]** memperbaiki tingkat zoom peta yang salah setelah peralihan menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) oleh @katherinehhh

- **[Notifikasi: Email]** memperbaiki batasan koneksi notifikasi email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) oleh @jiannx

- **[Blok: Panel aksi]** mengoptimalkan gaya dalam tata letak Daftar blok panel aksi ([#8084](https://github.com/nocobase/nocobase/pull/8084)) oleh @katherinehhh

- **[Manajer sumber data]** Memperbaiki kesalahan saat memperbarui kata sandi untuk sumber data eksternal ([#8024](https://github.com/nocobase/nocobase/pull/8024)) oleh @cgyrock

- **[Aksi: Ekspor record]**
  - memperbaiki field sistem yang hilang dalam daftar field yang dapat diekspor ([#8002](https://github.com/nocobase/nocobase/pull/8002)) oleh @katherinehhh

  - menyelesaikan masalah dengan tampilan daftar field yang dapat diekspor dalam aksi ekspor ([#7714](https://github.com/nocobase/nocobase/pull/7714)) oleh @katherinehhh

- **[Flow engine]**
  - Memastikan variabel record selalu mengembalikan record lengkap saat digunakan bersama dengan field individualnya. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) oleh @gchust

  - tidak dapat menyelesaikan variabel dalam aksi field set tautan ([#7684](https://github.com/nocobase/nocobase/pull/7684)) oleh @gchust

  - Memperbaiki resolusi yang salah dari variabel record popup induk. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) oleh @gchust

- **[Manajer multi-aplikasi (usang)]**
  - Setelah sub aplikasi berhenti, publikasikan pesan sinkronisasi untuk memberi tahu node lain untuk menghentikan sub aplikasi yang sesuai ([#7849](https://github.com/nocobase/nocobase/pull/7849)) oleh @2013xile

  - Koleksi yang salah untuk metrik status sub-aplikasi ([#7772](https://github.com/nocobase/nocobase/pull/7772)) oleh @2013xile

  - Memperbaiki tidak dapat menonaktifkan manajer multi-aplikasi lama ([#7633](https://github.com/nocobase/nocobase/pull/7633)) oleh @jiannx

  - Memperbaiki validasi port sebelum migrasi data multi-aplikasi ([#7540](https://github.com/nocobase/nocobase/pull/7540)) oleh @jiannx

- **[Blok: GridCard]** memperbaiki masalah duplikasi data antara blok daftar dan kartu grid ([#7773](https://github.com/nocobase/nocobase/pull/7773)) oleh @katherinehhh

- **[Blok: template (usang)]** Memperbaiki masalah di mana permintaan yang tidak perlu untuk template blok dipicu saat membuka atau menutup modal ([#7561](https://github.com/nocobase/nocobase/pull/7561)) oleh @gchust

- **[Aksi: Ekspor record Pro]** memperbaiki opsi ekspor lampiran "Buat folder untuk setiap record" tidak berlaku oleh @katherinehhh

- **[Sumber data: PostgreSQL Eksternal]** Memperbaiki peristiwa database menjadi tidak valid setelah menyegarkan sumber data eksternal oleh @cgyrock

- **[Aksi: Impor record Pro]**
  - Memperbaiki logika pemeriksaan unik yang akan memunculkan kesalahan saat nilai field unik adalah null oleh @mytharcher

  - memperbaiki masalah di mana modifikasi pengunggah pada opsi impor tidak berpengaruh oleh @katherinehhh

  - menyelesaikan masalah dengan tampilan daftar field di field yang Dapat Diimpor oleh @katherinehhh

- **[Koleksi: Hubungkan ke data asing (FDW)]**
  - Memperbaiki kesalahan pemicu saat menghubungkan ke tabel dengan nama huruf besar oleh @2013xile

  - Memperbaiki masalah di mana pemuatan gagal untuk tabel dengan nama huruf besar oleh @2013xile

- **[Sumber data: SQL Server Eksternal]** Memperbaiki masalah di mana opsi `encrypt` dan `trustServerCertificate` tidak tersedia oleh @2013xile

- **[Multi-ruang]**
  - Perangkat seluler mendukung peralihan ruang oleh @jiannx

  - Memperbaiki pembuatan field lain di koleksi sistem oleh @jiannx

  - multi-ruang pengguna terkait oleh @jiannx

- **[Enkripsi permintaan HTTP]** Menggunakan tanda kurung untuk format array dalam penguraian qs oleh @chenos

- **[Komentar]**
  - Memperbaiki gagal menghapus record di blok komentar oleh @katherinehhh

  - memperbaiki masalah saat komentar yang dikutip di blok komentar gagal ditampilkan oleh @katherinehhh

  - Memperbaiki tampilan peringatan saat blok komentar digunakan pada koleksi non-komentar oleh @katherinehhh

- **[Cetak template]**
  - memperbaiki kesalahan aksi cetak template di blok detail oleh @katherinehhh

  - memperbaiki gagal menambahkan template di operasi cetak template record oleh @katherinehhh

  - Memperbaiki permintaan cetak template tidak berfungsi dengan sumber data eksternal oleh @katherinehhh

- **[Multi-aplikasi]**
  - proxy multi aplikasi mendukung cache oleh @jiannx

  - migrasi multi-aplikasi tidak memancarkan hook oleh @jiannx

- **[plugin-demo-platform]** demo mendukung penghentian aplikasi otomatis oleh @jiannx

- **[Sumber data: Oracle Eksternal]** Memperbaiki peristiwa database menjadi tidak valid setelah menyegarkan sumber data eksternal oleh @cgyrock

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki masalah di mana status record persetujuan yang tidak terkait salah diubah menjadi `UNPROCESSED` oleh aksi menyetujui oleh @mytharcher

  - Memperbaiki masalah di mana menyetujui membuat asosiasi ke record baru oleh @mytharcher

  - Memperbaiki rollback duplikat dari transaksi yang sama oleh @mytharcher

  - Memperbaiki masalah di mana kesalahan muncul saat membatalkan eksekusi ketika alur kerjanya dihapus oleh @mytharcher

  - Memperbaiki masalah data yang diisi menghilang di formulir penerima tugas oleh @mytharcher

  - Memperbaiki masalah di mana menyetujui membuat asosiasi to-many ke record baru oleh @mytharcher

  - Memperbaiki kesalahan yang muncul saat membuat blok informasi persetujuan oleh @mytharcher

- **[Manajer Email]**
  - Menangani data abnormal oleh @jiannx

  - memperbaiki bug draf oleh @jiannx

  - tidak menyinkronkan status terjadwal gmail oleh @jiannx

  - Kesalahan refresh ShadowHtml oleh @jiannx

  - mengizinkan modifikasi id induk email oleh @jiannx

- **[Manajer migrasi]**
  - Memperbaiki masalah di mana pemutusan baris dalam data hilang selama migrasi. oleh @cgyrock

  - Memperbaiki deskripsi migrasi yang hilang dan mengatur waktu saat ini sebagai default oleh @cgyrock
