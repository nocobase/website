週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*リリース日：2025-03-27*

#### 🚀 改善点

* **[クライアント]**
  * 502エラーメッセージの最適化 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  * プレーンテキストファイルのプレビューのみをサポート ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
* **[コレクションフィールド: シーケンス]** カレンダーブロックのタイトルフィールドとしてシーケンスを設定するサポート ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
* **[ワークフロー: 承認]** 設定でのバリデーターのスキップをサポート by @mytharcher

#### 🐛 バグ修正

* **[クライアント]**
  * データスコープフィルタリングにおける日付フィールドの表示問題 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  * 「 Ellipsis overflow content 」オプションが有効になるにはページ更新が必要 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  * モーダル内で別のモーダルを開くことができない問題 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
* **[APIドキュメント]** APIドキュメントページがスクロールできない問題 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
* **[ワークフロー]** ワークフローキーが保存前に生成されるように修正 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
* **[ワークフロー: ポストアクションイベント]** 一括操作の複数レコードが複数回トリガーされる問題 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
* **[認証]** サインアップページのフィールドのローカライズ問題 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
* **[パブリックフォーム]** パブリックフォームページタイトルが「 Loading...」と表示される問題 ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*リリース日：2025-03-27*

#### 🐛 バグ修正

* **[ブロック: マルチステップフォーム]**
  * 送信ボタンのデフォルト状態とハイライト状態で色が同一になる問題 by @jiannx
  * 他フィールドと連携時にフォームリセットが無効化される問題を修正 by @jiannx
* **[ワークフロー: 承認]** 承認フォームの値送信処理を修正 by @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*リリース日：2025-03-28*

#### 🚀 改善

* **[非同期タスクマネージャー]** Pro でのインポート/エクスポートボタンの最適化 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) @chenos による
* **[アクション: エクスポートレコードPro]** Pro でのインポート/エクスポートボタンの最適化 (@katherinehhh)
* **[マイグレーションマネージャー]** マイグレーション時に自動バックアップと復元をスキップできるようにする (@gchust)

#### 🐛 バグ修正

