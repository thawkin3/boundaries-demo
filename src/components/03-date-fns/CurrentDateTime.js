import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

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
      <p>{format(new Date(currentTime), 'MMMM dd, yyyy HH:mm:ss')}</p>
    </section>
  )
}
