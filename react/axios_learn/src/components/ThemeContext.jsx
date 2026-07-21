import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState('light')

    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'))
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div
                style={{
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                minHeight: "100vh",
                }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export{ThemeContext,ThemeProvider}