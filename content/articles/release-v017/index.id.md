---
title: "NocoBase 0.17: SchemaInitializer dan SchemaSettings Baru"
description: "NocoBase 0.17 merombak perancang Skema UI dengan SchemaInitializer dan SchemaSettings baru, mengatur ulang dokumentasi, dan memperkenalkan beberapa perbaikan untuk pengembangan frontend yang lebih baik."
---

## Fitur Baru

Untuk mengurangi biaya pembelajaran pengembangan dan memberikan pengalaman pengembangan frontend yang lebih baik, kami telah melakukan rekonstruksi bertahap pada inti frontend selama beberapa bulan terakhir, termasuk:

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

Kali ini, v0.17 telah merefaktor SchemaInitializer dan SchemaSettings yang terkait dengan perancang UI Schema.

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

Untuk mengatasi kesulitan pengguna dalam memulai, kami juga telah mengatur ulang berbagai bagian dokumentasi:

* [Pengembangan Plugin](https://docs.nocobase.com/development) (direvisi total dan diterbitkan)
* [Referensi API / Klien](https://client.docs.nocobase.com/core/application/application) (bagian baru, sudah diterbitkan)
* Buku Panduan Pengguna (direvisi total, akan dirilis dalam satu hingga dua minggu ke depan)
* Daftar Plugin (bagian baru, mencakup pengenalan, penggunaan, dan petunjuk pengembangan ekstensi untuk semua plugin yang ada, akan dirilis dalam satu hingga dua minggu ke depan)

## Perubahan yang Tidak Kompatibel

### Perubahan pada SchemaInitializer

* Menambahkan `SchemaInitializerManager` untuk mendaftarkan `SchemaInitializer`
* Menambahkan `useSchemaInitializerRender()` untuk menggantikan `useSchemaInitializer()` `render()` yang asli
* Menambahkan `useSchemaInitializerItem()` untuk mendapatkan konteks item inisialisasi saat ini
* Menambahkan komponen `SchemaInitializerItemGroup` sebagai komponen default untuk `type: 'itemGroup'`
* Menambahkan komponen `SchemaInitializerSubMenu` sebagai komponen default untuk `type: 'subMenu'`
* Menambahkan komponen `SchemaInitializerDivider` sebagai komponen default untuk `type: 'divider'`
* Menambahkan komponen `SchemaInitializerChildren` untuk rendering kustom beberapa item daftar
* Menambahkan komponen `SchemaInitializerChild` untuk rendering kustom satu item daftar
* Mengubah tanggung jawab `SchemaInitializerContext` untuk menyimpan konteks inisialisasi saat ini
* Mengubah tanggung jawab `useSchemaInitializer()` untuk mendapatkan konteks inisialisasi saat ini
* Mengubah `function SchemaInitializer` menjadi `class SchemaInitializer` untuk mendefinisikan inisialisasi
* Mengubah parameter `SchemaInitializer`
  * Menambahkan parameter wajib `name` untuk nilai `x-initializer`
  * Menambahkan parameter `Component` untuk rendering kustom tombol. Default adalah `SchemaInitializerButton`.
  * Menambahkan `componentProps`, `style` untuk mengonfigurasi properti dan gaya `Component`
  * Menambahkan parameter `ItemsComponent` untuk rendering kustom daftar. Default adalah `SchemaInitializerItems`.
  * Menambahkan `itemsComponentProps`, `itemsComponentStyle` untuk mengonfigurasi properti dan gaya `ItemsComponent`
  * Menambahkan parameter `popover` untuk mengonfigurasi apakah akan menampilkan efek `popover`
  * Menambahkan parameter `useInsert` untuk saat fungsi `insert` perlu menggunakan hooks
  * Mengubah parameter `dropdown` menjadi `popoverProps`, menggunakan `Popover` sebagai pengganti `Dropdown`
* Mengubah parameter `items` untuk `SchemaInitializer`
  * Menambahkan fungsi `useChildren` untuk mengontrol item anak secara dinamis
  * Menambahkan fungsi `componentProps` untuk properti komponen itu sendiri
  * Menambahkan fungsi `useComponentProps` untuk memproses props komponen secara dinamis
  * Mengubah parameter `key` menjadi `name` untuk identifikasi unik item daftar
  * Mengubah parameter `visible` menjadi fungsi `useVisible` untuk mengontrol tampilan secara dinamis
  * Mengubah parameter `component` menjadi `Component` untuk merender item daftar
* Mengubah `SchemaInitializer.Button` menjadi `SchemaInitializerButton`, nilai default untuk parameter Component dari SchemaInitializer
* Mengubah `SchemaInitializer.Item` menjadi `SchemaInitializerItem`, dengan parameter yang tidak berubah
* Mengubah `SchemaInitializer.ActionModal` menjadi `SchemaInitializerActionModal`, dengan parameter yang tidak berubah
* Mengubah `SchemaInitializer.SwitchItem` menjadi `SchemaInitializer.Switch`, dengan parameter yang tidak berubah
* Menghapus `SchemaInitializerProvider`, digantikan oleh `SchemaInitializerManager`
* Menghapus `SchemaInitializer.itemWrap`, tidak perlu lagi membungkus komponen `item`

### Perubahan pada SchemaSettings

* Menambahkan `SchemaSettingsManager` untuk mendaftarkan `SchemaSettings`
* Menambahkan `useSchemaSettingsItem()`
* Menambahkan `useSchemaSettingsRender()`
* Menambahkan parameter `x-settings` untuk mengonfigurasi pengaturan skema
* Menambahkan parameter `x-toolbar` untuk mengonfigurasi toolbar skema
* Menambahkan komponen `SchemaToolbar` untuk menyesuaikan toolbar skema
* Menambahkan `useSchemaToolbarRender()` untuk menggantikan `useDesigner()` yang asli
* Mengubah `function SchemaSettings` menjadi `class SchemaSettings` untuk mendefinisikan pengaturan
* Mengubah `SchemaSettings` yang asli menjadi `SchemaSettingsDropdown`
* Mengubah `SchemaSettings.Item` menjadi `SchemaSettingsItem`
* Mengubah `SchemaSettings.ItemGroup` menjadi `SchemaSettingsItemGroup`
* Mengubah `SchemaSettings.SubMenu` menjadi `SchemaSettingsSubMenu`
* Mengubah `SchemaSettings.Divider` menjadi `SchemaSettingsDivider`
* Mengubah `SchemaSettings.Remove` menjadi `SchemaSettingsRemove`
* Mengubah `SchemaSettings.SelectItem` menjadi `SchemaSettingsSelectItem`
* Mengubah `SchemaSettings.CascaderItem` menjadi `SchemaSettingsCascaderItem`
* Mengubah `SchemaSettings.SwitchItem` menjadi `SchemaSettingsSwitchItem`
* Mengubah `SchemaSettings.ModalItem` menjadi `SchemaSettingsModalItem`
* Mengubah `SchemaSettings.ActionModalItem` menjadi `SchemaSettingsActionModalItem`
* Menghapus parameter `x-designer`, tidak digunakan lagi, akan dihapus di masa mendatang, gunakan `x-toolbar` sebagai gantinya
* Menghapus `useDesigner()`, tidak digunakan lagi, akan dihapus di masa mendatang, gunakan `useSchemaToolbarRender()` sebagai gantinya

Untuk detail lebih lanjut, lihat [Perubahan Tidak Kompatibel di NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017)
