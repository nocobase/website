# 定时任务

定时任务是以时间为触发条件的事件，分为两种模式：

- 自定义时间：常规类似 cron 的按系统时间计划触发
- 数据表时间字段：按数据表中时间字段的值到时触发

系统运行到满足所配置的触发条件的时间点（精度到秒）时，会触发相应的工作流。

## 基本使用

### 创建定时任务

在工作流列表创建工作流的类型中选择“定时任务”类型：

![创建定时任务](https://static-docs.nocobase.com/e09b6c9065167875b2ca7de5f5a799a7.png)

### 自定义时间模式

针对常规的模式，首先需要配置开始时间为任意时间点（精度到秒）。开始时间可以配置为未来的时间，也可以配置为过去的时间。当配置为过去的时间时，会根据配置的重复条件检查是否到时，如果没有配置重复条件，开始时间如果是过去的时间，则工作流不再会被触发。

重复规则有两种配置方式：

- 按间隔时间：开始时间后每固定间隔时间触发，如每一小时，每 30 分钟等。
- 高级模式：即按 cron 规则，可配置为到达固定规则日期时间的周期。

配置了重复规则后，还可以配置结束条件，可以通过固定时间点结束，也可以通过已执行过的次数限制。

### 数据表时间字段模式

通过数据表的时间字段来确定开始时间，是一种将普通定时任务和数据表时间字段结合的触发模式，使用这个模式可以简化一些特定流程的中的节点，从配置上也更加直观。例如，需要将超时未支付的订单修改为已取消的状态，可以仅配置一个数据表时间字段模式的定时任务，选择开始时间为订单创建后 30 分钟，

## 相关提示

### 未启动或停机状态下的定时任务

如果配置的时间条件满足时，但整个 NocoBase 应用服务处在未启动或停机状态，则对应时间点应该触发的定时任务会被错过，且在服务重新启动后，已经错过的任务不会再被触发。所以在使用时可能需要考虑对应情况的处理，或候补措施。

### 重复次数

配置了结束条件中的按重复次数时，计算的是同一个工作流所有版本执行过的总次数，例如一个定时任务在版本 1 的时候执行过 10 次，如果重复次数也设置了 10 次，该工作流将不再会被触发，即使复制到新版本，也不会被触发，除非将重复次数修改为大于 10 的数字。但如果是复制为新的工作流，已执行的次数将会重新从 0 开始计算，不修改相关配置的情况下，新的工作流将可以再被触发 10 次。

### 重复规则中间隔时间与高级模式的区别

重复规则中的间隔时间是相对于上一次触发（开始时间）的时间点，而高级模式是按固定的时间点触发，例如，配置了每 30 分钟触发一次，如果上一次触发是 2021-09-01 12:01:23，那么下一次触发时间是 2021-09-01 12:31:23。而高级模式即 cron 模式，配置的规则均为固定的时间点触发，例如，可以配置在每小时的 01 分和 31 分触发。

## 示例

假设每分钟检查创建后超过 30 分钟未完成支付的订单，并自动修改为已取消状态。分别使用两种模式来实现。

### 自定义时间模式

创建一个基于定时任务的工作流，触发器配置中选择“自定义时间”模式，开始时间选择任意不晚于当前时间的时间点，重复规则选择“每分钟”，结束条件留空：

![定时任务_触发器配置_自定义时间模式](https://static-docs.nocobase.com/71131e3f2034263f883062389b356cbd.png)

之后根据流程的逻辑配置其他节点，计算出 30 分钟前的时间，并修改创建时间在其之前未支付的订单为已取消状态：

![定时任务_触发器配置_自定义时间模式](https://static-docs.nocobase.com/188bc5287ffa1fb24a4e7baa1de6eb29.png)

工作流启用后，从开始时间起每分钟会触发一次，计算 30 分钟前的时间，用于更新创建时间早于该时间点的订单状态为取消。

### 数据表时间字段模式

创建一个基于定时任务的工作流，触发器配置中选择“数据表时间字段”模式，数据表选择“订单”表，开始时间选择订单的创建时间之后 30 分钟，重复规则选择“不重复”：

![定时任务_触发器配置_数据表时间字段模式_触发器](https://static-docs.nocobase.com/d40d5aef57f42799d31cc5882dd94246.png)

之后根据流程的逻辑配置其他节点，更新 ID 为触发数据 ID 且状态是“未支付”的订单为取消状态：

![定时任务_触发器配置_数据表时间字段模式_更新节点](https://static-docs.nocobase.com/491dde9df8f773f5b14a4fd8ceac9d3e.png)

与自定义时间模式不同的是，这里不需要计算 30 分钟前的时间，因为工作流触发数据上下文中即包含对应符合时间条件的数据行，所以可以直接更新对应订单的状态。