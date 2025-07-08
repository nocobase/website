## **NocoBase 商业授权激活指南**

为了提升用户体验并增强安全性，我们对商业授权和激活流程进行了全面升级。新的授权方式取代了以往在配置文件中填写用户名和密码的旧方法，引入了“实例 ID (Instance ID)”和“授权密钥 (License-key)”的机制。

新方案的核心优势在于：

* **提升安全性**：不再需要明文存储您的账户信息，降低了敏感信息泄露的风险。
* **简化流程**：授权与您的 NocoBase 实例直接绑定，管理和更新授权更加直观、便捷。
* **增强灵活性**：当您的部署环境发生变化时，可以轻松重新生成授权，快速适应新环境。
* **授权保障**：通过后端的授权管理和状态监控，您可以监控授权的实际使用情况 ，及时发现并处理非授权的应用，避免商业授权被盗用 。

本指南将引导您完成全新的 NocoBase 商业授权激活流程。
<image src="https://static-docs.nocobase.com/undefined20250701165905545.png" >

---

## **授权激活分步指南**

在开始前，请确保您已成功安装并运行了 NocoBase 社区版。

### **第一步：访问授权页面并复制实例 ID (Instance ID)**

1. 在您本地的 NocoBase 应用中，访问 `系统设置` -\> `授权设置 (License settings)` 页面。
2. 在此页面，您会看到一串 **Instance ID**，这是您当前运行环境的唯一标识。点击其右侧的复制图标。

