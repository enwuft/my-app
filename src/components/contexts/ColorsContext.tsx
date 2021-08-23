import React, { useState, createContext } from 'react'
import data from './data'

export const ColorsContext = createContext({
  colors: {},
  setColors: () => {}
})

const ColorsContextProvider = props => {
  const [colors, setColors] = useState(data.colors)
  return (
    <ColorsContext.Provider value={{ colors, setColors }}>
      {props.children}
    </ColorsContext.Provider>
  )
}

export default ColorsContextProvider
