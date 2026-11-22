### 🚀 优化

- **[client-v2]** 缩小了移动端横向详情区块的字段间距。 ([#11644](https://github.com/nocobase/nocobase/pull/11644))

### 🐛 修复

- **[错误处理器]** 保存记录或关联数据时，重复值和非空字段提示会在原文前显示所属数据表的标题。 ([#11638](https://github.com/nocobase/nocobase/pull/11638))

- **[通知：站内信]** 修复在移动端收件箱打开渠道时可能显示其他渠道消息的问题。 ([#11662](https://github.com/nocobase/nocobase/pull/11662))

- **[迁移管理]** PostgreSQL 迁移包现在会排除无关序列，目标库缺少其他表使用的 schema 时也能还原所选表。

