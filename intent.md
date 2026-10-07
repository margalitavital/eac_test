# Date Picker App — Deadline & Follow-Up Tracker

A lightweight web application that automatically calculates and displays key follow-up dates (7, 14, 21, and 30 days from today) with interactive date pickers, enabling users to track deadlines and schedule follow-up actions.

## Business challenge

Users need a simple, visual tool to quickly identify and work with standard follow-up or deadline dates — specifically 7, 14, 21, and 30 days from the current date — without manual calculation. Date pickers allow adjustments and save time in day-to-day scheduling tasks.

## Business Goals & Success Criteria

| Metric | Baseline | Target | Timeline | Process / Capability | Source |
|--------|----------|--------|----------|----------------------|--------|
| Time to identify follow-up dates | Manual calculation | Instant (auto-calculated) | — | Plan and Schedule Service | agent-derived |
| Missed follow-up rate | — | Reduced via visual date reminders | — | Deadline Tracking | agent-derived |

## Key Milestones

- **App Launched**: The date picker app is accessible and displays today's date with all four calculated dates.
- **Date Interaction**: Users can adjust any of the four date pickers and reset to the calculated default.

## Business Architecture (RBA)

### End-to-End Process

Plan to Fulfill

### Process Hierarchy

```
Plan to Fulfill
└── Deliver Service to Fulfill (generic)
    └── Plan and Schedule Service (BPS-356)
        └── Manage resource scheduling
        └── Plan service tasks
```

### Summary

The date picker application maps to the Plan to Fulfill E2E process, specifically the "Plan and Schedule Service" sub-process (BPS-356), supporting scheduling and deadline management activities relevant to service and project-based work.

## Fit Gap Analysis

| Requirement (business) | Standard asset(s) found | API ORD ID | MCP Server ORD ID | MCP Server Version | Data Product ORD ID | Gap? | Notes / assumptions |
| ---------------------- | ----------------------- | ---------- | ----------------- | ------------------ | ------------------- | ---- | ------------------- |
| Display today's date and calculate +7/14/21/30 day dates | None — pure frontend logic | — | — | — | — | No | Handled entirely in the UI layer |
| Interactive date pickers with reset functionality | None — pure frontend logic | — | — | — | — | No | Standard browser date input components |
| SAP Fiori-inspired design (light blue & grey) | SAP UI5 Web Components (partial) | — | — | — | — | No | Custom styling applied to match Fiori palette |
| Schedule follow-ups / task planning | SAP Field Service Management, SAP S/4HANA Cloud | — | — | — | — | Maybe | Out of scope for this app version; future integration possible |

### Key findings
- The app is a standalone frontend with no required SAP backend — all date logic runs client-side.
- Standard SAP scheduling products (FSM, S/4HANA) exist for deeper integration but are out of scope.
- The Vercel/v0 Frontend App category is the best fit — no custom backend logic needed.
- SAP Fiori design principles (light blue/grey palette) will be applied for consistency with SAP ecosystems.
- Future enhancement could integrate with SAP Task Activity API (`sap.s4:apiResource:OP_API_TASK_SRV_0001:v1`) for task creation.

## Recommendations

### Date Picker Web App — Standalone Frontend

#### Executive Summary

Lightweight date picker app with auto-calculated follow-up dates in Fiori style.

#### Recommended Solution

A standalone frontend web application built with React and SAP UI5 Web Components, generated via Vercel v0. The app displays today's date and four pre-calculated date pickers (+7, +14, +21, +30 days), each resettable to the default calculated value. Styled with a clean SAP Fiori-inspired light blue and grey palette.

#### Problem Statement

Users spend time manually calculating follow-up or deadline dates. A simple, visual tool auto-calculates the standard intervals (7/14/21/30 days) and makes them interactive.

#### Affected User Roles

- General business users (any role needing follow-up date tracking)
- Project managers
- Customer service agents
- Sales representatives

#### Important factors

##### Zero backend dependency
All date logic runs in the browser — no SAP system connection required, making it instantly usable by anyone.

##### SAP-consistent design
Fiori-inspired styling ensures visual alignment with SAP products, supporting adoption in enterprise environments.

#### Potential risks

##### No persistence
Dates are not saved — users must re-visit the app each session. Future versions could add local storage or SAP backend integration.

#### Recommended solution category

Vercel/v0 Frontend App

#### Intent fit
92%
