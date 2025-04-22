## 新機能

### ブロックの高さ設定のサポート（[#4441](https://github.com/nocobase/nocobase/pull/4441)）

![](https://static-docs.nocobase.com/20240603115253.gif)

参考文書：

* [ブロックの高さ設定](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### リンクアクション: 指定したURLに移動（[#4506](https://github.com/nocobase/nocobase/pull/4506)）

URLや検索パラメータでの変数設定をサポート。

<video controls height="280" width="100%"></video>

参考文書：

* [リンクアクション](https://docs.nocobase.com/handbook/ui/actions/types/link)

### 新しい変数「URL検索パラメータ」の追加（[#4506](https://github.com/nocobase/nocobase/pull/4506)）

この変数は、ページのURLにクエリ文字列がある場合にのみ利用可能で、[リンクアクション](https://docs.nocobase.com/handbook/ui/actions/types/link)と組み合わせて使用することで効果的です。

![](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

参考文書：

* [URL検索パラメータ](https://docs.nocobase.com/handbook/ui/variables#url-%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0)
* [リンクアクション](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Iframe変数のサポート（[#4512](https://github.com/nocobase/nocobase/pull/4512)）

![](https://static-docs.nocobase.com/20240603114711.png)

![](https://static-docs.nocobase.com/20240603114750.png)

参考文書：

* [Iframeブロック](https://docs.nocobase.com/handbook/block-iframe)

### ファイルストレージでのファイルサイズとファイルタイプの設定サポート（[#4118](https://github.com/nocobase/nocobase/pull/4118)）

![](https://static-docs.nocobase.com/20240603115303.png)

参考文書：

* [ファイルストレージ](https://docs.nocobase.com/handbook/file-manager/storage)

### ワークフロー: 変数ノードがデータオブジェクトの部分パスを選択して変数の値を設定するサポート

![](https://static-docs.nocobase.com/20240531211727.png)

### URLフィールドのプレビューサポート（[#4559](https://github.com/nocobase/nocobase/pull/4559)）

現在は画像プレビューのみをサポート。

![](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### データビジュアライゼーション: 「URLクエリパラメータ」と「現在の役割」変数のサポート（[#4586](https://github.com/nocobase/nocobase/pull/4586)）

![](https://static-docs.nocobase.com/202406071148997.png)

![](https://static-docs.nocobase.com/202406071149567.png)

## 改善

### インポートとエクスポート機能の最適化 ([#4468](https://github.com/nocobase/nocobase/pull/4468))

インポート及びエクスポート機能の安定性が向上し、インポートとエクスポートの制限が2000レコードに増加しました。カスタムフィールドタイプのインポートとエクスポートのロジックを拡張をサポートします。

![](https://static-docs.nocobase.com/20240611112948.png)

### 日付変数オプションを無効にして操作ミスを回避する ([#4452](https://github.com/nocobase/nocobase/pull/4452))

「現在の時間」以外の日付を表す変数は、瞬間（文字列）ではなく間隔（配列）で表されます。フィルターに使用できますが、デフォルト値として直接使用することはできません。

![](https://static-docs.nocobase.com/20240527150429.png)

### リンクルールの割り当てインタラクションの最適化 ([#4492](https://github.com/nocobase/nocobase/pull/4492))

マルチセレクトフィールドには割り当てオプションが表示されません。単一選択フィールドが選択されて割り当てられた後にマルチセレクトフィールドに切り替えると、設定がクリアされます。

![](https://static-docs.nocobase.com/20240603143309.png)

### テーブルブロックのアクションコラムの右上アイコンの調整 ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### エラーフォールバック ([#4459](https://github.com/nocobase/nocobase/pull/4459))

フロントエンドでのさまざまなコンポーネントに対するエラーフォールバックを洗練させ、フロントエンドのエラーによってページ全体が使用できなくなるのを防ぎます。

![](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### フロントエンドのエラー発生時にデバッグ情報を収集し、迅速にログをダウンロードするサポート（[#4524](https://github.com/nocobase/nocobase/pull/4524)）

![](https://static-docs.nocobase.com/202406041224009.png)

### その他

* ユーザー名の文字数制限を1-50に変更する ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* 外部キーのフィールドを隠さない（[#4499](https://github.com/nocobase/nocobase/pull/4499)）

## バグ修正

### 権限設定ダイアログのデータ範囲に「現在のフォーム」や「現在のポップアップレコード」変数をサポートしないようにする（[#4484](https://github.com/nocobase/nocobase/pull/4484)）

![](https://static-docs.nocobase.com/20240527145519.png)

### 変数の値を直接選択して関連フィールドのデフォルト値としてサポートする（[#4439](https://github.com/nocobase/nocobase/pull/4439)）

![](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### “カスタムリクエスト”アクションを複数回追加する際のエラーを修正する（[#4458](https://github.com/nocobase/nocobase/pull/4458)）

![](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### その他

* フォーム送信後にサブテーブルの内容がクリアされない問題を修正する（[#4475](https://github.com/nocobase/nocobase/pull/4475)）
* サブテーブル内での「現在のオブジェクト」変数の異常使用の問題を修正する（[#4521](https://github.com/nocobase/nocobase/pull/4521)）
* 地図フィールドの「デフォルトズームレベル」を設定するオプションを追加する（[#4527](https://github.com/nocobase/nocobase/pull/4527)）
* ポップアップウィンドウにブロックテンプレートを追加した際にブロックが表示されない問題を修正する（[#4531](https://github.com/nocobase/nocobase/pull/4531)）
* フォームデータテンプレートのスタイル問題を修正する（[#4536](https://github.com/nocobase/nocobase/pull/4536)）
* ワークフロー：計算ノードで表現ボックスのスタイルが消える問題を修正する（[#4513](https://github.com/nocobase/nocobase/pull/4513)）
* ワークフロー：手動ノードのカスタムフォームでフィールドタイプが誤った問題を修正する（[#4519](https://github.com/nocobase/nocobase/pull/4519)）
* ワークフロー：カスタム操作イベントのトリガー権限の問題を修正する（[#4522](https://github.com/nocobase/nocobase/pull/4522)）
* ワークフロー：複数のデータソースのプリロード関連の深さ設定が錯誤する問題を修正する（[#4526](https://github.com/nocobase/nocobase/pull/4526)）
* `json-templates`ライブラリのバグ修正（[#4525](https://github.com/nocobase/nocobase/pull/4525)）
* ファイルマネージャー：COSでのファイルのアップロードまたは削除時のエラーを修正する（[#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537)）
* フォーム関連ルールにおいて、数値フィールドの値が0.00の際に[object Object]が表示される問題を修正する（[#4482](https://github.com/nocobase/nocobase/pull/4482)）
* サブテーブルに新しいボタン追加の制御項目が欠けている問題を修正する（[#4498](https://github.com/nocobase/nocobase/pull/4498)）
* テーブル編集フォームの送信ボタンにリンクルール設定項目が欠けている問題を修正する（[#4515](https://github.com/nocobase/nocobase/pull/4515)）
* データビジュアライゼーション：グラフフィルターのデフォルト値設定時にフィールドコンポーネントが見えなくなる問題を修正する（[#4509](https://github.com/nocobase/nocobase/pull/4509)）
* 認証：新たに作成したパスワード認証のサインアップページが見つからない問題を修正する（[#4556](https://github.com/nocobase/nocobase/pull/4556)）
* ローカリゼーション：メニューの翻訳時にページタイトルが正しく翻訳されない問題を修正する（[#4557](https://github.com/nocobase/nocobase/pull/4557)）
* 地図：設定が正しいにもかかわらず、高徳地図がキーエラーを表示する問題を修正する（[#4574](https://github.com/nocobase/nocobase/pull/4574）
