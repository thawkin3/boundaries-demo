import React from 'react'

export const AppSectionSwticher = ({
  selectedRadioButton,
  setSelectedRadioButton,
}) => {
  return (
    <section>
      <h2>Choose your date library for the demo</h2>
      <input
        type="radio"
        id="demo-start"
        name="dateLibrary"
        value="demo-start"
        checked={selectedRadioButton === 'demo-start'}
        onChange={() => setSelectedRadioButton('demo-start')}
      />
      <label htmlFor="demo-start">Demo Starting Point (Moment.js)</label>
      <br />
      <input
        type="radio"
        id="momentjs"
        name="dateLibrary"
        value="momentjs"
        checked={selectedRadioButton === 'momentjs'}
        onChange={() => setSelectedRadioButton('momentjs')}
      />
      <label htmlFor="momentjs">Moment.js</label>
      <br />
      <input
        type="radio"
        id="dayjs"
        name="dateLibrary"
        value="dayjs"
        checked={selectedRadioButton === 'dayjs'}
        onChange={() => setSelectedRadioButton('dayjs')}
      />
      <label htmlFor="dayjs">Day.js</label>
      <br />
      <input
        type="radio"
        id="date-fns"
        name="dateLibrary"
        value="date-fns"
        checked={selectedRadioButton === 'date-fns'}
        onChange={() => setSelectedRadioButton('date-fns')}
      />
      <label htmlFor="date-fns">date-fns</label>
      <br />
      <input
        type="radio"
        id="wrapped-api"
        name="dateLibrary"
        value="wrapped-api"
        checked={selectedRadioButton === 'wrapped-api'}
        onChange={() => setSelectedRadioButton('wrapped-api')}
      />
      <label htmlFor="wrapped-api">Wrapped API</label>
    </section>
  )
}
