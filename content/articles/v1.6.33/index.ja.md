### 🚀 機能改善

* **[未定義]** フル Docker イメージのビルド（[#6898](https://github.com/nocobase/nocobase/pull/6898)）@chenos
* **[クライアント]** 使用に伴いページが遅くなる問題を最適化（[#6888](https://github.com/nocobase/nocobase/pull/6888)）@zhangzhonghe
* **[カレンダー]** カレンダーブロックにリフレッシュボタンの設定可能機能を追加（[#6920](https://github.com/nocobase/nocobase/pull/6920)）@katherinehhh
* **[ワークフロー：カスタムアクションイベント]** 中国語キーに基づく英語ロケールの修正 @mytharcher
* **[ワークフロー：承認]** ワークフロータスクセンターでの全ての未処理タスク一括処理をサポート @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 関連フィールド追加時の無効なスタイルフォーマットによるレンダリングエラー（[#6903](https://github.com/nocobase/nocobase/pull/6903)）@katherinehhh
  * 連携ルールにおける toMany 関連フィールドの空値チェックエラー（[#6905](https://github.com/nocobase/nocobase/pull/6905)）@katherinehhh
* **[コレクションフィールド: Markdown (Vditor)]** Markdown (Vditor) フィールドのテーマ適応エラー（[#6919](https://github.com/nocobase/nocobase/pull/6919)）@katherinehhh
* **[コレクション：ツリー]** パス更新時の類似パスプレフィックスの誤更新を回避（[#6913](https://github.com/nocobase/nocobase/pull/6913)）@2013xile
* **[ファイルマネージャー]**
  * プレビューマッチルールの修正（[#6902](https://github.com/nocobase/nocobase/pull/6902)）@mytharcher
  * クライアントコレクションの注入とアップロードパラメータの修正（[#6909](https://github.com/nocobase/nocobase/pull/6909)）@mytharcher
  * 非画像ファイルのプレビュー URL の問題を修正（[#6889](https://github.com/nocobase/nocobase/pull/6889)）@mytharcher
* **[ワークフロー：メールノード]** 未定義の「宛先」フィールドの処理とメール受信者の処理を改善（[#6915](https://github.com/nocobase/nocobase/pull/6915)）@sheldon66
* **[ワークフロー：カスタムアクションイベント]**
  * 数回クリック後のボタン動作エラーの修正 @mytharcher
  * エラーハンドラがクラスでマッチしない問題の修正 @mytharcher
* **[ワークフロー：承認]** 関連付け追加計算の修正 @mytharcher
