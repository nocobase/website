## **NocoBase Commercial License Activation Guide**

To enhance user experience and strengthen security, we have comprehensively upgraded our commercial licensing and activation process. The new authorization method replaces the previous approach of entering usernames and passwords in configuration files, introducing a mechanism based on "Instance ID" and "License Key".

The core advantages of the new solution include:

* **Enhanced Security**: No longer requires storing your account information in plain text, reducing the risk of sensitive information leakage.
* **Simplified Process**: Authorization is directly bound to your NocoBase instance, making license management and updates more intuitive and convenient.
* **Increased Flexibility**: When your deployment environment changes, you can easily regenerate authorization to quickly adapt to the new environment.
* **License Protection**: Through backend license management and status monitoring, you can monitor the actual usage of your license, promptly detect and handle unauthorized applications, and prevent commercial license misuse.

This guide will walk you through the complete new NocoBase commercial license activation process.
<image src="https://static-docs.nocobase.com/undefined20250701165905545.png" >

---

## **License Activation Step-by-Step Guide**

Before starting, please ensure you have successfully installed and are running NocoBase Community Edition.

### **Step 1: Access License Page and Copy Instance ID**

1. In your local NocoBase application, navigate to `System Settings` -> `License Settings` page.
2. On this page, you will see an **Instance ID** string, which is the unique identifier for your current running environment. Click the copy icon to its right.

![img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g](https://static-docs.nocobase.com/img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g.jpg)

### **Step 2: Create Application on Service Platform and Associate Instance ID**

1. Log in to the NocoBase Service platform, click the "Add" button on the "Applications" management page.
2. In the popup form, fill in your application information and paste the `Instance ID` copied from the previous step into the `Instance ID` input field, then submit.

![20250707233019](https://static-docs.nocobase.com/20250707233019.png)

### **Step 3: Obtain License Key**

1. After the application is successfully created, return to the license list, find the corresponding entry, and click the "View License" button in the action column.
2. In the license details popup, click the "Copy" button to obtain the **License Key** that matches your instance.
   ![img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g](https://static-docs.nocobase.com/img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g.jpg)

### **Step 4: Configure License Key in NocoBase**

1. Return to your local NocoBase `License Settings` page.
2. Paste the just-copied `License Key` into the `License key` input field and click the "Submit" button.
3. After successful saving, the system will display "License key saved successfully, please restart the server", indicating that the license key has been configured successfully and is awaiting restart.

![img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g](https://static-docs.nocobase.com/img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g.jpg)

### **Step 5: Complete Activation and Download Commercial Version and Commercial Plugins**

Restart your NocoBase service to apply the license and automatically download the commercial version and commercial plugins.

* **For Docker deployment**: Execute the restart command `docker compose restart app`.
* **For source code or `create-nocobase-app` deployment**: Execute the `yarn nocobase pkg download-pro` command in the project root directory.

After the service restarts and successfully downloads plugins, your commercial license is activated. If you need to change the license, you can re-enter the license settings page, click the "Change key" button, and repeat the above process.

---

## **How to View License Information**

After license activation, you can click the license information icon in the upper right corner of the NocoBase interface at any time to view detailed status of the current license, including license version, expiration date, domain matching status, and authorized plugin list.

![20250707234415](https://static-docs.nocobase.com/20250707234415.png)

---

## Deployment and License Quick Checklist

When encountering issues, you can refer to this checklist for quick troubleshooting:

- [ ]  **Step 1: Get Instance ID**
  - [ ]  NocoBase open source/unlicensed version is running successfully.
  - [ ]  `Instance ID` has been completely copied from the `License settings` page.
- [ ]  **Step 2: Generate License Key**
  - [ ]  Application has been created on the Service platform.
  - [ ]  The `Instance ID` pasted when creating the application is the latest and correct one.
  - [ ]  `License Key` has been completely copied from "View License".
- [ ]  **Step 3: Activation**
  - [ ]  `License Key` has been pasted back into NocoBase and saved successfully.
  - [ ]  **Container restart or `download-pro` command has been executed according to deployment method.** (Many users miss this step!)
- [ ]  **Verification**
  - [ ]  License information popup shows status as "Active".

## Frequently Asked Questions (FAQ)

During installation or use, you may encounter the following prompts. Please follow the corresponding solutions:

### 1. `License key mismatch` - License Key Does Not Match Environment

<image src="https://static-docs.nocobase.com/undefined20250701193351673.png" />

【Q】Why do I get `License key mismatch` after configuration?

【A】Your running environment may have changed, causing the "`Instance ID`" to update, but your application still has the old "`License Key`".
**Solution**: Please strictly follow **Step 1** of this guide to get the latest `Instance ID` from your **current environment**, then complete the subsequent process to generate a new "key".

### 2. `Invalid license key` - License Key Has Expired

<image src="https://static-docs.nocobase.com/undefined20250701193558012.png" />

【Q】What does `Invalid license key` mean?

【A】Your `License Key` may have expired or been marked as invalid by the platform for other reasons.
**Solution**: Please contact us or check your license status on the service platform. If needed, regenerate the `License Key` and configure it.

### 3. `Invalid license key format` - License Key Format Error

<image src="https://static-docs.nocobase.com/undefined20250701193148501.png" />

【Q】What should I do about `Invalid license key format`?

【A】The `License Key` you pasted is incomplete or has incorrect format, preventing the system from parsing it.
**Solution**: Please return to the service platform, ensure you have completely copied the `License Key`, then re-paste and save.

### 4. License Information Dialog Forcibly Appears When Accessing System

<image src="https://static-docs.nocobase.com/undefined20250625164238000.png" width="400" />

【Q】Why does the license information dialog always appear?

【A】This popup usually indicates license verification failure. Possible reasons include:

- `License Key` is corrupted or doesn't match the local environment
- License has expired or is invalid
- `License Key` doesn't match the version of commercial plugins you're running

**Solution**: The most direct solution is to **completely re-execute the license configuration process**: get the latest `Instance ID`, generate a new `License Key`, and set it in the local system.

### 5. Environment Migration Related Issues

【Q】I migrated my server/database, and commercial plugins stopped working. What should I do?

【A】This is the same issue as above. The server or database is key information that constitutes the "ID card (`Instance ID`)", and when they change, the `Instance ID` changes.

**Solution**: Same as above, get the new `Instance ID`, generate a new `License Key`, and reactivate. The entire process is like updating your ID address after moving.

### 6. Plugin Not Taking Effect

【Q】I've restarted, why are commercial plugins still not working?

【A】If you've confirmed the `License Key` configuration is correct, try the following troubleshooting:

1. **Check Network**: Ensure your server can access NocoBase's npm repository.
2. **Check Logs**: Review NocoBase startup logs for plugin download failures or license verification errors.
3. **Manual Execution**: If you're using source deployment, manually execute the `yarn nocobase pkg download-pro` command again and observe the command line output.

### 7. Comparison Between New and Old Authorization Methods

【Q】How is this process different from the previous username/password method?

【A】The old method exposed your account password directly in the environment, which wasn't secure enough. The new `License Key` system has several benefits:

1. **More Secure**: You don't need to expose your main account password, only use keys bound to specific environments.
2. **More Flexible**: You can generate different `License Keys` for different clients or projects, making management easier.
3. **Clearer**: License information is clear at a glance, with all details recorded on the Service platform.
