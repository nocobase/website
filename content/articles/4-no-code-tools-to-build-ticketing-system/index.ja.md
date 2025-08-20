Redditでは、工単管理システム（Ticketing System）についての議論が頻繁に見られます。

[小さなオフィスで独自に運営しているユーザーが言いました：](https://www.reddit.com/r/selfhosted/comments/1282l0y/best_opensource_it_ticketing_system/)

> 「オープンソースのITワークオーダーシステムが必要です。できれば自己ホスティングでき、資産管理、LDAP統合、顧客のセルフサービス請求書作成がサポートされているものがいいです。でも、私は一人で運営しているので、システムはあまり複雑にできません。」

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=Njk3MGNkZTMyYTlkMzJkM2RjOTVmMmFmNTIxMGIyMDNfWUFUMjNvVmNJeFR0UFBoSTRydGJTWDJKT2x5RnNSMjNfVG9rZW46RlRZZmJ0Zndrb2dMakJ4VkU0RmM2WUc3blVmXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

[別の中小企業のITチームはこう話しています：](https://www.reddit.com/r/ITManagers/comments/1mt7oy4/modern_it_ticketing_system_with_automation/)：

> 「ようやく古い工単システムを置き換えることになりました。モダンで導入が簡単、さらに自動化できるツールを探していますが、選択肢が多すぎる上に価格差も大きく、どれを選べばよいかわかりません。」

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NmQ1Y2IzODhlYjM4OGY0OTMyMWE3NzM4NmZhMTFmNjVfMHRuWFBtejNEZFJjRGV5eDR1c0p0M2dUSGM2alN4STZfVG9rZW46VURrR2JmWGw0b2pXZ054V3ZOamNkbm9Gbk5oXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

[また、別のチームは次のようなニーズを共有していました：](https://www.reddit.com/r/sysadmin/comments/1mc82jv/free_open_source_ticketing_system_for_it_support/)

> 「メールから自動で工単を生成したい。顧客や管理者への通知、多段階のエスカレーション、こうした機能を無料でオープンソースで実現できるツールはありますか？」

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YTU3NjZkNTM1M2ExZTJjODFjMjEwODNiMTI4YmY2ZmJfbTlSVVBQNk1pRk9iVnM3eWhDcXAxWmxWTFd3elRrd3RfVG9rZW46QzI4V2JFUVlBb0taVlB4QkRjT2N6WmdBbnJiXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

こうした声は一見バラバラですが、本質的には共通した課題を示しています：

* 個人や小規模チームにとっては、既存の工単システムは複雑すぎて、導入・保守コストが高すぎる
* 成長中の企業では、機能・価格・使いやすさのバランスを取るのが難しい
* 業務プロセスが明確なチームでは、既存ツールでは柔軟性が不足し、ニーズに合わない

既存の工単システムは選択肢が豊富ですが、「シンプルな導入」と「柔軟なカスタマイズ」を同時に満たすものは多くありません。 そこで、発想を転換して**ゼロコード／ローコードプラットフォーム**を活用し、自社の業務にぴったり合った工単システムを自分たちで構築する方法を検討してみましょう。

---

💬 [NocoBase](https://www.nocobase.com/) ブログへようこそ。NocoBase は、エンタープライズアプリケーションや業務ツール、ワークフローシステムを構築できる、オープンソースのノーコード／ローコード開発プラットフォームです。セルフホスティング、プラグインアーキテクチャ、開発者フレンドリーな設計が特徴です。→ [GitHubで詳しく見る](https://github.com/nocobase/nocobase)

---

## **工単システムの構築に最適なオープンソース・ローコード／ノーコードプラットフォーム**

## NocoBase

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=OTFmZDFmMDFmMjFiNjc1OGM3ZTczZDM0OGU3MmQyOTlfdjlvbndKc2pPUjA3cXRocDFXUnIxTjk2alRHcUI1TldfVG9rZW46VEVqWGJlMW1Hb2RJWmd4OWVKNGNMdE11bjRkXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* GitHub Star: 16.4k
* GitHub: https://github.com/nocobase/nocobase
* Website: https://www.nocobase.com/

**プラットフォーム概要**[NocoBase](https://www.nocobase.com/) はデータモデル駆動とプラグインアーキテクチャを採用したオープンソースのローコード／ノーコードプラットフォームです。従来の工単システムと異なり、柔軟なデータ建模、業務フロー設計、プラグイン拡張機能を提供します。業務に合わせた工単システムを自由に構築したいチームに最適な基盤です。

**NocoBaseで工単システムを構築する際の特徴**

NocoBase は[チケット管理](https://www.nocobase.com/ja/solutions/ticketing)システムのソリューションを提供しており、CRM の補助モジュールとしてすぐに利用できるほか、ビジネス要件に合わせた柔軟なカスタマイズが可能です：

* **工単ライフサイクルの一元管理**：工単の作成、割当、処理、クローズまで全プロセスを可視化し、追跡可能な管理を実現。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NWIyMzI4Y2YxYjZkOGM1MGZmNTBiZjBmYTM1ZTAwZWZfUGRzYXd0elpwUDRQcGFkeXF3MU80WWRDbVhBd0JwTGhfVG9rZW46QlU0R2JMQUczb09FYzN4UTRYVGNwbm1Pbk1kXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* **インテリジェントな自動割当と進捗管理**：工単の種類や担当者のスキルに応じた自動割当、進捗状況をリアルタイムで把握。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2Q5MjE2MTg2YjRlNjQyNzNlNjZkYjYwYzNjNjY2YmRfNEROaFBtdjNDQzlEcTlVOEhRME5tYVVmV1ZwZWMxWFpfVG9rZW46V1FPQmJqdjMxb251QnR4Tk40eWNqN0o5bmJoXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* **マルチチャネルでの顧客対応**：メール、電話、チャットなどのコミュニケーションをAPI経由で統合管理。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YTgyZWQ1MDZkMjhjY2UwZTBjZWRkOTA4ODI4OTcxYWFfd1BSWlBHSFpTS3d6Sk4zdVVYb1pTTDFzUWtMUDlmdFJfVG9rZW46TTg4MGJNM0M2b3VxRE14bkJubmNlaDBpblljXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* **プラグインと自動化ワークフロー**：工単のエスカレーション、通知、データ連携を自動化し、さらに資産管理・レポート・ナレッジベースなどもプラグインで拡張可能。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NjMzNDllNTJkYmJiMWY1MzIxOWRiYTYwNmUzNTVkYjdfT0ZXTGM3R2tYMHNFZHg4R2JyUTEzdnFFS1B2b2VBU3pfVG9rZW46Q3J0WWJSalBwbzNRRWp4ZVJUaGN1eDZWbnVjXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

## Budibase

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NDIzZTllMzJiZTUwZjE4ZjY0MGNmODAzMGJjNDFhMTRfVDlmRFBPT3BIY1ozYnF6Yks4VndvMnpjNkREbVM1c25fVG9rZW46SlpsM2JkWExxb1E1UDZ4ak9qSWNNR05sbkloXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* GitHub Star: 25.3k
* GitHub: https://github.com/Budibase/budibase/
* Website: https://budibase.com/

**プラットフォーム概要**

[Budibase](https://budibase.com/) は、オープンソースのローコードアプリケーション開発プラットフォームで、チームが内部ツールを迅速に構築することに特化しています。フォーム駆動のデータ定義と外部データソース統合に強みがあり、REST API、外部データベース、Google Sheets などとも簡単に連携可能です。直感的な UI、ワークフロー自動化、多役割管理機能を備え、ビジネスロジックに最適化されたチケットシステムを素早く構築できます。

**Budibaseで工単システムを構築する際の特徴**

Budibase は、すぐに使える[チケット管理](https://budibase.com/business-apps/templates/open-source-ticketing-system/)テンプレートを提供しており、強力なフォーム機能とデータ統合を組み合わせることで、最小限の開発で柔軟なチケットシステムを実現できます：

* **カスタマイズ可能なチケットテンプレート**：Tickets テーブルとステータス追跡テーブルを標準搭載し、フィールド、ロール権限、ビューを自由に設定可能。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmM0MjBkMWE0MmQ0NzgxZDU2ZGQ4YjU2OGY2MzEyMDlfYzB6bXJGVWFOc0pZUzJ6RGhEbkNLQUlQTTN0bzRpRlNfVG9rZW46Q2x0VWJXSzhobzRwNld4R1ZJMWNJaTAxbnJkXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* **複数ロールに対応した UI**：エンドユーザーと担当者（Agent）それぞれに専用 UI を提供。エンドユーザーはチケット提出・追跡が可能で、担当者はチケットの割り当てや更新、ステータス統計を管理できます。
* **ワークフローの自動化**：チケットキャンセル、ステータス変更記録などを自動化でき、カスタムトリガー、条件分岐、ループ処理なども柔軟に設定可能。
* **マルチデバイス対応 & 自社ホスティング**：モバイル、タブレット、PC でスムーズに動作し、自社サーバーでのホスティングやホワイトラベル対応も可能で、データセキュリティを確保します。

## Appsmith

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MzNiMDJlYmYzZWUxMTJhOTgxYjkxN2E1MWI5NGI0YzZfZ0ZkTkFXcEUxSVN6aXppbDB5ekVxWVlzaVFwUm5heEJfVG9rZW46SjIybmJHSEIzb3hPYll4S3lMSmNBd2ttbjhlXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* GitHub Star: 37.7k
* GitHub: https://github.com/appsmithorg/appsmith
* Website: https://www.appsmith.com/

**プラットフォーム概要**

[Appsmith](https://www.appsmith.com/) は、オープンソースかつ開発者フレンドリーなローコードプラットフォームで、豊富な UI コンポーネントと強力なデータ統合機能が特徴です。柔軟な UI ビルダーや JavaScript 拡張機能を活用して、カスタマーサポート用のダッシュボード、チケット管理画面、オペレーション向け管理ツールなどを迅速に構築できます。

**Appsmithで工単システムを構築する際の特徴**

Appsmith は、特にサービス事業者向けに最適化された[顧客サポート用ソリューションを](https://www.appsmith.com/template/customer-support)提供しています：

* **複数データソースの統合とレスポンシブ UI**：データベースや REST/GraphQL API などを単一画面で統合し、ドラッグ＆ドロップ操作でレスポンシブな UI を構築可能。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MjRjMDNiMzFhMGY4ZTYwMWYxOWUyZmMwZTk5ZDM1YThfQWk2YU84bmJHd0tWTmp3STRTc2hMTVlVaW1NMkRvTVFfVG9rZW46VzUyd2JXN0RXbzd1N3N4dG5LNWNxNW5tbnJmXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* **多層ロール権限とワークフロー管理**：顧客、Agent、Admin の 3 ロールを設定可能。顧客はチケットを作成・確認、Agent は担当チケットを更新・管理、Admin は全体の可視化・割り当てを統括します。
* **カスタムコンポーネント & ダッシュボード**：表、グラフ、フォームなど豊富なコンポーネントを活用し、チケット管理画面や Agent 別の統計ダッシュボードを素早く構築可能。
* **エンタープライズ対応のセキュリティとデプロイ**：Git 連携、バージョン管理、権限設定、オンプレミス対応をサポートし、セキュリティとコンプライアンスを両立します。

## Refine

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NmRiMDE5OGMwZTFmNDQ1Mzk2ZmZiOTk2MDY1OWFlYmRfdTFCdFdrdVF0Tjl4bmwzNFhKR3Ywd09pdVo1N2gzckRfVG9rZW46Q1ZQV2JSSUJsb2VUMnF4M3pmWmNlSHdybklmXzE3NTU2NzEzMDk6MTc1NTY3NDkwOV9WNA)

* GitHub Star: 32.2k
* GitHub: https://github.com/refinedev/refine
* Website: https://refine.dev/

**プラットフォーム概要**

[Refine](https://refine.dev/) は、オープンソースの React メタフレームワークで、フロントエンド開発者に特化した高い拡張性と柔軟性を持つツールです。NocoBase や Budibase のようなノーコード／ローコード型とは異なり、Refine は開発者が自由度高くカスタマイズできる基盤を提供します。標準でチケット管理モジュールはありませんが、CRUD ベースの内部ツール構築に最適です。

**Refine でチケットシステムを構築する際の注目ポイント**

Refine は公式のチケットテンプレートを提供していませんが、[CRM のサンプルアプリを](https://example.crm.refine.dev/)参考にすれば効率よく構築可能です：

* **React ネイティブな開発体験**：フル React の自由度を維持しながら、チケットリスト、フォーム、カンバン、レポートなどを素早く構築可能。
* **強力なデータ連携**：REST、GraphQL、NestJS、Supabase など主要データソースを統合し、既存業務システムとの連携を実現。
* **多ロール管理と権限制御**：顧客、Agent、Admin などのロール別権限を柔軟に設定可能で、セキュアなチケット運用が可能。
* **UI フレームワークとの互換性**：Ant Design、Material UI、Chakra UI などに対応し、デザイン品質を保ちながら高度な UI を実現。

## まとめ

既製のチケットシステムは数多くありますが、多機能すぎたり柔軟性に欠けたりして、自社の業務フローに完全にフィットするものはなかなか見つかりません。 NocoBase、Budibase、Appsmith、Refine などのオープンソースプラットフォームを活用すれば、UI、ワークフロー、権限、データソースまで柔軟に組み合わせ、自社専用のチケットシステムを効率的に構築できます。

😊 この記事が役に立ったと感じたら、ぜひ同僚や友人とシェアしてください。
