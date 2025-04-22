## 新機能

### テレメトリー

* 開発文書：[https://docs.nocobase.com/development/server/telemetry](https://docs.nocobase.com/development/server/telemetry)
* カーネルAPI：[https://docs.nocobase.com/api/telemetry/telemetry](https://docs.nocobase.com/api/telemetry/telemetry)
* Prometheusプラグイン：[https://docs.nocobase.com/plugins/telemetry-prometheus](https://docs.nocobase.com/plugins/telemetry-prometheus)

### アプリケーションのバックアップと復元

* プラグイン文書：[https://docs.nocobase.com/plugins/backup-restore](https://docs.nocobase.com/plugins/backup-restore)

## カーネル最適化

### コマンドラインの最適化

NocoBase 0.19以上では、プラグインのカスタマイズコマンドはプラグインの `src/server/commands/*.ts` ディレクトリに配置する必要があり、内容は次の通りです：

```
export default function(app) {
  app.command('custom1').action();
}
```

コマンドラインの実行フロー：

![コマンドラインの実行フロー](https://static-docs.nocobase.com/c5b5296293a4f445511c9f8778148480.jpg)

Commandの特別な構成

* `ipc()` アプリが実行されているとき、コマンドラインはipcを介してコマンドを送信し、実行中のアプリインスタンスを操作します。ipc()が設定されていない場合、新しいアプリインスタンスが作成されてから操作が実行されます（実行中のアプリインスタンスには干渉しません）。
* `auth()` データベースの検証を行い、データベース構成が不正な場合、このコマンドは実行されません。
* `preload()` アプリケーションの設定を事前にロードするかどうか（app.load()を実行）

これはコマンドの実際の使用に応じて設定できます。例は次の通りです：

```
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### インストールプロセスの最適化

![インストールプロセスの最適化](https://static-docs.nocobase.com/8f257e6f5e0cd73de3a2e3dc2c61f39e.webp)

### スタートアッププロセスの最適化

![スタートアッププロセスの最適化](https://static-docs.nocobase.com/a73c3b50195c2899db30672ae8e86af3.webp)

### アップグレードプロセスの最適化

![アップグレードプロセスの最適化](https://static-docs.nocobase.com/ba16f9f55c2a8bc5f7694b84077bea7b.webp)

アップグレードマイグレーションはbeforeLoad、afterSync、およびafterLoadに分類されます：

* beforeLoad：各モジュールの読み込み前に実行され、3つの段階に分かれています：
  * カーネルモジュールの読み込み前
  * プリセットプラグインの読み込み前
  * その他のプラグインの読み込み前
* afterSync：データベースとのデータテーブル設定の同期後に実行され、3つの段階に分かれています：
  * カーネルテーブルのデータベースとの同期後
  * プリセットプラグインテーブルのデータベースとの同期後
  * その他のプラグインテーブルのデータベースとの同期後
* afterLoad：アプリケーションの完全な読み込み後のみ実行されます。

```
export default class extends Migration {
  // マイグレーションの実行時期
  on = 'beforeLoad';
  // 次のアプリバージョン番号が満たされたときのみ実行されます。
  appVersion = '<=0.13.0-alpha.5';
  // 次のプラグインバージョン番号が満たされたときのみ実行されます。
  pluginVersion = '<=0.13.0-alpha.5';
  // アップグレードスクリプト。
  async up() {}
}
```

### create-migrationコマンドの追加

マイグレーションファイルを作成します。

```
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  パッケージ名
  --on [on]    オプションにはbeforeLoad、afterSync、afterLoadが含まれます
  -h, --help   コマンドのヘルプを表示します
```

例

```
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] アプリメインをスーパーバイザーに追加
2024-01-07 17:33:13 [info ] マイグレーションファイルは /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts にあります
✨  5.02秒で完了しました。
```

マイグレーションファイルはプラグインパッケージ `@nocobase/plugin-client` の `src/server/migrations` にて `20240107173313-update-ui.ts` として生成され、初期内容は以下の通りです：

```
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // コーディング
  }
}
```

### プラグインの規約ベースのディレクトリ

```
|- /plugin-sample-hello
  |- /dist             # コンパイルされたプラグインのディレクトリ
  |- /src              # プラグインソースコード
    |- /client
      |- plugin.ts
      |- index.ts      # クライアント側のエントリーポイント
    |- /locale         # フロントエンドとバックエンドで共有される多言語ファイルの規約ディレクトリ
    |- /swagger        # Swagger文書のための規約ディレクトリ
    |- /server
      |- collections   # プラグインのデータテーブルの設定のための規約ディレクトリ
      |- commands      # カスタムコマンドのための規約ディレクトリ
      |- migrations    # マイグレーションファイルのための規約ディレクトリ
      |- plugin.ts     # プラグインクラス
      |- index.ts      # サーバー側のエントリーポイント
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

テストプロセスの最適化

テストケースを書くための使いやすい `createMockServer()` と `startMockServer()` メソッドを提供します：

* `createMockServer()` アプリケーションを迅速に作成し起動します。
* `startMockServer()` アプリケーションを迅速に起動します（再インストールなし）。

```
import { createMockServer } from '@nocobase/server';

describe('テストの例', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('ケース1', async () => {
    // コーディング...
  });
});
```

## 破壊的変更

### コレクション、コマンド、マイグレーション構成の規約ベースのディレクトリへの変更

例1：importCollectionsで読み込まれるコレクション、コードはそのまま削除し、コレクション構成ファイルは `src/server/collections` ディレクトリに配置する必要があります。

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

例2：this.db.importを通じて読み込まれるコレクション、コードはそのまま削除され、コレクション構成ファイルは `src/server/collections` ディレクトリに置いてください。

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

例3：db.collection()で定義されたコレクションは、`src/server/collections` ディレクトリに配置することを推奨します。

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

新しく`src/server/collections/examples.ts`ファイルを追加し、内容は以下の通りです：

```
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

例4：db.addMigrations()を削除し、マイグレーションファイルは`src/server/migrations`ディレクトリに配置しなければなりません。

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

例5：カスタムコマンドラインを定義します。

```
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('現在のバージョン:', app.getVersion());
-        }
-      });
-  }
}
```

新たに `src/server/collections/echo.ts` ファイルを追加し、その内容は以下の通りです：

```
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('現在のバージョン:', await app.version.get());
      }
    });
}
```
