### 🎉 新機能

- **[undefined]**

  - 追加しました顶层 proxy 命令、サポートしました nginx 和 caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos
  - 改善しました了 CLI 中托管アプリ与プラグイン管理能力、包括基于 appPath 的環境处理、プラグイン导入、授权プラグイン同步、以及相关ドキュメント更新しました。 ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
    参考：[CLI ドキュメント](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/cn/API/cli), [快速开始](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/cn/quickstart)
  - 追加しました AI 员工：ローカライズ工程师 Lina, 辅助完成ローカライズ翻译 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
    参考：[ローカライズ管理](https://docs.nocobase.com/cn/system-management/localization)<br />[Lina：ローカライズ工程师](https://docs.nocobase.com/cn/ai-employees/built-in/lina)<br>[使用 Lina 和本地 HY-MT1.5-1.8B 翻译ローカライズ词条](https://docs.nocobase.com/cn/ai-employees/scenarios/localization-hy-mt)
  - 追加しましたインドネシア語和ベトナム語ドキュメント。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
  - 追加しました CI Workflow、自动检查缺失的 `plugin-*` peerDependencies 并执行ビルド、サポートしました在 PR 中发送检查报告评论。 ([#9058](https://github.com/nocobase/nocobase/pull/9058)) by @Molunerfinn
- **[client-v2]**

  - サポートしました文本フィールド使用扫码录入 ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh
  - 追加しました `TypedVariableInput` 组件、让メールプラグイン v2 的 SMTP 端口和セキュリティ模式等フィールド既能填类型化常量、也能填 `{{ $env.X }}` 変数。 ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
  - サポートしましたフォーム的提交アクション設定フィールド赋值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
  - サポートしました嵌入 v2 ページ和公开フォーム v2 ページ ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - client-v2 プラグイン管理ページ重写为レスポンス式卡片布局、サポートしました分类フィルタリングしました、搜索、启用/禁用/削除しました、批量启用以及プラグイン详情ポップアップ；同时为 client-v1 的プラグイン管理ページ补充窄屏レスポンス式布局。 ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
  - v2 admin 追加しました「セキュリティ」父メニュー和「Token 策略」設定页；ユーザーセンターサポートしました「パスワード変更」。 ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
- **[cli]**

  - 追加しました API 命令的兼容规则 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
  - サポートしました Basic 認証 ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
  - 追加しました backup create 和  backup restore 命令 ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
  - 追加しました发布相关命令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
  - リファクタリングしました nocobase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos
- **[client]**

  - ページメニュー项サポートしました設定联动规则 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe
  - 事件流追加しました JS 変数 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx
  - 追加しました JS item アクション ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
- **[flow-engine]**

  - 将 `plugin-environment-variables` 移行しました到 client-v2、提供基于 React 的設定页与全局注册的 `$env` ランタイム変数；为 `plugin-file-manager` 追加しました client-v2 入口、提供基于 React 的存储設定ページ以及基于 FlowModel 的上传フィールド、上传动作和预览能力。 ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn
  - 为 FlowEngine 追加しました `getSubclassesOfAsync` 方法、通过 `registerModelLoaders` 的 `extends` フィールドサポートしました发现异步注册的 model class。 ([#9065](https://github.com/nocobase/nocobase/pull/9065)) by @Molunerfinn
- **[server]** AI 员工可以通过 Bash 命令检索内置ドキュメント ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
- **[cli-v1]** リファクタリングしました storage path 変数 ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos
- **[异步タスク管理器]** 为异步タスク管理器顶部栏入口追加しました v2 クライアントサポートしました。 ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx
- **[バックアップ管理器]**

  - 为バックアップ管理器プラグイン追加しました v2 クライアントランタイムサポートしました。 ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh
  - 适配追加しました的バージョン管理プラグイン ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock
- **[ブロック：Gantt]**

  - 为Ganttブロック追加しましたデフォルト定位到今天的設定项 ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx
  - 追加しましたGanttブロック v2 サポートしました。 ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[権限控制]** 将用户与角色権限設定页移行しました到 v2。 ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx
- **[Office ファイル预览]** 将 Office ファイル预览プラグイン移行しました到 v2（FlowEngine）版本。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn
- **[Workflow]**

  - 为Workflow追加しました超时控制、設定了超时选项后、ランタイム间超长的Workflow将被自动终止 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 为Workflow追加しました创建人和更新しました人フィールド ([#9217](https://github.com/nocobase/nocobase/pull/9217)) by @mytharcher
  - 为ノード创建追加しました用于检查的 API ([#9207](https://github.com/nocobase/nocobase/pull/9207)) by @mytharcher
  - 为ノードタスク追加しました日志フィールド、以サポートしました某些ノード调试时展示日志内容 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher
- **[IdP: OAuth]**

  - 追加しました多アプリ部署中的アプリ单点ログイン基础能力 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
  - 追加しました IdP: OAuth プラグイン、サポートしました MCP サービス通过 OAuth 認証 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile
- **[Theme editor]** 主题编辑器现已サポートしました v2 界面 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
- **[ブロック：Kanban]**

  - 为Kanbanプラグイン追加しました client-v2 サポートしました ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx
  - Kanbanブロック v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) by @jiannx
- **[Markdown]** Markdown ブロックサポートしました client-v2 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
- **[ブロック：リスト]** リストブロックサポートしました client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx
- **[カレンダー]**

  - カレンダープラグイン追加しました client-v2 サポートしました。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
  - カレンダーブロック v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx
- **[ブロック：ツリー]**

  - 为ツリー筛选ブロック追加しました client-v2 サポートしました。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx
  - 追加しましたツリー筛选ブロック ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx
- **[AI employees]**

  - Workflow AI 员工ノードサポートしました从附件フィールド加载ファイル ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
  - Workflow追加しました AI 员工ノード ([#9025](https://github.com/nocobase/nocobase/pull/9025)) by @cgyrock
  - 为 AI 员工追加しました数据聚合查询工具与业务分析报告工具 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile
  - 为 AI 员工追加しました调用 sub agents 的能力 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock
  - AI 员工追加しました SKILLS 能力 ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
- **[Data visualization]** 追加しましたブロックプラグイン的 client-v2 サポートしました ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe
- **[認証：API 密钥]** 追加しました `pm list` 和 `generate-API-key` 命令 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos
- **[AI: MCP サービス器]**

  - 提供通用的コレクション查询接口、サポートしました通过 MCP 调用 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile
  - 追加しました MCP サービス器プラグイン、サポートしました通过 MCP 搭建 NocoBase 系统并サポートしました业务流程。 ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile
- **[データソース管理]** サポートしました按需加载 MCP 工具 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile
- **[コレクションフィールド：代码]** 编码フィールドサポートしました 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx
- **[データソース：外部 NocoBase]** 追加しましたデータソースプラグイン：外部 NocoBase by @2013xile
- **[Multi-space]** 为多空间プラグイン追加しました client-v2 サポートしました、包括空间切换和空间管理。 by @jiannx
- **[アプリ单点ログイン]** 追加しました用于アプリ之间自动ログイン的 App SSO プラグイン by @2013xile
- **[バージョン管理]** 追加しましたバージョン管理プラグイン by @cgyrock
- **[双因素身份認証 (2FA)]** 新版クライアントできるようになりました绑定、验证和設定 TOTP 与两步验证。 by @Molunerfinn
- **[Password policy]** 将密码策略プラグイン移行しました到新的 client-v2 管理后台、提供密码策略与已锁定用户两个設定页、并在ユーザーセンター的パスワード変更フォーム中接入クライアント密码规则校验。 by @Molunerfinn
- **[Workflow：Webhook トリガー]** 为超时的 Webhook Workflow（同步模式）追加しました 408 レスポンス状态 by @mytharcher
- **[Workflow：子流程]** サポートしましたWorkflow的超时設定 by @mytharcher
- **[移行しました管理]** 追加しました NocoBase CLI 专用 API by @Andrew1989Y
- **[ファイル存储：S3 (Pro)]** サポートしました在 v2 ファイル管理器中通过 S3 Pro 存储上传ファイル。 by @Molunerfinn
- **[認証：OIDC]** 移行しました `plugin-auth-oidc` 到 v2 admin、ログインボタン、管理员設定フォーム和自动 SSO 跳转在 v2 下可用。 by @Molunerfinn
- **[Workflow：承認]**

  - サポートしましたWorkflow的超时設定 by @mytharcher
  - サポートしました削除しました承認草稿 by @mytharcher
- **[メール管理]** gmail サポートしましたメール别名发送 by @jiannx
- **[アプリ监管器]** 追加しました子アプリ的 App SSO 設定 by @2013xile
- **[認証：LDAP]** 追加しました v2 クライアント入口、使 LDAP 認証器在 v2 アプリ中可正常渲染ログインフォーム和管理設定。 by @Molunerfinn

### 🚀 機能改善

- **[undefined]**

  - nb cli サポートしました session 级 current env ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos
  - スペイン語、ポルトガル語、ロシア語、ドイツ語ドキュメント揃えました英語ドキュメント。 ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn
  - 同步フランス語ドキュメント与中国語ドキュメント。 ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn
  - 更新しました AI ドキュメント的 NocoBase 版本要求为 >= 2.1.0-beta.20、并推荐升级到 beta 最新版本。 ([#9252](https://github.com/nocobase/nocobase/pull/9252)) by @Molunerfinn
  - 改善しました AI Agent 安装指南、防止 Agent 绕过 `--ui` 可视化向导、并サポートしました自动检测 Node バージョン管理工具。 ([#9243](https://github.com/nocobase/nocobase/pull/9243)) by @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) by @Molunerfinn
  - 在保持 v1 不变的前提下、追加しました client-v2 独立入口、并使用 rsbuild 独立打包。 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
- **[client-v2]**

  - サポートしました在 v2 ポップアップ选择关系フィールド中关闭多选。 ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh
  - 改善しました v2 ページ中已設定外部データソース的ブロック在データソース被禁用后的渲染、避免渲染エラー、并在 UI 設定状态下显示更清晰的占位提示。 ([#9699](https://github.com/nocobase/nocobase/pull/9699)) by @katherinehhh
  - v2 表格ブロック追加しました启用行选择設定项 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - サポートしました v2 アクション面板アクション颜色設定 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - 削除しましたメニュー設定中的非表示にしました选项 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
  - v2 布局中フィルタリングしました掉 v1 的メニュー、只显示 v2 メニュー ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
  - 将 client-v2 从 client-v1 中分离出来、且不再依赖 client-v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) by @zhangzhonghe
- **[server]**

  - 新版クライアント的访问パス由 `/v2/` 調整しました为 `/v/`。 ([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn
  - 改善しましたプラグイン管理相关的 Swagger API ドキュメント ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile
- **[cli]**

  - 改善しました CLI 更新しました策略 ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos
  - 改善しました app upgrade 流程 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
  - 改善しました env auth 流程 ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
  - 将 NocoBase CLI 的安装与管理交互流程移行しました到 Inquirer、改善しました提示体验、并修正しました相关的安装、技能管理和 Docker ランタイム問題。 ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
  - 为リクエスト日志和审计日志追加しました CLI リクエスト来源标记 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) by @2013xile
  - 改善しました生成式 API CLI 的帮助输出和 ACL 命令分组 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile
  - 改善しました `nb API` 在ランタイム引导失敗时的帮助降级表现、并统一警告信息样式 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile
- **[client]**

  - 将 Application v1 中的 JSonLogic 移行しました到 BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
  - サポートしました通过 runJS 設定フィールド样式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
  - リファクタリングしました admin 布局設定与アプリ入口为模型宿主架构并补充 v1 v2 兼容性保障 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe
- **[build]**

  - 补充了 `deleteServerFiles` 的回归测试、确保在 Windows 和 POSIX パス场景下不会误删 `client` 和 `client-v2` ビルド产物。 ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
  - App client 本番ビルド现在改为使用 Rsbuild、同时追加しましたビルド profiling 与 declaration 调度改善しました、便于定位并降低ビルド瓶颈。 ([#8963](https://github.com/nocobase/nocobase/pull/8963)) by @Molunerfinn
  - 将 `@nocobase/build` 中的 client ビルド流程从 Vite 移行しました到 Rsbuild。 ([#8932](https://github.com/nocobase/nocobase/pull/8932)) by @Molunerfinn
- **[database]** 修正しました AI 业务报告生成与数据查询行为、避免エラー图表输出、时间处理不正确以及遗漏多データソース分析的問題 ([#9078](https://github.com/nocobase/nocobase/pull/9078)) by @2013xile
- **[flow-engine]**

  - 強化しましたページ搭建相关的API的schema验证。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[app]** 为 client-v1 追加しました基于 Rsbuild 的開発Workflow、并保持本地プラグイン開発与当前 `/v2/` 環境兼容 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
- **[変数和密钥]** 環境変数（`$env`）现在在 v1 ランタイム能被基于 flow-engine 的変数选择器选取。 ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn
- **[データソース管理]**

  - 追加しましたデータソース権限管理的 client-v2 实现、并统一相关権限选择抽屉的交互和布局。 ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx
  - 改善しました数据建模接口、サポートしました用 AI 创建评论表、設定外部データソース的关系フィールド、設定フィールド验证规则 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
- **[コレクション：连接外部数据（FDW）]** 改善しました V2 コレクション模板与 V1 的一致性、包括 SQL 确认、外部数据库サービス管理和模板フォーム顺序。 ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh
- **[多关键词筛选]** 移行しました多关键词筛选至 client-v2。 ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust
- **[Workflow]**

  - 削除しましたWorkflow执行历史与业务事务的耦合。 ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher
  - リファクタリングしましたWorkflow异步ノード可用性检查 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher
  - 为所有トリガー和ノード追加しました验证规则 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
- **[UI 模板]** 将 UI 模板移行しました至 client-v2。 ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust
- **[部门]** 追加しました v2 版部门設定ページ、用于管理部门、部门成员和用户所属部门。 ([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx
- **[Notification manager]** 通知管理相关プラグイン移行しました v2 的版本。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn
- **[Data visualization]** 图表ブロックサポートしました client-v2。 ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
- **[验证]** 为「验证」プラグイン追加しました v2 クライアント（管理設定页、ユーザーセンター入口、短信验证码フォーム等）。 ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
- **[用户認証]**

  - 自定义品牌設定できるようになりました在 v2 クライアント中正常生效 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
  - 实现 client-v2 中的認証設定页、并提供可复用的表格、変数输入与フォーム基础组件。 ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
- **[ブロック：Map]** 为Mapプラグイン追加しました v2 クライアントサポートしました。 ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
- **[ローカライズ]** 改善しました Lina ローカライズ翻译タスク、サポートしました翻译范围、参考语言設定和快捷编辑 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
- **[Workflow：自定义アクション事件]**

  - 将 block-workbench 和 workflow-custom-action-trigger プラグイン移行しました到 client-v2、并同步其アクション面板模型与二维码扫描流程。 ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
  - 为针对记录（单条和多条）触发模式追加しました権限控制 ([#9125](https://github.com/nocobase/nocobase/pull/9125)) by @mytharcher
- **[ブロック：iframe]** 追加しました iframe ブロック的 v2 サポートしました。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx
- **[ブロック：网格卡片]** 更新しました网格卡片プラグインサポートしました client-v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
- **[AI employees]**

  - AI 员工并行会话交互与性能改善しました ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock
  - AI 员工サポートしました多个会话并行处理 ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock
  - 改善しました Nathan 的 RunJS 编辑工具、并减少长 AI 对话中的卡顿 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
  - 更新しました AI 员工快捷タスク設定使用和Workflow AI 员工ノード設定相同的技能設定组件 ([#9246](https://github.com/nocobase/nocobase/pull/9246)) by @cgyrock
  - 調整しました AI 员工ノード的技能 / 工具設定交互 ([#9232](https://github.com/nocobase/nocobase/pull/9232)) by @cgyrock
  - 更新しました AI 对话 user prompt 功能 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
  - 更新しました AI 对话 user prompt 功能 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
- **[ファイル管理器]** 第三方存储プラグインできるようになりました在 v2 的ファイル管理器設定页注册自定义的存储类型フォーム。 ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
- **[ブロック：Kanban]**

  - 改善しました v2 详情フィールド间距一致性、并使Kanban卡片和列间距更好地适配主题設定。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
  - 調整しましたKanbanデフォルト列宽。 ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx
  - 改善しましたカレンダー和Kanbanブロック的创建設定。 ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx
- **[IdP: OAuth]** OAuth 会话有效期现在与系统 Token 策略保持一致 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile
- **[権限控制]** 为権限管理 Skill 追加しました新的 API 适配 AI 模式 ([#9198](https://github.com/nocobase/nocobase/pull/9198)) by @Andrew1989Y
- **[Flow engine]** 追加しました UI 搭建相关的 API。 ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust
- **[アクション：自定义リクエスト]**

  - 追加しました自定义リクエスト的アクションボタン ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
  - 事件流サポートしました自定义リクエスト ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx
- **[Workflow：アクション前事件]** 为トリガー和ノード追加しました验证规则 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
- **[コレクションフィールド：中国行政区划]** 中国行政区划フィールド 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
- **[認証：SAML 2.0]**

  - SAML/CAS ログイン跳转改为跟随新版クライアント前缀。 by @Molunerfinn
  - 为 CAS 和 SAML 認証プラグイン补齐 client-v2 入口、使其能在 v2 ログイン页和認証器后台設定中正常使用。 by @Molunerfinn
- **[IP 限制]** 追加しました IP 限制プラグイン的 v2 版本。 by @Molunerfinn
- **[自定义品牌]** 自定义品牌設定现已サポートしました v2 クライアント by @zhangzhonghe
- **[Workflow：Webhook トリガー]** 为创建トリガー和ノード的 API 追加しました验证处理 by @mytharcher
- **[Workflow：子流程]**

  - 削除しました子流程Workflow指令中的执行历史事务耦合。 by @mytharcher
  - 为追加しましたノード API 追加しました验证处理 by @mytharcher
- **[模板打印]** 更新しました打印模板コレクション元数据、用于版本控制バックアップ分类。 by @cgyrock
- **[認証：OIDC]** OIDC ログイン跳转改为跟随新版クライアント前缀。 by @Molunerfinn
- **[Record history]** 更新しました记录历史コレクション元数据、用于版本控制バックアップ分类。 by @cgyrock
- **[Workflow：承認]**

  - 为承認ノード追加しました `async` 类型标识、以适配Workflow画布追加しましたノード的新 API by @mytharcher
  - 削除しました承認Workflow指令中的执行历史事务耦合。 by @mytharcher
  - 为创建承認ノード追加しました类型验证 by @mytharcher
  - 更新しました承認流コレクション元数据、用于版本控制バックアップ分类。 by @cgyrock
  - 为トリガー和ノード API 追加しました验证处理 by @mytharcher
  - 調整しました承認トリガー和ノード設定的验证规则、确保 UI 相关フィールド存在 by @mytharcher
- **[Audit logs]** 更新しました审计日志コレクション元数据、用于版本控制バックアップ分类。 by @cgyrock
- **[メール管理]** 更新しましたメール管理コレクション元数据、用于版本控制バックアップ分类。 by @cgyrock
- **[アプリ监管器]** 更新しましたアプリ监控コレクション元数据、用于版本控制バックアップ分类。 by @cgyrock

### 🐛 不具合修正

- **[undefined]**

  - 揃えました Nginx 設定パス ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
  - 修正しました多语言ドキュメント中的死链、并デフォルト开启ドキュメントビルド时的死链检测。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
  - 修正しました依赖与ビルド校验流水线、避免独立 pro プラグイン checkout 失敗时被静默跳过而导致ビルド覆盖缺失。 ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn
  - 修正しました翻译膨胀ファイル、揃えました多语言ドキュメント结构。 ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn
  - 修正しましたドキュメント站语言切换器生成エラー URL（如 `/cn/es/` 而非 `/es/`）的問題。 ([#9233](https://github.com/nocobase/nocobase/pull/9233)) by @Molunerfinn
- **[client-v2]**

  - 修正しました client-v2 阅读态 JSON フィールド对象值显示为空的問題。 ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh
  - 修正しました V2 选项フィールド在ローカライズ環境下エラー翻译普通选项标签的問題。 ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh
  - 修正しました v2 表格自定义列宽設定为 0 时列不可见的問題。 ([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh
  - 調整しました所有关系フィールド选择、限制最多两层的关联フィールド ([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx
  - 修正しましたメニュー联动规则保存エラー的問題 ([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - 修正しました v2 ページブロック上方间距过大的問題 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
  - 修正しました批量更新しましたアクションフィールド赋值設定異常問題 ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
  - 修正しました子アプリログイン页标签直接显示翻译模板的問題、并避免 v2 認証方式编辑抽屉在提交的时候可能遗漏フィールド的問題。 ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - 通过使用 CSS line-clamp 替代 antd Typography 的 ellipsis 测量、改善しましたプラグイン管理ページ的性能。 ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
  - 修正しましたページ语言元信息、使アプリページ跟随当前アプリ语言、而不是固定标记为英語。 ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
  - 修正しました dnd-kit 依赖注册不一致的問題。 ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
  - 修正しましたKanbanプラグイン v2 路由因クライアント未提供 dnd-kit 依赖而加载失敗的問題。 ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
  - v2 公共 Table 组件デフォルト展示分页数量选择器、行为揃えました v1。 ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
  - 修正しました表格中关系フィールド标题フィールド选项リスト为空的問題 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
  - v2 布局中フィルタリングしました v1 メニュー后保留空分组 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
  - 修正しました启用プラグインポップアップ后方ページ变空白的問題 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  - 修正しました v1 后台ページ在本番ビルド下引用 v2 プラグイン模块时崩溃的問題。 ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
  - 修正しましたフィールド值設定中选择关系フィールドエラー的問題。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  - 修正しましたアプリ启动后会闪一下 404 ページ的問題 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
  - 修正しました部分 v2 ページ加载远程プラグイン失敗的問題 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
  - 修正しました v2 ページブロック拖拽时占位高亮和落点エラー的問題 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
  - 修正しました远程プラグイン加载时已带 `.JS` 后缀的プラグイン URL 被エラー解析成重复 `.JS.JS` パス的問題。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
  - 修正しました触发Workflowボタン无法設定绑定Workflow的問題 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher
- **[client]**

  - 修正しました刷新ページ后ブロック偶现误提示コレクション已削除しました的問題 ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - 修正しました v2 子フォーム中子表格无法追加しました第二条数据的問題 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - 修正しました v2 时间フィールド格式設定后不生效問題 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 提高 v1扫描输入组件ファイル上传上限 到 10 MB ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - 修正しました v2 移动端日期ポップアップ使用当前时间而不是フォーム值的問題 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 修正しました開発模式下已ビルド storage プラグイン依赖本地源码プラグイン命名导出时加载失敗的問題。 ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  - 修正しました系统設定提交后ページ显示为空的問題 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  - 关联フィールド的选择弹框中フィルタリングしました非必要的可选ブロック ([#9224](https://github.com/nocobase/nocobase/pull/9224)) by @jiannx
  - 修正しました切换メニュー后ページ标题没有更新しました的問題 ([#8864](https://github.com/nocobase/nocobase/pull/8864)) by @zhangzhonghe
- **[flow-engine]**

  - 修正しました鼠标移到关联フィールド分组时フィールド搜索内容被清空的問題 ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
  - 修正しました搜索框输入时级联メニュー不稳定的問題 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - 修正しました控制台不正确的エラー日志信息。 ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
  - 修正しました子模型メニュー中关系フィールド子メニュー状态不稳定的問題 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
  - 追加しました設定フォーム控件和详情控件的JS片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
- **[build]**

  - サービス端ビルド中的文本资源现在会作为ファイル复制、不再被转换成 JavaScript 模块。 ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  - 修正しました v1 client ビルド在引用其他プラグイン `/client-v2` 入口时エラー的問題。 ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
- **[cli-v1]**

  - 修正しました create-nocobase-app 项目的開発启动問題、复用已发布アプリ壳并サポートしました本地プラグイン開発。 ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
  - 修正しました通过 create-nocobase-app 创建的アプリ在開発启动时因 app-dev クライアントパス解析エラー导致ビルド失敗的問題。 ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
- **[server]**

  - 修正しました子アプリ OAuth 发现リクエスト被エラー路由为主アプリリクエスト的問題 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
  - サポートしました按 hostname 获取受理アプリ ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile
- **[cli]**

  - 修正しました CLI 布尔选项无法通过否定参数关闭的問題 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
  - 修正しました Windows 上 CLI OAuth ログイン可能因授权链接过长而失敗的問題 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile
- **[ai]** 修正しました AI 员工注册时缺少 category フィールド設定的問題 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock
- **[test]** 修正しました了プラグインビルド对 `big.JS` 这类带点号包名的处理、使其サービス端依赖能够正确打包到 `dist/node_modules`。 ([#8953](https://github.com/nocobase/nocobase/pull/8953)) by @Molunerfinn
- **[カレンダー]**

  - 修正しました v2 カレンダーブロック详情ポップアップ中无法追加しました详情和编辑ブロック的問題 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx
  - 修正しました v2 ページ中カレンダー事件未按設定的颜色フィールド显示颜色的問題。 ([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
  - 修正しましたカレンダー更多事项面板中事项 hover 时未显示手型光标的問題 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
  - 不将カレンダーアクション注册到其他块 ([#9200](https://github.com/nocobase/nocobase/pull/9200)) by @jiannx
- **[AI employees]**

  - 改善しました AI 员工数据查询提示词、引导其先加载所需技能再使用查询工具。 ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock
  - 修正しました client-v2 图表設定中缺少 Dara 助手ボタン的問題。 ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock
  - Workflow AI 员工ノード可使用デフォルト模型 ([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock
  - 修正しましたWorkflow AI 员工ノード调用`ctx.get`エラー問題 ([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
  - 修正しました AI 员工使用只读知识库时エラー問題 ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
  - 修正しました工具调用流式事件被拆分时、AI 工具调用卡片无法即时显示的問題 ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
  - 修正しましたWorkflow AI 员工ノード指定的アクション人角色権限不生效問題 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  - 修正しました AI プラグイン启动失敗問題 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
  - 修正しましたWorkflow AI 员工ノード指定使用工具后无法正常结束ノード调用 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
  - 修正しましたWorkflow AI 员工ノード读取关系フィールド附件エラー問題 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  - 修正しましたWorkflow AI 员工ノード切换 AI 员工后会清空技能的問題 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
  - 修正しました AI 员工快捷タスク渲染エラー問題 ([#9267](https://github.com/nocobase/nocobase/pull/9267)) by @cgyrock
  - 修正しました获取 AI 员工リスト接口エラー問題 ([#9241](https://github.com/nocobase/nocobase/pull/9241)) by @cgyrock
  - 改善しました Atlas 的タスク分配策略、并让 Viz 在报告类リクエスト中使用业务报告Workflow ([#9229](https://github.com/nocobase/nocobase/pull/9229)) by @2013xile
  - Workflow AI 员工ノード交互 UI調整しました及Bug 修正しました ([#9213](https://github.com/nocobase/nocobase/pull/9213)) by @cgyrock
  - 修正しました AI 员工ノード日志记录異常問題 ([#9180](https://github.com/nocobase/nocobase/pull/9180)) by @cgyrock
  - 修正しました ACL 导致聚合查询排序丢失的問題 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile
  - 修正しました AI 员工对话中異常消息不显示問題 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock
  - 修正しました AI 员工无法使用 skills的問題 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock
  - 修正しました禁用 getSkill工具后大模型仍然尝试加载技能的問題 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock
  - 修正しました core 包中 ai 模块无法通过的测试用例 ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
- **[データソース管理]**

  - 修正しました v2 データソースフィールド設定抽屉修改标题フィールド后、关闭再打开仍显示旧标题フィールド的問題。 ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh
  - 改善しました V2 データソース管理中コレクション、フィールド、同步和加载コレクションアクション失敗时的エラー提示。 ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh
  - 修正しました v2 データソース管理中多空间フィールド的ローカライズ显示問題。 ([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx
  - 改善しました MCP 工具命名；精简冗余的接口输出结果、避免消耗大量的 AI 对话上下文 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile
- **[ブロック：Map]** 修正しました启用Mapプラグイン后、v2 データソース管理的追加しましたフィールドメニュー中缺少Map几何フィールド的問題。 ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh
- **[コレクション: SQL]** 禁止 SQL コレクション访问敏感的 PostgreSQL 元数据 ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile
- **[Workflow：自定义アクション事件]**

  - 修正しました工作台アクション面板ボタンリスト中缺少触发Workflowアクション的問題。 ([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh
  - 修正しました v2 ブロックアクションメニュー重复显示触发Workflow的問題 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
  - 自定义アクション事件绑定Workflow时按当前ブロックコレクションフィルタリングしました可选Workflow。 ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
- **[アクション：复制记录]** 修正しました复制アクション提交失敗未重置ボタン状态的問題 ([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[ブロック：Gantt]**

  - 改善しましたGantt提示框位置、避免遮挡タスク条、并统一タスク名称在タスク条内外的揃えました方式 ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
  - 修正しました v2 Gantt shared ファイル夹パス、并追加しました斑马纹。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[授权設定]**

  - 追加しました授权設定的 client-v2 サポートしました、并サポートしました商业授权逻辑注入 client-v2 プラグイン入口。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
  - 解决依赖软链接問題 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos
- **[ファイル管理器]** 改善しました PDF 预览失敗提示、并补充外部存储 CORS 設定说明。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
  参考：[ファイル预览](docs/docs/cn/file-manager/file-preview/index.md)
- **[ブロック：iframe]** 修正しました iframe 設定ブロック高度后内容未撑满ブロック的問題 ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
- **[アクション：导出记录]** 修正しましたコレクション关系フィールド较多时导出ボタン的フィールド設定点击卡顿的問題 ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
- **[ローカライズ]** 修正しました AI 翻译タスク中内建词条参考翻译的取值問題 ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
- **[用户認証]** 修正しました WebSocket 鉴权 token 关联到未加载或缺失的 authType 时、サービス进程崩溃的問題。 ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
- **[Workflow：JavaScript ノード]**

  - 修正しました本番ビルド中Workflow JavaScript ノード QuickJS ランタイム包加载失敗的問題。 ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
  - 修正しました設定 JavaScript ノード时的エラー ([#9169](https://github.com/nocobase/nocobase/pull/9169)) by @mytharcher
- **[Markdown]** 修正しました v2 Markdown ブロックエラー的問題 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
- **[ブロック：ツリー]**

  - 改善しましたツリー筛选ブロック設定、并修正しました不サポートしました的关联记录入口、标题フィールド缺失提示以及关闭搜索后的重置行为。 ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx
  - 修正しました筛选ブロックノード显示異常 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx
- **[Mobile (deprecated)]** 修正しました移动端消息ポップアップ无法关闭和滑动的問題 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
- **[AI: MCP サービス器]**

  - 修正しました MCP サービス器打包时ランタイム依赖未包含的問題 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
  - 修正しました MCP 通用 CRUD 工具因透传无关リクエスト头导致的鉴权不匹配問題 ([#8983](https://github.com/nocobase/nocobase/pull/8983)) by @2013xile
  - 修正しました Swagger 生成的 MCP 工具在输入 schema 含有 `null` 类型或 `nullable` 标记时无法通过 OpenAI 工具校验的問題 ([#8994](https://github.com/nocobase/nocobase/pull/8994)) by @2013xile
- **[Flow engine]** 修正しました AI 搭建的ブロック转换成引用模板后无法再转换成复制模板。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
- **[ブロック：Kanban]**

  - 改善しましたKanban卡片紧凑样式、改善しました快速创建ポップアップ模板选择。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  - 修正しましたポップアップ或二级ページ中关联Kanbanブロック使用未解析ランタイム资源参数的問題。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
  - 修正しましたフィールド設定浮层重复显示 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx
- **[アクション：自定义リクエスト]** 升级 koa 到 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
- **[Data visualization]** 修正しました流程ページ中图表查询設定フィールド下拉为空的問題 ([#9276](https://github.com/nocobase/nocobase/pull/9276)) by @2013xile
- **[IdP: OAuth]**

  - 修正しました OAuth CLI ログイン失敗的問題、并限制动态注册只能使用本地回调地址 ([#9248](https://github.com/nocobase/nocobase/pull/9248)) by @2013xile
  - 修正しましたサービス重启后 OAuth クライアント注册和令牌刷新失敗的問題 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile
  - 修正しました普通 API リクエスト的 OAuth 访问 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile
  - 修正しました子アプリ中 MCP OAuth ログイン后跳转エラー的問題 ([#9015](https://github.com/nocobase/nocobase/pull/9015)) by @2013xile
- **[Workflow：聚合查询ノード]** 修正しました聚合ノード由于エラー的验证规则无法保存的問題 ([#9208](https://github.com/nocobase/nocobase/pull/9208)) by @mytharcher
- **[Workflow：循环ノード]** 修正しましたWorkflowノード的验证规则 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher
- **[権限控制]** 更新しました権限管理的 swagger ドキュメント、強化しました MCP サービス ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y
- **[Workflow：メール发送ノード]** 修正しました可使用変数的フィールド的验证规则 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher
- **[Workflow]**

  - 修正しました条件ノードエラー的验证规则 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher
  - 修正しましたコレクショントリガー的触发模式不能設定为“追加しました或更新しました”的問題 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher
- **[Password policy]** 修正しましたログイン失敗时真实エラー被 "argument #1 unsupported type undefined" 覆盖的問題（当底层エラー没有状态码时）。 by @Molunerfinn
- **[データソース：REST API]** 修正しましたデータソース管理器 client-v2 类型声明不一致时、REST API データソースプラグイン声明ビルド失敗的問題。 by @katherinehhh
- **[plugin-commercial]** 追加しました商业授权的 client-v2 组件和顶部授权状态入口。 by @jiannx
- **[認証：SAML 2.0]** 修正しました SAML 自动重定向拦截器在每次ページ跳转时重复リクエスト导致アプリ闪屏、抽屉被重复打开的問題。 by @Molunerfinn
- **[Workflow：Webhook トリガー]** 修正しました由于验证规则导致创建レスポンスノード失敗的問題 by @mytharcher
- **[移行しました管理]** 修正しました migration:create 从异步タスク记录中返回 taskId 的問題。 by @Andrew1989Y
- **[模板打印]** 修正しました模板打印 PDF 转换エラー未正确返回到前端的問題 by @jiannx
- **[メール管理]**

  - メール发送后不显示关闭确认 by @jiannx
  - 修正しました邮箱别名标题显示問題 by @jiannx
