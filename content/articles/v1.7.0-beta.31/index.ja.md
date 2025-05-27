### 🎉 新機能

* **[クライアント]** アクション連携ルールに「現在のフォーム」変数のサポートを追加 ([#6810](https://github.com/nocobase/nocobase/pull/6810)) @katherinehhh
* **[未定義]** インポートプラグインのログを追加 @aaaaaajie
* **[アクション：レコードのインポート]** インポートプラグインのログを追加 ([#6841](https://github.com/nocobase/nocobase/pull/6841)) @aaaaaajie

### 🚀 機能改善

* **[クライアント]** 読み取り状態の画像により多くのビルトインサイズ設定を追加 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) @katherinehhh
* **[コレクションフィールド：添付ファイル (URL)]** 読み取り状態の添付 URL フィールドにビルトインサイズを追加 ([#6871](https://github.com/nocobase/nocobase/pull/6871)) @katherinehhh
* **[ワークフロー]** 複数の下書きを修正可能にする ([#6851](https://github.com/nocobase/nocobase/pull/6851)) @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 詳細ブロック内のボタン連携の問題 ([#6867](https://github.com/nocobase/nocobase/pull/6867)) @katherinehhh
  * 連携ルールで演算子が変更された際に右辺の値をクリア ([#6862](https://github.com/nocobase/nocobase/pull/6862)) @katherinehhh
  * 連携条件における日付変数の演算子評価エラー ([#6825](https://github.com/nocobase/nocobase/pull/6825)) @katherinehhh
  * 連携ルールで演算子を切り替えた際に演算子が表示されない問題 ([#6857](https://github.com/nocobase/nocobase/pull/6857)) @katherinehhh
  * 二次確認の {{title}} データとの変数パースの互換性問題 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) @katherinehhh
  * 連携ルールの値コンポーネントのスタイル改善 ([#6836](https://github.com/nocobase/nocobase/pull/6836)) @katherinehhh
  * 非表示フィールドが表示される問題 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) @zhangzhonghe
* **[データベース]** テキストフィールドの値によるインポート失敗の修正 ([#6699](https://github.com/nocobase/nocobase/pull/6699)) @aaaaaajie
* **[データ可視化]**
  * ブロックレベルアクションでトリガーされたポップアップにチャートブロックが表示されない問題 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) @2013xile
  * ネストされた m2m フィールドのフィルタリング時のエラー修正 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) @2013xile
* **[アクション：レコードのエクスポート]**
  * インポート / エクスポートフィールド設定でフィールドを削除する際のパフォーマンス改善 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) @katherinehhh
  * ネスト関連付けと添付 URL の空値エクスポートの修正 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) @aaaaaajie
  * 長文のエクスポートエラーの修正 ([#6713](https://github.com/nocobase/nocobase/pull/6713)) @aaaaaajie
* **[ファイルマネージャー]** 外部キーの許可がない状態でファイルレコードを作成する問題の修正 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) @mytharcher
* **[ワークフロー]** タスクセンターでポップアップリンクを直接開いた際のバックナビゲーション不動作の修正 ([#6853](https://github.com/nocobase/nocobase/pull/6853)) @mytharcher
* **[アクション：レコードの複製]** 複製データの編集時に最初の入力クリックでモーダルが閉じる問題 ([#6848](https://github.com/nocobase/nocobase/pull/6848)) @katherinehhh
* **[ブロック：テンプレート]** 継承テンプレートとして保存後、ポップアップを開いた際のエラー ([#6840](https://github.com/nocobase/nocobase/pull/6840)) @gchust
* **[ワークフロー：テストキット]** 必須のプリセットプラグインによるテストケース失敗の修正 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) @mytharcher
* **[ワークフロー：後続アクションイベント]** Handlebars テンプレート内でユーザーアクション変数がアクセス不可な問題 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) @mytharcher
* **[ワークフロー：手動ノード]** タスクの統計数カウントエラーの修正 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) @mytharcher
* **[ブロック：アクションパネル]** ダークモードでのアクションパネルの色の不整合修正 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) @zhangzhonghe
* **[アクション：レコードのエクスポート Pro]**
  * インポート / エクスポート Pro のフィールド設定でフィールドを削除する際のパフォーマンス改善 @katherinehhh
  * 長文のエクスポートエラーの修正 @aaaaaajie
* **[ワークフロー：サブフロー]** 未定義のトリガーによるページクラッシュの修正 @mytharcher
* **[テンプレート印刷]**
  * フォーマッタが見つからない問題の修正 @sheldon66
* **[ファイルストレージ: S3 (Pro)]**
  * コレクションフィールドを使用したストレージの位置指定方法の変更 @mytharcher
  * アクセス URL の有効期限が無効な問題の修正 @jiannx
* **[ワークフロー：承認]** タスクの統計数カウントエラーの修正 @mytharcher
