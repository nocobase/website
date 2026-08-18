### 🎉 新機能

* **[バックアップ管理]** AI モード Portal のバックアップと復元に対応し、専用設定を追加しました。 ([#10240](https://github.com/nocobase/nocobase/pull/10240)) by @2013xile

### 🚀 機能改善

* **[Portal 管理]**
  * 各 Portal のレイアウトをデスクトップ版またはモバイル版として指定するようにしました。AI Portal ではデスクトップ版をデフォルトで使用し、レイアウト選択項目を非表示にしました。また、レイアウト種別にかかわらず Portal を選択できるようにし、エントリーポイントからの遷移も修正しました。 ([#10230](https://github.com/nocobase/nocobase/pull/10230)) by @zhangzhonghe
  * Portal Manager のフォーム文言と補足説明を改善しました。 ([#10242](https://github.com/nocobase/nocobase/pull/10242)) by @katherinehhh
* **[ワークフロー]** ワークフローの作成・更新ノードで文字列フィールドやテキストフィールドに値を設定する際、テキストと変数を連結して使用できるようにしました。 ([#10238](https://github.com/nocobase/nocobase/pull/10238)) by @mytharcher
* **[AI: ナレッジベース]** ナレッジベースページのレイアウト、スクロール動作、読み込み状態、空状態の表示、操作ボタンの配置を改善しました。 by @cgyrock

### 🐛 不具合修正

* **[cli]** サブアプリやカスタムドメインを使用する環境で、portal CLI のパス解析、デプロイ、HTML ビルドが正しく動作しない問題を修正しました。また、portal を無効化した場合も、既存の HTML ファイルを削除せず保持するようにしました。 ([#10244](https://github.com/nocobase/nocobase/pull/10244)) by @chenos
* **[ワークフロー]** ワークフローを手動実行する際、`autoRevision=0` を指定しても新しいバージョンが作成される可能性がある問題を修正しました。 ([#10243](https://github.com/nocobase/nocobase/pull/10243)) by @mytharcher
* **[UI テンプレート]** フィルター条件が空のテーブルブロックで、別のページへ移動して戻った後もデータが読み込まれてしまう問題を修正しました。 ([#9890](https://github.com/nocobase/nocobase/pull/9890)) by @zhangzhonghe
* **[ユーザー]** ログイン画面と登録画面を切り替えた際も、遷移元のノーコード Portal の情報を保持するようにしました。 ([#10235](https://github.com/nocobase/nocobase/pull/10235)) by @katherinehhh
* **[テンプレート印刷]** DOCX テンプレートから PDF を生成した際、中国語と英語の文字の間に意図しない余白が入る問題を修正しました。 by @jiannx
* **[ワークフロー：承認]** 承認ページに外部データソースのフィールドが表示されない問題を修正しました。 by @zhangzhonghe
