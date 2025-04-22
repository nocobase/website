### 🎉 新機能

* **[クライアント]**
  * 日付フィールドコンポーネントに日付制限範囲を追加しました ([#5852](https://github.com/nocobase/nocobase/pull/5852)) by @Cyx649312038
  * サブテーブルの追加および選択ボタンに対してテキスト、アイコン、タイプの設定をサポートしました ([#5778](https://github.com/nocobase/nocobase/pull/5778)) by @katherinehhh
  * readPrettyフィールドでリンクを開くポップアップを有効にすることをサポートしました ([#5747](https://github.com/nocobase/nocobase/pull/5747)) by @katherinehhh
  * 関連ブロックで関連付けおよび関連解除アクションをサポートしました ([#5695](https://github.com/nocobase/nocobase/pull/5695)) by @katherinehhh
* **[サーバー]** 監査マネージャーを追加しました ([#5601](https://github.com/nocobase/nocobase/pull/5601)) by @chenzhizdt
* **[ワークフロー]**
  * ランダムな文字パターンを追加しました ([#5959](https://github.com/nocobase/nocobase/pull/5959)) by @kennnnnnnnnn
  * ワークフローのスタック制限設定を追加しました ([#6077](https://github.com/nocobase/nocobase/pull/6077)) by @citlalinda
  * 手動でワークフローをトリガーすることをサポートしました ([#5664](https://github.com/nocobase/nocobase/pull/5664)) by @mytharcher
* **[モバイル]** モバイルの全ての戻るボタンを制御するグローバルスイッチを追加しました（デフォルトで有効） ([#5868](https://github.com/nocobase/nocobase/pull/5868)) by @katherinehhh
* **[カレンダー]** カレンダープラグインにイベントオープニングモードを追加しました ([#5808](https://github.com/nocobase/nocobase/pull/5808)) by @Cyx649312038
* **[コレクション: ツリー]** ツリーテーブルブロックで子ノードをフィルタリングできるようにしました ([#4770](https://github.com/nocobase/nocobase/pull/4770)) by @jimmy201602
* **[ワークフロー: 事前アクションイベント]** 手動でワークフローをトリガーすることをサポートしました by @mytharcher
* **[Redis pub subアダプター]** Redis同期アダプタープラグインを追加しました by @mytharcher

### 🚀 改善

* **[クライアント]**
  * 関連ボタンから連携ルールを削除しました ([#6016](https://github.com/nocobase/nocobase/pull/6016)) by @katherinehhh
  * テーブル行のスケルトンコンポーネントを削除しました ([#5751](https://github.com/nocobase/nocobase/pull/5751)) by @zhangzhonghe
  * パフォーマンス向上のためにuseMenuSearchの再帰ロジックを最適化しました ([#5784](https://github.com/nocobase/nocobase/pull/5784)) by @katherinehhh
  * テーブルのページネーションを切り替える際にパフォーマンスを向上させるためにFormilyコンポーネントをテーブルから削除しました ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe
  * ページレンダリングのパフォーマンスを向上させ、ページのキープアライブ機能をサポートしました ([#5515](https://github.com/nocobase/nocobase/pull/5515)) by @zhangzhonghe
  * フロントエンドコンポーネントのオンデマンドロードを実装しました ([#5647](https://github.com/nocobase/nocobase/pull/5647)) by @gchust
* **[通知: メール]** package.jsonの通知プラグインにホームページリンクを追加しました ([#6150](https://github.com/nocobase/nocobase/pull/6150)) by @sheldon66
* **[ワークフロー: ループノード]** スタイルを修正しました ([#6095](https://github.com/nocobase/nocobase/pull/6095)) by @mytharcher
* **[ファイルマネージャー]** 他のストレージプラグインをサポートしました ([#6096](https://github.com/nocobase/nocobase/pull/6096)) by @jiannx 参考: [File Storage: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
* **[ワークフロー: テストキット]** ワークフローキャンバスのスタイルを調整し、コンテンツをコンパクトにしました ([#6088](https://github.com/nocobase/nocobase/pull/6088)) by @mytharcher
* **[ワークフロー]** API名を合理的なものに変更しました ([#6082](https://github.com/nocobase/nocobase/pull/6082)) by @mytharcher
* **[データビジュアライゼーション]** チャートクエリにオフセットパラメータを追加しました ([#5911](https://github.com/nocobase/nocobase/pull/5911)) by @Albert-mah
* **[モバイル]** モバイル用に時間＆日付範囲ピッカーコンポーネントを適応させました ([#5863](https://github.com/nocobase/nocobase/pull/5863)) by @katherinehhh
* **[認証]** 監査アクションのメタデータ取得ロジックを最適化しました ([#5814](https://github.com/nocobase/nocobase/pull/5814)) by @chenzhizdt
* **[公開フォーム]** モバイル対応のためにアクションパネルと公開フォームコンポーネントを最適化しました ([#5788](https://github.com/nocobase/nocobase/pull/5788)) by @katherinehhh
* **[コレクションフィールド: ソート]** プラグインの説明を追加しました ([#5720](https://github.com/nocobase/nocobase/pull/5720)) by @mytharcher
* **[ワークフロー: カスタムアクションイベント]** 手動実行のAPIを変更しました by @mytharcher
* **[ワークフロー: JSON計算]**
  * JSON-queryノードの名前とグループを変更しました by @mytharcher
  * ノードにアイコンを追加しました by @mytharcher
* **[NocoBaseの埋め込み]** ページレンダリングのパフォーマンスを向上させました by @zhangzhonghe
* **[バックアップマネージャー]** 復元失敗時のエラーメッセージを改善しました by @gchust

### 🐛 バグ修正

* **[クライアント]**

  * ボタンの連携ルールがシーケンスの問題のために正しく機能していなかった問題を修正しました ([#6147](https://github.com/nocobase/nocobase/pull/6147)) by @zhangzhonghe
  * ブロックやフィールドを削除した後のレイアウト異常を修正しました ([#6139](https://github.com/nocobase/nocobase/pull/6139)) by @zhangzhonghe
* * 同じコレクションを持つ他のテーブルにフィルターボタンの非フィルター可能フィールド設定が影響する問題を修正しました ([#6121](https://github.com/nocobase/nocobase/pull/6121)) by @katherinehhh
  * サブ詳細の関連フィールドにデータが表示されない問題を修正しました ([#6117](https://github.com/nocobase/nocobase/pull/6117)) by @zhangzhonghe
  * ページを切り替えた後、「データ読み込みモード」が無効になる問題を修正しました ([#6115](https://github.com/nocobase/nocobase/pull/6115)) by @zhangzhonghe
  * ページを切り替えた後、関連フィールドのデフォルト値が更新されない問題を修正しました ([#6114](https://github.com/nocobase/nocobase/pull/6114)) by @zhangzhonghe
  * 易読モードで関連フィールドのデフォルト値が適用されない問題を修正しました ([#6066](https://github.com/nocobase/nocobase/pull/6066)) by @zhangzhonghe
  * ワークフローの手動ノードのフォームボタンでフィールド割り当てが無効な問題を修正しました ([#6054](https://github.com/nocobase/nocobase/pull/6054)) by @zhangzhonghe
  * フィールド有効化リンクモーダルで現在のポップアップ変数が欠落している問題を修正しました ([#6045](https://github.com/nocobase/nocobase/pull/6045)) by @katherinehhh
  * 認証チェックリクエストが完了した後、ページのレンダリングを継続しました ([#6020](https://github.com/nocobase/nocobase/pull/6020)) by @2013xile
  * テーブルの行がドラッグして並べ替えできない問題を修正しました ([#6013](https://github.com/nocobase/nocobase/pull/6013)) by @zhangzhonghe
  * iOSで空のサブテーブルが1行の空データを表示する問題を修正しました ([#5990](https://github.com/nocobase/nocobase/pull/5990)) by @zhangzhonghe
  * 関連フィールドをクリックしてもポップアップダイアログが開かない問題を修正しました ([#5972](https://github.com/nocobase/nocobase/pull/5972)) by @zhangzhonghe
  * フィルターフォーム/アクションの日付範囲ピッカーで`showTime`が設定されている場合、時間ピッカーが表示されない問題を修正しました ([#5956](https://github.com/nocobase/nocobase/pull/5956)) by @katherinehhh
  * 第三者プラグインのテーブルセルが予期しない表示になる問題を修正しました ([#5934](https://github.com/nocobase/nocobase/pull/5934)) by @zhangzhonghe
  * ブロックテンプレート管理ページで削除ボタンが無効な問題を修正しました ([#5922](https://github.com/nocobase/nocobase/pull/5922)) by @zhangzhonghe
  * サブテーブルのフィールド値が依存するフォームの連携ルールが失敗する問題を修正しました ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  * サブテーブルのページネーション後、データが変化しない問題を修正しました ([#5856](https://github.com/nocobase/nocobase/pull/5856)) by @zhangzhonghe
  * ページを切り替えた後、ブラウザタブのタイトルが更新されない問題を修正しました ([#5857](https://github.com/nocobase/nocobase/pull/5857)) by @zhangzhonghe
  * データソース管理ページでページを更新するとホームページにリダイレクトする問題を修正しました ([#5855](https://github.com/nocobase/nocobase/pull/5855)) by @zhangzhonghe
  * リファレンステンプレートの関連フィールドが有时不显示数据的问题を修正しました ([#5848](https://github.com/nocobase/nocobase/pull/5848)) by @zhangzhonghe
  * ユーザーマネージメントテーブルで役割データが表示されない問題を修正しました ([#5846](https://github.com/nocobase/nocobase/pull/5846)) by @zhangzhonghe
  * 「カスタムリクエスト」ボタンが追加された後、すぐに表示されない問題を修正しました ([#5845](https://github.com/nocobase/nocobase/pull/5845)) by @zhangzhonghe
  * ポップアップウィンドウで追加されたブロックがポップアップを再度開いたときに表示されない問題を修正しました ([#5838](https://github.com/nocobase/nocobase/pull/5838)) by @zhangzhonghe
  * 隠されたページが他のページとのインタラクションに影響を与えないようにしました ([#5836](https://github.com/nocobase/nocobase/pull/5836)) by @zhangzhonghe
  * 詳細ブロックで関連フィールドの値を変更してもすぐに更新されない問題を修正しました ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe
  * サブフォームでフィールドを追加しても表示されない問題を修正しました ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe
  * 「リンクを有効化」が初めてオンにされた場合、リンクをクリックしてもポップアップが開かない問題を修正しました ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe
  * モバイルログインがデスクトップページにリダイレクトする問題を修正しました ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe
  * 設定アクションボタンを左揃えにしました ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh
  * ポップアップを閉じる際に複数のAPI呼び出しが発生するのを防ぎました ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe
  * 第三者データソースブロックで変数が正しく使用できない問題を修正しました ([#5782](https://github.com/nocobase/nocobase/pull/5782)) by @zhangzhonghe
  * ブロックテンプレートの関連フィールドの値が空になる問題を修正しました。また、第三者データソースで変数を使用するブロックデータスコープが正しく動作しない問題を修正しました ([#5777](https://github.com/nocobase/nocobase/pull/5777)) by @zhangzhonghe
  * コンポーネントの動的プロパティが遅延ロードと組み合わせて動作しない問題を修正しました ([#5776](https://github.com/nocobase/nocobase/pull/5776)) by @gchust
  * 開発環境でフックを動的にロードする際にReactで発生する警告メッセージを修正しました ([#5758](https://github.com/nocobase/nocobase/pull/5758)) by @gchust
  * ボタンの連携ルールがシーケンスの問題のために正しく機能していなかった問題を修正しました ([#6147](https://github.com/nocobase/nocobase/pull/6147)) by @zhangzhonghe
  * ブロックやフィールドを削除した後のレイアウト異常を修正しました ([#6139](https://github.com/nocobase/nocobase/pull/6139)) by @zhangzhonghe
  * ボタンの連携ルールがシーケンスの問題のために正しく機能していなかった問題を修正しました ([#6147](https://github.com/nocobase/nocobase/pull/6147)) by @zhangzhonghe
  * ブロックやフィールドを削除した後のレイアウト異常を修正しました ([#6139](https://github.com/nocobase/nocobase/pull/6139)) by @zhangzhonghe
* **[ビルド]**

  * `APP_PUBLIC_PATH`環境変数を設定した後のロード問題を修正しました ([#5924](https://github.com/nocobase/nocobase/pull/5924)) by @gchust
  * プラグインビルド後のフロントエンドjsファイルの不適切なキャッシュを修正しました ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust
  * `create-nocobase-app`の実行後に`yarn dev`を実行するとエラーが発生する問題を修正しました ([#5708](https://github.com/nocobase/nocobase/pull/5708)) by @gchust
* **[サーバー]** ACLのデフォルトの使用可能なアクションを設定しました ([#5847](https://github.com/nocobase/nocobase/pull/5847)) by @chenos
* **[公開フォーム]** 公開フォームの`サブフォーム（ポップオーバー）`でフィールドを追加できない問題を修正しました ([#6157](https://github.com/nocobase/nocobase/pull/6157)) by @gchust
* **[コレクション: SQL]**`DB_TABLE_PREFIX`が設定されている場合、SQLコレクションのフィルタリングでエラーが発生する問題を修正しました ([#6156](https://github.com/nocobase/nocobase/pull/6156)) by @2013xile
* **[ワークフロー]**

  * "move"アクションがワークフローをトリガーするテストケースを追加しました ([#6145](https://github.com/nocobase/nocobase/pull/6145)) by @mytharcher
  * 手動で実行するワークフローで非同期ノードが再開される際に発生するエラーを修正しました ([#5877](https://github.com/nocobase/nocobase/pull/5877)) by @mytharcher
* **[ユーザーデータ同期]**

  * タスクリストで「再試行」ボタンが表示されない問題を修正しました ([#6079](https://github.com/nocobase/nocobase/pull/6079)) by @2013xile
  * 同期とタスクボタンの表示問題を修正しました ([#5896](https://github.com/nocobase/nocobase/pull/5896)) by @2013xile
* **[認証]**

  * 認証設定ページの編集ドロワーを開く際にフォームフィールドが空になる問題を修正しました ([#5949](https://github.com/nocobase/nocobase/pull/5949)) by @chenos
* **[データソース: メイン]** フィルターフォームブロックのシステムフィールドを編集できない問題を修正しました ([#5885](https://github.com/nocobase/nocobase/pull/5885)) by @zhangzhonghe
* **[クライアント]**

  * チャートブロックの初期高さを修正しました ([#5879](https://github.com/nocobase/nocobase/pull/5879)) by @2013xile
  * チャートブロックのフィルター項目が表示されない問題を修正しました ([#5769](https://github.com/nocobase/nocobase/pull/5769)) by @2013xile
  * サブページの日付コンポーネントのモバイル適応を修正しました ([#5859](https://github.com/nocobase/nocobase/pull/5859)) by @katherinehhh
  * モバイルでフィルター操作の日付入力フィールドが欠落している問題を修正しました ([#5779](https://github.com/nocobase/nocobase/pull/5779)) by @katherinehhh
* **[ワークフロー]**

  * カスタムアクショントリガーのテストケースを修正しました by @mytharcher
  * SQLiteでテストケースが失敗する問題を修正しました by @mytharcher
* **[ワークフロー: 事前アクションイベント]**

  * リクエストインターセプターのテストケースを修正しました by @mytharcher
* **[ワークフロー: レスポンスメッセージ]**

  * 使用されているパラメーター名が間違っている問題を修正しました by @mytharcher
