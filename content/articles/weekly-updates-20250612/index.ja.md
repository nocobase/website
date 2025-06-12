週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/ja/blog/v1.7.9)

*リリース日：2025-06-11*

#### 🐛 不具合修正

* [クライアント] ブロックの不具合を修正 ([#7048](https://github.com/nocobase/nocobase/pull/7048)) by @gchust

### [v1.7.8](https://www.nocobase.com/ja/blog/v1.7.8)

*リリース日：2025-06-10*

#### 🎉 新機能

* **[監査ログ]** 環境変数`AUDIT_LOGGER_TRANSPORT`を追加し、監査ログの出力方法を制御できるようにしました @2013xile

#### 🚀 機能改善

* **[カレンダー]** カレンダーブロックで週の始まりの曜日を設定できるようにサポート（[#7032](https://github.com/nocobase/nocobase/pull/7032)）@katherinehhh
* **[コレクションフィールド：多対多（配列）]** データテーブルで多対多（many）フィールドを表示する際のアクセス権関連のエラーを修正（[#7028](https://github.com/nocobase/nocobase/pull/7028)）@aaaaaajie

#### 🐛 不具合修正

* **[クライアント]**
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * フィルターフォームの連携ルールでセレクトフィールドのオプションが機能しない問題（[#7035](https://github.com/nocobase/nocobase/pull/7035)）@katherinehhh
  * フィルターフォームの検証ルールによりフィルターボタンが無効になる問題（[#6975](https://github.com/nocobase/nocobase/pull/6975)）@zhangzhonghe
  * 重複した API リクエストによりブロックテンプレート内のフィールドが表示されない問題を修正（[#6985](https://github.com/nocobase/nocobase/pull/6985)）@zhangzhonghe
* **[アクション：レコードインポート]** 関連フィールドを含む場合の子テーブルのインポート失敗を修正（[#7039](https://github.com/nocobase/nocobase/pull/7039)）@aaaaaajie
* **[データ可視化]** チャート内のチェックボックスグループフィールドにラベルを表示するよう修正（生データではなく）（[#7033](https://github.com/nocobase/nocobase/pull/7033)）@2013xile
* **[ワークフロー]** トリガーが正しく設定されていない場合に手動実行アクションで発生するエラーを修正（[#7036](https://github.com/nocobase/nocobase/pull/7036)）@mytharcher
* **[ワークフロー：承認]**
  * 未定義フィールドによるエラーを回避 @mytharcher
  * 詳細ページを更新する際の API エラーを修正 @mytharcher
* **[WeCom]** ゲートウェイミドルウェアにコールバックパスのチェックを追加 @2013xile

### [v1.7.6](https://www.nocobase.com/ja/blog/v1.7.6)

*リリース日：2025-06-09*

#### 🚀 機能改善

* **[クライアント]** グループメニューを自身の中に移動することを禁止（[#7005](https://github.com/nocobase/nocobase/pull/7005)）@zhangzhonghe

#### 🐛 不具合修正

* **[クライアント]**
  * ブロックが外部データソースからビューデータを読み取れない問題を解決（[#7017](https://github.com/nocobase/nocobase/pull/7017)）@aaaaaajie
  * フィルターブロックのパラメータエラー問題を修正（[#6966](https://github.com/nocobase/nocobase/pull/6966)）@zhangzhonghe
  * 連携ルール内で現在のオブジェクト変数が無効な問題（[#7008](https://github.com/nocobase/nocobase/pull/7008)）@zhangzhonghe
  * 連携ルールを使用してサブテーブルの必須フィールドの指示器をクリアできない問題（[#7022](https://github.com/nocobase/nocobase/pull/7022)）@zhangzhonghe
* **[未定義]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制 @aaaaaajie
* **[モバイル]** モバイルポップアップの遅延問題を最適化（[#7029](https://github.com/nocobase/nocobase/pull/7029)）@zhangzhonghe
* **[データソースマネージャー]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制（[#7019](https://github.com/nocobase/nocobase/pull/7019)）@aaaaaajie
* **[アクション：レコードインポート]** XLSX ツリーテーブルデータのインポート時に一括編集中に発生するエラーを修正（[#7013](https://github.com/nocobase/nocobase/pull/7013)）@aaaaaajie
* **[ワークフロー]** ワークフローが存在しない場合の UI エラーを修正（[#7023](https://github.com/nocobase/nocobase/pull/7023)）@mytharcher
* **[ワークフロー: JavaScript]** 相対パスの require を修正 @mytharcher
* **[ワークフロー：承認]**
  * ワークフローが削除された際に発生するエラーを修正 @mytharcher
  * スナップショットからファイル関連付けを再読み込みし、URL の有効期限切れを回避 @mytharcher
  * トリガー変数を修正 @mytharcher

### [v1.7.5](https://www.nocobase.com/ja/blog/v1.7.5)

*リリース日：2025-06-07*

#### 🐛 不具合修正

* **[クライアント]** 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
* **[データベース]** 修正: XLSX インポート時に欠落していた作成者と更新者フィールドを追加（[#7011](https://github.com/nocobase/nocobase/pull/7011)）@aaaaaajie
* **[ワークフロー]** 変更フィールドなしで作成した場合に、コレクションイベント（作成 / 更新モード）がトリガーされない問題を修正（[#7015](https://github.com/nocobase/nocobase/pull/7015)）@mytharcher
* **[アクション：レコードエクスポート Pro]** 条件付きで添付ファイルをエクスポートする際に発生するエラーを修正 @aaaaaajie

### [v1.7.4](https://www.nocobase.com/ja/blog/v1.7.4)

*リリース日：2025-06-07*

#### 🐛 不具合修正

* **[クライアント]**
  * 閲覧モードで関連フィールドにマウスを合わせるとサブテーブルとサブフォームが表示される問題（[#7002](https://github.com/nocobase/nocobase/pull/7002)）@zhangzhonghe
  * ポップアップアクションでトリガーされた場合、markdown ブロックの連携ルールが機能しない問題（[#7007](https://github.com/nocobase/nocobase/pull/7007)）@katherinehhh
* **[ローカリゼーション]** 空テキストに起因するエラーを解決（[#7010](https://github.com/nocobase/nocobase/pull/7010)）@2013xile
* **[非同期タスクマネージャー]** 非同期インポート中の多重実行問題を修正（[#7006](https://github.com/nocobase/nocobase/pull/7006)）@aaaaaajie
* **[アクション：レコードエクスポート Pro]** 非同期インポート中の多重実行問題を修正 @aaaaaajie
* **[ワークフロー：承認]** 代理承認時に他者による承認後に処理が続かない問題を修正 @mytharcher

### [v1.7.3](https://www.nocobase.com/ja/blog/v1.7.3)

*リリース日：2025-06-06*

#### 🚀 機能改善

* **[ワークフロー]** ワークフローのより多くのフィールドをフィルタリングできるようにサポート（[#6995](https://github.com/nocobase/nocobase/pull/6995)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * モーダル内の詳細ブロックのサブテーブルでページを切り替えると未保存の変更警告が表示される問題（[#7004](https://github.com/nocobase/nocobase/pull/7004)）@katherinehhh
  * 割り当てコンポーネントで変数を設定する際にフィールドタイトルが欠落する問題（[#7001](https://github.com/nocobase/nocobase/pull/7001)）@katherinehhh
  * フィールドスタイル連携ルールが機能しない問題（[#7003](https://github.com/nocobase/nocobase/pull/7003)）@katherinehhh

### [v1.7.2](https://www.nocobase.com/ja/blog/v1.7.2)

*リリース日：2025-06-05*

#### 🚀 機能改善

* **[アクション：一括編集]** 選択モード下で`filter`の代わりに`filterByTk`を使用（[#6994](https://github.com/nocobase/nocobase/pull/6994)）@mytharcher
* **[アクション：レコードインポート Pro]** 大規模 XLSX ファイル（高行数 / 列数データセット）の処理時のパフォーマンス問題を最適化し、システムクラッシュやフリーズを防止 @aaaaaajie

#### 🐛 不具合修正

* **[クライアント]**
  * フィールド割り当てコンポーネントにフィールドタイトルが表示されない問題（[#6987](https://github.com/nocobase/nocobase/pull/6987)）@katherinehhh
  * メニュー移動リストにおいて最後のメニュー項目が選択できない問題（[#6997](https://github.com/nocobase/nocobase/pull/6997)）@zhangzhonghe
* **[ワークフロー]**
  * カテゴリタブを切り替えた際にフィルターが更新されない問題を修正（[#6989](https://github.com/nocobase/nocobase/pull/6989)）@mytharcher
  * ワークフロー統計データが自動生成されない問題を修正（[#6993](https://github.com/nocobase/nocobase/pull/6993)）@mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/ja/blog/v1.8.0-beta.5)

*リリース日：2025-06-07*

#### 🚀 機能改善

* **[ワークフロー]** ワークフローのより多くのフィールドをフィルタリングできるようにサポート（[#6995](https://github.com/nocobase/nocobase/pull/6995)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * ポップアップアクションでトリガーされた場合、markdown ブロックの連携ルールが機能しない問題（[#7007](https://github.com/nocobase/nocobase/pull/7007)）@katherinehhh
  * 閲覧モードで関連フィールドにマウスを合わせるとサブテーブルとサブフォームが表示される問題（[#7002](https://github.com/nocobase/nocobase/pull/7002)）@zhangzhonghe
  * フィールドスタイル連携ルールが機能しない問題（[#7003](https://github.com/nocobase/nocobase/pull/7003)）@katherinehhh
  * 割り当てコンポーネントで変数を設定する際にフィールドタイトルが欠落する問題（[#7001](https://github.com/nocobase/nocobase/pull/7001)）@katherinehhh
  * モーダル内の詳細ブロックのサブテーブルでページを切り替えると未保存の変更警告が表示される問題（[#7004](https://github.com/nocobase/nocobase/pull/7004)）@katherinehhh
* **[非同期タスクマネージャー]** 非同期インポート中の多重実行問題を修正（[#7006](https://github.com/nocobase/nocobase/pull/7006)）@aaaaaajie
* **[ローカリゼーション]** 空テキストに起因するエラーを解決（[#7010](https://github.com/nocobase/nocobase/pull/7010)）@2013xile
* **[アクション：レコードエクスポート Pro]** 非同期インポート中の多重実行問題を修正 @aaaaaajie
* **[ワークフロー：承認]** 代理承認時に他者による承認後に処理が続かない問題を修正 @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/ja/blog/v1.8.0-beta.4)

*リリース日：2025-06-05*

#### 🚀 機能改善

* **[アクション：一括編集]** 選択モード下で`filter`の代わりに`filterByTk`を使用（[#6994](https://github.com/nocobase/nocobase/pull/6994)）@mytharcher
* **[アクション：レコードインポート Pro]** 大規模 XLSX ファイル（高行数 / 列数データセット）の処理時のパフォーマンス問題を最適化し、システムクラッシュやフリーズを防止 @aaaaaajie

#### 🐛 不具合修正

* **[クライアント]**
  * フィールド割り当てコンポーネントにフィールドタイトルが表示されない問題（[#6987](https://github.com/nocobase/nocobase/pull/6987)）@katherinehhh
  * メニュー移動リストにおいて最後のメニュー項目が選択できない問題（[#6997](https://github.com/nocobase/nocobase/pull/6997)）@zhangzhonghe
* **[ワークフロー]**
  * カテゴリタブを切り替えた際にフィルターが更新されない問題を修正（[#6989](https://github.com/nocobase/nocobase/pull/6989)）@mytharcher
  * ワークフロー統計データが自動生成されない問題を修正（[#6993](https://github.com/nocobase/nocobase/pull/6993)）@mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/ja/blog/v1.8.0-alpha.4)

*リリース日：2025-06-07*

#### 🚀 機能改善

* **[ワークフロー]** ワークフローのより多くのフィールドをフィルタリングできるようにサポート（[#6995](https://github.com/nocobase/nocobase/pull/6995)）@mytharcher
* **[Email マネージャー]** ポップアップでのデフォルト送信値のサポート、受信者の曖昧検索機能の追加、および諸問題の修正 @jiannx

#### 🐛 不具合修正

* **[データベース]** 修正: XLSX インポート時に欠落していた作成者と更新者フィールドを追加（[#7011](https://github.com/nocobase/nocobase/pull/7011)）@aaaaaajie
* **[クライアント]**
  * 割り当てコンポーネントで変数を設定する際にフィールドタイトルが欠落する問題（[#7001](https://github.com/nocobase/nocobase/pull/7001)）@katherinehhh
  * 閲覧モードで関連フィールドにマウスを合わせるとサブテーブルとサブフォームが表示される問題（[#7002](https://github.com/nocobase/nocobase/pull/7002)）@zhangzhonghe
  * ポップアップアクションでトリガーされた場合、markdown ブロックの連携ルールが機能しない問題（[#7007](https://github.com/nocobase/nocobase/pull/7007)）@katherinehhh
  * モーダル内の詳細ブロックのサブテーブルでページを切り替えると未保存の変更警告が表示される問題（[#7004](https://github.com/nocobase/nocobase/pull/7004)）@katherinehhh
  * フィールドスタイル連携ルールが機能しない問題（[#7003](https://github.com/nocobase/nocobase/pull/7003)）@katherinehhh
* **[非同期タスクマネージャー]** 非同期インポート中の多重実行問題を修正（[#7006](https://github.com/nocobase/nocobase/pull/7006)）@aaaaaajie
* **[ローカリゼーション]** 空テキストに起因するエラーを解決（[#7010](https://github.com/nocobase/nocobase/pull/7010)）@2013xile
* **[アクション：レコードエクスポート Pro]** 非同期インポート中の多重実行問題を修正 @aaaaaajie
* **[ワークフロー：承認]** 代理承認時に他者による承認後に処理が続かない問題を修正 @mytharcher
* **[Email マネージャー]**
  * テーブル "mailmessagelabels\_mailmessages" の複数主キー問題 @jiannx
  * 設定ポップアップが表示されない問題 @jiannx
  * メール曖昧検索に一意フィルターを適用 @jiannx
  * 受信者曖昧検索に関連フィールドをサポート @jiannx
  * mailmessagelabelsMailmessages に "id" フィールドを追加 @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/ja/blog/v1.8.0-alpha.3)

*リリース日：2025-06-06*

#### 🚀 機能改善

* **[アクション：一括編集]** 選択モード下で`filter`の代わりに`filterByTk`を使用（[#6994](https://github.com/nocobase/nocobase/pull/6994)）@mytharcher
* **[アクション：レコードインポート Pro]** 大規模 XLSX ファイル（高行数 / 列数データセット）の処理時のパフォーマンス問題を最適化し、システムクラッシュやフリーズを防止 @aaaaaajie

#### 🐛 不具合修正

* **[クライアント]**
  * フィールド割り当てコンポーネントにフィールドタイトルが表示されない問題（[#6987](https://github.com/nocobase/nocobase/pull/6987)）@katherinehhh
  * メニュー移動リストにおいて最後のメニュー項目が選択できない問題（[#6997](https://github.com/nocobase/nocobase/pull/6997)）@zhangzhonghe
  * ポップアップリンクから開かれたページでコンテンツが正しく表示されない問題を修正（[#6990](https://github.com/nocobase/nocobase/pull/6990)）@zhangzhonghe
* **[ワークフロー]**
  * カテゴリタブを切り替えた際にフィルターが更新されない問題を修正（[#6989](https://github.com/nocobase/nocobase/pull/6989)）@mytharcher
  * ワークフロー統計データが自動生成されない問題を修正（[#6993](https://github.com/nocobase/nocobase/pull/6993)）@mytharcher
