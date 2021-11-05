import React, { useState } from 'react'
import { AppSectionSwticher } from './AppSectionSwitcher'
import { DemoStartingPointPage } from './components/00-demo-starting-point/DemoStartingPointPage'
import { MomentJsPage } from './components/01-momentjs/MomentJsPage'
import { DayJsPage } from './components/02-dayjs/DayJsPage'
import { DateFnsPage } from './components/03-date-fns/DateFnsPage'
import { WrappedApiPage } from './components/04-wrapped-api/WrappedApiPage'
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
