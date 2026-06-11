# Employee Offboarding Lite

One small flow that takes an offboarding case from request to completion: checklist, asset return, account revocation.

## What's inside

- **Offboarding requests** — employee, department, last working day, reason, status.
- **Return items** — per-request checklist of assets to hand back.
- **Account revocations** — per-request checklist of system accounts to disable.

## How the pieces connect

When a request is approved, the workflow seeds the default return items and account revocation rows, so HR only ticks boxes instead of re-creating the checklist each time.

## Rebuild it yourself

Copy the prompt below into the AI agent connected to your NocoBase instance and it will create the collections, the page with relation popups, and the seeding workflow.
