import { CalendarDays } from 'lucide-react'

import { DateCard } from '@/components/date-card'
import { addDays, formatLongDate, startOfDay, toInputDate } from '@/lib/date-utils'

const OFFSETS = [7, 14, 21, 30] as const

export default function Page() {
  const today = startOfDay(new Date())

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-primary">
            <CalendarDays className="size-5" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Date Planner
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
            {"Today: "}
            {formatLongDate(today)}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Four dates, pre-calculated from today, ready for deadlines, reminders, and
            follow-ups. Adjust any date below and reset it back to the calculated value at
            any time.
          </p>
        </header>

        <section
          aria-label="Pre-calculated dates"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {OFFSETS.map((offsetDays) => (
            <DateCard
              key={offsetDays}
              label={`+${offsetDays} Days`}
              offsetDays={offsetDays}
              defaultValue={toInputDate(addDays(today, offsetDays))}
            />
          ))}
        </section>
      </div>
    </main>
  )
}
