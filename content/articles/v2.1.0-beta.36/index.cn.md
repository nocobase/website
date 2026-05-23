### 🎉 新特性

- **[cli]** 添加 backup create 和  backup restore 命令 ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
- **[备份管理器]** 开源备份管理器插件 ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
- **[主题编辑器]** 主题编辑器现已支持 v2 界面 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
- **[双因素身份认证 (2FA)]** 新版客户端现在可以绑定、验证和配置 TOTP 与两步验证。 by @Molunerfinn

### 🚀 优化

- **[client]** 优化操作按钮显示设置 ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
- **[flow-engine]** v2 字段配置菜单现在支持搜索字段 ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
- **[cli]** 改进 env auth 流程 ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
- **[undefined]**

  - 为依赖变更添加 Pull Request 安全检查 ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
- **[验证]** 为「验证」插件新增 v2 客户端（管理设置页、用户中心入口、短信验证码表单等）。 ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
- **[用户认证]** 自定义品牌设置现在可以在 v2 客户端中正常生效 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
- **[区块：地图]** 为地图插件新增 v2 客户端支持。 ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
- **[自定义品牌]** 自定义品牌设置现已支持 v2 客户端 by @zhangzhonghe
- **[AI: 知识库]** 开放 AI 知识库的向量存储修改功能 by @cgyrock
- **[工作流：审批]** 为审批节点增加 `async` 类型标识，以适配工作流画布新增节点的新 API by @mytharcher

### 🐛 修复

- **[client]**

  - 修复 v2 关系字段通过数据范围联动时，依赖的关系字段变更后未清空已选值的问题 ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  - 修复开发模式下已构建 storage 插件依赖本地源码插件命名导出时加载失败的问题。 ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  - 修复子表单里 JS Field 菜单状态不正确的问题。 ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
  - 修复 v2 区块退出编辑模式后缩窄宽度丢失的问题 ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
- **[client-v2]** 修复 dnd-kit 依赖注册不一致的问题。 ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
- **[flow-engine]** 修复外部数据源字段配置为多选字段后，在 v2 表单中无法进行多选的问题 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
- **[区块：iframe]** 修复 iframe 设置区块高度后内容未撑满区块的问题 ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
- **[AI 员工]**

  - 修复 AI 员工使用只读知识库时报错问题 ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  - 修复工具调用流式事件被拆分时，AI 工具调用卡片无法即时显示的问题 ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
  - 修复 AI 员工使用只读知识库时报错问题 ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
- **[操作：导出记录]** 修复数据表关系字段较多时导出按钮的字段配置点击卡顿的问题 ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
- **[操作：批量更新]** 修复批量更新插件在更新失败后未重置 loading 状态的问题 ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
- **[工作流]** 为手动执行工作流增加加载状态。 ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
- **[本地化]** 修复 AI 翻译任务中内建词条参考翻译的取值问题 ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
- **[迁移管理]** 修复使用 OceanBase 时创建迁移文件失败的问题 by @2013xile
- **[文件存储：S3 (Pro)]** 修复 S3 Pro 端点处理逻辑，避免服务端上传和 URL 预览重复拼接 bucket 子域名。 by @mytharcher
