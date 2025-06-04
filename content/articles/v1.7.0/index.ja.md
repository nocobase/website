## [v1.7.0](https://github.com/nocobase/nocobase/compare/v1.6.38...v1.7.0) - 2025-06-03

## 新機能

### ユーザーロールの結合

ロール結合は権限管理モードの一つです。システム設定に基づいて、システム開発者は独立ロールの使用、ロール結合の許可、またはロール結合のみの使用を選択でき、さまざまな権限要件を満たすことができます。

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

参考文書：[ロール結合](https://docs-jp.nocobase.com/handbook/acl/manual)

### 認証管理と二要素認証（2FA）

認証コード機能が認証管理にアップグレードされ、複数の認証方法（TOTPなど）をサポートします。ユーザーは認証方法を紐づけることができ、必要に応じて本人認証を完了できます。システムは二要素認証（2FA）もサポートし、ログイン時にパスワードに加えて追加認証が必要となり、アカウントのセキュリティを効果的に向上させます。

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

参考文書：

* [認証管理](https://docs-jp.nocobase.com/handbook/verification)
* [二要素認証](https://docs-jp.nocobase.com/handbook/two-factor-authentication)
* [TOTP認証器](https://docs-jp.nocobase.com/handbook/verification-totp-authenticator)

### テンプレート印刷

文書テンプレートは動的画像とバーコードレンダリング機能をサポートします。

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

参考文書：[テンプレート印刷](https://docs-jp.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### 複数キーワードフィルタ

複数キーワードフィルタプラグインは、NocoBaseプラットフォームに強力なテキストフィルタリング機能を追加し、複数キーワードを使用してフィルタリングを行うことができ、データクエリの柔軟性と効率を大幅に向上させます。

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

参考文書：[複数キーワードフィルタ](https://docs-jp.nocobase.com/handbook/multi-keyword-filter)

### 日付フィルタでの相対時間範囲選択のサポート

カスタム時間オフセット（日/週/月/四半期/年）と指定日付によるフィルタリングをサポートし、より柔軟な時間範囲クエリのニーズを満たします。

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### 連動ルール条件の左側での変数サポート

条件左側変数は、連動ルールにおける「判定対象」を定義するために使用され、その変数の値に基づいて条件判定を行い、連動動作をトリガーするかどうかを決定します。

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

参考文書：[左側変数](https://docs-jp.nocobase.com/handbook/ui/linkage-rule#%E5%B7%A6%E4%BE%A7%E5%8F%98%E9%87%8F)

### ブロック継承テンプレート

継承テンプレートは主に、ブロックがテンプレートの基本更新に従いつつ、独自の調整も行いたい場面に適用されます。継承テンプレートを通じて作成されたブロックは、テンプレートの設定を継承し、その基礎上で拡張や上書きを行うことができます。ブロックによって上書きされていない設定は、テンプレートの更新と同期されます。

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

参考文書：[継承テンプレート](https://docs-jp.nocobase.com/handbook/block-template#%E7%BB%A7%E6%89%BF%E6%A8%A1%E6%9D%BF)

### ブロック連動ルール

ブロック内で連動ルールを設定し、動的なブロック表示を実現することをサポートします。

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

参考文書：[ブロック連動ルール](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### 送信成功後

他のブロックのデータ更新をサポートし、パラメータ付きで詳細ページへの遷移をサポートします。

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

参考文書：[送信成功後](https://docs-jp.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### ワークフローカテゴリ管理

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### 部署と添付ファイルURLプラグインのオープンソース化

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## 最適化

### 連動ルール属性の最適化

* 選択タイプフィールドで選択可能なオプション属性の設定をサポート
* 日付タイプフィールドで日付範囲の設定をサポート

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

参考文書：[フィールド連動ルール](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### インポート記録Pro

インポート設定で複数フィールドによる一意レコードの定義をサポートし、空白セルの上書きと無視モードの設定をサポートします。

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

参考文書：[インポートPro](https://docs-jp.nocobase.com/handbook/action-import-pro)

### XLSX エクスポートのパフォーマンス最適化

* 大データテーブルエクスポート時のメモリオーバーフローによるアプリケーション停止
* エクスポート時に重複データが発生する可能性
* エクスポートデータのインデックス、ユニーク制約、インデックス戦略に基づくクエリ最適化
* 新しいエクスポート同時実行キューと環境変数による同時実行数設定の追加

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

参考文書：

- [同時エクスポート](https://docs-jp.nocobase.com/handbook/action-export-pro#%E5%B9%B6%E5%8F%91%E5%AF%BC%E5%87%BA)
- [パフォーマンスについて](https://docs-jp.nocobase.com/handbook/action-export-pro#%E5%85%B3%E4%BA%8E%E6%80%A7%E8%83%BD)

### XLSX インポートのパフォーマンス最適化

* インポート戦略を元の単一挿入からバッチ挿入に変更
* 重複識別を再構築し、単一からバッチに変更、更新ロジック、ワークフロートリガーなどのロジックは変更なし

参考文書：[パフォーマンスについて](https://docs-jp.nocobase.com/handbook/action-import-pro#%E5%85%B3%E4%BA%8E%E6%80%A7%E8%83%BD)

### ワークフロー実行効率が100%向上

![image-va9ose.png](https://static-docs.nocobase.com/image-va9ose.png)
