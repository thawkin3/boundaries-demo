import React, { useState } from 'react'
import { formatDate } from '../../DateApiWrapper'

export const DateFormatterInput = () => {
  const [dateString, setDateString] = useState('')

  const handleChange = (e) => {
    setDateString(e.target.value)
  }

  return (
    <section>
      <h2>Take a User Input and Format It</h2>
      <label htmlFor="date-formatter-input">
        Enter a date string (in just about any format!)
      </label>
      <br />
      <br />
      <input
        id="date-formatter-input"
        value={dateString}
        onChange={handleChange}
      />
      <br />
      <br />
      <p>
        <b>You entered:</b> {dateString}
      </p>
      <p>
        <b>The formatted date is:</b> {formatDate(dateString, 'MMMM DD, YYYY')}
      </p>
    </section>
  )
}
