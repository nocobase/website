### 🎉 新機能

* **[client]** モーダル編集に対応したサブテーブル用フィールドコンポーネントを追加 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
* **[ワークフロー]** ノード移動用の API を追加 ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### 🚀 機能改善

* **[client]**
  * セル更新時にテーブル全体が再レンダリングされる挙動を改善 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
  * 複数サブフォームで初期状態として 1 件のオブジェクトを保持し、Add New を操作しなくても入力可能に変更。未入力の場合はレコードを作成しないように改善 ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh
* **[ファイルマネージャー]** 拡張可能なプレビューコンポーネントをファイルマネージャーに追加 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher
* **[ワークフロー]** ワークフロー関連のサブページを `/admin/settings/workflow` 配下に統一するため、ルーティングパスを整理 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * フィルターブロックで日付に時刻を含めた場合、時刻フォーマットが重複表示される不具合を修正 ([#8506](https://github.com/nocobase/nocobase/pull/8506)) by @zhangzhonghe
  * 多階層の多対多フィールド用サブフォームにおいて、フィールド連動ルールでフォーム変数を用いた代入が機能しない不具合を修正 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  * 複数階層のモーダルやブロックをまたぐデータ変更後に画面が更新されない不具合を修正 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
  * 編集フォームで閲覧モードに設定したサブ詳細データが正しく表示されない不具合を修正 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh
  * targetKey における選択可能フィールドの処理ロジックを修正 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  * 編集状態のサブテーブルで、関連フィールドの Select に設定された filter パラメータが誤っている不具合を修正 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
* **[flow-engine]** 外部データソースで filterTargetKey が単一要素の配列の場合に、FilterByTK の処理が正しく行われない不具合を修正 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
* **[AI 従業員]** AI モデリングおよびデータソース管理モジュール間で、選択可能フィールド設定が一致しない不具合を修正 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock
* **[メール管理]** テキスト選択時に本文が折りたたまれないよう改善し、あわせて添付ファイルのダウンロード失敗を修正 by @jiannx
