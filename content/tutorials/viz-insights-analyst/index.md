# Core Positioning

Data Analyst + Business Advisor. Turn conversations into queries, quickly pull key data, and generate charts with concise insights.

## Core Capabilities

- **Automatic Charting & Insights:** One-click data visualization to quickly spot trends, anomalies, and key turning points.
- **Business-Oriented Interpretation:** Analyze data by region, channel, audience, and product for attribution, comparison, and segmentation.
- **Multi-Method Decision Support:** Apply funnel analysis, segmentation, retention, customer lifetime value, and contribution analysis to guide business priorities.
- **Actionable Recommendations Based on Data:** Present only factual, implementable growth and improvement strategies without fabricating data.

## Typical Scenarios


| Scenario                                                             | Key Question                                                                     | Output                                                                                                     | Prompt                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Monthly Business Review & Trend Diagnosis**                        | What improved or worsened compared to last month?                                | KPI cards (revenue, orders, average order value), trend lines, MoM/YoY table, 3 actionable recommendations | Generate a “Monthly Business Review.”<br/>Time range: this month vs last month & same month last year.<br/>Dimensions: Overall + Channel (Direct/Third Party) + Region (East China/South China).<br/>Output: KPI cards, trend chart, MoM/YoY table, 3 data-driven recommendations. |
| **Growth Decomposition: Volume vs Price**                            | Is revenue growth driven by more orders or higher order value?                   | Decomposition of Revenue = Traffic × Conversion Rate × AOV; Contribution bar chart                       | Break down revenue changes in the past 90 days by traffic, conversion rate, and average order value.<br/>Output: decomposition chart + 3 comparison tables + contribution rate of each factor.                                                                                       |
| **Product Matrix: Profit Drivers vs Drag**                           | Which products generate the most profit? Which tie up inventory with low margin? | Top/Bottom 10 list; 80/20 profit contribution chart; clearance recommendations                             | Show profit contribution by category/product.<br/>Output: Top/Bottom 10 list, 80/20 chart, clearance recommendations.<br/>Highlight high-volume low-margin risk items.                                                                                                               |
| **Channel Health: ROI & Acquisition Quality**                        | Which channel should we scale up or scale down?                                  | Channel ROI comparison, first vs repeat purchase ratio, 7/30-day retention, CAC & LTV                      | Analyze ROI, first/return purchase ratio, 7/30-day retention, CAC and LTV for each channel in the last 60 days.<br/>Output: channel comparison table + contribution chart + “Scale/Keep/Reduce” suggestions.                                                                       |
| **Funnel & Conversion Bottleneck**                                   | Plenty of traffic but low sales—where is the drop-off?                          | Funnel chart from Exposure→Click→Add to Cart→Order→Payment; key bottlenecks and actions                | Generate a marketing funnel (Exposure→Click→Add to Cart→Order→Payment) to locate the highest drop-off stage.<br/>Provide 3 data-backed optimization suggestions (e.g., page load, copywriting, promo triggers).                                                                  |
| **Segmentation & Retention: What Do High-Value Customers Look Like** | What traits define high-value customers and how to boost repeat purchases?       | RFM or Cohort retention curve, core audience profile, action recommendations                               | Perform RFM segmentation and output Cohort retention curve.<br/>Highlight high-value audience profile and engagement suggestions.                                                                                                                                                    |
| **Pricing & Promotion Effect Evaluation**                            | Did the promotion actually increase profit? What is the price elasticity?        | Pre-/post-promotion comparison, price elasticity estimate, profit impact analysis                          | Evaluate last week’s big promotion impact on GMV, gross margin, and repeat purchase rate; estimate price elasticity range.<br/>Output: metric comparison + short conclusion + risk warning.                                                                                         |
| **Forecasting & Stocking Advice (Lightweight)**                      | How many orders next month, and how much inventory is safe?                      | Lightweight forecast based on seasonality/trend; stocking range and out-of-stock SKU list                  | Use sales from the past 12 months to forecast next month’s demand range and SKUs at risk of stockout.<br/>Output: forecast line chart + SKU list + recommended stocking range (explain assumptions).                                                                                |
| **North Star Metric Suggestions**                                    | Which KPI should the team focus on?                                              | Candidate KPI list (measurable, actionable, tied to long-term value) with data rationale                   | Provide 3 candidate KPIs for North Star metrics and explain selection rationale and data availability.<br/>Output: candidate table + recommendation rationale.                                                                                                                       |

## 1) General Section: Viz Background Definition

### Viz Core Background

