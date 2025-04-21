週次の製品更新ログを要約し、最新のリリースは[私たちのブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**NocoBaseは現在、`main`、`next`、`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までの最も安定したバージョンで、インストールを推奨します。
* `next`：ベータ版で、今後の新機能を含み、初期テストが行われています。既知または未知の問題があるかもしれません。主にテストユーザー向けで、フィードバックを収集し、機能をさらに最適化するために使用されます。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードを含み、未完成または不安定な場合があります。主に内部開発と迅速な反復のために使用されます。製品の最先端に興味がある技術ユーザーに適していますが、潜在的な問題や未完成の機能がある可能性があります。生産環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/ja/blog/v1.5.7)

*リリース日：2025-02-14*

#### 🚀 改善

- **[通知：アプリ内メッセージ]** SSE接続の再試行に関するコンソールエラーログを削除しました。 ([#6205](https://github.com/nocobase/nocobase/pull/6205)) by @sheldon66

#### 🐛 バグ修正

- **[クライアント]**

  - 関係データのクイック作成操作モーダルでドラッグ設定が欠落している ([#6201](https://github.com/nocobase/nocobase/pull/6201)) by @katherinehhh
  - 高精度の数値フォーマットが適用されない問題 ([#6202](https://github.com/nocobase/nocobase/pull/6202)) by @katherinehhh
  - フォームで関係フィールドをクリアした後、送信時にフィールド値が実際にクリアされない問題を修正しました ([#5540](https://github.com/nocobase/nocobase/pull/5540)) by @zhangzhonghe
  - フォーム送信後にブロックが更新されない ([#6206](https://github.com/nocobase/nocobase/pull/6206)) by @zhangzhonghe
  - 関係フィールドをリセットした後、送信時にリンクフィールドの値が保持される ([#6207](https://github.com/nocobase/nocobase/pull/6207)) by @katherinehhh
  - テーブル内の更新権限がない行に対して更新アクションが表示される ([#6204](https://github.com/nocobase/nocobase/pull/6204)) by @katherinehhh
- **[コレクションフィールド：ソート]** 外部データソースでソートフィールドタイプが登録されていない問題を修正しました ([#6212](https://github.com/nocobase/nocobase/pull/6212)) by @mytharcher
- **[認証]** WebSocket認証の問題 ([#6209](https://github.com/nocobase/nocobase/pull/6209)) by @2013xile
- **[コレクションフィールド：添付（URL）]** フック内の非推奨リクエストURLを修正しました by @mytharcher

### [v1.5.8](https://www.nocobase.com/ja/blog/v1.5.8)

*リリース日：2025-02-17*

#### 🐛 バグ修正

- **[クライアント]**

  - 埋め込みページでフィールドリンクポップアップが開けない ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust
  - 編集フォームで、表示されている関連フィールドの値が関連フィールドの更新時に変わらない ([#6210](https://github.com/nocobase/nocobase/pull/6210)) by @Cyx649312038
- **[モバイル]** 権限設定テーブルでモバイルメニューのデータが不完全 ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/ja/blog/v1.5.9)

*リリース日：2025-02-17*

#### 🐛 バグ修正

- **[クライアント]**

  - ページの横スクロールバーの問題 ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh
  - サブページを閉じると、複数のブロックデータリクエストがトリガーされる ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe
  - UIの関連フィールドサブメニューにユニークキーが欠けている ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust
- **[データ可視化]** データソース名にハイフン `-` が含まれているとフィルタリングエラーが発生する ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile

### [v1.5.10](https://www.nocobase.com/ja/blog/v1.5.10)

*リリース日：2025-02-18*

#### 🚀 改善

- **[コレクションフィールド：Markdown(Vditor)]** Vditor CDNはローカルリソースを使用します ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos

#### 🐛 バグ修正

- **[ワークフロー：ループノード]** ノードが保留中のときにループを早期に終了する問題を修正しました ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/ja/blog/v1.6.0-beta.7)

*リリース日：2025-02-14*

#### 🐛 バグ修正

- **[認証]** トークンの同時更新と認証エラー処理ロジックを強化しました。 ([#6208](https://github.com/nocobase/nocobase/pull/6208)) by @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/ja/blog/v1.6.0-beta.8)

*リリース日：2025-02-15*

#### 🐛 修正

- **[WeCom]** WeComクライアントの自動ログイン問題 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/ja/blog/v1.6.0-alpha.26)

*リリース日：2025-02-16*

#### 🎉 新機能

- **[client]** フロントエンドフィルターオペレーターの拡張をサポート ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
- **[ワークフロー：カスタムアクションイベント]** グローバルまたはバッチレコードによるカスタムアクションイベントのトリガーをサポート by @mytharcher

#### 🚀 改善

- **[ワークフロー]** ワークフロー設定のバインドをプラグインに移動 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/ja/blog/v1.6.0-alpha.27)

*リリース日：2025-02-16*

#### 🎉 新機能

- **[client]** コレクションのプリセットフィールドの拡張をサポート ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
- **[カレンダー]** カンバン、カレンダー、フォーミュラフィールドプラグインのオプションフィールドの拡張をサポート ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
