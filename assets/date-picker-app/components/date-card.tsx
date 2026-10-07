'use client'

import { RotateCcw } from 'lucide-react'
import { useId, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { fromInputDate, formatLongDate } from '@/lib/date-utils'

interface DateCardProps {
  label: string
  offsetDays: number
  defaultValue: string
}

export function DateCard({ label, offsetDays, defaultValue }: DateCardProps) {
  const [value, setValue] = useState(defaultValue)
  const inputId = useId()

  const parsedDate = fromInputDate(value)
  const isModified = value !== defaultValue

  return (
    <Card className="border border-border/70 shadow-sm">
      <CardHeader className="flex-row items-center justify-between gap-2">
        <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-semibold text-accent-foreground">
            {offsetDays}
          </span>
          {label}
        </CardTitle>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setValue(defaultValue)}
          disabled={!isModified}
          aria-label={`Reset ${label} to the calculated date`}
        >
          <RotateCcw className="size-3.5" />
          Reset
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Label htmlFor={inputId} className="text-muted-foreground">
          Date
        </Label>
        <Input
          id={inputId}
          type="date"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="bg-background"
        />
        <p className="text-sm font-medium text-primary" aria-live="polite">
          {parsedDate ? formatLongDate(parsedDate) : 'Enter a valid date'}
        </p>
      </CardContent>
    </Card>
  )
}
