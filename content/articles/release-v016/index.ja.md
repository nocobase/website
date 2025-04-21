## 新機能

以前のキャッシュのバージョンは使い勝手が悪かった（メモリキャッシュのみをサポート）、v0.16ではリファクタリングが行われ、インメモリとRedisストアが内蔵され、カスタムストアもサポートされています。使用方法の詳細については、[APIドキュメント](https://docs.nocobase.com/api/cache/cache-manager)を参照してください。

## 破壊的変更

### Nodeの最小バージョンが18に変更

Node v16はもはやメンテナンスされておらず、最小バージョンがv18に変更されました。

```
{
  "engines": {
    "node": ">=18"
  }
}
```

### キャッシュ作成方法の更新

非推奨: キャッシュ作成には`createCache`を使用してください。

```
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

キャッシュは今や`CacheManager`によって管理され、`app.cacheManager`で作成されます。

```
const cache = await app.cacheManager.createCache({
  name: "memory", // キャッシュのユニーク名
  store: "memory", // キャッシュ手法のユニーク名
  // その他の設定
  max: 2000,
  ttl: 60 * 1000,
});
```

### 環境変数の更新

以前のキャッシュの環境変数は、設定のためにJSON文字列を必要としていました。

```
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

新しい環境変数は、キャッシュの設定に使用します。

```
# デフォルトキャッシュ手法のユニーク名、メモリまたはRedis
CACHE_DEFAULT_STORE=memory
# メモリキャッシュのアイテム最大数
CACHE_MEMORY_MAX=2000
# Redis、オプション
CACHE_REDIS_URL=redis://localhost:6379
```

## 完全な変更履歴

* refactor(cache): キャッシュを改善 [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
* fix: ローカルストレージのベースURL [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
* feat: テーブル定義の表示 [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
* feat: MariaDBサポート [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
* fix(plugin-workflow): クライアントのマイナー修正 [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
* chore: ビュー推論 [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
* fix: 関連コレクションによるソート [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
* feat: Node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
