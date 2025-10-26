# NocoBase AI Employee Quick Start Guide

## 1) Understand the NocoBase AI Employee Architecture

### Two-Layer Design

NocoBase AI Employees use a **Background Definition + Task Specialization** two-layer architecture:

#### 1. Background Definition (General Capabilities)

* **What it is:** The AI employee's base persona, traits, and core skills
* **Nature:** Stable, like a résumé and fundamental competencies
* **Purpose:** Keeps behavior and tone consistent across tasks

#### 2. Task Specialization (Business Tools)

* **What it is:** Task-specific instructions and tools for concrete scenarios
* **Nature:** Flexible and adjustable per business needs
* **Purpose:** Enhances abilities for specific jobs

### Why two layers?


| Benefit          | Explanation                          | Real-world effect                   |
| ---------------- | ------------------------------------ | ----------------------------------- |
| **Stability**    | Core definition isn't altered        | Persona stays consistent            |
| **Flexibility**  | Different tasks use different tools  | One employee handles many scenarios |
| **Maintainable** | Background & tasks update separately | Upgrading tools won't break persona |
| **Reusable**     | One background supports many tasks   | Less duplicate definition work      |

### Example: Viz adapted for a CRM scenario

1. **Starting point:** Viz is a general **Insights Analyst** who writes SQL and makes charts.
2. **Need:** Frequent analysis of CRM data (leads, opportunities, accounts).
3. **Solution:** Create a **CRM Analysis** task, a workflow tool “Overall Analytics,” and related business tables.
4. **Result:** Viz's core definition stays the same, while CRM analysis becomes faster and more accurate.

---

## 2) AI Employees at a Glance


| AI Employee | Position (use these exact terms) | Core Scenarios                               | When to use                                |
| ----------- | -------------------------------- | -------------------------------------------- | ------------------------------------------ |
| **Viz**     | **Insights Analyst**             | Business analysis, report generation, trends | When you need insights from data           |
| **Orin**    | **Data modeling assistant**      | Table design, relationships, index tuning    | Designing or optimizing data structures    |
| **Dex**     | **Data Organizer**               | Text extraction, form filling, structuring   | Cleaning messy, unstructured information   |
| **Lexi**    | **Translator**                   | Multilingual translation, localization       | Cross-language communication and documents |
| **Nathan**  | **Frontend code engineer**       | Field linkage, components, form logic        | Implementing frontend interactions/logic   |
| **Cole**    | **NocoBase Assistant**           | Config guidance, best practices              | NocoBase setup/usage questions             |
| **Vera**    | **Research Analyst**             | Competitive intel, industry research         | External info and market insights          |
| **Avery**   | **Form filler**                  | Form parsing and automated filling           | Fast, accurate form completion             |

---

## 3) Configure AI Employees in NocoBase

> 💡 **Prerequisite:** NocoBase 2.0+ with the AI Employees plugin installed.

### Step 1: Configure LLM Services

Before creating an AI Employee, you must first set up the large-model (LLM) service.

**Open the Configuration Page**：
![00_QuickStart_cn-2025-09-29-15-40-47](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-15-40-47.png)

**Create the Large-Model Service**：

1. Choose an API **interface type** (e.g., OpenAI, Claude).
2. Enter API key and related settings.
3. Note: The **interface type** refers to the API spec; services compatible with the same spec can be used.

![00_QuickStart_cn-2025-09-29-15-45-27](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-15-45-27.png)

**Test connection** after saving to ensure it works.
![00_QuickStart_cn-2025-09-29-16-18-25](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-18-25.png)

### Step 2: Create an AI Employee

**Basic info:**

* **Name**: The unique identifier for the AI employee
* **Nickname**: The display name or how the AI employee is addressed
* **Enabled status**: Whether this AI employee is activated
* **Bio**: A short description of the AI employee's functionality
* **Main prompt**: Defines the AI employee's core capabilities (see Appendix 1)
* **Greeting message**: The welcome text shown at the start of a conversation

![00_QuickStart_cn-2025-09-29-16-21-09](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-21-09.png)

**Bind an LLM service** (required) and select a **Model**.

![00_QuickStart_cn-2025-09-29-16-22-27](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-22-27.png)

