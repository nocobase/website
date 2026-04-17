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
