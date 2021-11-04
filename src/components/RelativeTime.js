import React, { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const RelativeTime = () => {
  const [dateString, setDateString] = useState('')

  const handleChange = (e) => {
    setDateString(e.target.value)
  }

  return (
    <section>
      <h2>Relative Time</h2>
      <label htmlFor="relative-time-input">
        Enter a date string (MM/DD/YYYY)
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
        {dayjs(dateString).format('MMMM DD, YYYY')} is/was{' '}
        {dayjs(dateString).fromNow()}
      </p>
    </section>
  )
}
