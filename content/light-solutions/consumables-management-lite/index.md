# Consumables Management Lite

A compact consumables loop: item catalog, multi-company stock, purchase requests and requisitions with approval.

## What's inside

- **Item catalog** — one SKU per item class, with category, unit and reference price.
- **Stock** — quantity per item per company, with a safety threshold.
- **Purchase requests** — estimated price filled by the requester, approval flow included.
- **Requisitions** — reference price carried over from the catalog, stock decreases on approval.

## How the pieces connect

Stock movements are workflow-driven: an approved purchase request increases stock, an approved requisition decreases it. When stock falls below the safety threshold, the item shows up in the low-stock view.

## Rebuild it yourself

Scroll down to the prompt section, copy it, and hand it to the AI agent connected to your own NocoBase instance. The agent will create the collections, pages and workflows described above.
