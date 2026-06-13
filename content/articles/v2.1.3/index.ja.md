### 🚀 機能改善

- **[cli]**
  - 改善しました不同格式的版本号兼容判断 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - skills サポートしました指定版本更新しました ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

### 🐛 不具合修正

- **[client]** 修正しました水平子フォーム中フィールド过窄导致数据不显示的問題 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[データソース管理]**

  - 修正しました v1 外部データソース Configure fields ページ反复重渲染导致フィールド编辑ポップアップ内容为空的問題。 ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - 修正しました v1 データソース管理中削除しました当前集合分类后、All collections 标签页可能显示为空的問題。 ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[异步タスク管理器]** 修正しました异步タスク worker 日志中的リクエスト ID エラー問題 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[Workflow：SQL ノード]** 修正しました部分 beta 版本用户跳过 SQL Workflow历史模板変数移行しました的問題。 ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[AI employees]**

  - 修正しましたWorkflow LLMノード消息設定丢失問題。 ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
  - 修正しました AI 员工对话框粘贴的附件无法削除しました問題。 ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
- **[ブロック：Kanban]** 修正しましたカレンダー等ポップアップサポートしましたURL ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[Workflow：承認]** 修正しました v2 承認フォーム中关联数据显示不出来的問題 by @zhangzhonghe
