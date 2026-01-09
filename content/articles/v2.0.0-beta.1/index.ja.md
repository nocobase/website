### 🎉 新機能

* **[undefined]** 実験的な「引用ブロック」プラグインを追加しました。既存のブロックを参照・コピーすることで再利用できます。 ([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust
* **[client]**
  * アプリケーションがメンテナンス状態の際、プラグインでカスタマイズしたメンテナンス用コンポーネントを表示できるようになりました ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock
  * データテーブル作成時に、プリセットの id フィールド型を変更できるようになりました ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock
  * 対多サブフォームにおいて、データ追加・既存データの選択・関連解除を許可する設定に対応しました ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh
  * テーマエディタでグローバルスタイルを自由にカスタマイズできるようになりました ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo
  * 詳細ブロックにデフォルトの並び替えルールを設定できるようになりました ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh
  * 数値フィールドの型として double、float、decimal を選択できるようになりました ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos
  * テーブル列フィールドで並び替え機能を有効にできるようになりました ([#7900](https://github.com/nocobase/nocobase/pull/7900)) by @katherinehhh
  * リレーションフィールドのドロップダウンで、クイックに新規データを追加できるようになりました ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh
  * ツリーテーブルのリレーションフィールドでカスケードセレクタを利用できるようになりました ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh
  * テーブル列の操作をドラッグで並び替えできるようになりました ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
  * サブテーブルでデータをページ分割して表示できるようになりました ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh
  * イベントストリームに新しい定義済みアクションを追加し、イベント処理の柔軟性を向上させました ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe
  * 2.0 対応の Markdown ブロックを追加しました ([#7613](https://github.com/nocobase/nocobase/pull/7613)) by @katherinehhh
  * サブフォームに連動ルールを設定できるようになりました ([#7640](https://github.com/nocobase/nocobase/pull/7640)) by @zhangzhonghe
  * テーブル行クリック時のイベントに対応し、特定の行操作を実行できるようになりました ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe
  * カスタム変数に対応しました ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe
  * 新たに「現在のデバイスタイプ」変数を追加しました ([#7576](https://github.com/nocobase/nocobase/pull/7576)) by @zhangzhonghe
* **[ファイルマネージャー]** ストレージごとにファイルのリネーム方式を設定できるようになりました ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW
* **[ワークフロー]**
  * ワークフロー用の新しいシステム変数として、「アプリケーションインスタンス ID」と「Snowflake ID 生成」を追加しました ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher
  * `switch` / `case` のような制御を行える「複数条件分岐」ノードを追加しました ([#7878](https://github.com/nocobase/nocobase/pull/7878)) by @mytharcher
* **[ブロック：マップ]** 2.0 対応のマップブロックを追加しました ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh
* **[データ可視化]**
  * グラフ設定を支援する AI エージェントを追加しました ([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang
  * グラフ用の SQL データソースに対応しました ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang
  * 新しいグラフタイプとしてドーナツチャートを追加しました ([#7629](https://github.com/nocobase/nocobase/pull/7629)) by @heziqiang
* **[フロントエンドフローエンジン]** SQL 記述時に LiquidJS のテンプレート文字列を利用できるようになりました ([#7667](https://github.com/nocobase/nocobase/pull/7667)) by @2013xile
* **[データソース管理]**
  * メインデータベースからデータテーブルを読み込み、フィールドのインターフェース設定を変更できるようになりました ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie
  * メインデータベースからデータテーブルを読み込み、フィールドのインターフェース設定を変更できるようになりました ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie
* **[ブロック：グリッドカード]** 2.0 対応のグリッドカードブロックを追加しました ([#7579](https://github.com/nocobase/nocobase/pull/7579)) by @katherinehhh
* **[ブロック：リスト]** 2.0 対応のリストブロックを追加しました ([#7574](https://github.com/nocobase/nocobase/pull/7574)) by @katherinehhh
* **[ブロック：操作パネル]** 2.0 対応の操作パネルブロックを追加しました ([#7594](https://github.com/nocobase/nocobase/pull/7594)) by @katherinehhh
* **[AI 従業員]** AI プラグインのオンライン検索機能を改善しました ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock
* **[テレメトリ]** OpenTelemetry をベースとしたアプリケーション向けテレメトリプラグインを追加しました。CPU、メモリ、HTTP リクエストなどの指標を標準搭載し、HTTP 経由でのエクスポートに対応しています by @2013xile
* **[フォーム下書き]** フォーム下書き機能を追加しました by @chenos
* **[ファイルストレージ：S3 (Pro)]** S3 Pro ストレージにリネームモードのオプションを追加しました by @mytharcher
* **[ワークフロー：承認]**
  * 承認処理画面で、データのスナップショットまたは最新状態を選択して表示できるようになりました by @mytharcher
  * 承認を開始できるユーザーを制御するための対象者設定を追加しました by @mytharcher
* **[メール管理]** メール管理 2.0 を実装しました by @jiannx

### 🚀 機能改善

* **[undefined]**

  * グラフプラグインの英語ドキュメントを更新しました ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang
  * グラフ概要セクションのドキュメントを更新しました ([#7702](https://github.com/nocobase/nocobase/pull/7702)) by @heziqiang
* **[flow-engine]**

  * runjs 環境で window.location.reload を利用できるようになりました ([#8316](https://github.com/nocobase/nocobase/pull/8316)) by @gchust
  * 設定モード切り替え時のパフォーマンスを改善しました ([#8241](https://github.com/nocobase/nocobase/pull/8241)) by @zhangzhonghe
  * runjs 環境で FormData を扱えるようになりました ([#8263](https://github.com/nocobase/nocobase/pull/8263)) by @gchust
  * 設定メニューを動的に非表示にできるようになりました ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust
  * FlowModelRenderer に useCache オプションを追加しました ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe
  * モデルとその子モデルを再帰的に削除できる `removeModelWithSubModels` を追加しました ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe
  * flow model のタイプを動的に切り替えられるようになりました ([#7952](https://github.com/nocobase/nocobase/pull/7952)) by @gchust
  * models ツリーの変更を flow engine レイヤーで監視できるようになりました ([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust
  * 現在レコードの変数解析を最適化し、モーダルの表示速度を向上させました ([#7895](https://github.com/nocobase/nocobase/pull/7895)) by @gchust
  * runjs コンテキストの API 構造を整理し、Antd アイコンライブラリに対応しました ([#7896](https://github.com/nocobase/nocobase/pull/7896)) by @gchust
  * ツールバーのデザインを調整し、アイコンが隠れないようにしました ([#7883](https://github.com/nocobase/nocobase/pull/7883)) by @zhangzhonghe
  * ページタブのツールバー表示を改善しました ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe
  * flow model の遅延操作に対応しました ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust
  * UID コピー失敗時のエラーメッセージを見直し、対処方法が分かりやすくなりました ([#7718](https://github.com/nocobase/nocobase/pull/7718)) by @gchust
  * flow step 内でコンテキスト変数を定義できるようになりました ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust
  * URL クエリに skipRunJs=true を指定することで runjs ステップをスキップできるようになりました ([#7638](https://github.com/nocobase/nocobase/pull/7638)) by @gchust
  * モーダル用の変数に対応しました ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust
  * 自動フローの実行を「beforeRender」イベントに統一し、動作の一貫性と予測性を高めました ([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust
  * コードエディタを改善し、スニペットの拡充と状況に応じた補完表示に対応しました ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust
  * ドラッグ操作の挙動を改善しました ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe
* **[sdk]** API ストレージの実装を改善しました ([#8308](https://github.com/nocobase/nocobase/pull/8308)) by @chenos
* **[client]**

  * JS コードエディタでフルスクリーン表示が可能になりました ([#8294](https://github.com/nocobase/nocobase/pull/8294)) by @gchust
  * ツリーテーブルの「Add child」動作を改善し、children 関連の「Add new」と同等の挙動になりました ([#8272](https://github.com/nocobase/nocobase/pull/8272)) by @katherinehhh
  * Color フィールドでデフォルト値をクリアできるようになりました ([#8268](https://github.com/nocobase/nocobase/pull/8268)) by @katherinehhh
  * 操作列の列幅設定を Select 形式に変更しました ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh
  * テーブル列幅を数値入力で自由に指定できるようになりました ([#8200](https://github.com/nocobase/nocobase/pull/8200)) by @katherinehhh
  * テーブル列幅の設定方法を選択式に整理しました ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh
  * データセレクタの見た目を改善し、maxTagCount を設定しました ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh
  * ブロック・フィールド・操作に関する設定項目を整理しました ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh
  * パーセンテージフィールドで数値フォーマットを設定できるようになりました ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh
  * サブテーブルで行削除後に最終ページへ移動する問題を修正し、列単位のバリデーション設定に対応しました ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh
  * 編集時のサブテーブルにおける大きなフィールドの表示を調整しました ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh
  * JSON フィールドの内容が長い場合、省略表示されるようになりました ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh
  * 添付ファイルアップロードで複数選択を許可できるようになりました ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh
  * Select コンポーネントで、折りたたまれた選択項目をホバー時に表示するよう改善しました ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh
  * グラフの初期クエリ時にフィルタ項目を選択できるようになりました ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang
  * モバイル向けコンポーネントに対応しました ([#7870](https://github.com/nocobase/nocobase/pull/7870)) by @zhangzhonghe
  * RunJS スクリプトで Day.js を利用できるようになりました ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust
  * ページバージョンを flow engine のコンテキストに追加しました ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust
  * Markdown エディタを改善しました ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh
  * 2.0 ブロックで tableoid フィールドを利用できるようになりました ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh
  * JS コードエディタで JSX 構文をサポートしました ([#7699](https://github.com/nocobase/nocobase/pull/7699)) by @gchust
  * JS フィールドモデルでリレーションフィールドに対応しました ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust
* **[server]** アプリケーションインスタンスが存在しない場合でも、メンテナンス状態取得時の耐障害性を向上させました ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
* **[acl]**`acl.registerSnippet` で権限スニペット設定を統合できるようになりました ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
* **[telemetry]**

  * 送信するテレメトリ指標を制御できるようになりました ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile
  * オンライン子アプリ数などの指標を追加しました ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile
* **[database]** フィールド暗号化プラグインを刷新し、セキュリティを強化しました。アプリケーションキーの生成・更新や、フィールドごとの独立キーに対応しています ([#7769](https://github.com/nocobase/nocobase/pull/7769)) by @cgyrock
* **[AI エージェント]**

  * workflow 内の LLM ノードにおける Gemini 互換性の問題を不具合修正しました。<br/>大規模データ環境での AI ツール dataSourceQuery の処理性能を機能改善しました。<br/>データモデリングに関する不具合を修正しました。<br/>新たに AI 提案ツールを追加しました。<br/> ([#8249](https://github.com/nocobase/nocobase/pull/8249)) by @heziqiang
  * AI エージェントを初回編集後に送信しても反応しない問題を解消しました。<br/>不要な内蔵 AI エージェント「Avery フォームアシスタント」を削除しました。<br/>内蔵 AI エージェントにデフォルトの初期ロール権限を追加しました。<br/>エラー処理および出力結果の品質を機能改善しました。<br/>AI がモーダル（Modal）のコンテキスト変数を利用できるようになりました。<br/>外部データソースとの連携に対応しました。<br/>大量データ処理時に会話内容が誤って切り詰められる問題を不具合修正しました。<br/> ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang
  * 内蔵 AI エージェントのプロンプト編集に対応しました。<br/>Nathan（AI エージェント）のシステムプロンプトを最適化しました。<br/>サーバー側での静的ファイル読み込みに関する不具合を修正しました。 ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang
  * LLM フォーム追加時に provider フィールドを新設しました ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang
  * AI エージェントプラグインに upgrade 用フックを追加しました ([#7951](https://github.com/nocobase/nocobase/pull/7951)) by @heziqiang
  * AI エージェントの操作性およびタスク設定体験を改善しました ([#7707](https://github.com/nocobase/nocobase/pull/7707)) by @cgyrock
  * テーブルブロックのメタ情報を基に、AI エージェントが自律的にデータ取得できるようになりました ([#7703](https://github.com/nocobase/nocobase/pull/7703)) by @cgyrock
  * AI エージェントによるコードレビュー、診断、修正を含む AI プログラミング体験を強化しました。 ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock
  * OpenAI LLM Provider を再設計し、Completions API と Responses API をそれぞれ専用 Provider として分離しました。 ([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock
  * 新たな LLM プロバイダーとして Ollama に対応しました ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96
  * AI によるコード生成機能を改善しました ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock
  * モバイル表示において、チャット画面を最小化できるボタンを追加しました ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock
* **[UI テンプレート]**

  * 詳細ブロックで利用できるフィールドテンプレートを追加しました。 ([#8247](https://github.com/nocobase/nocobase/pull/8247)) by @gchust
  * UI テンプレートプラグインを追加し、ブロックおよびモーダルテンプレートの再利用を可能にしました。 ([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust
* **[ワークフロー]**

  * ワークフロー複製 API に、複製元ワークフローのインスタンス指定パラメータを追加しました ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher
  * データテーブルイベントの「変更が発生したフィールド」設定説明を見直し、誤解を防ぐ表現に改善しました ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher
  * ワークフロー複製（バージョン作成）時に、既存設定を基に新しい設定を生成できるようになりました ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher
  * 実行準備段階に耐障害処理を追加し、データ欠損によるフロー停止を防止しました ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  * ワークフローキャンバスのリレーションデータを遅延読み込みに変更し、パフォーマンスを向上させました ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher
  * レコード更新ボタンに、ワークフロー連携用の設定項目を追加しました ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher
* **[非同期タスクマネージャー]**

  * タスククリーンアップ処理に例外捕捉を追加し、安定性を向上させました ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher
  * サブアプリケーションで非同期タスクを実行する際、対象サブアプリケーションのみでプロセスを起動するようにしました ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile
* **[ブロック：操作パネル]** 設定画面で非表示にしたブロック・操作・フィールドの表示を改善しました ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh
* **[ブロック：リスト]** Table、List、Grid Card ブロックにおける Link ボタン設定を補完しました ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh
* **[エラーハンドラー]** SQL 構文エラー発生時に、データベース固有のエラーメッセージを外部へ公開しないようにしました ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
* **[ブロック：マップ]** マップフィールドをテキスト表示した場合、文字数超過時に省略表示できるようになりました ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh
* **[権限管理]** ユーザーに root ロールを付与できないよう制限しました ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile
* **[ブロック：グリッドカード]**

  * グリッドカードブロックのデザインを調整し、よりコンパクトなレイアウトにしました ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh
  * 1 ページあたりの表示行数を設定できるようにし、pageSize 設定を廃止して自動算出に変更しました ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh
  * **[データテーブルフィールド：Markdown（Vditor）]** 閲覧モードでは、Markdown フィールドがデフォルトで変数を展開しないよう挙動を調整しました ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh
  * **[操作：レコードインポート]** インポート設定時に ID フィールドを選択できるようになりました ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh
  * **[データ可視化]**

    * グラフのツールチップおよびイベントコードテンプレート内のコメントを更新しました ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang
    * 日時データ用のフォーマットオプションをグラフに追加しました ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang
    * 「先に“クエリを実行”してからグラフ設定を行う」旨のガイダンスを追加しました ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang
    * グラフ設定パネルで共通プレビューボタンを押した際、データを再読み込みするようにしました ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang
    * データ可視化プラグインを VI 2.0 に更新し、不具合修正と UI 改善を行いました ([#7597](https://github.com/nocobase/nocobase/pull/7597)) by @heziqiang
    * グラフタイプを拡充し、画面構成および操作性を向上させました ([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang
  * **[マルチアプリケーションマネージャー（廃止）]**

    * 子アプリケーションを非同期キューで起動できるようになりました ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile
    * app supervisor の動作を改善しました ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos
  * **[データソース管理]** フィールドタイプおよびインターフェース列の順序を見直し、変更時に確認ステップを追加しました ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile
  * **[マルチスペース]** localStorage の代わりに api.storage を採用し、権限制御を再設計するとともに不具合を修正しました by @jiannx
  * **[操作：レコードエクスポート Pro]** インポート Pro／エクスポート Pro ボタンに権限制御を追加しました by @katherinehhh
  * **[テレメトリ：Prometheus]**`@opentelemetry/exporter-prometheus` を最新版へ更新しました by @2013xile
  * **[データテーブルフィールド：暗号化]** フィールド暗号化プラグインを改善し、独立した IV を用いたデータ検索に対応しました by @cgyrock
  * **[ワークフロー：承認]**

    * フロー実行完了時に `approval.data` を最新の承認情報へ更新し、「最新」表示モードと整合するようにしました by @mytharcher
    * 単一承認データ取得用 API を見直し、実装を簡素化しました by @mytharcher
  * **[マイグレーション管理]** マイグレーションチェック、SQL ダウンロード、ログ形式、および実行プロセスの可視化体験を総合的に改善しました by @cgyrock

  ### 🐛 不具合修正
* **[undefined]**

  * ダークモードでプラグインドキュメントのトップページの表示が崩れる問題を修正しました。 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust
  * ルーティングパスのマッチングを見直し、新しいマルチアプリ構成に対応しました ([#7570](https://github.com/nocobase/nocobase/pull/7570)) by @jiannx
  * 引用ブロック使用時に、参照元ブロックが元のページから削除されてしまう問題を修正しました。 ([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust
* **[client]**

  * 詳細ブロック内の子詳細モーダルで誤ったデータが表示される問題を修正しました ([#8318](https://github.com/nocobase/nocobase/pull/8318)) by @katherinehhh
  * 連続してモーダルを操作した際、連動ルールやイベントフロー設定モーダルを閉じるとエラーが発生する問題を修正しました。 ([#8312](https://github.com/nocobase/nocobase/pull/8312)) by @gchust
  * テーブルブロックのクイック編集設定を変更しても、ページを再読み込みしないと反映されない問題を修正しました。 ([#8311](https://github.com/nocobase/nocobase/pull/8311)) by @gchust
  * メニュー切り替え時に URL クエリが変わると、該当クエリに依存するデータ範囲ブロックが更新されない問題を修正しました。 ([#8310](https://github.com/nocobase/nocobase/pull/8310)) by @gchust
  * リレーションフィールドコンポーネントにおける権限関連の不具合を修正しました ([#8243](https://github.com/nocobase/nocobase/pull/8243)) by @katherinehhh
  * 詳細ブロック内の子詳細コンポーネントで、ページ切り替え時にデータが更新されない問題を修正しました ([#8305](https://github.com/nocobase/nocobase/pull/8305)) by @katherinehhh
  * 編集フォームでページを切り替えた際、サブフォーム内のサブテーブル内容が更新されない問題を修正しました ([#8304](https://github.com/nocobase/nocobase/pull/8304)) by @katherinehhh
  * モーダルが開かない不具合を修正し、ナビゲーションの安定性を向上させました ([#8287](https://github.com/nocobase/nocobase/pull/8287)) by @zhangzhonghe
  * ドロップダウン選択から配列サブフォームへ切り替えた際に発生するエラーを修正しました ([#8301](https://github.com/nocobase/nocobase/pull/8301)) by @katherinehhh
  * JS Field 経由でフォームにリレーションフィールドを追加できてしまう問題を修正しました。 ([#8296](https://github.com/nocobase/nocobase/pull/8296)) by @gchust
  * レコード更新後にデータが複数回リフレッシュされる問題を修正しました。 ([#8299](https://github.com/nocobase/nocobase/pull/8299)) by @gchust
  * 多対多サブフォームで AddNew の内容が選択済みデータに上書きされる問題を修正しました ([#8292](https://github.com/nocobase/nocobase/pull/8292)) by @katherinehhh
  * 詳細ブロックで編集後に JS Item が更新されない問題を修正しました。 ([#8291](https://github.com/nocobase/nocobase/pull/8291)) by @gchust
  * データセレクタのモーダル内で新規追加したレコードが反映されない問題を修正しました。 ([#8289](https://github.com/nocobase/nocobase/pull/8289)) by @gchust
  * 非表示状態の JS ブロックが正しく描画されない問題を修正しました。 ([#8286](https://github.com/nocobase/nocobase/pull/8286)) by @gchust
  * 手動ノードフォーム内の多対多データセレクタで、フォームブロックメニューがエラーになる問題を修正しました ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher
  * リレーションフィールド削除後にブロックエラーが発生する問題を修正しました ([#8273](https://github.com/nocobase/nocobase/pull/8273)) by @katherinehhh
  * フィルタフォームで、初期表示時にデフォルト値がフィルタ処理を一度も実行しない問題を修正しました ([#8232](https://github.com/nocobase/nocobase/pull/8232)) by @zhangzhonghe
  * リレーションフィールドの遅延読み込み時に、無限ループによりスタックオーバーフローが発生する問題を修正しました ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe
  * 連動ルールが未設定の場合でもエラーが発生しないようにしました ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe
  * テーブルブロックの操作列を削除できない不具合を修正しました。 ([#8230](https://github.com/nocobase/nocobase/pull/8230)) by @gchust
  * プレビュー実行時に JSX のコンパイル結果が保存時のコードを書き換えてしまう問題を修正しました。 ([#8171](https://github.com/nocobase/nocobase/pull/8171)) by @gchust
  * S3 Pro 添付ファイルアップロード時のエラーを修正し、ファイルプレビューを改善しました ([#8211](https://github.com/nocobase/nocobase/pull/8211)) by @katherinehhh
  * 列幅調整時に、1 行の合計幅がはみ出さないようにしました ([#8166](https://github.com/nocobase/nocobase/pull/8166)) by @zhangzhonghe
  * フィルタフォームで「いいえ」を選択しても「はい」として扱われる問題を修正しました。 ([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust
  * 新規作成権限を持つロールでも、作成フォームに送信ボタンが表示されない問題を修正しました ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh
  * サブテーブル／サブフォームで既存データ選択時、未選択項目を含めて送信するとデータが消える問題を修正しました ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh
  * 新規作成フォーム設定にデータ範囲項目が表示される問題を修正しました ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh
  * フォーム内の tableoid フィールド表示不具合を修正しました ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh
  * タブページのイベントフローが保存できない問題を修正しました ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos
  * タブを非表示にしても余白が残る不具合を修正しました ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos
  * リレーション選択コンポーネントで、選択済み項目が誤って除外される問題を修正しました ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh
  * options フィールドがある場合に、リレーションフィールドのドロップダウンが選択不可表示になる不具合を修正しました ([#8153](https://github.com/nocobase/nocobase/pull/8153)) by @katherinehhh
  * タブフィールド切り替え時に、モーダル設定が失われる問題を修正しました。 ([#8136](https://github.com/nocobase/nocobase/pull/8136)) by @gchust
  * フィルタフォームで単一選択フィールドに複数選択オペレーターを使うと、中国語入力時に既存の選択肢が消える問題を修正しました。 ([#8140](https://github.com/nocobase/nocobase/pull/8140)) by @gchust
  * `RemoteSelect` コンポーネントで値が空の際、誤って選択肢を読み込む挙動を修正しました ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher
  * 子フィールドの disabled 設定により、リレーションフィールドの選択が制限される問題を修正しました ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh
  * フィルタフォームにおけるフィールドのデフォルトラベルが、多言語環境で正しく翻訳されない問題を修正しました。 ([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust
  * 日付フィルタで「過去」「未来」を選択した際、UI コンポーネントの幅が揃わない問題を修正しました。 ([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust
  * JS ブロックのタイトル説明スタイルが他のブロックと異なる問題を修正しました。 ([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust
  * 複数行テキストが改行されない不具合を修正しました ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh
  * 「いずれかを含む」「いずれも含まない」オペレーター使用時に、選択肢がすべて表示されない問題を修正しました。 ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust
  * サブフォーム内のサブテーブルにデータが表示されない問題を修正しました ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh
  * 期間指定フィルタの値をクリア後、再度フィルタを実行するとエラーになる問題を修正しました。 ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust
  * フィルタフォームで、リレーションフィールドの選択肢が正しく取得できない問題を修正しました。 ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust
  * カスタムフィールド設定が正しく反映されず、一部設定が有効にならない問題を修正しました。 ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust
  * Checkbox フィールドのフィルタが機能しない問題を修正しました。 ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust
  * フィルタ操作で number フィールドの値が正しく復元されない問題を修正しました。 ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust
  * 一部フィールドで、フィルタオペレーターが正しく機能しない問題を修正しました。 ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust
  * ブロック削除後も、フィルタブロックに該当フィールド設定が残る問題を修正しました。 ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust
  * ボタン非表示後、通常表示モードで不要な余白が生じる問題を修正しました ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh
  * フィルタフォームでリセットボタンの文言を変更できない問題を修正しました。 ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust
  * フィルタオペレーターが `$in` / `$notIn` の場合に、複数値を入力できない問題を修正しました。 ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust
  * データブロック追加後、自動的にフィルタフォームのフィールドメニューに反映されない問題を修正しました。 ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust
  * フィルタフォームのリレーションフィールド設定メニューに、クイック作成が表示されないようにしました。 ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust
  * リストブロック内のリレーションサブテーブルでデータが不正になる問題を修正しました ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh
  * 数値フィールドの検証ルールがフォームで反映されない問題を修正しました ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh
  * フィルタフォームのフィールドがバックエンド検証により制限される問題を修正しました。 ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust
  * サブテーブルで大きなフィールドを編集した際の表示不具合を修正しました ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh
  * 多対多リレーションのドロップダウンで複数選択を無効にした場合に、クイック追加でエラーが出る問題を修正しました ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh
  * JSON フィールドのクイック編集時に発生するエラーを修正しました ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh
  * JSON フィールドは送信時にオブジェクトとして扱われるように修正しました ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh
  * Enter キーでフィルタを実行できない問題を修正しました。 ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust
  * 多対多リレーションのドロップダウンで複数選択を無効にした際、N/A 表示になる問題を修正しました ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh
  * データセレクタブロックで一括削除が失敗する不具合を修正しました ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh
  * コメントブロック追加時に、現在のレコードメニューが表示される問題を修正しました。 ([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust
  * フィルタ操作で日付フィールドを時間フィールドに切り替えた後、描画時にエラーが発生する問題を修正しました。 ([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust
  * 編集・新規作成モーダルのデフォルトタイトルが誤っている問題を修正しました。 ([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust
  * 詳細ブロック内の JS フィールドで、デフォルトスタイルが正しく適用されない問題を修正しました。 ([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust
  * サブテーブルの列幅設定が反映されない不具合を修正しました ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh
  * サブテーブルの列ドラッグ操作が機能しない問題を修正しました ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh
  * リレーションフィールド経由で開いたモーダル内で、現在のレコード変数が正しく解釈されない問題を修正しました。 ([#8019](https://github.com/nocobase/nocobase/pull/8019)) by @gchust
  * Markdown フィールドの Popover 表示に関するスタイル不具合を修正しました ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh
  * モーダル内でのリレーションデータ読み込み時のエラーを解消し、表示と操作の安定性を向上させました。 ([#7985](https://github.com/nocobase/nocobase/pull/7985)) by @gchust
  * ツリーテーブルで子ノードを展開できない問題を修正しました ([#8011](https://github.com/nocobase/nocobase/pull/8011)) by @katherinehhh
  * 複合主キーのテーブルで、行の選択や削除ができない不具合を修正しました ([#7978](https://github.com/nocobase/nocobase/pull/7978)) by @katherinehhh
  * ページ遷移時に、タブの状態とルーティングが一致しない問題を修正しました ([#7991](https://github.com/nocobase/nocobase/pull/7991)) by @zhangzhonghe
  * Markdown フィールドを HTML モードで表示した際、はみ出し時の省略表示が正しく動作しない問題を修正しました ([#7994](https://github.com/nocobase/nocobase/pull/7994)) by @katherinehhh
  * カスケードセレクタで検索結果が一部欠ける問題を修正しました ([#7990](https://github.com/nocobase/nocobase/pull/7990)) by @katherinehhh
  * id 以外のリレーションフィールド使用時に、詳細モーダルが開けない問題を修正しました。 ([#7973](https://github.com/nocobase/nocobase/pull/7973)) by @gchust
  * id 以外のリレーションフィールドを使ったモーダルで、関連データが正しく読み込まれない問題を修正しました。 ([#7970](https://github.com/nocobase/nocobase/pull/7970)) by @gchust
  * 数値フィールドのフォーマット精度設定が反映されない問題を修正しました ([#7967](https://github.com/nocobase/nocobase/pull/7967)) by @katherinehhh
  * フィルタのリセット操作で値がクリアされない不具合を修正しました ([#7966](https://github.com/nocobase/nocobase/pull/7966)) by @zhangzhonghe
  * 新規作成した 2.0 ページのタイプ設定が誤っている問題を修正しました ([#7945](https://github.com/nocobase/nocobase/pull/7945)) by @zhangzhonghe
  * 詳細ブロック内のテキストフィールドで、内容が幅を超えた場合は自動的に改行されるようにしました ([#7955](https://github.com/nocobase/nocobase/pull/7955)) by @katherinehhh
  * 多段カスケードセレクタで値をクリアした際に発生するエラーを修正しました ([#7943](https://github.com/nocobase/nocobase/pull/7943)) by @katherinehhh
  * ツリーテーブル用ボタンが、通常のブロックに表示されてしまう問題を修正しました ([#7931](https://github.com/nocobase/nocobase/pull/7931)) by @katherinehhh
  * JS ブロック内でタイトルや説明が表示されない問題を修正しました。 ([#7913](https://github.com/nocobase/nocobase/pull/7913)) by @gchust
  * ブロックを非表示にしても、ページ上に余白が残る問題を修正しました。 ([#7906](https://github.com/nocobase/nocobase/pull/7906)) by @gchust
  * フィルタボタンのリセット操作で、デフォルト条件まで消えてしまう問題を修正しました ([#7903](https://github.com/nocobase/nocobase/pull/7903)) by @zhangzhonghe
  * 新規作成フォームのサブフォームにおける権限判定の誤りを修正しました ([#7902](https://github.com/nocobase/nocobase/pull/7902)) by @katherinehhh
  * フォームフィールド設定に関する不具合を修正しました ([#7867](https://github.com/nocobase/nocobase/pull/7867)) by @katherinehhh
  * リッチテキストフィールドでデフォルト値を入力できない問題、および複数選択フィールドで複数のデフォルト値を設定できない問題を修正しました。 ([#7864](https://github.com/nocobase/nocobase/pull/7864)) by @gchust
  * デフォルトの JS フィールド設定で、表示モードが反映されない問題を修正しました。 ([#7862](https://github.com/nocobase/nocobase/pull/7862)) by @gchust
  * フィルタフォームの日付フィールドで、デフォルト値を正しく設定できない問題を修正しました。 ([#7853](https://github.com/nocobase/nocobase/pull/7853)) by @gchust
  * テーブルのクイック編集操作で、データが正しく更新されない問題を修正しました。 ([#7845](https://github.com/nocobase/nocobase/pull/7845)) by @gchust
  * コードエディタで JSX 構文を含むコードをプレビューするとエラーになる問題を修正しました ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust
  * 行データ更新後に、行操作ボタンの連動ルールが再評価されない問題を修正しました。データ変更時に正しく再適用されます。 ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust
  * フィルタフォームのリレーションフィールドで「value.replace is not a function」エラーが発生する問題を修正しました ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe
  * 現在のデータテーブル変数が、フィルタの変数セレクタから選択できてしまう問題を修正しました ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust
  * onChange コールバックの引数が誤って渡される不具合を修正しました ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe
  * テーブルブロックの操作列を非表示にできない問題を修正しました ([#7804](https://github.com/nocobase/nocobase/pull/7804)) by @gchust
  * データテーブルセレクタで、データを正しく選択できない問題を修正しました ([#7794](https://github.com/nocobase/nocobase/pull/7794)) by @katherinehhh
  * AI エージェントの指示内で、変数オブジェクト全体を選択できるようにしました ([#7791](https://github.com/nocobase/nocobase/pull/7791)) by @gchust
  * テーブル操作列および jsColumn の列幅設定が反映されない不具合を修正しました ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh
  * ページのイベントフロー設定で、ページブロックのデータ範囲が反映されない不具合を修正しました ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust
  * リレーションフィールドのタイトル項目で、省略表示が正しく機能しない問題を修正しました ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh
  * レコード更新ボタンに設定した連動ルールが無効になる問題を修正しました ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust
  * Markdown Vditor フィールドの必須チェックが失敗する不具合を修正しました ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh
  * 変数関連コンポーネントで、列挙型ラベルが正しい言語で表示されない問題を修正しました。 ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust
  * フィールド検証と必須設定を併用した際、必須マークが表示されない不具合を修正しました ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh
  * フィルタフォームのリレーションフィールドで、データ範囲を設定できるようにしました ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe
  * 非タイムゾーン日付フィールドで、値をクリアした際の挙動を修正しました ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh
  * 連動ルールで指定した必須フィールドが正しく機能しない問題を修正しました ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe
  * サブテーブルの時間フィールドで、表示フォーマットが誤る問題を修正しました ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh
  * フィルタフォームの日付フィールドで「指定日」を削除した際に Invalid Date になる問題を修正しました ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh
  * 現在のフォーム変数フィールドを読み込めない不具合を修正しました ([#7745](https://github.com/nocobase/nocobase/pull/7745)) by @gchust
  * 変数の解析結果が配列の場合に、それを「対一」フィールドの値や初期値として設定するとエラーになる問題を修正しました ([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust
  * フォーム内の関連フィールド変数が正しく認識されない問題を修正しました ([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust
  * フィルタ不可のフィールドが誤って選択肢に表示される問題を修正し、使用可能なフィールドのみを表示するようにしました ([#7700](https://github.com/nocobase/nocobase/pull/7700)) by @gchust
  * リレーションフィールド削除後に UI ブロック表示が崩れる不具合を修正しました ([#7706](https://github.com/nocobase/nocobase/pull/7706)) by @katherinehhh
  * サブフォームの連動ルールに関する既知の不具合を修正しました ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe
  * フィルタフォーム内の JS ブロックフィールドが読み込まれない問題を修正しました ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust
  * フィールドが読み取り専用の場合でも、デフォルト値を設定できるように修正しました ([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust
  * モーダル内でタブを切り替えた後にすべてのモーダルを閉じると、URL が正しく更新されない問題を修正しました ([#7630](https://github.com/nocobase/nocobase/pull/7630)) by @gchust
  * usePlugin にコンテキストが存在しない場合のエラーを修正しました ([#7627](https://github.com/nocobase/nocobase/pull/7627)) by @chenos
  * テーブルのページ切り替え時に表示が崩れる問題を修正しました ([#7572](https://github.com/nocobase/nocobase/pull/7572)) by @zhangzhonghe
  * 「一括更新」「更新」操作で、代入フィールドを設定できない問題を修正しました ([#7565](https://github.com/nocobase/nocobase/pull/7565)) by @gchust
  * フォーム送信後にデータが更新されない不具合を修正しました ([#7560](https://github.com/nocobase/nocobase/pull/7560)) by @zhangzhonghe
  * コードエディタの「実行」機能が動作しない問題を修正しました ([#7547](https://github.com/nocobase/nocobase/pull/7547)) by @gchust
* **[flow-engine]**

  * フィルタ操作時のフィールド選択ボックスが低すぎる問題を修正しました ([#8288](https://github.com/nocobase/nocobase/pull/8288)) by @gchust
  * モーダル内のタブ内容が表示されない不具合を修正しました ([#8281](https://github.com/nocobase/nocobase/pull/8281)) by @zhangzhonghe
  * 子ページを開いた際に親ページがアンマウントされ、不要な再描画が発生する問題を修正しました ([#8276](https://github.com/nocobase/nocobase/pull/8276)) by @zhangzhonghe
  * ツリーテーブルで子レコード追加時の権限判定誤りを修正しました ([#8240](https://github.com/nocobase/nocobase/pull/8240)) by @katherinehhh
  * 一部ブロックのモーダルで、レコード関連変数が誤って表示される問題を修正しました ([#8060](https://github.com/nocobase/nocobase/pull/8060)) by @gchust
  * 操作やタブをドラッグ後、新規追加した項目が表示されない問題を修正しました ([#8224](https://github.com/nocobase/nocobase/pull/8224)) by @gchust
  * 外部データソースの権限判定に関する不具合を修正しました ([#8221](https://github.com/nocobase/nocobase/pull/8221)) by @katherinehhh
  * 権限がある外部データソース操作が非表示になる問題を修正しました ([#8217](https://github.com/nocobase/nocobase/pull/8217)) by @katherinehhh
  * モーダル UID 再利用時、フォーム送信後にデータが更新されない問題を修正しました ([#8202](https://github.com/nocobase/nocobase/pull/8202)) by @gchust
  * 添付ファイルのダウンロードエラーを修正しました ([#8154](https://github.com/nocobase/nocobase/pull/8154)) by @katherinehhh
  * integer 型を選択肢として使用した際の変換不具合を修正しました ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos
  * toggleable サブモデルで useModel 未指定時に切り替えできない問題を修正しました ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe
  * フィールドコンポーネント切り替え後も旧設定が残る問題を修正しました ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust
  * useEffect の実行位置を FlowModelRenderer 内で調整しました ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe
  * フィルタ操作で未対応のリレーションフィールドが表示される問題を修正しました ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust
  * コメント編集後に保存されない問題を修正しました ([#8035](https://github.com/nocobase/nocobase/pull/8035)) by @katherinehhh
  * モーダル内でフォーム送信後、ブロックデータが更新されない問題を修正しました ([#8021](https://github.com/nocobase/nocobase/pull/8021)) by @gchust
  * 詳細ブロックで現在レコード変数の解析が正しく行われない問題を修正しました ([#8004](https://github.com/nocobase/nocobase/pull/8004)) by @gchust
  * 詳細ブロックのボタンツールバーで、アイコン位置がずれる問題を修正しました ([#7929](https://github.com/nocobase/nocobase/pull/7929)) by @zhangzhonghe
  * テーブルのクイック編集フォーム表示時のエラーを修正しました ([#7923](https://github.com/nocobase/nocobase/pull/7923)) by @gchust
  * 再ログイン後に ACL 権限データが再読み込みされない問題を修正しました ([#7874](https://github.com/nocobase/nocobase/pull/7874)) by @gchust
  * イベントフロー変更後、即時反映されない問題を修正しました ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust
  * UI でサブフォームの関連フィールドを変更した際、変数が正しく解析されない問題を修正しました ([#7799](https://github.com/nocobase/nocobase/pull/7799)) by @gchust
  * 複数主キーの編集フォームで発生するエラーを修正しました ([#7798](https://github.com/nocobase/nocobase/pull/7798)) by @gchust
  * 「ビューを開く」操作の設定が一部反映されない問題を修正しました ([#7790](https://github.com/nocobase/nocobase/pull/7790)) by @gchust
  * ページ切り替え後に行操作ボタンが更新されない問題を修正しました ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust
  * フィルタ値が false の場合に、データ範囲リクエストが不正になる問題を修正しました ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust
  * 最終ページで削除後、ページングパラメータが不正になる問題を修正しました ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh
  * サブフォームの現在オブジェクト変数で、関連フィールド値を解析できない問題を修正しました ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust
  * イベントフローのステップが設定メニューに表示される問題を修正しました ([#7723](https://github.com/nocobase/nocobase/pull/7723)) by @gchust
  * モーダル内フォームの関連フィールド・データ範囲設定で、現在モーダルレコードのコンテキスト選択が誤る問題を修正しました ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust
  * FlowModel でカスタムフローアクションを設定できない問題を修正しました ([#7666](https://github.com/nocobase/nocobase/pull/7666)) by @gchust
  * JS コードエディタでコピー・ペースト時にエラーが発生する問題を修正しました ([#7641](https://github.com/nocobase/nocobase/pull/7641)) by @gchust
  * antd コンポーネントの翻訳が反映されない問題を修正しました ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe
  * 引用ブロックで、現在のビュー関連変数を取得できない問題を修正しました ([#7620](https://github.com/nocobase/nocobase/pull/7620)) by @gchust
* **[database]**

  * 多対多リレーションのデータ取得時に、through scope 条件を適用するようにしました ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile
  * メインデータソースと外部データソースで、日付フィールドの検索結果が一致しない不具合を修正しました ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock
  * 複合ユニークキーを持つテーブルの検索で、`filterByTk` に配列を指定できるようにしました ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos
  * `runSQL` 実行前に `search_path` を設定するよう挙動を改善しました ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile
* **[cli]** license-kit が DB\_PASSWORD 未設定の環境でも動作するようにしました ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx
* **[server]**

  * 外部データソースで Snowflake ID（53bit）型フィールドを利用できるようにしました ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile
  * license-kit を最新版へ更新しました ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx
  * 引用フィールド複製時に field.targetKey の値を保持するようにしました ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos
  * 主キー移行スクリプトで発生するエラーを修正しました ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile
* **[acl]**

  * ロールが `root` の場合に `acl.can` が `null` を返す不具合を修正しました ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
  * acl.allow が想定より早く実行される問題を修正しました ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos
* **[utils]**

  * フィルタ操作時に「Invalid filter item type」エラーが出る問題を修正しました ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe
  * イベントフローで「Unrecognized operation」エラーが発生する問題を修正しました ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe
* **[操作：一括更新]** 外部データソースで一括更新が失敗する不具合を修正しました ([#8320](https://github.com/nocobase/nocobase/pull/8320)) by @gchust
* **[データ可視化]**

  * AI 円グラフのラベル表示不具合を修正し、データセットベースの円グラフに正規化オプションを追加しました。<br/>並び替えに使用できるフィールドは、選択済み項目からのみ指定できるようにしました。 ([#8309](https://github.com/nocobase/nocobase/pull/8309)) by @heziqiang
  * SQL モードで外部データソースを選択できない問題や、ロード表示・設定ロールバック時のエラーを修正しました。 ([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang
  * グラフ設定保存後に表示が更新されない不具合を修正しました ([#7920](https://github.com/nocobase/nocobase/pull/7920)) by @heziqiang
  * グラフのプレビュー時のみ SQL クエリのデバッグモードを有効にしました ([#7893](https://github.com/nocobase/nocobase/pull/7893)) by @heziqiang
  * グラフ初期化時のデータ取得に `sql:runById` を使用するようにしました ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang
  * SQL クエリ内の変数が自動展開されない問題を修正しました ([#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang
  * データリクエスト時に orders パラメータが欠落する不具合を修正しました ([#7636](https://github.com/nocobase/nocobase/pull/7636)) by @heziqiang
  * イベント登録のタイムアウトによりグラフが表示されない問題を修正しました ([#7608](https://github.com/nocobase/nocobase/pull/7608)) by @heziqiang
* **[操作：レコードインポート]**

  * インポート時にスペースの整合性チェックを行うようにしました ([#8285](https://github.com/nocobase/nocobase/pull/8285)) by @jiannx
  * エラー発生時に行番号が常に 1 と表示される問題を修正しました ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher
  * インポート後に実行される `afterCreate` イベントの完了を待機するようにしました ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
  * インポート操作で表示されるフィールド一覧の不具合を修正しました ([#7710](https://github.com/nocobase/nocobase/pull/7710)) by @katherinehhh
* **[ファイルマネージャー]**

  * AWS S3 への 5MB 超ファイルアップロード時のエラーを修正しました ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher
  * OSS 上の `.txt` ファイルプレビューで中国語が文字化けする問題を修正しました ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
  * List／Grid Card ブロックで子詳細データが正しく表示されない問題を修正しました ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh
  * 閲覧モードのサブテーブルで Attachment フィールドが読み込まれない不具合を修正しました ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh
  * 添付ファイルフィールドで、指定したストレージが使用されない問題を修正しました ([#7947](https://github.com/nocobase/nocobase/pull/7947)) by @katherinehhh
  * テーブルブロックのフィールド設定に関する不具合を修正しました ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh
* **[非同期タスクマネージャー]**

  * バックグラウンドタスクのキャンセル時に表示される文言を修正しました ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher
* **[ワークフロー]**

  * 外部データソースを更新した後、紐づくデータテーブルイベントが動作しなくなる問題を修正しました ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock
  * メイン以外のワークフローバージョン削除時に発生するエラーを修正しました ([#8203](https://github.com/nocobase/nocobase/pull/8203)) by @mytharcher
  * 手動実行時にデータ選択コンポーネントの一覧が途中までしか表示されない問題を修正しました ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
  * ワークフロー連携ボタンの設定で、追加操作後に画面が固まる問題を修正しました ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher
* **[UI テンプレート]**

  * 旧モーダルをテンプレート化した際、正しく再利用できないケースを修正しました。 ([#8283](https://github.com/nocobase/nocobase/pull/8283)) by @gchust
  * フィールドテンプレートに連動ルールやレイアウトが反映されない問題を修正しました。 ([#8266](https://github.com/nocobase/nocobase/pull/8266)) by @gchust
  * リレーションフィールドのモーダルで、誤ったテンプレートが適用されエラーになる問題を修正しました。 ([#8233](https://github.com/nocobase/nocobase/pull/8233)) by @gchust
* **[データテーブル：ツリー]** ツリー型テーブルでノードを一括作成した後、パス情報が正しく更新されるようにしました ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile
* **[AI 従業員]**

  * LLM ノードのメッセージが画面に表示されない不具合を修正しました ([#8257](https://github.com/nocobase/nocobase/pull/8257)) by @heziqiang
  * AI チャット履歴のテキストが改行されない問題を修正しました ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang
  * AI にデータソースを追加した際、ロール名が正しく反映されない問題を修正しました ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang
  * 現在のレコードに関する一部フィールドが、変数選択リストに表示されない問題を修正しました。 ([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust
  * AI 従業員が生成する SQL に異常な内容が含まれる問題を修正しました ([#7956](https://github.com/nocobase/nocobase/pull/7956)) by @heziqiang
  * v1 ページでは AI 従業員のチャットボタンを非表示にしました ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock
  * Gemini の Web Search の処理ロジックとプロンプトを改善しました ([#7720](https://github.com/nocobase/nocobase/pull/7720)) by @cgyrock
  * API リソースを含むブロック選択時に、関連データを正しく取得できない問題を修正しました。 ([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock
  * モバイル画面で AI 従業員のチャット UI が崩れる問題を修正しました ([#7591](https://github.com/nocobase/nocobase/pull/7591)) by @cgyrock
  * chatGPT-4o 利用時に AI 従業員のモデリング機能が正常に動作しない問題を修正しました。 ([#7566](https://github.com/nocobase/nocobase/pull/7566)) by @cgyrock
  * AI 従業員の権限設定画面で発生するエラーを修正しました ([#7548](https://github.com/nocobase/nocobase/pull/7548)) by @2013xile
* **[ワークフロー：手動処理ノード]**

  * 削除済みワークフローの実行計画をキャンセルする際のエラーを修正しました ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher
  * 手動タスク一覧で誤った API が使用されていた問題を修正しました ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
* **[データテーブルフィールド：自動採番]**

  * repair コマンド実行時、存在しないコレクションでエラーになる問題を修正しました ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock
  * repair 処理時の sequence フィールドプラグインの安定性を向上させました ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
* **[部門]** 集約検索でユーザーを正しく特定できない問題を修正しました ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile
* **[データテーブルフィールド：多対多（配列）]** Snowflake ID（53bit）使用時に多対多（配列）フィールドを作成できない問題を修正しました ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile
* **[ライセンス設定]**

  * ライセンスプラグインの表示不具合を修正しました ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx
  * plugin-license のビルドエラーを修正しました ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  * ライセンス周りを改善し、案内メッセージを追加しました ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
* **[データテーブルフィールド：数式]**

  * BigInt フィールドを詳細・フォームブロックに追加できない問題を修正しました ([#8201](https://github.com/nocobase/nocobase/pull/8201)) by @katherinehhh
  * フィルタ操作やフィルタフォームで、数式フィールドに値を入力できない問題を修正しました。 ([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust
  * 数式フィールドをフィルタフォームに追加できない問題を修正しました。 ([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust
* **[ブロック：マップ]** メニュー切り替え後にマップのズーム表示が正しくならない問題を修正しました ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh
* **[通知：メール]** メール通知の接続制限に関する不具合を修正しました ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx
* **[ブロック：操作パネル]** 操作パネルの List レイアウト間隔を最適化しました ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh
* **[データソース管理]** 外部データソースのパスワード更新時に発生するエラーを修正しました ([#8024](https://github.com/nocobase/nocobase/pull/8024)) by @cgyrock
* **[操作：レコードエクスポート]**

  * エクスポート対象フィールド一覧にシステムフィールドが含まれない問題を修正しました ([#8002](https://github.com/nocobase/nocobase/pull/8002)) by @katherinehhh
  * エクスポートボタン内のフィールド一覧表示不具合を修正しました ([#7714](https://github.com/nocobase/nocobase/pull/7714)) by @katherinehhh
* **[フロントエンドフローエンジン]**

  * レコード本体とフィールドを同時に参照した場合でも、常に完全なレコードが取得されるよう、変数解析を修正しました ([#7917](https://github.com/nocobase/nocobase/pull/7917)) by @gchust
  * 連動ルールでの変数代入時に、値が正しく解析されない問題を修正しました ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust
  * 親モーダル内でレコード変数が正しく解析されない不具合を修正しました ([#7637](https://github.com/nocobase/nocobase/pull/7637)) by @gchust
* **[マルチアプリケーションマネージャー（廃止）]**

  * 子アプリ停止時に同期通知を送信し、他ノードでも該当アプリが停止されるようにしました ([#7849](https://github.com/nocobase/nocobase/pull/7849)) by @2013xile
  * 子アプリケーションの状態に関するテレメトリ指標が正しく収集されない問題を修正しました ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile
  * 旧マルチアプリ管理を無効化できない不具合を修正しました ([#7633](https://github.com/nocobase/nocobase/pull/7633)) by @jiannx
  * データ移行前のフロントエンド側ポート検証ロジックを修正しました ([#7540](https://github.com/nocobase/nocobase/pull/7540)) by @jiannx
* **[ブロック：グリッドカード]** リストブロックとグリッドカードブロックで同一レコードが表示される問題を修正しました ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh
* **[ブロック：テンプレート（廃止）]** モーダルの開閉時に不要なテンプレートリクエストが発生する問題を修正しました ([#7561](https://github.com/nocobase/nocobase/pull/7561)) by @gchust
* **[操作：レコードエクスポート Pro]** 添付ファイルのエクスポートで「レコードごとにフォルダを作成」オプションが反映されない不具合を修正しました by @katherinehhh
* **[データソース：外部 PostgreSQL]** 外部データソース更新後に、関連するデータテーブルイベントが無効になる問題を修正しました by @cgyrock
* **[操作：レコードインポート Pro]**

  * ユニークフィールドが null の場合に正しくエラーとなるよう、重複チェック処理を修正しました by @mytharcher
  * アップロード時に変更したインポートオプションが反映されない問題を修正しました by @katherinehhh
  * インポート Pro のフィールド一覧表示不具合を修正しました by @katherinehhh
* **[データテーブル：外部データ接続（FDW）]**

  * 大文字テーブル名使用時のトリガーエラーを修正しました by @2013xile
  * 大文字テーブル名でのデータ読み込み失敗を修正しました by @2013xile
* **[データソース：外部 SQL Server]**`encrypt` および `trustServerCertificate` オプションが利用できない問題を修正しました by @2013xile
* **[マルチスペース]**

  * モバイル環境でのスペース切り替えに対応しました by @jiannx
  * システムテーブルで不正にフィールドを作成できる問題を修正しました by @jiannx
  * マルチスペース環境でのユーザー関連付け不具合を修正しました by @jiannx
* **[HTTP リクエスト暗号化]** qs 配列の解析形式を brackets に統一しました by @chenos
* **[コメント]**

  * コメントブロックでレコード削除に失敗する不具合を修正しました by @katherinehhh
  * コメント引用が機能しない問題を修正しました by @katherinehhh
  * コメント対象外テーブルでコメントブロックを使用した場合、注意メッセージを表示するようにしました by @katherinehhh
* **[テンプレート印刷]**

  * 詳細ブロックの印刷ボタンで発生するエラーを修正しました by @katherinehhh
  * テーブル行の印刷操作でテンプレート追加に失敗する問題を修正しました by @katherinehhh
  * 外部データソースに未対応だった印刷リクエストを修正しました by @katherinehhh
* **[マルチアプリケーション]**

  * マルチアプリプロキシでキャッシュをサポートしました by @jiannx
  * データ移行時に hooks が実行されないようにしました by @jiannx
* **[plugin-demo-platform]** デモ環境でアプリケーションを自動終了できるようにしました by @jiannx
* **[データソース：外部 Oracle]** 外部データソース更新後に関連イベントが無効になる問題を修正しました by @cgyrock
* **[ワークフロー：承認]**

  * 無関係な承認待ちタスクの状態が誤って変更される問題を修正しました by @mytharcher
  * 承認処理時にリレーションフィールドで不要なデータが作成される問題を修正しました by @mytharcher
  * 同一トランザクションの重複ロールバックを防止しました by @mytharcher
  * ワークフロー削除後の実行計画キャンセル時エラーを修正しました by @mytharcher
  * 承認フォーム送信時に入力内容が消える問題を修正しました by @mytharcher
  * 多対多リレーションフィールドで不要なデータが生成される問題を修正しました by @mytharcher
  * 承認情報ブロック作成時のエラーを修正しました by @mytharcher
* **[メール管理]**

  * 異常データに対するフォールバック処理を追加しました by @jiannx
  * 下書き関連の不具合を修正しました by @jiannx
  * Gmail のスケジュール状態を同期しないようにしました by @jiannx
  * ShadowHtml 更新時のエラーを修正しました by @jiannx
  * メールの親ノード ID を修正できるようにしました by @jiannx
* **[マイグレーション管理]**

  * マイグレーション時に改行が失われる問題を修正しました by @cgyrock
  * マイグレーション説明が失われる問題を修正し、現在時刻をデフォルト説明として設定しました by @cgyrock