![img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g](https://static-docs.nocobase.com/img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g.jpg)

### **第二步：在 Service 平台创建应用并关联实例 ID**

1. 登录 NocoBase Service 平台，在“应用”管理页面点击“添加”按钮。
2. 在弹出的表单中，填写您的应用信息，并将上一步复制的 `Instance ID` 粘贴到 `Instance ID` 输入框中，然后提交。

![20250707233019](https://static-docs.nocobase.com/20250707233019.png)

### **第三步：获取授权密钥 (License Key)**

1. 应用创建成功后，返回授权列表，找到对应的条目，点击操作栏中的“查看授权”按钮。
2. 在授权详情弹窗中，点击“复制”按钮，即可获取与您实例匹配的 **License Key**。
   ![img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g](https://static-docs.nocobase.com/img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g.jpg)

### **第四步：在 NocoBase 中配置授权密钥**

1. 返回您本地 NocoBase 的 `授权设置 (License settings)` 页面。
2. 将刚刚复制的 `License Key` 粘贴到 `License key` 输入框中，点击“提交”按钮。
3. 保存成功后，系统会提示“License key saved successfully, please restart the server”，表明授权密钥已配置成功，等待重启。

![img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g](https://static-docs.nocobase.com/img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g.jpg)

### **第五步：完成激活并下载商业版本和商业插件**

重启您的 NocoBase 服务以应用授权并自动下载商业版本和商业插件。

* **对于 Docker 部署**：执行重启命令 `docker compose restart app`。
* **对于源码或 `create-nocobase-app` 部署**：在项目根目录下执行 `yarn nocobase pkg download-pro` 命令。

服务重启并成功下载插件后，您的商业版授权即已激活。如需变更授权，可再次进入授权设置页面，点击“更改key”按钮，重复以上流程。

---

## **如何查看授权信息**

授权激活后，您可以随时点击 NocoBase 界面右上角的授权信息图标，查看当前授权的详细状态，包括授权版本、到期日、域名匹配状态及已授权插件列表等。

![20250707234415](https://static-docs.nocobase.com/20250707234415.png)

---

## 部署与授权快速检查清单

遇到问题时，可以对照这份清单快速排查：

- [ ]  **第一步：获取 Instance ID**
  - [ ]  NocoBase 社区版/未授权版 已成功运行。
  - [ ]  已从 `License settings` 页面完整复制了 `Instance ID`。
- [ ]  **第二步：生成 License Key**
  - [ ]  已在 Service 平台创建应用。
  - [ ]  创建应用时粘贴的 `Instance ID` 是最新且正确的。
  - [ ]  已从"查看授权"中完整复制了 `License Key`。
- [ ]  **第三步：激活**
  - [ ]  已将 `License Key` 粘贴回 NocoBase 并成功保存。
  - [ ]  **已根据部署方式执行了重启容器或 `download-pro` 命令。** (很多用户会漏掉这一步！)
- [ ]  **验证**
  - [ ]  授权信息弹窗中显示状态为"Active"(已激活)。

## 常见问题与解答 (FAQ)

在安装或使用过程中，您可能会遇到以下提示，请根据对应的解决方案进行处理：

### 1. `License key mismatch` - 授权密钥与环境不匹配

<image src="https://static-docs.nocobase.com/undefined20250701193351673.png" />

【问】为什么我配置好后，提示 `License key mismatch` (授权密钥不匹配)？

【答】可能是您的运行环境发生了变化，导致"`Instance ID`"更新了，但您的应用中还是旧的"`License Key`"。
**解决方案**：请严格按照本指南的**第一步**，去获取您**当前环境**最新的 `Instance ID`，然后走完后续流程，生成一把新的"钥匙"即可。

### 2. `Invalid license key` - 授权密钥已失效

<image src="https://static-docs.nocobase.com/undefined20250701193558012.png" />

【问】提示 `Invalid license key` 是什么意思？

【答】您的 `License Key` 可能已过期或因其他原因被平台标记为无效。
**解决方案**：请联系我们或在服务平台检查您的授权状态。如果需要，请重新生成 `License Key` 并配置。

### 3. `Invalid license key format` - 授权密钥格式错误

<image src="https://static-docs.nocobase.com/undefined20250701193148501.png" />

【问】提示 `Invalid license key format` 怎么办？

【答】您粘贴的 `License Key` 不完整或格式有误，导致系统无法解析。
**解决方案**：请返回服务平台，确保完整复制了 `License Key`，然后重新粘贴并保存。

### 4. 访问系统时，强制弹出授权信息提示框

<image src="https://static-docs.nocobase.com/undefined20250625164238000.png" width="400" />

【问】为什么总是弹出授权信息提示框？

【答】出现此弹窗通常意味着授权校验失败。可能的原因包括：

- `License Key` 已损坏或与本地环境不匹配
- 授权已过期或失效
- `License Key` 与您正在运行的商业插件版本不匹配

**解决方案**：最直接的解决方法是**完整地重新执行一遍授权配置流程**：获取最新的 `Instance ID`，生成新的 `License Key`，并设置到本地系统中。

### 5. 环境迁移相关问题

【问】我迁移了服务器/数据库，商业插件就用不了了，怎么办？

【答】这和上一个问题是同一个原因。服务器或数据库是构成"身份证 (`Instance ID`)"的关键信息，它们一变，`Instance ID` 就会变。

**解决方案**：和上面一样，获取新的 `Instance ID`，生成新的 `License Key`，重新激活一次。整个过程就像您搬家后去更新身份证地址一样。

### 6. 插件未生效问题

【问】我已经重启了，为什么商业插件还是没生效？

【答】如果确认 `License Key` 配置无误，可以尝试以下排查：

1. **检查网络**：确保您的服务器可以访问 NocoBase 的 npm 仓库。
2. **查看日志**：检查 NocoBase 启动时的日志，看看是否有插件下载失败或授权校验失败的错误信息。
3. **手动执行**：如果您是源码部署，可以再次手动执行 `yarn nocobase pkg download-pro` 命令，并观察命令行输出。

### 7. 新旧授权方式对比

【问】这个流程和我之前用用户名/密码的方式有什么不同？

【答】旧的方式是将您的账户密码直接暴露在环境中，不够安全。新的 `License Key` 体系有几个好处：

1. **更安全**：您无需暴露主账户密码，只使用与特定环境绑定的密钥。
2. **更灵活**：您可以为不同的客户或项目生成不同的 `License Key`，方便管理。
3. **更清晰**：授权信息一目了然，所有细节都记录在 Service 平台上。
