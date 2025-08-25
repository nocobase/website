### 🎉 新機能

* **[クライアント]** フィールド検証ルールをサポート（[#7297](https://github.com/nocobase/nocobase/pull/7297)）@aaaaaajie
* **[ワークフロー：承認]**
  * 通知設定にインラインテンプレートタイプを追加 @mytharcher
  * 同一ワークフロー内のすべての承認ノードで一貫したタスクタイトルを使用できるようサポート @mytharcher

### 🚀 機能改善

* **[データベース]** ACL メタクエリのパフォーマンスを最適化（[#7400](https://github.com/nocobase/nocobase/pull/7400)）@aaaaaajie
* **[クライアント]** 読み取り専用モード時、Select コンポーネントで文字列で指定されたアイコンを表示する機能をサポート（[#7420](https://github.com/nocobase/nocobase/pull/7420)）@mytharcher
* **[モバイル]** モバイル端末のポップアップコンポーネントを最適化（[#7414](https://github.com/nocobase/nocobase/pull/7414)）@zhangzhonghe
* **[ワークフロー]** ノード選択メニューを更新し、2 カラムレイアウトでオプションを表示するようにした。情報密度を高め、ユーザーが一度に更多のオプションを確認できるように（[#7396](https://github.com/nocobase/nocobase/pull/7396)）@mytharcher
* **[ライセンス設定]** ライセンス設定では、毎回最新のインスタンス ID をコピーするように（[#7387](https://github.com/nocobase/nocobase/pull/7387)）@jiannx
* **[通知：アプリ内メッセージ]** `console.log`による SQL ログ出力を削除（[#7368](https://github.com/nocobase/nocobase/pull/7368)）@2013xile
* **[認証]** ログイン成功後、URL からトークンパラメータを削除（[#7386](https://github.com/nocobase/nocobase/pull/7386)）@2013xile
* **[テンプレート印刷]** フィールドの多対多（m2m）配列をサポート @jiannx

### 🐛 不具合修正

* **[データベース]** Postgres 外部テーブル読み取り時に、他のスキーマのビューが含まれる問題を修正（[#7410](https://github.com/nocobase/nocobase/pull/7410)）@aaaaaajie
* **[クライアント]**
  * 連動ルールの空値検証時に数値 0 を空として扱う（[#7404](https://github.com/nocobase/nocobase/pull/7404)）@katherinehhh
  * 「列設定」ボタンがモーダルダイアログ内のテーブルから列を読み込む問題を修正（[#7385](https://github.com/nocobase/nocobase/pull/7385)）@kerwin612
  * リンクボタンのテキストが改行される問題を修正（[#7406](https://github.com/nocobase/nocobase/pull/7406)）@mytharcher
* **[サーバー]** 一部リクエストに`ctx.action`がなく、監査ログミドルウェアでエラーが発生する問題を修正（[#7369](https://github.com/nocobase/nocobase/pull/7369)）@2013xile
* **[ブロック：テンプレート]** 継承されたテンプレートブロック内にメールブロックを配置した際に表示されない問題を解消（[#7430](https://github.com/nocobase/nocobase/pull/7430)）@gchust
* **[ワークフロー：メーラーノード]** メールノードが正しく実行を再開できない場合がある問題を修正（[#7409](https://github.com/nocobase/nocobase/pull/7409)）@mytharcher
* **[モバイル]**
  * モバイル端末での日付フィールドの表示形式が不正確な問題（[#7412](https://github.com/nocobase/nocobase/pull/7412)）@katherinehhh
  * モバイル承認ダイアログのフォーム送信データが不正確な問題を修正（[#7389](https://github.com/nocobase/nocobase/pull/7389)）@zhangzhonghe
* **[ワークフロー]**
  * ワークフローカテゴリを編集するとエラーが発生し、フォームデータが消失する問題を修正（[#7408](https://github.com/nocobase/nocobase/pull/7408)）@mytharcher
  * ワークフロータスクセンターのページタイトルの翻訳を修正（[#7392](https://github.com/nocobase/nocobase/pull/7392)）@mytharcher
* **[オフィスファイルプレビューワー]** 添付ファイル URL フィールドにファイルをアップロードする際にエラーが発生する問題を修正（[#7405](https://github.com/nocobase/nocobase/pull/7405)）@mytharcher
* **[通知：アプリ内メッセージ]** 翻訳を修正（[#7384](https://github.com/nocobase/nocobase/pull/7384)）@mytharcher
* **[コレクションフィールド：数式]** 変数の型により数式入力が検証を通過できない問題を修正（[#7373](https://github.com/nocobase/nocobase/pull/7373)）@mytharcher
* **[ファイルマネージャー]** ファイルアップロードサイズ制限のヒントを削除（[#7391](https://github.com/nocobase/nocobase/pull/7391)）@mytharcher
* **[カレンダー]** カレンダーイベントアイテムのツールチップに「[object Object]」が表示される問題（[#7372](https://github.com/nocobase/nocobase/pull/7372)）@katherinehhh
* **[アクション：レコードインポート Pro]** インポート時の重複検出中に、関連フィールドへの割り当てを禁止 @aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** 複数レコードでアクションのトリガーに成功後、選択した行をクリアする @mytharcher
* **[テンプレート印刷]** 複数行のデータにおけるラジオ選択フィールドの印刷問題を修正 @jiannx
* **[ファイルストレージ: S3 (Pro)]**
  * 問題のあるパラメータ`attachmentField`を非推奨に @mytharcher
  * IAM 認証方式を使用してファイルをアップロードできない問題を修正 @mytharcher
* **[ワークフロー：承認]**
  * 承認レコードで外部データソースのデータを読み込むと 404 エラーが発生する問題を修正 @mytharcher
  * 会签時にユーザーリストが空になる問題を修正 @mytharcher
* **[バックアップマネージャー]** 大ファイルのバックアップが実際に完了する前に「成功」と表示される問題を修正 @gchust
* **[マイグレーションマネージャー]** リストアエラーを解消するため、マイグレーションファイル作成時に、最新 pg\_dump で生成される`\restrict`および`\unrestrict`コマンドをスキップ @2013xile
