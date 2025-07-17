汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.2](https://www.nocobase.com/cn/blog/v1.8.2)

*发布时间：2025-07-10*

#### 🎉 新特性

- **[工作流：审批]** 为触发器增加区块初始化器 by @mytharcher

#### 🚀 优化

- **[多应用管理器]** 为子应用增加数据库和认证的独立配置 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
- **[工作流]** 字符串比较运算前将操作数转换为字符串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) by @mytharcher
- **[数据表字段：代码]** 增加字段缩进配置 by @mytharcher

#### 🐛 修复

- **[database]** 修复视图在区块中不显示字段的问题。 ([#7162](https://github.com/nocobase/nocobase/pull/7162)) by @aaaaaajie
- **[区块：看板]** 修复看板中子表格 UI 异常 & 支持设置看板每列宽度 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) by @katherinehhh
- **[工作流：审批]** 修复区块和关系数据问题 by @mytharcher

### [v1.8.3](https://www.nocobase.com/cn/blog/v1.8.3)

*发布时间：2025-07-11*

#### 🚀 优化

- **[多应用管理器]** 为子应用增加数据库和认证的独立配置 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher

#### 🐛 修复

- **[操作：自定义请求]** 修复自定义请求操作成功后，跳转路由时链接地址变量解析错误的问题 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) by @katherinehhh

### [v1.8.4](https://www.nocobase.com/cn/blog/v1.8.4)

*发布时间：2025-07-13*

#### 🎉 新特性

- **[多应用管理器]** 支持为子应用配置独立的认证密钥 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher
- **[工作流：抄送]** 工作流新增抄送节点 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher

#### 🚀 优化

- **[通知：站内信]** 优化移动端消息页面的字体大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe
- **[认证：钉钉]** 支持配置回调 URL 协议和端口号 by @2013xile

#### 🐛 修复

- **[通知：站内信]** 修复字符串格式的大整型时间戳导致的 dayjs 问题 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher
- **[工作流：审批]**

  - 避免用户不存在时的报错 by @mytharcher
  - 重新加载审批记录上的关系数据 by @mytharcher
  - 迁移脚本中更新 UI schema 时加入 `try/catch` by @mytharcher

### [v1.8.5](https://www.nocobase.com/cn/blog/v1.8.5)

*发布时间：2025-07-14*

#### 🚀 优化

- **[数据表字段：公式]** 增加更多可计算的字段类型 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) by @mytharcher
- **[工作流]** 在执行计划由于状态不可执行时用日志替代抛错 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) by @mytharcher
- **[工作流：审批]** 支持当关联业务数据删除时，同时删除审批数据 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复联动规则左侧变量无法选中附件字段的问题 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe
  - 修复在 IOS 中下拉选择组件被键盘遮挡的问题 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe
  - 修复编辑表单中联动规则为选项字段同时设置赋值和选项内容时赋值失效的问题 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh
  - 筛选折叠面板：字段设置默认值后页面初始化没有触发筛选 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe
  - 修复列表区块字段赋值操作中选用看板排序字段时报错的问题 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh
  - 子菜单切换时浏览器标签标题未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe
  - 打开弹窗操作：切换 Tab 标签之后页面显示不符合预期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe
