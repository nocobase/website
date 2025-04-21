毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/ja/blog/v1.4.25)

*リリース日： 2025-01-16*

### 🚀 改善

* **[クライアント]** ファイルストレージの拡張性を向上しました ([#6071](https://github.com/nocobase/nocobase/pull/6071)) by @chenos
* **[ワークフロー]** スケジュール設定の繰り返しフィールドコンポーネントを修正しました ([#6067](https://github.com/nocobase/nocobase/pull/6067)) by @mytharcher

### 🐛 バグ修正

* **[モバイル]** モバイルデバイスで下部ボタンが隠れる問題を修正しました ([#6068](https://github.com/nocobase/nocobase/pull/6068)) by @zhangzhonghe
* **[ワークフロー: カスタムアクションイベント]** http コレクションのコンテキストを修正しました by @mytharcher
* **[バックアップマネージャー]** コレクション - fdw プラグインが有効でない場合のバックアップエラーを修正しました by @gchust
* **[部門]** 部門コレクションでカスタムアクションイベントがトリガーできない問題を修正しました by @mytharcher

### [v1.4.26](https://www.nocobase.com/ja/blog/v1.4.26)

*リリース日： 2025-01-16*

#### 🚀 改善

* **[クライアント]** SQL コレクションに説明を追加できるようにしました ([#6081](https://github.com/nocobase/nocobase/pull/6081)) by @2013xile
* **[リソーサー]** アクションの値として空のオブジェクトを許可しました ([#6070](https://github.com/nocobase/nocobase/pull/6070)) by @mytharcher

#### 🐛 バグ修正

* **[ローカライゼーション]** 空の翻訳を削除しようとする際の API リクエストを回避しました ([#6078](https://github.com/nocobase/nocobase/pull/6078)) by @2013xile

### [v1.4.27](https://www.nocobase.com/ja/blog/v1.4.27)

*リリース日： 2025-01-18*

#### 🐛 バグ修正

* **[クライアント]** 埋め込みページのポップアップウィンドウでブロックデータが空になる問題を修正しました ([#6086](https://github.com/nocobase/nocobase/pull/6086)) by @zhangzhonghe
* **[ワークフロー]** 準備段階でディスパッチが処理されない問題を修正しました ([#6087](https://github.com/nocobase/nocobase/pull/6087)) by @mytharcher

### [v1.4.28](https://www.nocobase.com/ja/blog/v1.4.28)

*リリース日： 2025-01-21*

#### 🐛 バグ修正

* **[クライアント]** 関連フィールドのデフォルト値が更新されない問題を修正しました ([#6103](https://github.com/nocobase/nocobase/pull/6103)) by @chenos
* **[アクション: 一括編集]** 一括編集アクションのフォーム設定からフォームデータテンプレートを削除しました ([#6098](https://github.com/nocobase/nocobase/pull/6098)) by @katherinehhh
* **[認証]** プロバイダーIDが編集できる問題を修正しました ([#6097](https://github.com/nocobase/nocobase/pull/6097)) by @mytharcher

### [v1.4.29](https://www.nocobase.com/ja/blog/v1.4.29)

*リリース日： 2025-01-21*

#### 🎉 新機能

* **[ブロック: アクションパネル]** モバイルのアクションパネルで、1 行あたりのアイコン数を設定できるようになりました ([#6106](https://github.com/nocobase/nocobase/pull/6106)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/ja/blog/v1.5.0-beta.29)

*リリース日：2025-01-16*

#### 🚀 改善

* **[バックアップマネージャー]** 復元失敗時のエラーメッセージを改善しました by @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/ja/blog/v1.5.0-beta.30)

*リリース日：2025-01-16*

#### 🐛 バグ修正

* **[クライアント]** 易読モードで関連フィールドのデフォルト値が効かない問題を修正しました ([#6066](https://github.com/nocobase/nocobase/pull/6066)) by @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/ja/blog/v1.5.0-beta.31)

*リリース日：2025-01-17*

#### 🐛 バグ修正

* **[ユーザー データ同期]** タスク リストに「再試行」ボタンが表示されない問題を修正しました ([#6079](https://github.com/nocobase/nocobase/pull/6079)) by @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/ja/blog/v1.5.0-beta.32)

*リリース日：2025-01-17*

#### 🚀 改善

* **[ワークフロー]** API 名称をより適切なものに変更しました ([#6082](https://github.com/nocobase/nocobase/pull/6082)) by @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/ja/blog/v1.5.0-beta.33)

*リリース日：2025-01-21*

#### 🎉 新機能

* **[ワークフロー]** ワークフローにスタック限界設定を追加 ([#6077](https://github.com/nocobase/nocobase/pull/6077)) 由 @citlalinda 提交

#### 🚀 改善点

* **[ワークフロー：ループノード]** スタイル修正 ([#6095](https://github.com/nocobase/nocobase/pull/6095)) 由 @mytharcher 提交
* **[ファイルマネージャー]** 他のストレージプラグインのサポート ([#6096](https://github.com/nocobase/nocobase/pull/6096)) 由 @jiannx 提交
  参照: [ファイルストレージ: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
* **[ワークフロー：テストキット]** ワークフローキャンバスのスタイル調整、コンテンツをコンパクトに ([#6088](https://github.com/nocobase/nocobase/pull/6088)) 由 @mytharcher 提交
* **[ワークフロー：JSONクエリノード]** ノードにアイコンを追加 by @mytharcher


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/ja/blog/v1.6.0-alpha.15)

*リリース日：2025-01-19*

#### 🎉 新機能

* **[クライアント]** ブロックで説明プロパティの設定をサポートしました ([#6015](https://github.com/nocobase/nocobase/pull/6015)) by @katherinehhh
* **[認証]** トークンセキュリティ設定をサポートしました ([#5948](https://github.com/nocobase/nocobase/pull/5948)) by @sheldon66
  参考: [トークンセキュリティポリシー](https://docs.nocobase.com/handbook/token-policy)
* **[ワークフロー: 手動ノード]** ToDo ブロックにタスクタイトル列を追加しました ([#6051](https://github.com/nocobase/nocobase/pull/6051)) by @mytharcher

#### 🚀 改善

* **[ワークフロー: カスタムアクションイベント]** 手動実行の API を変更しました by @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/ja/blog/v1.6.0-alpha.16)

*リリース日：2025-01-19*

#### 🎉 新機能

* **[ブロック: アクションパネル]** モバイルのアクションパネルで、1 行あたりのアイコン数を設定できるようになりました ([#6046](https://github.com/nocobase/nocobase/pull/6046)) by @katherinehhh

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
