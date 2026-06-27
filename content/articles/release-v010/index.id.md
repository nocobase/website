---
title: "NocoBase 0.10: Fitur baru di kuartal kedua"
description: "NocoBase 0.10 meningkatkan komponen bidang relasional dengan mendukung beberapa sakelar komponen dan menambahkan fungsionalitas pembuatan data relasional cepat dengan dua mode pembuatan cepat serta pembaruan lainnya."
---

## Fitur baru di kuartal kedua

- Peningkatan komponen bidang asosiasi, mendukung peralihan beberapa komponen
  - Pilih
  - Pemilih catatan
  - Sub-formulir/Sub-detail
  - Sub-tabel
  - Manajer file
  - Judul (hanya baca)
- Pembuatan cepat data relasional, mendukung dua mode pembuatan cepat
  - Tambahkan di menu tarik-turun untuk membuat catatan baru dengan cepat berdasarkan bidang judul
  - Tambahkan di jendela pop-up untuk mengonfigurasi formulir tambahan yang kompleks
- Tindakan duplikat, mendukung dua mode
  - Duplikat langsung
  - Salin ke dalam formulir dan lanjutkan mengisi
- Templat data formulir
- Dukungan variabel untuk cakupan data filter
- Blok daftar
- Blok kartu grid
- Plugin klien seluler
- Plugin autentikasi pengguna, mendukung berbagai metode autentikasi
  - Email/Kata Sandi
  - SMS
  - OIDC
  - SAML
- Node alur kerja
  - Peningkatan node manual, mendukung penambahan dan pengeditan dari koleksi yang ada
  - Node perulangan
  - Node agregat
- Manajer file
  - Menyediakan templat koleksi file
  - Menyediakan komponen manajer file

## Memutakhirkan aplikasi

### Memutakhirkan untuk Docker compose

Tidak ada perubahan, referensi peningkatan [Memutakhirkan untuk Docker compose](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)

### Memutakhirkan untuk kode sumber Git

v0.10 memiliki peningkatan besar pada dependensi, jadi untuk mencegah kesalahan saat memutakhirkan kode sumber, Anda perlu menghapus direktori berikut sebelum memutakhirkan

```bash
# Hapus cache .umi
yarn rimraf -rf "./**/{.umi,.umi-production}"
# Hapus file yang dikompilasi
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# Hapus dependensi
yarn rimraf -rf node_modules
```

Lihat [Memutakhirkan untuk kode sumber Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone) untuk detail lebih lanjut

### Memutakhirkan untuk create-nocobase-app

Disarankan agar `yarn create` mengunduh ulang versi baru dan memodifikasi konfigurasi `.env`, untuk detail lebih lanjut lihat [panduan peningkatan versi utama](https://docs.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)

## Perubahan yang akan segera tidak digunakan lagi dan berpotensi tidak kompatibel

### Komponen bidang sub-tabel

Tidak kompatibel dengan versi baru, bidang blok perlu dihapus dan ditetapkan ulang (hanya penetapan ulang UI)

### Perubahan api unggahan lampiran

Selain tabel lampiran bawaan, pengguna juga dapat mengkustomisasi koleksi file, api unggahan untuk lampiran telah diubah dari `/api/attachments:upload` menjadi `/api/<file-collection>:create`, unggahan tidak digunakan lagi, masih kompatibel dengan v0.10 tetapi akan dihapus.

### Perubahan api signin/signup

Kernel nocobase menyediakan [modul auth](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth) yang lebih kuat dengan perubahan berikut pada api login, pendaftaran, verifikasi, dan logout pengguna:

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Catatan: Antarmuka pengguna di atas, yang tidak digunakan lagi, masih kompatibel dengan v0.10, tetapi akan dihapus pada rilis utama berikutnya.

### Penyesuaian pada pemfilteran bidang tanggal

Jika pemfilteran terkait tanggal sebelumnya dikonfigurasi dalam rentang data, itu perlu dihapus dan dikonfigurasi ulang.

## Panduan peningkatan plugin pihak ketiga

### Peningkatan dependensi

dependensi terutama meliputi

- `react` ditingkatkan ke v18
- `react-dom` ditingkatkan ke v18
- `react-router` ditingkatkan ke v6.11
- `umi` ditingkatkan ke v4
- `dumi` ditingkatkan ke v2

Dependensi `package.json` harus diubah ke versi terbaru, misalnya:

```diff
{
  "devDependencies": {
+   "react": "^18".
+   "react-dom": "^18".
+   "react-router-dom": "^6.11.2".
-   "react": "^17".
-   "react-dom": "^17".
-   "react-router-dom": "^5".
  }
}
```

### Perubahan kode

Karena react-router telah ditingkatkan, kode terkait juga perlu diubah, perubahan utama meliputi

### Komponen Tata Letak

Komponen Tata Letak perlu menggunakan `<Outlet />` sebagai pengganti `props.children`.

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

jika Anda menggunakan `React.cloneElement` untuk merender komponen rute, Anda perlu mengubahnya seperti ini:

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

Ubah komponen rute untuk mendapatkan nilai dari `useOutletContext`

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### Redirect

`<Redirect>` diubah menjadi `<Navigate replace />`.

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate` diubah menjadi `useHistory`.

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` diubah menjadi `useLocation`.

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` diubah menjadi `useSearchParams()`.

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### path

Semua jalur rute berikut valid di v6:

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

Jalur rute gaya RegExp berikut tidak valid di v6:

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

Untuk perubahan api lebih lanjut, silakan merujuk ke [react-router@6](https://reactrouter.com/en/main/upgrading/v5).
