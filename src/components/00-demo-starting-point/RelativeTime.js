import React, { useState } from 'react'
import moment from 'moment'

export const RelativeTime = () => {
  const [dateString, setDateString] = useState('')

  const handleChange = (e) => {
    setDateString(e.target.value)
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
        {moment(dateString).format('MMMM DD, YYYY')} is/was{' '}
        <b>{moment(dateString).fromNow()}</b>
      </p>
    </section>
  )
}
