### 🎉 新機能

* **[クライアント]**
  * 一行テキストフィールドに複数キーワードフィルタリング機能を追加（[#6685](https://github.com/nocobase/nocobase/pull/6685)）@zhangzhonghe
    参照：[マルチキーワードフィルタ](https://pr-366.docs.nocobase.com/handbook/multi-keyword-filter)
  * アクション連携ルールに「現在のフォーム」変数のサポートを追加（[#6810](https://github.com/nocobase/nocobase/pull/6810)）@katherinehhh
* **[ビルド]** 商用認証をサポート（[#6554](https://github.com/nocobase/nocobase/pull/6554)）@jiannx
* **[未定義]** インポートプラグインのログを追加 @aaaaaajie
* **[アクション：レコードのインポート]** インポートプラグインのログを追加（[#6841](https://github.com/nocobase/nocobase/pull/6841)）@aaaaaajie
* **[plugin-commercial]** 商用機能をサポート @jiannx
* **[マルチキーワードフィルタ]** 一行テキストフィールドに複数キーワードを入力したフィルタリングをサポート @zhangzhonghe
  参照：[マルチキーワードフィルタ](https://pr-366.docs.nocobase.com/handbook/multi-keyword-filter)
* **[テンプレート印刷]**
  * テンプレート印刷に一括印刷機能を追加 @sheldon66
  * テンプレート印刷に一括印刷機能を追加 @sheldon66

### 🚀 機能改善

* **[未定義]** フル Docker イメージのビルド（[#6898](https://github.com/nocobase/nocobase/pull/6898)）@chenos
* **[クライアント]**
  * 使用に伴いページが遅くなる問題を最適化（[#6888](https://github.com/nocobase/nocobase/pull/6888)）@zhangzhonghe
  * 読み取り状態の画像により多くのビルトインサイズ設定を追加（[#6868](https://github.com/nocobase/nocobase/pull/6868)）@katherinehhh
* **[ワークフロー]**
  * 欠落していた en-US ロケールキーを全て追加（[#6885](https://github.com/nocobase/nocobase/pull/6885)）@mytharcher
  * 複数の下書きを修正可能にする（[#6851](https://github.com/nocobase/nocobase/pull/6851)）@mytharcher
* **[コレクションフィールド：添付ファイル (URL)]** 読み取り状態の添付 URL フィールドにビルトインサイズを追加（[#6871](https://github.com/nocobase/nocobase/pull/6871)）@katherinehhh
* **[Email マネージャー]**
  * 同期エラーや使いにくい問題を修正 @jiannx
  * 下書き管理機能を追加し、部下のメール閲覧をサポート @jiannx

### 🐛 不具合修正

* **[クライアント]**

  * アクションボタンの連携ルール無効化が機能しない問題（[#6896](https://github.com/nocobase/nocobase/pull/6896)）@katherinehhh
  * 最後のアイテムを削除後に正しくページ遷移しない問題（[#6892](https://github.com/nocobase/nocobase/pull/6892)）@katherinehhh
  * モーダル内のカスケードコンポーネントが初期状態で関連データを読み込まない問題（[#6886](https://github.com/nocobase/nocobase/pull/6886)）@katherinehhh
  * 関連付け済みのレコードをフィルタリングしない関連選択レコードテーブルの問題（[#6874](https://github.com/nocobase/nocobase/pull/6874)）@katherinehhh
  * サブフォーム内の関連フィールドを公開した際の関連データ未送信の問題（[#6883](https://github.com/nocobase/nocobase/pull/6883)）@katherinehhh
  * データセレクタテーブルのデータスコープに現在のフォーム変数が含まれない問題（[#6882](https://github.com/nocobase/nocobase/pull/6882)）@katherinehhh
  * ドラッグアンドドロップソートフィールドの利用可能オプションの表示エラー（[#6875](https://github.com/nocobase/nocobase/pull/6875)）@katherinehhh
  * 連携ルールで演算子が変更された際に右辺の値をクリア（[#6862](https://github.com/nocobase/nocobase/pull/6862)）@katherinehhh
  * 連携ルールで演算子を切り替えた際に演算子が表示されない問題（[#6857](https://github.com/nocobase/nocobase/pull/6857)）@katherinehhh
  * 詳細ブロック内のボタン連携の問題（[#6867](https://github.com/nocobase/nocobase/pull/6867)）@katherinehhh
  * 連携条件における日付変数の演算子評価エラー（[#6825](https://github.com/nocobase/nocobase/pull/6825)）@katherinehhh
  * 非表示フィールドが表示される問題（[#6844](https://github.com/nocobase/nocobase/pull/6844)）@zhangzhonghe
  * 二次確認の {{title}} データとの変数パースの互換性問題（[#6838](https://github.com/nocobase/nocobase/pull/6838)）@katherinehhh
  * 連携ルールの値コンポーネントのスタイル改善（[#6836](https://github.com/nocobase/nocobase/pull/6836)）@katherinehhh
* **[データベース]** フィールドインポート時の空文字列セルを処理し、エラーを防止（[#6880](https://github.com/nocobase/nocobase/pull/6880)）@aaaaaajie
* **[ビルド]** plugin-workflow-javascript のクライアントランタイムエラー、未定義エラーの処理（[#6859](https://github.com/nocobase/nocobase/pull/6859)）@jiannx
* **[ファイルマネージャー]**

  * 非画像ファイルのプレビュー URL の問題を修正（[#6889](https://github.com/nocobase/nocobase/pull/6889)）@mytharcher
  * タイプの誤りを修正（[#6873](https://github.com/nocobase/nocobase/pull/6873)）@mytharcher
  * 外部キーの許可がない状態でファイルレコードを作成する問題の修正（[#6863](https://github.com/nocobase/nocobase/pull/6863)）@mytharcher
* **[ブロック：アクションパネル]**

  * スキャナーからルートベースネームを読み取り、デスクトップ環境への適応（[#6877](https://github.com/nocobase/nocobase/pull/6877)）@sheldon66
  * ダークモードでのアクションパネルの色の不整合修正（[#6842](https://github.com/nocobase/nocobase/pull/6842)）@zhangzhonghe
* **[AI 連携]** LLM サービス設定ページと検証設定ページを切り替えた際にコンテンツが表示されない問題（[#6887](https://github.com/nocobase/nocobase/pull/6887)）@2013xile
* **[ワークフロー：手動ノード]**

  * 組み込みリストから削除されたプラグインによるテストケースの問題を修正（[#6895](https://github.com/nocobase/nocobase/pull/6895)）@mytharcher
  * 未処理アイテム表示時のレンダリングエラー修正（[#6879](https://github.com/nocobase/nocobase/pull/6879)）@mytharcher
  * タスクの統計数カウントエラーの修正（[#6783](https://github.com/nocobase/nocobase/pull/6783)）@mytharcher
* **[ワークフロー]**

  * コレクションイベントのスタック制限の誤動作修正（[#6876](https://github.com/nocobase/nocobase/pull/6876)）@mytharcher
  * タスクセンターでポップアップリンクを直接開いた際のバックナビゲーション不動作の修正（[#6853](https://github.com/nocobase/nocobase/pull/6853)）@mytharcher
* **[データ可視化]**

  * ブロックレベルアクションでトリガーされたポップアップにチャートブロックが表示されない問題（[#6864](https://github.com/nocobase/nocobase/pull/6864)）@2013xile
  * ネストされた m2m フィールドのフィルタリング時のエラー修正（[#6855](https://github.com/nocobase/nocobase/pull/6855)）@2013xile
* **[アクション：レコードのエクスポート]**

  * インポート / エクスポートフィールド設定でフィールドを削除する際のパフォーマンス改善（[#6861](https://github.com/nocobase/nocobase/pull/6861)）@katherinehhh
  * ネスト関連付けと添付 URL の空値エクスポートの修正（[#6845](https://github.com/nocobase/nocobase/pull/6845)）@aaaaaajie
* **[ブロック：テンプレート]** 継承テンプレートとして保存後、ポップアップを開いた際のエラー（[#6840](https://github.com/nocobase/nocobase/pull/6840)）@gchust
* **[アクション：レコードの複製]** 複製データの編集時に最初の入力クリックでモーダルが閉じる問題（[#6848](https://github.com/nocobase/nocobase/pull/6848)）@katherinehhh
* **[ワークフロー：テストキット]** 必須のプリセットプラグインによるテストケース失敗の修正（[#6839](https://github.com/nocobase/nocobase/pull/6839)）@mytharcher
* **[ワークフロー：後続アクションイベント]** Handlebars テンプレート内でユーザーアクション変数がアクセス不可な問題（[#6837](https://github.com/nocobase/nocobase/pull/6837)）@mytharcher
* **[plugin-commercial]**

  * 商用ログの CRM 送信とテキスト翻訳の問題を修正 @jiannx
  * 原型チェーンを使用した withCommercial 関数の実装 @jiannx
* **[アクション：レコードのエクスポート Pro]**

  * インポート / エクスポート Pro のフィールド設定でフィールドを削除する際のパフォーマンス改善 @katherinehhh
  * 長文のエクスポートエラーの修正 @aaaaaajie
* **[ワークフロー：サブフロー]** 未定義のトリガーによるページクラッシュの修正 @mytharcher
* **[テンプレート印刷]**

  * フォーマッタが見つからない問題の修正 @sheldon66
* **[ファイルストレージ: S3 (Pro)]**

  * アクセス URL の有効期限が無効な問題の修正 @jiannx
  * コレクションフィールドを使用したストレージの位置指定方法の変更 @mytharcher
* **[ワークフロー：承認]**

  * タスクの統計数カウントエラーの修正 @mytharcher
  * 代理人の割り当て範囲の修正と他の担当者への追加 @mytharcher
* **[Email マネージャー]**

  * TypeScript エラーを修正 @jiannx
  * 一覧 API で件名のマージをサポート @jiannx
* **[バックアップマネージャー]** ビルド時のタイプエラーを修正 @mytharcher
