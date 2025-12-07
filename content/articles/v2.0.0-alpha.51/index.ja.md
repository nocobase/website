### 🎉 新機能

* **[client]**
  * テーマエディタで全体のスタイルを自由にカスタマイズできるようになりました ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo
  * 詳細ブロックでデフォルトの並び順を設定できるようになりました ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh
  * 数値フィールドのデータ型として、double・float・decimal を選べるようになりました ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos
* **[データテーブル項目：自動コード]** データ移行後に「自動コード」項目が自動的に更新されるようになりました ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 機能改善

* **[client]**
  * サブテーブルで行削除後に最後のページへ移動してしまう不具合を解消し、列ごとにバリデーションを設定できるようになりました ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh
  * 編集中のサブテーブルで、大きなフィールドがより見やすく表示されるよう調整しました ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh
  * JSON フィールドが長い場合でも、省略してわかりやすく表示できるようになりました ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh
* **[flow-engine]**
  * FlowModelRenderer にキャッシュを使える useCache オプションを追加しました ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe
  * モデルとその子モデルをまとめて削除できる `removeModelWithSubModels` を新たに追加しました ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe
* **[ブロック：グリッドカード]** グリッドカードに 1ページあたりの行数設定を追加し、pageSize は自動計算に切り替わりました ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh
* **[監査ログ]** 一意識別子の項目を `text` 型に変更し、一括編集時に長さ制限で保存できなくなる問題を防ぐようにしました by @2013xile
* **[移行管理]** データ移行後に「自動コード」項目が自動更新されるよう改善しました by @cgyrock

### 🐛 不具合修正

* **[client]**

  * ブロックを削除しても、フィルターブロックに残っていた対応フィールドが正しく消えない不具合を修正しました。 ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust
  * ボタンを非表示にした際、通常モードで余分なスペースが生じる問題を修正しました ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh
  * フィルターフォームのリセットボタンの文言が編集できなかった不具合を修正しました。 ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust
  * フィルター演算子が \$in / \$notIn の場合でも複数値を入力できるよう修正しました。 ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust
  * データブロックを追加した際、フィルターフォームのフィールド一覧に自動で反映されない問題を修正しました。 ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust
  * リレーションフィールドの設定メニューに「ショートカット作成」が表示されないよう調整しました。 ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust
  * リストブロックでリレーションのサブテーブルデータが誤って表示される不具合を修正しました。 ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh
  * データテーブルで設定した数値フィールドの検証ルールがフォームで反映されない問題を修正しました。 ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh
  * フィルターフォームのフィールドがバックエンドの検証ルールによって制限されてしまう問題を修正しました。 ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust
  * json フィールドのクイック編集で発生していたエラーを修正しました。 ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh
  * サブテーブル内の大きなフィールドが編集後に正しく表示されない問題を修正しました。 ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh
  * 多対多リレーションのドロップダウンで多選択を無効化した場合、ショートカット追加でエラーが出る不具合を修正しました。 ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh
  * json フィールド送信時に、内容がオブジェクトとして扱われるよう修正しました。 ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh
  * Enter キーでフィルターが実行できなかった問題を修正しました。 ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust
* **[flow-engine]**

  * フィールドコンポーネントを切り替えた際、以前のコンポーネントの設定項目がメニューに残ってしまう不具合を修正しました。 ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust
  * useEffect の実行位置を FlowModelRenderer 内の条件 return より前へ移動しました。 ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe
  * フィルター操作に対応していないリレーションフィールドが候補に表示されてしまう問題を修正しました。 ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust
* **[acl]** acl.allow が意図より早く実行されてしまう問題を修正しました ([#8065]) by @chenos
* **[ファイルマネージャー]**

  * List や Grid card の子詳細データが誤って表示される不具合を修正しました。 ([#8087])
  * 閲覧モードのサブテーブルで Attachment フィールドが正しく読み込めない問題を修正しました。 ([#8073])
* **[ワークフロー]**

  * 実行記録ビューでノード削除後にエラーが起きる問題を修正しました。 ([#8090])
  * 実行履歴ページでノードに記録がない場合にエラーが発生する問題を修正しました。 ([#8066])
* **[データテーブル項目：計算式]** 計算式フィールドをフィルターフォームに追加できなかった問題を修正しました。 ([#8071])
* **[ブロック：操作パネル]** List レイアウトの余白を調整し、見た目を改善しました。 ([#8084])
* **[AI スタッフ]**

  * データソース追加時にロール名が正しくコンパイルされない不具合を修正しました。 ([#8076])
  * 現在レコードの一部フィールドが変数リストに表示されない問題を修正しました。 ([#8053])
* **[操作：レコードインポート]** インポートするフィールドと権限設定のフィールドが一致しない不具合を修正しました。 ([#8075])
* **[権限管理]** 外部データソースに関連するデータテーブル操作へ、権限チェックのミドルウェアを追加しました。 ([#8062])
* **[ワークフロー：承認]**

  * 権限範囲に変数が含まれる場合、関連承認が取得できない問題を修正しました。
  * 承認者フォームで入力内容が消えてしまう不具合を修正しました。
  * データ詳細ポップアップで承認情報を読み込む際の権限エラーを修正しました。
  * 分岐モードや順次会署で処理が正しく行われない問題を修正しました。
  * 承認一覧の読み込み時にメモリが溢れる問題を修正しました。
  * 差戻し分岐で承認記録が利用できない問題を修正しました。
  * 承認者ポップアップでタイトルが表示されない問題を修正しました。
  * 役割の結合モードで承認データが読めずエラーが出る問題を修正しました。
* **[メール管理]**

  * 異常データへのフォールバック処理を追加しました。
  * 不同期の gmail の定…（原文が途中のためそのまま）
