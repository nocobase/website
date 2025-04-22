このリリースでは、生産環境におけるプラグインの即時接続と交換が可能になります。UIを介してプラグインを直接追加でき、npmレジストリ（プライベートも可能）、ローカルアップロード、およびURLからのダウンロードをサポートします。

## 新機能

### 新しいプラグインマネージャーインターフェース

![新しいプラグインマネージャーインターフェース](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### アップロードされたプラグインは storage/plugins ディレクトリに保存されます。

storage/plugins ディレクトリはプラグインのアップロードに使用され、npm パッケージとして整理されています。

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

### プラグインの更新

現在、storage/plugins 内のプラグインのみが更新可能です。

![プラグインの更新](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

注意：メンテナンスとアップグレードを容易にするため、アップグレードによって storage プラグインが使用できなくなるのを避けるために、新しいプラグインを直接 storage/plugins に配置し、その後アップグレード操作を行うことができます。

## 互換性のない変更

### プラグイン名の変更

* PLUGIN\_PACKAGE\_PREFIX 環境変数は提供されなくなりました。
* プラグイン名とパッケージ名が統一され、古いプラグイン名はエイリアスとして存続できます。

### pm.add の改善

```
# pluginName の代わりに packageName を使用し、ローカルで検索。見つからない場合はエラー
pm add packageName

# registry が提供されている場合のみリモートからダウンロード、バージョンも指定可能
pm add packageName --registry=xx --auth-token=yy --version=zz

# ローカル ZIP を提供することもでき、複数回追加して最後のものに置き換えられます
pm add /a/plugin.zip

# リモート ZIP、同じ名前で置き換えます
pm add http://url/plugin.zip
```

### Nginx 設定の変更

`/static/plugins/` ロケーションを追加します。

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

完全版の [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf) を参照してください。

## プラグイン開発ガイド

[最初のプラグインを開発](https://docs.nocobase.com/development/your-fisrt-plugin)

* [リリース](https://blog.nocobase.com/tags/release)