### Step 3: Configure Skills

Skills determine what the AI can do.

* **Frontend**: page interactions
* **Data Model**: database operations
* **Workflow**: custom business tools
* **Other**: extensions

**Tips:**

* Enable only what you need (avoid selecting everything, as this can reduce both performance and accuracy).
* Check “Auto usage” – this allows the AI to automatically run the relevant tools.
* Workflow tools must be created in the Workflow module first.

![00_QuickStart_cn-2025-09-29-16-26-06](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-26-06.png)

### Step 4: (Optional) Configure Knowledge Base

Commercial feature; requires a vector DB configuration.

![00_QuickStart_cn-2025-09-29-16-32-54](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-32-54.png)

### Step 5: Verify

After setup, a new AI Employee icon appears at the bottom-right. Click to chat.

![00_QuickStart_cn-2025-09-29-16-36-54](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-36-54.png)

### Step 6: Configure AI Tasks

AI Tasks are specialized abilities for particular contexts and can be added in two ways.

#### Way 1: Page-level Task Configuration

Add tasks in a page's configuration—effective across the page.

**Task properties:**

* **Title:** The display name of the task
* **Background:** Context information provided to the AI
* **Default user message:** The preset opening message of the conversation
* **Default associated block:** The data block automatically linked to this task
* **Skills:** The tools that the task is allowed to use
* **Auto-execution:** Whether the task should run automatically when the dialog box opens

![00_QuickStart_cn-2025-09-29-16-40-34](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-40-34.png)

Supports **multiple tasks** for one employee; users pick from a dropdown.

![00_QuickStart_cn-2025-09-29-16-46-00](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-46-00.png)

# 

#### Way 2: Block-level Task Configuration

Add an AI action button to a specific block (table, detail, form, list).

**Steps:**

1. Open the block's action settings
2. Choose "Add AI Employee"

![00_QuickStart_cn-2025-09-29-16-51-06](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-51-06.png)

3. Select the employee

![00_QuickStart_cn-2025-09-29-16-52-26](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-52-26.png)

**Traits:**

* Automatically binds current block's data context
* Uses the same task definition as page-level
* Best for data-specific operations

![00_QuickStart_cn-2025-09-29-16-53-35](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-16-53-35.png)

### Configuration Best Practices

Based on practical experience, here are key recommendations for setting up AI employees:


| Setting             | Recommendation                    | Why                                           |
| ------------------- | --------------------------------- | --------------------------------------------- |
| **Skill selection** | Only necessary skills (3–5)      | Too many lowers accuracy                      |
| **Auto usage**      | Test first, enable cautiously     | Avoid unintended data operations              |
| **Task scope**      | One clear objective per task      | Broad tasks confuse the model                 |
| **Prompt length**   | \~500–1000 chars                 | Too long hurts perf; too short lacks guidance |
| **Workflows**       | Wrap complex steps into workflows | Easier to understand & more reliable          |

---

## FAQ

**Q: Cant save an AI employee?**
A: Check if an LLM service is bound.

**Q: Replies are slow?**
A: Reduce skill count and shorten prompts.

**Q: Task execution is off-target?**
A: Refine prompts (see Appendix 1) and use more specific instructions.

**Q: How do I make AI handle a specific form?**
A: Page-level tasks require manually selecting the block;
![00_QuickStart_cn-2025-09-29-17-02-22](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-17-02-22.png)block-level tasks auto-bind the data context.

---

## 4) Learn More

### Detailed Manuals per AI Employee

* **Viz** — Insights Analyst
* **Orin** — Data modeling assistant
* **Dex** — Data Organizer
* **Lexi** — Translator
* **Nathan** — Frontend code engineer
* **Cole** — NocoBase Assistant
* **Vera** — Research Analyst

### Key Takeaways

1. **Two-layer design:** Background (stable) + Task specialization (flexible)
2. **Pick the right employee** for the job
3. **Write good prompts:** specific, structured, clear outputs
4. **Iterate** and keep winning prompt templates

---

## Appendix 1: Writing Prompts for AI Employees

### A) Definition Techniques

**High-accuracy prompt formula**

