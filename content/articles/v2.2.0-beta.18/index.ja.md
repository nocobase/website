### 🎉 新機能

* **[AI employees]** DeepSeek V4 Flash および V4 Pro Responses API のサポートを追加しました。推論の継続、ネイティブ Web 検索、引用解析、モデルレベルの Web 検索制御に対応しています。([#10337](https://github.com/nocobase/nocobase/pull/10337)) by @cgyrock
* **[マルチスペース]**
  * v1 および v2 のスペース切り替えとスペース管理に検索機能を追加しました。 by @jiannx
  * v1 および v2 のスペース切り替えとスペース管理に、スペース表示名によるデバウンス検索を追加しました。 by @jiannx
* **[メール管理]** メール同期を復旧可能なバックグラウンドタスクへ変更し、ステータス履歴とより安全な完全同期時のクリーンアップを提供するようにしました。また、Gmail の迷惑メールと削除済みメールも正しく同期対象に含まれるようになりました。 by @jiannx
* **[認証：LDAP]** LDAP ユーザー同期設定の client v2 サポートを追加しました。 by @chenzhizdt

### 🚀 機能改善

* **[undefined]**
  * LDAP および DingTalk のユーザー同期ドキュメントを改善し、サポートされているすべての言語の翻訳を追加しました。([#10382](https://github.com/nocobase/nocobase/pull/10382)) by @chenzhizdt
    参考：[DingTalk]() / [LDAP]()
  * LDAP および DingTalk のユーザーデータ同期ドキュメントを追加しました。権限設定、イベント受信モード、同期フィールド、部門責任者、トラブルシューティングについて説明しています。([#10377](https://github.com/nocobase/nocobase/pull/10377)) by @chenzhizdt
    参考：[DingTalk 同期](), [LDAP 同期]()
* **[lock-manager]** ローカルロックのリース更新機能を追加し、`tryAcquire` で取得したロックが再利用時や例外発生時にも安全に解放されるようにしました。([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx
* **[cli]**`nb api resource create` の `--values` で JSON 配列を指定し、1 回のリクエストで複数レコードを作成できるようになりました。([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
  参考：[nb api resource create]()
* **[ワークフロー]** 新しいクライアントのタスクセンターでワークフローごとのグループ表示をサポートし、各種タスクのワークフローフィルター動作を統一しました。([#10374](https://github.com/nocobase/nocobase/pull/10374)) by @mytharcher
* **[ブロック：ツリー]** ツリーフィルターブロックでデフォルトの並び順を設定できるようになりました。([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx
* **[Redis 分散ロックアダプター]** Redis ロックのリース更新機能を追加し、再利用可能なロックハンドルが競合時や例外発生時にも安全に解放されるようにしました。 by @jiannx
* **[ワークフロー：承認]** 新しいクライアントの承認タスクでワークフローごとのグループ表示をサポートし、承認タイムラインを旧版と同じ操作感にしました。 by @mytharcher
* **[DingTalk]** DingTalk の client v2 対応を拡充し、Stream 同期モード、通知設定、自動ログインの改善に対応しました。 by @chenzhizdt

### 🐛 不具合修正

* **[client-v2]**
  * リレーションフォームの値に関連レコード ID のみが含まれる場合、リレーションレコードセレクターに `N/A` と表示される問題を修正しました。([#10386](https://github.com/nocobase/nocobase/pull/10386)) by @cgyrock
  * v2 テーブルフィルターで DatePicker コンポーネントが存在しないという誤ったエラーが表示される問題を修正しました。([#10392](https://github.com/nocobase/nocobase/pull/10392)) by @katherinehhh
  * v2 テーブルフィルターを開いた際、コンソールにコンポーネント欠落の誤ったエラーが表示される問題を修正しました。([#10389](https://github.com/nocobase/nocobase/pull/10389)) by @katherinehhh
  * ワークフロー設定でフィルター条件をクリアできず、エラーが発生する問題を修正しました。([#10388](https://github.com/nocobase/nocobase/pull/10388)) by @Molunerfinn
  * Client V2 ページでレスポンスメッセージが表示されない問題を修正しました。操作前イベントから返されるエラーメッセージも対象です。([#10376](https://github.com/nocobase/nocobase/pull/10376)) by @mytharcher
  * 英語環境でモバイル端末の選択フィールドを検索した際に中国語が表示される問題を修正しました。([#10367](https://github.com/nocobase/nocobase/pull/10367)) by @zhangzhonghe
  * UI 編集モードでフィルターフォームのデータが自動更新される問題を修正しました。([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe
  * v2 フィルターフォームのツリー型リレーションフィールドで、デフォルトでカスケード選択を使用するようにしました。([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe
  * フォームフィールドの連動ルール操作で JS item が誤って一覧に表示される問題を修正しました。([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust
  * `/v` ルートでページ設定権限のないロールへ切り替えた後も、ページが編集状態のままになる問題を修正しました。([#10359](https://github.com/nocobase/nocobase/pull/10359)) by @jiannx
  * 現在の Settings タブへのアクセス権限がない場合、アクセス可能なタブへ自動的に移動するようにしました。([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe
  * モバイル端末で単一選択のリレーションフィールドにおいて、選択済みレコードを再度クリックしても選択を解除できない問題を修正しました。([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe
  * フィルターフォームに中国行政区フィールドを直接追加できない問題を修正しました。([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe
  * `ctx.form.submit` でフォームデータを正しく送信できない問題を修正しました。([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
  * 設定権限がない場合、最初にアクセス可能なページへ移動するようにしました。([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe
  * V2 フィールドで非常に大きな decimal 値を編集・表示した際に値が正しく処理されない問題を修正しました。([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh
  * v2 ブロックで使用している外部データソースが利用できない場合、ローカライズされたメッセージを表示し、再試行できるようにしました。([#10336](https://github.com/nocobase/nocobase/pull/10336)) by @katherinehhh
* **[app]** サポート対象の旧バージョンブラウザー向けに、モダン JavaScript API のランタイム Polyfill を追加しました。([#10385](https://github.com/nocobase/nocobase/pull/10385)) by @mytharcher
* **[flow-engine]** ブラウザーウィンドウの高さが低い場合に、ドロップダウンメニューの内容がすべて表示されない問題を修正しました。([#10379](https://github.com/nocobase/nocobase/pull/10379)) by @zhangzhonghe
* **[client]** 左側メニューの長いタイトルが完全に表示されない問題と、設定ツールバーの位置がずれる問題を修正しました。([#10380](https://github.com/nocobase/nocobase/pull/10380)) by @zhangzhonghe
* **[undefined]**
  * `nb plugin import` で `yarn build --tar` によりパッケージ化されたプラグインをインポートできない問題を修正し、プラグイン開発ドキュメント内の無効なサンプルコードとスキャフォールド構成の説明も修正しました。([#10351](https://github.com/nocobase/nocobase/pull/10351)) by @Molunerfinn
  * 外部データベースで選択済みデータテーブルを再読み込みした際、カスタムフィールドの表示名がリセットされる問題を修正しました。 by @cgyrock
* **[database]** データベースでアンダースコア命名を有効にした場合、キャメルケースフィールドのプレフィックスインデックス作成に失敗する問題を修正しました。([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
* **[データソース管理]** 外部データベースのデータソースを送信した場合、または選択済みデータテーブルを調整した場合に、カスタムフィールドの表示名がリセットされる問題を修正しました。([#10387](https://github.com/nocobase/nocobase/pull/10387)) by @cgyrock
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフロータスクの復旧処理で、すでに完了またはタイムアウトしたタスクが重複して実行キューに投入される問題を修正しました。([#10366](https://github.com/nocobase/nocobase/pull/10366)) by @mytharcher
* **[ワークフロー]**
  * ワークフロー実行履歴ページのタイトルを修正し、存在しないワークフローにはワークフロー一覧へのリンクを追加しました。([#10360](https://github.com/nocobase/nocobase/pull/10360)) by @mytharcher
  * トリガータイプを選択する前は、ワークフロー実行モードのオプションを無効にするようにしました。([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn
* **[通知：アプリ内メッセージ]** アプリ内メッセージテンプレートフォームで、ページから実際に提供される変数ではなくワークフローキャンバスの変数が表示される問題を修正しました。([#10180](https://github.com/nocobase/nocobase/pull/10180)) by @Molunerfinn
* **[ブロック：マップ]** マップでポイントデータを表示している際、エリア選択をダブルクリックで終了できない問題と、Amap が継続的に読み込み状態になる問題を修正しました。([#10373](https://github.com/nocobase/nocobase/pull/10373)) by @jiannx
* **[データテーブルフィールド：Markdown (Vditor)]** v2 詳細ブロックの Markdown HTML プレビューがダークテーマで正しく表示されない問題を修正しました。([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh
* **[UI レイアウト]**
  * モバイルページがデスクトップ版のナビゲーションに表示される問題を修正しました。([#10375](https://github.com/nocobase/nocobase/pull/10375)) by @zhangzhonghe
  * UI 設定権限のないロールでもモバイル UI Editor が表示される問題を修正しました。([#10341](https://github.com/nocobase/nocobase/pull/10341)) by @zhangzhonghe
* **[AI employees]**
  * AI 添付ファイルのオーバーレイにより、V2 Import でファイルをドラッグ＆ドロップしてアップロードできない問題を修正しました。([#10384](https://github.com/nocobase/nocobase/pull/10384)) by @katherinehhh
  * AI employee が長いレスポンスをストリーミング出力している際、他のアイドル状態のブラウザータブでメモリ使用量が数 GB まで急増する問題を修正しました。([#10352](https://github.com/nocobase/nocobase/pull/10352)) by @cgyrock
* **[ワークフロー：JSON 計算]** JSON クエリタスクで構造化された解析エラーが失われ、`[object Object]` と表示される問題を修正しました。([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher
* **[ユーザー]**
  * V2 でユーザーの新規作成またはパスワード変更に失敗した場合、バックエンドから返されたエラー情報を表示するようにしました。([#10364](https://github.com/nocobase/nocobase/pull/10364)) by @katherinehhh
  * UI 編集モードでフォームを送信した際、必須フィールドの検証がスキップされる可能性がある問題を修正しました。([#10371](https://github.com/nocobase/nocobase/pull/10371)) by @jiannx
* **[ファイルマネージャー]**
  * 単一値フィールドで既存ファイルを選択した際に、追加の送信操作が必要になる問題を修正しました。([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe
  * サブアプリ内の Logo など、ローカルストレージに保存されたファイルが安定 URL へのリダイレクト後に読み込めなくなる問題を修正しました。([#10358](https://github.com/nocobase/nocobase/pull/10358)) by @mytharcher
  * ファイルを切り替えた際に動画プレビューの内容が更新されない問題を修正しました。([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher
* **[操作：レコードインポート]** v2 インポートポップアップにファイルをドラッグしてもインポートできない問題を修正しました。([#10350](https://github.com/nocobase/nocobase/pull/10350)) by @katherinehhh
* **[操作：印刷]** V1 ページで印刷操作モデルが登録されていない問題を修正しました。([#10347](https://github.com/nocobase/nocobase/pull/10347)) by @katherinehhh
* **[ブロック：ツリー]** ツリーフィルターフィールドの権限と関連ツリーテーブルの展開状態を修正し、詳細ブロックでフィルター適用後の総ページ数も修正しました。([#10361](https://github.com/nocobase/nocobase/pull/10361)) by @jiannx
* **[検証]** Verification リストに更新ボタンを追加しました。([#10340](https://github.com/nocobase/nocobase/pull/10340)) by @zhangzhonghe
* **[ブロック：Kanban]** Kanban カードの詳細ドロワーを再度開いた際に、設定済みの内容が失われる問題を修正しました。([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx
* **[操作：レコードエクスポート]**
  * 複数のリレーションフィールドで絞り込んだ後にテーブルをエクスポートするとエラーが発生する問題を修正しました。([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe
  * Export V2 でリレーションフィールドを調整した後、ドラッグ＆ドロップで並び替えるとページがクラッシュする問題を修正しました。([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh
* **[通知管理]** 言語レコードが保存されていない場合に翻訳テストページでエラーが発生する問題を修正し、新しい通知チャネル追加時にチャネル識別子をカスタマイズできるようにしました。([#10311](https://github.com/nocobase/nocobase/pull/10311)) by @jiannx
* **[操作：レコード複製]** v2 の直接複製に失敗した際のメッセージを改善し、API エラー情報が重複表示されないようにしました。([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
* **[データソース：外部 PostgreSQL]** client v2 で外部リレーショナルデータソースを編集した際、データテーブルが自動的に読み込まれない問題を修正しました。 by @katherinehhh
* **[データテーブルフィールド：暗号化]** 暗号化フィールドを含むコレクションを一括インポートした際に `model.changed is not a function` エラーが発生する問題を修正しました。 by @cgyrock
* **[操作：レコードエクスポート Pro]** Export Pro プラグインを有効にした状態で複雑なフィルター条件を使用すると、エクスポート時にエラーが発生する問題を修正しました。 by @zhangzhonghe
* **[操作：レコードインポート Pro]**
  * 非同期インポートでフィールドのインポート権限が適用されない問題を修正しました。 by @mytharcher
  * 非同期インポートされたレコードが現在のスペースに関連付けられない問題を修正しました。 by @jiannx
  * インポート結果の統計文言を改善し、新規作成レコード数と更新レコード数を明確に区別するようにしました。 by @mytharcher
* **[ワークフロー：Webhook トリガー]** リクエストヘッダーを入力せずに Webhook ワークフローを手動実行すると 400 エラーが返される問題を修正しました。 by @mytharcher
* **[履歴]** 大規模なスナップショットテーブルを使用する環境で、履歴レコードの書き込み性能を改善しました。 by @2013xile
* **[ワークフロー：承認]**
  * 承認フローで任意の上位承認ノードへの差し戻しを設定していても、実際には直前の上位ノードにしか差し戻せない問題を修正しました。 by @mytharcher
  * Client V2 の承認関連ブロックにデータ範囲フィルターを追加しました。 by @zhangzhonghe
  * 関連する承認ブロックが取り消しまたは差し戻し後に更新されない問題を修正しました。 by @zhangzhonghe
  * 新しいタスクセンターで設定異常のある承認ワークフローを無効化し、設定エラーのメッセージを表示するようにしました。 by @mytharcher
  * 承認詳細のサブテーブル列幅が申請フォームと一致しない問題を修正しました。 by @zhangzhonghe
  * 関連する承認ブロックを Client V2 のデータ詳細ページで読み込めない問題を修正しました。 by @mytharcher
* **[監査ログ]** V2 監査ログの Role 列に元の翻訳式がそのまま表示される問題を修正しました。 by @katherinehhh
* **[アプリケーション監督]** 監督対象アプリケーションの作成時に発生する Kingbase データベース接続の問題を修正しました。 by @2013xile
