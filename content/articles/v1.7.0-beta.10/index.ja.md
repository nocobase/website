### 🎉 新機能

- **[client]** 提出後に変数設定をサポートし、現在のデータIDを用いたリダイレクトに対応 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[コレクションフィールド：Markdown(Vditor)]** VditorがS3 Proに対応 ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

### 🚀 改善

- **[client]**
  - 純テキストファイルのみのプレビューに対応 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - 502エラーメッセージの最適化 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 連動ルールの各フィールド属性に対し、利用可能なアクションを制限 ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[ファイルマネージャー]** ストレージの `getFileData` API を調整 ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[アクセス制御]** ロール切替の順序とスタイルを最適化 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[コレクションフィールド：シーケンス]** シーケンスをカレンダーブロックのタイトルフィールドとして設定可能に ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[ワークフロー]** 実行済みカラムを統計テーブルに分割 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[ワークフロー：カスタムアクションイベント]** 実行済みカラムを統計テーブルに分割 by @mytharcher
- **[ワークフロー：承認]**
  - 実行済みカラムを統計テーブルに分割 by @mytharcher
  - 設定においてバリデーターのスキップをサポート by @mytharcher

### 🐛 バグ修正

- **[client]**
  - 古いバージョンのブラウザではページが空白で表示される ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - 「省略オーバーフローコンテンツ」オプションは、ページをリフレッシュしないとトグル状態が反映されない ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - データ範囲のフィルタリングにおける日付フィールド表示の問題 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - モーダル内で別のモーダルを開くことができない ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - 関連フィールドを含むブロックでは、テンプレートとして保存する操作が失敗する ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - ページ上部のメニューが空白で表示される ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - フィールドに対し null 値の割り当てが無効 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
- **[ワークフロー]**
  - ワークフロー保存前にキーが生成されていることを確認 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
  - 自動削除オプション設定時のエラーを修正 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
- **[公開フォーム]** 公開フォームページのタイトルに「Loading...」が表示される問題を修正 ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[モバイル]** 携帯で表示されるフォントサイズを 14px に調整 ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[変数とシークレット]** フィルタボタンにアイコンがなく、フィルタ後に件数が表示されず、またページ切替時にデータが更新されない ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[ユーザー認証]** サインアップページのフィールドのローカライズ問題 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[APIドキュメント]** APIドキュメントページがスクロールできない ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[ワークフロー：操作後イベント]** 一括操作で複数レコードが複数回トリガーされるよう修正 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[ブロック：テンプレート]**
  - フォームの連動ルールがテンプレートから正しく同期されていない ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
  - 詳細ブロックにおいて、テンプレート保存メニューが重複している ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
- **[ワークフロー：承認]** 承認フォームの送信値の問題を修正 by @mytharcher