Every AI employee needs a clear "job description". We use a **proven 9-element formula** to ensure the AI accurately understands and performs its tasks.

`Dual Instructions` + `Mock Confirmation` + `Repetition` + `Hard Rules` + `Background` + `Naming` + `Positive Reinforcement` + `Positive Examples` + `Negative Examples

* **Dual Instructions**: Separate role definition from task steps → prevents confusion.
* **Simulated Confirmation**: Confirm understanding in advance → avoids going off track.
* **Repeated Emphasis**: Restate key points multiple times → reinforces understanding.
* **Mandatory Rules**: Use words like **MUST** or **NEVER** → improves accuracy.
* **Background Information**: Provide essential context → prevents mistakes.
* **Naming**: Give the AI an identity → strengthens its role recognition.
* **Positive Reinforcement**: Encourage good performance → supports better execution.
* **Reference Example**: Provide an accurate, ideal example → gives a clear model.
* **Counterexample**: After real testing, add common pitfalls → clarifies what to avoid.

#### AI Employee Definition Template

```yaml
# 1. Naming (name)
You are [Name], an outstanding [Role]

# 2. Dual Instructions (bothinst)
## Role Definition
Personality traits: [adjective1], [adjective2], [adjective3]
Core mission: [One sentence that clearly states the primary responsibility]
## Task Flow
Step 1 · Understand: [Analyze the user’s needs]
Step 2 · Execute: [Carry out the specific actions] 
Step 3 · Verify: [Check the accuracy of the result]
Step 4 · Present: [Show the final output]

# 3. Simulated Confirmation (mock)
Before executing, first restate your understanding: "I understand you need..."

# 4. Repeated Emphasis (reit)
Key requirement: [State the most critical requirement at the beginning, middle, and end]

# 5. Mandatory Rules (right)
MUST: [Non-negotiable core rules]
ALWAYS: [Principles to consistently follow]
NEVER: [Explicitly prohibited actions]

# 6. Background Information (info)
Relevant knowledge: [Provide necessary background information or common pitfalls]

# 7. Positive Reinforcement (pos)
You are especially skilled at [encouraging description]

# Reference Example
[Provide a perfect output example to be used as a model]

```

```####

If a simple definition is not effective, use XML tags to separate content into sections so the AI can understand more easily:

```xml
<Role>
You are Dex, a data organization specialist
</Role>

<Personality>
Careful, accurate, and well-organized
</Personality>

<TaskDescription>
Your task is to extract structured information from messy text.
You must follow these steps:
1. Identify all key fields
2. Extract the value for each field
3. Standardize formats (dates in YYYY-MM-DD)
4. Output in JSON format
</TaskDescription>

<BehaviorRules>
- MUST: Maintain 100% accuracy
- NEVER: Guess missing information
- ALWAYS: Mark data that is uncertain
</BehaviorRules>

<OutputExample>
{
  "Name": "Zhang San",
  "Date": "2024-01-15",
  "Amount": 5000,
  "Status": "Confirmed"
}
</OutputExample>

```

#### Debugging & Optimization Process

Continuously refining an AI employee’s definition through practice is essential. The following are proven methods:

**Core Principles**:

1. **Positive Guidance First** – Start by clearly telling the AI *what it should do*.
2. **Problem-Driven Improvement** – Add clarifications or rules only after issues are discovered.
3. **Moderate Constraints** – Introduce negative examples or restrictions only when truly necessary.

**Optimization Steps**

