## はじめに

この 1 年で、オープンソース AI ツールの数は急速に増えています。GitHub では、[ai-tools](https://github.com/topics/ai-tools) というトピックに、多くのプロジェクトが集まっています。

![AI tools.png](https://static-docs.nocobase.com/AI%20tools-xtlp52.png)

その中でも、人気のあるオープンソース AI ツールの多くは、既存の AI や AI Agent の能力を強化するものです。

いわば、AI Agent の「拡張パーツ」のような存在です。Agent に Web ページを操作させるもの、コード作成を強化するもの、外部ツールを呼び出せるようにするもの、AI の出力を安定させるもの、実際の業務システムに接続できるようにするものなどがあります。

この記事では、GitHub の `ai-tools` トピックで注目されているオープンソースプロジェクトをもとに、GitHub Stars の少ない順に整理しました。現在人気の高い 6 つのオープンソース AI ツールを取り上げ、それぞれが AI のどの能力を強化しているのかを見ていきます。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---



## これらのツールをどう選んだのか？

この記事では、できるだけ客観的に整理するため、GitHub 上で公開されているデータをもとに選定しました。

今回の選定ルールは次のとおりです。

1. **データソース**：GitHub Topics `ai-tools`
2. **並び順**：GitHub Stars の少ない順


| ランキング | ツール           | GitHub Stars | 主な方向                        | より適したユースケース                                                                 |
| ---------- | ---------------- | ------------ | ------------------------------- | -------------------------------------------------------------------------------------- |
| 6          | NocoBase         | 22.6k        | AI + ノーコード業務システム     | CRM、承認、チケット、運用管理画面などの企業内部システム構築                            |
| 5          | OpenCLI          | 23.4k        | AI ツールインターフェース / CLI | Web サイト、ローカルツール、ブラウザーセッションを AI Agent が呼び出せるコマンドに変換 |
| 4          | OpenClaude       | 28.3k        | AI Coding Agent                 | ターミナルでマルチモデル AI Coding Agent を使う                                        |
| 3          | prompt-optimizer | 30.3k        | Prompt 最適化                   | Prompt の最適化、テスト、再利用                                                        |
| 2          | cc-switch        | 90k          | AI Coding ツール管理            | Claude Code、Codex、OpenCode などの AI Coding ツール設定を管理                         |
| 1          | browser-use      | 96.8k        | ブラウザー自動化 / AI Agent     | AI に Web ページを操作させ、ブラウザータスクを実行させる                               |

データ集計日：2026 年 6 月 3 日。GitHub Stars は常に変動するため、閲覧時点では実際の数値が少し異なる可能性があります。

## NocoBase

**サイト**：[https://www.nocobase.com/](https://www.nocobase.com/)

**オンライン Demo**：[demo.nocobase.com/new](https://demo.nocobase.com/new)

**ドキュメント**：[docs.nocobase.com](https://docs.nocobase.com)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**：22.6k

**オープンソース公開時期**：2021 年

**ライセンス**：Apache-2.0

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-ovnjsn.png)

### プロジェクト紹介

NocoBase は、企業内部の業務システムを素早く構築するための、オープンソースの AI + ノーコードプラットフォームです。

NocoBase では、AI がアプリ構築に直接関われます。自然言語で業務要件を説明すると、AI がデータモデルの作成、ページ設定、ワークフロー編成、さらにはプラグイン開発の補助まで行えます。

つまり、AI がゼロから大量のコードを生成するのではありません。データモデル、ページ、権限、ワークフロー、プラグイン体系を備えたプラットフォームの中で、システムを構築します。生成後も、ユーザーは NocoBase のノーコード画面から内容を確認し、調整し、保守し続けることができます。

### 何を解決するのか？

「AI に空白のプロジェクトで一時的にコードを生成させるのではなく、構造化されたプラットフォームの中で業務システムを構築させるにはどうすればよいか。」

NocoBase では、AI はプラットフォームが持つ業務システム機能をもとに作業できます。データモデル、ページ構築、権限管理、ワークフロー、プラグイン拡張、AI 従業員などが含まれます。AI は構築を加速し、人は業務ロジックの確認、細部の調整、境界の管理を行います。

企業内部システムでは、この方法の方が安定しています。AI の効率を活かしながら、完全にゼロからコードを生成した後に保守が難しくなる問題も避けやすくなります。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-4fun82.png)

### 最適な使い方

NocoBase は、構造が明確で、継続的な調整が必要な企業内部システムの構築に向いています。

おすすめの使い方は次のとおりです。

1. **まず具体的な業務シーンを決める**

最初から AI に「完全な ERP を作って」と依頼するのはおすすめしません。顧客管理、購買申請、設備台帳、アフターサービスチケット、契約承認、プロジェクトカンバンなど、具体的な場面から始める方がよいです。

2. **自然言語で AI にシステム基盤を作らせる**

業務オブジェクト、フィールド関係、ページ要件、フロールールを説明し、AI に NocoBase 上でデータモデルを作成し、ページを設定し、ワークフローを編成させます。例えば、次のように依頼できます。

> 顧客管理システムを構築してください。顧客、連絡先、商談、フォローアップ記録を含めます。顧客は複数の連絡先と商談に関連付けられ、商談には段階、金額、予想成約時期、担当者が必要です。

3. **ノーコード画面で確認・調整する**

AI が生成したものを、そのまま最終結果として扱わないことが重要です。NocoBase のビジュアル画面で、データテーブル、フィールド、関係、ページレイアウト、操作ボタン、権限設定が実際の業務に合っているか確認できます。

4. **権限とフローの境界を設定する**

内部システムにおいて、権限とフローは欠かせません。ロールごとに見られるデータや実行できる操作は異なるべきです。承認、通知、ステータス変更、データ検証に関わるフローも、明確なルールを設定する必要があります。

5. **AI をシステム運用にも参加させる**

システム構築後も、AI は業務運用に関われます。例えば、AI 従業員を使って、データ分析、レポート生成、翻訳、意思決定支援、フォーム入力、ワークフローノード処理などを行えます。

6. **一度きりの生成ではなく、継続的に調整する**

NocoBase の強みは「一度で完成させる」ことではありません。AI が構築した後も、チームはノーコード方式でフィールド、ページ、フロー、権限を調整し続けられます。そのため、実際の業務システムの長期的な変化に向いています。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-uxqqph.png)

### 適したユースケース

NocoBase は次のような場面に適しています。

* CRM 顧客管理システム
* 承認システム
* チケットシステム
* プロジェクト管理システム
* 購買、在庫、注文などの軽量 ERP モジュール
* 運用管理画面、管理画面
* 設備管理、資産管理、文書管理
* 顧客フォローアップ、サービス管理
* プライベートデプロイが必要な企業内部システム
* 権限、フロー、データモデル、継続的な調整が必要な業務アプリ
* AI とノーコードを組み合わせてシステムを構築したいチーム

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-ex094c.png)

### 使用上の境界

NocoBase の主な強みは業務システム構築ですが、すべての AI ツール利用に向いているわけではありません。

注意すべき点は次のとおりです。

* **一度きりの Web ページ作成には向いていません**：単純な紹介ページ、キャンペーンページ、一度きりの Demo を素早く生成したいだけなら、NocoBase は最も直接的な選択肢ではありません。データモデル、権限、フロー、長期保守が必要な業務システムにより適しています。
* **専門的な開発フレームワークを完全に代替するものではありません**：高度にカスタマイズされたフロントエンド操作、複雑な消費者向けプロダクト、大規模ユーザー向けインターネットアプリを作る場合は、従来の開発フレームワークの方が適しています。
* **初期段階では業務モデリングが必要です**：NocoBase は構築速度を高められますが、ユーザー自身も業務オブジェクト、データ関係、フローの境界を理解している必要があります。データモデル設計が不十分だと、その後のシステムも複雑になります。
* **複雑なカスタマイズには開発能力が必要です**：多くの機能はノーコードで設定できますが、深いプラグイン開発、複雑な連携、特殊な業務ロジックに関わる場合は、開発者の参加が必要です。

より正確に言えば、NocoBase は保守しやすく、拡張しやすく、管理・統制しやすい業務システムの構築に向いています。すべての AI ツールを置き換えるものではなく、AI が実際の業務フローに入るための安定したシステム基盤を提供します。

### インストール Prompt

次の Prompt を Claude Code、Cursor、Codex、OpenCode、またはその他の AI Coding Agent にコピーできます。

```text
NocoBase をローカルにインストールして初期化してください。

要件：
1. 公式 GitHub リポジトリを開いてください：
   https://github.com/nocobase/nocobase

2. 公式 README を読み、AI Agent Access quickstart に従ってください。

3. Node.js と npm がインストールされているか確認してください。

4. NocoBase CLI beta 版をインストールしてください：
   npm install -g @nocobase/cli@beta

5. 新しいプロジェクトディレクトリを作成してください：
   mkdir my-nocobase && cd my-nocobase

6. UI 付きで NocoBase を初期化してください：
   nb init --ui

7. 初期化後、作成されたファイルとディレクトリを説明してください。

8. このディレクトリ内で AI agent セッションを開始または再起動してください。
   例：
   cd my-nocobase && codex
```

## OpenCLI

**サイト**：[https://opencli.info/](https://opencli.info/)

**GitHub**：[https://github.com/jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)

**GitHub Stars**：23.4k

**オープンソース公開時期**：2026 年 3 月

**ライセンス**：Apache-2.0

![OpenCLI.png](https://static-docs.nocobase.com/OpenCLI-nkru1y.png)

### プロジェクト紹介

OpenCLI は、Web サイト、ブラウザーセッション、Electron アプリ、ローカルツールを CLI インターフェースに変換するオープンソースプロジェクトです。画面操作型ツールをより確定的なコマンドラインインターフェースに変えることで、人も AI Agent もコマンドで操作できるようにします。

例えば、Web サイトの一部機能を次のようなコマンドとしてラップできます。

```text
opencli hackernews top --limit 5
opencli bilibili hot --limit 5
```

また、AI Agent は `opencli browser` を通じて、ユーザーがすでにログインしている Chrome ページを操作できます。Web ページを開く、ページを読む、ボタンをクリックする、フォームに入力する、データを抽出する、といった操作が可能です。

### 適したユースケース

OpenCLI は次のような場面に適しています。

* よく使う Web サイト機能を CLI コマンドに変換する
* AI Agent にログイン済みの Chrome ページを操作させる
* Agent に安定した外部ツールインターフェースを提供する
* コンテンツプラットフォーム、コミュニティ、求人サイト、ソーシャルプラットフォームの操作をラップする
* Web ページから構造化データを抽出する
* ローカル CLI ツールを Agent に登録して使わせる
* 繰り返しの Web タスク向けに adapter を作成する
* Claude Code、Cursor などのツールに外部 Web サイト機能を呼び出させる

### インストール Prompt

次の Prompt を Claude Code、Cursor、Codex、またはその他の AI Coding Agent にコピーできます。

```text
OpenCLI をローカルにインストールして設定してください。

要件：
1. Node.js >= 20 がインストールされているか確認してください。
2. 公式コマンドで OpenCLI をインストールしてください：
   npm install -g @jackwener/opencli

3. インストールを確認してください：
   opencli --version

4. Chrome 用 OpenCLI Browser Bridge 拡張機能をインストールしてください。
   可能であれば Chrome Web Store からのインストールを優先してください。
   できない場合は、GitHub Releases から手動でインストールする方法を案内してください。

5. 環境チェックを実行してください：
   opencli doctor

6. 複数の Chrome プロファイルがある場合、一覧表示して名前を変更してください：
   opencli profile list
   opencli profile rename  work
   opencli profile use work

7. 簡単なテストコマンドを実行してください：
   opencli list
   opencli hackernews top --limit 5

8. 各ステップの役割を説明してください。

9. 初期テスト中は、プライベートページへのアクセス、メッセージ送信、コンテンツ公開、データ削除、フォーム送信を行わないでください。

10. セットアップ後、以下を説明してください：
   - OpenCLI が Chrome とどのように接続するか
   - OpenCLI がローカル設定をどこに保存するか
   - AI agents と安全に使う方法
   - どの操作に手動確認が必要か
```

## OpenClaude

**サイト**：[https://openclaude.gitlawb.com/](https://openclaude.gitlawb.com/)

**GitHub**：[https://github.com/Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

**GitHub Stars**：28.3k

**オープンソース公開時期**：2026 年 3 月

**ライセンス**：カスタムライセンス

### プロジェクト紹介

OpenClaude は、オープンソースの AI Coding Agent CLI です。開発者は、特定のモデルやクローズドなツールに縛られず、ターミナルで異なるモデルやサービスプロバイダーを使ってコード関連タスクを実行できます。

OpenClaude は、OpenAI-compatible APIs、Gemini、GitHub Models、Codex、Ollama、Atomic Chat など、複数のモデルバックエンドに対応しています。ファイル読み取り、ファイル変更、Bash コマンド実行、コード検索、ツール呼び出し、MCP 使用、slash commands 実行、ストリーミング出力など、一般的な coding agent 機能にも対応しています。

![OpenClaude.png](https://static-docs.nocobase.com/OpenClaude-6f81ig.png)

### 最適な使い方

OpenClaude は、ターミナルでの開発に慣れており、異なるモデルを柔軟に使いたい開発者に向いています。

**適したユースケース**

* ターミナルで AI Coding Agent を使う
* 異なるモデルでコードタスクを処理する
* AI にローカルコードベースを理解・修正させる
* AI でテスト、ドキュメント、リファクタリング提案を生成する
* OpenAI-compatible、Gemini、Codex、Ollama など異なるバックエンドを試す
* MCP、Bash、ファイルツール、コード検索を組み合わせる
* よりオープンな AI coding ワークフローを構築する
* coding タスクにおける異なるモデルの効果を比較する

より正確に言えば、OpenClaude は開発者向けの AI coding ワークベンチとして適しています。異なるモデルを柔軟に使ってコードタスクを処理できますが、開発者が明確な目標を与え、結果をレビューし、実行リスクを管理する必要があります。

### インストール Prompt

次の Prompt を Claude Code、Cursor、Codex、またはその他の AI Coding Agent にコピーできます。

```text
OpenClaude をローカルにインストールして設定してください。

要件：
1. Node.js と npm がインストールされているか確認してください。
2. 公式コマンドで OpenClaude をグローバルインストールしてください：
   npm install -g @gitlawb/openclaude@latest

3. インストールを確認してください：
   openclaude --version

4. OpenClaude を起動してください：
   openclaude

5. モデルプロバイダーを 1 つ設定してください。
   まず OpenAI-compatible の設定を優先してください。

6. API キーには環境変数を使用してください。
   API キーをハードコードしたり表示したりしないでください。

7. ローカルモデルを使いたい場合は、Ollama がインストールされているか確認してください。
   Ollama が利用可能な場合、以下で OpenClaude を設定してください：
   OPENAI_BASE_URL=http://localhost:11434/v1
   OPENAI_MODEL=qwen2.5-coder:7b

8. 小さなテストタスクを作成してください：
   - 簡単なローカルプロジェクトを開く
   - OpenClaude にプロジェクト構造を説明させる
   - 小さな改善案を 1 つ提案させる
   - 私が確認するまでファイル変更を許可しない

9. テスト後、以下を説明してください：
   - 現在有効な provider
   - 設定が保存されている場所
   - 後で provider を切り替える方法
   - ファイル変更を安全にレビューする方法
```

## Prompt Optimizer

**サイト**：[always200.com](https://always200.com)

**GitHub**：[https://github.com/linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer)

**GitHub Stars**：30.3k

**オープンソース公開時期**：2025 年 2 月

**ライセンス**：カスタムライセンス

![Prompt Optimizer.png](https://static-docs.nocobase.com/Prompt%20Optimizer-zpgvc1.png)

### プロジェクト紹介

Prompt Optimizer は、より明確で、安定し、再利用しやすい Prompt を作るためのオープンソース Prompt 最適化ツールです。

### 最適な使い方

Prompt Optimizer は、「高頻度で使い、再利用でき、出力品質が重要な」AI 利用シーンに向いています。特に、コンテンツ作成、AI アプリ開発、カスタマーサポート返信、コード補助、画像生成、データ分析説明、ナレッジベース Q&A などに適しています。

### インストール Prompt

手軽に試したいだけなら、オンライン版を直接使えます。

ローカルデプロイやプライベート環境で使いたい場合は、次の Prompt を Claude Code、Cursor、Codex、またはその他の AI Coding Agent にコピーできます。

```text
Prompt Optimizer をローカルにデプロイしてください。

要件：
1. 公式 GitHub リポジトリを開いてください：
   https://github.com/linshenkx/prompt-optimizer

2. 公式 README を読み、最も簡単なローカルデプロイ方法を選んでください。

3. Docker がインストールされている場合は、Docker デプロイを優先してください：
   docker run -d -p 8081:80 --restart unless-stopped --name prompt-optimizer linshen/prompt-optimizer

4. Docker がインストールされていない場合は、Node.js と pnpm が利用可能か確認し、ローカル開発セットアップを案内してください。

5. デプロイ後、Web インターフェースを開いてください：
   http://localhost:8081

6. OpenAI、Gemini、DeepSeek、またはカスタム OpenAI-compatible API など、少なくとも 1 つの AI モデルプロバイダーを設定してください。

7. API キーをターミナルやソースコードに表示したり、ハードコードしたりしないでください。

8. 設定が保存される場所と、後で API キーを更新または削除する方法を説明してください。

9. 簡単なテストを作成してください：
   - 短い prompt を入力する："Help me write a product update email"
   - それを最適化する
   - 元の prompt と最適化後の prompt を比較する
   - 最適化後の方が良い、または悪い理由を説明する

10. 最終セットアップが後で再利用できることを確認してください。
```

## CC Switch

**サイト**：[https://ccswitch.io](https://ccswitch.io)

**GitHub**：[https://github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)

**GitHub Stars**：90k

**オープンソース公開時期**：2025 年 8 月

**ライセンス**：MIT

![CC Switch.png](https://static-docs.nocobase.com/CC%20Switch-1fge76.png)

### プロジェクト紹介

CC Switch は、複数の AI Coding / AI CLI ツールのモデルプロバイダー、API Key、MCP、Prompt、Skills 設定を一元管理するためのクロスプラットフォームデスクトップツールです。

対応ツールには、Claude Code、Claude Desktop、Codex、Gemini CLI、OpenCode、OpenClaw、Hermes が含まれます。

CC Switch は、分散している設定を 1 つのデスクトップアプリにまとめます。これにより、開発者は JSON、TOML、`.env` ファイルを何度も手動で編集する必要がなくなり、グラフィカル画面で設定を管理・切り替えできます。

### 最適な使い方

CC Switch は、AI Coding ツールのヘビーユーザーに向いています。特に、複数の CLI ツール、複数のモデルプロバイダー、複数の API Key を同時に使っている開発者に適しています。

CC Switch は次のような場面に適しています。

* 複数の AI Coding ツールを同時に使う
* Claude Code、Codex、Gemini CLI、OpenCode などのツールを頻繁に切り替える
* 複数のモデルプロバイダーと API Key を管理する必要がある
* 設定ファイルを手動編集するリスクを減らしたい
* MCP、Prompt、Skills を一元管理したい
* 複数デバイス間で AI ツール設定を同期する必要がある
* デスクトップ画面で AI Coding ワークフローを管理したい

### インストール Prompt

次の Prompt を Claude Code、Cursor、Codex、またはその他の AI Coding Agent に直接コピーできます。

```text
CC Switch をローカルマシンにインストールして設定してください。

要件：
1. 私の OS を検出してください：macOS、Windows、Linux。
2. CC Switch GitHub リポジトリの公式インストール方法に従ってください。
3. macOS の場合は、Homebrew でのインストールを優先してください：
   brew install --cask cc-switch
4. Windows または Linux の場合は、GitHub Releases から正しいインストーラーをダウンロードするよう案内してください。
5. インストール後、CC Switch の起動を手伝ってください。
6. Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw など、既存の AI CLI ツールがインストールされているか確認してください。
7. 既存設定がある場合は、インポートを手伝ってください。
8. テスト用 Provider 設定を 1 つ作成してください。
9. CC Switch がローカルデータとバックアップをどこに保存するか説明してください。
10. ターミナル出力で API key を表示したり漏らしたりしないでください。

公式 GitHub リポジトリ：
farion1231/cc-switch

公式サイト：
ccswitch.io
```

## browser-use

* **公式サイト**：[https://browser-use.com/](https://browser-use.com/)
* **GitHub**：[https://github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)
* **GitHub Stars**：96.8k
* **オープンソース公開時期**：2024 年 11 月
* **ライセンス**：MIT

![browser-use1.png](https://static-docs.nocobase.com/browser-use1-b7i8fw.png)

### プロジェクト紹介

browser-use は、AI Agent にブラウザーを操作させるためのオープンソースツールです。

ほとんどの Web サイトは、人間向けに設計されており、AI Agent 向けに設計されているわけではありません。AI が Web タスクを実行するには、通常、ページ内容を理解し、ボタンや入力欄を識別し、要素をクリックし、フォームに入力し、ページを移動し、場合によっては複数ステップのフローを処理する必要があります。

browser-use は、ブラウザーを AI Agent が使える実行環境に変えます。これにより、AI は人間のように Web ページ上でタスクを実行できます。

![browser-use2.gif](https://static-docs.nocobase.com/browser-use2-2uuy81.gif)

### 最適な使い方

browser-use は、単独の完成品として使うよりも、**AI Agent のツールチェーンに組み込んで使う**のに向いています。

おすすめの使い方は次のとおりです。

1. **まず具体的な Web タスクを定義する**

例：特定の管理画面にログインし、直近 7 日間の注文を検索して結果をエクスポートする。

2. **AI Agent に browser-use を使って Web を操作させる**

browser-use は、ページを開く、要素を認識する、ボタンをクリックする、内容を入力する、Web ページの状態を読み取る、といった操作を担います。

3. **重要なフローには制限と検証を追加する**

AI に支払い送信、データ削除、本番環境設定の変更などを自由に実行させないようにします。高リスク操作には、手動確認を追加するのが望ましいです。

4. **安定した場面では自動化フローとして蓄積する**

繰り返し発生する Web タスクは、成功したフローを保存し、少しずつ改善できます。

5. **本番環境ではブラウザーの安定性を優先する**

大量同時実行、プロキシ、CAPTCHA、ブラウザーフィンガープリント、ログイン状態管理が関わるタスクでは、ローカル実行だけでなく、クラウドブラウザーやホスティング環境も検討する必要があります。

**browser-use は次のような場面に適しています。**

* AI Agent のブラウザー自動化
* Web フォーム入力
* 管理画面の自動操作
* データ収集と情報検索
* 人間の Web 操作のシミュレーション
* AI Agent の Web 実行能力のテスト
* 既存 Agent に browser action 機能を追加する

### インストール Prompt

次の Prompt を Claude Code、Cursor、Codex、またはその他の AI Coding Agent に直接コピーできます。

```text
browser-use をローカルでインストールして実行してください。

要件：
1. Python 3.11 以上がインストールされているか確認してください。
2. uv を使ってクリーンな Python 環境を作成してください。
3. browser-use をインストールしてください。
4. Chromium が利用できない場合はインストールしてください。
5. browser-use を使って Web ページを開き、基本的なタスクを実行する簡単なサンプルスクリプトを作成してください。
6. LLM API キーには環境変数を使用してください。スクリプト内に API キーをハードコードしないでください。
7. 各ステップが理解できるように、明確なコメントを追加してください。
8. インストール後、サンプルを実行し、browser-use が正しく動作するか確認してください。

公式 GitHub リポジトリ：
browser-use/browser-use

できるだけ公式 quickstart に従ってください。
```

簡単なタスクを直接テストしたい場合は、タスクを次のように変更できます。

```text
browser-use の GitHub リポジトリを開き、現在の GitHub Stars 数を取得して出力する browser-use のサンプルを作成してください。
```

## FAQ

1. **これらのオープンソース AI ツールは企業利用に向いていますか？**

具体的なツールと利用場面によります。

browser-use や OpenCLI のようなツールは、Agent 自動化や外部ツール呼び出しに向いています。一方で NocoBase は、企業内部業務システムの構築に向いています。

2. **browser-use と OpenCLI の違いは何ですか？**

どちらも AI Agent の Web ページ操作や外部ツール操作能力を強化できますが、方法が異なります。

browser-use は、AI にブラウザーを直接操作させるものです。AI は Web ページを開き、ページを読み取り、ボタンをクリックし、フォームに入力し、ページ状態に応じて次のステップを判断します。

OpenCLI は、Web サイト、ローカルツール、ブラウザーセッションを CLI コマンドとしてラップすることを重視しています。これにより、AI Agent は毎回 Web 画面から操作を始めるのではなく、コマンドでツールを呼び出せます。

3. **企業内部システムを構築したい場合、どのタイプの AI ツールを選ぶべきですか？**

CRM、承認システム、チケットシステム、プロジェクト管理、運用管理画面などの企業内部システムを構築したい場合、AI Coding ツールだけでは不十分なことが多いです。

このようなシステムには、データモデル、権限管理、ページ設定、ワークフロー、プライベートデプロイ、継続的な保守が必要です。AI は構築を加速できますが、システム自体には安定した業務アプリケーション基盤が必要です。

NocoBase のようなプラットフォームは、このような場面に向いています。AI にコードを生成させるだけでなく、AI がデータモデル、ページ、権限、ワークフローをもとに、保守しやすい業務システムを構築できるようにします。

## まとめ

これまで私たちは、「AI は何を生成できるのか」に注目することが多くありました。しかし実際のワークフローでは、より重要な問いがあります。AI は実際のツールを操作できるのか。外部システムを呼び出せるのか。業務フローに入れるのか。生成された結果を継続して保守できるのか。

これこそが、これらのオープンソース AI ツールの価値です。


**関連記事**：

* [Hermes で内部ツールの効率を高める：おすすめのオープンソースプロジェクト 5 選 ](https://www.nocobase.com/ja/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw を実務で活用するには？おすすめのオープンソースツール 5 選](https://www.nocobase.com/ja/blog/openclaw-open-source-enterprise-tools)
* [Codex にゼロから作らせないための6つのオープンソースプロジェクト](https://www.nocobase.com/ja/blog/building-internal-tools-with-codex)
* [Claude Code を使うなら知っておきたい 6 つのオープンソースツール](https://www.nocobase.com/ja/blog/open-source-tools-after-claude-code)
* [企業向けソフトウェア開発に適したオープンソース AI ノーコードツール 10 選](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [企業内部ツール必須：8 大オープンソース AI Agent プラットフォーム比較](https://www.nocobase.com/ja/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [RBAC・AI・API 完全対応｜エンタープライズ向けセルフホスト型 CRM 厳選ガイド](https://www.nocobase.com/ja/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [自社開発ミドルウェアから脱却するための、オープンソース統合ツール6選](https://www.nocobase.com/ja/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Airtable vs NocoBase のリアルな移行コスト](https://www.nocobase.com/ja/blog/airtable-vs-nocobase-migration-cost-comparison)
* [Excel データをすばやく Web アプリ化する 4 つの方法を比較](https://www.nocobase.com/ja/blog/excel-to-web-app-4-methods)
* [PostgreSQL だけじゃない 外部データベース対応のノーコード／ローコードプラットフォーム 5 選 비교](https://www.nocobase.com/ja/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [オープンソースのプロジェクト管理ツール比較・選定ガイド（2026年最新版）](https://www.nocobase.com/ja/blog/open-source-project-management-tool-selection-guide-2026-edition)
