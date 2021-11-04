import React from 'react'
import { CurrentDateTime } from './components/CurrentDateTime'
import { DateFormatterInput } from './components/DateFormatterInput'
import { RelativeTime } from './components/RelativeTime'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>
        <i>Clean Code</i>, Chapter 8: Boundaries - Demo
      </h1>
      <CurrentDateTime />
      <DateFormatterInput />
      <RelativeTime />
    </main>
  )
}

export default App
