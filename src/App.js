import React from 'react'
import { CurrentDateTime } from './components/momentjs/CurrentDateTime'
import { DateFormatterInput } from './components/momentjs/DateFormatterInput'
import { RelativeTime } from './components/momentjs/RelativeTime'
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
