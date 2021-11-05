import React, { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'

export const RelativeTime = () => {
  const [dateString, setDateString] = useState('')

  const handleChange = (e) => {
    setDateString(e.target.value)
  }

  const formatDate = () => {
    try {
      return format(new Date(dateString), 'MMMM dd, yyyy')
    } catch (e) {
      return 'Invalid Date'
    }
  }

  const formatRelativeTime = () => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true })
    } catch (e) {
      return 'NaN'
    }
  }

  return (
    <section>
      <h2>Relative Time</h2>
      <label htmlFor="relative-time-input">
        Enter a date string (in just about any format!)
      </label>
      <br />
      <br />
      <input
        id="relative-time-input"
        value={dateString}
        onChange={handleChange}
      />
      <br />
      <br />
      <p>
        {formatDate()} is/was <b>{formatRelativeTime()}</b>
      </p>
    </section>
  )
}
