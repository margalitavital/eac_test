import { test } from 'node:test'
import assert from 'node:assert/strict'

import {
  toInputDate,
  fromInputDate,
  addDays,
  formatLongDate,
  startOfDay,
} from '../lib/date-utils.ts'

test('toInputDate formats a date as YYYY-MM-DD', () => {
  const date = new Date(2026, 8, 10) // September 10, 2026
  assert.equal(toInputDate(date), '2026-09-10')
})

test('toInputDate pads single-digit months and days', () => {
  const date = new Date(2026, 0, 5) // January 5, 2026
  assert.equal(toInputDate(date), '2026-01-05')
})

test('fromInputDate parses a valid YYYY-MM-DD string', () => {
  const date = fromInputDate('2026-09-17')
  assert.ok(date)
  assert.equal(date.getFullYear(), 2026)
  assert.equal(date.getMonth(), 8)
  assert.equal(date.getDate(), 17)
})

test('fromInputDate returns null for malformed input', () => {
  assert.equal(fromInputDate('not-a-date'), null)
  assert.equal(fromInputDate(''), null)
  assert.equal(fromInputDate('2026/09/17'), null)
})

test('fromInputDate returns null for out-of-range calendar values', () => {
  assert.equal(fromInputDate('2026-02-30'), null)
  assert.equal(fromInputDate('2026-13-01'), null)
})

test('fromInputDate and toInputDate round-trip', () => {
  const value = '2026-12-31'
  const date = fromInputDate(value)
  assert.ok(date)
  assert.equal(toInputDate(date), value)
})

test('addDays adds a positive offset', () => {
  const start = new Date(2026, 8, 10)
  const result = addDays(start, 7)
  assert.equal(toInputDate(result), '2026-09-17')
})

test('addDays supports negative offsets', () => {
  const start = new Date(2026, 8, 10)
  const result = addDays(start, -3)
  assert.equal(toInputDate(result), '2026-09-07')
})

test('addDays rolls over month and year boundaries', () => {
  const start = new Date(2026, 11, 25) // December 25, 2026
  const result = addDays(start, 10)
  assert.equal(toInputDate(result), '2027-01-04')
})

test('addDays does not mutate the input date', () => {
  const start = new Date(2026, 8, 10)
  addDays(start, 30)
  assert.equal(toInputDate(start), '2026-09-10')
})

test('formatLongDate renders a human-readable date', () => {
  const date = new Date(2026, 8, 17)
  assert.equal(formatLongDate(date), 'September 17, 2026')
})

test('startOfDay strips the time component', () => {
  const date = new Date(2026, 8, 10, 15, 30, 45)
  const result = startOfDay(date)
  assert.equal(result.getHours(), 0)
  assert.equal(result.getMinutes(), 0)
  assert.equal(result.getSeconds(), 0)
  assert.equal(toInputDate(result), '2026-09-10')
})

test('all four offsets computed from a fixed today match the spec', () => {
  const today = startOfDay(new Date(2026, 8, 10))
  const offsets = [7, 14, 21, 30]
  const expected = ['2026-09-17', '2026-09-24', '2026-10-01', '2026-10-10']
  const actual = offsets.map((days) => toInputDate(addDays(today, days)))
  assert.deepEqual(actual, expected)
})
