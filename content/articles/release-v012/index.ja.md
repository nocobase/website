## 新機能

* 新しいプラグインビルドツール。このビルドされたプラグインは、二重ビルドの必要なしに直接本番環境で使用できます。

## アプリケーションのアップグレード

### Dockerインストールのアップグレード

変更なし。[Dockerイメージアップグレードガイド](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)を参照してください。

### ソースコードインストールのアップグレード

プラグインビルドツールが新しくアップグレードされており、新しいソースをプルした後にキャッシュをクリアする必要があります。

```
git pull # 新しいソースコードをプルします。
yarn clean # キャッシュをクリアします。
```

詳細については、[Gitソースアップグレードガイド](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone)を参照してください。

### create-nocobase-appインストールのアップグレード

`yarn create`を介して新しいバージョンを再ダウンロードし、.env設定を更新してください。詳細については、[メジャーバージョンアップグレードガイド](https://docs-cn.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app)を参照してください。

## 互換性のない変更

### @nocobase/app-clientと@nocobase/app-serverが@nocobase-appに統合されました

create-nocobase-app経由でインストールされたアプリにはもはやpackages/appディレクトリは存在せず、packages/app内のカスタムコードはカスタムプラグインに移動する必要があります。

### アプリのdist/clientパスが変更されました。

nginxを自分で設定している場合は、類似の調整が必要です。

```
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### サードパーティプラグインを再構築する必要があります

以下のサードパーティプラグインアップグレードガイドを参照してください。

## サードパーティプラグインアップグレードガイド

### プラグインディレクトリには`src/client`および`src/server`ディレクトリが必要です。

```
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

具体的なデモコードは、[sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)から参照できます。

### プラグインの多言語配置`src/locale`ディレクトリ

フロントエンドとバックエンドの両方で、多言語翻訳ファイルは`src/locale`ディレクトリに配置されるため、プラグインは自ら多言語パッケージをロードする必要はありません。

### プラグイン依存関係の調整

プラグインの依存関係は、自身の依存関係とグローバルな依存関係に分かれています。グローバル依存関係は直接グローバルに使用され、プラグイン製品にパッケージされることはありませんが、自身の依存関係は製品にパッケージされます。プラグインのビルド後、製品環境はプラグアンドプレイになり、依存関係をインストールしたり、二度ビルドする必要はありません。プラグイン依存関係の調整は以下を含みます：

* `@nocobase/*`関連のパッケージを`peerDependencies`に入れ、バージョン番号を`0.x`と指定します；
* その他の依存関係は`devDependencies`に配置し、`dependencies`には置きません。プラグインはビルド後、製品環境で必要なすべての依存関係を抽出します。

```
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### プラグインの出力パスが`lib`から`dist`に変更されました。

distディレクトリ構造

```
|- dist
  |- client       # クライアントサイド、umd形式
    |- index.js
    |- index.d.ts
  |- server       # サーバーサイド、cjs形式
    |- index.js
    |- index.d.ts
    |- その他
  |- locale       # 多言語パッケージ
  |- node_modules # サーバー依存関係
```

その他の関連調整には、package.jsonのメインパラメータの調整が含まれます。

```
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

client.d.ts

```
export * from './dist/client';
export { default } from './dist/client';
```

client.js

```
module.exports = require('./dist/client/index.js');
```

server.d.ts

```
export * from './dist/server';
export { default } from './dist/server';
```

server.js

```
module.exports = require('./dist/server/index.js');
```
