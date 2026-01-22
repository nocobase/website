📝 Note: This article was last updated on Jan. 23, 2026. We regularly update the information to ensure you have the latest insights! 😊

This blog was produced by Leandro Martins and was originally published at [Build Application Catalog with NocoBase](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#).

The goal is to demonstrate the potential and ease of [NocoBase](https://www.nocobase.com/) for developing web applications without coding. As a case study, I will create an application catalog to assist with architecture governance. This case will involve modeling, installation, table creation, menus, forms, charts, and workflows using NocoBase features.

For this article, we will use the following technologies: NocoBase, Postgres, and Docker.

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

## **What is NocoBase?**

[NocoBase](https://www.nocobase.com/) is an open-source platform written in JavaScript, using NodeJS, TypeScript, and AntDesign, designed to create custom applications without the need for coding. It is a low-code backend solution that enables the visual creation of tables, custom forms, workflow automation, and tailored interfaces.

![What is NocoBase?.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **Key Highlights of NocoBase**:

* **Active community**: A highly active forum to support plugin development and troubleshooting.
* **Constantly reviewed code**: Frequent updates with contributions on GitHub, boasting over 13k stars.
* **Database compatibility**: Supports major relational databases like Postgres and MySQL.
* **Visual data modeling**: Define tables and data visually using the Main Database plugin.
* **Extensive plugin library**: Offers a wide range of free and paid plugins, with the ability to develop custom plugins.

* **AI employees embedded in the system**: Seamlessly integrate AI capabilities into user interfaces, business workflows, and data contexts, enabling AI to be practically applied in real enterprise scenarios.

![Key Highlights of NocoBase.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **Case Study Overview**

To showcase some of NocoBase's features, we’ll create a case study called *Architecture Portal*. This portal is designed to organize data about an organization's applications, featuring the following functionalities:

* **Application catalog**.
* **Reminders for updates**, such as version upgrades and certificate renewals.
* **API catalog** for the organization's systems.
* **Charts** for insightful data visualization.

![Case Study Overview.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **Development Stages**

### **Modeling the Data**

The first step is to map and define the fields we’ll include in the Architecture Portal. Below is an example:

```
1. Application Catalog

Applications:
id: Unique identifier.
name: Application name.
description: Detailed description of the application.
stack: Technologies used.
owner: Responsible person or team.
created_at: Creation date.
last_updated: Last update date.

Reminders (Linked to Applications):
id: Unique identifier.
application_id: Reference to the application.
type: Reminder type (e.g., version update, certificate renewal).
description: Reminder description.
scheduled_date: Scheduled date for the reminder.
status: Status (e.g., Pending, Completed).

2. API Catalog

APIs:
id: Unique identifier.
Application_id: Reference to the corresponding system.
name: API name.
description: Functional description of the API.
documentation_url: Link to the official documentation.
last_updated: Last update date.
version: Current version.
```

### **Installing NocoBase**

For [installation](https://docs.nocobase.com/welcome/getting-started/installation) and configuration, I opted to use the Docker version locally. Other installation options include npm or Git source.

Below is the YAML code for Docker Compose. After installing Docker, navigate to the YAML file directory and run the following command:

```
docker compose up -d
```

This will launch NocoBase on your machine at port `13000`. Open [`http://localhost:13000`](http://localhost:13000/) in your web browser. The default credentials are [`admin@nocobase.com`](mailto:admin@nocobase.com) and `admin123`.

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # The application's secret key, used to generate user tokens, etc.
      # If APP_KEY is changed, old tokens will also become invalid.
      # It can be any random string, and make sure it is not exposed.
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Database host, can be replaced with the IP of an existing database server
      - DB_HOST=postgres
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
      # Timezone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # If using an existing database server, postgres service can be omitted
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **Creating Tables and Data**

Using the **Data Source Manager** plugin, we can create collections (tables) and define fields. The process is simple and follows the model outlined above. Below are some references and links for more details on the plugin [here](https://www.nocobase.com/en/plugins)).

![Creating Tables and Data.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![Creating Tables and Data.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **Creating Menus**

By clicking the pencil-like icon on the right side of the screen, you can create top and side menus, as shown in the image. Let's replicate it as demonstrated in the image.

![Creating Menus.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **Creating Forms**

Creating forms (CRUD) is also very straightforward. NocoBase uses blocks to create tables, forms, details, lists, charts, cards, and more. After selecting the type of block, simply choose which collection (table) you want to link to this block, and the component (block) linked to the collection magically appears. Each block has its own customization settings. For more details about blocks, check here.

![Creating Forms.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **Creating Charts**

Building charts is also simple. Just add a block called *Chart* and select the collection you want to use as the data source, as shown in the image below.

![Creating Charts.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

Once the block is selected, you can configure the chart properties. The image below shows the chart configuration options, allowing you to define indicators, grouping, filters, various chart types, and titles, among other available properties. Here, you can explore all the configuration possibilities.

![Creating Charts.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **Creating a Scheduled Workflow for Reminders**

NocoBase allows you to create automated workflows to perform various types of tasks through events. The three types of triggers are: *Collection Event, Scheduled Event and Post-Action Event.* Using these triggers, you can create actions within the system, such as sending notifications, inserting data into other tables, or making requests to an external API. Below is an example workflow for sending notifications within the application.

![Workflow.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

In our case, we will create a workflow to send a notification on the day a reminder is scheduled. This will be a **Scheduled Event** to run every day at a specific time, as shown in the images below.

![Workflow.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![Workflow.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

In addition to configuring the schedule, you need to set up the workflow to query the **Reminders** collection, fetch reminders for the day, loop through each one, and send notifications for each reminder, as shown in the image below. The process is simple: just add these actions by clicking the "+" button and configuring them.

![Workflow.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

After completing the configuration, simply activate the workflow by clicking the "On" button in the upper right corner. To view the execution results, click on the "…" in the upper right corner and select **Execution History**, as shown in the image below.

![Workflow.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **Conclusion**

As demonstrated, NocoBase offers numerous features to expedite application development. Depending on the scale and requirements, it provides flexibility for building applications, with additional capabilities such as file management, internationalization, mobile support, and theme editing. You can even develop your own plugins or purchase commercial ones available in the marketplace.

Related reading:

* [How to build apps with NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Top 8 Powerful No-Code Development Platforms in 2025](https://www.nocobase.com/en/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [The Top 12 Open-Source No-Code Tools with the Most GitHub Stars](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [Top 15 Open-Source Low-Code Projects with the Most GitHub Stars](https://www.nocobase.com/en/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [Top 6 No-Code Tools for Developers](https://www.nocobase.com/en/blog/top-6-no-code-tools-for-developers)
* [Top 7 Open Source Rapid Development Platform](https://www.nocobase.com/en/blog/rapid-development-platform)
