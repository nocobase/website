On [Reddit](https://www.reddit.com/r/InventoryManagement/comments/1s8i5lq/quick_help_to_create_a_warehouse_management/) in r/InventoryManagement, someone wanted to use AI to build a stock control app for a restaurant.

![reddit1-wcwqye.png](https://static-docs.nocobase.com/reddit1-wcwqye.png)

At first, the requirements seemed simple: enter products, receive stock, and issue stock. But once the system was actually being built, more questions appeared. How should different stock units be handled? How should quantities change after stock-in and stock-out operations? Requirements that can be described in a few sentences often involve more data and business rules than expected once they are implemented in a real system. People in the comments also pointed out that stock control is much more complex than it appears on the surface.

![reddit2-ztg7en.png](https://static-docs.nocobase.com/reddit2-ztg7en.png)

This is also a common issue when using AI to build business systems. Generating a few pages is becoming increasingly fast, but the data relationships behind those pages, stock movements, permissions, workflows, and whether the system can still be maintained when requirements change all need to be checked carefully.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. → [Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

If we use exactly the same stock control requirements, **what is the difference between letting AI generate an application from scratch and letting AI build the same system on NocoBase?**

We built two versions:

- Starting from a blank project, AI directly generated an independent stock control application.
- AI built the same system on top of NocoBase's data models, pages, permissions, and workflows.

**Next, we compare the two approaches across purchasing, stock receiving, stock movement records, stocktaking, and later requirement changes, focusing on concrete differences in data relationships, business rules, permissions, and maintenance.**

## 1. What Can the Same Prompt Generate?

The requirements we gave AI covered a relatively complete stock control workflow:

> Build a stock control system for an auto-parts sales company to centrally manage products, categories, suppliers, purchase orders, and stock; record stock-in, stock-out, damage, and stock adjustments; view stock movement history; identify low stock, overstock, and products with no outbound activity for a long time; support stocktaking, discrepancy review, and stock adjustment; and provide a management dashboard with interconnected demo data.

The requirements mainly contain five parts:

**Products and suppliers → Purchasing → Stock movements → Stock risks → Stocktaking and adjustments**

A purchase order may contain multiple products. After products are received, stock levels need to change, while the corresponding receipt record must also be preserved. If a stocktake finds a discrepancy, the system should not simply overwrite a single stock figure; it also needs to record the discrepancy, adjustment reason, and confirmation result.

**The full prompt is below. Both systems in the rest of this article were generated from this same requirement.**

```Plain
I am responsible for stock at an auto-parts sales company. We currently manage products, suppliers, purchasing, and stock mainly with spreadsheets. As the number of products grows, we frequently encounter inaccurate stock levels, delayed discovery of stockouts, long-term overstock of some products, and stocktaking discrepancies that are difficult to trace.

I want to build a stock control system that centrally manages products, categories, suppliers, purchase orders, and stock data. The system should record every stock-in, stock-out, damage, and stock adjustment so that I can view current stock at any time and understand why quantities changed.

I want the system to automatically identify stockouts, low-stock items, overstock, and products with no outbound activity for a long time. Based on recent sales and stock levels, it should provide replenishment suggestions to help purchasing staff decide which products to buy, how much to buy, and which supplier to use.

The system also needs to support stocktaking. Stocktaking staff can enter the actual quantity, and the system should automatically calculate gains or losses. After review is completed, stock should be adjusted according to the discrepancy, with a complete record retained.

Managers need an intuitive dashboard showing total stock, stock value, recent stock-in and stock-out activity, stock risks, and pending items. The overall design should be clear and easy to use, allowing stock control staff to handle daily operations efficiently while helping managers quickly identify problems.

Based on the actual business requirements above, please design a reasonable functional structure, data relationships, and page interactions, and prepare some interconnected sample data so the system can directly demonstrate a complete stock control process.
```

### First-Round Results

We built this system in two ways: with Vibe Coding and with NocoBase + AI.

The **Vibe Coding** version already included pages for product stock, purchasing, stock-in and stock-out, stocktaking, suppliers, and data overview.

![Vibe Coding1-6305s0.png](https://static-docs.nocobase.com/Vibe%20Coding1-6305s0.png)

The **NocoBase + AI** version also generated products, suppliers, purchase orders, stock movement records, stock risks, and stocktaking management.

![NocoBase + AI1-175nko.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI1-175nko.png)

![NocoBase + AI2-4ebi71.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI2-4ebi71.png)

If you only look at the pages and feature lists, there may be no obvious difference at first glance. For a demo stock control system, both approaches can produce results quickly.

Vibe Coding starts from a blank project. How the database is designed, how APIs are written, which components are used on pages, and where stock control logic lives are all generated by AI based on the current requirements.

NocoBase + AI builds inside an existing business-system framework. When AI creates products, purchase orders, and stock movement records, the table relationships, pages, permissions, and workflows it uses are capabilities already provided by NocoBase.

## 2. Comparing the Two Stock Control Systems in Real Business Workflows

We selected a common stock control workflow:

**Create products and suppliers → Create purchase order → Receive goods → Generate stock movement record → Identify low stock → Start stocktake → Review discrepancy → Adjust stock**

### Start with Products and Purchase Orders

Start with the most basic data: products, suppliers, and purchase orders.

Suppose the company purchases three types of auto parts from Supplier A. One purchase order contains:

- 100 sets of brake pads
- 200 air filters
- 300 spark plugs

This order involves at least four types of records: supplier, purchase order, purchase order lines, and products. One order can contain multiple line items, and each line records a product, quantity, and unit price.

**NocoBase + AI**

![NocoBase + AI3-8r5cb3.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI3-8r5cb3.png)

![NocoBase + AI4-vki8es.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI4-vki8es.png)

**Vibe Coding**

![Vibe Coding2-7vb38c.png](https://static-docs.nocobase.com/Vibe%20Coding2-7vb38c.png)

When checking a stock control system, seeing a “Supplier” page and a “Purchase Order” page is not enough.

**Can these records reference one another and continue to be used during later receiving operations?**

For example, can you view related products and purchase records from the supplier detail page? When opening a purchase order, can you see every product line? When receiving goods later, can the system still reference the data from this purchase order?

**NocoBase + AI**

![NocoBase + AI5-f33kiq.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI5-f33kiq.png)

![NocoBase + AI6-wfojbl.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI6-wfojbl.png)

**Vibe Coding**

![Vibe Coding3-wtei88.png](https://static-docs.nocobase.com/Vibe%20Coding3-wtei88.png)

Based on the current generated results, both systems already provide pages for these business objects. In NocoBase + AI, the objects are built on a unified data model; in the Vibe Coding version, those relationships need to be maintained by the generated database structure and program logic.

### Purchase Receiving and Stock Movement Records

After the purchase order is created, the next step is receiving.

Suppose the brake pads already have 20 units in stock and another 100 are received from this purchase order. After receiving, the current stock should become 120, and a new stock-in record should be created and linked to the corresponding purchase order.

The record also needs to retain the receiving time, operator, and other information. Later stock-out, damage, returns, or stocktake adjustments should continue generating new stock movement records.

So we focus on three things: **whether stock is updated correctly, whether a corresponding transaction record is preserved, and whether that record can be traced back to the original purchase order.**

**NocoBase + AI**

![NocoBase + AI7-zwj7gb.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI7-zwj7gb.png)

![NocoBase + AI8-e2qin5.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI8-e2qin5.png)

**Vibe Coding**

![Vibe Coding4-xje72f.png](https://static-docs.nocobase.com/Vibe%20Coding4-xje72f.png)

**A stock control system cannot store only the latest stock figure. Stock-in, stock-out, damage, and adjustments all need their own change records so the source of the final quantity can be traced later.**

### Low Stock and Replenishment Decisions

After stock movements, managers also need to quickly identify which products have fallen below safety stock.

For example, if a product has current stock of 20 and safety stock of 50, the system should classify it as low stock. If safety stock is later changed to 30, the risk result should update accordingly.

Both first versions already generated stock-risk or similar management pages.

But the source of the data still matters. Are these results directly derived from the stock data created earlier?

If the system also generates replenishment suggestions, it needs to calculate suggested quantities using current stock, safety stock, target stock, and potentially historical stock-out activity, while also retrieving the corresponding supplier information.

**NocoBase + AI**

![NocoBase + AI9-7dw6hp.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI9-7dw6hp.png)

![NocoBase + AI10-azp6i7.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI10-azp6i7.png)

![NocoBase + AI11-gd51ln.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI11-gd51ln.png)

**Stock risk is not standalone data. It comes from existing information such as current stock, safety stock, products, and suppliers.**

### Stocktake Discrepancies, Review, and Stock Adjustments

Suppose the system shows 100 units of a part, but warehouse staff physically count only 96.

The stocktaking staff first enter the actual quantity, and the system calculates a discrepancy of -4. But stock should not immediately be changed to 96.

The reason for those four missing units needs to be confirmed first. It may be an unrecorded stock-out, loss, an input error, or another cause. If stocktaking staff can directly overwrite the original stock figure after entering a count, it becomes difficult to determine later how the change occurred.

So we added a more specific rule:

> Stocktaking staff can enter the actual quantity and discrepancy reason, but only after a reviewer confirms the result can the system formally adjust stock.

The processing flow for one stocktake discrepancy is:

**Enter actual quantity → Calculate discrepancy -4 → Submit for review → Confirm adjustment → Stock becomes 96 → Save adjustment record**

At this point, there is much more to check:

1. Is the discrepancy calculated automatically and moved into the correct status?
2. Can users without review permission adjust stock?
3. After review, is stock updated and an stock movement record generated at the same time?
4. Are the operator, time, and reason recorded?
5. Are historical stocktake results preserved?

This kind of requirement is difficult to solve simply by “generating a stocktake page.”

In the Vibe Coding version, the system needs additional program logic to connect stocktake status, review permissions, stock updates, and adjustment records. For example, once a review is approved, the program must update stock and create an adjustment record at the same time. Accounts without review permission must not be able to perform that operation.

![Vibe Coding5-777sjc.png](https://static-docs.nocobase.com/Vibe%20Coding5-777sjc.png)

The NocoBase + AI version uses existing data relationships, role permissions, and workflows to handle the same set of rules. After a stocktake record is submitted, it enters a pending-review status. A reviewer confirms it, then stock is updated and the corresponding adjustment record is preserved.

![NocoBase + AI13-xusg88.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI13-xusg88.png)

![NocoBase + AI12-vf04s7.png](https://static-docs.nocobase.com/NocoBase%20%2B%20AI12-vf04s7.png)

## 3. Vibe Coding or NocoBase + AI: Which Should You Choose?

After comparing purchasing, receiving, stock risks, stocktaking, and changing requirements, the difference between the two approaches becomes clearer. They are not solving exactly the same problem.

### When Is NocoBase + AI a Better Fit?

If you are building an internal business system for stock control, procurement, CRM, or IT management, NocoBase + AI is generally a better fit.

Its advantages mainly appear in four areas.

**1. AI generates more than pages**

Products, suppliers, purchase orders, stock movement records, stocktake records, permissions, and workflows created by AI become business objects inside NocoBase that can continue to be used and modified.

**2. Common back-office capabilities do not need to be rebuilt**

Data relationships, permissions, forms, workflows, and similar capabilities are already provided by NocoBase. Teams can spend more time on specific business rules such as how stock should be calculated, who can see which warehouses, and how transfers should work.

**3. Later changes cost less**

When adding fields, adjusting pages, changing permissions, or adding workflows, many changes can be configured directly on the existing data model rather than repeatedly modifying frontend code, APIs, and database code.

**4. The scope of AI changes is clearer**

AI mainly operates on explicit objects such as data models, fields, pages, permissions, and workflows. As the system becomes more complex, it is easier to inspect which parts were affected by a change.

### When Is Vibe Coding a Better Fit?

Vibe Coding's main advantages are speed and flexibility. It can be a better choice when your project is focused on the following:

**1. The project is still in an early validation stage.** The current goal is simply to build a demo, MVP, or disposable prototype quickly, without needing to consider complex data relationships, permissions, or long-term maintenance.

**2. You already have an existing codebase and want AI to continue developing within that technical stack.** For example, your team already has its own frontend and backend projects and only wants AI to add pages, APIs, or business logic.

> ### How Can You Let AI Build on NocoBase?
>
> If you want to reproduce the NocoBase + AI approach above, first let your Coding Agent enter the NocoBase AI Builder environment, then submit the specific business requirements. During initialization, you can use the following instruction:
>
> ```Plain
> Please follow the official NocoBase documentation to help me install the NocoBase CLI and complete initialization:
> https://docs.nocobase.com/ai-builder
>
> All subsequent applications must be built with NocoBase AI Builder and NocoBase Skills. Do not create a standalone React, Vue, or Next.js project.
> ```
>
> After initialization is complete, submit the stock control requirements from earlier and ask AI to prioritize NocoBase's data models, pages, permissions, and workflows. This keeps later generation and modification within the same application structure.

**If this article was helpful, feel free to share it with others who are exploring how to use AI to build business systems.**
