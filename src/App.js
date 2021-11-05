import React, { useState } from 'react'
import { AppSectionSwticher } from './AppSectionSwitcher'
import { DemoStartingPointPage } from './components/demo-starting-point/DemoStartingPointPage'
import { MomentJsPage } from './components/momentjs/MomentJsPage'
import { DayJsPage } from './components/dayjs/DayJsPage'
import { DateFnsPage } from './components/date-fns/DateFnsPage'
import { WrappedApiPage } from './components/wrapped-api/WrappedApiPage'
import './App.css'

function App() {
  const [selectedRadioButton, setSelectedRadioButton] = useState('demo-start')

  return (
    <main className="app">
      <h1>
        <i>Clean Code</i>, Chapter 8: Boundaries - Demo
      </h1>
      <AppSectionSwticher
        selectedRadioButton={selectedRadioButton}
        setSelectedRadioButton={setSelectedRadioButton}
      />
      {selectedRadioButton === 'demo-start' && <DemoStartingPointPage />}
      {selectedRadioButton === 'momentjs' && <MomentJsPage />}
      {selectedRadioButton === 'dayjs' && <DayJsPage />}
      {selectedRadioButton === 'date-fns' && <DateFnsPage />}
      {selectedRadioButton === 'wrapped-api' && <WrappedApiPage />}
    </main>
  )
}

export default App
