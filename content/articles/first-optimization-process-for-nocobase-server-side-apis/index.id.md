---
title: "Proses Optimasi Pertama untuk API Sisi Server NocoBase"
description: "Temukan proses optimasi komprehensif untuk API sisi server NocoBase. Panduan mendetail ini mencakup pengujian kinerja, analisis kode, dan peningkatan strategis untuk meningkatkan efisiensi API. Pelajari dampak berbagai middleware dan strategi caching pada kinerja, serta jelajahi peningkatan signifikan yang dicapai. Cocok untuk pengembang yang ingin mengoptimalkan kinerja API dalam skenario kompleks."
---

## Latar Belakang

Seorang pengguna melaporkan throughput sistem yang tidak memuaskan untuk NocoBase melalui [issue GitHub](https://github.com/nocobase/nocobase/issues/2912). Mengingat iterasi produk yang cepat, tim saat ini memprioritaskan peningkatan fungsionalitas sistem, dengan fokus yang lebih sedikit pada pengoptimalan spesifik untuk kinerja. Namun, seiring NocoBase beralih ke produksi dan memperluas basis penggunanya, masalah kinerja mulai bermunculan. Sangat penting bagi kami untuk meningkatkan fokus dan memulai upaya pengoptimalan.

Tentu saja, untuk produk seperti NocoBase, skenario aplikasi dunia nyata cenderung kompleks, dan terdapat variasi yang signifikan dalam kebiasaan pengguna. Pengoptimalan kinerja memerlukan analisis spesifik dan bertahap untuk skenario yang berbeda. Tidak mungkin untuk mengatasi semua masalah secara komprehensif dalam satu putaran pengoptimalan.

Putaran pengoptimalan ini berfokus pada penyediaan penilaian awal terhadap kinerja API sisi server sistem, diikuti oleh perbaikan fundamental yang ditargetkan.

## Pengujian Kinerja

### Penjelasan

NocoBase menggunakan kerangka kerja dasar Koa + Sequelize. Kami telah merancang beberapa skenario pengujian untuk digunakan sebagai tolok ukur analisis komparatif:

* **Koa + Sequelize:** Ini mewakili kerangka kerja dasar, yang mencerminkan kondisi optimal teoretis, meskipun skenario dunia nyata mungkin memperkenalkan beberapa kompromi.
* **Koa + @nocobase/database:** @nocobase/database adalah lapisan abstraksi berbasis Sequelize untuk operasi basis data.
* **Koa + @nocobase/resourcer:** @nocobase/resourcer berfungsi sebagai lapisan routing dan dispatcher.
* **Koa + @nocobase/server:** @nocobase/server berfungsi sebagai server NocoBase.
* **Koa + Nocobase:** Ini adalah program NocoBase lengkap, yang menggabungkan plugin bawaan.

Pengujian kinerja ini bukanlah simulasi lingkungan produksi untuk pengujian tekanan yang mendalam. Sebaliknya, ini berfokus pada pengujian berlapis untuk membandingkan data dan mengidentifikasi faktor utama yang memengaruhi kinerja API. Pengujian terutama dilakukan di komputer pribadi saya dengan spesifikasi berikut:

* **Sistem Operasi:** MacOS 14.0
* **CPU:** 10 core
* **Memori:** 32GB
* **Basis Data:** PostgreSQL (Docker, versi terbaru)
* **Eksekusi NocoBase:** `yarn start -d`

Titik akhir API yang diuji adalah `/api/users:list`, setara dengan mengeksekusi pernyataan `select ... limit 20` dan `count` pada tabel `users`. Kode spesifik dapat dirujuk [di sini](https://github.com/nocobase/nocobase/tree/main/benchmark).

Setiap skenario pengujian dievaluasi menggunakan perintah `wrk -t20 -c20 -d1m`.

### Koa + Sequelize

RPS: 6938.71

```
> $ wrk -t20 -c20 -d1m http://localhost:13020/ 
Running 1m test @ http://localhost:13020/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.91ms    0.88ms  38.10ms   97.01%
    Req/Sec   348.52     30.22   434.00     84.53%
  416831 requests in 1.00m, 141.52MB read
Requests/sec:   6938.71
Transfer/sec:      2.36MB
```

CPU Basis Data > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   125.63%   196.7MiB / 7.748GiB   2.48%     11.6GB / 15.8GB   76.4MB / 2.81GB   11
```

PostgreSQL biasanya hanya menggunakan satu inti CPU, yang menunjukkan bahwa hambatan kinerja terletak pada basis data.

### Koa + @nocobase/database

RPS: 5487.29

```
> $ wrk -t20 -c20 -d1m http://localhost:13010/                   
Running 1m test @ http://localhost:13010/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.66ms  795.89us  32.80ms   91.85%
    Req/Sec   275.53     21.87   434.00     82.60%
  329784 requests in 1.00m, 121.71MB read
Requests/sec:   5487.29
Transfer/sec:      2.03MB
```

CPU Basis Data > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   102.99%   197.7MiB / 7.748GiB   2.49%     12.3GB / 16.6GB   76.5MB / 2.82GB   11
```

Kinerja telah menurun, tetapi masih dapat diterima, dan basis data umumnya berjalan pada kapasitasnya.

### Koa + @nocobase/resourcer

RPS: 4787.94

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13040/api/users:list'
Running 1m test @ http://localhost:13040/api/users
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.20ms    0.92ms  30.97ms   88.29%
    Req/Sec   240.48     18.01   333.00     80.79%
  287757 requests in 1.00m, 120.47MB read
Requests/sec:   4787.94
Transfer/sec:      2.00MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O         BLOCK I/O         PIDS
80393e7580c1   postgres   87.72%    197.3MiB / 7.748GiB   2.49%     12.6GB / 17GB   76.5MB / 2.82GB   11
```

Kinerja semakin menurun, dan basis data belum mencapai kapasitas penuhnya. Kami akan menganalisis alasannya nanti.

### Koa + @nocobase/server

RPS: 2285.86

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13030/api/users:list'                                                   
Running 1m test @ http://localhost:13030/api/users:list
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.80ms    2.05ms  93.25ms   97.23%
    Req/Sec   114.80      9.27   300.00     93.35%
  137358 requests in 1.00m, 87.90MB read
Requests/sec:   2285.86
Transfer/sec:      1.46MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   47.82%    197.5MiB / 7.748GiB   2.49%     13.2GB / 17.7GB   76.9MB / 3.15GB   11
```

Membandingkan data pengujian dengan Koa + @nocobase/resourcer, ada penurunan kinerja sekitar 50%, yang menunjukkan bahwa hambatan kinerja utama telah bergeser dari basis data ke program itu sendiri.

### Nocobase

RPS: 580.48

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg' 
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    34.44ms    3.85ms  97.95ms   85.18%
    Req/Sec    29.03      3.94    50.00     85.04%
  34886 requests in 1.00m, 26.25MB read
Requests/sec:    580.48
Transfer/sec:    447.27KB
```

Kinerja komprehensif NocoBase telah menurun secara signifikan, seperti yang diantisipasi sebelum pengujian. Ini karena antarmuka melintasi banyak middleware plugin, yang melibatkan autentikasi, pemeriksaan izin, dan kueri basis data. Khususnya, caching belum diimplementasikan hingga saat ini, menjadikannya fokus utama pengoptimalan pada fase saat ini.

## Analisis dan Pengoptimalan Kode

### Sequelize -> database -> resourcer

Transisi dari Sequelize yang mendasar ke database, dan kemudian ke resourcer, meskipun setiap lapisan menimbulkan beberapa overhead kinerja, masih dapat diterima untuk satu proses. Ini terutama karena enkapsulasi tambahan dari logika kode. Karena fokus pengoptimalan saat ini bukan untuk mencapai solusi lengkap dalam satu waktu, bagian ini akan dipertahankan apa adanya untuk saat ini, dan penyesuaian yang diperlukan akan ditangani secara terpisah di masa mendatang.

### resourcer -> server

Transisi dari resourcer ke server, degradasi kinerja melebihi setengahnya, menunjukkan adanya masalah di area ini. Oleh karena itu, mari kita mulai analisis di sini. Server memperkenalkan middleware tingkat aplikasi tambahan dibandingkan dengan resourcer (lihat [`helper.ts`](https://github.com/nocobase/nocobase/blob/main/packages/core/server/src/helper.ts)). Setelah meninjau kode, sebagian besar logika tampak relatif mudah, tanpa area yang jelas berdampak signifikan pada kinerja. Akibatnya, saya memutuskan untuk mengumpulkan data yang terkait dengan konsumsi waktu middleware untuk mendapatkan wawasan lebih lanjut.

#### perf\_hooks

NodeJS menyediakan API pengujian kinerja melalui [perf\_hooks](https://nodejs.org/api/perf_hooks.html#perf_hooksperformance). API ini menawarkan serangkaian metrik yang lebih kaya di luar perhitungan waktu eksekusi sederhana. Dalam konteks kami, fokusnya tetap pada pemeriksaan waktu yang dihabiskan di setiap middleware. Dengan memanfaatkan `perf_hooks.createHistogram` untuk membuat histogram, kita dapat menjalankan pengujian tekanan, dengan cermat mencatat waktu eksekusi setiap middleware. Pendekatan ini memungkinkan kita memperoleh statistik utama seperti waktu eksekusi minimum, maksimum, dan median selama periode pengujian tekanan. Misalnya:

```
{
  "i18n": {
    "count": 12455,
    "min": 1875,
    "max": 927231,
    "mean": 4867.227137695704,
    "exceeds": 0,
    "stddev": 10258.399954791737,
    "percentiles": {
      "0": 1875,
      "50": 3250,
      "75": 5372,
      "100": 926720
    }
  }
}
```

Setelah mengurutkan hasilnya, dua komponen middleware yang secara khusus memengaruhi kinerja menonjol: logging dan `i18n`.

#### Logging

Secara default, NocoBase mengeluarkan log ke file dan terminal secara bersamaan. Merujuk pada dokumentasi Node.js tentang [I/O proses](https://nodejs.org/api/process.html#a-note-on-process-io),

> **Peringatan**: Penulisan sinkron memblokir event loop hingga penulisan selesai.

Di lingkungan pengujian saya, kedua output ini kemungkinan sinkron, dan karena ada logging untuk setiap permintaan dan respons, hal ini pasti berdampak pada kinerja. Mengingat bahwa log antarmuka sangat penting, kami akan mempertahankan konfigurasi saat ini untuk saat ini. Namun, di lingkungan produksi, biasanya hanya menyimpan log file. Oleh karena itu, dalam pengujian di masa mendatang, kami dapat mempertimbangkan untuk menonaktifkan log terminal untuk mengurangi beberapa overhead kinerja. Dalam produksi, menyesuaikan level log sesuai kebutuhan juga merupakan opsi yang tepat.

#### i18n

Middleware `i18n`, yang bertanggung jawab untuk mengelola sumber daya yang dilokalkan, menunjukkan konsumsi waktu yang signifikan, dengan hambatan utama diidentifikasi pada baris kode berikut:

```
const i18n = ctx.app.i18n.cloneInstance({ initImmediate: false });
```

Pendekatan saat ini untuk mengkloning instance i18n untuk mengisolasi sumber daya bahasa dalam permintaan yang berbeda memakan waktu. Untuk mengoptimalkan, pola singleton berdasarkan bahasa dapat diimplementasikan, memungkinkan penggunaan kembali instance yang ada untuk bahasa yang sama alih-alih memuat ulang untuk setiap permintaan.

### server -> NocoBase

Transisi dari server sederhana ke NocoBase lengkap, ada penurunan kinerja yang signifikan. Seperti yang disebutkan sebelumnya, NocoBase lengkap mencakup banyak plugin bawaan, memperkenalkan banyak middleware lapisan rute, termasuk autentikasi dan izin. Mengikuti metode yang dibahas sebelumnya, kami menggunakan `perf_hooks` untuk mengukur waktu yang dihabiskan di middleware ini. Hasilnya menyoroti dua middleware yang paling berdampak dan logika eksekusi utamanya:

* `authManager.middleware` - Middleware untuk autentikasi pengguna
  1. Periksa apakah token pengguna ada di daftar hitam.
  2. Ambil metode autentikasi yang saat ini digunakan.
  3. Dapatkan informasi pengguna berdasarkan metode autentikasi.
* `acl.setCurrentRole` - Middleware untuk mengatur informasi peran di modul izin
  * Ambil informasi peran terkait berdasarkan ID pengguna saat ini dan atur peran pengguna.

Kedua middleware ini melakukan kueri basis data dalam logika utamanya untuk setiap permintaan. Untuk mengatasi ini, kami memperkenalkan caching.

#### Strategi Caching

##### Penyimpanan

NocoBase saat ini menggunakan caching in-memory dan Redis. Untuk data yang relatif statis, seperti metode autentikasi sistem, kami menyimpannya di memori. Data yang terkait dengan informasi pengguna mengikuti konfigurasi penyimpanan default, memungkinkan pengguna memilih Redis sebagai metode penyimpanan default.

##### Caching Sesuai Permintaan + Pembaruan Hook

Data seperti metode autentikasi, informasi pengguna, dan peran biasanya termasuk dalam kategori intensif baca dan minim tulis. Kami menerapkan strategi caching sesuai permintaan, di mana permintaan pertama memicu kueri basis data, dan hasilnya di-cache. Permintaan berikutnya menggunakan hasil yang di-cache. Untuk memastikan konsistensi data, kami memperkenalkan hook untuk mendengarkan perubahan basis data dan menyinkronkannya dengan cache.

##### Bloom Filter

Untuk kueri daftar hitam token, di mana kami perlu membandingkan token pengguna dengan yang ada di daftar hitam, caching sesuai permintaan tidak cocok. Sebagai gantinya, selama startup program, kami memuat sebelumnya token daftar hitam ke dalam cache. Untuk menghemat ruang memori, kami menggunakan Bloom filter untuk caching daftar hitam. Bloom filter secara akurat menentukan apakah suatu nilai tidak ada, dengan kemungkinan salah menilai keberadaan suatu nilai. Awalnya, Bloom filter memeriksa apakah token pengguna ada di daftar hitam. Jika Bloom filter menunjukkan keberadaan, kami melakukan kueri basis data sekunder untuk akurasi.

##### LRU

Cache in-memory NocoBase secara default menggunakan strategi Least Recently Used (LRU) untuk pengusiran cache. Pengguna dapat mengonfigurasi kebijakan cache, seperti menetapkan batas atas ruang cache. Untuk pengguna Redis, strategi cache kustom seperti LRU atau LFU dapat dikonfigurasi sesuai kebutuhan.

#### Pengoptimalan Lainnya

Selain pengoptimalan middleware yang disebutkan sebelumnya, beberapa middleware, seperti db2resource dan ACLMiddleware, juga memengaruhi kinerja. Untuk menganalisis lebih lanjut potensi hambatan kinerja, dan karena saat ini tidak ada tugas pengoptimalan yang mudah, kami berencana untuk mengaktifkan inspector untuk memeriksa profil CPU sistem selama runtime.

```
# Aktifkan inspector
NODE_ARGS=--inspect yarn start
```

Dengan terus mengirimkan permintaan ke API menggunakan wrk dan menangkap profil CPU di Chrome DevTools selama durasi tertentu, kami dapat memperoleh hasil yang mirip dengan berikut ini.

![Chrome DevTools](https://static-docs.nocobase.com/fdfa998ef9c4067b2b302551f6ab950d.webp)

Setelah memeriksa profil, kami mengidentifikasi bahwa logika tertentu di db2resource untuk mengurai rute, seperti penggunaan pathToRegexp, memiliki dampak yang nyata pada kinerja, menjelaskan degradasi lebih lanjut dalam kinerja pada lapisan routing yang diamati dalam pengujian sebelumnya. Di ACLMiddleware, operasi yang terkait dengan penanganan izin, seperti miniMatch, juga menunjukkan waktu eksekusi yang lebih lama. Untuk aspek-aspek ini, kami telah menerapkan beberapa pengoptimalan awal, seperti caching variabel untuk perhitungan berulang. Pengoptimalan yang lebih ekstensif akan ditangani dalam iterasi mendatang.

## Ringkasan

### Hasil Pengoptimalan

Dalam upaya pengoptimalan ini, kami berfokus pada:

* Menggunakan variabel untuk caching operasi yang memakan waktu di middleware, seperti pembuatan instance `i18n` dan pemeriksaan izin.
* Memperkenalkan mekanisme caching yang sesuai untuk operasi middleware yang melibatkan kueri basis data yang sering.

Selain itu, kami merekomendasikan untuk menyesuaikan level dan metode output logging di lingkungan produksi berdasarkan kebutuhan untuk mengurangi dampak pencetakan log pada kinerja API.

Setelah menerapkan pengoptimalan ini, pengujian ulang aplikasi NocoBase lengkap mengungkapkan peningkatan yang signifikan dalam kinerja API.

```
> $ wrk -c20 -t20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0'
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.60ms    2.62ms 103.80ms   96.32%
    Req/Sec   105.44     11.62   393.00     83.66%
  126047 requests in 1.00m, 60.10MB read
  Non-2xx or 3xx responses: 2
Requests/sec:   2097.31
Transfer/sec:      1.00MB
```

### Pengoptimalan Berkelanjutan

Proses pengoptimalan dalam putaran ini memiliki keterbatasan tertentu:

Di satu sisi, kami hanya menguji permintaan sederhana. Dalam skenario bisnis nyata, aspek seperti pemfilteran, penguraian variabel, transaksi kompleks, dll., dapat menghadirkan tantangan kinerja tambahan yang memerlukan pengoptimalan lebih lanjut.

Di sisi lain, kami berfokus pada pengoptimalan bagian yang secara signifikan memengaruhi kinerja, meninggalkan ruang untuk perbaikan di area lain.

Di masa mendatang, kami akan terus mengoptimalkan kinerja NocoBase. Jika Anda mengalami masalah kinerja dalam penggunaan Anda, jangan ragu untuk memberikan kasus spesifik untuk analisis dan pengoptimalan. Masukan Anda akan sangat berharga dalam menangani skenario penggunaan dunia nyata.

## Referensi

* [Praktik Terbaik Caching | Amazon Web Services](https://aws.amazon.com/cn/caching/best-practices/)
* [Bloom filter](https://redis.io/docs/data-types/probabilistic/bloom-filter/)
* [API Pengukuran Kinerja | Dokumentasi Node.js v21.4.0](https://nodejs.org/api/perf_hooks.html#perf_hookscreatehistogramoptions)
* [Debugging - Memulai | Node.js](https://nodejs.org/en/guides/debugging-getting-started)
