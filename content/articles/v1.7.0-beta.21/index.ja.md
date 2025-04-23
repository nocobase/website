### 🚀 機能改善

* **[create-nocobase-app]** 依存関係をアップグレードし、SQLite のサポートを削除（[#6708](https://github.com/nocobase/nocobase/pull/6708)） by @chenos
* **[モバイル]** モバイル用日付ピッカーポップアップの開き速度を最適化（[#6735](https://github.com/nocobase/nocobase/pull/6735)） by @zhangzhonghe
* **[ブロック：テンプレート]** テンプレートブロックを通常ブロックに変換可能に（[#6662](https://github.com/nocobase/nocobase/pull/6662)） by @gchust
* **[テーマエディタ]** テーマ設定でサイドバーの幅を設定可能に（[#6720](https://github.com/nocobase/nocobase/pull/6720)） by @chenos
* **[ファイルマネージャー]** ユーティリティ API を公開（[#6705](https://github.com/nocobase/nocobase/pull/6705)） by @mytharcher
* **[ワークフロー]** 変数タイプセットに日付タイプを追加（[#6717](https://github.com/nocobase/nocobase/pull/6717)） by @mytharcher
* **[テンプレート印刷]** データソースアクション制御をクライアント側のロールベースアクセス制御に置き換え by @sheldon66

### 🐛 不具合修正

* **[クライアント]**
  * 送信成功後のデータブロック更新問題（[#6748](https://github.com/nocobase/nocobase/pull/6748)） by @zhangzhonghe
  * 関連データ追加時の既関連データのフィルター欠落（[#6750](https://github.com/nocobase/nocobase/pull/6750)） by @katherinehhh
  * 左メニューの折りたたみボタンがワークフローポップアップに隠れる問題（[#6733](https://github.com/nocobase/nocobase/pull/6733)） by @zhangzhonghe
  * ツリーテーブルの「子追加」ボタン連携ルールに「現在のレコード」が含まれない問題（[#6752](https://github.com/nocobase/nocobase/pull/6752)） by @katherinehhh
  * 連携ルールにおける日時フィールド条件の不具合（[#6728](https://github.com/nocobase/nocobase/pull/6728)） by @katherinehhh
  * モバイル上部ナビゲーションバーのアイコン削除困難な問題（[#6734](https://github.com/nocobase/nocobase/pull/6734)） by @zhangzhonghe
  * 「インデックス列有効」の値表示誤り（[#6724](https://github.com/nocobase/nocobase/pull/6724)） by @katherinehhh
  * 連携ルールで隠された必須フィールドがフォーム送信に影響する問題（[#6709](https://github.com/nocobase/nocobase/pull/6709)） by @zhangzhonghe
  * サブテーブル / サブフォーム連携ルールの変数変換問題（[#6702](https://github.com/nocobase/nocobase/pull/6702)） by @katherinehhh
  * エクスポート権限なしでエクスポートボタン表示問題（[#6689](https://github.com/nocobase/nocobase/pull/6689)） by @katherinehhh
  * 連携ルール再開時のアクションオプション制約欠落（[#6723](https://github.com/nocobase/nocobase/pull/6723)） by @katherinehhh
  * フィルターボタン日付フィールドのピッカー切り替え問題（[#6695](https://github.com/nocobase/nocobase/pull/6695)） by @katherinehhh
  * 外部キー接続後のフィルター条件消失問題（[#6634](https://github.com/nocobase/nocobase/pull/6634)） by @zhangzhonghe
* **[cli]** アップグレード時に package.json を自動更新（[#6747](https://github.com/nocobase/nocobase/pull/6747)） by @chenos
* **[サーバー]** create-migration による appVersion 生成誤り（[#6740](https://github.com/nocobase/nocobase/pull/6740)） by @chenos
* **[ビルド]** tar コマンドで発生するエラー修正（[#6722](https://github.com/nocobase/nocobase/pull/6722)） by @mytharcher
* **[ブロック：ガントチャート]** 月ビューでカレンダーヘッダーの月が重なる問題（[#6753](https://github.com/nocobase/nocobase/pull/6753)） by @katherinehhh
* **[アクション：インポートレコード]** フィールド権限設定時のインポート / エクスポート例外修正（[#6677](https://github.com/nocobase/nocobase/pull/6677)） by @aaaaaajie
* **[ブロック：テンプレート]** MySQL 環境でブロックテンプレートが使用できない問題（[#6726](https://github.com/nocobase/nocobase/pull/6726)） by @gchust
* **[ワークフロー]** サブフローでスケジュールイベント実行時のエラー修正（[#6721](https://github.com/nocobase/nocobase/pull/6721)） by @mytharcher
* **[データビジュアライゼーション]** フィルターブロックで列挙型フィールドのオプションが空になる問題（[#6706](https://github.com/nocobase/nocobase/pull/6706)） by @2013xile
* **[アクション：カスタムリクエスト]** カスタムリクエストデータを JSON 形式に強制（[#6701](https://github.com/nocobase/nocobase/pull/6701)） by @chenos
* **[アクション：エクスポートレコード Pro]**
  * フィールド権限設定時のインポート / エクスポート例外修正 by @aaaaaajie
  * テーブル列ソート後のフィルターパラメータ消失問題修正 by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]** 複数レコードモードでの実行サポート by @mytharcher
* **[ファイルストレージ: S3 (Pro)]**
  * サーバー側アップロード用の multer ロジック追加 by @mytharcher
  * アップロードファイルのレスポンスデータ修正 by @mytharcher
* **[ワークフロー：承認]** レコードの関連フィールドのプリロード処理修正 by @mytharcher
