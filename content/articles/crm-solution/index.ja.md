オープンソースのノーコードプラットフォーム NocoBase に、公式 CRM ソリューションが新たに加わりました。

NocoBase はこれまでもさまざまな業務アプリの構築に活用されてきましたが、なかでも CRM は特に人気の高いユースケース。そのため、私たちが最初の公式ソリューションとして選んだのもごく自然なことでした。

💡 詳細情報：[数時間でCRMを構築する：知っておくべきトップのノーコード/ローコードツール](https://www.nocobase.com/ja/blog/low-code-no-code-crm-builder)

現在、ライブデモ環境で実際の動作をご確認いただけます。自社のニーズに合わせてすぐに使い始めることも可能です。

👉 今すぐ体験する：[https://www.nocobase.com/ja/solutions/crm](https://www.nocobase.com/ja/solutions/crm)

<iframe width="679" height="382" src="https://www.youtube.com/embed/rU0xaUYEtYk" title="NocoBase CRM Solution is Now Live" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## なぜ CRM なのか？

CRM システムは、NocoBase で特によく使われているユースケースのひとつです。

その理由は明確です。CRM は構造がはっきりしていて、ワークフローが標準化されており、データの関係性も整理されています。つまり、NocoBase の特長——ビジュアルでのデータモデリング、柔軟な権限設定、自動ワークフロー、内蔵チャートなど——を最大限に活かせる分野です。

さらに嬉しいのは、世界中のユーザーが実際の業務で活用し、その効果がすでに証明されていること。だからこそ、私たちはまず CRM を公式ソリューションとしてリリースしました。

💡 詳細情報：[カスタムCRMの4つの実際の事例（より柔軟なCRM製品の選び方）](https://www.nocobase.com/ja/blog/custom-crm-case-studies)

## CRM デモでできること

今回のデモでは、実際に使える CRM システムをそのまま体験できます。

例えば：

* 顧客、担当者、企業情報の管理
* ファネルチャートやランキングを含むダッシュボードのカスタマイズ
* 承認フローの処理や、システム内からのメール送信
* リマインダー設定、ワークフローの自動実行、タスク割り当て
* 項目やデータのつながり、権限、画面レイアウトの自由な編集

データ設計から UI、業務ロジックまで、すべてノーコードで直感的に構築されています。

💡 詳細情報：

* [NocoBaseでCRMのリード変換を実装する方法](https://www.nocobase.com/ja/tutorials/how-to-implement-lead-conversion-in-nocobase)
* [NocoBaseにおけるCRM販売パイプラインの可視化：リードステータスプログレスバーとステージ管理](https://www.nocobase.com/ja/tutorials/nocobase-crm-sales-pipeline-visualization-lead-status-progress-bar)

## 商用プラグインには何が使われているの？

現在の CRM デモには、以下の商用プラグインが導入されています。これにより、よりリアルな業務体験が再現できるようになっています。


| プラグイン名                                                                                          | CRM での役割                                             | プラグインなしの代替手段                                            |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------- |
| [データ可視化（ECharts）](https://docs-jp.nocobase.com/handbook/data-visualization-echarts)           | ファネルや棒グラフ、円グラフなどのカスタムチャートを表示 | 無料チャートプラグインを使うか、iframe で外部チャートを埋め込み可能 |
| コメント機能（データテーブル）                                                                        | 顧客や連絡先、チケットなどにコメントを追加               | Markdown（Vditor）とリスト表示の組み合わせで代用可                  |
| [メール管理](https://docs-jp.nocobase.com/handbook/email-manager/usage-user)                          | システム内でメールを送信・管理（大量送信対応）           | データテーブル＋メールノードで一部対応可（添付ファイルは不可）      |
| [バックアップマネージャー](https://docs-jp.nocobase.com/handbook/backups)                             | データのバックアップや復元、配布管理                     | 手動でのデータベース移行で対応可                                    |
| [トリガー: 承認](https://docs-jp.nocobase.com/handbook/workflow/triggers/approval)                    | 見積や注文の承認フローを構築                             | ステータス項目＋連動ルールで代替可能だが複雑なフローには不向き      |
| [トリガー: JSON 变量映射](https://docs-jp.nocobase.com/handbook/workflow/nodes/json-variable-mapping) | SQL の実行結果から営業担当へのリード割り当て             | SQL ストアドプロシージャで対応可能                                  |
| [トリガー: JSON クエリ](https://docs-jp.nocobase.com/handbook/workflow/nodes/json-query)              | リード割り当て後の処理で高度な JSON 分析                 | SQL プロシージャで代用可                                            |
| [トリガー: カスタム変数](https://docs-jp.nocobase.com/handbook/workflow/nodes/variable)               | 一時的な値（例：チケット作成後の顧客 ID）を保持          | SQL を使って代替可                                                  |
| [アクション: エクスポート Pro](https://docs-jp.nocobase.com/handbook/action-export-pro)               | 任意のテーブルからデータをエクスポート                   | 標準のエクスポート機能で簡易対応                                    |
| [アクション: インポート Pro](https://docs-jp.nocobase.com/handbook/action-import-pro)                 | 任意のテーブルへデータをインポート                       | 標準のインポート機能で基本的には対応可                              |
| [カスタム変数](https://docs-jp.nocobase.com/handbook/custom-variables)                                | タブにバッジを表示して件数を視覚化                       | ⚠️ 現時点では未対応                                               |
| [テンプレート印刷](https://docs-jp.nocobase.com/handbook/action-template-print)                       | 見積書や注文書の印刷出力を自動生成                       | ⚠️ 現時点では未対応                                               |
| 履歴（ベータ版）                                                                                      | レコードの変更履歴を追跡                                 | ⚠️ 現時点では未対応                                               |

商用プラグインがなくても基本的な機能は構築可能ですが、より高度な体験を求める場合は活用がおすすめです。

## 商用プラグインがなくても大丈夫？

はい、ご安心ください。NocoBase の基本機能だけでも、十分に実用的な CRM を構築・運用できます。以下は、一部の高度な機能に対する代替方法のご紹介です。

1. **リードの自動割り当てなど、複雑なロジックが必要な場合**

事前イベントや JSON 解析ノード、JavaScript ノードが使えない場合でも、SQL のストアドプロシージャで代替可能です。ただし、コードの管理が複雑になったり、将来的な移行が難しくなる点には注意が必要です。

2. **履歴ログが使えない場合の変更追跡**

履歴ログプラグインがなくても、事前イベント・クエリノード・JavaScript ノードを組み合わせることで変更内容を比較できます。ただし、処理が重くなりがちで、大量データや頻繁な変更がある場面ではパフォーマンス面に課題が出るかもしれません。

3. **コメント機能がない場合の対応**

コメント専用のブロックがなくても、Markdown フィールドとリスト表示を組み合わせることで、シンプルなコメント欄を再現できます。以下のチュートリアルも参考になります：  👉 [第4章：タスクとコメントプラグイン - NocoBase](https://www.nocobase.com/ja/tutorials/task-tutorial-plugin-use)  多少の工夫は必要ですが、基本的な使い方には十分対応可能です。

4. **その他、再現が難しい機能について**

カスタム変数やテンプレート印刷、履歴ログなどは、現時点では代替が難しく、大規模なカスタム開発や外部連携が必要になることがあります。

制約はありますが、工夫次第で十分に使える CRM を構築できます。必要に応じて、まずは基本機能から始めてみるのがおすすめです。

💡 詳細情報：[中小企業向け！軽量で使いやすいオープンソースCRMソフト4選](https://www.nocobase.com/ja/blog/the-best-4-crm-software-for-small-businesses)

## 自分の環境にコピーして使ってみよう

この CRM システムは、数クリックでご自身の NocoBase 環境にそのままコピーできます。

必要に応じて機能を追加・削除・カスタマイズできるので、自社にぴったりの形に仕上げることが可能です。

📘 導入手順はこちら：[NocoBase CRMデモ 導入ガイド](https://www.nocobase.com/ja/tutorials/nocobase-crm-demo-deployment-guide)

さらに、今回の CRM がどのように作られているのかを詳しく解説するチュートリアルも順次公開予定です。

そして、これはまだ第一歩にすぎません。今後は、チケット管理やプロジェクト管理など、すぐに使える新しいソリューションも続々登場予定です。

**関連読み物：**

* [GitHubで人気のオープンソースERP＆CRMプロジェクト10選](https://www.nocobase.com/ja/blog/top-10-most-starred-open-source-erp-and-crm-on-github)
* [GitHubで最も星を集めたオープンソースCRMプロジェクトトップ11](https://www.nocobase.com/ja/blog/github-open-source-crm-projects)
* [NocoBase vs Salesforce: 理想のCRMを選ぶには？](https://www.nocobase.com/ja/blog/nocobase-vs-salesforce)
