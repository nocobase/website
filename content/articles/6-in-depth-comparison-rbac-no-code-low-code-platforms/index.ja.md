## 序文

ノーコード／ローコードプラットフォームの設計において、**RBAC（ロールベースアクセス制御）**\は避けて通れないテーマです。

チームの協働やデータ保護、多モジュールシステムの管理など、ユーザーとリソースの境界が関わるあらゆる場面で、ロールと権限の設計が必要となります。

開発者や企業ユーザーにとってもRBACは常に関心の高い分野であり、セキュリティを支える重要な要素であると同時に、拡張性やメンテナンス性にも大きな影響を与えます。

Redditでも、このテーマの議論は絶えません。

![1Reddit.PNG](https://static-docs.nocobase.com/1-jynjqp.PNG)

> 「ロールと権限付きのユーザー認証を追加しようとするたびに、すべてが崩壊する。ロジックは単純だが、実装すると破綻してしまう。」

この開発者は、わずか3つのロール（一般ユーザー、販売者、管理者）を備えた小さなアプリを作ろうとしただけでした。

しかし、実装が進むにつれ権限の入れ子構造が複雑化し、RBACが最もトラブルの多い部分になったのです。

一方で、別の視点からの不満もあります。

![nocode.PNG](https://static-docs.nocobase.com/2-cdafla.PNG)

> 「Budibaseはオープンソースを名乗っているのにユーザー数制限がある。Appsmithは細かい権限管理が有料プラン限定だ。」

多くのノーコード／ローコードプラットフォームでは、権限管理が依然として弱点です。

権限粒度が粗く、ページ単位でしか制御できないものや、詳細なロール・データ制御を有料版に限定しているものも少なくありません。

その結果、ユーザーはセキュリティとコストの間で妥協を迫られます。

RBACモデルの本質は次の問いに集約されます：

> 「誰が、どのリソースに、どんな操作をできるのか？」

ノーコード環境ではこの対応関係が非常に複雑になり、

開発者、業務ユーザー、外部顧客など多様なロールに対応しながら、

データベース、フィールド、ページ、ワークフローなど多階層のリソースを管理する必要があります。

これらを視覚的に設定できるようにしつつ、論理の一貫性を保つことが、多くのプラットフォームにとっての難所となっています。

以前の記事「[RBAC（ロールベースアクセス制御）システムの設計方法 - NocoBase](https://www.nocobase.com/ja/blog/how-to-design-rbac-role-based-access-control-system)」では、  ロールとリソースの抽象化、条件付き権限の設計、複数ロール間の境界管理について詳しく解説しました。  この記事では、その知見をもとに、  代表的な6つのプラットフォーム（NocoBase、Retool、OutSystems、Appsmith、Budibase、Mendix）を  「権限粒度」「柔軟性」「操作性」という観点で比較します。

以下の表では、それぞれのプラットフォームがどのようにRBACを実装しているか、その全体像をひと目で確認できます👇

> 比較のため、★で権限の粒度を表しています。
>
> ★ = 粗い粒度
>
> ★★★★★ = 最も細かい粒度


| プラットフォーム | オープンソースか                 | 権限粒度                                                                                 | 柔軟性                                             | 使用体験                         |
| ---------------- | -------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------- |
| NocoBase         | オープンソース（セルフホスト可） | ★★★★★ フィールド、条件、アクション、APIレベルの権限をサポート。ルール設定は可視化。 | 高：プラグイン構造で拡張可能                       | 可視化設定で多ロールチームに適す |
| Appsmith         | オープンソース（コミュニティ版） | ★★★★☆ ページ、クエリ、データソース単位の権限。上位機能は有料。                      | 高：プリセット＋カスタムロール、属性レベル制御あり | UI直感的で学習コスト低い         |
| Budibase         | オープンソース（セルフホスト可） | ★★★★ テーブル、ビュー、ページ単位での権限。条件ルールは限定的。                      | 中高：ロール階層と条件制御をサポート               | 簡単設定で中小チーム向き         |
| Mendix           | クローズド／商用                 | ★★★★ モジュール、エンティティ、ページ、フローレベルの権限                            | 中：柔軟だが開発介入必要                           | 安定：企業向けガバナンスに強み   |
| Retool           | クローズド／商用                 | ★★★★ アプリ／リソース／クエリ単位。企業版で行レベルセキュリティ対応                  | 中高：Permission Groupsとルール設定可能            | 高機能だが設定複雑・価格高       |
| OutSystems       | クローズド／商用                 | ★★★★ 画面、モジュール、データ単位。拡張には開発必要                                  | 中：構造明確だが柔軟性に制限あり                   | 企業向け：成熟した安全モデル     |

## NocoBase

🔗 公式サイト：[https://www.nocobase.com/ja/](https://www.nocobase.com/ja/)

📘 公式ドキュメント：[https://docs-cn.nocobase.com/handbook/ui/actions/permission](https://docs-cn.nocobase.com/handbook/ui/actions/permission)

![NocoBase.png](https://static-docs.nocobase.com/3-y4vcqt.png)

* **権限粒度**：★★★★★ フィールド、条件、ビュー、アクション、APIレベルまで細かく設定可能。
* **特徴**：ロールに基づく多層的な権限管理を実現し、リソースタイプごとに柔軟にアクセス範囲を設定できる。ビューやアクション単位での権限制御にも対応。
* **操作体験**：直感的なUIで、画面上から直接リソースと操作範囲を調整できる。非技術職のユーザーでも容易に設定可能。
* **拡張性**：プラグイン構造により、権限ポリシーの拡張や外部認証（OAuth、SSO、LDAPなど）の統合が可能。企業環境でも複雑なアクセス制御や統合ID管理に対応。
* **ユーザー評価**：公式動画のコメントでは「RBAC機能が非常に強力でコストも抑えられる」と好評。

![NocoBaseRBAC.png](https://static-docs.nocobase.com/33-k8bhzc.png)

## Appsmith

🔗 公式サイト：[https://www.appsmith.com](https://www.appsmith.com)

📘 公式ドキュメント：[https://docs.appsmith.com/advanced-concepts/granular-access-control](https://docs.appsmith.com/advanced-concepts/granular-access-control)

![Appsmith.png](https://static-docs.nocobase.com/4-d9xcwy.png)

* **権限粒度**：★★★★☆ アプリ、ページ、クエリ、データソース単位の制御が可能。企業版では属性レベルまで対応。
* **特徴**：Granular Access Control機能を備え、ロール継承やカスタム権限設定を柔軟に組み合わせ可能。承認ワークフローとの連携にも対応。
* **操作体験**：UIは整理されており、ユーザー・チーム・リソースを一括管理できる。環境ごと（開発／テスト／本番）の権限同期が可能で、チーム作業が効率化。
* **拡張性**：OAuth、SAML、OpenIDなどの外部認証をサポートし、REST APIで外部システムとも連携可能。
* **ユーザー評価**：無料版では権限制御が制限されており、[詳細なアクセス制御は企業版でのみ提供。](https://community.appsmith.com/solution/can-i-restrict-user-viewing-one-page-application)![Appsmith2.png](https://static-docs.nocobase.com/41-pqd1on.png)![Appsmith3.png](https://static-docs.nocobase.com/42-3wns84.png)

## Budibase

🔗 公式サイト：[https://www.budibase.com](https://www.budibase.com)

📘 公式ドキュメント：[https://docs.budibase.com/changelog/rbac](https://docs.budibase.com/changelog/rbac)

![Budibase.png](https://static-docs.nocobase.com/5-93g198.png)

* **権限粒度**：★★★★ テーブル、ビュー、ページ単位の制御が可能。フィールドや条件ロジックはカスタマイズで対応。
* **特徴**：RBACモジュールを標準搭載し、ロールごとのアクセス、可視性、操作範囲を設定できる。複数ロールの組み合わせや動的データフィルタリングにも対応。
* **操作体験**：ドラッグ＆ドロップで設定できる視覚的UIを採用し、専門開発者がいないチームでも手軽に導入できる。
* **拡張性**：REST APIとWebhookを提供し、外部認証サービスや社内ゲートウェイとの連携も容易。
* **ユーザー評価**：[BudibaseのGitHubディスカッション](https://github.com/budibase/budibase/discussions/13411)では「高機能でオープンソース」と評価される一方、セルフホスト環境でのユーザー数制限（最大20人）には不満の声もある。

![Budibase2.png](https://static-docs.nocobase.com/51-6snnrx.png)

## Mendix

🔗 公式サイト：[https://www.mendix.com](https://www.mendix.com)

📘 公式ドキュメント：[https://docs.mendix.com/refguide9/user-roles/](https://docs.mendix.com/refguide9/user-roles/)

![Mendix.png](https://static-docs.nocobase.com/6-zb8c0p.png)

* **権限粒度**：★★★★ モジュール、データエンティティ、ページ、マイクロフロー単位でのアクセス制御を提供。
* **特徴**：Module RolesとUser Rolesの二層構造により、ページやボタン、データソースごとに柔軟なアクセス設定が可能。
* **使い勝手**：エンタープライズ向けの成熟したセキュリティモデルを持ち、UIは明快。ただし設定手順が多く、複数モジュール間の同期には管理負担がある。
* **拡張性**：Javaアクションやマイクロフローで拡張可能。Azure ADやOktaとの統合にも対応。
* **ユーザー評価**：[G2レビュー](https://www.g2.com/products/mendix/reviews/mendix-review-11260772)では「権限設計が優れており、開発効率が高い」との声が多いが、「複雑な処理ではパフォーマンスが低下し、費用も高い」との指摘もある。

![Mendix2.png](https://static-docs.nocobase.com/61-jyhmqr.png)

## Retool

🔗 公式サイト：[https://retool.com](https://retool.com)

📘 公式ドキュメント：[https://docs.retool.com/permissions/quickstart](https://docs.retool.com/permissions/quickstart)

![Retool.png](https://static-docs.nocobase.com/7-1iv36b.png)

* **権限粒度**：★★★★ アプリ、リソース、クエリ単位の制御に対応。エンタープライズ版では行レベルセキュリティや監査ログ機能を搭載。
* **特徴**：Permission Groupsによるロール・アクセス管理を採用。環境ごとの分離や承認フロー構築にも対応。
* **使い勝手**：管理画面は見やすいが、設定階層が多く大規模運用では追加ルールが必要。
* **拡張性**：SSO、SCIM、SAMLなどに対応し、APIを使った拡張も可能。
* **ユーザー評価**：[Retoolコミュニティ](https://community.retool.com/t/best-practices-for-permission-management/55709)では「権限グループの仕組みは良いが、大規模運用ではカスタム属性管理が煩雑になる」との意見がある。
* ![Retool2.png](https://static-docs.nocobase.com/71-h3a9wy.png)

💡 *詳しく読む：[2025年のRetoolに対する最良のオープンソース代替品 - NocoBase](https://www.nocobase.com/ja/blog/retool-open-source-alternatives)*

## OutSystems

🔗 公式サイト：[https://www.outsystems.com](https://www.outsystems.com)

📘 公式ドキュメント：[https://success.outsystems.com/documentation/11/user\_management/user\_roles](https://success.outsystems.com/documentation/11/user_management/user_roles)

![OutSystems.png](https://static-docs.nocobase.com/8-t6bf6d.png)![OutSystems2.png](https://static-docs.nocobase.com/81-82gsuu.png)

* **権限粒度**：★★★★ 画面、モジュール、データ、UIコンポーネント単位で制御可能。ロジック層で条件設定も可能。
* **特徴**：統合されたロール管理とアクセス制御を備え、画面やデータ単位で柔軟に権限設定できる。
* **使い勝手**：体系は明確だが、設定にはIDE（Service Studio）の操作が必要で初心者にはやや分かりにくい。
* **拡張性**：Azure ADやOktaなどの外部認証との連携が容易で、拡張APIも充実。
* **ユーザー評価**：[G2レビュー](https://www.g2.com/products/outsystems/reviews?page=4#reviews)では「視覚的で整理された権限管理UIがわかりやすい」と高評価。

![OutSystems3.png](https://static-docs.nocobase.com/82-73bank.png)

## 結論

これらのノーコード／ローコードプラットフォームはRBACの実装においてそれぞれ独自の強みを持ちます。

* **🟢 NocoBase**：オープンソースの中で最も粒度が細かく、直感的に設定できる。自社管理や高度な権限制御が必要なチームに最適。

  * 👉 フィールドレベルの権限制御を体験するには：[ノーコードで柔軟かつ強力なCRMプラットフォーム - NocoBase](https://www.nocobase.com/ja/solutions/crm)
  * 👉 詳しく知りたい方は：[NocoBase公式RBAC設計ガイド](https://www.nocobase.com/ja/blog/how-to-design-rbac-role-based-access-control-system) をご覧ください。
* **🟡 Appsmith**：内部ツール構築に適し、UIがシンプル。高度な権限機能は企業版限定。
* **🟡 Budibase**：導入が容易で中小チーム向き。無料版はユーザー制限あり。
* **🟠 Mendix／OutSystems**：企業統合に強く、セキュリティが堅牢。設定が複雑でコストは高め。
* **🟠 Retool**：企業向けセキュリティが優秀だが、多ページ・多ロール構成では追加設定が必要。

ニーズに応じて、自社の開発体制やセキュリティ要件に最も適したRBACモデルを選択するのが良いでしょう。


**関連読み物：**

* [GitHubで注目のオープンソースAIローコードツール14選 ](https://www.nocobase.com/ja/blog/14-ai-low-code-platforms-github)
* [GitHubで人気のオープンソースノーコードAIツール11選](https://www.nocobase.com/ja/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub で Star 数トップ18 のオープンソース AI Agent プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-ai-agent-projects)
* [GitHubで最もスターを獲得したオープンソースAIプロジェクト20選](https://www.nocobase.com/ja/blog/github-open-source-ai-projects)
* [GitHub でスター数トップ 8 のオープンソース MCP プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects)
* [GitHubスター数トップのオープンソースWebアプリ7選](https://www.nocobase.com/ja/blog/github-open-source-web-applications)
* [GitHub のスター数上位 40 の開発者ツール](https://www.nocobase.com/ja/blog/github-open-source-developer-tools)
