## 第2四半期の新機能

- 関係フィールドコンポーネントの改善、複数コンポーネントの切り替えをサポート
  - セレクト
  - レコードピッカー
  - サブフォーム/サブ詳細
  - サブテーブル
  - ファイルマネージャー
  - タイトル（読み取り専用）
- 関係データの迅速な作成、2つの迅速な作成モードをサポート
  - タイトルフィールドに基づいて新しいレコードを迅速に作成するためのドロップダウンメニューへの追加
  - 複雑な追加フォームを構成するためのポップアップウィンドウへの追加
- 複製アクション、2つのモードをサポート
  - 直接複製
  - フォームにコピーして続けて記入
- フォームデータテンプレート
- データ範囲のフィルタで変数をサポート
- リストブロック
- グリッドカードブロック
- モバイルクライアントプラグイン
- ユーザー認証プラグイン、異なる認証方法をサポート
  - メール/パスワード
  - SMS
  - OIDC
  - SAML
- ワークフローノード
  - マニュアルノードのアップグレード、既存のコレクションからの追加と編集をサポート
  - ループノード
  - 集約ノード
- ファイルマネージャー
  - ファイルコレクションテンプレートの提供
  - ファイルマネージャーコンポーネントの提供

## アプリケーションのアップグレード

### Docker Composeによるアップグレード

変更なし、アップグレードの参照 [Docker Composeによるアップグレード](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)

### Gitソースコードによるアップグレード

v0.10では依存関係に重大なアップグレードが行われているため、ソースコードのアップグレード時にエラーを防ぐために、アップグレード前に以下のディレクトリを削除する必要があります。

```bash
# .umiキャッシュを削除
yarn rimraf -rf "./**/{.umi,.umi-production}"
# コンパイルされたファイルを削除
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# 依存関係を削除
yarn rimraf -rf node_modules
```

詳細については [Gitソースコードによるアップグレード](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone)を参照してください。

### create-nocobase-appによるアップグレード

`yarn create`を実行して新しいバージョンを再ダウンロードし、`.env`構成を修正することをお勧めします。詳細については [主要バージョンのアップグレードガイド](https://docs.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)を参照してください。

## 今後の廃止予定および互換性のない変更

### サブテーブルフィールドコンポーネント

新しいバージョンとは互換性がなく、ブロックフィールドは削除して再割り当てする必要があります（UIの再割り当てのみ）。

### 添付ファイルアップロードAPIの変更

内蔵のattachmentsテーブルに加えて、ユーザーはカスタムファイルコレクションも作成できます。添付ファイルのアップロードAPIは`/api/attachments:upload`から`/api/<file-collection>:create`に変更され、uploadは廃止されますが、v0.10と互換性はあります。ただし、次の主要リリースで削除されます。

### サインイン/サインアップAPIの変更

nocobaseカーネルは、ユーザーログイン、登録、確認、およびログアウトAPIの変更を含む、より強力な [authモジュール](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth)を提供します。

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

注意：上記のusersインターフェースは廃止予定ですが、v0.10と互換性があり、次の主要リリースで削除されます。

### 日付フィールドフィルタリングの調整

以前にデータ範囲で日付関連フィルタを設定していた場合は、それを削除し再設定する必要があります。

## サードパーティプラグインアップグレードガイド

### 依存関係のアップグレード

v0.10 依存関係のアップグレードは、主に次のものを含みます。

- `react`をv18にアップグレード
- `react-dom`をv18にアップグレード
- `react-router`をv6.11にアップグレード
- `umi`をv4にアップグレード
- `dumi`をv2にアップグレード

`package.json`の依存関係は最新バージョンに変更する必要があります。例:

```diff
{
  "devDependencies": {
+   "react": "^18."
+   "react-dom": "^18."
+   "react-router-dom": "^6.11.2."
-   "react": "^17."
-   "react-dom": "^17."
-   "react-router-dom": "^5."
  }
}
```

### コードの変更

react-routerがアップグレードされたため、関連するコードも変更する必要があります。主な変更は次のとおりです。

### レイアウトコンポーネント

レイアウトコンポーネントは、`props.children`の代わりに`<Outlet />`を使用する必要があります。

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

`React.cloneElement`を使ってルートコンポーネントをレンダリングする場合は、次のように変更する必要があります。

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

ルートコンポーネントは、`useOutletContext`から値を取得するように変更します。

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### リダイレクト

`<Redirect>`は`<Navigate replace />`に変更されます。

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate`に変更されます。

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

`useLocation<type>()`は`useLocation`に変更されます。

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()`は`useSearchParams()`に変更されます。

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### path

次のすべてのルートパスがv6で有効です。

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

以下のRegExpスタイルのルートパスはv6では無効です。

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

詳細なAPIの変更については、[react-router@6](https://reactrouter.com/en/main/upgrading/v5)を参照してください。