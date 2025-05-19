import { createContext, useContext, useState, useEffect, Children } from "react";

const AppContext = createContext()

export const AppProvider = ({ Children }) => {
    const greeting = 'hello'

    return <AppContext.Provider value={{ greeting }}>{Children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)