* **[クライアント]** 同じフォーム内の異なるサブテーブルで同じ名前の関連フィールドの連携競合 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) @katherinehhh による
* **[アクション: バッチ編集]** バッチ編集ボタンをクリックし、ポップアップウィンドウを構成してから再度開くと、ポップアップウィンドウが空白になる ([#6578](https://github.com/nocobase/nocobase/pull/6578)) @zhangzhonghe による

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*リリース日：2025-03-29*

#### 🐛 バグ修正

* **[カレンダー]** 週間カレンダービューの境界日付でデータが欠落する問題を修正 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) @katherinehhh による
* **[認証: OIDC]** コールバックパスが「null」の文字列の場合、不適切なリダイレクトが発生する問題を修正 (@2013xile)
* **[ワークフロー: 承認]** スキーマ変更後に承認ノードの構成が誤っている問題を修正 (@mytharcher)

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*リリース日：2025-04-01*

#### 🚀 改善

- **[データベース]**

  - 複数行テキストフィールドに、先頭および末尾の空白削除オプションを追加（[#6603](https://github.com/nocobase/nocobase/pull/6603)） by @mytharcher
  - 単一行テキストフィールドに、自動的に先頭と末尾の空白を削除するオプションを追加（[#6565](https://github.com/nocobase/nocobase/pull/6565)） by @mytharcher
- **[ファイルマネージャー]**

  - ストレージコレクションのテキストフィールドに、先頭と末尾の空白削除オプションを追加（[#6604](https://github.com/nocobase/nocobase/pull/6604)） by @mytharcher
- **[ワークフロー]**

  - コードを最適化（[#6589](https://github.com/nocobase/nocobase/pull/6589)） by @mytharcher
- **[ワークフロー：承認]**

  - 承認プロセスフォームでブロックテンプレートの使用をサポート by @mytharcher

#### 🐛 バグ修正

- **[データベース]**

  - 更新時に値が変更されていない場合、「datetimeNoTz」フィールドの変更を防止（[#6588](https://github.com/nocobase/nocobase/pull/6588)） by @mytharcher
- **[クライアント]**

  - 関連コレクションのフィールドを表示する際、関連フィールド（select）が N/A と表示される問題を修正（[#6582](https://github.com/nocobase/nocobase/pull/6582)） by @katherinehhh
  - SchemaInitializerItem に items が設定されている場合、disabled プロパティが機能しない問題を修正（[#6597](https://github.com/nocobase/nocobase/pull/6597)） by @mytharcher
  - カスケード機能で、削除後に再選択すると「xxx の値は配列形式にできません」というエラーが発生する問題を修正（[#6585](https://github.com/nocobase/nocobase/pull/6585)） by @katherinehhh
- **[コレクションフィールド：多対多（配列）]**

  - メインテーブルで、多対多（配列）フィールドを持つ関連テーブルのフィールドをフィルタリングする際に発生するエラーを修正（[#6596](https://github.com/nocobase/nocobase/pull/6596)） by @2013xile
- **[公開フォーム]**

  - 公開フォームの閲覧権限に list および get を含むよう修正（[#6607](https://github.com/nocobase/nocobase/pull/6607)） by @chenos
- **[ユーザー認証]**

  - AuthProvider における token の割り当てを修正（[#6593](https://github.com/nocobase/nocobase/pull/6593)） by @2013xile
- **[ワークフロー]**

  - 同期オプションの表示不具合を修正（[#6595](https://github.com/nocobase/nocobase/pull/6595)） by @mytharcher
- **[ブロック：マップ]**

  - 地図管理の必須入力検証が空白入力で通過してしまう問題を修正（[#6575](https://github.com/nocobase/nocobase/pull/6575)） by @katherinehhh
- **[ワークフロー：承認]**

  - 承認フォーム内のフロントエンド変数の不具合を修正 by @mytharcher
  - ブランチモードにおいて、endOnReject が true に設定された場合のフローの問題を修正 by @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*リリース日：2025-03-27*

#### 🎉 新機能

- **[client]** 提出後に変数設定をサポートし、現在のデータIDを用いたリダイレクトに対応 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[コレクションフィールド：Markdown(Vditor)]** VditorがS3 Proに対応 ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

#### 🚀 改善

- **[client]**
  - 純テキストファイルのみのプレビューに対応 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - 502エラーメッセージの最適化 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 連動ルールの各フィールド属性に対し、利用可能なアクションを制限 ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[ファイルマネージャー]** ストレージの `getFileData` API を調整 ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[アクセス制御]** ロール切替の順序とスタイルを最適化 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[コレクションフィールド：シーケンス]** シーケンスをカレンダーブロックのタイトルフィールドとして設定可能に ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[ワークフロー]** 実行済みカラムを統計テーブルに分割 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[ワークフロー：カスタムアクションイベント]** 実行済みカラムを統計テーブルに分割 by @mytharcher
- **[ワークフロー：承認]**
  - 実行済みカラムを統計テーブルに分割 by @mytharcher
  - 設定においてバリデーターのスキップをサポート by @mytharcher

#### 🐛 バグ修正

- **[client]**
  - 古いバージョンのブラウザではページが空白で表示される ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - 「省略オーバーフローコンテンツ」オプションは、ページをリフレッシュしないとトグル状態が反映されない ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - データ範囲のフィルタリングにおける日付フィールド表示の問題 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - モーダル内で別のモーダルを開くことができない ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - 関連フィールドを含むブロックでは、テンプレートとして保存する操作が失敗する ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - ページ上部のメニューが空白で表示される ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - フィールドに対し null 値の割り当てが無効 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
- **[ワークフロー]**
  - ワークフロー保存前にキーが生成されていることを確認 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
  - 自動削除オプション設定時のエラーを修正 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
- **[公開フォーム]** 公開フォームページのタイトルに「Loading...」が表示される問題を修正 ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[モバイル]** 携帯で表示されるフォントサイズを 14px に調整 ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[変数とシークレット]** フィルタボタンにアイコンがなく、フィルタ後に件数が表示されず、またページ切替時にデータが更新されない ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[ユーザー認証]** サインアップページのフィールドのローカライズ問題 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[APIドキュメント]** APIドキュメントページがスクロールできない ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[ワークフロー：操作後イベント]** 一括操作で複数レコードが複数回トリガーされるよう修正 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[ブロック：テンプレート]**
  - フォームの連動ルールがテンプレートから正しく同期されていない ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
  - 詳細ブロックにおいて、テンプレート保存メニューが重複している ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
- **[ワークフロー：承認]** 承認フォームの送信値の問題を修正 by @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*リリース日：2025-03-27*

#### 🐛 バグ修正

* **[ブロック: マルチステップフォーム]** 送信ボタンのデフォルト状態とハイライト状態で色が同一になる問題 by @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*リリース日：2025-03-28*

#### 🎉 新機能

- **[ブロック：アクションパネル]** onScanSuccess コールバックを追加し、スキャン成功時に処理を実行してカメラUIを終了します。 ([#6580](https://github.com/nocobase/nocobase/pull/6580)) by @sheldon66

#### 🚀 改善

- **[非同期タスクマネージャー]** Pro のインポート/エクスポートボタンを最適化しました。 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos
- **[アクション：レコードのエクスポート Pro]** Pro のインポート/エクスポートボタンを最適化しました。 by @katherinehhh
- **[マイグレーションマネージャー]** マイグレーション時に自動バックアップおよびリストアをスキップできるようにしました。 by @gchust

#### 🐛 不具合修正

- **[クライアント]** 同一フォーム内の異なるサブテーブルにおける、同名のアソシエーションフィールド間の連動競合を修正しました。 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh
- **[カレンダー]** 週間カレンダービューで境界日付にデータが表示されない問題を修正しました。 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh
- **[アクセスコントロール]** ログイン時の現在のロール割り当てが正しくない問題を修正しました。 ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie
- **[アクション：バッチ編集]** バッチ編集ボタンをクリックし、ポップアップウィンドウを設定後、再度開くとウィンドウが空白になる問題を修正しました。 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe
- **[ブロック：マルチステップフォーム]** 他のフィールドと関連付けられている場合にフォームのリセットが無効になる不具合を修正しました。 by @jiannx
- **[ワークフロー：承認]** スキーマ変更後、承認ノードの設定が更新されず、データが同期されない問題を修正しました。 by @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*リリース日：2025-04-01*

#### 🚀 改善

- **[database]**

  - 複数行テキスト型フィールドに、先頭および末尾の空白文字を除去するオプションを追加 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher
  - 単一行テキスト型に、先頭および末尾の空白文字を自動で除去するオプションを追加 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher
- **[client]**

  - フォームフィールドラベルで、レイアウトに応じたコロン表示の設定をサポート ([#6561](https://github.com/nocobase/nocobase/pull/6561)) by @katherinehhh
- **[ファイルマネージャー]**

  - ストレージコレクションのテキストフィールドに、先頭および末尾の空白文字を除去するオプションを追加 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher
- **[ワークフロー]**

  - コードを改善 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher
- **[ワークフロー：承認]**

  - 承認フォームにおいて、ブロックテンプレートの利用をサポート by @mytharcher

#### 🐛 不具合修正

- **[database]**

  - 更新時に値が変更されていない場合、'datetimeNoTz' フィールドが変更されたと認識されないようにする ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
  - 1対多のレコード削除時、`filter` と `filterByTk` が同時に指定され、`filter` に関連フィールドが含まれている場合、`filterByTk` が無視される問題を修正 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile
- **[client]**

  - `SchemaInitializerItem` に `items` が設定されている場合、`disabled` プロパティが正しく動作しない問題を修正 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  - カスケードコンポーネントで、削除後に再選択する際に "The value of xxx cannot be in array format" エラーが発生する問題を修正 ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
  - 関連フィールド（select）が、関連コレクションのフィールド表示時にデフォルトで N/A と表示される問題を修正 ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  - 送信およびリフレッシュボタンで、アイコンのみの表示モードが正しく機能しない問題を修正 ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh
- **[公開フォーム]**

  - 閲覧権限に list と get を含むように修正 ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos
- **[ユーザー認証]**

  - `AuthProvider` 内での token 割り当てを修正 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile
- **[データ表フィールド：多対多（配列）]**

  - 多対多（配列）フィールドを含む関連コレクションのフィールドで、主テーブルのフィルタリング時にエラーが発生する問題を修正 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile
- **[ワークフロー]**

  - 同期オプションの表示に関する問題を修正 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher
- **[ブロック：マップ]**

  - マップ管理において、必須入力項目が空白入力により検証を通過してしまう問題を修正 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh
- **[認証：OIDC]**

  - コールバックパスが文字列 'null' の場合に、不正なリダイレクトが発生する問題を修正 by @2013xile
- **[ワークフロー：承認]**

  - 承認フォーム内のフロントエンド変数の問題を修正 by @mytharcher
  - 分岐モードで 'endOnReject' が true に設定された際のプロセスの問題を修正 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/ja/blog/v1.7.0-alpha.10)

*リリース日：2025-03-25*

#### 🎉 新機能

- **[client]** 送信成功後、変数設定をサポートし、パラメータ付きで詳細ページへリダイレクト可能になりました ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[データ表フィールド：Markdown(Vditor)]** Vditor が S3 Pro をサポートしました ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

#### 🚀 改善

- **[client]**

  - プレーンテキストファイルのみのプレビューをサポートしました ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - 502エラーメッセージを改善しました ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 連動規則における各フィールドで選択可能なアクションを制限しました ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[ワークフロー]** 統計データ列を独立テーブルに分割しました ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[モバイル]** モバイル向けに通知ポップアップのスタイルを最適化しました ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[データ表フィールド：自動符号化]** カレンダーブロックのタイトルフィールドにシーケンスを使用可能にしました ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[ファイルマネージャー]** ストレージエンジンの `getFileData` API を調整しました ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[アクセス制御]** 役割切替の順序とスタイルを改善しました ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[公開フォーム]** 作成時に設定したタイトルを公開ページのタイトルとして表示するようにしました ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh
- **[ワークフロー：カスタム操作イベント]** 統計データ列を独立テーブルに分割しました by @mytharcher
- **[ワークフロー：承認]**

  - 承認処理ボタンがフォーム検証をスキップできる設定をサポートしました by @mytharcher
  - 統計データ列を独立テーブルに分割しました by @mytharcher

#### 🐛 修正

- **[client]**

  - 古いバージョンのブラウザでページが空白で表示される問題を修正しました ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - モーダル内で別のモーダルを開けない問題を修正しました ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - 「省略して表示」オプションがページ更新なしでは反映されない問題を修正しました ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - データ範囲で日付フィールドをフィルタリングした際の表示異常を修正しました ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - ページ上部のメニューが空白で表示される問題を修正しました ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - 関連フィールドを含むブロックでテンプレート保存時にエラーが発生する問題を修正しました ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - リンクページ追加時に「現在のユーザー」変数が使用できない問題を修正しました ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - フィールドへの「空値」設定が反映されない問題を修正しました ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
  - 関連フィールドを含むブロックでテンプレート保存時にエラーが発生する問題を修正しました ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - フィルターフォーム内のドロップダウンシングルセレクトから「複数選択を許可」オプションを除去しました ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - 関連フィールドのデータ範囲連動が機能しない問題を修正しました ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
  - `yarn doc` コマンドでエラーが発生する問題を修正しました ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - テーブル行のボタンをドラッグ＆ドロップで並べ替える際の不具合を修正しました ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh
- **[モバイル]** モバイルで表示されるフォントサイズを14pxに調整しました ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[ワークフロー]**

  - 自動削除オプション設定時のエラーを修正しました ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
  - ワークフロー作成前にキーが生成されるようにしました ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
- **[変数と密匙]** 変数と密匙のフィルターボタンにアイコンが欠如している、フィルタリング後に件数が表示されない、およびページ切替後にデータが更新されない問題を修正しました ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[公開フォーム]** 公開フォームのページタイトルに「Loading...」が表示される問題を修正しました ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[APIドキュメント]** APIドキュメントページでスクロールできない問題を修正しました ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[ワークフロー：操作後イベント]** 複数レコードの一括操作が複数回トリガーされる問題を修正しました ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[区塊：テンプレート]**

  - 詳細ブロックでテンプレート保存メニューが重複して表示される問題を修正しました ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
  - フォームの連動ルールがテンプレートから正しく同期されない問題を修正しました ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
- **[ユーザー認証]** サインアップページのフィールドのローカライズ問題を修正しました ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[操作：カスタムリクエスト]** UTF-8エンコードされたファイルがダウンロードできない問題を修正しました ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile
- **[データ表：ツリー]** ツリーテーブルプラグインのマイグレーションスクリプトの問題を修正しました ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[区塊：分割フォーム]** 送信ボタンの通常時とハイライト時の色が同一である問題を修正しました by @jiannx
- **[ワークフロー：承認]** 承認フォームの送信値に関する問題を修正しました by @mytharcher

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
