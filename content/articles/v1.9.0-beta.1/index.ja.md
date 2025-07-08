### 🎉 新機能

* **[サーバー]** イベントキューを追加し、キュー内のメッセージを処理する機能を実装（[#6819](https://github.com/nocobase/nocobase/pull/6819)）@mytharcher

### 🚀 機能改善

* **[ワークフロー]** 共通コンポーネントをベースプラグインに移動（[#7140](https://github.com/nocobase/nocobase/pull/7140)）@mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * フィールド変更後、当該フィールドに依存するデータ範囲は選択値を自動的にクリアする必要がある問題（[#7161](https://github.com/nocobase/nocobase/pull/7161)）@zhangzhonghe
  * テーブル列幅の設定が無効になる問題を修正（[#7158](https://github.com/nocobase/nocobase/pull/7158)）@zhangzhonghe
  * 複製ボタンのポップアップ内にあるフィルターフォームのエラー問題を修正（[#7154](https://github.com/nocobase/nocobase/pull/7154)）@zhangzhonghe
  * 設定フィールドにおける一対一関係の保存時に発生するエラーを修正（[#7153](https://github.com/nocobase/nocobase/pull/7153)）@aaaaaajie
* **[undefined]** e2e.yml を修正（[#7160](https://github.com/nocobase/nocobase/pull/7160)）@mytharcher
* **[カレンダー]** カレンダーブロックのデフォルト週開始日を「月曜日」に設定（[#7171](https://github.com/nocobase/nocobase/pull/7171)）@katherinehhh
* **[ワークフロー]** モバイルデバイスで前のページに戻るために複数回左スワイプが必要になる問題を修正（[#7165](https://github.com/nocobase/nocobase/pull/7165)）@zhangzhonghe
* **[ファイルマネージャー]**
  * ESM パッケージによるビルドエラーを修正（[#7169](https://github.com/nocobase/nocobase/pull/7169)）@mytharcher
  * mimetype 検出を修正（[#7164](https://github.com/nocobase/nocobase/pull/7164)）@mytharcher
* **[ワークフロー：手動ノード]** 変数の誤ったインポートを修正（[#7156](https://github.com/nocobase/nocobase/pull/7156)）@mytharcher
* **[公開フォーム]** 公開フォームにおいて Date Only フィールドで日付選択に失敗する問題を修正（[#7168](https://github.com/nocobase/nocobase/pull/7168)）@katherinehhh
* **[ワークフロー：承認]**
  * タイムアウトに起因してスキーマ修正のトランザクションを削除 @mytharcher
  * 取り下げ後に関連データが読み込まれない問題を修正 @mytharcher
  * 承認が削除された際に発生するエラーを修正 @mytharcher
  * 送信時の関連データ更新を修正 @mytharcher
