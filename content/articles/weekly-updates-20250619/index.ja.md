週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/ja/blog/v1.7.14)

*リリース日：2025-06-18*

#### 🚀 機能改善

* **[クライアント]** グリッドカードブロックのアクションバーを空の場合に自動的に非表示にする（[#7069](https://github.com/nocobase/nocobase/pull/7069)）@zhangzhonghe
* **[認証]** `verifiers:listByUser` API のレスポンスから検証者オプションを削除する（[#7090](https://github.com/nocobase/nocobase/pull/7090)）@2013xile

#### 🐛 不具合修正

* **[データベース]** updateOrCreate と firstOrCreate で関連情報の更新をサポートする（[#7088](https://github.com/nocobase/nocobase/pull/7088)）@chenos
* **[クライアント]**
  * 公開フォームのフィールド初期値で URL のクエリパラメータ変数が機能しない問題（[#7084](https://github.com/nocobase/nocobase/pull/7084)）@katherinehhh
  * サブテーブルの列フィールドにスタイル条件が正しく適用されない問題（[#7083](https://github.com/nocobase/nocobase/pull/7083)）@katherinehhh
  * フィルターフォームで関連コレクションフィールドを通じたフィルタリングが無効な問題（[#7070](https://github.com/nocobase/nocobase/pull/7070)）@zhangzhonghe
* **[コレクションフィールド：多対多（配列）]** 多対多（配列）フィールドを更新する際、`updatedBy` フィールドが存在するとエラーが発生する問題（[#7089](https://github.com/nocobase/nocobase/pull/7089)）@2013xile
* **[公開フォーム]** 公開フォームの送信時に未認証アクセスが発生する問題を修正（[#7085](https://github.com/nocobase/nocobase/pull/7085)）@zhangzhonghe

### [v1.7.13](https://www.nocobase.com/ja/blog/v1.7.13)

*リリース日：2025-06-17*

#### 🚀 機能改善

* **[クライアント]** ロゴコンテナの幅をコンテンツタイプに合わせて調整（画像は固定 168px、テキストは自動幅）（[#7075](https://github.com/nocobase/nocobase/pull/7075)）@Cyx649312038
* **[ワークフロー：承認]** 再割り当て先のリストに追加フィールドオプションを追加 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * サブテーブル内の必須入力バリデーションメッセージがページ切り替え後も残る問題（[#7080](https://github.com/nocobase/nocobase/pull/7080)）@katherinehhh
  * 金額コンポーネントをマスクから inputNumer に切り替えた後、小数点が失われる問題（[#7077](https://github.com/nocobase/nocobase/pull/7077)）@katherinehhh
  * サブテーブル内の Markdown（Vditor）レンダリングが正しくない問題（[#7074](https://github.com/nocobase/nocobase/pull/7074)）@katherinehhh
* **[コレクションフィールド：シーケンス]** 文字列ベースの bigint シーケンス計算を修正（[#7079](https://github.com/nocobase/nocobase/pull/7079)）@mytharcher
* **[バックアップマネージャー]** Windows 環境下で MySQL バックアップを復元する際に発生する不明コマンドエラーを修正 @gchust

### [v1.7.12](https://www.nocobase.com/ja/blog/v1.7.12)

*リリース日：2025-06-16*

#### 🚀 機能改善

* **[クライアント]** チェックボックスフィールドの連携ルールに「空」と「空でない」オプションを追加（[#7073](https://github.com/nocobase/nocobase/pull/7073)）@katherinehhh

#### 🐛 不具合修正

* **[クライアント]** 逆関係フィールドを作成後、関連フィールド設定の「対象データテーブルに逆関係フィールドを作成」オプションがチェックされない問題（[#6914](https://github.com/nocobase/nocobase/pull/6914)）@aaaaaajie
* **[データソースマネージャー]** スコープの変更を関連する全ロールに即時適用（[#7065](https://github.com/nocobase/nocobase/pull/7065)）@aaaaaajie
* **[アクセス制御]** デフォルトロールが存在しない場合にアプリがアクセスブロックされる問題を修正（[#7059](https://github.com/nocobase/nocobase/pull/7059)）@aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** リダイレクト URL の変数が解析されない問題を修正 @mytharcher

### [v1.7.11](https://www.nocobase.com/ja/blog/v1.7.11)

*リリース日：2025-06-15*

#### 🎉 新機能

* **[テキストコピー]** テキストフィールドの内容を一クリックでコピーできる機能をサポート（[#6954](https://github.com/nocobase/nocobase/pull/6954)）@zhangzhonghe

#### 🐛 不具合修正

* **[クライアント]**
  * 関連フィールドのセレクターが送信後に選択データをクリアしない問題（[#7067](https://github.com/nocobase/nocobase/pull/7067)）@katherinehhh
  * アップロードサイズのヒントを修正（[#7057](https://github.com/nocobase/nocobase/pull/7057)）@mytharcher
* **[サーバー]** 未定義のプロパティを読み取ろうとして発生するエラー（'setMaaintainingMessage' 参照時）を修正（[#7064](https://github.com/nocobase/nocobase/pull/7064)）@chenos
* **[ワークフロー：ループノード]** 条件が満たされない場合でもループブランチが実行される問題を修正（[#7063](https://github.com/nocobase/nocobase/pull/7063)）@mytharcher
* **[ワークフロー：承認]**
  * 実行がキャンセルされた際に Todo 統計が更新されない問題を修正 @mytharcher
  * タイプによるフィルタリング時のトリガー変数を修正 @mytharcher

### [v1.7.10](https://www.nocobase.com/ja/blog/v1.7.10)

*リリース日：2025-06-12*

#### 🐛 不具合修正

* **[クライアント]**
  * 連携ルールにより無限ループが発生する問題を修正（[#7050](https://github.com/nocobase/nocobase/pull/7050)）@zhangzhonghe
  * APIClient でハンドラが未定義の場合、オプショナルチェーニングを使用して安全にリクエストを拒否する（[#7054](https://github.com/nocobase/nocobase/pull/7054)）@sheldon66
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7052](https://github.com/nocobase/nocobase/pull/7052)）@katherinehhh
* **[データ可視化]** チャートフィルター内の日付範囲フィールドの表示エラー（[#7051](https://github.com/nocobase/nocobase/pull/7051)）@katherinehhh
* **[API ドキュメント]** NocoBase 公式プラグイン以外の API ドキュメントが表示できない問題（[#7045](https://github.com/nocobase/nocobase/pull/7045)）@chenzhizdt
* **[アクション：レコードインポート]** XLSX インポート時にテキストエリアフィールドに文字列以外の形式のデータが入力されることを制限（[#7049](https://github.com/nocobase/nocobase/pull/7049)）@aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/ja/blog/v1.8.0-beta.9)

*リリース日：2025-06-18*

#### 🚀 機能改善

* **[クライアント]**
  * グリッドカードブロックのアクションバーを空の場合に自動的に非表示にする（[#7069](https://github.com/nocobase/nocobase/pull/7069)）@zhangzhonghe
  * ロゴコンテナの幅をコンテンツタイプに合わせて調整（画像は固定 168px、テキストは自動幅）（[#7075](https://github.com/nocobase/nocobase/pull/7075)）@Cyx649312038
* **[認証]** `verifiers:listByUser` API のレスポンスから検証者オプションを削除する（[#7090](https://github.com/nocobase/nocobase/pull/7090)）@2013xile

#### 🐛 不具合修正

* **[クライアント]**
  * サブテーブル内の必須入力バリデーションメッセージがページ切り替え後も残る問題（[#7080](https://github.com/nocobase/nocobase/pull/7080)）@katherinehhh
  * サブテーブルの列フィールドにスタイル条件が正しく適用されない問題（[#7083](https://github.com/nocobase/nocobase/pull/7083)）@katherinehhh
  * 金額コンポーネントをマスクから inputNumer に切り替えた後、小数点が失われる問題（[#7077](https://github.com/nocobase/nocobase/pull/7077)）@katherinehhh
  * 公開フォームのフィールド初期値で URL のクエリパラメータ変数が機能しない問題（[#7084](https://github.com/nocobase/nocobase/pull/7084)）@katherinehhh
  * フィルターフォームで関連コレクションフィールドを通じたフィルタリングが無効な問題（[#7070](https://github.com/nocobase/nocobase/pull/7070)）@zhangzhonghe
  * サブテーブル内の Markdown（Vditor）レンダリングが正しくない問題（[#7074](https://github.com/nocobase/nocobase/pull/7074)）@katherinehhh
* **[データベース]** updateOrCreate と firstOrCreate で関連情報の更新をサポートする（[#7088](https://github.com/nocobase/nocobase/pull/7088)）@chenos
* **[コレクションフィールド：多対多（配列）]** 多対多（配列）フィールドを更新する際、`updatedBy` フィールドが存在するとエラーが発生する問題（[#7089](https://github.com/nocobase/nocobase/pull/7089)）@2013xile
* **[コレクションフィールド：シーケンス]** 文字列ベースの bigint シーケンス計算を修正（[#7079](https://github.com/nocobase/nocobase/pull/7079)）@mytharcher
* **[公開フォーム]** 公開フォームの送信時に未認証アクセスが発生する問題を修正（[#7085](https://github.com/nocobase/nocobase/pull/7085)）@zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/ja/blog/v1.8.0-beta.8)

*リリース日：2025-06-16*

#### 🚀 機能改善

* **[クライアント]** チェックボックスフィールドの連携ルールに「空」と「空でない」オプションを追加（[#7073](https://github.com/nocobase/nocobase/pull/7073)）@katherinehhh
* **[ワークフロー：承認]** 再割り当て先のリストに追加フィールドオプションを追加 @mytharcher

#### 🐛 不具合修正

* **[バックアップマネージャー]** Windows 環境下で MySQL バックアップを復元する際に発生する不明コマンドエラーを修正 @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/ja/blog/v1.8.0-beta.7)

*リリース日：2025-06-15*

#### 🎉 新機能

* **[テキストコピー]** テキストフィールドの内容を一クリックでコピーできる機能をサポート（[#6954](https://github.com/nocobase/nocobase/pull/6954)）@zhangzhonghe

#### 🐛 不具合修正

* **[サーバー]** 未定義のプロパティを読み取ろうとして発生するエラー（'setMaaintainingMessage' 参照時）を修正（[#7064](https://github.com/nocobase/nocobase/pull/7064)）@chenos
* **[クライアント]**
  * 関連フィールドのセレクターが送信後に選択データをクリアしない問題（[#7067](https://github.com/nocobase/nocobase/pull/7067)）@katherinehhh
  * 逆関係フィールドを作成後、関連フィールド設定の「対象データテーブルに逆関係フィールドを作成」オプションがチェックされない問題（[#6914](https://github.com/nocobase/nocobase/pull/6914)）@aaaaaajie
* **[アクセス制御]** デフォルトロールが存在しない場合にアプリがアクセスブロックされる問題を修正（[#7059](https://github.com/nocobase/nocobase/pull/7059)）@aaaaaajie
* **[ワークフロー：ループノード]** 条件が満たされない場合でもループブランチが実行される問題を修正（[#7063](https://github.com/nocobase/nocobase/pull/7063)）@mytharcher
* **[データソースマネージャー]** スコープの変更を関連する全ロールに即時適用（[#7065](https://github.com/nocobase/nocobase/pull/7065)）@aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** リダイレクト URL の変数が解析されない問題を修正 @mytharcher
* **[ワークフロー：承認]**
  * タイプによるフィルタリング時のトリガー変数を修正 @mytharcher
  * 実行がキャンセルされた際に Todo 統計が更新されない問題を修正 @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/ja/blog/v1.8.0-beta.6)

*リリース日：2025-06-12*

#### 🎉 新機能

* **[監査ログ]** 環境変数`AUDIT_LOGGER_TRANSPORT`を追加し、監査ログの出力方法を制御できるようにしました @2013xile

#### 🚀 機能改善

* **[クライアント]** グループメニューを自身の中に移動することを禁止（[#7005](https://github.com/nocobase/nocobase/pull/7005)）@zhangzhonghe
* **[カレンダー]** カレンダーブロックで週の始まりの曜日を設定できるようにサポート（[#7032](https://github.com/nocobase/nocobase/pull/7032)）@katherinehhh
* **[コレクションフィールド: Markdown (Vditor)]** Markdown（Vditor）のプレビューモードで画像をクリックしてズームできるようサポート（[#7024](https://github.com/nocobase/nocobase/pull/7024)）@katherinehhh
* **[コレクションフィールド：多対多（配列）]** データテーブルで多対多フィールドを表示する際のアクセス権関連のエラーを修正（[#7028](https://github.com/nocobase/nocobase/pull/7028)）@aaaaaajie
* **[コメント]** コメントブロックでページネーションをサポート @katherinehhh

#### 🐛 不具合修正

* **[クライアント]**
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7052](https://github.com/nocobase/nocobase/pull/7052)）@katherinehhh
  * 連携ルールにより無限ループが発生する問題を修正（[#7050](https://github.com/nocobase/nocobase/pull/7050)）@zhangzhonghe
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * アップロードサイズのヒントを修正（[#7057](https://github.com/nocobase/nocobase/pull/7057)）@mytharcher
  * APIClient でハンドラが未定義の場合、オプショナルチェーニングを使用して安全にリクエストを拒否する（[#7054](https://github.com/nocobase/nocobase/pull/7054)）@sheldon66
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * 重複した API リクエストによりブロックテンプレート内のフィールドが表示されない問題を修正（[#6985](https://github.com/nocobase/nocobase/pull/6985)）@zhangzhonghe
  * フィルターフォームの連携ルールでセレクトフィールドのオプションが機能しない問題（[#7035](https://github.com/nocobase/nocobase/pull/7035)）@katherinehhh
  * フィルターフォームの検証ルールによりフィルターボタンが無効になる問題（[#6975](https://github.com/nocobase/nocobase/pull/6975)）@zhangzhonghe
  * 連携ルールを使用してサブテーブルの必須フィールドの指示器をクリアできない問題（[#7022](https://github.com/nocobase/nocobase/pull/7022)）@zhangzhonghe
  * フィルターブロックのパラメータエラー問題を修正（[#6966](https://github.com/nocobase/nocobase/pull/6966)）@zhangzhonghe
  * ブロックが外部データソースからビューデータを読み取れない問題を解決（[#7017](https://github.com/nocobase/nocobase/pull/7017)）@aaaaaajie
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
  * 連携ルール内で現在のオブジェクト変数が無効な問題（[#7008](https://github.com/nocobase/nocobase/pull/7008)）@zhangzhonghe
* **[データベース]** XLSX インポート時に欠落していた作成者と更新者フィールドを追加（[#7011](https://github.com/nocobase/nocobase/pull/7011)）@aaaaaajie
* **[未定義]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制 @aaaaaajie
* **[アクション：レコードインポート]**
  * XLSX インポート時にテキストエリアフィールドに文字列以外の形式のデータが入力されることを制限（[#7049](https://github.com/nocobase/nocobase/pull/7049)）@aaaaaajie
  * 関連フィールドを含む場合の子テーブルのインポート失敗を修正（[#7039](https://github.com/nocobase/nocobase/pull/7039)）@aaaaaajie
  * XLSX ツリーテーブルデータのインポート時に一括編集中に発生するエラーを修正（[#7013](https://github.com/nocobase/nocobase/pull/7013)）@aaaaaajie
* **[データ可視化]**
  * チャートフィルター内の日付範囲フィールドの表示エラー（[#7051](https://github.com/nocobase/nocobase/pull/7051)）@katherinehhh
  * チャート内のチェックボックスグループフィールドにラベルを表示するよう修正（生データではなく）（[#7033](https://github.com/nocobase/nocobase/pull/7033)）@2013xile
* **[API ドキュメント]** NocoBase 公式プラグイン以外の API ドキュメントが表示できない問題（[#7045](https://github.com/nocobase/nocobase/pull/7045)）@chenzhizdt
* **[ワークフロー]**
  * スケジュールトリガーにおける`toJSON()`によるエラーを修正（[#7037](https://github.com/nocobase/nocobase/pull/7037)）@mytharcher
  * トリガーが正しく設定されていない場合に手動実行アクションで発生するエラーを修正（[#7036](https://github.com/nocobase/nocobase/pull/7036)）@mytharcher
  * ワークフローが存在しない場合の UI エラーを修正（[#7023](https://github.com/nocobase/nocobase/pull/7023)）@mytharcher
  * コレクションイベントの「作成」または「更新」モードで、変更フィールドなしで作成した際にトリガーが発火しない問題を修正（[#7015](https://github.com/nocobase/nocobase/pull/7015)）@mytharcher
* **[データソースマネージャー]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制（[#7019](https://github.com/nocobase/nocobase/pull/7019)）@aaaaaajie
* **[モバイル]** モバイルポップアップの遅延問題を最適化（[#7029](https://github.com/nocobase/nocobase/pull/7029)）@zhangzhonghe
* **[アクション：レコードエクスポート Pro]** 条件付きで添付ファイルをエクスポートする際に発生するエラーを修正 @aaaaaajie
* **[ワークフロー: JavaScript]** 相対パスの require を修正 @mytharcher
* **[テンプレート印刷]** アクセス権解析のバグを修正し、データ未見つかりのチェックを追加 @sheldon66
* **[ワークフロー：承認]**
  * 未定義フィールドによるエラーを回避 @mytharcher
  * ワークフローが削除された際に発生するエラーを修正 @mytharcher
  * トリガー変数を修正 @mytharcher
  * スナップショットからファイル関連付けを再読み込みし、URL の有効期限切れを回避 @mytharcher
  * 詳細ページを更新する際の API エラーを修正 @mytharcher
* **[WeCom]** ゲートウェイミドルウェアにコールバックパスのチェックを追加 @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/ja/blog/v1.8.0-alpha.8)

*リリース日：2025-06-17*

#### 🎉 新機能

* **[テキストコピー]** テキストフィールドの内容を一クリックでコピーできる機能をサポート（[#6954](https://github.com/nocobase/nocobase/pull/6954)）@zhangzhonghe
* **[メールマネージャー]** メール削除機能をサポート @jiannx

#### 🚀 機能改善

* **[クライアント]**
  * チェックボックスフィールドの連携ルールに「空」と「空でない」オプションを追加（[#7073](https://github.com/nocobase/nocobase/pull/7073)）@katherinehhh
  * ロゴコンテナの幅をコンテンツタイプに合わせて調整（画像は固定 168px、テキストは自動幅）（[#7075](https://github.com/nocobase/nocobase/pull/7075)）@Cyx649312038
* **[非同期タスクマネージャー]** エクスポート時のタスク作成パフォーマンスを改善（[#7078](https://github.com/nocobase/nocobase/pull/7078)）@aaaaaajie
* **[ワークフロー：承認]** 再割り当て先のリストに追加フィールドオプションを追加 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 金額コンポーネントをマスクから inputNumer に切り替えた後、小数点が失われる問題（[#7077](https://github.com/nocobase/nocobase/pull/7077)）@katherinehhh
  * サブテーブル内の Markdown（Vditor）レンダリングが正しくない問題（[#7074](https://github.com/nocobase/nocobase/pull/7074)）@katherinehhh
  * 逆関係フィールドを作成後、関連フィールド設定の「対象データテーブルに逆関係フィールドを作成」オプションがチェックされない問題（[#6914](https://github.com/nocobase/nocobase/pull/6914)）@aaaaaajie
  * 関連フィールドのセレクターが送信後に選択データをクリアしない問題（[#7067](https://github.com/nocobase/nocobase/pull/7067)）@katherinehhh
* **[サーバー]** 未定義のプロパティを読み取ろうとして発生するエラー（'setMaaintainingMessage' 参照時）を修正（[#7064](https://github.com/nocobase/nocobase/pull/7064)）@chenos
* **[アクセス制御]** デフォルトロールが存在しない場合にアプリがアクセスブロックされる問題を修正（[#7059](https://github.com/nocobase/nocobase/pull/7059)）@aaaaaajie
* **[データソースマネージャー]** スコープの変更を関連する全ロールに即時適用（[#7065](https://github.com/nocobase/nocobase/pull/7065)）@aaaaaajie
* **[ワークフロー：ループノード]** 条件が満たされない場合でもループブランチが実行される問題を修正（[#7063](https://github.com/nocobase/nocobase/pull/7063)）@mytharcher
* **[ワークフロー：カスタムアクションイベント]** リダイレクト URL の変数が解析されない問題を修正 @mytharcher
* **[ワークフロー：承認]** 実行がキャンセルされた際に Todo 統計が更新されない問題を修正 @mytharcher
* **[メールマネージャー]** メール削除に失敗する問題 @jiannx
* **[バックアップマネージャー]** Windows 環境下で MySQL バックアップを復元する際に発生する不明コマンドエラーを修正 @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/ja/blog/v1.8.0-alpha.7)

*リリース日：2025-06-13*

#### 🎉 新機能

* **[メールマネージャー]** メール同期間隔の設定をサポート @jiannx

#### 🐛 不具合修正

* **[データベース]** 文字列フィールドの`eq`演算子を数値型と互換性あるよう修正（[#7062](https://github.com/nocobase/nocobase/pull/7062)）@chenos
* **[クライアント]** アップロードサイズのヒントを修正（[#7057](https://github.com/nocobase/nocobase/pull/7057)）@mytharcher
* **[ワークフロー：承認]** タイプによるフィルタリング時のトリガー変数を修正 @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/ja/blog/v1.8.0-alpha.5)

*リリース日：2025-06-12*

#### 🚀 機能改善

* **[クライアント]**
  * QR コードスキャンによる入力フィールドの値の充填をサポート（[#6943](https://github.com/nocobase/nocobase/pull/6943)）@katherinehhh
  * Markdown ブロックのコンテンツをローカライズ可能にする（[#6941](https://github.com/nocobase/nocobase/pull/6941)）@katherinehhh
  * グループメニューを自身の中に移動することを禁止（[#7005](https://github.com/nocobase/nocobase/pull/7005)）@zhangzhonghe
* **[コレクションフィールド：多対多（配列）]** データテーブルで多対多フィールドを表示する際のアクセス権関連のエラーを修正（[#7028](https://github.com/nocobase/nocobase/pull/7028)）@aaaaaajie
* **[カレンダー]** カレンダーブロックで週の始まりの曜日を設定できるようサポート（[#7032](https://github.com/nocobase/nocobase/pull/7032)）@katherinehhh
* **[コレクションフィールド: Markdown (Vditor)]** Markdown（Vditor）のプレビューモードで画像をクリックしてズームできるようサポート（[#7024](https://github.com/nocobase/nocobase/pull/7024)）@katherinehhh

#### 🐛 不具合修正

* **[クライアント]**
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7052](https://github.com/nocobase/nocobase/pull/7052)）@katherinehhh
  * 重複した API リクエストによりブロックテンプレート内のフィールドが表示されない問題を修正（[#6985](https://github.com/nocobase/nocobase/pull/6985)）@zhangzhonghe
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * フィルターフォームの検証ルールによりフィルターボタンが無効になる問題（[#6975](https://github.com/nocobase/nocobase/pull/6975)）@zhangzhonghe
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * フィルターフォームの連携ルールでセレクトフィールドのオプションが機能しない問題（[#7035](https://github.com/nocobase/nocobase/pull/7035)）@katherinehhh
  * 連携ルールを使用してサブテーブルの必須フィールドの指示器をクリアできない問題（[#7022](https://github.com/nocobase/nocobase/pull/7022)）@zhangzhonghe
  * フィルターブロックのパラメータエラー問題を修正（[#6966](https://github.com/nocobase/nocobase/pull/6966)）@zhangzhonghe
  * 現在のユーザーデータが空になる問題を修正（[#7016](https://github.com/nocobase/nocobase/pull/7016)）@zhangzhonghe
  * 連携ルール内で現在のオブジェクト変数が無効な問題（[#7008](https://github.com/nocobase/nocobase/pull/7008)）@zhangzhonghe
  * ブロックが外部データソースからビューデータを読み取れない問題を解決（[#7017](https://github.com/nocobase/nocobase/pull/7017)）@aaaaaajie
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
* **[データ可視化]**
  * チャートフィルター内の日付範囲フィールドの表示エラー（[#7051](https://github.com/nocobase/nocobase/pull/7051)）@katherinehhh
  * チャート内のチェックボックスグループフィールドにラベルを表示するよう修正（生データではなく）（[#7033](https://github.com/nocobase/nocobase/pull/7033)）@2013xile
* **[アクション：レコードインポート]**
  * XLSX インポート時にテキストエリアフィールドに文字列以外の形式のデータが入力されることを制限（[#7049](https://github.com/nocobase/nocobase/pull/7049)）@aaaaaajie
  * 関連フィールドを含む場合の子テーブルのインポート失敗を修正（[#7039](https://github.com/nocobase/nocobase/pull/7039)）@aaaaaajie
  * XLSX ツリーテーブルデータのインポート時に一括編集中に発生するエラーを修正（[#7013](https://github.com/nocobase/nocobase/pull/7013)）@aaaaaajie
* **[API ドキュメント]** NocoBase 公式プラグイン以外の API ドキュメントが表示できない問題（[#7045](https://github.com/nocobase/nocobase/pull/7045)）@chenzhizdt
* **[ワークフロー]**
  * スケジュールトリガーにおける`toJSON()`によるエラーを修正（[#7037](https://github.com/nocobase/nocobase/pull/7037)）@mytharcher
  * トリガーが正しく設定されていない場合に手動実行アクションで発生するエラーを修正（[#7036](https://github.com/nocobase/nocobase/pull/7036)）@mytharcher
  * ワークフローが存在しない場合の UI エラーを修正（[#7023](https://github.com/nocobase/nocobase/pull/7023)）@mytharcher
  * コレクションイベントの「作成」または「更新」モードで、変更フィールドなしで作成した際にトリガーが発火しない問題を修正（[#7015](https://github.com/nocobase/nocobase/pull/7015)）@mytharcher
* **[モバイル]** モバイルポップアップの遅延問題を最適化（[#7029](https://github.com/nocobase/nocobase/pull/7029)）@zhangzhonghe
* **[データソースマネージャー]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制（[#7019](https://github.com/nocobase/nocobase/pull/7019)）@aaaaaajie
* **[アクション：レコードエクスポート Pro]** 条件付きで添付ファイルをエクスポートする際に発生するエラーを修正 @aaaaaajie