```yaml
# Core Persona Definition
You are **Viz**, an insightful, visually-oriented **AI Data Analyst** and storyteller. You transform raw data into compelling visual narratives. Friendly and approachable, your goal is to make complex data instantly understandable and actionable through engaging visualizations.

**Core Mission:**
Your mission is to query necessary data sources, analyze results, and present findings in clear, visually appealing formats (such as charts and KPI cards) with concise explanations.

**Your Process:**
1. **Understand User Intent:** Analyze the user’s question to identify their analytical goal and required data.
2. **Formulate and Execute Queries:** Generate safe, read-only SQL SELECT queries or use specified tools to retrieve data. Always wait for the data before proceeding.
3. **Analyze and Explain:** Analyze the retrieved data and directly answer the question. Never fabricate findings. Keep text explanations concise and focused on interpreting the visualization.
4. **Visualize and Present:** Visualization is your strength:
   * For trends, comparisons, or distributions: generate charts (bar, line, pie, etc.) in valid ECharts JSON
   * For key single metrics: present visually striking KPI cards
   * Even for simple numbers, present them visually in an engaging way

**Key Rules:**
* **Language:** Prioritize the user’s language ({{$nLang}}) and respond in the language of the question for clarity. If unclear or unsupported, default to English.
* **Visual Priority:** Unless visualization is truly impossible, always create charts or KPI cards.
* **Data Integrity:** Never fabricate data or draw conclusions without evidence.
* **SQL Safety:** Only generate SELECT queries; never use INSERT, UPDATE, or DELETE.
* **ECharts Format:** When creating charts, only use `<echarts>` tags with pure, valid JSON; no comments, JS functions, or executable code.

**Visualization Format Rules:**
* Use `<echarts>{...JSON...}</echarts>` directly; do not wrap with code blocks
* Ensure JSON is valid and properly formatted
* Include appropriate tooltips, legends, and labels for clarity
* Choose the chart type best suited to the data (pie for proportions, bar for comparisons, line for trends, etc.)

**Example Output Format:**

[Briefly describe findings in {{nLang}}]

<echarts>  
{  
  "tooltip": { "trigger": "item" },  
  "legend": { "top": "5%", "left": "center" },  
  "series": [  
    {  
      "name": "Data Series",  
      "type": "pie",  
      "radius": ["40%", "70%"],  
      "data": [  
        { "value": 1048, "name": "Category A" },  
        { "value": 735, "name": "Category B" }  
      ]  
    }  
  ]  
}  
</echarts>  

**Incorrect Example (Avoid):**
// Wrong
JavaScript functions: Do not use functions in formatters or other properties. This is executable code, not valid JSON. 
<echarts>
...
"tooltip": {
"formatter": function (params) {
return params.name + ': ' + params.value;
}
}
... 
</echarts>
```

This background definition is **general**, applicable to any data analysis scenario.

## 2) Specialization: CRM Business Analysis Task

### From General to Specialized Needs

While using Viz for general data analysis, CRM-related tasks (leads, opportunities, customers) emerged frequently. Each time we had to:

* Write complex multi-table JOIN SQL queries
* Recompute conversion funnels
* Manually organize opportunity stages

### Creating a Dedicated Task: CRM Data Comprehensive Analysis

#### Task Prompt Example

```yaml
Hi Viz,

I need your help to perform a comprehensive visualization analysis of current data.

**Main Task:**
First, try using the **`Overall Analytics`** tool to get an overview of **leads, customers, contacts, and opportunities** data.

**Key Instructions:**
0. **Important Precondition: Verify Table Names**
   * Before using any tool, first **confirm the exact table names** in the database.
   * My instructions might use common terms like "leads," but the database might require precise names such as "lead."

1. **Data Retrieval:**
   * After confirming table names, use `Overall Analytics` tool.
   * If the tool lacks necessary data, switch to SQL.

2. **Visualization Requirements:**
   * Create **separate and clear charts** for each key insight.
   * All charts must be in ECharts format.
   * Provide a brief explanation under each chart.

Please start by analyzing the Opportunities (Leads) data.

```

#### Expected Output

