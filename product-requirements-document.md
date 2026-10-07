# Product Requirements Document (PRD)

**Title:** Date Picker App — Deadline & Follow-Up Tracker
**Date:** 2026-09-14
**Owner:** Business User
**Solution Category:** Vercel/v0 Frontend App

---

## Product Purpose & Value Proposition

**Elevator Pitch:**
Users waste time manually calculating follow-up or deadline dates. This app instantly shows today's date and four pre-calculated date pickers (+7, +14, +21, +30 days), allowing quick adjustments and resets — eliminating mental arithmetic from daily scheduling.

**Business Need:**
Business users across roles (project managers, customer service agents, sales reps) repeatedly need standard follow-up intervals. Manual calculation introduces errors and slows workflows. A dedicated, always-available tool removes this friction.

**Expected Value:**
- Follow-up date identification becomes instant (from manual calculation to zero effort)
- Reduced risk of missed deadlines through clear visual date reminders

**Product Objectives (Prioritized):**
1. Eliminate manual date calculation — all four follow-up dates are auto-calculated on load
2. Allow flexible date adjustment — users can override any date and reset to the default
3. Maintain SAP Fiori visual consistency — light blue and grey palette for enterprise adoption

---

## Business Metrics

| Metric | Baseline | Target | Timeline | Process / Capability | Source |
|--------|----------|--------|----------|----------------------|--------|
| Time to identify follow-up dates | Manual calculation | Instant (auto-calculated on page load) | — | Plan and Schedule Service | agent-derived |
| Missed follow-up rate | — | Reduced via visual date reminders | — | Deadline Tracking | agent-derived |

---

## User Profiles & Personas

### Primary Persona: Alex — General Business User

Alex is a 34-year-old operations coordinator who handles scheduling, follow-ups, and task tracking daily. They work in a browser-heavy environment and rely on email and calendar tools. They frequently need to communicate deadlines like "in 2 weeks" or "30 days from today" but lose time converting those to actual calendar dates. Alex is comfortable with web tools and expects them to be fast, clean, and self-explanatory. Success for Alex means spending zero time on date math.

### Secondary Persona: Jamie — Customer Service Agent

Jamie is a 28-year-old support agent who manages open cases with SLA timers of 7, 14, or 30 days. They work under time pressure and need quick access to exact dates without context-switching to a calendar. They value tools that load fast and work without training.

### Secondary Persona: Morgan — Project Manager

Morgan coordinates cross-functional tasks and often schedules check-ins at fixed intervals after project kick-off. They need a consistent reference for standard project milestones and appreciate tools that match the enterprise visual style they are accustomed to.

---

## User Goals & Tasks

### For Alex (General Business User):

**Goals:**
- Quickly identify follow-up dates without manual calculation
- Adjust a date when an actual deadline differs slightly from the standard interval

**Key Tasks:**
- Open the app and immediately see today's date and all four calculated dates
- Change a date picker value for a specific follow-up
- Reset a date picker back to the auto-calculated default

### For Jamie (Customer Service Agent):

**Goals:**
- Reference SLA deadline dates (7, 14, 30 days) without leaving their browser tab

**Key Tasks:**
- Open the app to confirm the exact date for a follow-up action
- Copy or note the date for use in a customer communication

---

## Product Principles

1. **Zero effort on load**: All four dates are calculated and displayed automatically — the user should never have to input today's date.
2. **Always resettable**: Any manual change can be undone; the original calculated date is always one click away.
3. **Fiori-consistent design**: Visual alignment with SAP products ensures comfortable adoption in enterprise settings.
4. **No backend, no friction**: The app runs entirely in the browser — no login, no API, no loading delay.

---

## Goals and Non-Goals

### Goals (In Scope)

- Display today's date prominently on page load
- Auto-calculate and pre-fill four date pickers: +7, +14, +21, and +30 days from today
- Allow the user to manually edit any date picker
- Provide a per-picker Reset button that restores the calculated default date
- Responsive layout styled with a SAP Fiori-inspired light blue and grey palette

### Non-Goals (Out of Scope)

- Saving or persisting selected dates between sessions
- Integration with SAP backend systems (S/4HANA, FSM, etc.)
- Push notifications or reminders
- Multi-user or team collaboration features
- Authentication or access control

---

## Requirements

### Must-Have Requirements

**REQ-01**: Auto-calculated Date Display

- **Problem to Solve**: Users do not want to calculate follow-up dates manually every time.
- **User Story**: As a business user, I need the app to automatically show today's date and the four standard follow-up dates so that I can immediately reference them without any input.
- **Acceptance Criteria**:
  - Given the app is loaded, when the page renders, then today's date is displayed prominently and four date pickers are pre-filled with +7, +14, +21, and +30 days from today.
- **Maps to Objective**: Objective 1 — Eliminate manual date calculation
- **Priority Rank**: 1

**REQ-02**: Editable Date Pickers

- **Problem to Solve**: Standard intervals do not always match exact business needs; users need to adjust individual dates.
- **User Story**: As a business user, I need to manually change any of the four date pickers so that I can set the precise date relevant to my situation.
- **Acceptance Criteria**:
  - Given a date picker is displayed, when the user selects a new date, then the date picker updates to show the selected date.
- **Maps to Objective**: Objective 2 — Allow flexible date adjustment
- **Priority Rank**: 2

