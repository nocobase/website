## New Feature

### Role Union

Role Union is a permission management mode. According to system settings, system developers can choose to use `Independent roles`, `Allow roles union`, or `Allow roles union`, to meet different permission requirements.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

Reference: [Role Union](https://docs.nocobase.com/handbook/acl/manual)

### Verification and Two-Factor Authentication (2FA)

The original verification code feature has been upgraded to a comprehensive verification management system, supporting multiple authentication methods (such as TOTP). The system also supports two-factor authentication (2FA), which requires an additional verification step during login, on top of the password, significantly enhancing account security.

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

Reference:

* [Verification](https://docs.nocobase.com/handbook/verification)
* [Two-Factor Authentication](https://docs.nocobase.com/handbook/two-factor-authentication)
* [TOTP Authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### Multiple keyword filter

The multi-keyword filter plugin adds powerful text filtering capabilities to the NocoBase platform, enabling you to filter data using multiple keywords and greatly enhancing the flexibility and efficiency of data queries.

![20250417165918_rec_](https://static-docs.nocobase.com/20250417165918_rec_.gif)

Reference: [Multiple keyword filter](https://docs.nocobase.com/handbook/multi-keyword-filter)

### 日期筛选功能支持灵活配置自定义偏移量

支持按自定义时间偏移（天/周/月/季度/年）和指定日期进行筛选，满足更灵活的时间范围查询需求。

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### 联动规则扩展筛选操作符

支持为 `select`、`radioGroup`、`multipleSelect`、`checkboxGroup` 等字段类型动态配置选项，实现与表单中其他字段的联动更新。支持为日期字段动态配置可选范围，可根据表单其他字段的变化自动调整日期范围。

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

Reference: [字段联动规则](https://docs-cn.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### 联动规则条件左侧支持变量

条件左侧变量用于定义联动规则中“判断的对象”，即基于该变量的值来进行条件判断，从而决定是否触发联动行为。

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

Reference: [左侧变量](https://docs-cn.nocobase.com/handbook/ui/linkage-rule#%E5%B7%A6%E4%BE%A7%E5%8F%98%E9%87%8F)

### 区块继承模板

继承模板主要适用于希望区块能跟随模板的基础更新，但也需要做一些自己的调整的场景。通过继承模板创建的区块，会继承模板的配置，并能在此基础上进行扩展或覆盖。未被区块覆盖的配置会随模板更新而同步。

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

Reference: [继承模版](https://docs-cn.nocobase.com/handbook/block-template#%E7%BB%A7%E6%89%BF%E6%A8%A1%E6%9D%BF)

### 区块联动规则

支持在区块中配置联动规则，实现动态显示区块。

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

### 提交成功后

支持刷新其它区块的数据，支持带参数数跳转详情页。

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

Reference: [提交成功后](https://docs-cn.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### 新增代码字段

![image-q0jwvb.png](https://static-docs.nocobase.com/image-q0jwvb.png)

### 工作流分类管理

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

## 优化

### Ant design 相关依赖升级至 5.24.2

### 导入、导出xlsx性能优化