![01_Viz_DataAnalyst_cn-2025-09-29-12-52-05](https://static-docs.nocobase.com/01_Viz_DataAnalyst_cn-2025-09-29-12-52-05.jpg)

![01_Viz_DataAnalyst_cn-2025-09-29-12-52-18](https://static-docs.nocobase.com/01_Viz_DataAnalyst_cn-2025-09-29-12-52-18.jpg)

### Supporting Tool: Overall Analytics

To make this CRM analysis task more efficient, we created a specialized tool:

**1. data\_analysis Table**


| Field Display Name | Field Name  | Field Interface     |
| ------------------ | ----------- | ------------------- |
| **PK & FK Fields** |             |                     |
| ID                 | id          | Integer             |
| **General Fields** |             |                     |
| Name               | name        | Single line text    |
| SQL                | sql         | Code                |
| Collection         | collection  | Collection selector |
| Description        | description | Markdown(Vditor)    |
| **System Fields**  |             |                     |
| Created at         | createdAt   | Created at          |
| Created by         | createdBy   | Created by          |
| Last updated at    | updatedAt   | Last updated at     |
| Last updated by    | updatedBy   | Last updated by     |


![tasks-2025-09-29-12-47-18](https://static-docs.nocobase.com/tasks-2025-09-29-12-47-18.png)

![01_Viz_DataAnalyst_cn-2025-09-29-12-48-14](https://static-docs.nocobase.com/01_Viz_DataAnalyst_cn-2025-09-29-12-48-14.png)


**2. Overall Analytics Workflow**

* A dedicated tool for Viz
* Used only in CRM analysis tasks
* Does not alter Viz's core definition
  ![01_Viz_DataAnalyst_cn-2025-09-29-12-56-40](https://static-docs.nocobase.com/01_Viz_DataAnalyst_cn-2025-09-29-12-56-40.png)

**3. Benefits**

* Improved CRM analysis efficiency, no need for manual SQL writing
* Standardized output format
* Business staff can use it quickly

## 3) Best Practices: Designing and Using Viz

### Step 1: Understand the Relationship Between Background and Task

![](https://static-docs.nocobase.com/01_Viz_DataAnalyst_cn-2025-09-29-18-56-13.jpg)


### Step 2: Write Effective Task Prompts

#### Prompt Writing Tips

Below is a tested and proven prompt structure:

![](https://static-docs.nocobase.com/01_Viz_DataAnalyst_cn-2025-09-29-18-56-30.jpg)


#### Why This Works

1. **Clear Role** – "Hi Viz" immediately sets the AI in the data analyst role.
2. **Structured Instructions** – **Bold** text and numbered steps make instructions easy to follow.
3. **Preconditions** – Item 0 highlights crucial precautions (e.g., table name verification).
4. **Tool Priority** – Clearly state which tool to use first and fallback options.
5. **Specific Requirements** – “Independent charts” is more precise than “generate charts.”

### Step 3: Practical Application Examples

#### Scenario: Monthly Business Analysis

**Original Request:** The boss wants to review this month’s business performance.

**Optimized Prompt:**

```markdown
Hi Viz,

Please generate this month’s business analysis report.

**Analysis Requirements:**
0. **Data Validation**
   * Confirm that the orders table contains data for this month.
   * If no data, clearly indicate.

1. **Core Metrics (show as KPI cards)**
   * Total Sales
   * Order Volume
   * Average Order Value
   * Growth rate compared to last month

2. **Trend Analysis (separate chart)**  
   * Daily sales line chart
   * Mark highest and lowest points
   * Show 7-day moving average line

3. **Output Format**
   * Each analysis point in a separate chart
   * 2–3 sentence explanation below each chart
   * Finish with 3 data-driven recommendations

Time Range: From the 1st of this month to today  
Data Source: orders table and order_items table

```

#### Scenario: Sales Decline Diagnosis

**Original Request:** Sales are down—find out why.

**Optimized Prompt:**

```markdown
Hi Viz,

Help diagnose the recent drop in sales.

**Diagnosis Steps:**
0. **Confirm the Problem**
   * Compare this week’s sales vs last week
   * Calculate percentage decrease

1. **Multi-Dimensional Breakdown**
   * By product category: which category dropped the most
   * By channel: which channel is underperforming
   * By region: any specific regional decline
   * By customer: changes in new vs returning customers

2. **Deep Dive Analysis**
   * Identify the dimension with the sharpest drop
   * Analyze specific issues in that dimension
   * Check for abnormal orders or refunds

3. **Output Requirements**
   * Use a waterfall chart to show each factor’s contribution
   * Provide a comparison table with detailed data
   * Present the 3 most likely causes and methods to verify them

First, use Overall Analytics to get the overall data. If details are needed, supplement with SQL.

```

## 4) Prompt Optimization & Issue Handling

### Prompt Optimization Tips


| Technique Type              | Poor Example           | Better Example                                                        | Reason                          |
| --------------------------- | ---------------------- | --------------------------------------------------------------------- | ------------------------------- |
| **Table Name Verification** | Analyze leads data     | Analyze Leads data (first verify table name is “leads” or “lead”) | Avoids table name errors        |
| **Output Control**          | Generate charts        | Generate independent ECharts charts for each metric                   | Ensures output format           |
| **Tool Specification**      | Query and analyze data | 1. Prefer Overall Analytics2. Use SQL if needed                       | Clear tool priority             |
| **Error Handling**          | (Not mentioned)        | If no data, clearly state what is missing                             | Prevents AI from making up data |

### Common Problem Handling


| Problem            | Cause                                       | Solution                                             |
| ------------------ | ------------------------------------------- | ---------------------------------------------------- |
| Charts too complex | No requirement for separate charts          | Explicitly request “independent charts per metric” |
| Table name errors  | User uses plural but database uses singular | Add “verify table name” precondition               |
| Data fabrication   | No emphasis on data authenticity            | Add “never fabricate data” rule                    |
| Overly long output | No limit on explanation length              | Request “2–3 sentence brief explanation”          |
| Format errors      | No specified output format                  | Specify “use`<echarts>`tags”                       |

## Summary

### Key Takeaways

1. **Two-Layer Architecture**
   * Background definition: stable general capability
   * Task specialization: flexible business tools
2. **Tool Empowerment**
   * Tools are part of tasks, not the core persona
   * Create specialized tools as business needs evolve
3. **Art of Prompting**
   * Structured, specific, tool-oriented
   * Verify first, execute next, provide examples
4. **Continuous Optimization**
   * From general to specialized is a natural evolution
   * Problem-driven improvements are the most effective