- **[acl]** 修复在使用包含 root 角色的并集模式下删除角色时报错的问题。 ([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie
- **[多应用管理器]** 修复认证选项出现在意外的位置 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher
- **[用户认证]** 修复登录页面不能滚动的问题 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe
- **[工作流：审批]** 修复提交审批时的关系数据 by @mytharcher

### [v1.8.6](https://www.nocobase.com/cn/blog/v1.8.6)

*发布时间：2025-07-16*

#### 🐛 修复

- **[client]**

  - 修复错误：Can't resolve 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) by @zhangzhonghe
  - 修复联动规则中关系字段显示异常的问题 ([#7220](https://github.com/nocobase/nocobase/pull/7220)) by @katherinehhh
- **[database]** 修复外部数据源表设置简单分页模式时的报错问题 ([#7222](https://github.com/nocobase/nocobase/pull/7222)) by @aaaaaajie
- **[数据表字段：排序]** 修复了在复制操作中缺少排序字段的问题 ([#7116](https://github.com/nocobase/nocobase/pull/7116)) by @katherinehhh
- **[工作流：审批]**

  - 为审批记录列表增加审批已删除的容错 by @mytharcher
  - 修复提交审批时的多级关系数据 by @mytharcher
  - 修复删除数据时的异常 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.2](https://www.nocobase.com/cn/blog/v1.9.0-beta.2)

*发布时间：2025-07-10*

#### 🐛 修复

- **[client]**

  - 表单中关系字段表中的勾选字段显示不正确 ([#7176](https://github.com/nocobase/nocobase/pull/7176)) by @zhangzhonghe
  - 修复点击按钮无法打开弹窗的问题 ([#7180](https://github.com/nocobase/nocobase/pull/7180)) by @zhangzhonghe
- **[database]** 修复视图在区块中不显示字段的问题。 ([#7162](https://github.com/nocobase/nocobase/pull/7162)) by @aaaaaajie
- **[工作流：人工处理节点]** 修复使用节点变量时的报错 ([#7177](https://github.com/nocobase/nocobase/pull/7177)) by @mytharcher
- **[模板打印]** rootDataType字段添加迁移脚本 by @jiannx
- **[工作流：审批]** 修复通过分支在没有审批人的时候未执行的问题 by @mytharcher

### [v1.9.0-beta.3](https://www.nocobase.com/cn/blog/v1.9.0-beta.3)

*发布时间：2025-07-14*

#### 🎉 新特性

- **[多应用管理器]** 支持为子应用配置独立的认证密钥 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher
- **[工作流：抄送]** 工作流新增抄送节点 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher
- **[工作流：审批]** 为触发器增加区块初始化器 by @mytharcher

#### 🚀 优化

- **[通知：站内信]** 优化移动端消息页面的字体大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe
- **[工作流]** 字符串比较运算前将操作数转换为字符串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) by @mytharcher
- **[多应用管理器]**

  - 为子应用增加数据库和认证的独立配置 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
  - 为子应用增加数据库和认证的独立配置 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
- **[数据表字段：代码]** 增加字段缩进配置 by @mytharcher
- **[认证：钉钉]** 支持配置回调 URL 协议和端口号 by @2013xile

#### 🐛 修复

- **[client]**

  - 修复联动规则左侧变量无法选中附件字段的问题 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe
  - 修复列表区块字段赋值操作中选用看板排序字段时报错的问题 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh
  - 筛选折叠面板：字段设置默认值后页面初始化没有触发筛选 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe
  - 修复编辑表单中联动规则为选项字段同时设置赋值和选项内容时赋值失效的问题 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh
  - 打开弹窗操作：切换 Tab 标签之后页面显示不符合预期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe
  - 子菜单切换时浏览器标签标题未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe
  - 修复在 IOS 中下拉选择组件被键盘遮挡的问题 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe
- **[acl]** 修复在使用包含 root 角色的并集模式下删除角色时报错的问题。 ([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie
- **[用户认证]** 修复登录页面不能滚动的问题 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe
- **[多应用管理器]** 修复认证选项出现在意外的位置 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher
- **[通知：站内信]** 修复字符串格式的大整型时间戳导致的 dayjs 问题 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher
- **[操作：自定义请求]** 修复自定义请求操作成功后，跳转路由时链接地址变量解析错误的问题 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) by @katherinehhh
- **[区块：看板]** 修复看板中子表格 UI 异常 & 支持设置看板每列宽度 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) by @katherinehhh
- **[工作流：审批]**

  - 迁移脚本中更新 UI schema 时加入 `try/catch` by @mytharcher
  - 修复区块和关系数据问题 by @mytharcher
  - 重新加载审批记录上的关系数据 by @mytharcher
  - 避免用户不存在时的报错 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/cn/blog/v1.9.0-alpha.2)

*发布时间：2025-07-15*

#### 🎉 新特性

- **[多应用管理器]** 支持为子应用配置独立的认证密钥 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher
- **[工作流：抄送]** 工作流新增抄送节点 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher
- **[工作流：审批]** 为触发器增加区块初始化器 by @mytharcher

#### 🚀 优化

- **[数据表字段：公式]** 增加更多可计算的字段类型 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) by @mytharcher
- **[工作流]**

  - 在执行计划由于状态不可执行时用日志替代抛错 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) by @mytharcher
  - 字符串比较运算前将操作数转换为字符串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) by @mytharcher
- **[通知：站内信]** 优化移动端消息页面的字体大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe
- **[多应用管理器]**

  - 为子应用增加数据库和认证的独立配置 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
  - 为子应用增加数据库和认证的独立配置 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
- **[数据表字段：代码]** 增加字段缩进配置 by @mytharcher
- **[工作流：审批]** 支持当关联业务数据删除时，同时删除审批数据 by @mytharcher
- **[认证：钉钉]** 支持配置回调 URL 协议和端口号 by @2013xile

#### 🐛 修复

- **[client]**

  - 修复联动规则左侧变量无法选中附件字段的问题 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe
  - 筛选折叠面板：字段设置默认值后页面初始化没有触发筛选 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe
  - 修复联动规则中关系字段显示异常的问题 ([#7220](https://github.com/nocobase/nocobase/pull/7220)) by @katherinehhh
  - 修复编辑表单中联动规则为选项字段同时设置赋值和选项内容时赋值失效的问题 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh
  - 修复列表区块字段赋值操作中选用看板排序字段时报错的问题 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh
  - 打开弹窗操作：切换 Tab 标签之后页面显示不符合预期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe
  - 子菜单切换时浏览器标签标题未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe
  - 修复在 IOS 中下拉选择组件被键盘遮挡的问题 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe
  - 表单中关系字段表中的勾选字段显示不正确 ([#7176](https://github.com/nocobase/nocobase/pull/7176)) by @zhangzhonghe
  - 修复点击按钮无法打开弹窗的问题 ([#7180](https://github.com/nocobase/nocobase/pull/7180)) by @zhangzhonghe
- **[acl]** 修复在使用包含 root 角色的并集模式下删除角色时报错的问题。 ([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie
- **[database]** 修复视图在区块中不显示字段的问题。 ([#7162](https://github.com/nocobase/nocobase/pull/7162)) by @aaaaaajie
- **[多应用管理器]** 修复认证选项出现在意外的位置 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher
- **[通知：站内信]** 修复字符串格式的大整型时间戳导致的 dayjs 问题 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher
- **[用户认证]** 修复登录页面不能滚动的问题 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe
- **[操作：自定义请求]** 修复自定义请求操作成功后，跳转路由时链接地址变量解析错误的问题 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) by @katherinehhh
- **[区块：看板]** 修复看板中子表格 UI 异常 & 支持设置看板每列宽度 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) by @katherinehhh
- **[工作流：人工处理节点]** 修复使用节点变量时的报错 ([#7177](https://github.com/nocobase/nocobase/pull/7177)) by @mytharcher
- **[模板打印]** rootDataType字段添加迁移脚本 by @jiannx
- **[工作流：审批]**

  - 修复提交审批时的关系数据 by @mytharcher
  - 修复删除数据时的异常 by @mytharcher
  - 修复通过分支在没有审批人的时候未执行的问题 by @mytharcher
  - 避免用户不存在时的报错 by @mytharcher
  - 修复区块和关系数据问题 by @mytharcher
  - 迁移脚本中更新 UI schema 时加入 `try/catch` by @mytharcher
  - 重新加载审批记录上的关系数据 by @mytharcher
