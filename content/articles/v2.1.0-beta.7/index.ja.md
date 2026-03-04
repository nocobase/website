### 🎉 新機能

* **[AI 社員]** AI対話のユーザープロンプト編集を更新 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 不具合修正

* **[client]**
  * デフォルト値コンポーネント内でフィールドコンポーネントがレンダリングされない問題を修正 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  * メニュー切り替え時にデータブロックが更新されない問題を修正 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
* **[flow-engine]** ctx.exitがユーザー定義イベントフローの実行を終了できない問題を修正 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
* **[database]** v2バージョンにおけるフィールドのカスタム正規表現バリデーション失敗を修正 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
* **[server]** hashパラメータを追加することでキャッシュが更新されない問題を解決 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
* **[権限制御]** ACLメタデータ設定時に使用されるデータベースインスタンスが正しくない問題を修正 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
* **[AI 社員]**
  * ナレッジベース有効化後にAI社員との対話でエラーが発生する問題を修正 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
  * AIデータソース設定のレンダリング異常を修正 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
* **[フロントエンドフローエンジン]** SQL削除時のエラーを修正 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
* **[ワークフロー：カスタム操作イベント]** カスタム操作イベントがサブフローとして呼び出された際に停止する問題を修正 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
* **[ワークフロー：承認]**
  * ノード情報がタイプフィルタリングされた後、ノード検索結果が承認画面に表示されない問題を修正 by @mytharcher
  * 承認提出時にリレーションデータが更新および処理されない問題を回避するため、不足していたパラメータを補完 by @mytharcher
  * 手動で承認ワークフローを実行した際のエラーを修正 by @mytharcher
  * 追加承認および転送承認後に `dataAfter` フィールド値が欠落し、一覧読み込み時にエラーが発生する問題を修正 by @mytharcher
  * ユーザーに関連権限がない場合、リレーションフィールドが作成または更新されるべきでない権限問題を修正 by @mytharcher
  * 承認操作においてリレーションフィールドの値をフィルタリングし、越権データ操作を回避 by @mytharcher
  * ACLに基づくappendsパラメータのフィルタリング問題を修正 by @mytharcher
