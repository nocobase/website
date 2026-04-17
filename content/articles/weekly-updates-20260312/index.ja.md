週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.15](https://www.nocobase.com/ja/blog/v2.0.15)

*リリース日：2026-03-12*

### 🐛 不具合修正

* **[メール管理]** 返信および全員返信の宛先を調整し、テーブルフィールド追加時の不具合などを修正 by @jiannx
* **[移行管理]** システムテーブルでカスタムルールを設定する際、選択できない不具合を修正 by @cgyrock

### [v2.0.14](https://www.nocobase.com/ja/blog/v2.0.14)

*リリース日：2026-03-12*

### 🚀 機能改善

* **[移行管理]** 移行チェック、移行 SQL のダウンロード、移行ログ形式、および移行実行プロセスの可視化を改善 by @cgyrock

### 🐛 不具合修正

* **[client]**
  * フィルタフォームの Field values で、カスタムフィールドの値入力欄の型が正しくない問題を修正 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe
  * v2 フィルタフォームでフィールド並び替え後に折りたたみボタンが機能しない問題を修正 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe
  * 参照テンプレート（v1）管理ページにフィルタボタンと更新ボタンが表示されない問題を修正。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust
  * 権限判定の影響でサブフォーム内のサブテーブルにデータが表示されない問題を修正 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos
* **[権限管理]** collection.filterTargetKey を Model.primaryKeyField の代わりに使用するように変更 ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos
* **[UI テンプレート]**
  * 参照操作パネルのブロックテンプレートでエラーが発生する問題を修正。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust
  * 詳細ブロックをテンプレートとして保存した後、関連データが正しく読み込まれない問題を修正。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust
* **[ワークフロー：承認]**
  * 承認者が設定された順序どおりに記録生成されない問題を修正 by @mytharcher
  * 承認処理詳細で一部ラベルが未翻訳の問題を修正 by @zhangzhonghe
* **[移行管理]**
  * コンパイルエラーを修正 by @mytharcher
  * ユーザーが入力した移行説明が失われる問題を修正し、現在時刻をデフォルトの移行説明として使用するように変更 by @cgyrock
  * 移行異常後に出力される例外オブジェクト内の SQL が大きすぎて、プロセスがフリーズしやすい問題を修正 by @cgyrock
  * クラスターモードに対応するため、一時ファイルの格納先を調整 by @mytharcher

### [v2.0.13](https://www.nocobase.com/ja/blog/v2.0.13)

*リリース日：2026-03-10*

### 🎉 新機能

* **[client]** ワークフローボタンの設定操作が成功した後に、後続フローをトリガーできるように対応 ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher

### 🚀 改善

* **[ワークフロー]** ノード追加メニューで、利用不可のノードも含めてすべてのノードタイプを表示するように改善 ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher
* **[AI: ナレッジベース]** ナレッジベースのドキュメント読み込みロジックをリファクタリング by @cgyrock

### 🐛 修正

* **[client]**
  * SQL データテーブルの詳細ブロックで、データ読み込み時にエラーが発生する問題を修正 ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust
  * 詳細ブロックのフィールド連動ルールが初回レンダリング時に適用されない問題を修正 ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust
* **[Office ファイルプレビュー]** より多くの内容を表示できるよう、モーダルの高さを適切な値に調整 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher
* **[UI テンプレート]** テーブルブロックの参照テンプレートイベントフローで、行クリックイベントフローを設定できない問題を修正 ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust

### [v2.0.12](https://www.nocobase.com/ja/blog/v2.0.12)

*リリース日：2026-03-09*

### 🚀 機能改善

* **[Redis 分散ロックアダプター]** メインリポジトリの LockManager インターフェース変更に基づいてリファクタリング by @mytharcher
* **[バックアップマネージャー]** 重複バックアップを防ぐため、定期バックアップに分散ロックを追加 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * v2ブロックで、現在のデータソースがサポートする操作のみ表示されるよう修正 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe
  * v2サブページの戻るボタンのスタイル異常を修正 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe
* **[lock-manager]** ロックマネージャーの競合状態の問題を修正 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher
* **[server]** 非データベース系データソースのテーブルクエリでエラーが発生する問題を修正 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock
* **[権限制御]** Restful APIデータソースのデータ更新操作でエラーが発生する問題を修正 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock
* **[操作：レコードエクスポート]** 多対多配列フィールドをエクスポートした後に空白になる問題を修正 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock

### [v2.0.11](https://www.nocobase.com/ja/blog/v2.0.11)

*リリース日：2026-03-06*

### 🎉 新機能

* **[ワークフロー：カスタム操作イベント]** カスタムコンテキストデータに対応。カスタム操作イベントをサブフローとして呼び出す際、任意の変数を渡せるようになりました（[#8758](https://github.com/nocobase/nocobase/pull/8758)）by @mytharcher

### 🚀 改善

* **[client]** フォームブロック／詳細ブロックの編集時、利用可能なデータがない場合に案内メッセージを表示します（[#8790](https://github.com/nocobase/nocobase/pull/8790)）by @gchust
* **[flow-engine]** 新しい runjs コードが実行前に変数式を解析してしまう問題を修正しました（[#8762](https://github.com/nocobase/nocobase/pull/8762)）by @gchust

### 🐛 修正

* **[client]**
  * ポップアップ詳細でリンク遷移後の結果が、ビューを閉じる操作でロールバックされる問題を修正しました（[#8752](https://github.com/nocobase/nocobase/pull/8752)）by @zhangzhonghe
  * 多対多（配列）リレーションのレコードブロックで「追加」を非表示にし、エラー発生を防止しました（[#8779](https://github.com/nocobase/nocobase/pull/8779)）by @gchust
  * リレーションフィールドのポップアップ内で編集後、元のブロックが更新されない問題を修正しました（[#8782](https://github.com/nocobase/nocobase/pull/8782)）by @gchust
  * タブの重なりを修正し、設定モードでタブの最小幅を確保しました（[#8771](https://github.com/nocobase/nocobase/pull/8771)）by @zhangzhonghe
  * 設定モードで連動により必須フィールドを非表示にしても検証が走る問題を修正しました（[#8773](https://github.com/nocobase/nocobase/pull/8773)）by @zhangzhonghe
  * サブテーブル列の表示切替や連続削除後、反映が遅れる問題を修正しました（[#8755](https://github.com/nocobase/nocobase/pull/8755)）by @zhangzhonghe
  * レコード更新フォームで必須チェックが二重に発生する問題を修正しました（[#8761](https://github.com/nocobase/nocobase/pull/8761)）by @jiannx
* **[database]**
  * データテーブルのビューテンプレートに `簡易ページネーション` オプションが表示されない問題を修正しました（[#8778](https://github.com/nocobase/nocobase/pull/8778)）by @cgyrock
  * 数値フィールドの精度検証ルールが有効にならない問題を修正しました（[#8768](https://github.com/nocobase/nocobase/pull/8768)）by @2013xile
* **[その他]** アップグレード後に plugin-block-reference が見つからないと表示される問題を修正しました（[#8757](https://github.com/nocobase/nocobase/pull/8757)）by @gchust
* **[操作：レコードのエクスポート]** Excel へのエクスポートで、数値型フィールドが文字列として表示される問題を修正しました（[#8774](https://github.com/nocobase/nocobase/pull/8774)）by @cgyrock
* **[ブロック：リスト]** リストブロックのフィールドで「現在のレコード」変数が使えない問題を修正しました（[#8784](https://github.com/nocobase/nocobase/pull/8784)）by @gchust
* **[ワークフロー]** 承認ノード内でブロックをドラッグした際、誤ったドラッグ用プレースホルダーが表示される問題を修正しました（[#8763](https://github.com/nocobase/nocobase/pull/8763)）by @mytharcher
* **[UI テンプレート]**
  * 詳細の「現在のレコード」テンプレートと編集フォームテンプレートの再利用により、データが正しく読み込めない可能性がある問題を修正しました（[#8775](https://github.com/nocobase/nocobase/pull/8775)）by @gchust
  * テンプレートブロックのイベントフローで props を変更しても反映されない問題を修正しました（[#8765](https://github.com/nocobase/nocobase/pull/8765)）by @gchust
* **[データソース：メインDB]**
  * JSON フィールドのデフォルト値更新が反映されない問題を修正しました（[#8767](https://github.com/nocobase/nocobase/pull/8767)）by @2013xile
  * フィールド同期のエラーを修正しました（[#8766](https://github.com/nocobase/nocobase/pull/8766)）by @2013xile
* **[AI エージェント（AI 従業員）]**
  * qwen/deepseek/kimi でアップロードしたドキュメントを読み取れない問題を修正しました（[#8732](https://github.com/nocobase/nocobase/pull/8732)）by @cgyrock
  * deepseek reasoning モデル使用時にツール呼び出しが異常になる問題を修正しました（[#8741](https://github.com/nocobase/nocobase/pull/8741)）by @cgyrock
* **[マルチスペース]** データテーブルの主キーで作成する際、スペース権限でエラーになる問題を修正しました by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.8](https://www.nocobase.com/ja/blog/v2.1.0-beta.7)

*リリース日：2026-03-12*

### 🎉 新機能

* **[client]** ワークフローボタンの設定操作が成功した後に、後続フローを実行できるようになりました ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher
* **[データテーブルフィールド：コード]** コードフィールドが 2.0 に対応しました ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx
* **[ワークフロー：カスタム操作イベント]** カスタムコンテキストデータに対応し、カスタム操作イベントをサブフローとして呼び出す際に任意の変数を渡せるようになりました ([#8758](https://github.com/nocobase/nocobase/pull/8758)) by @mytharcher

### 🚀 機能改善

* **[client]** 編集フォームブロックと詳細ブロックで利用可能なデータがない場合に、メッセージを表示するようにしました。 ([#8790](https://github.com/nocobase/nocobase/pull/8790)) by @gchust
* **[flow-engine]** 新しい runjs コードで、実行前に変数式が解析されてしまう問題を改善しました。 ([#8762](https://github.com/nocobase/nocobase/pull/8762)) by @gchust
* **[ワークフロー]** ノードが利用できない場合でも、ノード追加メニューですべてのノードタイプを表示するようにしました ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher
* **[操作：カスタムリクエスト]** イベントフローでカスタムリクエストに対応しました ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx
* **[AI: ナレッジベース]** ナレッジベースのドキュメント読み込みロジックを再構築 by @cgyrock
* **[Redis 分散ロックアダプター]** メインリポジトリの LockManager インターフェース変更に合わせてリファクタリング by @mytharcher
* **[バックアップマネージャー]** 重複バックアップを防ぐため、定期バックアップに分散ロックを追加 by @mytharcher
* **[移行管理]** 移行チェック、移行 SQL のダウンロード、移行ログ形式、および移行実行プロセスの可視化を改善 by @cgyrock

### 🐛 不具合修正

* **[client]**
  * 権限判定の影響でサブフォーム内のサブテーブルにデータが表示されない問題を修正 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos
  * v2 フィルタフォームでフィールド並び替え後に折りたたみボタンが機能しない問題を修正 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe
  * フィルタフォームの Field values で、カスタムフィールドの値入力欄の型が正しくない問題を修正 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe
  * 参照テンプレート（v1）管理ページにフィルタボタンと更新ボタンが表示されない問題を修正。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust
  * SQL データテーブルの詳細ブロックで、データ読み込み時にエラーが発生する問題を修正。 ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust
  * 詳細ブロックのフィールド連動ルールが初回レンダリング時に反映されない問題を修正。 ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust
  * v2 サブページの戻るボタンのスタイル不具合を修正 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe
  * v2 ブロックでは、現在のデータソースでサポートされている操作のみ表示するようにしました ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe
  * 設定モードで連動により非表示になった必須フィールドが、引き続きバリデーション対象になる問題を修正 ([#8773](https://github.com/nocobase/nocobase/pull/8773)) by @zhangzhonghe
  * タブの重なりを修正し、設定モードでラベルの最小幅を確保しました ([#8771](https://github.com/nocobase/nocobase/pull/8771)) by @zhangzhonghe
  * サブテーブルで列の表示切り替えや連続削除を行った後、画面への反映が遅れる問題を修正 ([#8755](https://github.com/nocobase/nocobase/pull/8755)) by @zhangzhonghe
  * 多対多（配列）関連レコードブロックで追加操作を非表示にし、エラーを防止。 ([#8779](https://github.com/nocobase/nocobase/pull/8779)) by @gchust
  * ポップアップ詳細内のリンク遷移結果が、ビューを閉じた際に元に戻ってしまう問題を修正 ([#8752](https://github.com/nocobase/nocobase/pull/8752)) by @zhangzhonghe
  * リレーションフィールドのポップアップ内でデータを編集した後、元のブロックが更新されない問題を修正。 ([#8782](https://github.com/nocobase/nocobase/pull/8782)) by @gchust
  * 更新レコードフォームで必須バリデーションが 2 回実行される問題を修正 ([#8761](https://github.com/nocobase/nocobase/pull/8761)) by @jiannx
* **[server]** 非データベース系データソースのテーブルクエリでエラーが発生する問題を修正 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock
* **[lock-manager]** ロックマネージャーの競合状態に関する問題を修正 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher
* **[database]**
  * データテーブルのビューテンプレートに `簡易ページネーション` オプションが表示されない問題を修正 ([#8778](https://github.com/nocobase/nocobase/pull/8778)) by @cgyrock
  * 数値フィールドの精度バリデーションルール設定が有効にならない問題を修正 ([#8768](https://github.com/nocobase/nocobase/pull/8768)) by @2013xile
* **[undefined]** アップグレード後に plugin-block-reference が見つからないと表示される問題を修正。 ([#8757](https://github.com/nocobase/nocobase/pull/8757)) by @gchust
* **[権限管理]**
  * Model.primaryKeyField の代わりに collection.filterTargetKey を使用するように変更 ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos
  * Restful API データソースのデータ更新操作でエラーが発生する問題を修正 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock
* **[UI テンプレート]**
  * 詳細ブロックをテンプレートとして保存した後、関連データが正しく読み込まれない問題を修正。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust
  * 参照操作パネルのブロックテンプレートでエラーが発生する問題を修正。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust
  * テーブルブロックの参照テンプレートイベントフローで、行クリックイベントフローを設定できない問題を修正。 ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust
  * 詳細の現在レコード用ブロックテンプレートと編集フォームブロックテンプレートを再利用した際に、データが正しく読み込まれない場合がある問題を修正。 ([#8775](https://github.com/nocobase/nocobase/pull/8775)) by @gchust
  * テンプレートブロックのイベントフローで props を変更しても反映されない問題を修正。 ([#8765](https://github.com/nocobase/nocobase/pull/8765)) by @gchust
* **[Office ファイルプレビュー]** より多くのファイル内容を表示できるよう、ポップアップの高さを調整 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher
* **[操作：レコードエクスポート]**
  * 多対多の配列フィールドをエクスポートした後に空白になる問題を修正 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock
  * エクスポートした Excel ファイルで数値型フィールドが文字列として表示される問題を修正 ([#8774](https://github.com/nocobase/nocobase/pull/8774)) by @cgyrock
* **[ブロック：リスト]** リストブロックのフィールドで現在レコード変数を使用できない問題を修正。 ([#8784](https://github.com/nocobase/nocobase/pull/8784)) by @gchust
* **[データソース：メインデータベース]**
  * JSON フィールドのデフォルト値更新が反映されない問題を修正 ([#8767](https://github.com/nocobase/nocobase/pull/8767)) by @2013xile
  * フィールド同期エラーを修正 ([#8766](https://github.com/nocobase/nocobase/pull/8766)) by @2013xile
* **[ワークフロー]** 承認ノードでブロックをドラッグした際に、誤ったノードドラッグ用プレースホルダーが表示される問題を修正 ([#8763](https://github.com/nocobase/nocobase/pull/8763)) by @mytharcher
* **[AI 従業員]**
  * deepseek reasoning モデル使用時に tool call が異常になる問題を修正 ([#8741](https://github.com/nocobase/nocobase/pull/8741)) by @cgyrock
  * qwen / deepseek / kimi でアップロード文書を読み取れない問題を修正 ([#8732](https://github.com/nocobase/nocobase/pull/8732)) by @cgyrock
* **[マルチスペース]** データテーブルの主キーでデータ作成を行う際に、スペース権限エラーが発生する問題を修正 by @jiannx
* **[ワークフロー：承認]**
  * 承認処理詳細で一部ラベルが未翻訳の問題を修正 by @zhangzhonghe
  * 承認者が設定された順序どおりに記録生成されない問題を修正 by @mytharcher
* **[移行管理]**
  * 移行異常後に出力される例外オブジェクト内の SQL が大きすぎて、プロセスがフリーズしやすい問題を修正 by @cgyrock
  * コンパイルエラーを修正 by @mytharcher
  * ユーザーが入力した移行説明が失われる問題を修正し、現在時刻をデフォルトの移行説明として使用するように変更 by @cgyrock
  * クラスターモードに対応するため、一時ファイルの格納先を調整 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.8](https://www.nocobase.com/ja/blog/v2.1.0-alpha.7)

*リリース日：2026-03-12*

### 🎉 新機能

* **[client]** ワークフローボタンの設定操作が成功した後に、後続フローを実行できるようになりました ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher
* **[データテーブルフィールド：コード]** コードフィールドが 2.0 に対応しました ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx
* **[ワークフロー：カスタム操作イベント]** カスタムコンテキストデータに対応し、カスタム操作イベントをサブフローとして呼び出す際に任意の変数を渡せるようになりました ([#8758](https://github.com/nocobase/nocobase/pull/8758)) by @mytharcher
* **[AI 従業員]** AI 対話のユーザープロンプト編集機能を更新しました ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🚀 機能改善

* **[client]**
  * 編集フォームブロックと詳細ブロックで利用可能なデータがない場合に、メッセージを表示するようにしました。 ([#8790](https://github.com/nocobase/nocobase/pull/8790)) by @gchust
  * admin レイアウト設定とアプリ入口をモデルホスト構成へリファクタリングし、v1 / v2 の互換性確保を強化しました ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe
  * テーブルで集計行（summary）を設定できるようにしました ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
* **[flow-engine]** 新しい runjs コードで、実行前に変数式が解析されてしまう問題を改善しました。 ([#8762](https://github.com/nocobase/nocobase/pull/8762)) by @gchust
* **[ワークフロー]** ノードが利用できない場合でも、ノード追加メニューですべてのノードタイプを表示するようにしました ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher
* **[操作：カスタムリクエスト]** イベントフローでカスタムリクエストに対応しました ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx
* **[AI 従業員]** AI 対話のユーザープロンプト機能を更新しました ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
* **[NocoBase 埋め込み]** 権限プラグインで、リレーションフィールドの値をフィルタリングする API を提供しました ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher
* **[AI: ナレッジベース]** ナレッジベースのドキュメント読み込みロジックを再構築 by @cgyrock
* **[Redis 分散ロックアダプター]** メインリポジトリの LockManager インターフェース変更に合わせてリファクタリング by @mytharcher
* **[バックアップマネージャー]** 重複バックアップを防ぐため、定期バックアップに分散ロックを追加 by @mytharcher
* **[移行管理]** 移行チェック、移行 SQL のダウンロード、移行ログ形式、および移行実行プロセスの可視化を改善 by @cgyrock

### 🐛 不具合修正

* **[undefined]** アップグレード後に plugin-block-reference が見つからないと表示される問題を修正。 ([#8757](https://github.com/nocobase/nocobase/pull/8757)) by @gchust
* **[client]**
  * 権限判定の影響でサブフォーム内のサブテーブルにデータが表示されない問題を修正 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos
  * v2 フィルタフォームでフィールド並び替え後に折りたたみボタンが機能しない問題を修正 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe
  * フィルタフォームの Field values で、カスタムフィールドの値入力欄の型が正しくない問題を修正 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe
  * 参照テンプレート（v1）管理ページにフィルタボタンと更新ボタンが表示されない問題を修正。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust
  * SQL データテーブルの詳細ブロックで、データ読み込み時にエラーが発生する問題を修正。 ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust
  * 詳細ブロックのフィールド連動ルールが初回レンダリング時に反映されない問題を修正。 ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust
  * v2 ブロックでは、現在のデータソースでサポートされている操作のみ表示するようにしました ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe
  * v2 サブページの戻るボタンのスタイル不具合を修正 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe
  * ポップアップ詳細内のリンク遷移結果が、ビューを閉じた際に元に戻ってしまう問題を修正 ([#8752](https://github.com/nocobase/nocobase/pull/8752)) by @zhangzhonghe
  * 設定モードで連動により非表示になった必須フィールドが、引き続きバリデーション対象になる問題を修正 ([#8773](https://github.com/nocobase/nocobase/pull/8773)) by @zhangzhonghe
  * タブの重なりを修正し、設定モードでラベルの最小幅を確保しました ([#8771](https://github.com/nocobase/nocobase/pull/8771)) by @zhangzhonghe
  * サブテーブルで列の表示切り替えや連続削除を行った後、画面への反映が遅れる問題を修正 ([#8755](https://github.com/nocobase/nocobase/pull/8755)) by @zhangzhonghe
  * リレーションフィールドのポップアップ内でデータを編集した後、元のブロックが更新されない問題を修正。 ([#8782](https://github.com/nocobase/nocobase/pull/8782)) by @gchust
  * 多対多（配列）関連レコードブロックで追加操作を非表示にし、エラーを防止。 ([#8779](https://github.com/nocobase/nocobase/pull/8779)) by @gchust
  * メニュー切り替え時にデータブロックが更新されない問題を修正。 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
  * デフォルト値コンポーネントでフィールドコンポーネントがレンダリングされない問題を修正 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  * 更新レコードフォームで必須バリデーションが 2 回実行される問題を修正 ([#8761](https://github.com/nocobase/nocobase/pull/8761)) by @jiannx
* **[server]**
  * 非データベース系データソースのテーブルクエリでエラーが発生する問題を修正 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock
  * hash パラメータを追加し、キャッシュが更新されない問題を解消 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
* **[lock-manager]** ロックマネージャーの競合状態に関する問題を修正 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher
* **[database]**
  * データテーブルのビューテンプレートに `簡易ページネーション` オプションが表示されない問題を修正 ([#8778](https://github.com/nocobase/nocobase/pull/8778)) by @cgyrock
  * 数値フィールドの精度バリデーションルール設定が有効にならない問題を修正 ([#8768](https://github.com/nocobase/nocobase/pull/8768)) by @2013xile
  * v2 のフィールドカスタム正規表現バリデーションが失敗する問題を修正 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
* **[flow-engine]** ctx.exit でユーザー定義イベントフローの実行を終了できない問題を修正。 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
* **[権限管理]**
  * collection.filterTargetKey を Model.primaryKeyField の代わりに使用するように変更 ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos
  * Restful API データソースのデータ更新操作でエラーが発生する問題を修正 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock
  * ACL メタデータ設定時に使用されるデータベースインスタンスが正しくない問題を修正 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
* **[UI テンプレート]**
  * 詳細ブロックをテンプレートとして保存した後、関連データが正しく読み込まれない問題を修正。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust
  * 参照操作パネルのブロックテンプレートでエラーが発生する問題を修正。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust
  * テーブルブロックの参照テンプレートイベントフローで、行クリックイベントフローを設定できない問題を修正。 ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust
  * 詳細の現在レコード用ブロックテンプレートと編集フォームブロックテンプレートを再利用した際に、データが正しく読み込まれない場合がある問題を修正。 ([#8775](https://github.com/nocobase/nocobase/pull/8775)) by @gchust
  * テンプレートブロックのイベントフローで props を変更しても反映されない問題を修正。 ([#8765](https://github.com/nocobase/nocobase/pull/8765)) by @gchust
* **[Office ファイルプレビュー]** より多くのファイル内容を表示できるよう、ポップアップの高さを調整 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher
* **[操作：レコードエクスポート]**
  * 多対多の配列フィールドをエクスポートした後に空白になる問題を修正 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock
  * エクスポートした Excel ファイルで数値型フィールドが文字列として表示される問題を修正 ([#8774](https://github.com/nocobase/nocobase/pull/8774)) by @cgyrock
* **[ワークフロー]** 承認ノードでブロックをドラッグした際に、誤ったノードドラッグ用プレースホルダーが表示される問題を修正 ([#8763](https://github.com/nocobase/nocobase/pull/8763)) by @mytharcher
* **[ブロック：リスト]** リストブロックのフィールドで現在レコード変数を使用できない問題を修正。 ([#8784](https://github.com/nocobase/nocobase/pull/8784)) by @gchust
* **[データソース：メインデータベース]**
  * JSON フィールドのデフォルト値更新が反映されない問題を修正 ([#8767](https://github.com/nocobase/nocobase/pull/8767)) by @2013xile
  * フィールド同期エラーを修正 ([#8766](https://github.com/nocobase/nocobase/pull/8766)) by @2013xile
* **[AI 従業員]**
  * qwen / deepseek / kimi でアップロード文書を読み取れない問題を修正 ([#8732](https://github.com/nocobase/nocobase/pull/8732)) by @cgyrock
  * deepseek reasoning モデル使用時に tool call が異常になる問題を修正 ([#8741](https://github.com/nocobase/nocobase/pull/8741)) by @cgyrock
  * ナレッジベースを有効化した後、AI 従業員との対話でエラーが発生する問題を修正 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
  * AI データソース設定のレンダリング不具合を修正 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
  * AI 対話メッセージ内で 0 が表示される問題を修正 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
* **[フロントエンドフローエンジン]** SQL 削除時のエラーを修正 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
* **[ワークフロー：カスタム操作イベント]** カスタム操作イベントがサブフローとして呼び出された際に処理が停止する問題を修正 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
* **[ワークフロー：JavaScript ノード]** Windows 環境でテストケースが通らない問題を修正 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
* **[データ可視化]** i18n チャートプラグインの入口文言およびプレースホルダー文言を修正 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
* **[マルチスペース]** データテーブルの主キーでデータ作成を行う際に、スペース権限エラーが発生する問題を修正 by @jiannx
* **[テンプレート印刷]** ACL API の変更に未対応だったことによるエラーを修正 by @mytharcher
* **[ワークフロー：承認]**
  * 承認者が設定された順序どおりに記録生成されない問題を修正 by @mytharcher
  * ノード情報が型フィルタで除外されたことにより、クエリノードの結果が承認画面に表示されない問題を修正 by @mytharcher
  * ACL に基づく appends パラメータのフィルタ処理に関する問題を修正 by @mytharcher
  * ユーザーに必要な権限がない場合でも、リレーションフィールドが作成または更新されてしまう権限問題を修正 by @mytharcher
  * 不足していたパラメータを補完し、承認提出時に関連データが更新・処理されない問題を回避 by @mytharcher
  * 承認処理詳細で一部ラベルが未翻訳の問題を修正 by @zhangzhonghe
  * 加签および転签後に `dataAfter` フィールド値が欠落し、リスト読み込み時にエラーが発生する問題を修正 by @mytharcher
  * 承認操作時にリレーションフィールドの値をフィルタし、権限を超えたデータ操作を防止 by @mytharcher
  * 手動で承認ワークフローを実行した際のエラーを修正 by @mytharcher
  * 承認操作時にリレーションフィールドの値をフィルタし、権限を超えたデータ操作を防止 by @mytharcher
* **[メール管理]** 画像の contentId 形式の解析を修正 by @jiannx
* **[移行管理]**
  * ユーザーが入力した移行説明が失われる問題を修正し、現在時刻をデフォルトの移行説明として使用するように変更 by @cgyrock
  * コンパイルエラーを修正 by @mytharcher
  * クラスターモードに対応するため、一時ファイルの格納先を調整 by @mytharcher
  * 移行異常後に出力される例外オブジェクト内の SQL が大きすぎて、プロセスがフリーズしやすい問題を修正 by @cgyrock
