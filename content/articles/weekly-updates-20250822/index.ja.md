週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/ja/blog/v1.8.18)

*リリース日：2025-08-19*

#### 🚀 機能改善

* **[ワークフロー]** ノード選択メニューを更新し、2 カラムレイアウトでオプションを表示するようにした。情報密度を高め、ユーザーが一度に更多のオプションを確認できるように（[#7396](https://github.com/nocobase/nocobase/pull/7396)）@mytharcher
* **[ライセンス設定]** ライセンス設定では、毎回最新のインスタンス ID をコピーするように（[#7387](https://github.com/nocobase/nocobase/pull/7387)）@jiannx

#### 🐛 不具合修正

* **[クライアント]**
  * 連動ルールの空値検証時に数値 0 を空として扱う（[#7404](https://github.com/nocobase/nocobase/pull/7404)）@katherinehhh
  * リンクボタンのテキストが改行される問題を修正（[#7406](https://github.com/nocobase/nocobase/pull/7406)）@mytharcher
* **[モバイル]** モバイル端末での日付フィールドの表示形式が不正確な問題（[#7412](https://github.com/nocobase/nocobase/pull/7412)）@katherinehhh
* **[オフィスファイルプレビューワー]** 添付ファイル URL フィールドにファイルをアップロードする際にエラーが発生する問題を修正（[#7405](https://github.com/nocobase/nocobase/pull/7405)）@mytharcher
* **[ワークフロー]** ワークフローカテゴリを編集するとエラーが発生し、フォームデータが消失する問題を修正（[#7408](https://github.com/nocobase/nocobase/pull/7408)）@mytharcher
* **[ワークフロー：メーラーノード]** メールノードが正しく実行を再開できない場合がある問題を修正（[#7409](https://github.com/nocobase/nocobase/pull/7409)）@mytharcher
* **[ワークフロー：カスタムアクションイベント]** 複数レコードでアクションのトリガーに成功後、選択した行をクリアする @mytharcher
* **[テンプレート印刷]** 複数行のデータにおけるラジオ選択フィールドの印刷問題を修正 @jiannx
* **[ワークフロー：承認]** 承認レコードで外部データソースのデータを読み込むと 404 エラーが発生する問題を修正 @mytharcher

### [v1.8.17](https://www.nocobase.com/ja/blog/v1.8.17)

*リリース日：2025-08-15*

#### 🎉 新機能

* **[ワークフロー：承認]** 同一ワークフロー内のすべての承認ノードで一貫したタスクタイトルを使用できるようサポート @mytharcher

#### 🚀 機能改善

* **[認証]** ログイン成功後、URL からトークンパラメータを削除（[#7386](https://github.com/nocobase/nocobase/pull/7386)）@2013xile
* **[テンプレート印刷]** フィールドの多対多配列をサポート @jiannx

#### 🐛 不具合修正

* **[モバイル]** モバイル承認ダイアログのフォーム送信データが不正確な問題を修正（[#7389](https://github.com/nocobase/nocobase/pull/7389)）@zhangzhonghe
* **[ワークフロー]** ワークフロータスクセンターのページタイトルの翻訳を修正（[#7392](https://github.com/nocobase/nocobase/pull/7392)）@mytharcher
* **[カレンダー]** カレンダーイベントアイテムのツールチップに「[object Object]」が表示される問題（[#7372](https://github.com/nocobase/nocobase/pull/7372)）@katherinehhh
* **[通知：アプリ内メッセージ]** 翻訳を修正（[#7384](https://github.com/nocobase/nocobase/pull/7384)）@mytharcher
* **[ファイルマネージャー]** ファイルアップロードサイズ制限のヒントを削除（[#7391](https://github.com/nocobase/nocobase/pull/7391)）@mytharcher
* **[ファイルストレージ: S3 (Pro)]**
  * 問題のあるパラメータ`attachmentField`を非推奨に @mytharcher
  * IAM 認証方式を使用してファイルをアップロードできない問題を修正 @mytharcher

### [v1.8.16](https://www.nocobase.com/ja/blog/v1.8.16)

*リリース日：2025-08-14*

#### 🚀 機能改善

* **[通知：アプリ内メッセージ]** `console.log`による SQL ログ出力を削除（[#7368](https://github.com/nocobase/nocobase/pull/7368)）@2013xile

#### 🐛 不具合修正

* **[サーバー]** 一部リクエストに`ctx.action`がなく、監査ログミドルウェアでエラーが発生する問題を修正（[#7369](https://github.com/nocobase/nocobase/pull/7369)）@2013xile
* **[コレクションフィールド：数式]** 変数の型により数式入力が検証を通過できない問題を修正（[#7373](https://github.com/nocobase/nocobase/pull/7373)）@mytharcher
* **[バックアップマネージャー]** 大ファイルのバックアップが実際に完了する前に「成功」と表示される問題を修正 @gchust
