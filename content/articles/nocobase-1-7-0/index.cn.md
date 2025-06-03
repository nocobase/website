## 新特性

### 用户角色并集

角色并集是一种权限管理模式，根据系统设置，系统开发者可以选择使用独立角色、允许角色并集，或者仅使用角色并集，以满足不同的权限需求。

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

参考文档：[角色并集](https://docs-cn.nocobase.com/handbook/acl/manual)

### 验证管理与双因素身份认证（2FA）

验证码功能已升级为验证管理，支持多种身份验证方式（如 TOTP），用户可绑定验证方式，在需要时完成身份验证。系统还支持双因素认证（2FA），登录时需在密码基础上额外验证，有效提升账户安全。

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

参考文档：

* [验证管理](https://docs-cn.nocobase.com/handbook/verification)
* [双因素身份认证](https://docs-cn.nocobase.com/handbook/two-factor-authentication)
* [TOTP 认证器](https://docs-cn.nocobase.com/handbook/verification-totp-authenticator)

### 导入记录Pro

导入配置支持多字段定唯一记录，支持设置空白单元格覆盖和忽略模式。

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

参考文档：[导入 Pro](https://docs-cn.nocobase.com/handbook/action-import-pro)

### 模板打印

文档模板支持动态图片和条形码渲染功能。

参考文档：[模版打印](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### 多关键词筛选

多关键词筛选插件为 NocoBase 平台增加了强大的文本筛选功能，让您能够使用多个关键词进行筛选，大大提高了数据查询的灵活性和效率。

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

参考文档：[多关键词筛选](https://docs-cn.nocobase.com/handbook/multi-keyword-filter)

### 日期筛选支持选择相对时间范围

支持按自定义时间偏移（天/周/月/季度/年）和指定日期进行筛选，满足更灵活的时间范围查询需求。

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### 联动规则扩展筛选操作符

支持为 `select`、`radioGroup`、`multipleSelect`、`checkboxGroup` 等字段类型动态配置选项，实现与表单中其他字段的联动更新。支持为日期字段动态配置可选范围，可根据表单其他字段的变化自动调整日期范围。

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

参考文档：[字段联动规则](https://docs-cn.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### 联动规则条件左侧支持变量

条件左侧变量用于定义联动规则中“判断的对象”，即基于该变量的值来进行条件判断，从而决定是否触发联动行为。

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

参考文档：[左侧变量](https://docs-cn.nocobase.com/handbook/ui/linkage-rule#%E5%B7%A6%E4%BE%A7%E5%8F%98%E9%87%8F)

### 区块继承模板

继承模板主要适用于希望区块能跟随模板的基础更新，但也需要做一些自己的调整的场景。通过继承模板创建的区块，会继承模板的配置，并能在此基础上进行扩展或覆盖。未被区块覆盖的配置会随模板更新而同步。

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

参考文档：[继承模版](https://docs-cn.nocobase.com/handbook/block-template#%E7%BB%A7%E6%89%BF%E6%A8%A1%E6%9D%BF)

### 区块联动规则

支持在区块中配置联动规则，实现动态显示区块。

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

参考文档：[区块联动规则](https://docs-cn.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### 提交成功后

支持刷新其它区块的数据，支持带参数数跳转详情页。

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

参考文档：[提交成功后](https://docs-cn.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### 新增代码字段

![image-q0jwvb.png](https://static-docs.nocobase.com/image-q0jwvb.png)

### 工作流分类管理

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### 部门和附件 URL 插件开源

## 优化

### Ant design 相关依赖升级至 5.24.2

### 导入、导出xlsx性能优化

### 工作流执行效率提升 100%
