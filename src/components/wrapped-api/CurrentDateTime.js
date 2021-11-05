import React, { useEffect, useState } from 'react'
import { formatDate } from '../../DateApiWrapper'

export const CurrentDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  function refreshClock() {
    setCurrentTime(new Date())
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <section>
      <h2>Current Date and Time</h2>
      <p>{formatDate(currentTime, 'MMMM DD, YYYY HH:mm:ss')}</p>
    </section>
  )
}
