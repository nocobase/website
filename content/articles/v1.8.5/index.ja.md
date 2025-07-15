### 🚀 機能改善

* **[コレクションフィールド：数式]** さらに多くの計算可能なインターフェースを追加（[#7215](https://github.com/nocobase/nocobase/pull/7215)）@mytharcher
* **[ワークフロー]** ステータスにより実行が不要な場合、エラーをスローする代わりにロギングを使用（[#7217](https://github.com/nocobase/nocobase/pull/7217)）@mytharcher
* **[ワークフロー：承認]** 関連データが削除された場合に承認を削除できるようにサポート @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 連動規則で添付ファイルフィールドを変数として選択できない問題（[#7213](https://github.com/nocobase/nocobase/pull/7213)）@zhangzhonghe
  * iOS でドロップダウン選択コンポーネントがキーボードに遮られる問題を修正（[#7149](https://github.com/nocobase/nocobase/pull/7149)）@zhangzhonghe
  * 選択フィールドに値とオプションの両方が設定されている場合、編集フォームでの値の割り当てに失敗する問題（[#7209](https://github.com/nocobase/nocobase/pull/7209)）@katherinehhh
  * フィルター折りたたみ：フィールドにデフォルト値を設定後、ページ初期化時にフィルターがトリガーされない問題（[#7206](https://github.com/nocobase/nocobase/pull/7206)）@zhangzhonghe
  * カンバンソートフィールドを使用したリストブロックで値を割り当てる際のエラー（[#7208](https://github.com/nocobase/nocobase/pull/7208)）@katherinehhh
  * サブメニューを切り替えた際にブラウザタブのタイトルが同期されない問題（[#7207](https://github.com/nocobase/nocobase/pull/7207)）@zhangzhonghe
  * ポップアップアクション：タブを切り替えた後のページ表示が期待通りでない問題（[#7212](https://github.com/nocobase/nocobase/pull/7212)）@zhangzhonghe
* **[acl]** ルートロールを含むロール統合モードでロールを削除する際のエラーを修正（[#7198](https://github.com/nocobase/nocobase/pull/7198)）@aaaaaajie
* **[マルチアプリマネージャー]** 認証オプションが予期しない位置に表示される問題を修正（[#7210](https://github.com/nocobase/nocobase/pull/7210)）@mytharcher
* **[認証]** ログインページがスクロールできない問題を修正（[#7159](https://github.com/nocobase/nocobase/pull/7159)）@zhangzhonghe
* **[ワークフロー：承認]** 承認送信時の関連データを修正 @mytharcher
