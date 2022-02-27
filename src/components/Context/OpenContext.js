import React, { useState, createContext } from 'react'

const OpenContext = createContext()
const OpenProvider = ({ children }) => {
    const [open, setOpen] = useState('unOpen')

    const toggleOpen = () => {
        setOpen(open === 'unOpen' ? 'open' : 'unOpen')
    }
    const value = {
        open,
        toggleOpen
    }
    return (
        <OpenContext.Provider value={value}>
            {children}
        </OpenContext.Provider >
    )
}
export { OpenProvider, OpenContext }  