**REQ-03**: Reset to Calculated Default

- **Problem to Solve**: After editing a date, users may want to restore the original calculated value.
- **User Story**: As a business user, I need a Reset button per date picker so that I can quickly restore the auto-calculated date if I made an unwanted change.
- **Acceptance Criteria**:
  - Given a date picker has been manually changed, when the user clicks Reset, then the date picker returns to the original calculated value (+7/+14/+21/+30 from today).
- **Maps to Objective**: Objective 2 — Allow flexible date adjustment
- **Priority Rank**: 3

**REQ-04**: SAP Fiori-Inspired Design

- **Problem to Solve**: The app must feel visually consistent with the SAP enterprise environment its users work in.
- **User Story**: As a business user, I need the app to use a clean light blue and grey palette so that it integrates visually with my SAP-centric workspace.
- **Acceptance Criteria**:
  - Given the app is open, when the user views the interface, then the design uses a light blue and grey colour palette with clear typography and adequate spacing consistent with SAP Fiori principles.
- **Maps to Objective**: Objective 3 — SAP Fiori visual consistency
- **Priority Rank**: 4

**REQ-05**: Responsive Layout

- **Problem to Solve**: Users may access the app from different screen sizes (desktop, tablet, mobile).
- **User Story**: As a business user, I need the app to display correctly on different devices so that I can use it wherever I am working.
- **Acceptance Criteria**:
  - Given the app is open on a mobile, tablet, or desktop browser, when the page loads, then all four date pickers and the today's date display are visible and usable without horizontal scrolling.
- **Maps to Objective**: Objective 1 and 3
- **Priority Rank**: 5

### High-Want Requirements

**REQ-06**: Date Interval Labels

- **Problem to Solve**: Users need to understand at a glance which date corresponds to which interval.
- **User Story**: As a business user, I need each date picker to be clearly labelled (e.g., "+7 Days", "+14 Days") so that I do not have to count or verify mentally.
- **Priority Rank**: 1

### Nice-to-Have Requirements

**REQ-07**: Copy to Clipboard

- **Problem to Solve**: Users often need to paste the selected date into emails or documents.
- **User Story**: As a business user, I need a copy button next to each date picker so that I can quickly paste the date elsewhere.
- **Priority Rank**: 1

**REQ-08**: Local Storage Persistence

- **Problem to Solve**: Users who adjust dates would benefit from their changes persisting across page reloads.
- **User Story**: As a business user, I need the app to remember my adjusted dates so that I can return to the app without re-entering changes.
- **Priority Rank**: 2

---

## Solution Architecture

**Architecture Overview:**
A single-page React web application, generated and hosted via Vercel v0. All date logic runs client-side in the browser. No backend, no authentication, no database.

**Key Components:**

- **Date Calculation Engine**: JavaScript/React logic that computes +7, +14, +21, +30 days from `new Date()` on page load.
- **Date Picker Components**: Four interactive date input fields, each pre-filled with the calculated date and individually resettable.
- **Today's Date Display**: A prominent header component showing the current date.
- **Reset Buttons**: One per date picker, restoring the calculated default value.
- **Fiori-Styled UI Layer**: React components styled with SAP Fiori-inspired light blue and grey palette; responsive layout.

**Integration Points:**

- None required for v1. Future enhancement could integrate with SAP Task Activity API (`sap.s4:apiResource:OP_API_TASK_SRV_0001:v1`) for task creation.

**Deployment Environments:**

- Vercel (production) — publicly accessible static web app; no environment-specific data isolation required.

---

## Milestones

### M1: App Launched

- **Description**: The date picker app is accessible and all four calculated dates are displayed correctly.
- **Achieved when**: The app loads in a browser, today's date is shown, and all four date pickers are pre-filled with the correct calculated dates.
- **Log on achievement**: `M1.achieved: app loaded successfully — today's date and all four calculated dates displayed`
- **Log on miss**: `M1.missed: app failed to load or date pickers not rendered correctly`

### M2: Date Interaction Validated

- **Description**: Users can adjust any date picker and reset it to the calculated default.
- **Achieved when**: A user successfully edits a date picker and successfully resets it to the original calculated value.
- **Log on achievement**: `M2.achieved: date picker edit and reset functionality confirmed working`
- **Log on miss**: `M2.missed: date picker edit or reset did not function as expected`

---

## Risks, Assumptions, and Dependencies

### Risks

- **No persistence**: Dates reset on each page load; users must re-enter adjustments each session. Mitigated in a future version via local storage (REQ-08).
- **Browser date formatting**: Different locales may display dates in different formats. The app should standardise on a clear, unambiguous format (e.g., DD MMM YYYY).

### Assumptions

- Users have access to a modern browser (Chrome, Edge, Safari, Firefox).
- No SAP system connection is required or expected for v1.
- The Vercel v0 deployment environment is available and accessible to the target user base.

### Dependencies

- Vercel v0 platform for app generation and hosting.
- React and standard browser date APIs for all date logic.

---

## References

- SAP Fiori Design Guidelines: https://experience.sap.com/fiori-design-web/
- SAP Task Activity API (future): `sap.s4:apiResource:OP_API_TASK_SRV_0001:v1`
- SAP Reference Business Architecture — Plan to Fulfill / BPS-356 (Plan and Schedule Service)
