# Specification: date-picker-app

> **Guidelines**: Read [guidelines-vercel-app.md](../guidelines-vercel-app.md) before executing ANY tasks below. Follow all constraints described there throughout execution.

## Basic Setup

- [ ] Read the project input (`product-requirements-document.md`)
- [ ] Invoke the `vercel-app` skill from `assets/date-picker-app/` to scaffold the app with Vercel v0
- [ ] Confirm `assets/date-picker-app/asset.yaml` exists with `type: vercel-app` (created by `setup-solution`) before calling the partner
- [ ] Call `create_app` exactly once with `provider="v0"`, `asset_path="assets/date-picker-app"`, and `prd_files` set to:
  - `specification/date-picker-app/specification.md`
  - `product-requirements-document.md`

## Feature: Today's Date Display (REQ-01)

- [ ] Display today's date prominently at the top of the page using a large, styled header
- [ ] Format the date clearly and unambiguously (e.g. "14 Sep 2026 — Today")
- [ ] Date must be calculated dynamically using `new Date()` on page load — never hardcoded

## Feature: Four Auto-Calculated Date Pickers (REQ-01, REQ-06)

- [ ] Render four date picker cards in a responsive grid layout (2x2 on desktop, stacked on mobile)
- [ ] Each card must display a label: "+7 Days", "+14 Days", "+21 Days", "+30 Days"
- [ ] Each date picker must be pre-filled with the correct calculated date on load:
  - +7 days from today
  - +14 days from today
  - +21 days from today
  - +30 days from today
- [ ] Date calculation must use the same `today` reference across all four pickers (no drift)

## Feature: Editable Date Pickers (REQ-02)

- [ ] Each date picker must be a standard interactive date input (`<input type="date">` or equivalent)
- [ ] Users must be able to click/tap and select any alternative date from a calendar control
- [ ] When a user selects a new date, the picker updates to display the chosen date immediately

## Feature: Reset to Calculated Default (REQ-03)

- [ ] Each date picker card must include a clearly labelled "Reset" button
- [ ] Clicking Reset restores the date picker to its original calculated value (+7/+14/+21/+30 from today)
- [ ] The reset action must recalculate from the original `today` value captured on page load

## Feature: SAP Fiori-Inspired Design (REQ-04)

- [ ] Apply a light blue and grey colour palette throughout (background, cards, buttons, text)
- [ ] Use clean, readable typography with adequate spacing (consistent with SAP Fiori principles)
- [ ] Cards should have a subtle shadow or border to visually separate them from the background
- [ ] "Reset" buttons styled as secondary action buttons (outlined or muted, not primary fill)
- [ ] Date picker inputs styled to match the overall Fiori-inspired palette

## Feature: Responsive Layout (REQ-05)

- [ ] Layout adapts for desktop (2x2 card grid), tablet (2 columns), and mobile (single column)
- [ ] All four date picker cards and the today's date header must be visible without horizontal scrolling on any device
- [ ] Adequate touch target sizes for mobile date picker and Reset button interactions

## Verification

- [ ] Verify the partner synced files back under `assets/date-picker-app/` and confirm the preview URL via `get_app_preview`
- [ ] Confirm all four date pickers load with correct pre-calculated dates on page load
- [ ] Confirm each date picker is editable (manual date selection works)
- [ ] Confirm each Reset button restores the original calculated date
- [ ] Confirm today's date header displays correctly
- [ ] Confirm layout is responsive on at least desktop and mobile viewport sizes
- [ ] Round-trip every follow-up change through `send_app_message` (one concrete change per message, under 1000 characters) — never hand-edit the v0-generated files
