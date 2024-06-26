# 排序字段

<PluginInfo name="field-sort"></PluginInfo>

## 介绍

排序字段用于对数据表中的记录进行排序，支持先分组再排序（sort1）。

:::warning
因为排序字段是同表字段，所以分组排序时，不支持同一条记录分在多个组里。
:::

## 安装

内置插件，无需单独安装。

## 使用手册

### 创建排序字段

![20240409091123_rec_](https://static-docs.nocobase.com/20240409091123_rec_.gif)

创建排序字段时，会对排序值进行初始化：

- 如果未选择分组排序，会依据主键字段和创建日期字段进行初始化。
- 如果选择了分组排序，会先对数据进行分组，再依据主键字段和创建日期字段进行初始化。

:::warning{title="事务一致性的说明"}
- 创建字段时，如果排序值初始化失败，就不会创建排序字段；
- 在某个范围内，某记录从 A 位置移动到 B 位置，AB 区间内所有记录的排序值都会变更，如果有一条失败，移动就会失败，相关记录的排序值都不会变更。
:::

#### 示例一：创建 sort1 字段

sort1 字段无分组

![20240409091510](https://static-docs.nocobase.com/20240409091510.png)

各记录排序字段会依据主键字段和创建日期字段进行初始化：

![20240409092305](https://static-docs.nocobase.com/20240409092305.png)

#### 示例二：创建一个基于 Class ID 分组的 sort2 字段

![20240409092620](https://static-docs.nocobase.com/20240409092620.png)

此时会对数据表中的全部记录先分组（按 Class ID 分组），再进行排序字段（sort2）的初始化，各记录的初始化值：

![20240409092847](https://static-docs.nocobase.com/20240409092847.png)

### 拖拽排序

排序字段主要用于各种区块记录的拖拽排序，目前支持拖拽排序的区块有表格和看板。

:::warning
- 同一个排序字段作为拖拽排序时，多区块混用可能会破坏已有排序；
- 表格拖拽排序的字段不能选择带分组规则的排序字段；
  - 例外：一对多的关系表格区块里，外键可以作为分组；
- 目前仅看板区块支持分组的拖拽排序。
:::

#### 表格行的拖拽排序

表格区块

![20240409104621_rec_](https://static-docs.nocobase.com/20240409104621_rec_.gif)

关系表格区块

<video controls width="100%" src="https://static-docs.nocobase.com/20240409111903_rec_.mp4" title="Title"></video>

:::warning
一对多关系区块里

- 如果选的是未分组的排序字段，那所有的记录都可能参与排序；
- 如果基于外键先分组再排序，那排序规则只会影响当前分组内的数据。

最终效果是一致的，但是参与排序的记录数不一样，更多说明详见 [排序规则说明](#排序规则说明)
:::

#### 看板卡片的拖拽排序

![20240409110423_rec_](https://static-docs.nocobase.com/20240409110423_rec_.gif)

### 排序规则说明

#### 未分组（或则同组）元素之间的位移

假设有一组数据

```
[1,2,3,4,5,6,7,8,9]
```

当某个元素，假如是 5 向前移动到 3 的位置，此时，只有 3,4,5 的序号有变动，5 占用了 3 的位置，3,4 各向后移动一个位置。

```
[1,2,5,3,4,6,7,8,9]
```

此时继续 6 向后移动到 8 的位置，6 占用了 8 的位置，7,8 各向前移动一个位置。

```
[1,2,5,3,4,7,8,6,9]
```

#### 不同分组之间元素的移动

分组排序时，当某一条记录移动到其他组里时，自身所在组也会发生改变。例如以下示例：

```
A: [1,2,3,4]
B: [5,6,7,8]
```

当 1 移动到 6 时（默认在后面），1 所在组也会从 A 变为 B

```
A: [2,3,4]
B: [5,6,1,7,8]
```

#### 排序的变更和界面显示的数据无关

例如有一组数据

```
[1,2,3,4,5,6,7,8,9]
```

界面只显示了

```
[1,5,9]
```

当 1 移动到 9 的位置时，中间的 2,3,4,5,6,7,8 数据的位置都会变更

```
[2,3,4,5,6,7,8,9,1]
```

界面显示

```
[5,9,1]
```
