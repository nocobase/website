# 示例

根据上面介绍的配置流程，以商品下单过程中根据不同商品进行不同优惠规则的最终价格计算举例。

1.  建立商品表：

    | 字段名   | 类型                      |
    | -------- | ------------------------- |
    | 商品名   | 文本                      |
    | 商品原价 | 数字                      |
    | 优惠规则 | `belongsTo`（优惠规则表） |

2.  建立优惠规则表（使用表达式表模板创建）：

    | 字段名   | 类型                     |
    | -------- | ------------------------ |
    | 规则名称 | 文本                     |
    | 数据表   | 单选（数据表）           |
    | 计算引擎 | 单选（mathjs/formulajs） |
    | 表达式   | 文本                     |

3.  录入优惠规则：

    | ID  | 名称     | 数据表 | 计算引擎   | 表达式                |
    | --- | -------- | ------ | ---------- | --------------------- |
    | 1   | 八折商品 | 商品   | formula.js | `{{商品.价格}} * 0.8` |
    | 2   | 九折商品 | 商品   | formula.js | `{{商品.价格}} * 0.9` |

4.  创建商品，并关联优惠规则：

    | ID  | 商品名称      | 价格 | 优惠规则 |
    | --- | ------------- | ---- | -------- |
    | 1   | iPhone 14 Pro | 7999 | 2        |
    | 2   | iPhone 13 Pro | 6999 | 1        |

5.  创建工作流，订单创建时触发：

    ![触发器_创建订单触发](https://static-docs.nocobase.com/f181f75b10007afd5de068f3458d2e04.png)

6.  创建一个动态表达式计算节点，配置动态表达式为触发数据/商品/优惠规则：

    ![选择动态表达式数据](https://static-docs.nocobase.com/21ccc63e604dd90b7d26c3c33c12d671.png)

    配置变量数据源为触发数据中的商品：

    ![选择变量数据源](https://static-docs.nocobase.com/afbffe9661539d26e4b175ae8a4b28f7.png)

7.  增加一个更新数据节点，配置更新订单总价为计算节点的结果：

    ![更新订单数据](https://static-docs.nocobase.com/5cc7ffb113c8d6a2fd3b1b34abe06dcc.png)

8.  创建订单触发工作流，再查看订单列表，核对价格：

    | 订单商品      | 订单商品 / 原价 | 优惠规则 | 总价                 |
    | ------------- | --------------- | -------- | -------------------- |
    | iPhone 14 Pro | 7999            | 九折     | 7999 \* 0.9 = 7199.1 |
    | iPhone 13 Pro | 6999            | 八折     | 6999 \* 0.8 = 5599.2 |

    下图中的总价应与上表中的总价一致：

    ![创建订单后自动计算出的订单总价](https://static-docs.nocobase.com/a5610aca292e79c4841c97457bd3cc7c.png)

    :::info{title=提示}
    由于工作流是异步执行的，刚创建完订单后表格刷新的结果可能并不包含总价，需要等待一段时间后再刷新查看即可观察到总价。
    :::
