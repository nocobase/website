---
title: "NocoBase 0.14: Manajer plugin baru, mendukung penambahan plugin melalui UI"
description: "NocoBase 0.14 memperkenalkan manajer plugin baru yang memungkinkan penambahan plugin melalui UI, mendukung unduhan dari registry npm, unggahan lokal, dan unduhan URL, meningkatkan fleksibilitas manajemen plugin."
---

Rilis ini memungkinkan plugin plug-and-play di lingkungan produksi. Anda sekarang dapat menambahkan plugin langsung melalui antarmuka pengguna, dan mendukung pengunduhan dari registry npm (yang bisa bersifat pribadi), unggahan lokal, dan unduhan URL.

## Fitur baru

### Antarmuka manajer plugin baru

![Antarmuka manajer plugin baru](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### Plugin yang diunggah terletak di direktori storage/plugins.

Direktori storage/plugins digunakan untuk mengunggah plugin, dan diatur sebagai paket npm.

```
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /@foo/
      |- /bar/
    |- /my-nocobase-plugin-hello/
```

### Pembaruan plugin

Saat ini, hanya plugin di bawah storage/plugins yang dapat diperbarui, seperti yang ditunjukkan di sini:

![Pembaruan plugin](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

Catatan: Untuk memudahkan pemeliharaan dan peningkatan, serta menghindari ketidaktersediaan plugin storage karena peningkatan, Anda dapat meletakkan plugin baru langsung ke storage/plugins dan kemudian melakukan operasi peningkatan.

## Perubahan yang tidak kompatibel

### Perubahan pada nama plugin

* Variabel lingkungan PLUGIN\_PACKAGE\_PREFIX tidak lagi disediakan.
* Nama plugin dan nama paket disatukan, nama plugin lama masih dapat ada sebagai alias.

### Peningkatan pada pm.add

```
# Gunakan packageName sebagai pengganti pluginName, cari secara lokal, error jika tidak ditemukan
pm add packageName

# Unduh dari jarak jauh hanya jika registry disediakan, juga dapat menentukan versi
pm add packageName --registry=xx --auth-token=yy --version=zz

# Anda juga dapat menyediakan zip lokal, tambahkan beberapa kali dan ganti dengan yang terakhir
pm add /a/plugin.zip

# Zip jarak jauh, ganti dengan nama yang sama
pm add http://url/plugin.zip
```

### Perubahan konfigurasi Nginx

Tambahkan lokasi `/static/plugins/`

```
server {
    location ^~ /static/plugins/ {
        proxy_pass http://127.0.0.1:13000/static/plugins/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

Lihat lebih lanjut versi lengkap dari [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## Panduan pengembangan plugin

[Kembangkan plugin pertama](https://docs.nocobase.com/development/your-fisrt-plugin)

* [  rilis](https://blog.nocobase.com/tags/release)
