## 新機能

### ロールユニオン

ロールユニオンは権限管理の方式です。システム設定に応じて、システム開発者は「独立したロールの使用」「ロールのユニオンを許可」「ロールのユニオンのみを許可」から選択でき、様々な権限要件に対応します。

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

参考ドキュメント： [ユーザーマニュアル](https://docs-jp.nocobase.com/handbook/acl/manual)

### 認証と二要素認証（2FA）

元の認証コード機能が認証管理システムにアップグレードされ、TOTPなど複数の認証方式をサポートします。ログイン時にパスワードに加え、追加の認証ステップを必要とする二要素認証（2FA）にも対応し、アカウントの安全性を大幅に向上させます。

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

参考ドキュメント：

* [Verification](https://docs-jp.nocobase.com/handbook/verification)
* [Two-Factor Authentication](https://docs-jp.nocobase.com/handbook/two-factor-authentication)
* [TOTP Authenticator](https://docs-jp.nocobase.com/handbook/verification-totp-authenticator)

### Import Pro

インポート設定で複数フィールドを使ったレコードの一意識別が可能になり、空白セルを上書きするか無視するかのモード設定にも対応しました。

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

参考ドキュメント： [インポート Pro](https://docs-jp.nocobase.com/handbook/action-import-pro)

### テンプレート印刷

テンプレート印刷に動的画像とバーコードのレンダリング機能を追加しました。

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

参考ドキュメント： [Template Printing](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### 複数キーワードフィルター

複数キーワードフィルタープラグインがNocoBaseプラットフォームに強力なテキスト検索機能を追加し、複数のキーワードでのデータ絞り込みを可能にして、クエリの柔軟性と効率を大幅に向上させます。

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

参考ドキュメント： [Multiple keyword filter](https://docs-jp.nocobase.com/handbook/multi-keyword-filter)

### 日付フィルターが相対日付範囲選択に対応

カスタムの時間オフセット（日/週/月/四半期/年）や特定の日付による絞り込みをサポートし、より柔軟な期間検索を実現します。

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### フィールド連動ルールの拡張フィルター演算子

`select`、`radioGroup`、`multipleSelect`、`checkboxGroup`などのフィールドの選択肢を動的に設定でき、フォーム内の他フィールドの変化に連動して選択肢が更新されます。日付フィールドの範囲も動的に設定可能で、フォームの他のフィールドの変化に応じて自動調整されます。

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

参考ドキュメント： [Field Linkage Rules](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### 左側の変数

条件内の左側変数は連動ルールにおける「判定対象のオブジェクト」を定義し、この変数の値を評価して連動動作のトリガーを判定します。

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

参考ドキュメント： [Left-side Variables](https://docs-jp.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### 継承テンプレート

継承テンプレートは、テンプレートの基本更新をブロックに反映しつつ、特定の調整も可能にします。ブロックはテンプレート設定を継承し、拡張や上書きができ、未変更の設定はテンプレートの更新と同期します。

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

参考ドキュメント： [Inherited Template](https://docs-jp.nocobase.com/handbook/block-template#inherited-template)

### ブロック連動ルール

ブロック連動ルールにより、ユーザーはブロックの表示制御を動的に行え、ブロック単位での要素管理が可能です。

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

参考ドキュメント： [Block Linkage Rules](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### 送信成功後の動作

送信成功後に他のブロックのデータを更新したり、パラメータ付きで詳細ページに遷移することができます。

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

参考ドキュメント： [提交成功後](https://docs-jp.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### コードフィールド追加

![image-q0jwvb.png](https://static-docs.nocobase.com/image-q0jwvb.png)

### ワークフロー分類管理

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### 部門と添付ファイルURLプラグインのオープンソース化

## 改善点

### Ant Design 関連依存パッケージをバージョン 5.24.2 にアップグレード

### XLSXのインポート・エクスポート処理のパフォーマンス最適化

### ワークフローの実行効率が100％向上しました