![](https://static-docs.nocobase.com/00_QuickStart_cn-2025-09-29-18-39-11.jpg)

**Issue Log Template**

```xml
Trigger scenario: [Describe when the issue occurred]
Actual behavior: [The AI’s incorrect output]
Expected behavior: [The ideal output]
Solution: [How to adjust the definition]

```

<pre class="overflow-visible!" data-start="171" data-end="363"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"></div></div></pre>

**Optimization Example**

```xml
Initial issue: The AI puts all data into one complex chart.
Solution:
1. Strengthen positive examples: "Create a separate chart for each metric."
2. Add a background note: "Mixing multiple metrics leads to confusion."
3. Only after repeated occurrences, add at the end: "Avoid chart overload."

```

### Golden Rules for Defining AI Employees

Based on extensive practical experience, the following key principles have emerged:

1. **One AI, One Specialty** – Don’t assign too many roles to a single AI.
2. **Positive Examples First** – Good examples are more effective than restrictions.
3. **Clear Rules** – Use strong words like MUST and ALWAYS for key guidelines.
4. **Step-by-Step Process** – A clear, structured workflow keeps the AI focused.
5. **Thorough Testing** – Validate the definition with 5–10 representative tasks.
6. **Moderate Constraints** – Too many “don’ts” can confuse the AI.
7. **Continuous Improvement** – Adjust definitions based on real-world performance.

**Pro Tips**:

* ✅ Start with a working basic version and refine it step by step.
* ✅ Focus on positive guidance first; use negative constraints sparingly (the 8:2 rule).
* ✅ Keep a log of every issue found during testing and how it was resolved.
* ❌ Don’t overload the first draft with too many restrictions.
* ❌ Don’t expect a perfect definition on the first attempt.

> 💡 **Tip**: For each AI employee’s detailed definition, specialized tool configuration, and real-world examples, refer to their dedicated manual. Remember: a great AI employee definition is always the result of iterative refinement.

### B) Writing Effective Task Prompts

#### Basic Prompt Structure

```markdown
Hi [AI Employee Name],  # 1. Specify the AI employee

I need your help with [specific task].  # 2. State the request clearly

**Main Task:**
[Task description]

**Specific Requirements:**
- Requirement 1
- Requirement 2
- Requirement 3

**Output Format:**
[Desired output format]

Please [first step action].  # 3. Give a clear instruction


```

#### Why This Works

1. **Clear Role Definition** – Ensures the AI steps into the correct role.
2. **Structured Layout** – Organizes information with headings and lists.
3. **Specific Requirements** – Reduces ambiguity and misinterpretation.
4. **Controlled Output** – Ensures you get the desired format.

#### Example Comparisons

##### Example 1: Data Analysis (Viz)

❌ **Poor prompt:**

<pre class="overflow-visible!" data-start="831" data-end="856"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>Analyze the </span><span>data</span><span>.
</span></span></code></div></div></pre>

✅ **Good prompt:**

```text
Hi Viz,

Please analyze this month’s sales data:
- Compare it with last month’s results
- Identify which product sold the most
- Provide 3 improvement suggestions

```

##### Example 2: Data Organization (Dex)

❌ **Poor prompt:**

<pre class="overflow-visible!" data-start="1120" data-end="1154"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>Organize </span><span>this</span><span> information.
</span></span></code></div></div></pre>

✅ **Good prompt:**

```t
Hi Dex,

Here are customer feedback emails. Please extract:
- Customer name
- Type of issue
- Contact details

Fill these into the form and create a summary table for easy copy into Excel.

[Email content...]

```

#### Prompt Optimization Tips


| Technique            | Description                   | Example                                  |
| -------------------- | ----------------------------- | ---------------------------------------- |
| **Be Specific**      | Clearly state what to analyze | “This month's sales data” vs “data”  |
| **Set a Range**      | Limit by time or quantity     | “Last 30 days” vs “recently”         |
| **Define Output**    | Specify the output format     | “Table + 3 suggestions” vs “results” |
| **Break Down Steps** | Decompose complex tasks       | Use numbered steps for clarity           |

## Appendix 2: AI Model Capability Comparison (as of Sept 29, 2025)

Below is a capability matrix of major AI models and their ideal use cases.
Reference: [https://lmarena.ai/leaderboard](https://lmarena.ai/leaderboard)


| Model                                 | Overall | Hard Prompts | Coding | Math  | Creative Writing | Instruction Following | Long Queries | Multi-turn Dialogue |
| ------------------------------------- | ------- | ------------ | ------ | ----- | ---------------- | --------------------- | ------------ | ------------------- |
| claude-opus-4-1-20250805-thinking-16k | **1**   | **1**        | **1**  | **1** | **1**            | **1**                 | **1**        | **1**               |
| gemini-2.5-pro                        | **1**   | **2**        | **3**  | **1** | **1**            | **1**                 | **2**        | **1**               |
| chatgpt-4o-latest-20250326            | **2**   | 4            | **3**  | 14    | **2**            | 5                     | 4            | **1**               |
| claude-opus-4-1-20250805              | **2**   | **1**        | **1**  | **1** | **1**            | **1**                 | **1**        | **1**               |
| gpt-4.5-preview-2025-02-27            | **2**   | 5            | 4      | 8     | **1**            | 4                     | **3**        | **1**               |
| gpt-5-high                            | **2**   | **2**        | **3**  | **1** | 7                | 5                     | 13           | 7                   |
| o3-2025-04-16                         | **2**   | 4            | 4      | **1** | 8                | 6                     | 14           | 7                   |
| qwen3-max-preview                     | **3**   | **3**        | **3**  | **1** | 7                | 4                     | **3**        | **3**               |
| gpt-5-chat                            | 5       | 4            | **3**  | 7     | 5                | 5                     | 4            | **1**               |
| claude-opus-4-20250514-thinking-16k   | 8       | 4            | **2**  | 4     | **2**            | **2**                 | **2**        | 7                   |
| grok-4-0709                           | 8       | 11           | 16     | **1** | 5                | 6                     | 5            | 7                   |
| grok-4-fast                           | 8       | 4            | **3**  | —    | 7                | 6                     | **3**        | **2**               |
| qwen3-235b-a22b-instruct-2507         | 8       | 4            | **3**  | **2** | 8                | 6                     | 5            | 7                   |
| deepseek-v3.1                         | 9       | 9            | 7      | 4     | 7                | 8                     | 5            | 12                  |
| deepseek-r1-0528                      | 10      | 10           | 4      | 8     | 7                | 16                    | 14           | 14                  |
| deepseek-v3.1-thinking                | 10      | 5            | 4      | **2** | 5                | 5                     | **3**        | 8                   |
| kimi-k2-0711-preview                  | 10      | 11           | 7      | 13    | 14               | 27                    | 24           | 7                   |
| kimi-k2-0905-preview                  | 10      | 5            | 7      | **2** | 8                | 17                    | 15           | 8                   |
| gpt-4.1-2025-04-14                    | 11      | 11           | 11     | 36    | 7                | 9                     | 7            | 7                   |
| claude-opus-4-20250514                | 12      | 11           | 7      | 10    | 5                | 6                     | 5            | 7                   |
| glm-4.5                               | 12      | 11           | 8      | 5     | 16               | 9                     | 9            | 14                  |
| grok-3-preview-02-24                  | 12      | 11           | 17     | 23    | 7                | 8                     | 5            | 12                  |
| mistral-medium-2508                   | 14      | 11           | 10     | 8     | 14               | 10                    | 13           | 9                   |
| gemini-2.5-flash                      | 17      | 23           | 33     | 7     | 7                | 10                    | 8            | 17                  |
| qwen3-next-80b-a3b-instruct           | 17      | 11           | **3**  | **1** | 45               | 24                    | 23           | 14                  |
| longcat-flash-chat                    | 20      | 11           | 4      | **1** | 24               | 6                     | 28           | 17                  |
| qwen3-235b-a22b-thinking-2507         | 21      | 11           | 8      | 5     | 9                | 10                    | 13           | 17                  |
| claude-sonnet-4-20250514-thinking-32k | 22      | 11           | 4      | 8     | 7                | 6                     | 5            | 9                   |
| o1-2024-12-17                         | 22      | 22           | 27     | 8     | 14               | 9                     | 15           | 28                  |
| qwen3-235b-a22b-no-thinking           | 22      | 16           | 11     | 11    | 17               | 23                    | 18           | 12                  |
| deepseek-r1                           | 25      | 20           | 18     | 8     | 16               | 17                    | 22           | 11                  |
| gpt-5-mini-high                       | 25      | 27           | 33     | 6     | 40               | 27                    | 31           | 32                  |
| mai-1-preview                         | 25      | 24           | 22     | 8     | 16               | 26                    | 23           | 22                  |
| o4-mini-2025-04-16                    | 25      | 27           | 26     | 4     | 38               | 31                    | 39           | 30                  |

---

💡 **Tip**: This guide will be continuously updated. Bookmark it and check back regularly to refine your prompt library based on real-world usage.xt
