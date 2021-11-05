import React from 'react'
import { CurrentDateTime } from './CurrentDateTime'
import { DateFormatterInput } from './DateFormatterInput'
import { RelativeTime } from './RelativeTime'

export const WrappedApiPage = () => (
  <>
    <CurrentDateTime />
    <DateFormatterInput />
    <RelativeTime />
  </>
)
