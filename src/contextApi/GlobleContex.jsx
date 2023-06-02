import { useState } from "react"
import Contex from "./Contex"

const GlobleCotext = ({children}) => {
    const [Room, setRoom] = useState('')
    const [Guest, setGuest] = useState('')
    const [PriceRange, setPriceRange] = useState('')

    return (
      <Contex.Provider value={{Room, setRoom, Guest, setGuest, PriceRange, setPriceRange}}>{children}</Contex.Provider>
    )
  }

export default GlobleCotext;  